"use client";
import { testimonials } from "@/data";
import { useState } from "react";
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiDoubleQuotesL,
} from "react-icons/ri";

export default function TestimonialsSection() {
  const [idx, setIdx] = useState(0);
  const t = testimonials[idx];
  const prev = () =>
    setIdx((idx - 1 + testimonials.length) % testimonials.length);
  const next = () => setIdx((idx + 1) % testimonials.length);

  return (
    <>
      <style>{`
  .testi-header { margin-bottom: 3.5rem; gap: 1.5rem; }
  .testi-eyebrow { font-size: .74rem; margin-bottom: .75rem; }
  .testi-nav-btn { width: 2.75rem; height: 2.75rem; }
  .testi-nav-icon { width: 1.25rem; height: 1.25rem; }
  .testi-quote-icon { width: 2.5rem; height: 2.5rem; margin-bottom: 1.5rem; }
  .testi-quote { font-size: clamp(1.1rem, 2.5vw, 1.375rem); margin-bottom: 2rem; }
  .testi-avatar { width: 2.75rem; height: 2.75rem; font-size: 1rem; }
  .testi-author-name { font-size: .9375rem; margin-bottom: .15rem; }
  .testi-author-role { font-size: .8rem; }
  .testi-dots { gap: .35rem; margin-top: 2rem; }

  @media (min-width: 1440px) {
    .testi-header { margin-bottom: 3.75rem; }
    .testi-eyebrow { font-size: .78rem; margin-bottom: .8rem; }
    .testi-nav-btn { width: 2.875rem; height: 2.875rem; }
    .testi-nav-icon { width: 1.3rem; height: 1.3rem; }
    .testi-quote-icon { width: 2.625rem; height: 2.625rem; margin-bottom: 1.625rem; }
    .testi-quote { font-size: clamp(1.175rem, 2.5vw, 1.45rem); margin-bottom: 2.125rem; }
    .testi-avatar { width: 2.875rem; height: 2.875rem; font-size: 1.05rem; }
    .testi-author-name { font-size: .975rem; }
    .testi-author-role { font-size: .825rem; }
    .testi-dots { gap: .4rem; margin-top: 2.125rem; }
  }

  @media (min-width: 1536px) {
    .testi-header { margin-bottom: 4rem; }
    .testi-eyebrow { font-size: .82rem; margin-bottom: .875rem; }
    .testi-nav-btn { width: 3rem; height: 3rem; }
    .testi-nav-icon { width: 1.375rem; height: 1.375rem; }
    .testi-quote-icon { width: 2.75rem; height: 2.75rem; margin-bottom: 1.75rem; }
    .testi-quote { font-size: clamp(1.25rem, 2.5vw, 1.525rem); margin-bottom: 2.25rem; }
    .testi-avatar { width: 3rem; height: 3rem; font-size: 1.1rem; }
    .testi-author-name { font-size: 1.025rem; }
    .testi-author-role { font-size: .875rem; }
    .testi-dots { gap: .425rem; margin-top: 2.25rem; }
  }

  @media (min-width: 1680px) {
    .testi-header { margin-bottom: 4.25rem; }
    .testi-eyebrow { font-size: .88rem; margin-bottom: .9rem; }
    .testi-nav-btn { width: 3.125rem; height: 3.125rem; }
    .testi-nav-icon { width: 1.45rem; height: 1.45rem; }
    .testi-quote-icon { width: 2.875rem; height: 2.875rem; margin-bottom: 1.875rem; }
    .testi-quote { font-size: clamp(1.325rem, 2.5vw, 1.6rem); margin-bottom: 2.375rem; }
    .testi-avatar { width: 3.125rem; height: 3.125rem; font-size: 1.15rem; }
    .testi-author-name { font-size: 1.075rem; }
    .testi-author-role { font-size: .925rem; }
    .testi-dots { gap: .45rem; margin-top: 2.375rem; }
  }

  @media (min-width: 1920px) {
    .testi-header { margin-bottom: 5rem; }
    .testi-eyebrow { font-size: 1rem; margin-bottom: 1rem; }
    .testi-nav-btn { width: 3.5rem; height: 3.5rem; }
    .testi-nav-icon { width: 1.625rem; height: 1.625rem; }
    .testi-quote-icon { width: 3.25rem; height: 3.25rem; margin-bottom: 2.125rem; }
    .testi-quote { font-size: clamp(1.5rem, 2.5vw, 1.85rem); margin-bottom: 2.75rem; }
    .testi-avatar { width: 3.5rem; height: 3.5rem; font-size: 1.3rem; }
    .testi-author-name { font-size: 1.2rem; }
    .testi-author-role { font-size: 1.025rem; }
    .testi-dots { gap: .5rem; margin-top: 2.75rem; }
  }
`}</style>
      <section
        className="section-padding"
        style={{
          background: "var(--neutral-950)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* subtle grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.03,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            pointerEvents: "none",
          }}
        />

        <div className="container-max" style={{ position: "relative" }}>
          {/* Header */}
          <div
            className="testi-header"
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-end",
              justifyContent: "space-between",
            }}
          >
            <div>
              <p
                className="testi-eyebrow"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: ".375rem",
                  fontWeight: 700,
                  letterSpacing: ".09em",
                  textTransform: "uppercase",
                  color: "var(--brand-600)",
                }}
              >
                Testimonials
              </p>
              <h2 style={{ color: "#fff", margin: 0 }}>
                Voices of
                <br />
                Transformation
              </h2>
            </div>
            {/* Nav arrows */}
            <div style={{ display: "flex", gap: "0.5rem" }}>
              {[
                { fn: prev, Icon: RiArrowLeftSLine },
                { fn: next, Icon: RiArrowRightSLine },
              ].map(({ fn, Icon }, i) => (
                <button
                  key={i}
                  onClick={fn}
                  className="testi-nav-btn"
                  style={{
                    borderRadius: "var(--radius-md)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    background: "rgba(255,255,255,0.04)",
                    color: "rgba(255,255,255,0.6)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "all .15s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLElement).style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "rgba(255,255,255,0.04)";
                    (e.currentTarget as HTMLElement).style.color =
                      "rgba(255,255,255,0.6)";
                  }}
                >
                  <Icon className="testi-nav-icon" />
                </button>
              ))}
            </div>
          </div>

          {/* Testimonial card */}
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1rem" }}
          >
            <div
              key={idx}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "var(--radius-2xl)",
                padding: "clamp(2rem, 4vw, 3rem)",
                animation: "fadeIn 0.3s ease",
              }}
            >
              <RiDoubleQuotesL
                className="testi-quote-icon"
                style={{ color: "var(--brand-600)", opacity: 0.6 }}
              />

              <p
                className="testi-quote"
                style={{
                  fontWeight: 400,
                  color: "rgba(255,255,255,.85)",
                  lineHeight: 1.7,
                  fontStyle: "italic",
                }}
              >
                &quot;{t.quote}&quot;
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: ".875rem",
                }}
              >
                <div
                  className="testi-avatar"
                  style={{
                    borderRadius: "50%",
                    background: "var(--brand-600)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    color: "#fff",
                    flexShrink: 0,
                  }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p
                    className="testi-author-name"
                    style={{ fontWeight: 600, color: "#fff" }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="testi-author-role"
                    style={{ color: "rgba(255,255,255,.4)", fontWeight: 400 }}
                  >
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div
            className="testi-dots"
            style={{ display: "flex", justifyContent: "center" }}
          >
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                style={{
                  width: i === idx ? "1.5rem" : ".375rem",
                  height: ".375rem",
                  borderRadius: "999px",
                  background:
                    i === idx ? "var(--brand-600)" : "rgba(255,255,255,.15)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all .25s ease",
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
