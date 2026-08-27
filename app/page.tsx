import Hero from "@/components/home/Hero";
import ImpactStats from "@/components/home/ImpactStats";
import ProgramsSection from "@/components/home/ProgramsSection";
import SponsorshipSection from "@/components/home/SponsorshipSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import HowToHelp from "@/components/home/HowToHelp";
import NewsSection from "@/components/home/NewsSection";
import AwardsStrip from "@/components/home/AwardsStrip";
import ChildrenGivingSection from "@/components/home/ChildrenGivingSection";
import MidPageCta from "@/components/home/MidPageCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ImpactStats />
      <ProgramsSection />
      <MidPageCta />
      <SponsorshipSection />
      <ChildrenGivingSection />
      <TestimonialsSection />
      <HowToHelp />
      <NewsSection />
      <AwardsStrip />
    </>
  );
}
