"use client";

import Image from "next/image";
import { ActionTooltip } from "../action-tooltip";
import { cn } from "@/lib/utils";
import { useModal } from "@/hooks/use-modal-store";

export const EchoverseAi = ({
  imageUrl,
  name,
}: {
  imageUrl: string;
  name: string;
}) => {
  const { onOpen } = useModal();
  function handleEchoverseAiModalOpen() {
    onOpen("echoverseAi");
  }

  return (
    <ActionTooltip side="right" align="center" label={name}>
      <button
        className="group relative flex items-center"
        onClick={handleEchoverseAiModalOpen}
      >
        <div
          className={cn(
            "absolute left-0 bg-primary rounded-r-full transition-all w-[4px]"
            // params?.serverId !== id && "group-hover:h-[20px]",
            // params?.serverId === id ? "h-[36px]" : "h-[8px]"
          )}
        />
        <div
          className={cn(
            "relative group flex mx-3 h-[50px] w-[45px] group-hover:rounded-[16px] transition-all overflow-hidden"
            // params?.serverId === id &&
            //   "bg-primary/10 text-primary rounded-[16px]"
          )}
        >
          <Image fill src={imageUrl} alt={name} className="dark:invert" />
        </div>
      </button>
    </ActionTooltip>
  );
};
