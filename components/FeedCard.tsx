"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Avatar from "./Avatar";
import HateBadge from "./HateBadge";
import { Post } from "@/lib/types";

interface FeedCardProps {
  post: Post;
  index: number;
}

export default function FeedCard({ post, index }: FeedCardProps) {
  return (
    <motion.article
      className="px-5"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.1,
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {/* Couple Image */}
      <Link href={`/post/${post.id}`} className="block">
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-100">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 448px) 100vw, 400px"
          />
          <HateBadge count={post.hateCount} />
        </div>
      </Link>

      {/* User info row */}
      <div className="flex items-center justify-between mt-3">
        <div className="flex items-center gap-2">
          <Avatar
            initials={post.user.initials}
            color={post.user.avatarColor}
            size="sm"
          />
          <span className="text-sm font-medium text-zinc-900">
            @{post.user.username}
          </span>
        </div>
        <Link
          href={`/post/${post.id}`}
          className="text-sm font-medium text-[#8B0000] flex items-center gap-1 hover:opacity-80 transition-opacity"
        >
          View post
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </Link>
      </div>

      {/* Caption preview */}
      <p className="mt-1.5 text-sm text-zinc-600 leading-relaxed line-clamp-2 pl-10">
        {post.caption}
      </p>
    </motion.article>
  );
}
