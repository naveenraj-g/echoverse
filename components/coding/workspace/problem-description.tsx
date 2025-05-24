"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { BsCheck2Circle } from "react-icons/bs";
import { TiStarOutline } from "react-icons/ti";

import { Problem } from "@/components/coding/mockData/problems";

export const ProblemDescription = ({
  problem,
  isSolved,
}: {
  problem: Problem;
  isSolved: boolean;
}) => {
  const difficultColor =
    problem.difficulty.toLowerCase() === "easy"
      ? "text-dark-green-s bg-olive"
      : problem.difficulty.toLowerCase() === "medium"
      ? "text-dark-yellow bg-yellow-500"
      : "text-dark-pink bg-red-500";
  return (
    <ScrollArea className="h-full">
      <div className="flex h-11 w-full items-center pt-2 mb-2 text-white overflow-x-hidden">
        <div
          className={
            "bg-zinc-700 rounded-[5px] ml-5 px-5 py-[10px] text-xs cursor-pointer"
          }
        >
          Description
        </div>
      </div>

      <div className="flex px-0 py-4 h-full">
        <div className="px-5">
          {/* Problem heading */}
          <div className="w-full">
            <div className="flex space-x-4">
              <div className="flex-1 mr-2 text-lg font-medium">
                {problem.problemNo}. {problem?.title}
              </div>
            </div>
            <div className="flex items-center mt-3">
              <div
                className={`inline-block rounded-[21px] bg-opacity-[.15] px-2.5 py-1 text-xs font-medium capitalize ${difficultColor}`}
              >
                {problem?.difficulty}
              </div>
              {isSolved && (
                <div className="flex items-center gap-2 p-[3px] ml-4 text-lg transition-colors duration-200 text-green-s text-dark-green-s">
                  <BsCheck2Circle />
                  <span className="text-sm">Solved!</span>
                </div>
              )}
              {/* <div className="flex items-center cursor-pointer hover:bg-dark-fill-3 space-x-1 rounded p-[3px]  ml-4 text-lg transition-colors duration-200 text-dark-gray-6">
                <AiFillLike />
                <span className="text-xs">{problem?.likes}</span>
              </div> */}
              {/* <div className="flex items-center cursor-pointer hover:bg-dark-fill-3 space-x-1 rounded p-[3px]  ml-4 text-lg transition-colors duration-200 text-green-s text-dark-gray-6">
                <AiFillDislike />
                <span className="text-xs">{problem?.dislikes}</span>
              </div> */}
              {/* <div className="cursor-pointer hover:bg-dark-fill-3  rounded p-[3px]  ml-4 text-xl transition-colors duration-200 text-green-s text-dark-gray-6 ">
                <TiStarOutline />
              </div> */}
            </div>

            {/* Problem Statement(paragraphs) */}
            <div className="text-sm">
              {problem?.description.map((data, i) => (
                <pre key={i} className="mt-3">
                  {data}
                </pre>
              ))}
            </div>

            {/* Examples */}
            <div className="mt-4">
              {problem?.examples.map((example, i) => (
                <div key={i}>
                  <p className="font-medium">Example {i + 1}: </p>
                  <div className="example-card">
                    <pre className="bg-zinc-300 dark:bg-zinc-600">
                      <strong>Input: </strong> {example.input}
                      <br />
                      <strong>Output:</strong> {example.output} <br />
                      {example?.explanation && (
                        <>
                          <strong>Explanation:</strong> {example?.explanation}
                        </>
                      )}
                    </pre>
                  </div>
                </div>
              ))}
            </div>

            {/* Constraints */}
            <div className="my-5">
              <div className="text-sm font-medium">Constraints:</div>
              <ul className="ml-5 list-disc">
                {problem?.constraints.map((constraint, i) => (
                  <li className="mt-1" key={i}>
                    <code>{constraint}</code>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
};
