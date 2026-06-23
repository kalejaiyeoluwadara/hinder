"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import CreatePostButton from "@/components/CreatePostButton";
import FeedCard from "@/components/FeedCard";
import FeedCardSkeleton from "@/components/FeedCardSkeleton";
import BottomSheet from "@/components/BottomSheet";
import BottomNav, { TabId } from "@/components/BottomNav";
import LeaderboardView from "@/components/LeaderboardView";
import ProfileView from "@/components/ProfileView";
import NotificationDrawer from "@/components/NotificationDrawer";
import { posts, currentUser } from "@/lib/mock-data";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<TabId>("feed");

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-dvh pb-8">
      {activeTab === "feed" && (
        <>
          <Header
            username={currentUser.username}
            initials={currentUser.initials}
            avatarColor={currentUser.avatarColor}
            avatarUrl={currentUser.avatarUrl}
            onNotificationsClick={() => setIsNotificationsOpen(true)}
          />

          {/* Create post button */}
          <div className="px-5 mt-3 mb-5">
            <CreatePostButton onClick={() => setIsCreateOpen(true)} />
          </div>

          {/* Feed */}
          <div className="space-y-6 pb-24">
            {isLoading
              ? Array.from({ length: 3 }).map((_, i) => (
                  <FeedCardSkeleton key={i} />
                ))
              : posts.map((post, i) => (
                  <FeedCard key={post.id} post={post} index={i} />
                ))}
          </div>
        </>
      )}

      {activeTab === "leaderboard" && (
        <LeaderboardView posts={posts} />
      )}

      {activeTab === "profile" && (
        <ProfileView
          user={currentUser}
          onBack={() => setActiveTab("feed")}
          onCreatePost={() => setIsCreateOpen(true)}
        />
      )}

      {/* Floating Bottom Nav */}
      <BottomNav activeTab={activeTab} onChange={setActiveTab} />

      {/* Notification Drawer */}
      <NotificationDrawer
        isOpen={isNotificationsOpen}
        onClose={() => setIsNotificationsOpen(false)}
      />

      {/* Create Post Bottom Sheet */}
      <BottomSheet
        isOpen={isCreateOpen}
        onClose={() => setIsCreateOpen(false)}
        title="Report an annoying couple"
      >
        <div className="space-y-4">
          <div>
            <label
              htmlFor="couple-name"
              className="text-sm font-medium text-zinc-700 block mb-1.5"
            >
              Give them a name
            </label>
            <input
              id="couple-name"
              type="text"
              placeholder="e.g. The PDA Kings"
              className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#8B0000]/20 focus:border-[#8B0000] transition-all"
            />
          </div>
          <div>
            <label
              htmlFor="couple-rant"
              className="text-sm font-medium text-zinc-700 block mb-1.5"
            >
              Why are they annoying?
            </label>
            <textarea
              id="couple-rant"
              rows={3}
              placeholder="Spill the tea... 🍵"
              className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#8B0000]/20 focus:border-[#8B0000] transition-all resize-none"
            />
          </div>
          <button
            id="submit-post-button"
            className="w-full py-3 rounded-full bg-[#8B0000] text-white font-semibold text-sm hover:bg-[#6B0000] transition-colors active:scale-[0.98]"
            onClick={() => setIsCreateOpen(false)}
          >
            Post to Hinder 🔥
          </button>
        </div>
      </BottomSheet>
    </div>
  );
}
