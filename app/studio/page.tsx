

"use client";

import { motion } from "framer-motion";

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
            className="flex-1 w-full resize-none rounded-xl border border-gray-200 p-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#d8c7ff]"
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

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Language
            </label>
            <select className="w-full rounded-lg border border-gray-200 p-2">
              <option>English</option>
              <option>Hindi</option>
              <option>Telugu</option>
              <option>Tamil</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Visual Style
            </label>
            <select className="w-full rounded-lg border border-gray-200 p-2">
              <option>Anime</option>
              <option>3D Story</option>
              <option>Kids Cartoon</option>
            </select>
          </div>

          <button className="w-full rounded-full bg-[#d8c7ff] px-6 py-3 text-base font-medium">
            Animate Your Imagination
          </button>
        </div>
      </section>
    </motion.main>
  );
}
