"use client";

import Image from "next/image";

interface DestImageProps {
  images: string[];
  gradient: string;
  isHovered: boolean;
}

export default function DestImage({ images, gradient, isHovered }: DestImageProps) {
  const primarySrc: string = images[0] || "";
  const secondarySrc: string = images[1] || "";
  const hasSecondary = images.length > 1;

  if (!primarySrc) {
    return (
      <div
        className="w-full h-full"
        style={{ background: gradient }}
      />
    );
  }

  return (
    <>
      {/* Image container with scale interaction */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          transform: isHovered ? "scale(1.04)" : "scale(1)",
          transition: "transform 600ms ease",
          overflow: "hidden",
        }}
      >
        {/* Primary image */}
        <Image
          src={primarySrc}
          alt="destination"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          style={{
            objectFit: "cover",
            opacity: isHovered && hasSecondary ? 0 : 1,
            transition: "opacity 600ms ease",
            width: "100%",
            height: "100%",
          }}
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
            (e.currentTarget as HTMLElement).style.background = gradient;
          }}
        />
        {/* Secondary image (crossfade on hover) */}
        {hasSecondary && (
          <Image
            src={secondarySrc}
            alt="destination"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            style={{
              objectFit: "cover",
              opacity: isHovered ? 1 : 0,
              transition: "opacity 600ms ease",
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
            }}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        )}
      </div>
      {/* Subtle dark overlay for editorial depth */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: gradient,
          opacity: 0.15,
          pointerEvents: "none",
        }}
      />
    </>
  );
}
