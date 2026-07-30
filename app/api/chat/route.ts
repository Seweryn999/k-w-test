import { NextResponse } from "next/server";

import { getChatbotReply } from "@/lib/chatbot";
import { askGemini } from "@/lib/gemini";
import { FALLBACK_ANSWER } from "@/data/chatbot-faq";
import { SITE_CONTEXT } from "@/data/site-context";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export async function POST(request: Request) {
  const { messages } = (await request.json()) as { messages: ChatMessage[] };

  if (!Array.isArray(messages) || messages.length === 0) {
    return NextResponse.json({ error: "Missing messages." }, { status: 400 });
  }

  const lastUserMessage = messages[messages.length - 1];
  const ruleBasedReply = getChatbotReply(lastUserMessage.content);
  const hint = ruleBasedReply !== FALLBACK_ANSWER ? ruleBasedReply : undefined;

  const aiReply = await askGemini(messages, SITE_CONTEXT, hint);

  return NextResponse.json({ message: aiReply ?? ruleBasedReply });
}
