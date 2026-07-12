"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * The signature element: a live-telemetry route panel.
 * An animated GPS route draws between origin and destination while a
 * vehicle marker runs the path and mono-font data chips report live
 * telemetry (temperature, speed, ETA). This is the brand's memorable device.
 */

const PATH =
  "M 44 232 C 120 150, 150 96, 236 108 S 360 200, 440 120";

const nodes = [
  { cx: 44, cy: 232, label: "MALAPPURAM", sub: "ORIGIN" },
  { cx: 440, cy: 120, label: "PAN-INDIA", sub: "DEST" },
];

export function RouteMap() {
  const reduce = useReducedMotion();

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-asphalt-line bg-asphalt-soft/60 p-5 backdrop-blur-sm sm:p-6">
      {/* Panel header — reads like an ops console */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-signal opacity-75 [animation:pulse-ring_2.4s_cubic-bezier(0.22,1,0.36,1)_infinite]" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-signal" />
          </span>
          <span className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-paper/70">
            Live Fleet · Tracking
          </span>
        </div>
        <span className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-signal">
          GPS 24/7
        </span>
      </div>

      {/* Map surface */}
      <div className="relative aspect-[10/7] w-full overflow-hidden rounded-xl bg-[#0d0d0d]">
        {/* grid backdrop */}
        <div className="absolute inset-0 grid-lines opacity-70" />
        {/* faint radial glow at destination */}
        <div className="pointer-events-none absolute right-[6%] top-[6%] h-40 w-40 rounded-full bg-signal/10 blur-3xl" />

        <svg
          viewBox="0 0 480 300"
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="xMidYMid meet"
          fill="none"
        >
          {/* ghost path */}
          <path
            d={PATH}
            stroke="#2C2C2C"
            strokeWidth={2}
            strokeLinecap="round"
          />
          {/* animated route draw */}
          <motion.path
            d={PATH}
            stroke="#FF5B29"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeDasharray="4 7"
            initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          />

          {/* origin/destination nodes */}
          {nodes.map((n, i) => (
            <g key={n.label}>
              <circle
                cx={n.cx}
                cy={n.cy}
                r={11}
                fill="none"
                stroke={i === 0 ? "#FF5B29" : "#F4F4F2"}
                strokeWidth={1.5}
                opacity={0.4}
              />
              <circle
                cx={n.cx}
                cy={n.cy}
                r={5}
                fill={i === 0 ? "#FF5B29" : "#F4F4F2"}
              />
            </g>
          ))}

          {/* running vehicle marker along the path */}
          {!reduce && (
            <motion.g
              initial={{ offsetDistance: "0%" }}
              animate={{ offsetDistance: "100%" }}
              transition={{
                duration: 6,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 0.4,
                delay: 1.6,
              }}
              style={{ offsetPath: `path("${PATH}")`, offsetRotate: "0deg" }}
            >
              <circle r={13} fill="#FF5B29" opacity={0.16} />
              <circle r={5.5} fill="#FF5B29" />
              <circle r={2} fill="#131313" />
            </motion.g>
          )}
        </svg>

        {/* node labels */}
        <div className="absolute bottom-3 left-3 font-mono text-[0.6rem] leading-tight text-paper/60">
          <div className="text-signal">● MALAPPURAM</div>
          <div className="tracking-wide">11.0510° N, 76.0711° E</div>
        </div>

        {/* floating telemetry chips */}
        <div className="absolute right-3 top-3 flex flex-col items-end gap-2">
          <TelemetryPill delay={0.6} tone="cold" k="TEMP" v="+4.2°C" />
          <TelemetryPill delay={0.9} tone="paper" k="SPEED" v="62 km/h" />
          <TelemetryPill delay={1.2} tone="signal" k="ETA" v="ON TIME" />
        </div>
      </div>

      {/* footer readout */}
      <div className="mt-4 grid grid-cols-3 gap-3 border-t border-asphalt-line pt-4">
        <Readout k="Cargo" v="Dairy · Chilled" />
        <Readout k="Load" v="Thermo King" />
        <Readout k="Status" v="In Transit" accent />
      </div>
    </div>
  );
}

function TelemetryPill({
  k,
  v,
  tone,
  delay,
}: {
  k: string;
  v: string;
  tone: "cold" | "signal" | "paper";
  delay: number;
}) {
  const reduce = useReducedMotion();
  const toneClass =
    tone === "cold"
      ? "border-cold/25 bg-cold/10 text-cold-soft"
      : tone === "signal"
        ? "border-signal/30 bg-signal/10 text-signal-soft"
        : "border-paper/15 bg-paper/5 text-paper/80";

  return (
    <motion.div
      initial={reduce ? { opacity: 1, x: 0 } : { opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`flex items-center gap-2 rounded-lg border px-2.5 py-1.5 font-mono text-[0.62rem] uppercase tracking-wider backdrop-blur-sm ${toneClass}`}
    >
      <span className="opacity-60">{k}</span>
      <span className="font-semibold">{v}</span>
    </motion.div>
  );
}

function Readout({
  k,
  v,
  accent,
}: {
  k: string;
  v: string;
  accent?: boolean;
}) {
  return (
    <div>
      <div className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-paper/45">
        {k}
      </div>
      <div
        className={`mt-1 text-sm font-semibold ${accent ? "text-signal" : "text-paper/90"}`}
      >
        {v}
      </div>
    </div>
  );
}
