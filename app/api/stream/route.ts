import { NextRequest } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({
  api_key: process.env.OPENAI_API_KEY!,
});
//! Console log
console.log("Checking loading!")
export async function POST(req: NextRequest) {
  const { system_prompt, user_prompt } = await req.json();

  const stream = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: system_prompt },
      { role: "user", content: user_prompt },
    ],
    stream: true,
  });
  const encoder = new TextEncoder();

  const readable = new ReadableStream({
    async start(controller) {
      try {
        for await (const chunk of stream) {
          const delta = chunk.choices[0]?.delta?.content || "";
          controller.enqueue(encoder.encode(delta));
        }
      } catch (err) {
        controller.error(err);
      } finally {
        controller.close();
      }
    },
  });

  return new Response(readable, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
