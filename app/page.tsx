import Hero from "@/components/home/Hero";
import ImpactStats from "@/components/home/ImpactStats";
import ProgramsSection from "@/components/home/ProgramsSection";
import SponsorshipSection from "@/components/home/SponsorshipSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import HowToHelp from "@/components/home/HowToHelp";
import NewsSection from "@/components/home/NewsSection";
import AwardsStrip from "@/components/home/AwardsStrip";
import Link from "next/link";
import { RiArrowRightLine } from "react-icons/ri";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ImpactStats />
      <ProgramsSection />

      {/* Mid-page CTA banner */}
      <div
        style={{
          background: "var(--neutral-950)",
          padding: "4rem 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-8rem",
            right: "-8rem",
            width: "32rem",
            height: "32rem",
            background:
              "radial-gradient(circle, rgba(220,38,38,.1) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          className="container-max"
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "2rem",
            position: "relative",
          }}
        >
          <div style={{ maxWidth: "36rem" }}>
            <p
              style={{
                fontSize: ".74rem",
                fontWeight: 700,
                letterSpacing: ".09em",
                textTransform: "uppercase",
                color: "var(--brand-600)",
                marginBottom: ".75rem",
              }}
            >
              Make an Impact
            </p>
            <h2 style={{ color: "#fff", marginBottom: ".875rem" }}>
              Your Naira Buys a Child a Meal,
              <br className="hidden md:block" /> a Book, a Future.
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,.45)",
                fontSize: ".9375rem",
                lineHeight: 1.75,
              }}
            >
              Every contribution goes directly to our programs — no
              administration overhead eating into your gift.
            </p>
          </div>
          <div
            style={{ display: "flex", gap: ".75rem" }}
            className="md:flex-wrap"
          >
            <Link href="/donate" className="btn btn-primary btn-lg">
              Donate Now{" "}
              <RiArrowRightLine style={{ width: "1rem", height: "1rem" }} />
            </Link>
            <Link href="/impact" className="btn btn-outline-white btn-lg">
              View Our Impact
            </Link>
          </div>
        </div>
      </div>

      <SponsorshipSection />
      <TestimonialsSection />
      <HowToHelp />
      <NewsSection />
      <AwardsStrip />
    </>
  );
}
