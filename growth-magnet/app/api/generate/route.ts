import { NextRequest } from "next/server";

const OPENAI_API = "https://api.openai.com/v1/chat/completions";
const MODEL = "gpt-4o-mini";

export async function POST(req: NextRequest) {
  const { prompt, system } = await req.json();

  const res = await fetch(OPENAI_API, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: MODEL,
      temperature: 0.7,
      messages: [
        { role: "system", content: system || "" },
        { role: "user", content: prompt }
      ]
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    return new Response(text || "LLM error", { status: 500 });
  }

  const data = await res.json();
  const content = data.choices?.[0]?.message?.content ?? "";
  return Response.json({ content });
}

