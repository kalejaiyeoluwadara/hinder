"use client";

import { motion } from "framer-motion";

export type TabId = "feed" | "leaderboard" | "profile";

interface Tab {
  id: TabId;
  label: string;
  icon: React.ReactNode;
}

interface BottomNavProps {
  activeTab: TabId;
  onChange: (tabId: TabId) => void;
}

export default function BottomNav({ activeTab, onChange }: BottomNavProps) {
  const tabs: Tab[] = [
    {
      id: "feed",
      label: "Feed",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
    {
      id: "leaderboard",
      label: "Top Hates",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
        </svg>
      ),
    },
    {
      id: "profile",
      label: "Profile",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
    },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-full max-w-[448px] px-6 z-40">
      <nav className="flex items-center justify-around bg-zinc-900/95 backdrop-blur-md py-2.5 px-3 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.24)] border border-zinc-800">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onChange(tab.id)}
              className="relative flex flex-col items-center gap-1 py-1.5 px-4 rounded-full text-xs font-medium transition-colors cursor-pointer select-none focus:outline-none"
              style={{
                color: isActive ? "#ffffff" : "#a1a1aa",
              }}
            >
              {isActive && (
                <motion.div
                  layoutId="active-tab"
                  className="absolute inset-0 bg-white/10 rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className={`relative z-10 ${isActive ? "text-white" : "text-zinc-400"}`}>
                {tab.icon}
              </span>
              <span className="relative z-10 text-[10px] tracking-wide">
                {tab.label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
