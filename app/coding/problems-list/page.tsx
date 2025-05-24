import { ProblemsListTable } from "@/components/coding/problems-list-table";
import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";

const ProblemsListPage = async () => {
  const profile = await currentProfile();

  const problemListData = await db.problem.findMany({
    select: {
      id: true,
      problemId: true,
      problemNo: true,
      title: true,
      difficulty: true,
      videoId: true,
    },
    orderBy: {
      problemNo: "asc",
    },
  });

  const userSolvedProblems = await db.userProblemDetails.findMany({
    where: {
      userId: profile?.userId,
    },
    select: {
      problemId: true,
    },
  });

  return (
    <main className="w-fit mx-auto px-4 pb-4">
      <h1 className="text-2xl text-center mt-10 font-medium mb-5">
        🧠 Think. Code. Optimize. Repeat!
      </h1>
      <ProblemsListTable
        problemsList={problemListData}
        userSolvedProblems={userSolvedProblems}
      />
    </main>
  );
};

export default ProblemsListPage;
