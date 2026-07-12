import { Marquee } from "@/components/ui/Marquee";

const items = [
  "Pan-India Connectivity",
  "Cold Chain Transport",
  "Fragile Goods Handling",
  "Express Replenishment",
  "Real-Time Tracking",
  "Reverse Logistics",
  "Interstate Compliance",
  "Time-Sensitive Delivery",
];

/** Full-bleed scrolling capability ticker between hero and content. */
export function Ticker() {
  return (
    <div className="border-y border-paper-line bg-white/50 py-5">
      <Marquee>
        {items.map((item, i) => (
          <div key={`${item}-${i}`} className="flex items-center">
            <span className="whitespace-nowrap px-8 font-display text-sm font-700 uppercase tracking-wide text-ink/80">
              {item}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-signal" />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
