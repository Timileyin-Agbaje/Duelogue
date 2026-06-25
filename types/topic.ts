export type AnalysisResult = {
  topic: string;
  proSide: string[];
  conSide: string[];
}

export type AnalysisState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "success"; result: AnalysisResult }

export type AnalyzeTopicResponse =
  | { ok: true; data: AnalysisResult }
  | { ok: false; error: string }
