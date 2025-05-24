/* eslint-disable @typescript-eslint/no-explicit-any */
import { currentProfile } from "@/lib/current-profile";
import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { formattedArgs, code, language, version } = await req.json();
    const profile = await currentProfile();

    if (!profile) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!formattedArgs || !code) {
      return new NextResponse("Bad Request: Missing testCases or code", {
        status: 400,
      });
    }

    console.log(formattedArgs);

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
      console.log(response.data.run.stderr);
      return NextResponse.json("Error");
    }
    console.log(response);

    return NextResponse.json(response.data.run.output.split("\n")[0]);
  } catch (error) {
    console.log("[CODING_POST_RUN]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
