"use client";

import { useState } from "react";

export default function Home() {
    const [prompt, setPrompt] = useState("");
    const [answer, setAnswer] = useState("");
    const [loading, setLoading] = useState(false);

    const runPrompt = async () => {
        if (!prompt.trim()) return;
        setAnswer("");
        setLoading(true);

        const res = await fetch("/api/stream", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                system_prompt: "You are a helpful AI assistant.",
                user_prompt: prompt,
            }),
        });

        if (!res.body) return;

        const reader = res.body.getReader();
        const decoder = new TextDecoder();

        while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            const chunk = decoder.decode(value);
            setAnswer((prev) => prev + chunk);
        }

        setLoading(false);
    };

    return (
        <main className="p-6 max-w-2xl mx-auto">
            <h1 className="text-xl font-bold mb-4">AI Streaming Demo</h1>

            {/* Input form */}
            <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Type your question here..."
                className="w-full p-3 border rounded mb-4"
                rows={4}
            />

            {/* Run button */}
            <button
                onClick={runPrompt}
                disabled={loading}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg"
            >
                {loading ? "Running..." : "Run"}
            </button>

            {/* Answer output */}
            <div className="mt-6 whitespace-pre-wrap border p-4 rounded bg-gray-50">
                {answer || "Output will appear here..."}
            </div>
        </main>
    );
}
