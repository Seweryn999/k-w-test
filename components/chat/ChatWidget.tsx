"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";

import { GREETING } from "@/data/chatbot-faq";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "assistant", content: GREETING },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages, isOpen]);

  async function sendMessage() {
    const content = input.trim();
    if (!content || isLoading) return;

    const nextMessages = [...messages, { role: "user", content } as const];
    setMessages(nextMessages);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      const data = (await res.json()) as { message: string };
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.message },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Przepraszam, coś poszło nie tak. Zadzwoń pod +48 730 796 861 lub napisz na salonkwhd@gmail.com.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div
      className={
        isOpen
          ? "fixed inset-0 z-[1000] sm:inset-auto sm:bottom-6 sm:right-6"
          : "fixed bottom-6 right-6 z-[1000]"
      }
    >
      {isOpen && (
        <div
          className="flex h-[100dvh] w-full flex-col overflow-hidden border border-white/10 bg-[#0b0b0b] shadow-2xl shadow-black/60 sm:mb-4 sm:h-[480px] sm:w-[380px] sm:rounded-3xl"
          style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        >
          <div
            className="flex items-center justify-between border-b border-white/10 bg-white/[0.04] px-5 py-4"
            style={{ paddingTop: "calc(env(safe-area-inset-top) + 1rem)" }}
          >
            <p className="text-sm font-black uppercase tracking-[0.2em] text-white">
              Asystent salonu
            </p>

            <button
              onClick={() => setIsOpen(false)}
              aria-label="Zamknij czat"
              className="flex h-9 w-9 items-center justify-center text-white/60 transition hover:text-white"
            >
              <X size={22} />
            </button>
          </div>

          <div
            ref={scrollRef}
            className="flex-1 space-y-3 overflow-y-auto px-4 py-4"
          >
            {messages.map((message, index) => (
              <div
                key={index}
                className={`max-w-[88%] rounded-2xl px-4 py-3 text-[15px] leading-6 sm:max-w-[85%] sm:text-sm ${
                  message.role === "user"
                    ? "ml-auto bg-white text-black"
                    : "bg-white/[0.06] text-white/85"
                }`}
              >
                {message.content}
              </div>
            ))}

            {isLoading && (
              <div className="max-w-[88%] rounded-2xl bg-white/[0.06] px-4 py-3 text-[15px] text-white/50 sm:max-w-[85%] sm:text-sm">
                Piszę odpowiedź...
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 border-t border-white/10 p-3">
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  sendMessage();
                }
              }}
              placeholder="Napisz wiadomość..."
              className="flex-1 rounded-full border border-white/10 bg-black/40 px-4 py-3 text-base text-white placeholder:text-white/35 focus:outline-none focus:ring-1 focus:ring-white/30 sm:text-sm"
            />

            <button
              onClick={sendMessage}
              disabled={isLoading || !input.trim()}
              aria-label="Wyślij"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-black transition hover:bg-neutral-200 disabled:opacity-40"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Otwórz czat"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-black shadow-2xl shadow-black/50 transition hover:bg-neutral-200"
          style={{
            marginBottom: "env(safe-area-inset-bottom)",
            marginRight: "env(safe-area-inset-right)",
          }}
        >
          <MessageCircle size={24} />
        </button>
      )}
    </div>
  );
}
