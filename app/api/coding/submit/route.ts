/* eslint-disable @typescript-eslint/no-explicit-any */
import { currentProfile } from "@/lib/current-profile";
import axios from "axios";
import { NextResponse } from "next/server";
import _ from "lodash";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const {
      code,
      language,
      version,
      testCases,
      isNotParse,
      problemId,
      problemName,
    } = await req.json();
    const profile = await currentProfile();

    if (!profile) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (
      !code ||
      !language ||
      !version ||
      !testCases ||
      !problemId ||
      !problemName
    ) {
      return new NextResponse("Bad Request: Missing datas", {
        status: 400,
      });
    }

    const results: any[] = [];
    for (const testCase of testCases) {
      let resData: any;
      const formattedArgs = testCase.input.map((arg: any) =>
        JSON.stringify(arg)
      );
      console.log("testcases running...");
      try {
        const response = await axios.post(
          "https://emkc.org/api/v2/piston/execute",
          {
            language,
            version,
            files: [{ content: code }],
            args: formattedArgs,
          }
        );

        if (!response.data || !response.data.run) {
          throw new Error("Invalid response from Piston API");
        }

        if (response.data.run.stderr) {
          resData = "Error";
        } else {
          resData = response.data.run.output.split("\n")[0];
        }

        if (isNotParse) {
          results.push(resData);
        } else {
          results.push(JSON.parse(resData));
        }
      } catch (error) {
        console.log(error);
        results.push("ERROR");
      }
      await new Promise((resolve) => setTimeout(resolve, 400));
    }

    const allPassed = results.every((result, index) => {
      return _.isEqual(result, testCases[index].expectedOutput);
    });

    if (!allPassed) {
      return NextResponse.json({
        isSuccess: false,
        message: "Some test cases failed.",
      });
    }

    if (allPassed) {
      const existingEntry = await db.userProblemDetails.findFirst({
        where: {
          userId: profile.userId,
          problemId,
        },
      });

      if (existingEntry) {
        return NextResponse.json({
          isSuccess: false,
          message: "Already Submitted...",
        });
      }

      if (!existingEntry) {
        await db.userProblemDetails.create({
          data: {
            userId: profile.userId,
            problemId,
            problemName,
            completed: true,
          },
        });
      }

      return NextResponse.json({
        isSuccess: true,
        message: "Submitted Successfully!",
      });
    }
  } catch (error) {
    console.log("[CODING_POST_SUBMIT]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
