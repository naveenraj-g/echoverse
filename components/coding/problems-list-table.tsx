"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import Link from "next/link";
// import { problemsList } from "./mockData/problems";
import { CircleCheckBig } from "lucide-react";
import { AiFillYoutube } from "react-icons/ai";
import { useModal } from "@/hooks/use-modal-store";

type Props = {
  id: string;
  problemId: string;
  title: string;
  difficulty: string;
  videoId: string | null;
  problemNo: number;
}[];

export const ProblemsListTable = ({
  problemsList,
  userSolvedProblems,
}: {
  problemsList: Props;
  userSolvedProblems: { problemId: string }[];
}) => {
  const { onOpen } = useModal();
  console.log(userSolvedProblems);
  return (
    <div>
      <Table className="text-sm text-left w-full max-w-[1200px] mx-auto">
        <TableHeader className="text-xs uppercase border-b">
          <TableRow className="border-b border-zinc-500">
            <TableHead className="text-zinc-400">STATUS</TableHead>
            <TableHead className="text-zinc-400">TITLE</TableHead>
            <TableHead className="text-zinc-400">DIFFICULTY</TableHead>
            {/* <TableHead className="text-zinc-400">CATEGORY</TableHead> */}
            <TableHead className="text-zinc-400">SOLUTION</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {problemsList.map((problem) => {
            const difficultColor =
              problem.difficulty.toLowerCase() === "easy"
                ? "text-dark-green-s"
                : problem.difficulty.toLowerCase() === "medium"
                ? "text-dark-yellow"
                : "text-dark-pink";

            const solvedProblem = userSolvedProblems.find(
              (solvedProb) => solvedProb.problemId === problem.id
            );

            return (
              <TableRow
                key={problem.id}
                className="border-b dark:border-zinc-600/50"
              >
                <TableCell className="text-dark-green-s">
                  {solvedProblem && <CircleCheckBig className="w-4 h-4" />}
                </TableCell>
                <TableCell className="max-w-[350px]">
                  <Link
                    href={`/coding/problems-list/${problem.id}`}
                    className="hover:text-blue-600"
                  >
                    {problem.problemNo}. {problem.title}
                  </Link>
                </TableCell>
                <TableCell className={difficultColor}>
                  {problem.difficulty}
                </TableCell>
                {/* <TableCell className="max-w-[200px]">
                  {problem.category}
                </TableCell> */}
                <TableCell>
                  {problem.videoId ? (
                    <AiFillYoutube
                      onClick={() =>
                        onOpen("youtubeSolution", { videoId: problem.videoId })
                      }
                      fontSize="20"
                      className="cursor-pointer hover:text-red-600"
                    />
                  ) : (
                    <p className="text-zinc-400 text-sm">Comming soon</p>
                  )}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};
