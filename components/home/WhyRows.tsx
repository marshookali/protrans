"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { advantages } from "@/lib/site";
import { images } from "@/lib/images";
import { Reveal } from "@/components/motion/Reveal";

const ease = [0.22, 1, 0.36, 1] as const;

/** One supporting image per advantage, in the same order as `advantages`. */
const rowImages = [
  images.warehousePackages, // FMCG Specialization
  images.truckHighwayFront, // Interstate Expertise
  images.warehouseRacking, // Scalability
  images.dockBays, // Safety First
  images.boxesMinimal, // Specialized Handling
];

/**
 * Advantages as a divided list. The image column is empty by default; hovering
 * a row pops in its supporting image, and leaving the list hides it again.
 */
export function WhyRows() {
  const [active, setActive] = useState<number | null>(null);
  const reduce = useReducedMotion();

  return (
    <section className="pb-24 sm:pb-32">
      <div className="shell grid gap-14 lg:grid-cols-[minmax(0,340px)_1fr] xl:grid-cols-[minmax(0,320px)_minmax(0,1fr)_300px]">
        {/* Heading */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <h2 className="font-display text-3xl font-600 leading-[1.06] tracking-tighter sm:text-4xl">
              A partner that speaks FMCG.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-grey-600">
              We understand shelf-life, festival peaks, and border paperwork,
              because that is the world we were built for.
            </p>
          </Reveal>
        </div>

        {/* Rows */}
        <ul className="border-t border-ink/10" onMouseLeave={() => setActive(null)}>
          {advantages.map((adv, i) => (
            <Reveal key={adv.title} as="li" delay={i * 0.05}>
              <div
                onMouseEnter={() => setActive(i)}
                className="group flex items-start gap-6 border-b border-ink/10 py-7 transition-transform duration-500 ease-smooth hover:translate-x-1"
              >
                <span
                  className={`mt-1 font-mono text-sm transition-colors duration-300 ${
                    active === i ? "text-accent-deep" : "text-grey-500"
                  }`}
                >
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-display text-xl font-600 tracking-tight text-ink sm:text-2xl">
                    {adv.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-grey-600">
                    {adv.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>

        {/* Hover-linked image card. All frames are rendered and preloaded, so
            switching rows never waits on a network fetch. */}
        <div className="hidden xl:block">
          <div className="sticky top-32">
            <div className="relative aspect-[4/5] w-full">
              {rowImages.map((img, i) => {
                const isActive = i === active;
                return (
                  <motion.div
                    key={img.src}
                    aria-hidden={!isActive}
                    initial={false}
                    animate={
                      reduce
                        ? { opacity: isActive ? 1 : 0 }
                        : {
                            opacity: isActive ? 1 : 0,
                            scale: isActive ? 1 : 0.93,
                            y: isActive ? 0 : 14,
                          }
                    }
                    transition={{ duration: 0.45, ease }}
                    className="absolute inset-0 overflow-hidden rounded-2xl shadow-[0_36px_70px_-40px_rgba(39,39,39,0.6)]"
                    style={{ pointerEvents: "none" }}
                  >
                    <Image
                      src={img.src}
                      alt={isActive ? img.alt : ""}
                      fill
                      sizes="300px"
                      className="object-cover"
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
