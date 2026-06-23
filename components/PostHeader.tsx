"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

interface PostHeaderProps {
  title: string;
}

export default function PostHeader({ title }: PostHeaderProps) {
  const router = useRouter();

  return (
    <motion.header
      className="flex items-center gap-3 px-5 pt-4 pb-3"
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <button
        id="back-button"
        onClick={() => router.back()}
        className="p-1 -ml-1 rounded-full hover:bg-zinc-100 transition-colors"
        aria-label="Go back"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-zinc-900"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <h1 className="text-lg font-semibold text-zinc-900">{title}</h1>
    </motion.header>
  );
}
