import { PrismaClient } from "@prisma/client";

import { problemsList } from "../components/coding/mockData/problems";
// import { db } from "@/lib/db";

const db = new PrismaClient();

async function main() {
  console.log("Seeding problems data...");

  // for (const [index, problem] of problemsList.entries()) {
  //   await db.problem.create({
  //     data: {
  //       problemId: problem.problemId,
  //       problemNo: index + 1,
  //       title: problem.title,
  //       difficulty: problem.difficulty,
  //       category: problem.category,
  //       videoId: problem.videoId,
  //       isNotParse: problem.isNotParse,
  //       description: problem.description,
  //       image: problem.image,
  //       functionSignature: problem.functionSignature,
  //       examples: problem.examples,
  //       constraints: problem.constraints,
  //       testCases: problem.testCases,
  //     },
  //   });
  // }

  problemsList.forEach(async (problem, index) => {
    await db.problem.create({
      data: {
        problemNo: index + 1,
        problemId: problem.problemId,
        title: problem.title,
        difficulty: problem.difficulty,
        category: problem.category,
        videoId: problem.videoId,
        isNotParse: problem.isNotParse,
        description: problem.description,
        image: problem.image,
        functionSignature: problem.functionSignature,
        examples: problem.examples,
        constraints: problem.constraints,
        testCases: problem.testCases,
      },
    });
  });

  console.log("Problems data seeded successfully!");
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
