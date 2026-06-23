"use client";

import { motion } from "framer-motion";
import Avatar from "./Avatar";

interface HeaderProps {
  username: string;
  initials: string;
  avatarColor: string;
}

export default function Header({
  username,
  initials,
  avatarColor,
}: HeaderProps) {
  return (
    <motion.header
      className="flex items-center justify-between px-5 pt-4 pb-2"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="flex items-center gap-3">
        <Avatar initials={initials} color={avatarColor} size="md" />
        <h1 className="text-base font-semibold text-zinc-900">
          Welcome back, {username}
        </h1>
      </div>
      <button
        id="notifications-button"
        className="relative p-2 rounded-full hover:bg-zinc-100 transition-colors"
        aria-label="Notifications"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-zinc-800"
        >
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
        <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-zinc-900 rounded-full" />
      </button>
    </motion.header>
  );
}
