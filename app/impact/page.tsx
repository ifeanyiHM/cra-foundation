import type { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import { impactStats, testimonials, awards, lgas } from "@/data";
import Link from "next/link";
import { RiMapPin2Line, RiDoubleQuotesL } from "react-icons/ri";
import AwardsSection from "@/components/programs/AwardSection";

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
          <div className="imp-stats-header">
            <p className="section-label">By the Numbers</p>
            <h2>Our Story in Statistics</h2>
          </div>
          <div className="imp-stats-grid">
            {impactStats.map((stat, i) => (
              <div key={i} className="card imp-stat-pad">
                <div
                  className="imp-stat-num"
                  style={{
                    fontWeight: 800,
                    color: "var(--neutral-950)",
                    letterSpacing: "-.05em",
                    lineHeight: 1,
                  }}
                >
                  {stat.number}
                </div>
                <h4 className="imp-stat-label">{stat.label}</h4>
                <p
                  className="imp-stat-desc"
                  style={{ color: "var(--neutral-400)" }}
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
          <div className="imp-timeline-header">
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
                className="imp-timeline-row"
                style={{ display: "flex", position: "relative" }}
              >
                <div
                  style={{
                    flexShrink: 0,
                    textAlign: "right",
                    paddingTop: ".2rem",
                  }}
                  className="w-2 md:w-18"
                >
                  <span
                    className="imp-timeline-year"
                    style={{
                      fontWeight: 700,
                      color: "var(--brand-600)",
                      letterSpacing: "-.01em",
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
                    paddingTop: ".2rem",
                  }}
                >
                  <div
                    className="imp-timeline-dot"
                    style={{
                      borderRadius: "50%",
                      background: "var(--brand-600)",
                      marginTop: ".15rem",
                      flexShrink: 0,
                    }}
                  />
                </div>
                <div className="card imp-timeline-card" style={{ flex: 1 }}>
                  <h4 className="imp-timeline-title">{e.title}</h4>
                  <p
                    className="imp-timeline-desc"
                    style={{ color: "var(--neutral-500)", lineHeight: 1.65 }}
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
          <div className="imp-geo-header">
            <p className="section-label">Geographic Reach</p>
            <h2>Where We Work</h2>
          </div>
          <div className="imp-geo-grid">
            {lgas.map((lga) => (
              <div key={lga.name} className="card flex flex-col imp-geo-card">
                <RiMapPin2Line
                  className="imp-geo-icon"
                  style={{ color: "var(--brand-600)" }}
                />
                <h4 className="imp-geo-name">{lga.name}</h4>
                <p
                  className="imp-geo-desc"
                  style={{
                    color: "var(--neutral-400)",
                    lineHeight: 1.6,
                    marginTop: "auto",
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
          <div className="imp-testi-header">
            <p className="section-label">Stories</p>
            <h2>Voices of Transformation</h2>
          </div>
          <div style={{ display: "grid", gap: "1rem" }}>
            {testimonials.map((t) => (
              <div key={t.id} className="card imp-testi-card">
                <RiDoubleQuotesL
                  className="imp-testi-icon"
                  style={{ color: "var(--brand-600)", opacity: 0.3 }}
                />
                <p
                  className="imp-testi-quote"
                  style={{
                    lineHeight: 1.75,
                    color: "var(--neutral-600)",
                    fontStyle: "italic",
                  }}
                >
                  &quot;{t.quote}&quot;
                </p>
                <div
                  className="imp-testi-gap"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <div
                    className="imp-testi-avatar"
                    style={{
                      borderRadius: "50%",
                      background: "var(--neutral-950)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                      color: "rgba(255,255,255,.7)",
                      flexShrink: 0,
                    }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p
                      className="imp-testi-name"
                      style={{ fontWeight: 600, color: "var(--neutral-900)" }}
                    >
                      {t.name}
                    </p>
                    <p
                      className="imp-testi-role"
                      style={{ color: "var(--neutral-400)" }}
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
      <AwardsSection awards={awards} />

      {/* CTA */}
      <div
        className="imp-cta-outer"
        style={{
          background: "var(--neutral-50)",
          borderTop: "1px solid var(--border-subtle)",
          textAlign: "center",
        }}
      >
        <div className="container-max">
          <h2 style={{ marginBottom: ".875rem" }}>Help Us Grow Our Impact</h2>
          <p className="imp-cta-sub" style={{ color: "var(--neutral-500)" }}>
            Every donation adds to this story. Be part of the next chapter.
          </p>
          <div
            className="imp-cta-btns"
            style={{
              display: "flex",
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

      <style>{`
        /* === RESPONSIVE SCALE > 1280px === */

        /* Stats */
        .imp-stats-header { margin-bottom: 2.5rem; }
        .imp-stats-grid {display: grid; grid-template-columns: repeat(auto-fill,minmax(220px,1fr)); gap: 1rem;}
        .imp-stat-pad { padding: 2rem 1.5rem; }
        .imp-stat-num { font-size: 2.75rem; margin-bottom: .5rem; }
        .imp-stat-label { font-size: .9375rem; margin-bottom: .3rem; }
        .imp-stat-desc { font-size: .845rem; }

        /* Timeline */
        .imp-timeline-header { margin-bottom: 2.5rem; }
        .imp-timeline-year { font-size: .78rem; }
        .imp-timeline-dot { width: .625rem; height: .625rem; }
        .imp-timeline-card { padding: 1.25rem 1.5rem; }
        .imp-timeline-title { font-size: .9375rem; margin-bottom: .3rem; }
        .imp-timeline-desc { font-size: .875rem; }
        .imp-timeline-row { gap: 1.5rem; padding-bottom: 2rem; }

        /* Geographic */
        .imp-geo-header { margin-bottom: 2.5rem; }
        .imp-geo-grid {display: grid; grid-template-columns: repeat(auto-fill,minmax(200px,1fr)); gap: 1rem;}
        .imp-geo-card { padding: 1.5rem; }
        .imp-geo-icon { width: 1.25rem; height: 1.25rem; margin-bottom: .75rem; }
        .imp-geo-name { font-size: .9375rem; margin-bottom: .375rem; }
        .imp-geo-desc { font-size: .845rem; }

        /* Testimonials */
        .imp-testi-header { margin-bottom: 2.5rem; }
        .imp-testi-card { padding: 2rem; }
        .imp-testi-icon { width: 1.75rem; height: 1.75rem; margin-bottom: 1rem; }
        .imp-testi-quote { font-size: .9375rem; margin-bottom: 1.5rem; }
        .imp-testi-avatar { width: 2.25rem; height: 2.25rem; font-size: .845rem; }
        .imp-testi-name { font-size: .875rem; }
        .imp-testi-role { font-size: .78rem; }
        .imp-testi-gap { gap: .75rem; }

        /* CTA */
        .imp-cta-outer { padding: 4rem 0; }
        .imp-cta-sub { max-width: 28rem; margin: 0 auto 2rem; line-height: 1.7; }
        .imp-cta-btns { gap: .75rem; }

        @media (min-width: 1440px) {
          .imp-stats-header { margin-bottom: 2.75rem; }
          .imp-stats-grid { grid-template-columns: repeat(5, 1fr);}
          .imp-stat-pad { padding: 2.125rem 1.625rem; }
          .imp-stat-num { font-size: 2.95rem; margin-bottom: .55rem; }
          .imp-stat-label { font-size: .975rem; margin-bottom: .325rem; }
          .imp-stat-desc { font-size: .875rem; }

          .imp-timeline-header { margin-bottom: 2.75rem; }
          .imp-timeline-year { font-size: .8rem; }
          .imp-timeline-dot { width: .675rem; height: .675rem; }
          .imp-timeline-card { padding: 1.375rem 1.625rem; }
          .imp-timeline-title { font-size: .975rem; margin-bottom: .325rem; }
          .imp-timeline-desc { font-size: .9rem; }
          .imp-timeline-row { gap: 1.625rem; padding-bottom: 2.125rem; }

          .imp-geo-header { margin-bottom: 2.75rem; }
          .imp-geo-grid { grid-template-columns: repeat(5, 1fr);}
          .imp-geo-card { padding: 1.625rem; }
          .imp-geo-icon { width: 1.3rem; height: 1.3rem; margin-bottom: .8rem; }
          .imp-geo-name { font-size: .975rem; margin-bottom: .4rem; }
          .imp-geo-desc { font-size: .875rem; }

          .imp-testi-header { margin-bottom: 2.75rem; }
          .imp-testi-card { padding: 2.125rem; }
          .imp-testi-icon { width: 1.825rem; height: 1.825rem; margin-bottom: 1.075rem; }
          .imp-testi-quote { font-size: .975rem; margin-bottom: 1.625rem; }
          .imp-testi-avatar { width: 2.375rem; height: 2.375rem; font-size: .875rem; }
          .imp-testi-name { font-size: .9rem; }
          .imp-testi-role { font-size: .8rem; }
          .imp-testi-gap { gap: .8rem; }

          .imp-cta-outer { padding: 4.5rem 0; }
          .imp-cta-sub { max-width: 30rem; margin: 0 auto 2.125rem; font-size: .975rem; }
          .imp-cta-btns { gap: .8rem; }
        }

        @media (min-width: 1536px) {
          .imp-stats-header { margin-bottom: 3.125rem; }
          .imp-stat-pad { padding: 2.375rem 1.875rem; }
          .imp-stat-num { font-size: 3.375rem; margin-bottom: .65rem; }
          .imp-stat-label { font-size: 1.075rem; margin-bottom: .375rem; }
          .imp-stat-desc { font-size: .975rem; }

          .imp-timeline-header { margin-bottom: 3.125rem; }
          .imp-timeline-year { font-size: .9rem; }
          .imp-timeline-dot { width: .775rem; height: .775rem; }
          .imp-timeline-card { padding: 1.625rem 1.875rem; }
          .imp-timeline-title { font-size: 1.075rem; margin-bottom: .375rem; }
          .imp-timeline-desc { font-size: 1rem; }
          .imp-timeline-row { gap: 1.875rem; padding-bottom: 2.375rem; }

          .imp-geo-header { margin-bottom: 3.125rem; }
          .imp-geo-card { padding: 1.875rem; }
          .imp-geo-icon { width: 1.475rem; height: 1.475rem; margin-bottom: .925rem; }
          .imp-geo-name { font-size: 1.075rem; margin-bottom: .475rem; }
          .imp-geo-desc { font-size: .975rem; }

          .imp-testi-header { margin-bottom: 3.125rem; }
          .imp-testi-card { padding: 2.375rem; }
          .imp-testi-icon { width: 2.075rem; height: 2.075rem; margin-bottom: 1.2rem; }
          .imp-testi-quote { font-size: 1.075rem; margin-bottom: 1.875rem; }
          .imp-testi-avatar { width: 2.625rem; height: 2.625rem; font-size: .975rem; }
          .imp-testi-name { font-size: 1rem; }
          .imp-testi-role { font-size: .9rem; }
          .imp-testi-gap { gap: .925rem; }

          .imp-cta-outer { padding: 5.25rem 0; }
          .imp-cta-sub { max-width: 34rem; margin: 0 auto 2.375rem; font-size: 1.075rem; }
          .imp-cta-btns { gap: .925rem; }
        }

        @media (min-width: 1680px) {
          .imp-stats-header { margin-bottom: 3.5rem; }
          .imp-stat-pad { padding: 2.625rem 2.125rem; }
          .imp-stat-num { font-size: 3.75rem; margin-bottom: .725rem; }
          .imp-stat-label { font-size: 1.175rem; margin-bottom: .425rem; }
          .imp-stat-desc { font-size: 1.075rem; }

          .imp-timeline-header { margin-bottom: 3.5rem; }
          .imp-timeline-year { font-size: 1rem; }
          .imp-timeline-dot { width: .875rem; height: .875rem; }
          .imp-timeline-card { padding: 1.875rem 2.125rem; }
          .imp-timeline-title { font-size: 1.175rem; margin-bottom: .425rem; }
          .imp-timeline-desc { font-size: 1.1rem; }
          .imp-timeline-row { gap: 2.125rem; padding-bottom: 2.625rem; }

          .imp-geo-header { margin-bottom: 3.5rem; }
          .imp-geo-card { padding: 2.125rem; }
          .imp-geo-icon { width: 1.625rem; height: 1.625rem; margin-bottom: 1.025rem; }
          .imp-geo-name { font-size: 1.175rem; margin-bottom: .525rem; }
          .imp-geo-desc { font-size: 1.075rem; }

          .imp-testi-header { margin-bottom: 3.5rem; }
          .imp-testi-card { padding: 2.625rem; }
          .imp-testi-icon { width: 2.275rem; height: 2.275rem; margin-bottom: 1.325rem; }
          .imp-testi-quote { font-size: 1.175rem; margin-bottom: 2.125rem; }
          .imp-testi-avatar { width: 2.875rem; height: 2.875rem; font-size: 1.075rem; }
          .imp-testi-name { font-size: 1.1rem; }
          .imp-testi-role { font-size: .975rem; }
          .imp-testi-gap { gap: 1rem; }

          .imp-cta-outer { padding: 6rem 0; }
          .imp-cta-sub { max-width: 38rem; margin: 0 auto 2.625rem; font-size: 1.175rem; }
          .imp-cta-btns { gap: 1rem; }
        }

        @media (min-width: 1920px) {
          .imp-stats-header { margin-bottom: 4rem; }
          .imp-stat-pad { padding: 3rem 2.5rem; }
          .imp-stat-num { font-size: 4.5rem; margin-bottom: .875rem; }
          .imp-stat-label { font-size: 1.35rem; margin-bottom: .5rem; }
          .imp-stat-desc { font-size: 1.225rem; }

          .imp-timeline-header { margin-bottom: 4rem; }
          .imp-timeline-year { font-size: 1.175rem; }
          .imp-timeline-dot { width: 1rem; height: 1rem; }
          .imp-timeline-card { padding: 2.25rem 2.5rem; }
          .imp-timeline-title { font-size: 1.35rem; margin-bottom: .5rem; }
          .imp-timeline-desc { font-size: 1.275rem; }
          .imp-timeline-row { gap: 2.5rem; padding-bottom: 3rem; }

          .imp-geo-header { margin-bottom: 4rem; }
          .imp-geo-card { padding: 2.5rem; }
          .imp-geo-icon { width: 1.875rem; height: 1.875rem; margin-bottom: 1.2rem; }
          .imp-geo-name { font-size: 1.35rem; margin-bottom: .625rem; }
          .imp-geo-desc { font-size: 1.225rem; }

          .imp-testi-header { margin-bottom: 4rem; }
          .imp-testi-card { padding: 3rem; }
          .imp-testi-icon { width: 2.625rem; height: 2.625rem; margin-bottom: 1.5rem; }
          .imp-testi-quote { font-size: 1.35rem; margin-bottom: 2.5rem; }
          .imp-testi-avatar { width: 3.25rem; height: 3.25rem; font-size: 1.225rem; }
          .imp-testi-name { font-size: 1.25rem; }
          .imp-testi-role { font-size: 1.1rem; }
          .imp-testi-gap { gap: 1.175rem; }

          .imp-cta-outer { padding: 7.5rem 0; }
          .imp-cta-sub { max-width: 44rem; margin: 0 auto 3rem; font-size: 1.35rem; }
          .imp-cta-btns { gap: 1.25rem; }
        }
    `}</style>
    </>
  );
}
