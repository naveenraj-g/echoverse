/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import parser from "html-react-parser";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Play,
  CheckCircle,
  XCircle,
  ArrowRight,
  Trophy,
  RefreshCw,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import axios from "axios";

interface QuizStartProps {
  id: string;
  topic: string;
  quizTopic: string;
  totalPoints: number;
  questionDetails: {
    question: string;
    options: string[];
    imageAddress?: string;
    answer: string;
  }[];
}

export const QuizStart = ({ data }: { data: QuizStartProps | null }) => {
  const router = useRouter();

  const [isQuizStatus, setIsQuizStatus] = useState("start");
  const [quizAnswerData, setQuizAnswerData] = useState({
    userAnswer: [],
    correctlyAnswered: 0,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const questionsLength = data?.questionDetails.length;
  const currentQuestionIndex =
    data?.questionDetails[quizAnswerData.userAnswer.length];

  function handleQuizData(selectedOption: any) {
    const isCorrectOption = currentQuestionIndex?.answer === selectedOption;

    setQuizAnswerData((prevState) => {
      return {
        userAnswer: [...prevState.userAnswer, selectedOption],
        correctlyAnswered: isCorrectOption
          ? prevState.correctlyAnswered + 1
          : prevState.correctlyAnswered,
      };
    });
  }

  function handleRetryQuiz() {
    setQuizAnswerData({
      userAnswer: [],
      correctlyAnswered: 0,
    });
  }

  async function handleSubmitQuiz() {
    const values = {
      quizId: data?.id,
      topic: data?.topic,
      quizTopic: data?.quizTopic,
      completed: true,
      score: data?.totalPoints,
    };
    try {
      setIsLoading(true);
      await axios.post("/api/quiz", values);
      toast.success("Submitted Successfully!", {
        duration: 1000,
        style: {
          background: "#16a34a",
          color: "#fff",
          width: "fit-content",
        },
      });
      setIsSubmitted(true);
      setTimeout(() => {
        router.push(`/quiz/${data?.topic}`);
      }, 1500);
    } catch (error) {
      setIsSubmitted(false);
      toast.error(error.response.data, {
        duration: 1000,
        style: {
          background: "#dc2626",
          color: "#fff",
          width: "fit-content",
        },
      });
    } finally {
      setIsLoading(false);
    }
  }

  if (quizAnswerData.userAnswer.length === questionsLength) {
    const score = (quizAnswerData.correctlyAnswered / questionsLength) * 100;
    const isPerfectScore = questionsLength === quizAnswerData.correctlyAnswered;

    return (
      <div className="max-w-[800px] mx-auto p-8 rounded-xl bg-gradient-to-b from-indigo-50 to-white dark:from-slate-800 dark:to-slate-900 border border-indigo-100 dark:border-slate-700 shadow-md mt-16">
        <div className="text-center">
          {isPerfectScore ? (
            <div className="mb-6">
              <div className="w-20 h-20 mx-auto mb-4 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center">
                <Trophy className="h-10 w-10 text-yellow-500 dark:text-yellow-400" />
              </div>
              <h1 className="text-3xl font-bold text-indigo-900 dark:text-white">
                Perfect Score!
              </h1>
            </div>
          ) : (
            <div className="mb-6">
              <div className="w-20 h-20 mx-auto mb-4 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                <RefreshCw className="h-10 w-10 text-blue-600 dark:text-blue-400" />
              </div>
              <h1 className="text-3xl font-bold text-indigo-900 dark:text-white">
                Quiz Complete
              </h1>
            </div>
          )}

          <div className="mb-8">
            <p className="text-lg mb-3 text-indigo-700 dark:text-indigo-300">
              Results of <span className="font-medium">{data?.quizTopic}</span>
            </p>

            <div className="w-full max-w-md mx-auto mb-4 bg-white dark:bg-slate-700 p-4 rounded-lg shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-indigo-600 dark:text-indigo-300">
                  Score
                </span>
                <span className="text-xl font-bold text-indigo-900 dark:text-white">
                  {score.toFixed(0)}%
                </span>
              </div>
              <div className="w-full bg-indigo-100 dark:bg-slate-600 rounded-full h-2.5 mb-4">
                <div
                  className={`h-2.5 rounded-full ${
                    isPerfectScore ? "bg-green-500" : "bg-indigo-500"
                  }`}
                  style={{ width: `${score}%` }}
                ></div>
              </div>
              <div className="text-center text-indigo-700 dark:text-indigo-300 font-medium">
                {quizAnswerData.correctlyAnswered} correct out of{" "}
                {questionsLength} questions
              </div>
            </div>
          </div>

          {!isPerfectScore && (
            <Button
              className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white"
              onClick={handleRetryQuiz}
            >
              <RefreshCw className="h-4 w-4 mr-2" /> Try Again
            </Button>
          )}

          {isPerfectScore && (
            <div className="space-y-4">
              <p className="text-green-600 dark:text-green-400 font-medium">
                Congratulations! You've mastered this quiz.
              </p>
              <Button
                className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white"
                onClick={handleSubmitQuiz}
                disabled={isLoading || isSubmitted}
              >
                {isLoading ? (
                  <>
                    <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    <CheckCircle className="h-4 w-4 mr-2" /> Submit Quiz
                  </>
                )}
              </Button>
            </div>
          )}
        </div>
      </div>
    );
  }

  const QuizStartTrigger = (
    <div
      style={{ height: `calc(100vh - 56px)` }}
      className="flex flex-col justify-center items-center p-10 bg-gradient-to-br from-indigo-50 to-white dark:from-slate-800 dark:to-slate-900 border border-indigo-100 dark:border-slate-700 shadow-md"
    >
      <div className="text-center max-w-lg">
        <div className="w-20 h-20 mx-auto mb-6 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
          <Play className="h-10 w-10 text-indigo-600 dark:text-indigo-400 ml-1" />
        </div>
        <h1 className="text-2xl font-bold mb-1 text-indigo-900 dark:text-white">
          EchoVerse Quiz
        </h1>
        <h3 className="text-xl mb-6 text-indigo-700 dark:text-indigo-300 font-medium">
          {data?.topic.toUpperCase()}
        </h3>
        <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-sm mb-8">
          <p className="text-lg mb-2 text-indigo-700 dark:text-indigo-300">
            Selected Topic:{" "}
            <span className="font-medium">{data?.quizTopic}</span>
          </p>
          <p className="text-lg mb-2 text-indigo-700 dark:text-indigo-300">
            Total Points:{" "}
            <span className="font-medium">{data?.totalPoints}</span>
          </p>
          <p className="text-sm text-indigo-600 dark:text-indigo-400">
            Answer all questions correctly to complete the quiz
          </p>
        </div>
        <Button
          onClick={() => setIsQuizStatus("started")}
          className="px-6 py-6 bg-indigo-600 hover:bg-indigo-700 text-white text-lg"
        >
          <Play className="h-5 w-5 mr-2" />
          Start Quiz
        </Button>
      </div>
    </div>
  );

  const QuizStarted = (
    <div className="max-w-[800px] mx-auto p-8 rounded-xl bg-gradient-to-b from-indigo-50 to-white dark:from-slate-800 dark:to-slate-900 border border-indigo-100 dark:border-slate-700 shadow-md mt-16">
      <h1 className="text-2xl font-bold mb-8 text-center text-indigo-900 dark:text-white">
        {data?.quizTopic}
      </h1>

      <div className="flex items-center justify-between mb-8 bg-white dark:bg-slate-700 p-3 rounded-lg shadow-sm">
        <div className="flex items-center gap-2 flex-1">
          <div className="w-full bg-indigo-100 dark:bg-slate-600 rounded-full h-2.5">
            <div
              className="bg-indigo-600 dark:bg-indigo-500 h-2.5 rounded-full"
              style={{
                width: `${
                  ((quizAnswerData.userAnswer.length + 1) / questionsLength) *
                  100
                }%`,
              }}
            ></div>
          </div>
        </div>
        <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300 ml-3">
          {quizAnswerData.userAnswer.length + 1}/{questionsLength}
        </span>
      </div>

      <div className="mb-8">
        <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-sm text-center">
          <div className="text-lg tracking-wide leading-8 text-indigo-900 dark:text-white">
            {parser(currentQuestionIndex?.question)}
          </div>

          {currentQuestionIndex?.imageAddress && (
            <div className="mt-6 flex justify-center">
              <div className="rounded-lg overflow-hidden border-2 border-indigo-100 dark:border-slate-600">
                <Image
                  src={currentQuestionIndex?.imageAddress}
                  alt="question image"
                  width={300}
                  height={300}
                  className="object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="w-full max-w-md mx-auto">
        <div className="text-sm font-medium text-indigo-700 dark:text-indigo-300 mb-2">
          Select your answer:
        </div>
        <ul className="flex flex-col gap-3">
          {currentQuestionIndex?.options.map((option, i) => (
            <li key={i}>
              <Button
                className="w-full text-left justify-start h-auto py-3 px-4 bg-white hover:bg-indigo-50 dark:bg-slate-700 dark:hover:bg-slate-600 text-indigo-900 dark:text-white border border-indigo-100 dark:border-slate-600 transition-colors"
                onClick={() => handleQuizData(option)}
              >
                <span className="bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 w-7 h-7 flex items-center justify-center rounded-full mr-3 font-medium">
                  {String.fromCharCode(65 + i)}
                </span>
                <span>{option}</span>
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  if (isQuizStatus === "start") {
    return QuizStartTrigger;
  } else if (isQuizStatus === "started") {
    return QuizStarted;
  }
};
