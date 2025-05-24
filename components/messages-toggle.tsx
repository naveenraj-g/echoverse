import { ChevronsLeft } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ActionTooltip } from "./action-tooltip";

export const MessagesToggle = ({ children }: { children: React.ReactNode }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="link"
          size="icon"
          className="flex items-center text-lg text-zinc-300 bg-transparent h-full w-full p-1 rounded-none"
        >
          <ActionTooltip label="Channel Chat" side="left">
            <div className="flex items-center">
              <ChevronsLeft />
              <p>Chat</p>
            </div>
          </ActionTooltip>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="p-0 flex gap-0">
        <div className="flex flex-col">{children}</div>
      </SheetContent>
    </Sheet>
  );
};
