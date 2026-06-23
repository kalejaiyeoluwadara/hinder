"use client";

import { motion } from "framer-motion";
import Avatar from "./Avatar";
import { User } from "@/lib/types";

interface ProfileViewProps {
  user: User;
}

export default function ProfileView({ user }: ProfileViewProps) {
  const stats = [
    { label: "Broken Bonds", value: "12", description: "PDA posts flagged" },
    { label: "Hate Points", value: "840", description: "Top hater rank" },
    { label: "Self Love", value: "100%", description: "Timeline peace" },
  ];

  const badges = [
    { emoji: "🛡️", title: "PDA Shield", desc: "Immune to relationship cringe" },
    { emoji: "🔥", title: "Relationship Wrecker", desc: "Hated 10+ couples" },
    { emoji: "👑", title: "Proudly Single", desc: "Living the dream" },
  ];

  return (
    <div className="px-5 space-y-8 pb-24">
      {/* Profile Header Card */}
      <div className="flex flex-col items-center pt-4 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="relative rounded-full p-1 bg-gradient-to-tr from-[#8B0000] to-pink-500 shadow-lg"
        >
          <Avatar
            initials={user.initials}
            color={user.avatarColor}
            imageUrl={user.avatarUrl}
            size="lg"
          />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="text-xl font-bold text-zinc-950 mt-3"
        >
          {user.username}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mt-0.5"
        >
          Single Level: Master Class
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="text-sm text-zinc-650 mt-3 max-w-xs leading-relaxed"
        >
          &ldquo;Unapologetically single. Professional couple hater. On a mission to restore sanity and singlehood to my timeline.&rdquo;
        </motion.p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-3 gap-3">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + i * 0.08, duration: 0.4 }}
            className="bg-white border border-zinc-100 p-3.5 rounded-2xl text-center shadow-sm"
          >
            <span className="block text-xl font-extrabold text-[#8B0000] tracking-tight">
              {stat.value}
            </span>
            <span className="block text-[10px] font-bold text-zinc-800 mt-1 uppercase tracking-wider">
              {stat.label}
            </span>
            <span className="block text-[9px] text-zinc-400 mt-0.5 font-medium">
              {stat.description}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Achieved Badges */}
      <div className="space-y-3.5">
        <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-wider pl-1">
          Hater Badges ({badges.length})
        </h3>
        <div className="space-y-2.5">
          {badges.map((badge, i) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.35 }}
              className="flex items-center gap-3.5 p-3 rounded-2xl bg-zinc-50 border border-zinc-100"
            >
              <div className="text-2xl bg-white w-11 h-11 rounded-xl flex items-center justify-center shadow-sm">
                {badge.emoji}
              </div>
              <div>
                <h4 className="text-xs font-bold text-zinc-800">{badge.title}</h4>
                <p className="text-[11px] text-zinc-500 mt-0.5">{badge.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
