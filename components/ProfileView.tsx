"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Avatar from "./Avatar";
import BottomSheet from "./BottomSheet";
import FeedCard from "./FeedCard";
import { User } from "@/lib/types";
import { posts } from "@/lib/mock-data";

interface ProfileViewProps {
  user: User;
  onBack?: () => void;
  onCreatePost?: () => void;
}

export default function ProfileView({ user, onBack, onCreatePost }: ProfileViewProps) {
  // Local profile states to support real-time updating
  const [profile, setProfile] = useState({
    name: user.username,
    handle: `@${user.username.toLowerCase().replace(/\s+/g, "")}`,
    bio: "Unapologetically single. Professional couple hater. On a mission to restore sanity and singlehood to my timeline.",
    location: "Single Headquarters",
    website: "hinder.app/single",
    joined: "Joined October 2024",
    status: "Cringe-Immune",
  });

  const [activeTab, setActiveTab] = useState<"hates" | "rants" | "badges">("hates");
  const [isEditOpen, setIsEditOpen] = useState(false);

  // Edit form states
  const [editName, setEditName] = useState(profile.name);
  const [editBio, setEditBio] = useState(profile.bio);
  const [editLocation, setEditLocation] = useState(profile.location);
  const [editWebsite, setEditWebsite] = useState(profile.website);
  const [editStatus, setEditStatus] = useState(profile.status);

  // Hardcoded counts for Hinder stats
  const stats = [
    { label: "Flagged", value: "12" },
    { label: "Hate Points", value: "840" },
    { label: "Badges", value: "3" },
  ];

  // List of badges
  const badges = [
    { emoji: "🛡️", title: "PDA Shield", type: "Sanity Defense", desc: "Immune to relationship cringe. Grants +50 peace.", unlocked: true },
    { emoji: "🔥", title: "Relation Wrecker", type: "Active Offense", desc: "Hated 10+ couples. Certified heart breaker.", unlocked: true },
    { emoji: "👑", title: "Proudly Single", type: "Legendary", desc: "Timeline is fully sanitized. Living the dream.", unlocked: true },
    { emoji: "🔒", title: "Terminator", type: "Epic Quest", desc: "Reach 1,000 hate points on feed. (840/1000)", unlocked: false },
  ];

  // Filter posts that this user "hated" (mocked)
  // Let's assume the user hated posts with ID "1", "3", "4"
  const hatedPosts = posts.filter((p) => p.id !== "2");

  const handleSave = () => {
    setProfile({
      ...profile,
      name: editName,
      bio: editBio,
      location: editLocation,
      website: editWebsite,
      status: editStatus,
    });
    setIsEditOpen(false);
  };

  const tabs = [
    { id: "hates", label: "Hates" },
    { id: "rants", label: "Rants" },
    { id: "badges", label: "Badges" },
  ] as const;

  return (
    <div className="bg-white min-h-screen pb-24 font-sans text-zinc-900">
      {/* Sticky Header Bar */}
      <div className="sticky top-0 z-20 bg-white/80 backdrop-blur-md border-b border-zinc-100 flex items-center gap-6 px-4 py-2">
        {onBack && (
          <button
            onClick={onBack}
            className="p-2 -ml-2 rounded-full hover:bg-zinc-100 transition-colors active:scale-95"
            aria-label="Back"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>
        )}
        <div className="flex flex-col">
          <h2 className="text-base font-extrabold tracking-tight leading-tight">
            {profile.name}
          </h2>
          <span className="text-[11px] text-zinc-400 font-medium">
            {activeTab === "hates" && `${hatedPosts.length} Hates`}
            {activeTab === "rants" && "0 Rants"}
            {activeTab === "badges" && `${badges.filter((b) => b.unlocked).length} Badges`}
          </span>
        </div>
      </div>

      {/* Cover Banner */}
      <div className="relative h-32 w-full bg-gradient-to-r from-red-950 via-zinc-900 to-[#8B0000] overflow-hidden flex items-end justify-end px-4 pb-2">
        {/* Broken heart abstract vector overlay */}
        <svg
          className="absolute -right-6 -bottom-6 text-white/5 w-28 h-28 transform rotate-12 pointer-events-none select-none"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          <path d="M12 5v14" strokeDasharray="3 3" />
        </svg>
        <span className="text-[10px] text-white/30 font-bold uppercase tracking-widest font-mono select-none">
          Anti-PDA Shield
        </span>
      </div>

      {/* Profile Details Area */}
      <div className="px-4 relative">
        {/* Avatar Overlap + Edit Button row */}
        <div className="flex justify-between items-end -mt-10 mb-2.5">
          <div className="rounded-full border-4 border-white shadow-sm overflow-hidden bg-white shrink-0">
            <Avatar
              initials={user.initials}
              color={user.avatarColor}
              imageUrl={user.avatarUrl}
              size="xl"
            />
          </div>
          <button
            onClick={() => setIsEditOpen(true)}
            className="px-4 py-1.5 border border-zinc-200 hover:bg-zinc-50 active:scale-98 transition-all rounded-full text-xs font-bold text-zinc-900"
          >
            Edit profile
          </button>
        </div>

        {/* User Identity */}
        <div className="space-y-1">
          <h1 className="text-xl font-extrabold text-zinc-950 tracking-tight leading-tight">
            {profile.name}
          </h1>
          <p className="text-xs text-zinc-400 font-semibold">{profile.handle}</p>
        </div>

        {/* Bio */}
        <p className="text-sm text-zinc-700 leading-normal mt-3 pr-2">
          {profile.bio}
        </p>

        {/* Metadata */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-zinc-500 font-medium mt-3.5 border-b border-zinc-100 pb-4">
          <div className="flex items-center gap-1.5">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-zinc-400"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>{profile.location}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-zinc-400"
            >
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>
            <a
              href={`https://${profile.website}`}
              target="_blank"
              rel="noreferrer"
              className="text-[#8B0000] hover:underline"
            >
              {profile.website}
            </a>
          </div>

          <div className="flex items-center gap-1.5">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-zinc-400"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <span>{profile.joined}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-zinc-400"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span className="text-emerald-600 font-semibold">{profile.status}</span>
          </div>
        </div>

        {/* Stats Row */}
        <div className="flex items-center gap-6 py-3.5 text-xs text-zinc-500 border-b border-zinc-100">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-baseline gap-1">
              <span className="font-extrabold text-zinc-950 text-sm">{stat.value}</span>
              <span className="text-zinc-500 font-medium">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Animated Tabs Navigation */}
        <div className="flex border-b border-zinc-100 -mx-4">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="flex-1 text-center py-3.5 relative text-sm font-bold transition-colors focus:outline-none"
                style={{ color: isActive ? "#09090b" : "#71717a" }}
              >
                {tab.label}
                {isActive && (
                  <motion.div
                    layoutId="activeProfileTabUnderline"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-14 h-[3px] bg-[#8B0000] rounded-full"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Feed Content */}
      <div className="mt-4">
        <AnimatePresence mode="wait">
          {activeTab === "hates" && (
            <motion.div
              key="hates"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              {hatedPosts.map((post, i) => (
                <FeedCard key={post.id} post={post} index={i} />
              ))}
            </motion.div>
          )}

          {activeTab === "rants" && (
            <motion.div
              key="rants"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-center py-12 px-6 flex flex-col items-center justify-center"
            >
              {/* Funny megaphone icon */}
              <div className="w-16 h-16 bg-zinc-50 rounded-2xl flex items-center justify-center border border-zinc-100 shadow-sm mb-4">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-zinc-400"
                >
                  <path d="M12 19l7-7 3 3-7 7-3-3z" />
                  <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                  <path d="M2 2l7.5 1.5" />
                  <path d="M14 11l-5-5" />
                </svg>
              </div>
              <h3 className="text-sm font-bold text-zinc-800 uppercase tracking-wide">
                No rants yet
              </h3>
              <p className="text-xs text-zinc-500 mt-1.5 max-w-[240px] leading-relaxed">
                Seen a couple posting cringe cheesy selfies? Spill the tea and destroy their peace!
              </p>
              {onCreatePost && (
                <button
                  onClick={onCreatePost}
                  className="mt-4 px-6 py-2 bg-[#8B0000] text-white text-xs font-bold rounded-full hover:bg-[#6B0000] active:scale-95 transition-all shadow-sm flex items-center gap-1.5"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                  Report a Couple
                </button>
              )}
            </motion.div>
          )}

          {activeTab === "badges" && (
            <motion.div
              key="badges"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="px-4 grid grid-cols-1 gap-3"
            >
              {badges.map((badge, i) => (
                <motion.div
                  key={badge.title}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className={`flex items-center gap-4 p-3.5 rounded-2xl border transition-all ${
                    badge.unlocked
                      ? "bg-gradient-to-br from-zinc-50 to-white border-zinc-100 shadow-sm"
                      : "bg-zinc-50/50 border-zinc-100 opacity-60"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-sm ${
                      badge.unlocked ? "bg-white" : "bg-zinc-100 border border-zinc-200"
                    }`}
                  >
                    {badge.emoji}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold text-zinc-950">{badge.title}</h4>
                      <span
                        className={`text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                          badge.unlocked
                            ? "bg-[#ffebe6] text-[#8B0000]"
                            : "bg-zinc-200 text-zinc-500"
                        }`}
                      >
                        {badge.type}
                      </span>
                    </div>
                    <p className="text-[11px] text-zinc-500 mt-1 leading-normal">
                      {badge.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Edit Profile Bottom Sheet */}
      <BottomSheet
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        title="Edit Profile"
      >
        <div className="space-y-4 pb-2">
          {/* Display Name Input */}
          <div>
            <label
              htmlFor="display-name"
              className="text-xs font-bold text-zinc-500 uppercase tracking-wider block mb-1.5"
            >
              Display Name
            </label>
            <input
              id="display-name"
              type="text"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
              placeholder="Display Name"
              className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#8B0000]/20 focus:border-[#8B0000] transition-all"
            />
          </div>

          {/* Bio Textarea */}
          <div>
            <label
              htmlFor="edit-bio"
              className="text-xs font-bold text-zinc-500 uppercase tracking-wider block mb-1.5"
            >
              Bio
            </label>
            <textarea
              id="edit-bio"
              rows={3}
              value={editBio}
              onChange={(e) => setEditBio(e.target.value)}
              placeholder="Describe your hater persona..."
              className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#8B0000]/20 focus:border-[#8B0000] transition-all resize-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            {/* Location Input */}
            <div>
              <label
                htmlFor="edit-location"
                className="text-xs font-bold text-zinc-500 uppercase tracking-wider block mb-1.5"
              >
                Location
              </label>
              <input
                id="edit-location"
                type="text"
                value={editLocation}
                onChange={(e) => setEditLocation(e.target.value)}
                placeholder="Where do you hate?"
                className="w-full px-3 py-2.5 rounded-xl border border-zinc-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#8B0000]/20 focus:border-[#8B0000] transition-all"
              />
            </div>

            {/* Website Input */}
            <div>
              <label
                htmlFor="edit-website"
                className="text-xs font-bold text-zinc-500 uppercase tracking-wider block mb-1.5"
              >
                Website
              </label>
              <input
                id="edit-website"
                type="text"
                value={editWebsite}
                onChange={(e) => setEditWebsite(e.target.value)}
                placeholder="Your link..."
                className="w-full px-3 py-2.5 rounded-xl border border-zinc-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#8B0000]/20 focus:border-[#8B0000] transition-all"
              />
            </div>
          </div>

          {/* Single Status Select */}
          <div>
            <label
              htmlFor="edit-status"
              className="text-xs font-bold text-zinc-500 uppercase tracking-wider block mb-1.5"
            >
              Single Status Level
            </label>
            <select
              id="edit-status"
              value={editStatus}
              onChange={(e) => setEditStatus(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#8B0000]/20 focus:border-[#8B0000] transition-all bg-white"
            >
              <option value="Cringe-Immune">Cringe-Immune Hater</option>
              <option value="Relationship Terminator">Relationship Terminator</option>
              <option value="Master of Solitude">Master of Solitude</option>
              <option value="Unapologetic Professional">Unapologetic Professional</option>
              <option value="Timeline Peacekeeper">Timeline Peacekeeper</option>
            </select>
          </div>

          {/* Save Button */}
          <button
            onClick={handleSave}
            className="w-full py-3 mt-2 rounded-full bg-[#8B0000] text-white font-bold text-sm hover:bg-[#6B0000] transition-colors active:scale-[0.98] shadow-sm"
          >
            Save changes
          </button>
        </div>
      </BottomSheet>
    </div>
  );
}
