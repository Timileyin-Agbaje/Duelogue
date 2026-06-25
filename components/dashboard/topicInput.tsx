"use client"

import { useState, type FormEvent } from "react";
import { ArrowUp, LoaderCircle, AlertCircle, ThumbsUp, ThumbsDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { AnalysisResult, AnalysisState } from "@/types/topic";

export default function TopicInput() {
  const [topic, setTopic] = useState("");
  const [state, setState] = useState<AnalysisState>({ status: "idle" });

  const isValid = topic.trim().length >= 3;

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isValid) return;

    setState({ status: "loading" });

    try {
      const res = await fetch("/api/analyze-topic", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic: topic.trim() }),
      });

      const json = await res.json();

      if (!json.ok) {
        setState({ status: "error", message: json.error || "Something went wrong." });
        return;
      }

      setState({ status: "success", result: json.data as AnalysisResult });
    } catch {
      setState({
        status: "error",
        message: "Network error. Please check your connection and try again.",
      });
    }
  }

  function handleRetry() {
    setState({ status: "idle" });
  }

  function handleNewAnalysis() {
    setTopic("");
    setState({ status: "idle" });
  }

  const isLoading = state.status === "loading";
  const isError = state.status === "error";
  const isSuccess = state.status === "success";

  return (
    <div className="relative w-full max-w-2xl">
      <form onSubmit={handleSubmit}>
        <section
          className={cn(
            "h-15 rounded-xl flex flex-row justify-between border p-2 shadow-lg transition-all duration-200",
            isError ? "border-red-400 bg-red-50" : "border-gray-200 bg-white"
          )}
        >
          <input
            minLength={3}
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            disabled={isLoading}
            className="w-11/12 appearance-none outline-none border-0 ring-0 focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder={
              isSuccess ? "Enter another topic..." : "Enter a topic to see both sides..."
            }
          />
          <span
            className={cn(
              "w-10 h-10 rounded-full p-1 inline-flex items-center justify-center transition-colors",
              isLoading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600"
            )}
          >
            <button
              type="submit"
              disabled={isLoading || !isValid}
              aria-label={isLoading ? "Analyzing..." : "Submit Topic"}
              className="cursor-pointer disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <LoaderCircle className="animate-spin" color="#F9FAFB" size={20} />
              ) : (
                <ArrowUp color="#F9FAFB" size={20} />
              )}
            </button>
          </span>
        </section>
      </form>

      {isError && (
        <div className="mt-4 flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4">
          <AlertCircle className="mt-0.5 shrink-0 text-red-500" size={18} />
          <div className="flex-1">
            <p className="text-sm font-medium text-red-800">{state.message}</p>
            <button
              onClick={handleRetry}
              className="mt-2 text-sm font-medium text-red-600 underline underline-offset-2 hover:text-red-800 transition-colors"
            >
              Try again
            </button>
          </div>
        </div>
      )}

      {isSuccess && (
        <div className="mt-6 space-y-6 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-900">{state.result.topic}</h2>
            <p className="text-sm text-gray-500 mt-1">A balanced analysis of both perspectives</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-lg border border-emerald-200 bg-white p-4 shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100">
                  <ThumbsUp className="text-emerald-700" size={16} />
                </span>
                <span className="text-sm font-semibold text-emerald-800">In Favor</span>
              </div>
              <ul className="space-y-2">
                {state.result.proSide.map((arg, i) => (
                  <li key={i} className="flex gap-2 text-sm text-gray-700">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-medium text-emerald-700">
                      {i + 1}
                    </span>
                    {arg}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border border-rose-200 bg-white p-4 shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-rose-100">
                  <ThumbsDown className="text-rose-700" size={16} />
                </span>
                <span className="text-sm font-semibold text-rose-800">Against</span>
              </div>
              <ul className="space-y-2">
                {state.result.conSide.map((arg, i) => (
                  <li key={i} className="flex gap-2 text-sm text-gray-700">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-100 text-xs font-medium text-rose-700">
                      {i + 1}
                    </span>
                    {arg}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={handleNewAnalysis}
              className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 hover:shadow transition-all duration-150 cursor-pointer"
            >
              Analyze a new topic
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
