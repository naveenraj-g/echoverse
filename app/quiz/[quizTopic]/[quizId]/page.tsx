import { QuizStart } from "@/components/public-channels-components/quiz/quiz-start";
import { db } from "@/lib/db";

const QuizIdPage = async ({ params }: { params: { quizId: string } }) => {
  const currentQuiz = await db.quiz.findFirst({
    where: {
      id: params.quizId,
    },
  });

  return (
    <>
      <QuizStart data={currentQuiz} />
    </>
  );
};

export default QuizIdPage;
