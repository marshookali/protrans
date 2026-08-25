"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { StaggerText } from "@/components/motion/StaggerText";

const ease = [0.22, 1, 0.36, 1] as const;

/** Trust chips anchored to the hero's bottom-right edge (desktop). */
const chips = [
  {
    title: "Dedicated fleet",
    body: "Modern Ashok Leyland trucks",
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
    title: "Cold chain",
    body: "Thermo King units, 2–8°C",
    icon: (
      <path
        d="M12 3v18M12 3l-3 3m3-3 3 3M12 21l-3-3m3 3 3-3M4.2 7.5l15.6 9M4.2 7.5 5 11m-.8-3.5L7.7 6.6M19.8 16.5 19 13m.8 3.5-3.5.9M4.2 16.5l15.6-9M4.2 16.5 7.7 17.4m-3.5-.9L5 13M19.8 7.5l-3.5-.9m3.5.9L19 11"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Live tracking",
    body: "24/7 GPS on every load",
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
];

export function HomeHero() {
  const reduce = useReducedMotion();

  return (
    <section className="px-3 pt-24 sm:px-5 sm:pt-28">
      <div className="mx-auto max-w-shell">
        {/* Hero module — inset rounded image panel */}
        <div className="relative">
          <div className="relative min-h-[520px] overflow-hidden rounded-2xl bg-ink sm:min-h-[580px] lg:rounded-tr-none">
            <motion.div
              className="absolute inset-0"
              initial={reduce ? { scale: 1 } : { scale: 1.06 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2.4, ease }}
            >
              <Image
                src="/image.png"
                alt="PRO TRANS Ashok Leyland truck on an open runway at dusk"
                fill
                priority
                sizes="(min-width: 1400px) 1320px, 100vw"
                className="object-cover object-[62%_center]"
              />
            </motion.div>
            {/* Legibility gradient, heavy left */}
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,15,17,0.82)_0%,rgba(15,15,17,0.55)_42%,rgba(15,15,17,0.12)_72%,rgba(15,15,17,0)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink/60 to-transparent" />

            {/* Copy */}
            <div className="relative flex min-h-[520px] flex-col justify-center p-7 sm:min-h-[580px] sm:p-12 lg:justify-start lg:p-16 lg:pt-14">
              <h1 className="max-w-[640px] font-display text-[clamp(2.5rem,5.4vw,4.3rem)] font-600 leading-[1.04] tracking-tighter text-white">
                <StaggerText text="Logistics that keep retail moving." delay={0.1} />
              </h1>

              <motion.p
                initial={reduce ? undefined : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.55, ease }}
                className="mt-6 max-w-[470px] text-base leading-relaxed text-white/80 sm:text-lg"
              >
                FMCG freight across South India with Pan-India reach. Cold-chain
                ready, GPS-tracked, and built for retail speed.
              </motion.p>

              <motion.div
                initial={reduce ? undefined : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7, ease }}
                className="mt-9 flex flex-wrap items-center gap-3"
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2.5 rounded-lg bg-accent px-7 py-3.5 text-sm font-semibold text-ink transition-all duration-300 ease-smooth hover:bg-paper active:scale-[0.98]"
                >
                  Contact us
                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
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
                  className="inline-flex items-center rounded-lg border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-300 ease-smooth hover:border-white/70 hover:bg-white/[0.06]"
                >
                  Explore services
                </Link>
              </motion.div>
            </div>

            {/* Curved notch — top-right corner cutout (desktop). Kept as a pure
                shape: page background with a rounded inner corner and two
                fillets curving the module's edges into it. */}
            <div className="absolute right-0 top-0 z-10 hidden h-[120px] w-[320px] rounded-bl-3xl bg-paper lg:block">
              <span
                aria-hidden
                className="absolute -left-6 top-0 h-6 w-6 bg-[radial-gradient(circle_24px_at_0_100%,transparent_23px,#FFFCFC_24px)]"
              />
              <span
                aria-hidden
                className="absolute -bottom-6 right-0 h-6 w-6 bg-[radial-gradient(circle_24px_at_0_100%,transparent_23px,#FFFCFC_24px)]"
              />
            </div>

            {/* Trust chips — inset into a notched cutout at the module's
                bottom-left (desktop). The notch is page-background with a
                rounded inner corner; two radial-gradient fillets curve the
                module's edges into it. */}
            <div className="absolute bottom-0 left-0 z-10 hidden rounded-tr-3xl bg-paper pr-4 pt-4 lg:block">
              <span
                aria-hidden
                className="absolute -right-6 bottom-0 h-6 w-6 bg-[radial-gradient(circle_24px_at_100%_0,transparent_23px,#FFFCFC_24px)]"
              />
              <span
                aria-hidden
                className="absolute -top-6 left-0 h-6 w-6 bg-[radial-gradient(circle_24px_at_100%_0,transparent_23px,#FFFCFC_24px)]"
              />
              <div className="flex gap-4">
                {chips.map((chip, i) => (
                  <motion.div
                    key={chip.title}
                    initial={reduce ? undefined : { opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, delay: 0.85 + i * 0.12, ease }}
                    className="flex w-[190px] flex-col rounded-2xl bg-ink p-5 text-paper"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-paper/[0.08] text-accent">
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        {chip.icon}
                      </svg>
                    </span>
                    <span className="mt-4 block font-display text-sm font-600 text-paper">
                      {chip.title}
                    </span>
                    <span className="mt-1 block text-xs leading-relaxed text-grey-400">
                      {chip.body}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Trust chips — stacked below the module on mobile/tablet */}
          <div className="mt-4 grid gap-3 sm:grid-cols-3 lg:hidden">
            {chips.map((chip, i) => (
              <motion.div
                key={chip.title}
                initial={reduce ? undefined : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.85 + i * 0.12, ease }}
                className="flex items-start gap-4 rounded-2xl bg-ink p-5 text-paper"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-paper/[0.08] text-accent">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    {chip.icon}
                  </svg>
                </span>
                <span>
                  <span className="block font-display text-sm font-600 text-paper">
                    {chip.title}
                  </span>
                  <span className="mt-1 block text-xs leading-relaxed text-grey-400">
                    {chip.body}
                  </span>
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
