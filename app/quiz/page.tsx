import { QuizTopic } from "@/components/public-channels-components/quiz/quiz-topic";
import { Sparkles } from "lucide-react";

const QuizPage = () => {
  return (
    <div className="min-h-screen pt-[90px] flex flex-col items-center justify-center 
      bg-gradient-to-br from-background via-blue-50/30 to-purple-50/30 
      dark:from-background dark:via-blue-950/20 dark:to-purple-950/20 
      px-4 py-12">
      <div className="max-w-3xl w-full space-y-8 text-center">
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-2">
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Welcome to EchoVerse Quiz
            </h1>
            <Sparkles className="h-8 w-8 text-primary animate-pulse" />
          </div>
          <p className="text-lg text-muted-foreground">
            Challenge yourself with our interactive quizzes designed to enhance your skills.
            Select a topic below to begin your learning journey.
          </p>
        </div>
        
        <div className="p-8 rounded-xl 
          bg-zinc-600 dark:bg-slate-900/60 
          backdrop-blur-sm border border-slate-200 dark:border-slate-800 
          shadow-sm dark:shadow-md dark:shadow-black/10">
          <h2 className="text-xl font-semibold mb-6 text-foreground">Available Topics</h2>
          <QuizTopic />
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
