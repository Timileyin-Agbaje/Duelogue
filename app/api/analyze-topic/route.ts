import { NextRequest, NextResponse } from "next/server";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_MODEL = process.env.GEMINI_MODEL || "gemini-2.0-flash";

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

    if (!GEMINI_API_KEY) {
      return NextResponse.json(
        { ok: false, error: "Server configuration error: missing API key." },
        { status: 500 }
      );
    }

    const prompt = `Analyze the following topic and provide a balanced debate analysis.

Topic: "${topic}"

Return a JSON object with exactly this structure:
{
  "topic": "${topic}",
  "proSide": ["Argument 1 in favor", "Argument 2 in favor", "Argument 3 in favor"],
  "conSide": ["Argument 1 against", "Argument 2 against", "Argument 3 against"]
}

Provide 3 strong, well-reasoned arguments for each side. Each argument should be 1-2 sentences.`;

    const geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            response_mime_type: "application/json",
            temperature: 0.7,
            maxOutputTokens: 1024,
          },
        }),
      }
    );

    if (!geminiRes.ok) {
      const errBody = await geminiRes.text();
      console.error("Gemini API error:", geminiRes.status, errBody);
      return NextResponse.json(
        { ok: false, error: "The analysis service is currently unavailable. Please try again later." },
        { status: 502 }
      );
    }

    const geminiData = await geminiRes.json();
    const text = geminiData?.candidates?.[0]?.content?.parts?.[0]?.text;

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
