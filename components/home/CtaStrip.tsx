import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Closing conversion strip. Rendered last on the page with a negative bottom
 * margin so it overlaps the dark footer's top edge, per the wireframe.
 */
export function CtaStrip() {
  return (
    <section className="relative z-10 -mb-16">
      <div className="shell">
        {/* Overlapping CTA bar */}
        <Reveal delay={0.08}>
          <div className="flex flex-col items-start justify-between gap-7 rounded-2xl border border-ink/10 bg-paper px-8 py-10 shadow-[0_40px_80px_-45px_rgba(39,39,39,0.55)] sm:flex-row sm:items-center sm:px-12">
            <div>
              <h2 className="font-display text-2xl font-600 tracking-tight sm:text-3xl">
                Let&apos;s keep your shelves stocked.
              </h2>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-grey-600 sm:text-base">
                Tell us what you move and where it needs to be. We&apos;ll plan
                the route around your timelines.
              </p>
            </div>
            <Link
              href="/contact"
              className="group inline-flex shrink-0 items-center gap-3 rounded-lg bg-accent py-3 pl-7 pr-3 text-sm font-semibold text-ink transition-all duration-300 ease-smooth hover:bg-accent-deep hover:text-paper active:scale-[0.98]"
            >
              Contact us
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-ink/10 transition-transform duration-300 ease-smooth group-hover:translate-x-0.5">
                <svg
                  className="h-4 w-4"
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
              </span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
