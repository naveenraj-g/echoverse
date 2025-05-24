"use client";

import { Button } from "@/components/ui/button";
import axios from "axios";
import { Check, Loader2, Trophy, BookOpen } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

type QuizListProps = {
  id: string;
  topic: string;
  quizTopic: string;
  totalPoints: number;
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  hover: { scale: 1.01 },
  tap: { scale: 0.98 },
};

const buttonVariants: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: { type: "spring", stiffness: 400, damping: 10 },
  },
  tap: { scale: 0.95 },
};

const loadingContainerVariants: Variants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const QuizList = ({
  datas,
  isRouter,
}: {
  datas: QuizListProps[];
  isRouter?: boolean;
}) => {
  const router = useRouter();
  const [currentUserQuizData, setCurrentUserQuizData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function handleGoToQuizStart(quizTopic: string, quizId: string) {
    const url = `/quiz/${quizTopic}/${quizId}`;
    if (isRouter) {
      router.push(url);
      return;
    }
    window.open(url, "_blank");
  }

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/api/quiz");
        setCurrentUserQuizData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    const onFocus = async () => {
      try {
        const { data } = await axios.get("/api/quiz");
        setCurrentUserQuizData(data);
      } catch (error) {
        console.log(error);
      }
    };

    window.addEventListener("focus", onFocus);

    return () => {
      window.removeEventListener("focus", onFocus);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        // <motion.div
        //   className="flex flex-col flex-1 justify-center items-center mt-10"
        //   variants={loadingContainerVariants}
        //   initial="initial"
        //   animate="animate"
        //   exit={{ opacity: 0, y: 20, transition: { duration: 0.2 } }}
        // >
        //   <div className="relative">
        //     <Loader2 className="h-10 w-10 text-primary animate-spin my-4" />
        //     <motion.div
        //       className="absolute inset-0"
        //       animate={{
        //         scale: [1, 1.2, 1],
        //         opacity: [0.5, 0.8, 0.5],
        //       }}
        //       transition={{
        //         repeat: Infinity,
        //         duration: 2,
        //         ease: "easeInOut"
        //       }}
        //     >
        //       <Loader2 className="h-10 w-10 text-primary/20" />
        //     </motion.div>
        //   </div>
        //   <p className="text-sm text-muted-foreground mt-2">
        //     Loading quizzes...
        //   </p>
        // </motion.div>
        <div>
          <Loader2 className="h-10 w-10 text-primary animate-spin my-4 mx-auto" />
          <span>Loading quizzes...</span>
        </div>
      ) : (
        <motion.ul
          className="list-none space-y-4 py-2"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {datas.map((data, index) => {
            const isCompleted = currentUserQuizData.find(
              (userData) => userData.quizId === data.id
            );

            return (
              <motion.li
                key={data.id}
                variants={itemVariants}
                custom={index}
                layout
              >
                <motion.div
                  className={`rounded-lg text-left p-6 max-w-[1250px] w-full mx-auto flex justify-between items-center backdrop-blur-sm border
                    ${
                      isCompleted
                        ? "bg-primary/5 dark:bg-primary/10 border-primary/20 dark:border-primary/30"
                        : "bg-background/80 dark:bg-card/40 border-border/50 dark:border-border/30"
                    }
                    dark:shadow-md dark:shadow-black/10`}
                  initial={{ borderRadius: 8 }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-full 
                      ${
                        isCompleted
                          ? "bg-primary/10 dark:bg-primary/20"
                          : "bg-secondary/10 dark:bg-secondary/20"
                      }`}
                    >
                      {isCompleted ? (
                        <Trophy className="h-6 w-6 text-primary" />
                      ) : (
                        <BookOpen className="h-6 w-6 text-secondary-foreground" />
                      )}
                    </div>
                    <div>
                      <h1
                        className={cn(
                          "text-xl font-medium mb-1 text-foreground",
                          isCompleted && "!text-black dark:!text-white"
                        )}
                      >
                        {data.quizTopic}
                      </h1>
                      <div className="flex items-center gap-2">
                        <div
                          className={cn(
                            "px-2 py-0.5 rounded-full bg-secondary/10 dark:bg-secondary/20 text-xs text-secondary-foreground",
                            isCompleted && "!text-black dark:!text-white"
                          )}
                        >
                          {data.totalPoints} points
                        </div>
                        {isCompleted && (
                          <div className="px-2 py-0.5 rounded-full bg-primary/10 dark:bg-primary/20 text-primary text-xs flex items-center gap-1">
                            <Check className="h-3 w-3" /> Completed
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <motion.div
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <Button
                      size="lg"
                      className={
                        isCompleted
                          ? "bg-primary/80 text-primary-foreground dark:bg-primary/70 dark:text-primary-foreground pointer-events-none"
                          : ""
                      }
                      onClick={() =>
                        !isCompleted && handleGoToQuizStart(data.topic, data.id)
                      }
                      disabled={isCompleted}
                    >
                      {isCompleted ? (
                        <>
                          <Check className="h-4 w-4 mr-2" /> Completed
                        </>
                      ) : (
                        "Start Quiz"
                      )}
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.li>
            );
          })}
        </motion.ul>
      )}
    </AnimatePresence>
  );
};
