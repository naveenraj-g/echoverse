import { redirect } from "next/navigation";
import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
// import { RedirectToSignIn } from "@clerk/nextjs";

interface ServerIdProps {
  params: {
    serverId: string;
  };
}

const ServerIdPage = async ({ params }: ServerIdProps) => {
  const profile = await currentProfile();

  if (!profile) {
    // return RedirectToSignIn({ redirectUrl: "/app" });
    return redirect("/app");
  }

  const server = await db.server.findUnique({
    where: {
      id: params.serverId,
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
    include: {
      channels: {
        where: {
          name: "general",
        },
        orderBy: {
          createdAt: "asc",
        },
      },
    },
  });

  const initialChannel = server?.channels[0];

  if (initialChannel?.name !== "general") {
    return null;
  }

  return redirect(
    `/app/servers/${params.serverId}/channels/${initialChannel?.id}`
  );
};

export default ServerIdPage;
