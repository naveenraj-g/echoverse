"use client";

import { Search } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { UserAvatar } from "@/components/user-avatar";

interface ServerSearchProps {
  servers: {
    id: string;
    name: string;
    imageUrl: string;
    createdAt: Date;
    updatedAt: Date;
    profileId: string;
    inviteCode: string;
    isPublic: boolean;
  }[];
}

export const PublicServerSearch = ({ servers }: ServerSearchProps) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const onClick = (inviteCode: string) => {
    router.push(`/app/invite/${inviteCode}`);
  };

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-x-2 w-full"
      >
        <Search className="w-5 h-5 text-zinc-500 dark:text-zinc-300" />
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search all public servers" />
        <CommandList>
          <CommandEmpty>No Results found</CommandEmpty>
          <CommandGroup heading="Public Servers"></CommandGroup>
          {servers.map(({ id, name, imageUrl, inviteCode }) => {
            return (
              <CommandGroup key={id}>
                <CommandItem
                  className="cursor-pointer"
                  key={id}
                  onSelect={() => onClick(inviteCode)}
                >
                  <UserAvatar src={imageUrl} />
                  <span className="text-lg ml-1">{name}</span>
                </CommandItem>
              </CommandGroup>
            );
          })}
        </CommandList>
      </CommandDialog>
    </div>
  );
};
