/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRef, useState } from "react";
import _ from "lodash";
import Split from "react-split";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
// import { vscodeDark, vscodeDarkStyle } from "@uiw/codemirror-theme-vscode";

import { PlaygroundNav } from "@/components/coding/workspace/playground/playground-nav";
import { EditorFooter } from "@/components/coding/workspace/playground/editor-footer";
import { Problem } from "@/components/coding/mockData/problems";
import { cn } from "@/lib/utils";

type codeLang = "javascript" | "python";

export const Playground = ({ problem }: { problem: Problem }) => {
  const [language, setLanguage] = useState<codeLang>("javascript");
  const [currentTestCase, setCurrentTestcase] = useState<number>(0);
  const [output, setOutput] = useState<any[]>([]);
  const editorRef = useRef(problem.functionSignature[language]);

  const codePass: boolean[] = [];
  let isAcceptedTestcases: boolean = false;

  function handleLanguageChange(lang: codeLang) {
    setLanguage(lang);
    editorRef.current = problem.functionSignature[lang];
    setOutput([]);
  }

  function handleChange(value: string): void {
    editorRef.current = value;
  }

  function handleOutput(output: any) {
    setOutput(output);
  }

  console.log(problem.testCases[1].expectedOutput);
  if (output.length > 0) {
    output.forEach((data, i) => {
      codePass.push(_.isEqual(data, problem.testCases[i].expectedOutput));
    });
    isAcceptedTestcases = codePass.every((result) => result === true);
  }
  console.log(output);
  console.log(codePass);

  return (
    <div className="flex flex-col relative">
      <PlaygroundNav lang={language} setLang={handleLanguageChange} />

      <Split
        className="split h-full flex flex-col"
        direction="vertical"
        sizes={[60, 40]}
        minSize={100}
        gutterSize={5}
      >
        <div className="w-full overflow-auto">
          <CodeMirror
            // key={language}
            value={editorRef.current}
            // height="100%"
            theme={"dark"}
            extensions={[language === "javascript" ? javascript() : python()]}
            style={{ fontSize: 16 }}
            onChange={handleChange}
          />
        </div>
        <div className="w-full h-full px-5 overflow-y-scroll mb-[72px]">
          {/* Testcases heading */}
          <div className="flex h-10 items-center space-x-6">
            <div className="relative flex h-full justify-center items-center gap-4 cursor-pointer">
              <div className="text-sm font-medium leading-5 underline">
                Testcases{" "}
              </div>
              {isAcceptedTestcases && (
                <span className="text-[#2CB458] text-lg font-semibold">
                  Accepted!
                </span>
              )}
            </div>
          </div>

          <div className="flex gap-2">
            {problem.examples.map((_, i) => {
              return (
                <button
                  key={i}
                  className={cn(
                    "font-medium items-center transition-all focus:outline-none inline-flex relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap dark:text-white text-black hover:bg-zinc-200 dark:hover:text-black",
                    currentTestCase === i && "bg-zinc-300 dark:bg-zinc-600",
                    codePass[i] &&
                      output.length > 0 &&
                      "dark:text-[#2CB458] dark:hover:text-[#2CB458] text-[#2CB458]",
                    !codePass[i] &&
                      output.length > 0 &&
                      "dark:text-red-500 dark:hover:text-red-500 text-red-500"
                  )}
                  onClick={() => setCurrentTestcase(i)}
                >
                  Case {i + 1}
                </button>
              );
            })}
          </div>

          <div className="font-semibold mb-[52px]">
            <p className="text-sm font-medium mt-4">Input:</p>
            <div className="w-full cursor-text rounded-lg border px-3 py-[10px] bg-zinc-300 dark:bg-zinc-600 border-transparent mt-2">
              {problem?.examples[currentTestCase].input}
            </div>
            <p className="text-sm font-medium mt-4">Output:</p>
            <div className="w-full cursor-text rounded-lg border px-3 py-[10px] bg-zinc-300 dark:bg-zinc-600 border-transparent mt-2">
              {problem?.examples[currentTestCase].output}
            </div>
            {output.length > 0 && (
              <>
                <p className="text-sm font-medium mt-4">Your Output:</p>
                <div className="w-full cursor-text rounded-lg border px-3 py-[10px] bg-zinc-300 dark:bg-zinc-600 border-transparent mt-2">
                  {JSON.stringify(output[currentTestCase])}
                </div>
              </>
            )}
          </div>
        </div>
      </Split>
      <EditorFooter
        isAccepted={isAcceptedTestcases}
        codePassed={codePass}
        editorRef={editorRef}
        lang={language}
        testCases={problem.testCases}
        setOutput={handleOutput}
        isNotParse={problem.isNotParse}
        id={problem.id}
        problemId={problem.problemId}
      />
    </div>
  );
};
