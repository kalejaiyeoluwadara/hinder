"use client";

import { motion } from "framer-motion";

interface HateBadgeProps {
  count: number;
}

export default function HateBadge({ count }: HateBadgeProps) {
  return (
    <motion.div
      className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-sm"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.3, type: "spring", stiffness: 400, damping: 15 }}
    >
      <span className="text-xs font-semibold text-zinc-900">
        {count} hates
      </span>
    </motion.div>
  );
}
