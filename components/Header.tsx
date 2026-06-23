"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Avatar from "./Avatar";

interface HeaderProps {
  username: string;
  initials: string;
  avatarColor: string;
  avatarUrl?: string;
  onNotificationsClick?: () => void;
}

export default function Header({
  username,
  initials,
  avatarColor,
  avatarUrl,
  onNotificationsClick,
}: HeaderProps) {
  const [showSearch, setShowSearch] = useState(false);

  // Get time-based greeting
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 17) return "Good afternoon";
    return "Good evening";
  };

  return (
    <motion.header
      className="sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b border-zinc-100/60"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Main nav row */}
      <div className="flex items-center justify-between px-5 pt-4 pb-3">
        {/* Left: Avatar + Greeting */}
        <div className="flex items-center gap-3">
          <motion.div
            whileTap={{ scale: 0.92 }}
            className="relative"
          >
            <Avatar
              initials={initials}
              color={avatarColor}
              imageUrl={avatarUrl}
              size="md"
            />
            {/* Online indicator */}
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white" />
          </motion.div>
          <div className="flex flex-col">
            <span className="text-[11px] font-medium text-zinc-400 leading-tight">
              {getGreeting()} 👋
            </span>
            <h1 className="text-[15px] font-bold text-zinc-900 leading-snug tracking-tight">
              {username}
            </h1>
          </div>
        </div>

        {/* Right: Action buttons */}
        <div className="flex items-center gap-1">
          {/* Search toggle */}
          <motion.button
            id="search-button"
            whileTap={{ scale: 0.88 }}
            onClick={() => setShowSearch(!showSearch)}
            className="relative p-2.5 rounded-xl hover:bg-zinc-100 transition-colors"
            aria-label="Search"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-zinc-700"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </motion.button>

          {/* Notifications */}
          <motion.button
            id="notifications-button"
            whileTap={{ scale: 0.88 }}
            onClick={onNotificationsClick}
            className="relative p-2.5 rounded-xl hover:bg-zinc-100 transition-colors"
            aria-label="Notifications"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-zinc-700"
            >
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
            {/* Notification badge with pulse */}
            <span className="absolute top-2 right-2 flex items-center justify-center">
              <span className="absolute w-4 h-4 rounded-full bg-[#8B0000]/30 animate-ping" />
              <span className="relative w-2.5 h-2.5 rounded-full bg-[#8B0000] border border-white" />
            </span>
          </motion.button>
        </div>
      </div>

      {/* Expandable search bar */}
      <AnimatePresence>
        {showSearch && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-3">
              <div className="relative">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
                <input
                  id="search-input"
                  type="text"
                  placeholder="Search annoying couples..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-zinc-100 text-sm text-zinc-800 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#8B0000]/15 focus:bg-white transition-all border border-transparent focus:border-zinc-200"
                  autoFocus
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
