import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { messages } = await req.json();

  const openaiRes = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: messages.map((m: any) => ({
        role: m.role === "user" ? "user" : "assistant",
        content: m.content,
      })),
    }),
  });

  const data = await openaiRes.json();

  return NextResponse.json({
    reply: data.choices?.[0]?.message?.content || "Error generating response.",
  });
}
