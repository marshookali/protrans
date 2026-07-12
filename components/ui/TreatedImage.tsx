import Image from "next/image";
import type { ImageRef } from "@/lib/images";

type Props = {
  image: ImageRef;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** Overlay strength/tone to keep imagery cohesive with the dark theme. */
  overlay?: "dark" | "soft" | "duotone" | "none";
  rounded?: boolean;
};

/**
 * next/image wrapped in a consistent, restrained treatment so every photo
 * reads as part of the same premium system without being crushed to black.
 */
export function TreatedImage({
  image,
  className,
  sizes = "100vw",
  priority = false,
  overlay = "dark",
  rounded = true,
}: Props) {
  return (
    <div
      className={`relative overflow-hidden bg-asphalt-soft ${
        rounded ? "rounded-2xl" : ""
      } ${className ?? ""}`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
      {overlay === "dark" && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-asphalt/90 via-asphalt/25 to-transparent" />
      )}
      {overlay === "soft" && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-asphalt/60 via-transparent to-transparent" />
      )}
      {overlay === "duotone" && (
        <>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-signal/12 to-transparent mix-blend-overlay" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-asphalt/70 via-transparent to-transparent" />
        </>
      )}
      {/* faint grid to echo the ops-console motif */}
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-[0.12]" />
      {/* thin frame for definition on any background */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-paper/10" />
    </div>
  );
}
