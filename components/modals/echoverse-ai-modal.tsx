"use client";

import { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

import {
  X,
  MessageCircle,
  Send,
  Loader2,
  ArrowDownCircleIcon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useChat } from "@ai-sdk/react";

import { useModal } from "@/hooks/use-modal-store";

export const EchoverseAiModal = () => {
  const { isOpen, onClose, type } = useModal();
  const isModalOpen = isOpen && type === "echoverseAi";

  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    status,
    stop,
    reload,
    error,
  } = useChat({ api: "/api/ai/gemini" });

  const scrollRef = useRef<HTMLDivElement>(null);

  const isLoading = status === "streaming";
  // const isLoading = true;

  function handleClose() {
    onClose();
  }

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-white text-black p-6 max-w-[85%] md:max-w-[650px]">
        <DialogHeader>
          <DialogTitle className="text-lg text-left font-bold">
            Chat with EchoVerse AI
          </DialogTitle>
          <DialogDescription className="text-center text-zinc-500">
            <ScrollArea className="h-[60vh] w-full pr-4">
              {messages?.length === 0 && (
                <div className="w-full h-[60vh] text-zinc-500 flex items-center justify-center gap-3">
                  No messages yet.
                </div>
              )}
              {messages?.map((message, index) => {
                return (
                  <div
                    key={index}
                    className={`mb-4 mt-2 ${
                      message.role === "user" ? "text-right" : "text-left"
                    }`}
                  >
                    <div
                      className={`inline-block rounded-lg px-3 py-2 ${
                        message.role === "user"
                          ? "bg-zinc-800 text-white"
                          : "bg-zinc-200 text-base"
                      }`}
                    >
                      <ReactMarkdown
                        children={message.content}
                        remarkPlugins={[remarkGfm]}
                        components={{
                          code({
                            node,
                            inline,
                            className,
                            children,
                            ...props
                          }) {
                            return inline ? (
                              <code
                                {...props}
                                className="bg-gray-200 px-1 rounded"
                              >
                                {children}
                              </code>
                            ) : (
                              <pre
                                {...props}
                                className="bg-gray-200 p-2 rounded"
                              >
                                <code>{children}</code>
                              </pre>
                            );
                          },
                          ul: ({ children }) => (
                            <ul className="list-disc ml-4">{children}</ul>
                          ),
                          ol: ({ children }) => (
                            <ul className="list-decimal ml-4">{children}</ul>
                          ),
                        }}
                      />
                    </div>
                  </div>
                );
              })}
              {isLoading && (
                <div className="w-full flex items-center  justify-center gap-3">
                  <Loader2 className="animate-spin h-5 w-5 text-zinc-600" />
                  <button
                    className="underline"
                    type="button"
                    onClick={() => stop()}
                  >
                    abort
                  </button>
                </div>
              )}
              {error && (
                <div className="w-full flex items-center justify-center gap-3">
                  <div>An error occured.</div>
                  <button
                    className="underline"
                    type="button"
                    onClick={() => reload()}
                  >
                    Retry
                  </button>
                </div>
              )}
              <div ref={scrollRef}></div>
            </ScrollArea>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <form
            onSubmit={handleSubmit}
            className="flex w-full items-center space-x-2"
          >
            <Input
              value={input}
              onChange={handleInputChange}
              className="flex-1 bg-inherit"
              placeholder="Type your message"
            />
            <Button
              type="submit"
              className="bg-black text-white hover:bg-white hover:text-black border"
              disabled={isLoading}
              size="icon"
            >
              <Send className="size-4" />
            </Button>
          </form>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
