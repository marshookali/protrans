"use client";

import { useState } from "react";

/**
 * Navbar brand lockup.
 *
 * Prefers the real raster logo at `/logo.png` (drop the file into `public/`).
 * If that file is missing, it gracefully falls back to an inline SVG
 * recreation of the mark + wordmark, so the brand always renders and the
 * real asset takes over automatically once added — no code change needed.
 *
 * Designed for a LIGHT (white) navbar: black mark + black wordmark.
 */
export function BrandLogo({ invert = false }: { invert?: boolean }) {
  const [useImg, setUseImg] = useState(true);

  if (useImg) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/logo.png"
        alt="PRO TRANS Logistics LLP"
        className={`h-10 w-auto transition-[filter] duration-300 sm:h-11 ${
          invert ? "invert" : ""
        }`}
        onError={() => setUseImg(false)}
      />
    );
  }

  return <LogoMark />;
}

function LogoMark() {
  return (
    <span className="flex items-center gap-3">
      {/* P-mark — white square, black frame, bold "P" for Pro Trans */}
      <svg
        viewBox="0 0 48 48"
        className="h-10 w-10 shrink-0"
        aria-hidden="true"
      >
        <rect
          x="1.6"
          y="1.6"
          width="44.8"
          height="44.8"
          rx="3"
          fill="#F4F4F2"
          stroke="#131313"
          strokeWidth="2.6"
        />
        {/* vertical stem */}
        <rect x="14" y="12" width="6.4" height="24" rx="3.2" fill="#131313" />
        {/* bowl of the P */}
        <path
          d="M22 15 h4.6 a8.4 8.4 0 0 1 0 16.8 H22"
          fill="none"
          stroke="#131313"
          strokeWidth="6.4"
          strokeLinecap="round"
        />
      </svg>

      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.05rem] font-900 uppercase tracking-[0.14em] text-ink">
          Pro Trans
        </span>
        <span className="mt-1 font-mono text-[0.56rem] uppercase tracking-[0.34em] text-ink/65">
          Logistics LLP
        </span>
      </span>
    </span>
  );
}
