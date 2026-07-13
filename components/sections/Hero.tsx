"use client";

import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const badges = [
  {
    label: "Dedicated fleet",
    icon: (
      <path
        d="M3 13V6a1 1 0 0 1 1-1h9v8M13 8h4l3 3v2M3 13h17M7.5 17.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm9 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    label: "Pan-India reach",
    icon: (
      <>
        <path
          d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="10" r="2.4" strokeWidth="1.6" />
      </>
    ),
  },
  {
    label: "24/7 tracking",
    icon: (
      <>
        <circle cx="12" cy="12" r="8.5" strokeWidth="1.6" />
        <path
          d="M12 7.5V12l3 1.8"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  },
];

export function Hero() {
  const reduce = useReducedMotion();

  // Subtle scroll parallax — background drifts and fades as the hero leaves.
  // The hero is pinned to the top of the page, so page-level scrollY maps
  // cleanly to its exit without needing a measured scroll container.
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 700], ["0%", "14%"]);
  const imageScale = useTransform(scrollY, [0, 700], [1, 1.12]);
  const contentY = useTransform(scrollY, [0, 700], ["0%", "22%"]);
  const contentOpacity = useTransform(scrollY, [0, 480], [1, 0]);

  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-[#131313]">
      {/* Background freight video — cinematic dusk haul, slow ken-burns + parallax */}
      <motion.div
        className="absolute inset-0 -z-20"
        style={reduce ? undefined : { y: imageY, scale: imageScale }}
        initial={reduce ? { scale: 1 } : { scale: 1.08 }}
        animate={reduce ? undefined : { scale: 1 }}
        transition={{ duration: 9, ease: "easeOut" }}
      >
        <video
          className="absolute inset-0 h-full w-full object-cover object-[60%_center]"
          src="/protrans-bannar-video.mp4"
          poster="/image.png"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        />
      </motion.div>

      {/* Premium dark gradient: heavy left → transparent right */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(19,19,19,0.97)_0%,rgba(19,19,19,0.86)_36%,rgba(19,19,19,0.55)_62%,rgba(19,19,19,0.15)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#131313] via-[#131313]/10 to-[#131313]/45" />
      <div className="pointer-events-none absolute inset-0 -z-10 grid-lines opacity-[0.14]" />
      {/* Signature signal glow */}
      <div className="pointer-events-none absolute -right-24 top-1/4 -z-10 h-[32rem] w-[32rem] rounded-full bg-signal/10 blur-[140px]" />

      <motion.div
        className="shell grid w-full min-w-0 items-center gap-12 py-32 sm:py-36 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8"
        style={reduce ? undefined : { y: contentY, opacity: contentOpacity }}
      >
        {/* ── Left: message ─────────────────────────────────────────── */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="min-w-0 max-w-[640px]"
        >
          {/* Tagline pill */}
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/[0.04] px-5 py-2 font-mono text-[0.72rem] font-medium uppercase tracking-[0.22em] text-white/90 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-signal opacity-75 [animation:pulse-ring_2s_ease-out_infinite]" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
              </span>
              South India → Pan-India
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="mt-7 font-display text-[2.7rem] font-900 leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[4.3rem]"
          >
            India&apos;s most reliable logistics partner for{" "}
            <span className="text-signal">FMCG &amp; Retail</span>
          </motion.h1>

          {/* Subheadline — trimmed for minimal, fast reading */}
          <motion.p
            variants={item}
            className="mt-6 max-w-[500px] text-base leading-[1.7] text-white/75 sm:text-lg"
          >
            Safe, on-time freight across South India — cold-chain ready,
            GPS-tracked, and built for the pace of fast-moving goods.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 rounded-xl bg-signal px-8 py-4 text-base font-semibold text-white shadow-[0_10px_30px_-8px_rgba(255,91,41,0.5)] transition-all duration-300 ease-smooth hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-8px_rgba(255,91,41,0.65)]"
            >
              Get a Free Quote
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M3 8h9M8 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-xl border border-white/25 px-7 py-4 text-base font-semibold text-white/90 backdrop-blur-sm transition-all duration-300 ease-smooth hover:border-white/50 hover:bg-white/[0.06]"
            >
              Explore services
            </Link>
          </motion.div>

          {/* Trust badges — also the mobile stand-in for the telemetry card */}
          <motion.div
            variants={item}
            className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4"
          >
            {badges.map((b) => (
              <div key={b.label} className="group flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 text-white/85 transition-colors duration-300 group-hover:border-signal group-hover:text-signal">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    {b.icon}
                  </svg>
                </span>
                <span className="text-sm font-medium text-white/80 transition-colors duration-300 group-hover:text-white">
                  {b.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Right: live telemetry card (desktop) ──────────────────── */}
        <div className="hidden lg:flex lg:justify-end">
          <LiveShipmentCard reduce={!!reduce} />
        </div>
      </motion.div>

      {/* Scroll cue */}
      {!reduce && (
        <motion.div
          className="pointer-events-none absolute bottom-7 left-1/2 z-10 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <div className="flex h-9 w-6 items-start justify-center rounded-full border border-white/30 p-1.5">
            <motion.span
              className="h-1.5 w-1 rounded-full bg-white/70"
              animate={{ y: [0, 8, 0], opacity: [1, 0.2, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </section>
  );
}

/**
 * Live shipment tracker — the site's ops-console motif rendered as a glassy
 * dashboard card. Echoes the cold-chain TempMonitor so the hero speaks the
 * same telemetry language as the rest of the page.
 */
function LiveShipmentCard({ reduce }: { reduce: boolean }) {
  const stats = [
    { k: "ETA", v: "3h 40m", accent: false },
    { k: "Cargo temp", v: "+4.2°C", accent: true },
    { k: "Avg speed", v: "58 km/h", accent: false },
    { k: "Status", v: "On time", accent: false },
  ];

  return (
    <motion.div
      initial={reduce ? { opacity: 1 } : { opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-[380px] overflow-hidden rounded-3xl border border-white/12 bg-white/[0.05] p-6 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] backdrop-blur-xl"
    >
      {/* header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-signal opacity-75 [animation:pulse-ring_2.4s_ease-out_infinite]" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-signal" />
          </span>
          <span className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-white/70">
            Live · Shipment PT-2451
          </span>
        </div>
        <span className="chip chip-signal">IN TRANSIT</span>
      </div>

      {/* route */}
      <div className="mt-7 flex items-center justify-between">
        <div>
          <div className="font-display text-xl font-800 tracking-tight text-white">
            Malappuram
          </div>
          <div className="mt-1 font-mono text-[0.58rem] uppercase tracking-widest text-white/45">
            Origin · KL
          </div>
        </div>
        <div className="text-right">
          <div className="font-display text-xl font-800 tracking-tight text-white">
            Bengaluru
          </div>
          <div className="mt-1 font-mono text-[0.58rem] uppercase tracking-widest text-white/45">
            Destination · KA
          </div>
        </div>
      </div>

      {/* progress track with animated marker */}
      <div className="relative mt-5 h-1.5 w-full rounded-full bg-white/10">
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full bg-signal"
          initial={reduce ? { width: "62%" } : { width: 0 }}
          animate={{ width: "62%" }}
          transition={{ duration: 1.6, delay: 1, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.span
          className="absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#131313] bg-signal shadow-[0_0_0_4px_rgba(255,91,41,0.2)]"
          initial={reduce ? { left: "62%" } : { left: 0 }}
          animate={{ left: "62%" }}
          transition={{ duration: 1.6, delay: 1, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
      <div className="mt-2.5 flex justify-between font-mono text-[0.56rem] uppercase tracking-widest text-white/40">
        <span>Dispatched 06:12</span>
        <span className="text-signal">62% complete</span>
      </div>

      {/* stats grid */}
      <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06]">
        {stats.map((s) => (
          <div key={s.k} className="bg-white/[0.02] p-4">
            <div className="font-mono text-[0.55rem] uppercase tracking-[0.18em] text-white/40">
              {s.k}
            </div>
            <div
              className={`mt-1.5 font-display text-lg font-800 tracking-tight ${
                s.accent ? "text-signal" : "text-white"
              }`}
            >
              {s.v}
            </div>
          </div>
        ))}
      </div>

      {/* footer telemetry */}
      <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4 font-mono text-[0.58rem] uppercase tracking-wider text-white/45">
        <span>Reefer · Sealed</span>
        <span className="text-signal">GPS · Locked</span>
      </div>
    </motion.div>
  );
}
