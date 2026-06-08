import type { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import { impactStats, testimonials, awards, lgas } from "@/data";
import Link from "next/link";
import { RiMedalLine, RiMapPin2Line, RiDoubleQuotesL } from "react-icons/ri";

export const metadata: Metadata = { title: "Our Impact" };

const timeline = [
  {
    year: "2010",
    title: "Foundation Established",
    desc: "Mrs. Olayide Shonubi founded CRA Foundation driven by compassion for street children in Lagos.",
  },
  {
    year: "2011",
    title: "Formal Incorporation",
    desc: "The foundation was formally incorporated in March 2011, beginning structured operations.",
  },
  {
    year: "2013",
    title: "First Government Award",
    desc: "Received the Support Our Schools Initiative Award from Lagos State Government.",
  },
  {
    year: "2013",
    title: "Education Recognition",
    desc: "Awarded by the Association of Primary Schools Head Teachers of Nigeria, Lagos State Wing.",
  },
  {
    year: "2016",
    title: "SBMC Recognition",
    desc: "Lagos State Universal Basic Education Board recognised our school-based management contributions.",
  },
  {
    year: "2017",
    title: "Second SBMC Award",
    desc: "Continued recognition from UBEB for sustained impact in school community management.",
  },
  {
    year: "2022",
    title: "Latest Recognition",
    desc: "Received Recognition Award from Lagos State Universal Basic Education Board.",
  },
  {
    year: "2024+",
    title: "Growing Forward",
    desc: "Expanding programs, deepening impact, and growing our community of donors and volunteers.",
  },
];

export default function ImpactPage() {
  return (
    <>
      <PageHeader
        badge="Impact & Results"
        title="Measuring Our"
        highlight="Impact"
        description="13+ years of consistent service, thousands of children reached, and six government awards. Here is the evidence of our work."
      />

      {/* Stats grid */}
      <section
        className="section-padding"
        style={{ background: "var(--white)" }}
      >
        <div className="container-max">
          <div style={{ marginBottom: "2.5rem" }}>
            <p className="section-label">By the Numbers</p>
            <h2>Our Story in Statistics</h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))",
              gap: "1rem",
            }}
          >
            {impactStats.map((stat, i) => (
              <div key={i} className="card" style={{ padding: "2rem 1.5rem" }}>
                <div
                  style={{
                    fontSize: "2.75rem",
                    fontWeight: 800,
                    color: "var(--neutral-950)",
                    letterSpacing: "-0.05em",
                    lineHeight: 1,
                    marginBottom: "0.5rem",
                  }}
                >
                  {stat.number}
                </div>
                <h4 style={{ fontSize: "0.9375rem", marginBottom: "0.3rem" }}>
                  {stat.label}
                </h4>
                <p
                  style={{ fontSize: "0.845rem", color: "var(--neutral-400)" }}
                >
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section
        className="section-padding"
        style={{
          background: "var(--neutral-50)",
          borderTop: "1px solid var(--border-subtle)",
        }}
      >
        <div className="container-max">
          <div style={{ marginBottom: "2.5rem" }}>
            <p className="section-label">History</p>
            <h2>Our Journey</h2>
          </div>
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: "0",
            }}
          >
            <div
              style={{
                position: "absolute",
                // left: "5.25rem",
                top: 0,
                bottom: 0,
                width: "1px",
                background: "var(--border-subtle)",
              }}
              className="left-8.5 md:left-21"
            />
            {timeline.map((e, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "1.5rem",
                  paddingBottom: "2rem",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    // width: "4.5rem",
                    flexShrink: 0,
                    textAlign: "right",
                    paddingTop: "0.2rem",
                  }}
                  className="w-2 md:w-18"
                >
                  <span
                    style={{
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      color: "var(--brand-600)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {e.year}
                  </span>
                </div>
                <div
                  style={{
                    width: "1.5rem",
                    flexShrink: 0,
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: "0.2rem",
                  }}
                >
                  <div
                    style={{
                      width: "0.625rem",
                      height: "0.625rem",
                      borderRadius: "50%",
                      background: "var(--brand-600)",
                      marginTop: "0.15rem",
                      flexShrink: 0,
                    }}
                  />
                </div>
                <div
                  className="card"
                  style={{ flex: 1, padding: "1.25rem 1.5rem" }}
                >
                  <h4 style={{ fontSize: "0.9375rem", marginBottom: "0.3rem" }}>
                    {e.title}
                  </h4>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--neutral-500)",
                      lineHeight: 1.65,
                    }}
                  >
                    {e.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Geographic reach */}
      <section
        className="section-padding"
        style={{
          background: "var(--white)",
          borderTop: "1px solid var(--border-subtle)",
        }}
      >
        <div className="container-max">
          <div style={{ marginBottom: "2.5rem" }}>
            <p className="section-label">Geographic Reach</p>
            <h2>Where We Work</h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))",
              gap: "1rem",
            }}
          >
            {lgas.map((lga) => (
              <div
                key={lga.name}
                className="card"
                style={{ padding: "1.5rem" }}
              >
                <RiMapPin2Line
                  style={{
                    width: "1.25rem",
                    height: "1.25rem",
                    color: "var(--brand-600)",
                    marginBottom: "0.75rem",
                  }}
                />
                <h4 style={{ fontSize: "0.9375rem", marginBottom: "0.375rem" }}>
                  {lga.name}
                </h4>
                <p
                  style={{
                    fontSize: "0.845rem",
                    color: "var(--neutral-400)",
                    lineHeight: 1.6,
                  }}
                >
                  {lga.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="section-padding"
        style={{
          background: "var(--neutral-50)",
          borderTop: "1px solid var(--border-subtle)",
        }}
      >
        <div className="container-max">
          <div style={{ marginBottom: "2.5rem" }}>
            <p className="section-label">Stories</p>
            <h2>Voices of Transformation</h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))",
              gap: "1rem",
            }}
          >
            {testimonials.map((t) => (
              <div key={t.id} className="card" style={{ padding: "2rem" }}>
                <RiDoubleQuotesL
                  style={{
                    width: "1.75rem",
                    height: "1.75rem",
                    color: "var(--brand-600)",
                    opacity: 0.3,
                    marginBottom: "1rem",
                  }}
                />
                <p
                  style={{
                    fontSize: "0.9375rem",
                    lineHeight: 1.75,
                    color: "var(--neutral-600)",
                    fontStyle: "italic",
                    marginBottom: "1.5rem",
                  }}
                >
                  &quot;{t.quote}&quot;
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <div
                    style={{
                      width: "2.25rem",
                      height: "2.25rem",
                      borderRadius: "50%",
                      background: "var(--neutral-950)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.845rem",
                      fontWeight: 700,
                      color: "rgba(255,255,255,0.7)",
                      flexShrink: 0,
                    }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p
                      style={{
                        fontWeight: 600,
                        fontSize: "0.875rem",
                        color: "var(--neutral-900)",
                      }}
                    >
                      {t.name}
                    </p>
                    <p
                      style={{
                        fontSize: "0.78rem",
                        color: "var(--neutral-400)",
                      }}
                    >
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section style={{ background: "var(--neutral-950)", padding: "4rem 0" }}>
        <div className="container-max">
          <p
            style={{
              display: "inline-flex",
              fontSize: "0.74rem",
              fontWeight: 700,
              letterSpacing: "0.09em",
              textTransform: "uppercase",
              color: "#0041ff",
              marginBottom: "0.75rem",
            }}
          >
            Recognition
          </p>
          <h2 style={{ color: "#fff", marginBottom: "2rem" }}>
            Government Awards & Laurels
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))",
              gap: "0.875rem",
            }}
          >
            {awards.map((a, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "var(--radius-xl)",
                  padding: "1.375rem",
                }}
              >
                <div
                  style={{
                    width: "2.25rem",
                    height: "2.25rem",
                    borderRadius: "var(--radius-md)",
                    background: "rgba(217,119,6,0.12)",
                    border: "1px solid rgba(217,119,6,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <RiMedalLine
                    style={{ width: "1rem", height: "1rem", color: "#FCD34D" }}
                  />
                </div>
                <div>
                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      color: "#FCD34D",
                      display: "block",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {a.year}
                  </span>
                  <p
                    style={{
                      fontWeight: 600,
                      fontSize: "0.875rem",
                      color: "rgba(255,255,255,0.8)",
                      lineHeight: 1.4,
                      marginBottom: "0.2rem",
                    }}
                  >
                    {a.title}
                  </p>
                  <p
                    style={{
                      fontSize: "0.8rem",
                      color: "rgba(255,255,255,0.35)",
                    }}
                  >
                    {a.issuer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div
        style={{
          background: "var(--neutral-50)",
          borderTop: "1px solid var(--border-subtle)",
          padding: "4rem 0",
          textAlign: "center",
        }}
      >
        <div className="container-max">
          <h2 style={{ marginBottom: "0.875rem" }}>Help Us Grow Our Impact</h2>
          <p
            style={{
              color: "var(--neutral-500)",
              maxWidth: "28rem",
              margin: "0 auto 2rem",
              lineHeight: 1.7,
            }}
          >
            Every donation adds to this story. Be part of the next chapter.
          </p>
          <div
            style={{
              display: "flex",
              gap: "0.75rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link href="/donate" className="btn btn-primary btn-lg">
              Donate Now
            </Link>
            <Link href="/sponsor" className="btn btn-secondary btn-lg">
              Sponsor a Child
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
