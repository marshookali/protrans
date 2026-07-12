import { advantages } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

/** Competitive advantages as a hover-reactive numbered list. */
export function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-paper py-24 sm:py-32">
      <div className="shell grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
          theme="light"
            eyebrow="Why PRO TRANS"
            title={
              <>
                A logistics partner that
                <span className="text-signal"> speaks FMCG.</span>
              </>
            }
            intro="We understand shelf-life, festival peaks, and border paperwork — because that is the world we were built for."
          />
        </div>

        <ul className="divide-y divide-paper-line border-t border-paper-line">
          {advantages.map((adv, i) => (
            <Reveal key={adv.title} as="li" delay={i * 0.06}>
              <div className="group flex items-start gap-6 py-7 transition-colors duration-500">
                <span className="mt-1 font-mono text-sm text-ink/30 transition-colors duration-300 group-hover:text-signal">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-800 tracking-tight text-ink transition-transform duration-500 ease-smooth group-hover:translate-x-1 sm:text-2xl">
                    {adv.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink/55">
                    {adv.body}
                  </p>
                </div>
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-paper-line transition-colors duration-300 group-hover:bg-signal" />
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
