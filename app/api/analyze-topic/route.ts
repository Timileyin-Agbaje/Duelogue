import { NextRequest, NextResponse } from "next/server";

const GROQ_API_KEY = process.env.GROQ_API_KEY;
const GROQ_MODEL = process.env.GROQ_MODEL || "llama-3.3-70b-versatile";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const topic = body?.topic?.trim();

    if (!topic || typeof topic !== "string") {
      return NextResponse.json(
        { ok: false, error: "Please provide a valid topic." },
        { status: 400 }
      );
    }

    if (topic.length < 3) {
      return NextResponse.json(
        { ok: false, error: "Topic must be at least 3 characters long." },
        { status: 400 }
      );
    }

    if (!GROQ_API_KEY) {
      return NextResponse.json(
        { ok: false, error: "Server configuration error: missing API key." },
        { status: 500 }
      );
    }

    const systemPrompt = `You are a debate analysis assistant. Given a topic, return a JSON object with:
- "topic": the topic string
- "proSide": array of 3 strong arguments in favor
- "conSide": array of 3 strong arguments against

Each argument should be 1-2 sentences. Be balanced and objective.`;

    const userPrompt = `Analyze the following topic and provide a balanced debate analysis.

Topic: "${topic}"

Return a JSON object with exactly this structure:
{
  "topic": "${topic}",
  "proSide": ["Argument 1 in favor", "Argument 2 in favor", "Argument 3 in favor"],
  "conSide": ["Argument 1 against", "Argument 2 against", "Argument 3 against"]
}

Provide 3 strong, well-reasoned arguments for each side. Each argument should be 1-2 sentences.`;

    const groqRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: GROQ_MODEL,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
        temperature: 0.7,
        max_tokens: 1024,
        response_format: { type: "json_object" },
      }),
    });

    if (!groqRes.ok) {
      const errBody = await groqRes.text();
      console.error("Groq API error:", groqRes.status, errBody);
      return NextResponse.json(
        { ok: false, error: "The analysis service is currently unavailable. Please try again later." },
        { status: 502 }
      );
    }

    const groqData = await groqRes.json();
    const text = groqData?.choices?.[0]?.message?.content;

    if (!text) {
      return NextResponse.json(
        { ok: false, error: "Received an empty response from the analysis service." },
        { status: 502 }
      );
    }

    let result: { topic: string; proSide: string[]; conSide: string[] };
    try {
      result = JSON.parse(text);
    } catch {
      return NextResponse.json(
        { ok: false, error: "Failed to parse the analysis result." },
        { status: 502 }
      );
    }

    if (
      !result.topic ||
      !Array.isArray(result.proSide) ||
      !Array.isArray(result.conSide) ||
      result.proSide.length === 0 ||
      result.conSide.length === 0
    ) {
      return NextResponse.json(
        { ok: false, error: "The analysis returned an incomplete result." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, data: result });
  } catch (err) {
    console.error("Unexpected error in /api/analyze-topic:", err);
    return NextResponse.json(
      { ok: false, error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
