"use client";

import { useRef } from "react";
import {
  cubicBezier,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";

import { coreValues } from "@/lib/site";
import { Reveal } from "@/components/motion/Reveal";

const easeSmooth = cubicBezier(0.22, 1, 0.36, 1);

/**
 * One value card, scroll-driven: it rises from below across its own slice of
 * the section's scroll progress, then locks in place (transforms clamp at the
 * range edges) before the next card's slice begins.
 */
function CoreCard({
  progress,
  index,
  title,
  body,
  reduce,
}: {
  progress: MotionValue<number>;
  index: number;
  title: string;
  body: string;
  reduce: boolean;
}) {
  const start = index * 0.25;
  const y = useTransform(progress, [start, start + 0.25], [110, 0], {
    ease: easeSmooth,
  });
  const opacity = useTransform(progress, [start, start + 0.18], [0, 1]);

  return (
    <div className={index % 2 === 1 ? "xl:translate-y-16" : ""}>
      <motion.div style={reduce ? undefined : { y, opacity }} className="h-full">
        <article className="flex h-full flex-col rounded-2xl bg-paper-soft p-7 sm:min-h-[260px] transition-all duration-500 ease-smooth hover:-translate-y-1 hover:shadow-[0_28px_55px_-38px_rgba(39,39,39,0.4)]">
          <span className="font-mono text-xs text-grey-500">0{index + 1}</span>
          <h3 className="mt-5 font-display text-lg font-600 leading-snug tracking-tight text-ink">
            {title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-grey-600">{body}</p>
        </article>
      </motion.div>
    </div>
  );
}

/** The four company values as a staggered card row (odd cards sit higher). */
export function CoreFour() {
  const reduce = useReducedMotion();
  const gridRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: gridRef,
    // Ends later than center-center so the rise plays out over a longer
    // stretch of scroll.
    offset: ["start end", "center 0.35"],
  });
  // A soft spring trails the raw scroll position, so the cards glide into
  // place instead of tracking the wheel one-to-one.
  const progress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 22,
    mass: 1,
  });

  return (
    <section className="py-24 sm:py-32">
      <div className="shell">
        <Reveal>
          <div className="mx-auto max-w-xl text-center">
            <h2 className="font-display text-3xl font-600 leading-[1.06] tracking-tighter sm:text-4xl md:text-[2.8rem]">
              The Core Four.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-grey-600 sm:text-lg">
              The principles behind every dispatch we run.
            </p>
          </div>
        </Reveal>

        <div
          ref={gridRef}
          className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4 xl:pb-16"
        >
          {coreValues.map((value, i) => (
            <CoreCard
              key={value.title}
              progress={progress}
              index={i}
              title={value.title}
              body={value.body}
              reduce={!!reduce}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
