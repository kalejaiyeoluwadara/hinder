"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Post } from "@/lib/types";

interface LeaderboardViewProps {
  posts: Post[];
}

export default function LeaderboardView({ posts }: LeaderboardViewProps) {
  // Sort posts by hate count descending
  const sortedPosts = [...posts].sort((a, b) => b.hateCount - a.hateCount);

  const getRankBadge = (index: number) => {
    switch (index) {
      case 0:
        return {
          emoji: "👑",
          bg: "bg-amber-100 text-amber-800 border-amber-200",
          title: "Public Enemy #1",
        };
      case 1:
        return {
          emoji: "🥈",
          bg: "bg-slate-100 text-slate-800 border-slate-200",
          title: "PDA Silver Medal",
        };
      case 2:
        return {
          emoji: "🥉",
          bg: "bg-orange-100 text-orange-800 border-orange-200",
          title: "Cringe Bronze",
        };
      default:
        return {
          emoji: "💀",
          bg: "bg-zinc-100 text-zinc-800 border-zinc-200",
          title: "Dishonorable Mention",
        };
    }
  };

  return (
    <div className="px-5 space-y-6 pb-24">
      <div className="pt-2">
        <h2 className="text-2xl font-bold text-zinc-900 tracking-tight">Leaderboard</h2>
        <p className="text-sm text-zinc-500 mt-1">
          The most annoying, timeline-polluting couples, ranked by Hinder community hates.
        </p>
      </div>

      <div className="space-y-4">
        {sortedPosts.map((post, index) => {
          const rank = getRankBadge(index);
          return (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="relative bg-white border border-zinc-100 rounded-2xl p-4 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow"
            >
              {/* Rank Position Badge */}
              <div className="absolute -top-2.5 -left-2.5 flex items-center justify-center w-8 h-8 rounded-full bg-zinc-900 text-white font-bold text-sm shadow-md border-2 border-white">
                {index + 1}
              </div>

              {/* Couple Image Thumbnail */}
              <Link href={`/post/${post.id}`} className="shrink-0 relative w-16 h-16 rounded-xl overflow-hidden bg-zinc-50">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </Link>

              {/* Info Column */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${rank.bg}`}>
                    {rank.emoji} {rank.title}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-zinc-800 mt-1 truncate">
                  @{post.user.username}
                </h3>
                <p className="text-xs text-zinc-500 truncate mt-0.5">
                  {post.caption}
                </p>
              </div>

              {/* Hate Score Count */}
              <div className="text-right">
                <span className="block text-lg font-extrabold text-[#8B0000]">
                  {post.hateCount}
                </span>
                <span className="block text-[10px] font-semibold text-zinc-400 uppercase tracking-wider">
                  Hates
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
