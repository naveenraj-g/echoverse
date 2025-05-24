import { QuizList } from "@/components/public-channels-components/quiz/quiz-list";
import { db } from "@/lib/db";

const QuizTopicPage = async ({ params }: { params: { quizTopic: string } }) => {
  const quizData = await db.quiz.findMany({
    where: {
      topic: params.quizTopic,
    },
    select: {
      id: true,
      topic: true,
      quizTopic: true,
      totalPoints: true,
    },
  });

  return (
    <div className="text-center my-4">
      <h1>{params.quizTopic.toUpperCase()} Quiz Section</h1>
      <p>Please select a topic to participate in quiz</p>
      <div className="p-4">
        <QuizList datas={quizData} isRouter={true} />
      </div>
    </div>
  );
};

export default QuizTopicPage;
