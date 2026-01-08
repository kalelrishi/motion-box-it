"use client";

import { motion } from "framer-motion";
import GeminiButton from "@/app/components/GeminiButton";

export default function StudioPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-[#f7f7fb] flex"
    >
      {/* Left Panel */}
      <section className="w-1/2 p-6">
        <div className="h-full rounded-2xl bg-white shadow-sm p-6 flex flex-col">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Script Engine
          </h2>

          <textarea
            placeholder="Type your story here..."
            className="flex-1 w-full resize-none rounded-xl border border-gray-200 p-4"
          />

          <button className="mt-4 self-start rounded-full bg-gray-900 text-white px-6 py-2 text-sm">
            Expand Story
          </button>
        </div>
      </section>

      {/* Right Panel */}
      <section className="w-1/2 p-6">
        <div className="h-full rounded-2xl bg-white shadow-sm p-6 space-y-6">
          <h2 className="text-lg font-semibold text-gray-900">
            Creative Controls
          </h2>

          <button className="w-full rounded-full bg-[#d8c7ff] px-6 py-3">
            Animate Your Imagination
          </button>
        </div>
      </section>

      <GeminiButton />
    </motion.main>
  );
}
