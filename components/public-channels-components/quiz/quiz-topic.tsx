"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { quizTopics } from "@/datas/quiz/quiz-data";
import { BookOpen, Code, Brain, Lightbulb, Calculator } from "lucide-react";

const topicIcons: Record<string, React.ReactNode> = {
  "aptitude": <Calculator className="h-4 w-4" />,
  "logical-reasoning": <Brain className="h-4 w-4" />,
  "verbal-ability": <BookOpen className="h-4 w-4" />,
  "dsa": <Code className="h-4 w-4" />,
  default: <Lightbulb className="h-4 w-4" />
};

const topicDescriptions: Record<string, string> = {
  "aptitude": "Test your mathematical and analytical skills with number problems and puzzles",
  "logical-reasoning": "Challenge your logical thinking with pattern recognition and reasoning problems",
  "verbal-ability": "Improve your language skills with vocabulary, grammar, and comprehension tests",
  "dsa": "Practice data structures and algorithms to enhance your coding skills"
};

export const QuizTopic = () => {
  const router = useRouter();

  function handlePushToQuiz(pathName: string) {
    router.push(`/quiz/${pathName}`);
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
      {quizTopics.map((data, i) => {
        const icon = topicIcons[data.pathName] || topicIcons.default;
        const description = topicDescriptions[data.pathName] || `Test your ${data.name.toLowerCase()} skills with interactive questions`;
        
        return (
          <Button
            key={i}
            variant="outline"
            size="lg"
            className="h-auto py-6 flex flex-col items-center justify-center gap-2 group transition-all duration-300 
              hover:bg-blue-50/50 dark:hover:bg-blue-900/30 hover:border-blue-200 dark:hover:border-blue-800
              bg-zinc-400 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700"
            onClick={() => handlePushToQuiz(data.pathName)}
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full 
              bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400
              group-hover:bg-blue-100 dark:group-hover:bg-blue-800/50 
              transition-colors">
              {icon}
            </div>
            <span className="text-lg font-medium text-foreground">{data.name}</span>
          </Button>
        );
      })}
    </div>
  );
};
