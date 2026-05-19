import { Hero } from "@/components/sections/home/Hero";
import { TrustBar } from "@/components/sections/home/TrustBar";
import { DrivingTrade } from "@/components/sections/home/DrivingTrade";
import { ServicesSnapshot } from "@/components/sections/home/ServicesSnapshot";
import { IndustriesShowcase } from "@/components/sections/home/IndustriesShowcase";
import { WhyChoose } from "@/components/sections/home/WhyChoose";
import { CoverageMap } from "@/components/sections/home/CoverageMap";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { StatsBand } from "@/components/sections/shared/StatsBand";
import { CTABand } from "@/components/sections/shared/CTABand";
import { Marquee } from "@/components/ui/Marquee";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <DrivingTrade />
      <Marquee />
      <ServicesSnapshot />
      <IndustriesShowcase />
      <WhyChoose />
      <StatsBand />
      <CoverageMap />
      <Testimonials />
      <CTABand headline="Have cargo to move? Let's talk." />
    </>
  );
}
