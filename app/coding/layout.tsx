import CodingNavbar from "@/components/coding/coding-navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AlgoVerse - Coding",
  description:
    "Algoverse is an interactive platform for practicing coding problems, improving data structures and algorithms (DSA) skills, and preparing for technical interviews. Solve challenges, enhance problem-solving abilities, and level up your coding expertise in a structured environment.",
};

const CodingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <CodingNavbar />
      {children}
    </>
  );
};

export default CodingLayout;
