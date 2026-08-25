import { HomeHero } from "@/components/home/HomeHero";
import { ServiceRows } from "@/components/home/ServiceRows";
import { FleetStory } from "@/components/home/FleetStory";
import { ColdChainStory } from "@/components/home/ColdChainStory";
import { TrustedPartners } from "@/components/home/TrustedPartners";
import { CoreFour } from "@/components/home/CoreFour";
import { WhyRows } from "@/components/home/WhyRows";
import { CtaStrip } from "@/components/home/CtaStrip";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <ServiceRows />
      <FleetStory />
      <ColdChainStory />
      <TrustedPartners />
      <CoreFour />
      <WhyRows />
      <CtaStrip />
    </>
  );
}
