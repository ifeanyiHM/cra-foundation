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
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "1.5rem",
            marginBottom: "3.5rem",
          }}
        >
          <div>
            <p
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.375rem",
                fontSize: "0.74rem",
                fontWeight: 700,
                letterSpacing: "0.09em",
                textTransform: "uppercase",
                color: "var(--brand-600)",
                marginBottom: "0.75rem",
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
                style={{
                  width: "2.75rem",
                  height: "2.75rem",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(255,255,255,0.04)",
                  color: "rgba(255,255,255,0.6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.15s ease",
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
                <Icon style={{ width: "1.25rem", height: "1.25rem" }} />
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
              style={{
                width: "2.5rem",
                height: "2.5rem",
                color: "var(--brand-600)",
                opacity: 0.6,
                marginBottom: "1.5rem",
              }}
            />
            <p
              style={{
                fontSize: "clamp(1.1rem, 2.5vw, 1.375rem)",
                fontWeight: 400,
                color: "rgba(255,255,255,0.85)",
                lineHeight: 1.7,
                marginBottom: "2rem",
                fontStyle: "italic",
              }}
              className="whitespace-pre-line"
            >
              &quot;{t.quote}&quot;
            </p>
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}
            >
              <div
                style={{
                  width: "2.75rem",
                  height: "2.75rem",
                  borderRadius: "50%",
                  background: "var(--brand-600)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "#fff",
                  flexShrink: 0,
                }}
              >
                {t.name.charAt(0)}
              </div>
              <div>
                <p
                  style={{
                    fontWeight: 600,
                    color: "#fff",
                    fontSize: "0.9375rem",
                    marginBottom: "0.15rem",
                  }}
                >
                  {t.name}
                </p>
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "rgba(255,255,255,0.4)",
                    fontWeight: 400,
                  }}
                >
                  {t.role}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div
          style={{
            display: "flex",
            gap: "0.35rem",
            marginTop: "2rem",
            justifyContent: "center",
          }}
        >
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              style={{
                width: i === idx ? "1.5rem" : "0.375rem",
                height: "0.375rem",
                borderRadius: "999px",
                background:
                  i === idx ? "var(--brand-600)" : "rgba(255,255,255,0.15)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.25s ease",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
