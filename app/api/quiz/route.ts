import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { quizId, topic, quizTopic, completed, score } = await req.json();
    const profile = await currentProfile();

    if (!profile) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const existingEntry = await db.userQuizDetails.findFirst({
      where: {
        userId: profile.userId,
        quizId: quizId,
      },
    });

    if (existingEntry) throw new Error("Entry already exists.");

    if (!existingEntry) {
      await db.userQuizDetails.create({
        data: {
          userId: profile.userId,
          quizId,
          topic,
          quizTopic,
          completed,
          score,
        },
      });
    }

    return NextResponse.json({ message: "Successful" });
  } catch (error) {
    console.log("[QUIZ_POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function GET() {
  const profile = await currentProfile();

  if (!profile) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const currentUserQuizDetails = await db.userQuizDetails.findMany({
    where: {
      userId: profile.userId,
    },
  });

  return NextResponse.json(currentUserQuizDetails);
}
