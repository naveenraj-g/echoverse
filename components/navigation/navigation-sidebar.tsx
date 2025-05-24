import { redirect } from "next/navigation";
import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { UserButton } from "@clerk/nextjs";

import NavigationAction from "@/components/navigation/navigation-action";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { NavigationItem } from "@/components/navigation/navigation-item";
import { ModeToggle } from "@/components/mode-toggle";
import { PublicServerSearch } from "@/components/navigation/public-server-search";
// import { revalidatePath } from "next/cache";
import { ActionTooltip } from "../action-tooltip";
import { EchoverseAi } from "../echoverse-ai/echoverse-ai";

const NavigationSideBar = async () => {
  const profile = await currentProfile();

  if (!profile) {
    return redirect("/");
  }

  const servers = await db.server.findMany({
    where: {
      members: {
        some: {
          profileId: profile?.id,
        },
      },
    },
  });

  const allPublicServers = await db.server.findMany({
    where: {
      isPublic: true,
    },
  });

  const isPrivateServers = servers.filter(
    (server) => server.isPublic === false
  );

  const isPublicServers = servers.filter((server) => server.isPublic === true);

  // const lastServersLength = servers.length;
  // async function checkIfPostChanged() {
  //   "use server";

  //   const updatedServers = await db.server.findMany({
  //     where: {
  //       members: {
  //         some: {
  //           profileId: profile?.id,
  //         },
  //       },
  //     },
  //   });

  //   const updatedServersLength = updatedServers.length;

  //   const didChange = lastServersLength !== updatedServersLength;

  //   if (didChange) revalidatePath("/");
  // }

  return (
    <div className="space-y-4 flex flex-col items-center h-full text-primary w-full dark:bg-[#1E1F22] bg-[#E3E5E8] py-3">
      <NavigationAction />
      {isPublicServers.map((server) => (
        <div key={server.id} className="mb-4">
          <NavigationItem
            id={server.id}
            name={server.name}
            imageUrl={server.imageUrl}
          />
        </div>
      ))}
      <EchoverseAi imageUrl="/logo/icon.png" name="EchoVerse AI" />
      <Separator className="h-[2px] bg-zinc-300 dark:bg-zinc-700 rounded-md w-10 mx-auto" />
      <ScrollArea className="flex-1 w-full">
        {isPrivateServers.map((server) => (
          <div key={server.id} className="mb-4">
            <NavigationItem
              id={server.id}
              name={server.name}
              imageUrl={server.imageUrl}
            />
          </div>
        ))}
      </ScrollArea>
      <div className="pb-3 mt-auto flex items-center flex-col gap-y-4">
        <ActionTooltip
          label="Search Public Servers"
          side="right"
          align="center"
        >
          <div>
            <PublicServerSearch servers={allPublicServers} />
          </div>
        </ActionTooltip>
        <ModeToggle />
        <UserButton
          appearance={{
            elements: {
              avatarBox: "h-[48px] w-[48px]",
            },
          }}
        />
      </div>
    </div>
  );
};

export default NavigationSideBar;
