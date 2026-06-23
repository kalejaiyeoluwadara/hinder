import Image from "next/image";

interface AvatarProps {
  initials: string;
  color: string;
  imageUrl?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const sizeMap = {
  sm: "w-8 h-8 text-xs",
  md: "w-10 h-10 text-sm",
  lg: "w-12 h-12 text-base",
  xl: "w-20 h-20 text-xl",
};

const pixelSizeMap = {
  sm: 32,
  md: 40,
  lg: 48,
  xl: 80,
};

export default function Avatar({
  initials,
  color,
  imageUrl,
  size = "md",
}: AvatarProps) {
  if (imageUrl) {
    const pixels = pixelSizeMap[size];
    return (
      <div className={`${sizeMap[size]} rounded-full overflow-hidden shrink-0 relative bg-zinc-200`}>
        <Image
          src={imageUrl}
          alt={initials}
          width={pixels}
          height={pixels}
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`${sizeMap[size]} rounded-full flex items-center justify-center font-semibold text-white shrink-0`}
      style={{ backgroundColor: color }}
    >
      {initials}
    </div>
  );
}
