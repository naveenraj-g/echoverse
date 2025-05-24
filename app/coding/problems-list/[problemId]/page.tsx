import { Workspace } from "@/components/coding/workspace/work-space";
import { currentProfile } from "@/lib/current-profile";
// import { problemsList } from "@/components/coding/mockData/problems";
import { db } from "@/lib/db";

const ProblemIdPage = async ({ params }: { params: { problemId: string } }) => {
  // const problem = problemsList.find(
  //   (problem) => problem.problemId === params.problemId
  // );

  const profile = await currentProfile();

  const problem = await db.problem.findFirst({
    where: {
      id: params.problemId,
    },
  });

  const [userSolvedProblem] = await db.userProblemDetails.findMany({
    where: {
      userId: profile?.userId,
      problemId: params.problemId,
    },
    select: {
      completed: true,
    },
  });

  return (
    <div className="h-[calc(100vh-56px)] overflow-hidden dark:bg-[#282828]">
      <Workspace problem={problem} isSolved={userSolvedProblem?.completed} />
    </div>
  );
};

export default ProblemIdPage;
