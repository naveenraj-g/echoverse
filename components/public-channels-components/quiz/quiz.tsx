import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { QuizList } from "./quiz-list";
import { db } from "@/lib/db";

export const Quiz = async () => {
  const aptitudeQuizDatas = await db.quiz.findMany({
    where: {
      topic: "aptitude",
    },
    select: {
      id: true,
      topic: true,
      quizTopic: true,
      totalPoints: true,
    },
  });
  const logicalReasoningQuizDatas = await db.quiz.findMany({
    where: {
      topic: "logical-reasoning",
    },
    select: {
      id: true,
      topic: true,
      quizTopic: true,
      totalPoints: true,
    },
  });
  const verbalAbilityQuizDatas = await db.quiz.findMany({
    where: {
      topic: "verbal-ability",
    },
    select: {
      id: true,
      topic: true,
      quizTopic: true,
      totalPoints: true,
    },
  });

  return (
    <div className="flex-1 flex flex-col py-4 overflow-y-auto px-6">
      <div className="text-center">
        <Tabs defaultValue="aptitude">
          <TabsList className="mb-4">
            <TabsTrigger value="aptitude">Aptitude</TabsTrigger>
            <TabsTrigger value="reasoning">Logical Reasoning</TabsTrigger>
            <TabsTrigger value="verbal">Verbal Ability</TabsTrigger>
          </TabsList>

          <TabsContent value="aptitude">
            <QuizList datas={aptitudeQuizDatas} />
          </TabsContent>

          <TabsContent value="reasoning">
            <QuizList datas={logicalReasoningQuizDatas} />
          </TabsContent>

          <TabsContent value="verbal">
            <QuizList datas={verbalAbilityQuizDatas} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
