"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Avatar from "./Avatar";

interface Notification {
  id: string;
  type: "hate" | "comment" | "mention" | "milestone" | "system";
  title: string;
  body: string;
  timestamp: string;
  read: boolean;
  user?: {
    initials: string;
    avatarColor: string;
    avatarUrl?: string;
  };
}

const mockNotifications: Notification[] = [
  {
    id: "n1",
    type: "hate",
    title: "New Hate 🔥",
    body: "@solosavage hated the same couple you posted about. The cringe energy is real.",
    timestamp: "Just now",
    read: false,
    user: {
      initials: "SS",
      avatarColor: "#2563EB",
      avatarUrl: "/images/avatars/savage.png",
    },
  },
  {
    id: "n2",
    type: "comment",
    title: "New Comment 💬",
    body: "@singlebae replied: \"ikr! Very exhausting couple. I'm in oo\"",
    timestamp: "2 min ago",
    read: false,
    user: {
      initials: "SB",
      avatarColor: "#0D9488",
      avatarUrl: "/images/avatars/bae.png",
    },
  },
  {
    id: "n3",
    type: "milestone",
    title: "Achievement Unlocked 🏆",
    body: "You've hit 100 Hate Points! You're now a Certified Couple Hater™.",
    timestamp: "15 min ago",
    read: false,
  },
  {
    id: "n4",
    type: "mention",
    title: "You were mentioned 👀",
    body: "@pringlesingle tagged you in a rant about matching-outfit couples.",
    timestamp: "1 hr ago",
    read: true,
    user: {
      initials: "PS",
      avatarColor: "#7C3AED",
      avatarUrl: "/images/avatars/pringle.png",
    },
  },
  {
    id: "n5",
    type: "hate",
    title: "Hate Piling Up 💀",
    body: "@lonelyqueen and 3 others hated on \"PDA overload\". That couple is cooked.",
    timestamp: "2 hrs ago",
    read: true,
    user: {
      initials: "LQ",
      avatarColor: "#DB2777",
      avatarUrl: "/images/avatars/lonely.png",
    },
  },
  {
    id: "n6",
    type: "system",
    title: "Hinder Weekly 📊",
    body: "This week: 48 couples exposed, 840 hates delivered. The singles are winning.",
    timestamp: "5 hrs ago",
    read: true,
  },
];

interface NotificationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const typeIcons: Record<Notification["type"], string> = {
  hate: "🔥",
  comment: "💬",
  mention: "👀",
  milestone: "🏆",
  system: "📢",
};

const typeBadgeStyles: Record<Notification["type"], string> = {
  hate: "bg-red-100 text-red-700",
  comment: "bg-blue-100 text-blue-700",
  mention: "bg-purple-100 text-purple-700",
  milestone: "bg-amber-100 text-amber-700",
  system: "bg-zinc-100 text-zinc-700",
};

export default function NotificationDrawer({
  isOpen,
  onClose,
}: NotificationDrawerProps) {
  const [notifications, setNotifications] = useState(mockNotifications);
  const [filter, setFilter] = useState<"all" | "unread">("all");

  const unreadCount = notifications.filter((n) => !n.read).length;
  const displayed =
    filter === "unread" ? notifications.filter((n) => !n.read) : notifications;

  const markAllRead = useCallback(() => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  }, []);

  const markRead = useCallback((id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/40 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          {/* Drawer panel — slides down from top */}
          <motion.div
            className="fixed top-0 left-0 right-0 z-50 max-h-[85vh] flex flex-col bg-white rounded-b-3xl shadow-2xl overflow-hidden"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{
              type: "spring",
              damping: 32,
              stiffness: 300,
            }}
          >
            {/* Header row */}
            <div className="flex items-center justify-between px-5 pt-5 pb-3">
              <div className="flex items-center gap-2.5">
                <h2 className="text-lg font-bold text-zinc-900 tracking-tight">
                  Notifications
                </h2>
                {unreadCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="flex items-center justify-center w-5 h-5 rounded-full bg-[#8B0000] text-white text-[10px] font-bold"
                  >
                    {unreadCount}
                  </motion.span>
                )}
              </div>

              <div className="flex items-center gap-2">
                {unreadCount > 0 && (
                  <button
                    onClick={markAllRead}
                    className="text-xs font-semibold text-[#8B0000] hover:text-[#6B0000] transition-colors px-2 py-1 rounded-lg hover:bg-red-50"
                  >
                    Mark all read
                  </button>
                )}
                <motion.button
                  whileTap={{ scale: 0.85 }}
                  onClick={onClose}
                  className="p-1.5 rounded-xl hover:bg-zinc-100 transition-colors"
                  aria-label="Close notifications"
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
                    className="text-zinc-500"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </motion.button>
              </div>
            </div>

            {/* Filter tabs */}
            <div className="flex gap-2 px-5 pb-3">
              {(["all", "unread"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    filter === tab
                      ? "bg-zinc-900 text-white"
                      : "bg-zinc-100 text-zinc-500 hover:bg-zinc-200"
                  }`}
                >
                  {tab === "all" ? "All" : `Unread (${unreadCount})`}
                </button>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px bg-zinc-100 mx-5" />

            {/* Notification list */}
            <div className="flex-1 overflow-y-auto px-5 py-2 max-h-[60vh]">
              {displayed.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <span className="text-4xl mb-3">🎉</span>
                  <p className="text-sm font-semibold text-zinc-700">
                    All caught up!
                  </p>
                  <p className="text-xs text-zinc-400 mt-1">
                    No unread notifications. Go hate on some couples.
                  </p>
                </motion.div>
              ) : (
                <div className="space-y-1 py-1">
                  {displayed.map((notification, index) => (
                    <motion.button
                      key={notification.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.04, duration: 0.3 }}
                      onClick={() => markRead(notification.id)}
                      className={`w-full text-left flex items-start gap-3 p-3 rounded-2xl transition-all group cursor-pointer ${
                        notification.read
                          ? "hover:bg-zinc-50"
                          : "bg-[#8B0000]/[0.03] hover:bg-[#8B0000]/[0.06]"
                      }`}
                    >
                      {/* Avatar or icon */}
                      <div className="shrink-0 mt-0.5">
                        {notification.user ? (
                          <Avatar
                            initials={notification.user.initials}
                            color={notification.user.avatarColor}
                            imageUrl={notification.user.avatarUrl}
                            size="sm"
                          />
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-base">
                            {typeIcons[notification.type]}
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span
                            className={`text-[9px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded-md ${
                              typeBadgeStyles[notification.type]
                            }`}
                          >
                            {typeIcons[notification.type]}{" "}
                            {notification.type}
                          </span>
                          <span className="text-[10px] text-zinc-400 font-medium">
                            {notification.timestamp}
                          </span>
                        </div>
                        <p className="text-[13px] font-semibold text-zinc-800 leading-snug">
                          {notification.title}
                        </p>
                        <p className="text-xs text-zinc-500 leading-relaxed mt-0.5 line-clamp-2">
                          {notification.body}
                        </p>
                      </div>

                      {/* Unread dot */}
                      {!notification.read && (
                        <span className="shrink-0 w-2 h-2 rounded-full bg-[#8B0000] mt-2.5" />
                      )}
                    </motion.button>
                  ))}
                </div>
              )}
            </div>

            {/* Bottom drag hint */}
            <div className="flex justify-center py-3">
              <div className="w-10 h-1 rounded-full bg-zinc-200" />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
