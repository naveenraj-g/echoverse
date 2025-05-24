import { Metadata } from "next";

export const metadata: Metadata = {
  title: "EchoVerse - Quiz",
  description:
    "Boost your problem-solving skills with our interactive quiz platform! Practice aptitude, logical reasoning, and verbal ability questions designed for competitive exams, job interviews, and personal skill development. Take quizzes, track progress, and improve your analytical thinking with structured challenges.",
};

const QuizLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default QuizLayout;
