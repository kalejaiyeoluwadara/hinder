"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Avatar from "./Avatar";
import { Post } from "@/lib/types";

interface LeaderboardViewProps {
  posts: Post[];
}

export default function LeaderboardView({ posts }: LeaderboardViewProps) {
  const sortedPosts = [...posts].sort((a, b) => b.hateCount - a.hateCount);
  const [activeFilter, setActiveFilter] = useState<"all" | "week" | "today">("all");

  const maxHates = sortedPosts[0]?.hateCount || 1;

  // Community stats
  const totalHates = sortedPosts.reduce((sum, p) => sum + p.hateCount, 0);
  const totalComments = sortedPosts.reduce((sum, p) => sum + p.comments.length, 0);

  const top3 = sortedPosts.slice(0, 3);

  // Podium ordering: 2nd, 1st, 3rd (visual podium layout)
  const podiumOrder = top3.length >= 3 ? [top3[1], top3[0], top3[2]] : top3;
  const podiumHeights = ["h-24", "h-32", "h-20"];
  const podiumColors = [
    "from-zinc-300 to-zinc-400",       // Silver (2nd)
    "from-amber-400 to-yellow-500",    // Gold (1st)
    "from-orange-300 to-amber-400",    // Bronze (3rd)
  ];
  const podiumEmojis = ["🥈", "👑", "🥉"];
  const podiumRanks = [2, 1, 3];

  return (
    <div className="pb-28">
      {/* Hero header with dark gradient */}
      <motion.div
        className="relative overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-800 px-5 pt-5 pb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Decorative background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#8B0000]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl" />

        {/* Title area */}
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          <div className="flex items-center gap-2 mb-1">
            <span className="text-2xl">🔥</span>
            <h2 className="text-xl font-extrabold text-white tracking-tight">
              Hall of Shame
            </h2>
          </div>
          <p className="text-xs text-zinc-400 leading-relaxed max-w-[280px]">
            The most annoying couples on the internet, ranked by community hatred.
          </p>
        </motion.div>

        {/* Filter pills */}
        <motion.div
          className="relative z-10 flex gap-2 mt-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          {(["all", "week", "today"] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all ${
                activeFilter === filter
                  ? "bg-[#8B0000] text-white shadow-lg shadow-[#8B0000]/30"
                  : "bg-white/10 text-zinc-400 hover:bg-white/15"
              }`}
            >
              {filter === "all" ? "All Time" : filter === "week" ? "This Week" : "Today"}
            </button>
          ))}
        </motion.div>

        {/* Podium section */}
        {top3.length >= 3 && (
          <motion.div
            className="relative z-10 flex items-end justify-center gap-2 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {podiumOrder.map((post, i) => (
              <Link
                key={post.id}
                href={`/post/${post.id}`}
                className="flex flex-col items-center flex-1 max-w-[120px] group"
              >
                {/* Avatar + crown for #1 */}
                <motion.div
                  className="relative mb-2"
                  initial={{ scale: 0, y: 20 }}
                  animate={{ scale: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1, type: "spring", stiffness: 200, damping: 12 }}
                >
                  {podiumRanks[i] === 1 && (
                    <motion.span
                      className="absolute -top-5 left-1/2 -translate-x-1/2 text-2xl z-10"
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.8, type: "spring", stiffness: 300, damping: 10 }}
                    >
                      👑
                    </motion.span>
                  )}
                  <div className={`relative rounded-full overflow-hidden border-2 ${
                    podiumRanks[i] === 1 ? "w-16 h-16 border-amber-400" :
                    podiumRanks[i] === 2 ? "w-13 h-13 border-zinc-400" :
                    "w-12 h-12 border-orange-400"
                  }`}>
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      sizes="64px"
                    />
                  </div>
                </motion.div>

                {/* Username */}
                <span className="text-[10px] font-bold text-zinc-300 truncate max-w-full text-center">
                  @{post.user.username}
                </span>

                {/* Hate count */}
                <span className="text-sm font-extrabold text-white mt-0.5">
                  {post.hateCount}
                </span>

                {/* Podium bar */}
                <motion.div
                  className={`w-full ${podiumHeights[i]} rounded-t-xl bg-gradient-to-t ${podiumColors[i]} mt-2 flex items-start justify-center pt-2 relative overflow-hidden`}
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.5, ease: "easeOut" }}
                >
                  <span className="text-xl">{podiumEmojis[i]}</span>
                  {/* Shimmer effect on gold */}
                  {podiumRanks[i] === 1 && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                  )}
                </motion.div>
              </Link>
            ))}
          </motion.div>
        )}
      </motion.div>

      {/* Community stats bar */}
      <motion.div
        className="grid grid-cols-3 border-b border-zinc-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.4 }}
      >
        {[
          { label: "Total Hates", value: totalHates, icon: "🔥" },
          { label: "Couples Exposed", value: sortedPosts.length, icon: "💔" },
          { label: "Comments", value: totalComments, icon: "💬" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            className={`py-3.5 text-center ${i < 2 ? "border-r border-zinc-100" : ""}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 + i * 0.08, duration: 0.3 }}
          >
            <div className="flex items-center justify-center gap-1">
              <span className="text-sm">{stat.icon}</span>
              <span className="text-base font-extrabold text-zinc-900">
                {stat.value}
              </span>
            </div>
            <span className="text-[9px] font-semibold text-zinc-400 uppercase tracking-widest">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* Full ranked list */}
      <div className="px-5 mt-5">
        <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-3 pl-1">
          Full Rankings
        </h3>

        <div className="space-y-3">
          {sortedPosts.map((post, index) => {
            const barWidth = Math.max((post.hateCount / maxHates) * 100, 15);
            const isTop3 = index < 3;

            return (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.08, duration: 0.4 }}
              >
                <Link
                  href={`/post/${post.id}`}
                  className={`block rounded-2xl p-3.5 transition-all group ${
                    isTop3
                      ? "bg-gradient-to-r from-[#8B0000]/[0.04] to-transparent border border-[#8B0000]/10 hover:border-[#8B0000]/25"
                      : "bg-zinc-50 border border-zinc-100 hover:bg-zinc-100/80"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {/* Rank number */}
                    <div className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-extrabold text-sm ${
                      index === 0 ? "bg-amber-100 text-amber-700" :
                      index === 1 ? "bg-zinc-200 text-zinc-600" :
                      index === 2 ? "bg-orange-100 text-orange-700" :
                      "bg-zinc-100 text-zinc-500"
                    }`}>
                      {index < 3 ? (
                        <span className="text-base">
                          {index === 0 ? "🥇" : index === 1 ? "🥈" : "🥉"}
                        </span>
                      ) : (
                        <span>#{index + 1}</span>
                      )}
                    </div>

                    {/* Image */}
                    <div className="shrink-0 relative w-11 h-11 rounded-xl overflow-hidden bg-zinc-100">
                      <Image
                        src={post.imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                        sizes="44px"
                      />
                    </div>

                    {/* Info + progress bar */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <Avatar
                          initials={post.user.initials}
                          color={post.user.avatarColor}
                          imageUrl={post.user.avatarUrl}
                          size="sm"
                        />
                        <span className="text-[13px] font-bold text-zinc-800 truncate">
                          @{post.user.username}
                        </span>
                      </div>

                      {/* Hate progress bar */}
                      <div className="flex items-center gap-2 mt-1.5">
                        <div className="flex-1 h-2 rounded-full bg-zinc-200/60 overflow-hidden">
                          <motion.div
                            className={`h-full rounded-full ${
                              index === 0
                                ? "bg-gradient-to-r from-[#8B0000] to-red-500"
                                : index === 1
                                ? "bg-gradient-to-r from-zinc-500 to-zinc-400"
                                : index === 2
                                ? "bg-gradient-to-r from-orange-500 to-amber-400"
                                : "bg-zinc-400"
                            }`}
                            initial={{ width: 0 }}
                            animate={{ width: `${barWidth}%` }}
                            transition={{
                              delay: 1.0 + index * 0.12,
                              duration: 0.8,
                              ease: [0.25, 0.46, 0.45, 0.94],
                            }}
                          />
                        </div>
                        <span className={`text-xs font-extrabold shrink-0 ${
                          isTop3 ? "text-[#8B0000]" : "text-zinc-500"
                        }`}>
                          {post.hateCount}
                        </span>
                      </div>
                    </div>

                    {/* Trend arrow */}
                    <div className="shrink-0 flex flex-col items-center">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={index < 2 ? "text-red-500 rotate-0" : "text-zinc-400 rotate-180"}
                      >
                        <path d="M12 19V5" />
                        <path d="m5 12 7-7 7 7" />
                      </svg>
                      <span className="text-[8px] font-bold text-zinc-400 uppercase mt-0.5">
                        {index < 2 ? "Hot" : "Stale"}
                      </span>
                    </div>
                  </div>

                  {/* Caption preview for top 3 */}
                  {isTop3 && (
                    <p className="text-[11px] text-zinc-500 mt-2 pl-[76px] line-clamp-1 leading-relaxed">
                      &ldquo;{post.caption}&rdquo;
                    </p>
                  )}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Community CTA */}
      <motion.div
        className="mx-5 mt-6 p-4 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-800 text-center relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#8B0000]/10 via-transparent to-amber-500/10" />
        <div className="relative z-10">
          <span className="text-2xl">💀</span>
          <p className="text-sm font-bold text-white mt-1.5">
            Know an annoying couple?
          </p>
          <p className="text-[11px] text-zinc-400 mt-0.5">
            Report them and let the community deliver justice.
          </p>
          <button className="mt-3 px-5 py-2 rounded-full bg-[#8B0000] text-white text-xs font-bold hover:bg-[#6B0000] transition-colors active:scale-95">
            Report a Couple 🔥
          </button>
        </div>
      </motion.div>
    </div>
  );
}
