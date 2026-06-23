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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
  };

  const closeCreateSheet = () => {
    setIsCreateOpen(false);
    setSelectedImage(null);
  };

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
        onClose={closeCreateSheet}
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

          {/* Photographic Evidence Upload */}
          <div>
            <label className="text-sm font-medium text-zinc-700 block mb-1.5">
              Photographic Evidence
            </label>
            <input
              id="cringe-image-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
            {selectedImage ? (
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] w-full bg-zinc-100 border border-zinc-200 shadow-inner group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selectedImage}
                  alt="Cringe evidence"
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={handleRemoveImage}
                  className="absolute top-2.5 right-2.5 p-1.5 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors shadow-sm active:scale-90"
                  aria-label="Remove image"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
                <div className="absolute bottom-2.5 left-2.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md text-[9px] font-bold text-white uppercase tracking-wider">
                  Evidence Loaded 📸
                </div>
              </div>
            ) : (
              <label
                htmlFor="cringe-image-upload"
                className="flex flex-col items-center justify-center border-2 border-dashed border-zinc-200 hover:border-[#8B0000]/40 rounded-2xl py-6 px-4 text-center cursor-pointer transition-all hover:bg-zinc-50 bg-zinc-50/50 group"
              >
                <div className="p-2.5 bg-white rounded-xl shadow-sm border border-zinc-100 text-zinc-400 group-hover:text-[#8B0000] group-hover:border-[#8B0000]/25 transition-all">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                </div>
                <span className="text-xs font-bold text-zinc-700 mt-2.5">
                  Upload photographic proof
                </span>
                <span className="text-[10px] text-zinc-400 mt-0.5 font-medium">
                  Cheesy smiles, matching outfits, or PDA selfies
                </span>
              </label>
            )}
          </div>

          <button
            id="submit-post-button"
            className="w-full py-3 rounded-full bg-[#8B0000] text-white font-semibold text-sm hover:bg-[#6B0000] transition-colors active:scale-[0.98] shadow-sm mt-2"
            onClick={closeCreateSheet}
          >
            Post to Hinder 🔥
          </button>
        </div>
      </BottomSheet>
    </div>
  );
}
