"use client";

import type { ReactNode } from "react";

/**
 * Infinite horizontal ticker. Duplicates its children so the loop is seamless.
 * Pauses on hover for readability.
 */
export function Marquee({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`group relative flex overflow-hidden ${className ?? ""}`}
      role="marquee"
    >
      <div className="flex shrink-0 animate-scroll-x items-center [animation-play-state:running] group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        {children}
      </div>
      <div
        aria-hidden
        className="flex shrink-0 animate-scroll-x items-center [animation-play-state:running] group-hover:[animation-play-state:paused] motion-reduce:hidden"
      >
        {children}
      </div>
    </div>
  );
}
