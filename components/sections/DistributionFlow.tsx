import { images } from "@/lib/images";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TreatedImage } from "@/components/ui/TreatedImage";
import { Reveal } from "@/components/motion/Reveal";

const stages = [
  {
    label: "Factory",
    tag: "SOURCE",
    body: "Goods collected at the point of manufacture, ready for dispatch.",
    image: images.warehousePackages,
  },
  {
    label: "Warehouse",
    tag: "PRIMARY",
    body: "Bulk movement into distribution hubs and cold storage.",
    image: images.warehouseRacking,
  },
  {
    label: "Retail",
    tag: "SECONDARY",
    body: "Last-leg delivery to hypermarkets, stores, and shelves.",
    image: images.dockBays,
  },
];

/**
 * Primary & Secondary distribution shown as an ordered supply-chain flow.
 * The numbering here is meaningful — it's a real sequence cargo travels through.
 */
export function DistributionFlow() {
  return (
    <section className="relative bg-paper py-24 text-ink sm:py-32">
      <div className="shell">
        <SectionHeading
          theme="light"
          eyebrow="Primary & Secondary Distribution"
          title={
            <>
              One continuous chain,
              <span className="text-signal-deep"> factory to shelf.</span>
            </>
          }
          intro="We own every leg of the journey — so nothing is lost in the hand-off between stages."
        />

        <div className="relative mt-16">
          {/* connecting line (desktop) */}
          <div className="absolute left-0 right-0 top-[2.35rem] hidden h-px bg-paper-line md:block" />

          <ol className="grid gap-6 md:grid-cols-3">
            {stages.map((stage, i) => (
              <Reveal key={stage.label} as="li" delay={i * 0.12}>
                <div className="relative">
                  {/* node */}
                  <div className="relative z-10 flex h-[4.7rem] w-[4.7rem] items-center justify-center rounded-full border border-paper-line bg-paper">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-ink font-display text-lg font-900 text-paper">
                      0{i + 1}
                    </div>
                  </div>

                  <div className="mt-6">
                    <TreatedImage
                      image={stage.image}
                      overlay="soft"
                      className="aspect-[3/2] w-full"
                      sizes="(min-width: 768px) 30vw, 100vw"
                    />
                    <span className="mt-6 block font-mono text-[0.6rem] uppercase tracking-[0.2em] text-signal-deep">
                      {stage.tag}
                    </span>
                    <h3 className="mt-2 font-display text-2xl font-800 tracking-tight text-ink">
                      {stage.label}
                    </h3>
                    <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink/60">
                      {stage.body}
                    </p>
                  </div>

                  {/* arrow between (mobile hidden last) */}
                  {i < stages.length - 1 && (
                    <span className="absolute right-4 top-[1.9rem] hidden text-signal md:block">
                      <svg width="24" height="16" viewBox="0 0 24 16" fill="none">
                        <path
                          d="M1 8h20M16 3l5 5-5 5"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  )}
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
