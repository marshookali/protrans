import Link from "next/link";
import { services } from "@/lib/site";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

const featured = ["cold-chain", "time-sensitive", "fleet-management", "fragile", "tracking", "compliance"];

/** Light editorial band previewing the core capabilities. */
export function ServicesPreview() {
  const items = featured
    .map((id) => services.find((s) => s.id === id))
    .filter(Boolean) as (typeof services)[number][];

  return (
    <section className="relative bg-paper py-24 text-ink sm:py-32">
      <div className="shell">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            theme="light"
            eyebrow="What We Move"
            title={
              <>
                Built for the pace of
                <span className="text-signal-deep"> fast-moving goods.</span>
              </>
            }
            intro="Every service is tuned to the realities of FMCG — shelf-life, fragility, and turnover speed."
          />
          <Reveal delay={0.2}>
            <Link
              href="/services"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold text-ink transition-colors duration-300 hover:border-signal-deep hover:text-signal-deep"
            >
              Explore All Services
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M3 8h9M8 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} theme="light" />
          ))}
        </div>
      </div>
    </section>
  );
}
