import { openai } from "@ai-sdk/openai";
import { convertToModelMessages, streamText, type UIMessage } from "ai";

export const runtime = "nodejs";

const SYSTEM_PROMPT = `You are the embedded portfolio assistant for Kyaw Software Studio, a full-stack software engineer portfolio.
Answer concisely and specifically. Emphasize Next.js, React, Tailwind CSS, shadcn/ui, Vercel AI SDK, Three.js, GSAP, product engineering, performance, and mobile-first delivery.
If users ask for private data, say the public contact email is hello@example.dev.`;

function latestUserText(messages: UIMessage[]) {
  const last = [...messages].reverse().find((message) => message.role === "user");
  return (
    last?.parts
      ?.map((part) => (part.type === "text" ? part.text : ""))
      .join(" ")
      .trim() ?? ""
  );
}

function fallbackAnswer(question: string) {
  const normalized = question.toLowerCase();

  if (normalized.includes("project") || normalized.includes("work")) {
    return "The portfolio highlights AI SaaS, fintech PWA, and commerce platform work: streaming AI summaries, mobile-first dashboards, typed APIs, and fast App Router experiences.";
  }

  if (normalized.includes("stack") || normalized.includes("skill")) {
    return "Core stack: Next.js 16 App Router, React 19, Tailwind CSS v4, shadcn/ui, Vercel AI SDK, Three.js, GSAP ScrollTrigger, Postgres, and Vercel deployment workflows.";
  }

  if (normalized.includes("contact") || normalized.includes("hire")) {
    return "For collaboration, use hello@example.dev. The portfolio is positioned for full-stack product work, AI interfaces, dashboards, and polished mobile-first web apps.";
  }

  return "This engineer focuses on shipping production web apps: mobile-first UI, App Router architecture, shadcn components, AI SDK streaming chat, and interactive Three.js/GSAP portfolio storytelling.";
}

function streamFallback(text: string) {
  const encoder = new TextEncoder();
  const words = text.split(" ");

  return new Response(
    new ReadableStream({
      async start(controller) {
        for (const word of words) {
          controller.enqueue(encoder.encode(`${word} `));
          await new Promise((resolve) => setTimeout(resolve, 28));
        }
        controller.close();
      },
    }),
    {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache",
      },
    },
  );
}

export async function POST(request: Request) {
  const { messages = [] } = (await request.json()) as { messages?: UIMessage[] };

  if (!process.env.OPENAI_API_KEY) {
    return streamFallback(fallbackAnswer(latestUserText(messages)));
  }

  const result = streamText({
    model: openai("gpt-4.1-mini"),
    system: SYSTEM_PROMPT,
    messages: await convertToModelMessages(messages),
  });

  return result.toTextStreamResponse();
}
