"use client";

import { useState, useEffect, use } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import PostHeader from "@/components/PostHeader";
import HateBadge from "@/components/HateBadge";
import CommentSection from "@/components/CommentSection";
import HateButton from "@/components/HateButton";
import PostDetailSkeleton from "@/components/PostDetailSkeleton";
import BottomSheet from "@/components/BottomSheet";
import Avatar from "@/components/Avatar";
import { posts } from "@/lib/mock-data";

export default function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [isLoading, setIsLoading] = useState(true);
  const [isCommentOpen, setIsCommentOpen] = useState(false);

  const post = posts.find((p) => p.id === id);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (!post) {
    return (
      <div className="min-h-dvh flex items-center justify-center">
        <p className="text-zinc-500">Post not found</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-dvh">
        <PostDetailSkeleton />
      </div>
    );
  }

  return (
    <div className="min-h-dvh pb-8">
      <PostHeader title={post.title} />

      {/* Post image */}
      <motion.div
        className="px-5"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-100">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 448px) 100vw, 400px"
            priority
          />
          <HateBadge count={post.hateCount} />
        </div>
      </motion.div>

      {/* Post info */}
      <motion.div
        className="px-5 mt-4"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.4 }}
      >
        {/* User row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar
              initials={post.user.initials}
              color={post.user.avatarColor}
              size="sm"
            />
            <span className="text-sm font-medium text-zinc-900">
              @{post.user.username}&apos;s post
            </span>
          </div>
          <button
            id="destroy-button"
            className="text-sm font-medium text-[#8B0000] flex items-center gap-1 hover:opacity-80 transition-opacity"
          >
            Destroy with Hinder
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
          </button>
        </div>

        {/* Timestamp */}
        <p className="text-xs text-zinc-400 mt-1 pl-10">{post.timestamp}</p>

        {/* Caption */}
        <p className="text-sm text-zinc-700 leading-relaxed mt-3">
          {post.caption}
        </p>
      </motion.div>

      {/* Comments */}
      <motion.div
        className="px-5"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        <CommentSection
          comments={post.comments}
          onAddComment={() => setIsCommentOpen(true)}
        />
      </motion.div>

      {/* Hate button */}
      <motion.div
        className="px-5 mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.4 }}
      >
        <HateButton initialCount={post.hateCount} />
      </motion.div>

      {/* Add Comment Bottom Sheet */}
      <BottomSheet
        isOpen={isCommentOpen}
        onClose={() => setIsCommentOpen(false)}
        title="Add a comment"
      >
        <div className="space-y-4">
          <textarea
            id="comment-input"
            rows={3}
            placeholder="What do you think about this annoying couple? 💀"
            className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#8B0000]/20 focus:border-[#8B0000] transition-all resize-none"
            autoFocus
          />
          <button
            id="submit-comment-button"
            className="w-full py-3 rounded-full bg-[#8B0000] text-white font-semibold text-sm hover:bg-[#6B0000] transition-colors active:scale-[0.98]"
            onClick={() => setIsCommentOpen(false)}
          >
            Post comment 💬
          </button>
        </div>
      </BottomSheet>
    </div>
  );
}
