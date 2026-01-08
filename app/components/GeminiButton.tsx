"use client";

import { motion } from "framer-motion";

export default function GeminiButton() {
  return (
    <motion.button
      onClick={() => window.open("https://gemini.google.com", "_blank")}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-black text-white shadow-lg flex items-center justify-center text-xl"
      title="Open Gemini"
    >
      ✨
    </motion.button>
  );
}
