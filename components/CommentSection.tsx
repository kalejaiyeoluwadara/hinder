"use client";

import { motion } from "framer-motion";
import Comment from "./Comment";
import { Comment as CommentType } from "@/lib/types";

interface CommentSectionProps {
  comments: CommentType[];
  onAddComment: () => void;
}

export default function CommentSection({
  comments,
  onAddComment,
}: CommentSectionProps) {
  return (
    <div className="mt-5">
      {/* Section header */}
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-zinc-900">Comments</h3>
        <motion.button
          id="add-comment-button"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-[#ffebe6] text-[#cc3333] hover:bg-[#ffddd6] transition-colors"
          onClick={onAddComment}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-sm leading-none">+</span>
          Add comment
        </motion.button>
      </div>

      {/* Comments list */}
      <div className="mt-4 space-y-4">
        {comments.map((comment, i) => (
          <Comment key={comment.id} comment={comment} index={i} />
        ))}
      </div>
    </div>
  );
}
