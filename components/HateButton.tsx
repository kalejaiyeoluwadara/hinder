"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface HateButtonProps {
  initialCount?: number;
  onHate?: () => void;
}

export default function HateButton({ initialCount, onHate }: HateButtonProps) {
  const [hated, setHated] = useState(false);

  const handleHate = () => {
    setHated(true);
    onHate?.();
  };

  return (
    <motion.button
      id="hate-button"
      className={`w-full py-4 rounded-full font-semibold text-base transition-colors ${
        hated
          ? "bg-zinc-800 text-zinc-300 cursor-default"
          : "bg-[#8B0000] text-white active:bg-[#6B0000]"
      }`}
      whileTap={hated ? {} : { scale: 0.97 }}
      whileHover={hated ? {} : { scale: 1.01 }}
      onClick={handleHate}
      disabled={hated}
    >
      {hated ? "You hated their relationship 💔" : "Hate on their relationship"}
    </motion.button>
  );
}
