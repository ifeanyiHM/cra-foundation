import Link from "next/link";
import { RiArrowRightLine } from "react-icons/ri";

export default function MidPageCta() {
  return (
    <>
      <style>{`
    .cta-banner-outer { padding: 4rem 0; }
    .cta-banner-eyebrow { font-size: .74rem; margin-bottom: .75rem; }
    .cta-banner-sub { font-size: .9375rem; }
    .cta-banner-inner { gap: 2rem; }
    .cta-banner-text { max-width: 36rem; }
    .cta-banner-btns { gap: .75rem; }

    @media (min-width: 1440px) {
      .cta-banner-outer { padding: 4.5rem 0; }
      .cta-banner-eyebrow { font-size: .78rem; margin-bottom: .8rem; }
      .cta-banner-sub { font-size: .975rem; }
      .cta-banner-inner { gap: 2.25rem; }
      .cta-banner-text { max-width: 38rem; }
      .cta-banner-btns { gap: .875rem; }
    }

    @media (min-width: 1536px) {
      .cta-banner-outer { padding: 5rem 0; }
      .cta-banner-eyebrow { font-size: .82rem; margin-bottom: .875rem; }
      .cta-banner-sub { font-size: 1.15rem; }
      .cta-banner-inner { gap: 2.5rem; }
      .cta-banner-text { max-width: 43rem; }
      .cta-banner-btns { gap: 1rem; }
    }

    @media (min-width: 1680px) {
      .cta-banner-outer { padding: 5.5rem 0; }
      .cta-banner-eyebrow { font-size: .88rem; margin-bottom: .9rem; }
      .cta-banner-sub { font-size: 1.2rem; }
      .cta-banner-inner { gap: 2.75rem; }
      .cta-banner-text { max-width: 47rem; }
      .cta-banner-btns { gap: 1.125rem; }
    }

    @media (min-width: 1920px) {
      .cta-banner-outer { padding: 6.5rem 0; }
      .cta-banner-eyebrow { font-size: 1rem; margin-bottom: 1rem; }
      .cta-banner-sub { font-size: 1.35rem; }
      .cta-banner-inner { gap: 3.25rem; }
      .cta-banner-text { max-width: 53rem; }
      .cta-banner-btns { gap: 1.25rem; }
    }
  `}</style>

      <div
        className="cta-banner-outer"
        style={{
          background: "var(--neutral-950)",
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
          className="container-max cta-banner-inner"
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <div className="cta-banner-text">
            <p
              className="cta-banner-eyebrow"
              style={{
                fontWeight: 700,
                letterSpacing: ".09em",
                textTransform: "uppercase",
                color: "var(--brand-600)",
              }}
            >
              Make an Impact
            </p>
            <h2 style={{ color: "#fff", marginBottom: ".875rem" }}>
              Your Naira Buys a Child a Meal,
              <br className="hidden md:block" /> a Book, a Future.
            </h2>
            <p
              className="cta-banner-sub"
              style={{ color: "rgba(255,255,255,.45)", lineHeight: 1.75 }}
            >
              Every contribution goes directly to our programs — no
              administration overhead eating into your gift.
            </p>
          </div>
          <div
            className="cta-banner-btns md:flex-wrap"
            style={{ display: "flex" }}
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
    </>
  );
}
