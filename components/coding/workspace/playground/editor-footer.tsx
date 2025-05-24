"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { Loader2, Play } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
// import { BsChevronUp } from "react-icons/bs";

const LANGUAGE_VERSIONS = {
  javascript: "18.15.0",
  python: "3.10.0",
};

type testCasesProps = [
  { input: number[][] | number[]; expectedOutput: number[] },
  { input: number[][] | number[]; expectedOutput: number[] },
  { input: number[][] | number[]; expectedOutput: number[] }
];

export const EditorFooter = ({
  lang,
  editorRef,
  testCases,
  setOutput,
  isNotParse,
  isAccepted,
  codePassed,
  id,
  problemId,
}: {
  lang: "javascript" | "python";
  editorRef: any;
  testCases: testCasesProps;
  setOutput: () => void;
  isNotParse: boolean;
  isAccepted: boolean;
  codePassed: boolean[];
  id: string;
  problemId: string;
}) => {
  const [isRunLoading, setIsRunLoading] = useState<boolean>(false);
  const [isSubmitLoading, setIsSubmitLoading] = useState<boolean>(false);

  const router = useRouter();

  const handleRunCode = async () => {
    setIsRunLoading(true);
    const results: any[] = [];
    for (const testCase of testCases) {
      const formattedArgs = testCase.input.map((arg: any) =>
        JSON.stringify(arg)
      );
      try {
        const result = await axios.post("/api/coding/run", {
          // code: editorRef.current,
          code: editorRef.current,
          formattedArgs,
          language: lang,
          version: LANGUAGE_VERSIONS[lang],
        });
        console.log(result.data);
        if (isNotParse) {
          results.push(result.data);
        } else {
          results.push(JSON.parse(result.data));
        }
      } catch (error) {
        console.log(error);
        results.push("ERROR");
      }
      await new Promise((resolve) => setTimeout(resolve, 400));
    }
    setIsRunLoading(false);
    setOutput(results);
    console.log(results);
  };

  const handleSubmitCode = async () => {
    if (!isAccepted && codePassed.length !== testCases.length) {
      toast.error("Run and pass the test cases!", {
        duration: 1500,
        style: {
          background: "#ffcc00",
          color: "#333",
          width: "fit-content",
        },
        position: "top-right",
      });
      return;
    }
    setIsSubmitLoading(true);
    try {
      const { data } = await axios.post("/api/coding/submit", {
        code: editorRef.current,
        language: lang,
        version: LANGUAGE_VERSIONS[lang],
        testCases,
        isNotParse,
        problemId: id,
        problemName: problemId,
      });

      if (data.isSuccess) {
        toast.success(data.message, {
          duration: 1500,
          style: {
            background: "#16a34a",
            color: "#fff",
            width: "fit-content",
          },
          position: "top-right",
        });
        router.refresh();
      } else {
        toast.error(data.message, {
          duration: 1500,
          style: {
            background: "#ffcc00",
            color: "#333",
            width: "fit-content",
          },
          position: "top-right",
        });
      }
      setIsSubmitLoading(false);
    } catch (err) {
      console.log(err);
      toast.error(err.message, {
        duration: 1500,
        style: {
          background: "#dc2626",
          color: "#fff",
          width: "fit-content",
        },
        position: "top-right",
      });
    } finally {
      setIsSubmitLoading(false);
    }
  };

  return (
    <div className="flex bg-white shadow dark:bg-dark-layer-1 absolute bottom-0 z-10 w-full">
      <div className="mx-5 my-[10px] flex items-center  w-full">
        {/* <div className="mr-2 flex flex-1 flex-nowrap items-center space-x-4">
          <button className="px-3 py-1.5 font-medium items-center transition-all inline-flex bg-zinc-400/80 dark:bg-dark-fill-3 text-sm dark:hover:bg-dark-fill-2 dark:text-dark-label-2 rounded-lg pl-3 pr-2">
            Console
            <div className="ml-1 transform transition flex items-center">
              <BsChevronUp className="fill-gray-6 mx-1 fill-black/80 dark:fill-dark-gray-6" />
            </div>
          </button>
        </div> */}
        {(isRunLoading || isSubmitLoading) && (
          <Loader2 className="animate-spin h-6 w-6" />
        )}
        <div className="ml-auto flex items-center space-x-4">
          <button
            className="px-3 py-1.5 text-sm font-medium items-center whitespace-nowrap transition-all focus:outline-none inline-flex bg-zinc-400/80 dark:bg-dark-fill-3  dark:hover:bg-dark-fill-2 dark:text-dark-label-2 rounded-lg"
            onClick={handleRunCode}
            disabled={isRunLoading || isSubmitLoading}
          >
            {isRunLoading ? (
              "Running..."
            ) : (
              <>
                <Play className="w-4 h-4 mr-1" />
                Run
              </>
            )}
          </button>
          <button
            className="px-3 py-1.5 font-medium items-center transition-all focus:outline-none inline-flex text-sm text-white bg-dark-green-s hover:bg-green-3 rounded-lg"
            disabled={isRunLoading || isSubmitLoading}
            onClick={handleSubmitCode}
          >
            {isSubmitLoading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
};
