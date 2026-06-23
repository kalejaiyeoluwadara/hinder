export default function FeedCardSkeleton() {
  return (
    <div className="px-5 animate-pulse">
      {/* Image skeleton */}
      <div className="w-full aspect-[4/3] rounded-2xl bg-zinc-200" />

      {/* User info row skeleton */}
      <div className="flex items-center justify-between mt-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-zinc-200" />
          <div className="w-24 h-4 rounded-full bg-zinc-200" />
        </div>
        <div className="w-16 h-4 rounded-full bg-zinc-200" />
      </div>

      {/* Caption skeleton */}
      <div className="mt-2 pl-10 space-y-2">
        <div className="w-full h-3 rounded-full bg-zinc-200" />
        <div className="w-3/4 h-3 rounded-full bg-zinc-200" />
      </div>
    </div>
  );
}
