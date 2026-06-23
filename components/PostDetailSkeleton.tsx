export default function PostDetailSkeleton() {
  return (
    <div className="animate-pulse">
      {/* Header skeleton */}
      <div className="flex items-center gap-3 px-5 pt-4 pb-3">
        <div className="w-6 h-6 rounded-full bg-zinc-200" />
        <div className="w-32 h-5 rounded-full bg-zinc-200" />
      </div>

      {/* Image skeleton */}
      <div className="px-5">
        <div className="w-full aspect-[4/3] rounded-2xl bg-zinc-200" />
      </div>

      {/* Post info skeleton */}
      <div className="px-5 mt-4 space-y-3">
        <div className="flex items-center justify-between">
          <div className="w-32 h-4 rounded-full bg-zinc-200" />
          <div className="w-28 h-4 rounded-full bg-zinc-200" />
        </div>
        <div className="w-16 h-3 rounded-full bg-zinc-200" />
        <div className="space-y-2">
          <div className="w-full h-3 rounded-full bg-zinc-200" />
          <div className="w-full h-3 rounded-full bg-zinc-200" />
          <div className="w-2/3 h-3 rounded-full bg-zinc-200" />
        </div>
      </div>

      {/* Comments skeleton */}
      <div className="px-5 mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="w-20 h-4 rounded-full bg-zinc-200" />
          <div className="w-24 h-6 rounded-full bg-zinc-200" />
        </div>
        {[1, 2].map((i) => (
          <div key={i} className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-zinc-200 shrink-0" />
            <div className="flex-1 space-y-2">
              <div className="w-24 h-3 rounded-full bg-zinc-200" />
              <div className="w-full h-3 rounded-full bg-zinc-200" />
            </div>
          </div>
        ))}
      </div>

      {/* Button skeleton */}
      <div className="px-5 mt-8">
        <div className="w-full h-12 rounded-full bg-zinc-200" />
      </div>
    </div>
  );
}
