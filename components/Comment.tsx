"use client";

import { motion } from "framer-motion";
import Avatar from "./Avatar";
import { Comment as CommentType } from "@/lib/types";

interface CommentProps {
  comment: CommentType;
  index: number;
}

export default function Comment({ comment, index }: CommentProps) {
  return (
    <motion.div
      className="flex gap-3"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.3 }}
    >
      <Avatar
        initials={comment.user.initials}
        color={comment.user.avatarColor}
        imageUrl={comment.user.avatarUrl}
        size="sm"
      />
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-zinc-900">
            @{comment.user.username}
          </span>
          <button className="text-xs font-medium text-zinc-500 hover:text-zinc-700 transition-colors">
            Reply
          </button>
        </div>
        <p className="text-sm text-zinc-600 leading-relaxed mt-0.5">
          {comment.text}
        </p>
      </div>
    </motion.div>
  );
}
