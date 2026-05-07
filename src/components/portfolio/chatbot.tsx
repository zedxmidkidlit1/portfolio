"use client";

import { useChat } from "@ai-sdk/react";
import { Bot, Loader2, Send, Sparkles, X } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
import { TextStreamChatTransport } from "ai";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function messageText(message: { parts?: Array<{ type: string; text?: string }> }) {
  return message.parts
    ?.map((part) => (part.type === "text" ? part.text : ""))
    .filter(Boolean)
    .join("");
}

export function PortfolioChatbot() {
  const [input, setInput] = useState("");
  const transport = useMemo(
    () => new TextStreamChatTransport({ api: "/api/chat" }),
    [],
  );
  const { messages, sendMessage, status, stop } = useChat({ transport });
  const isBusy = status === "submitted" || status === "streaming";

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = input.trim();
    if (!text || isBusy) return;
    void sendMessage({ text });
    setInput("");
  }

  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button
            size="lg"
            className="fixed bottom-4 right-4 z-50 h-14 rounded-full bg-[#10130f] px-5 text-[#f8f3ea] shadow-2xl shadow-teal-950/30 hover:bg-[#1f2a22] sm:bottom-6 sm:right-6"
          />
        }
      >
        <span className="flex items-center gap-2">
          <Bot className="size-5" />
          AI Chat
        </span>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col gap-0 border-l-[#d7d0c2] bg-[#fbf7ef] p-0 sm:max-w-md">
        <SheetHeader className="border-b border-[#ded7c8] px-4 py-4 text-left">
          <div className="flex items-center justify-between gap-3">
            <div>
              <SheetTitle className="flex items-center gap-2 text-[#11140f]">
                <Sparkles className="size-4 text-teal-700" />
                Portfolio AI
              </SheetTitle>
              <p className="mt-1 text-xs text-[#706858]">
                Ask about projects, stack, experience, or availability.
              </p>
            </div>
            {isBusy ? (
              <Button size="icon" variant="ghost" onClick={stop} aria-label="Stop response">
                <X className="size-4" />
              </Button>
            ) : null}
          </div>
        </SheetHeader>
        <ScrollArea className="flex-1 px-4 py-5">
          <div className="space-y-4">
            {messages.length === 0 ? (
              <div className="rounded-lg border border-[#e1d8c7] bg-white p-4 text-sm leading-6 text-[#554d40]">
                Try: “What kind of Next.js projects can you build?” or “Summarize
                your AI SDK experience.”
              </div>
            ) : null}
            {messages.map((message) => {
              const text = messageText(message);
              if (!text) return null;
              const isUser = message.role === "user";
              return (
                <div
                  key={message.id}
                  className={`flex ${isUser ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[86%] rounded-lg px-4 py-3 text-sm leading-6 ${
                      isUser
                        ? "bg-[#11140f] text-[#f8f3ea]"
                        : "border border-[#e1d8c7] bg-white text-[#2d291f]"
                    }`}
                  >
                    {text}
                  </div>
                </div>
              );
            })}
            {status === "submitted" ? (
              <div className="flex items-center gap-2 text-sm text-[#706858]">
                <Loader2 className="size-4 animate-spin" />
                Thinking
              </div>
            ) : null}
          </div>
        </ScrollArea>
        <form onSubmit={onSubmit} className="border-t border-[#ded7c8] p-4">
          <div className="flex gap-2">
            <Input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about this engineer..."
              className="h-11 border-[#d2c8b6] bg-white"
            />
            <Button
              type="submit"
              size="icon"
              disabled={!input.trim() || isBusy}
              className="h-11 w-11 bg-teal-700 text-white hover:bg-teal-800"
              aria-label="Send message"
            >
              {isBusy ? <Loader2 className="size-4 animate-spin" /> : <Send className="size-4" />}
            </Button>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  );
}
