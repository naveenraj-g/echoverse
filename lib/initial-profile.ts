import { auth } from "@clerk/nextjs/server";
import { currentUser } from "@clerk/nextjs/server";
// import { RedirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { db } from "@/lib/db";

export const initialProfile = async () => {
  const { userId } = await auth();

  if (!userId) {
    return redirect("/sign-in");
    // return RedirectToSignIn({ redirectUrl: "/app" });
  }

  const user = await currentUser();

  const profile = await db.profile.findUnique({
    where: {
      userId: user.id,
    },
  });

  if (profile) {
    const updatedProfile = await db.profile.update({
      where: { userId: user.id },
      data: {
        userName: user.username,
        name: `${user.firstName} ${user.lastName}`,
        imageUrl: user.imageUrl,
        email: user.emailAddresses[0].emailAddress,
      },
    });
    return updatedProfile;
  }

  const newProfile = await db.profile.create({
    data: {
      userId: user.id,
      userName: user.username,
      name: `${user.firstName} ${user.lastName}`,
      imageUrl: user.imageUrl,
      email: user.emailAddresses[0].emailAddress,
    },
  });

  return newProfile;
};
