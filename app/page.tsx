import { Hero } from "@/components/sections/Hero";
import { Ticker } from "@/components/sections/Ticker";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { FleetBand } from "@/components/sections/FleetBand";
import { ColdChainFeature } from "@/components/sections/ColdChainFeature";
import { ClientsStrip } from "@/components/sections/ClientsStrip";
import { CoreValues } from "@/components/sections/CoreValues";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { CtaBand } from "@/components/sections/CtaBand";
import { images } from "@/lib/images";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Ticker />
      <ServicesPreview />
      <FleetBand
        image={images.truckHighwayFront}
        eyebrow="On the Road, Around the Clock"
        title="A modern fleet in"
        accent={<span className="text-signal">constant motion.</span>}
        stats={[
          { v: "Ashok Leyland", l: "Primary fleet" },
          { v: "Thermo King", l: "Cold-chain units" },
          { v: "24/7", l: "GPS tracked" },
          { v: "Pan-India", l: "Coverage" },
        ]}
      />
      <ColdChainFeature />
      <ClientsStrip />
      <CoreValues />
      <WhyChoose />
      <CtaBand />
    </>
  );
}
