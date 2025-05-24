/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import { executeCode } from "@/components/code-playground/api";
import { useState } from "react";
import { toast } from "sonner";

export const Output = ({
  editorRef,
  language,
}: {
  editorRef: any;
  language: string;
}) => {
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;

    try {
      setIsLoading(true);
      const { run: result } = await executeCode(language, sourceCode);
      setOutput(result.output.split("\n"));
      result.stderr ? setError(true) : setError(false);
    } catch (err) {
      toast.error("An error occurred.", {
        duration: 1000,
        style: {
          background: "#dc2626",
          color: "#fff",
          width: "fit-content",
        },
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <p className="mb-2 text-lg">Output</p>
      <Button
        variant="outline"
        className="mb-4 text-green-100 border-green-100 hover:text-green-200 hover:border-green-200"
        onClick={runCode}
      >
        {isLoading ? "Exectuing..." : "Run Code"}
      </Button>
      <div
        className={`h-[75vh] p-2 border rounded overflow-scroll ${
          error ? "border-red-500 text-red-400" : "border-[#333]"
        }`}
      >
        {output ? (
          output.map((line, i) => <p key={i}>{line}</p>)
        ) : (
          <p className="text-gray-400">
            {'click "Run Code" to see the output here.'}
          </p>
        )}
      </div>
    </div>
  );
};
