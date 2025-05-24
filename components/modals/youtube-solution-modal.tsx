"use client";

import YouTube from "react-youtube";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useModal } from "@/hooks/use-modal-store";

export const YoutubeSolutionModal = () => {
  const { isOpen, onClose, type, data } = useModal();

  const isModalOpen = isOpen && type === "youtubeSolution";
  const { videoId } = data;

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="p-0 sm:min-w-[600px] md:min-w-[800px]  h-[450px] min-w-[400px]">
        <YouTube
          videoId={videoId}
          loading="lazy"
          iframeClassName="w-full h-full"
        />
      </DialogContent>
    </Dialog>
  );
};
