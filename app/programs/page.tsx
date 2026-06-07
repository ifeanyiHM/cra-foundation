import type { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import { programs } from "@/data";
import Link from "next/link";
import {
  RiCheckLine,
  RiArrowRightLine,
  RiBook2Line,
  RiRestaurantLine,
  RiHeartPulseLine,
  RiShoppingBagLine,
  RiGraduationCapLine,
  RiComputerLine,
  RiUserHeartLine,
  RiBusLine,
} from "react-icons/ri";
import Image from "next/image";

export const metadata: Metadata = { title: "Our Programs" };

const icons = [
  RiBook2Line,
  RiRestaurantLine,
  RiHeartPulseLine,
  RiShoppingBagLine,
  RiGraduationCapLine,
  RiComputerLine,
  RiUserHeartLine,
  RiBusLine,
];
const accents = [
  {
    bg: "var(--brand-50)",
    icon: "var(--brand-600)",
    border: "var(--brand-100)",
  },
  {
    bg: "var(--accent-amber-50)",
    icon: "var(--accent-amber)",
    border: "#FEF3C7",
  },
  {
    bg: "var(--accent-green-50)",
    icon: "var(--accent-green-600)",
    border: "#D1FAE5",
  },
  {
    bg: "var(--accent-blue-50)",
    icon: "var(--accent-blue-600)",
    border: "#DBEAFE",
  },
  {
    bg: "var(--accent-violet-50)",
    icon: "var(--accent-violet-600)",
    border: "#EDE9FE",
  },
  {
    bg: "var(--accent-teal-50)",
    icon: "var(--accent-teal-600)",
    border: "#CCFBF1",
  },
  {
    bg: "var(--brand-50)",
    icon: "var(--brand-600)",
    border: "var(--brand-100)",
  },
  {
    bg: "var(--accent-green-50)",
    icon: "var(--accent-green-600)",
    border: "#D1FAE5",
  },
];

const activities = [
  {
    letter: "A",
    title: "After-School Extra Lessons",
    desc: "Guided tutoring sessions with qualified tutors, followed by lunch.",
  },
  {
    letter: "B",
    title: "Midday Meals Scheme",
    desc: "Daily nutritious meals for all children under sponsorship.",
  },
  {
    letter: "C",
    title: "Health-Related Matters",
    desc: "Medical check-ups, vitamins, hygiene, and disinfectants.",
  },
  {
    letter: "D",
    title: "School Supplies Procurement",
    desc: "Uniforms, sandals, bags, books, and writing materials.",
  },
  {
    letter: "E",
    title: "Textbooks & Materials",
    desc: "All required textbooks and stationery provided free.",
  },
  {
    letter: "F",
    title: "Scholarships & Sponsorships",
    desc: "Full and partial funding for quality education.",
  },
  {
    letter: "G",
    title: "Festivals & Holidays",
    desc: "Celebrating special occasions with underprivileged children.",
  },
  {
    letter: "H",
    title: "Educational Excursions",
    desc: "Taking children on learning-focused field trips.",
  },
];

export default function ProgramsPage() {
  return (
    <>
      <PageHeader
        badge="What We Do"
        title="Our Programs &"
        highlight="Activities"
        description="Eight comprehensive programs that address every dimension of a child's well-being — from education and nutrition to health and counseling."
      />

      {/* Detailed programs */}
      <section
        className="section-padding"
        style={{ background: "var(--white)" }}
      >
        <div
          className="container-max"
          style={{ display: "flex", flexDirection: "column", gap: "5rem" }}
        >
          {programs.map((prog, i) => {
            const Icon = icons[i] || RiBook2Line;
            const accent = accents[i] || accents[0];
            const isEven = i % 2 === 0;
            return (
              <div
                key={prog.id}
                id={prog.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)",
                  gap: "4rem",
                  alignItems: "center",
                }}
              >
                <div style={{ order: isEven ? 0 : 1 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      marginBottom: "1.25rem",
                    }}
                  >
                    <div
                      style={{
                        width: "2.5rem",
                        height: "2.5rem",
                        borderRadius: "var(--radius-md)",
                        background: accent.bg,
                        border: `1px solid ${accent.border}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon
                        style={{
                          width: "1.125rem",
                          height: "1.125rem",
                          color: accent.icon,
                        }}
                      />
                    </div>
                    <span
                      style={{
                        fontSize: "0.74rem",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "var(--neutral-400)",
                      }}
                    >
                      Program {i + 1} of {programs.length}
                    </span>
                  </div>
                  <h2 style={{ marginBottom: "1rem" }}>{prog.title}</h2>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      lineHeight: 1.75,
                      color: "var(--neutral-500)",
                      marginBottom: "1.5rem",
                    }}
                  >
                    {prog.description}
                  </p>
                  {prog.details && (
                    <ul
                      style={{
                        listStyle: "none",
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.625rem",
                        marginBottom: "2rem",
                      }}
                    >
                      {prog.details.map((d) => (
                        <li
                          key={d}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.625rem",
                            fontSize: "0.9rem",
                            color: "var(--neutral-700)",
                          }}
                        >
                          <div
                            style={{
                              width: "1.25rem",
                              height: "1.25rem",
                              borderRadius: "50%",
                              background: accent.bg,
                              border: `1px solid ${accent.border}`,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0,
                            }}
                          >
                            <RiCheckLine
                              style={{
                                width: "0.7rem",
                                height: "0.7rem",
                                color: accent.icon,
                              }}
                            />
                          </div>
                          {d}
                        </li>
                      ))}
                    </ul>
                  )}
                  <Link href="/donate" className="btn btn-primary">
                    Support This Program{" "}
                    <RiArrowRightLine
                      style={{ width: "0.9rem", height: "0.9rem" }}
                    />
                  </Link>
                </div>
                <div style={{ order: isEven ? 1 : 0 }}>
                  <div
                    style={{
                      height: "20rem",
                      position: "relative",
                      overflow: "hidden",
                      borderRadius: "var(--radius-2xl)",
                      border: `1px solid ${accent.border}`,
                    }}
                  >
                    <Image
                      src={`/images/programs/${prog.title}.jpg`}
                      alt={prog.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Activity summary */}
      <section
        className="section-padding"
        style={{
          background: "var(--neutral-50)",
          borderTop: "1px solid var(--border-subtle)",
        }}
      >
        <div className="container-max">
          <div style={{ marginBottom: "2.5rem" }}>
            <p className="section-label">Summary</p>
            <h2>Main Areas of Activities</h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))",
              gap: "1rem",
            }}
          >
            {activities.map(({ letter, title, desc }) => (
              <div key={letter} className="card" style={{ padding: "1.5rem" }}>
                <div
                  style={{
                    width: "1.75rem",
                    height: "1.75rem",
                    borderRadius: "var(--radius-sm)",
                    background: "var(--neutral-950)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.74rem",
                    fontWeight: 800,
                    color: "rgba(255,255,255,0.7)",
                    marginBottom: "0.875rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {letter}
                </div>
                <h4 style={{ fontSize: "0.9375rem", marginBottom: "0.4rem" }}>
                  {title}
                </h4>
                <p
                  style={{
                    fontSize: "0.845rem",
                    color: "var(--neutral-400)",
                    lineHeight: 1.65,
                  }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div
        style={{
          background: "var(--neutral-950)",
          padding: "4rem 0",
          textAlign: "center",
        }}
      >
        <div className="container-max">
          <h2 style={{ color: "#fff", marginBottom: "0.875rem" }}>
            Fund a Program Today
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.45)",
              fontSize: "0.9375rem",
              maxWidth: "30rem",
              margin: "0 auto 2rem",
              lineHeight: 1.7,
            }}
          >
            Your donation directly sustains one of these life-changing programs.
          </p>
          <div
            style={{
              display: "flex",
              gap: "0.75rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link href="/donate" className="btn btn-white btn-lg">
              Donate Now
            </Link>
            <Link href="/sponsor" className="btn btn-outline-white btn-lg">
              Sponsor a Child
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
