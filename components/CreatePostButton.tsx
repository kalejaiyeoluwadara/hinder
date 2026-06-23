"use client";

import { motion } from "framer-motion";

interface CreatePostButtonProps {
  onClick: () => void;
}

export default function CreatePostButton({ onClick }: CreatePostButtonProps) {
  return (
    <motion.button
      id="create-post-button"
      className="w-full flex items-center justify-center gap-2 py-3 px-5 mx-auto border border-zinc-200 rounded-full text-sm text-zinc-500 hover:border-zinc-300 hover:text-zinc-700 transition-colors bg-white"
      onClick={onClick}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15, duration: 0.4 }}
    >
      <span className="text-zinc-400 text-lg leading-none">+</span>
      Which couple is annoying you today?
    </motion.button>
  );
}
