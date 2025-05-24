"use client";

import Split from "react-split";
import { ProblemDescription } from "@/components/coding/workspace/problem-description";
import { Playground } from "@/components/coding/workspace/playground/playground";
import { Problem } from "@/components/coding/mockData/problems";

export const Workspace = ({
  problem,
  isSolved,
}: {
  problem: Problem;
  isSolved: boolean;
}) => {
  return (
    <Split className="split" minSize={0} gutterSize={5}>
      <ProblemDescription problem={problem} isSolved={isSolved} />
      <Playground problem={problem} />
    </Split>
  );
};
