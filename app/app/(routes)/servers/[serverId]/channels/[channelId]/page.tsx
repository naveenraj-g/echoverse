// import { RedirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { ChannelType } from "@prisma/client";

import { ChatHeader } from "@/components/chat/chat-header";
import { ChatInput } from "@/components/chat/Chat-input";
import { ChatMessages } from "@/components/chat/chat-messages";
import { MediaRoom } from "@/components/media-room";
import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { MessagesToggle } from "@/components/messages-toggle";
import { PUBLIC_CHANNELS } from "@/utils/public-channel-info";

interface ChannelIdPageProps {
  params: {
    serverId: string;
    channelId: string;
  };
}

const ChannelIdPage = async ({ params }: ChannelIdPageProps) => {
  const profile = await currentProfile();

  if (!profile) {
    // return RedirectToSignIn({ redirectUrl: "/" });
    return redirect("/sign-in");
  }

  const channel = await db.channel.findUnique({
    where: {
      id: params.channelId,
    },
  });

  const member = await db.member.findFirst({
    where: {
      serverId: params.serverId,
      profileId: profile.id,
    },
  });

  if (!channel || !member) {
    redirect("/app");
  }

  const publicChannel = Object.values(PUBLIC_CHANNELS).find(
    (c) => c.serverId === params.serverId && c.channelId === channel.id
  );

  if (publicChannel) {
    return (
      <div className="bg-white relative dark:bg-[#313338] flex flex-col h-screen">
        <ChatHeader
          name={channel.name}
          serverId={channel.serverId}
          channelType={channel.type}
          type="channel"
        />
        {publicChannel.component}
      </div>
    );
  }

  return (
    <div className="bg-white relative dark:bg-[#313338] flex flex-col h-screen">
      <ChatHeader
        name={channel.name}
        serverId={channel.serverId}
        channelType={channel.type}
        type="channel"
      />
      {/* <Roadmap /> */}
      {channel.type === ChannelType.TEXT && (
        <>
          <ChatMessages
            member={member}
            name={channel.name}
            chatId={channel.id}
            type="channel"
            apiUrl="/api/messages"
            socketUrl="/api/socket/messages"
            socketQuery={{
              channelId: channel.id,
              serverId: channel.serverId,
            }}
            paramKey="channelId"
            paramValue={channel.id}
          />
          <ChatInput
            name={channel.name}
            type="channel"
            apiUrl="/api/socket/messages"
            isPrivateAccess={
              channel.privateAccess &&
              !["ADMIN", "MODERATOR"].includes(member.role)
            }
            query={{ channelId: channel.id, serverId: channel.serverId }}
          />
        </>
      )}

      {channel.type === ChannelType.AUDIO && (
        <MediaRoom chatId={channel.id} video={false} audio={true} />
      )}

      {(channel.type === ChannelType.AUDIO ||
        channel.type === ChannelType.VIDEO) && (
        <div className="absolute z-10 top-28 right-2">
          <MessagesToggle>
            <ChatMessages
              member={member}
              name={channel.name}
              chatId={channel.id}
              type="channel"
              apiUrl="/api/messages"
              socketUrl="/api/socket/messages"
              socketQuery={{
                channelId: channel.id,
                serverId: channel.serverId,
              }}
              paramKey="channelId"
              paramValue={channel.id}
            />
            <ChatInput
              name={channel.name}
              type="channel"
              apiUrl="/api/socket/messages"
              isPrivateAccess={
                channel.privateAccess &&
                !["ADMIN", "MODERATOR"].includes(member.role)
              }
              query={{ channelId: channel.id, serverId: channel.serverId }}
            />
          </MessagesToggle>
        </div>
      )}

      {channel.type === ChannelType.VIDEO && (
        <MediaRoom chatId={channel.id} video={true} audio={true} />
      )}
    </div>
  );
};

export default ChannelIdPage;
