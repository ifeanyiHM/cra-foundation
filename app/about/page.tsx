import type { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import { boardMembers, awards, lgas } from "@/data";
import {
  RiMapPin2Line,
  RiShieldCheckLine,
  RiArrowRightLine,
} from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
import { slugify } from "@/lib/utils";
import AwardsSection from "@/components/programs/AwardSection";

export const metadata: Metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <>
      <PageHeader
        badge="Our Story"
        title="About CRA"
        highlight="Foundation"
        description="Established in 2010 and incorporated in March 2011 — over a decade of nurturing underprivileged children in Lagos, Nigeria."
      />

      {/* Story */}
      <section
        id="story"
        className="section-padding"
        style={{ background: "var(--white)" }}
      >
        <div className="container-max">
          <div
            style={{
              gap: "5rem",
              alignItems: "center",
            }}
            className="grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]"
          >
            <div>
              <p className="section-label">Our Story</p>
              <h2 style={{ marginBottom: "1.25rem" }}>Born from Compassion</h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                {[
                  "The Children's Right Advocate Foundation was born out of deep compassion for needy and street children who are particularly susceptible to being co-opted into vices or becoming victims of trafficking, dangerous child labour, and other social ills.",
                  'Unlike organisations that simply "dash out" money as a one-time gesture, we have a deep longing to be involved in the complete well-being of these children — addressing education, nutrition, health, and emotional development together.',
                  "We recognised that you cannot sell the idea of education to a child who is hungry. This is why we ensure the total well-being of each child, walking alongside them every step of the way.",
                ].map((text, i) => (
                  <p
                    key={i}
                    style={{
                      fontSize: "0.9375rem",
                      lineHeight: 1.75,
                      color: "var(--neutral-500)",
                    }}
                  >
                    {text}
                  </p>
                ))}
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
              }}
            >
              {[
                {
                  val: "2010",
                  label: "Founded",
                  bg: "var(--brand-600)",
                  color: "#fff",
                },
                {
                  val: "2011",
                  label: "Incorporated",
                  bg: "var(--neutral-950)",
                  color: "#fff",
                },
                {
                  val: "13+",
                  label: "Years Active",
                  bg: "var(--neutral-50)",
                  color: "var(--neutral-900)",
                  border: "1px solid var(--border-subtle)",
                },
                {
                  val: "6",
                  label: "Gov. Awards",
                  bg: "var(--accent-amber-50)",
                  color: "var(--accent-amber)",
                  border: "1px solid #FEF3C7",
                },
              ].map(({ val, label, bg, color, border }) => (
                <div
                  key={label}
                  style={{
                    background: bg,
                    borderRadius: "var(--radius-xl)",
                    padding: "2rem 1.5rem",
                    border: border || "none",
                  }}
                >
                  <div
                    style={{
                      fontSize: "2.5rem",
                      fontWeight: 800,
                      color,
                      lineHeight: 1,
                      letterSpacing: "-0.04em",
                    }}
                  >
                    {val}
                  </div>
                  <div
                    style={{
                      fontSize: "0.845rem",
                      color:
                        bg === "var(--neutral-50)"
                          ? "var(--neutral-500)"
                          : bg === "var(--neutral-950)"
                            ? "rgba(255,255,255,0.5)"
                            : `${color}99`,
                      marginTop: "0.4rem",
                      fontWeight: 500,
                    }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Motto */}
      <div
        style={{
          background: "var(--neutral-50)",
          borderTop: "1px solid var(--border-subtle)",
          borderBottom: "1px solid var(--border-subtle)",
          padding: "4rem 0",
          textAlign: "center",
        }}
      >
        <div className="container-max">
          <p
            style={{
              fontSize: "0.845rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--neutral-400)",
              marginBottom: "0.75rem",
            }}
          >
            Our Motto
          </p>
          <h1
            style={{
              color: "var(--neutral-950)",
              fontSize: "clamp(2rem,6vw,4rem)",
            }}
          >
            &quot;To Nurture a Dream&quot;
          </h1>
          <p
            style={{
              maxWidth: "38rem",
              margin: "1rem auto 0",
              fontSize: "1rem",
              color: "var(--neutral-500)",
              lineHeight: 1.75,
            }}
          >
            To nurture is to give, rear, educate, suckle, supply with, mentor,
            fend for, bring up, show affection, care for, foster, provide for
            and to further develop.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <section
        id="mission"
        className="section-padding"
        style={{ background: "var(--white)" }}
      >
        <div className="container-max">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
              gap: "1.5rem",
              marginBottom: "4rem",
            }}
          >
            {[
              {
                label: "Mission",
                title: "Our Mission",
                body: "To nurture children who the society considers as underprivileged to reach their potentials in life and become honorable members of the society.",
                dark: true,
              },
              {
                label: "Vision",
                title: "Our Vision",
                body: "Pursuing the cause of a better world by enabling the next generation to gain a more secure future through education, health, and opportunity.",
                dark: false,
              },
            ].map(({ label, title, body, dark }) => (
              <div
                key={label}
                style={{
                  background: dark ? "var(--neutral-950)" : "var(--neutral-50)",
                  border: `1px solid ${dark ? "rgba(255,255,255,0.06)" : "var(--border-subtle)"}`,
                  borderRadius: "var(--radius-2xl)",
                  padding: "2.5rem",
                }}
              >
                <p
                  style={{
                    fontSize: "0.74rem",
                    fontWeight: 700,
                    letterSpacing: "0.09em",
                    textTransform: "uppercase",
                    color: "var(--brand-600)",
                    marginBottom: "1rem",
                  }}
                >
                  {label}
                </p>
                <h3
                  style={{
                    color: dark ? "#fff" : "var(--neutral-900)",
                    marginBottom: "1rem",
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    color: dark
                      ? "rgba(255,255,255,0.5)"
                      : "var(--neutral-500)",
                    lineHeight: 1.75,
                    fontSize: "0.9375rem",
                  }}
                >
                  {body}
                </p>
              </div>
            ))}
          </div>

          {/* Objectives */}
          <p className="section-label">Objectives</p>
          <h2 style={{ marginBottom: "2rem" }}>Aims & Objectives</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))",
              gap: "1rem",
            }}
          >
            {[
              "Nurture, care for and advocate for the rights of underprivileged, orphaned, and indigent children.",
              "Engage underprivileged children for their total development.",
              "Organize counseling programs to help children discover their innate talents and abilities.",
              "Monitor progress to ensure children complete important educational milestones.",
              "Provide a learning center where children can read, do homework, access the internet, eat, rest, and play.",
              "Source funds and sponsorships to enable underprivileged children access quality education.",
              "Facilitate volunteering by encouraging people to supply needs, adopt, or mentor children.",
              "Organize fun days and celebrate festivals with underprivileged children.",
            ].map((obj, i) => (
              <div
                key={i}
                className="card flex flex-col"
                style={{ padding: "1.375rem" }}
              >
                <div
                  style={{
                    width: "1.625rem",
                    height: "1.625rem",
                    borderRadius: "var(--radius-sm)",
                    background: "var(--brand-50)",
                    border: "1px solid var(--brand-100)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.74rem",
                    fontWeight: 800,
                    color: "var(--brand-600)",
                    marginBottom: "0.875rem",
                  }}
                >
                  {i + 1}
                </div>
                <p
                  style={{
                    fontSize: "0.875rem",
                    lineHeight: 1.7,
                    color: "var(--neutral-600)",
                    marginTop: "auto",
                  }}
                >
                  {obj}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas */}
      <section
        style={{
          background: "var(--neutral-50)",
          borderTop: "1px solid var(--border-subtle)",
          padding: "4rem 0",
        }}
      >
        <div className="container-max">
          <p className="section-label">Coverage</p>
          <h2 style={{ marginBottom: "2rem" }}>Areas We Operate</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))",
              gap: "0.875rem",
            }}
          >
            {lgas.map((lga) => (
              <div
                key={lga.name}
                className="card flex flex-col"
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

      {/* Board */}
      <section
        id="board"
        className="section-padding"
        style={{ background: "var(--white)" }}
      >
        <div className="container-max">
          {/* Header */}
          <div style={{ maxWidth: "42rem", marginBottom: "2.5rem" }}>
            <p className="section-label">Leadership</p>
            <h2 style={{ marginBottom: "0.75rem" }}>Board of Trustees</h2>
            <p
              style={{
                fontSize: "0.95rem",
                color: "var(--neutral-500)",
                lineHeight: 1.7,
              }}
            >
              Our board is made up of experienced leaders committed to guiding
              the mission of empowering vulnerable children through education,
              care, and opportunity.
            </p>
          </div>

          {/* Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {boardMembers.map((m, i) => (
              <Link
                key={m.id}
                href={`/board/${slugify(m.name)}`}
                className="block"
              >
                <div
                  // key={m.id}
                  className="group card card-hover p-6 rounded-2xl overflow-hidden"
                  style={{
                    position: "relative",
                  }}
                >
                  {/* Profile Image */}
                  <div
                    style={{
                      width: "100%",
                      height: "220px",
                      borderRadius: "18px",
                      overflow: "hidden",
                      marginBottom: "1rem",
                      position: "relative",
                    }}
                  >
                    <Image
                      src={`/images/board/${m.name}.webp`}
                      alt={m.name}
                      className="mx-auto! object-cover object-top transition-transform duration-500 group-hover:scale-110"
                      width={208}
                      height={221}
                    />
                  </div>

                  {/* Body */}
                  <div className="bc-body">
                    <p className="bc-role">{m.role}</p>
                    <p className="bc-name">{m.name}</p>
                    <div className="bc-footer">
                      <span className="bc-btn">
                        View profile
                        <RiArrowRightLine
                          style={{ width: "0.8rem", height: "0.8rem" }}
                        />
                      </span>
                      <span className="bc-num">0{i + 1}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <AwardsSection awards={awards} title="Awards & Laurels" />

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
          <RiShieldCheckLine
            style={{
              width: "2.5rem",
              height: "2.5rem",
              color: "var(--brand-600)",
              margin: "0 auto 1.25rem",
            }}
          />
          <h2 style={{ marginBottom: "0.875rem" }}>
            Join Us in Nurturing Dreams
          </h2>
          <p
            style={{
              color: "var(--neutral-500)",
              fontSize: "0.9375rem",
              maxWidth: "30rem",
              margin: "0 auto 2rem",
              lineHeight: 1.7,
            }}
          >
            Your support — in any form — changes a child&apos;s life forever.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem",
              justifyContent: "center",
            }}
          >
            <Link href="/donate" className="btn btn-primary btn-lg">
              Donate Now
            </Link>
            <Link href="/volunteer" className="btn btn-secondary btn-lg">
              Volunteer
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .bc-body { padding: 0.875rem 1rem 1rem; }
.bc-role {
  font-size: 0.68rem;
  font-weight: 700;
  color: var(--brand-600);
  letter-spacing: .06em;
  text-transform: uppercase;
  margin-bottom: 0.3rem;
}
.bc-name {
  font-size: 0.9375rem;
  font-weight: 700;
  color: var(--neutral-900);
  line-height: 1.3;
  margin-bottom: 0.875rem;
  letter-spacing: -0.015em;
}
.bc-footer {
  border-top: 1px solid var(--border-subtle);
  padding-top: 0.625rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.bc-btn {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--neutral-500);
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  transition: color .15s ease;
}
.bc:hover .bc-btn { color: var(--brand-600); }
.bc-num {
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--neutral-300);
  letter-spacing: 0.05em;
}
      `}</style>
    </>
  );
}
