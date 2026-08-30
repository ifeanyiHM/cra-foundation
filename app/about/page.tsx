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
import BoardImage from "@/components/shared/BoardImage";

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
            className="about-story-gap grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]"
            style={{ alignItems: "center" }}
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
                    className="about-story-text"
                    style={{ lineHeight: 1.75, color: "var(--neutral-500)" }}
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
                  className="about-stat-pad"
                  style={{
                    background: bg,
                    borderRadius: "var(--radius-xl)",
                    border: border || "none",
                  }}
                >
                  <div
                    className="about-stat-val"
                    style={{
                      fontWeight: 800,
                      color,
                      lineHeight: 1,
                      letterSpacing: "-.04em",
                    }}
                  >
                    {val}
                  </div>
                  <div
                    className="about-stat-label"
                    style={{
                      color:
                        bg === "var(--neutral-50)"
                          ? "var(--neutral-500)"
                          : bg === "var(--neutral-950)"
                            ? "rgba(255,255,255,.5)"
                            : `${color}99`,
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
        className="about-motto-pad"
        style={{
          background: "var(--neutral-50)",
          borderTop: "1px solid var(--border-subtle)",
          borderBottom: "1px solid var(--border-subtle)",
          textAlign: "center",
        }}
      >
        <div className="container-max">
          <p
            className="about-motto-label"
            style={{
              fontWeight: 600,
              letterSpacing: ".08em",
              textTransform: "uppercase",
              color: "var(--neutral-400)",
            }}
          >
            Our Motto
          </p>
          <h1 className="motto-h1" style={{ color: "var(--neutral-950)" }}>
            &quot;To Nurture a Dream&quot;
          </h1>
          <p
            className="about-motto-sub"
            style={{ color: "var(--neutral-500)", lineHeight: 1.75 }}
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
            className="about-mv-gap"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
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
                className="about-mv-pad"
                style={{
                  background: dark ? "var(--neutral-950)" : "var(--neutral-50)",
                  border: `1px solid ${dark ? "rgba(255,255,255,.06)" : "var(--border-subtle)"}`,
                  borderRadius: "var(--radius-2xl)",
                }}
              >
                <p
                  className="about-mv-eyebrow"
                  style={{
                    fontWeight: 700,
                    letterSpacing: ".09em",
                    textTransform: "uppercase",
                    color: "var(--brand-600)",
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
                  className="about-mv-body"
                  style={{
                    color: dark ? "rgba(255,255,255,.5)" : "var(--neutral-500)",
                    lineHeight: 1.75,
                  }}
                >
                  {body}
                </p>
              </div>
            ))}
          </div>

          {/* Objectives */}
          <p className="section-label">Objectives</p>
          <h2 className="about-obj-header">Aims & Objectives</h2>
          <div className="about-obj-grid">
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
              <div key={i} className="card flex flex-col about-obj-pad">
                <div
                  className="about-obj-num"
                  style={{
                    borderRadius: "var(--radius-sm)",
                    background: "var(--brand-50)",
                    border: "1px solid var(--brand-100)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 800,
                    color: "var(--brand-600)",
                  }}
                >
                  {i + 1}
                </div>
                <p
                  className="about-obj-text"
                  style={{
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
        className="about-areas-pad-outer"
        style={{
          background: "var(--neutral-50)",
          borderTop: "1px solid var(--border-subtle)",
        }}
      >
        <div className="container-max">
          <p className="section-label">Coverage</p>
          <h2 className="about-areas-header">Areas We Operate</h2>
          <div className="about-areas-grid">
            {lgas.map((lga) => (
              <div
                key={lga.name}
                className="card flex flex-col about-areas-card"
              >
                <RiMapPin2Line
                  className="about-areas-icon"
                  style={{ color: "var(--brand-600)" }}
                />
                <h4 className="about-areas-name">{lga.name}</h4>
                <p
                  className="about-areas-desc"
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

      {/* Board */}
      <section
        id="board"
        className="section-padding"
        style={{ background: "var(--white)" }}
      >
        <div className="container-max">
          {/* Header */}
          <div className="about-board-header">
            <p className="section-label">Leadership</p>
            <h2 style={{ marginBottom: ".75rem" }}>Board of Trustees</h2>
            <p
              className="about-board-sub"
              style={{ color: "var(--neutral-500)", lineHeight: 1.7 }}
            >
              Our board is made up of experienced leaders committed to guiding
              the mission of empowering vulnerable children through education,
              care, and opportunity.
            </p>
          </div>

          {/* Grid */}
          <div className="about-board-grid">
            {boardMembers.map((m, i) => (
              <Link
                key={m.id}
                href={`/board/${slugify(m.name)}`}
                className="block"
              >
                <div
                  className="group card card-hover p-6 rounded-2xl overflow-hidden"
                  style={{ position: "relative" }}
                >
                  <div
                    className="about-board-img"
                    style={{
                      borderRadius: "18px",
                      overflow: "hidden",
                      position: "relative",
                      width: "100%",
                    }}
                  >
                    {/* <Image
                      src={`/images/board/${m.name}.webp`}
                      alt={m.name}
                      className="board-image mx-auto! object-cover object-top transition-transform duration-500 group-hover:scale-110"
                      width={208}
                      height={221}
                    /> */}
                    <BoardImage
                      name={m.name}
                      width={208}
                      height={221}
                      className="board-image mx-auto! object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="bc-body">
                    <p className="bc-role">{m.role}</p>
                    <p className="bc-name">{m.name}</p>
                    <div className="bc-footer">
                      <span className="bc-btn">
                        View profile{" "}
                        <RiArrowRightLine
                          style={{ width: ".8rem", height: ".8rem" }}
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
        className="about-cta-pad"
        style={{
          background: "var(--neutral-50)",
          borderTop: "1px solid var(--border-subtle)",
          textAlign: "center",
        }}
      >
        <div className="container-max">
          <RiShieldCheckLine
            className="about-cta-icon"
            style={{ color: "var(--brand-600)" }}
          />
          <h2 style={{ marginBottom: ".875rem" }}>
            Join Us in Nurturing Dreams
          </h2>
          <p
            className="about-cta-sub"
            style={{ color: "var(--neutral-500)", lineHeight: 1.7 }}
          >
            Your support — in any form — changes a child&apos;s life forever.
          </p>
          <div
            className="about-cta-btns"
            style={{
              display: "flex",
              flexWrap: "wrap",
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

      <style>{`
        /* existing bc-* rules stay here */

        /* === RESPONSIVE SCALE > 1280px === */

        /* Story section */
        .about-story-gap { gap: 5rem; }
        .about-story-text { font-size: .9375rem; }
        .about-stat-val { font-size: 2.5rem; }
        .about-stat-label { font-size: .845rem; margin-top: .4rem; }
        .about-stat-pad { padding: 2rem 1.5rem; }

        /* Motto */
        .about-motto-pad { padding: 4rem 0; }
        .about-motto-label { font-size: .845rem; margin-bottom: .75rem; }
        .motto-h1 { font-size: clamp(2rem, 6vw, 4rem); }
        .about-motto-sub { font-size: 1rem; margin: 1rem auto 0; max-width: 38rem; }

        /* Mission/Vision */
        .about-mv-gap { margin-bottom: 4rem; gap: 1.5rem; }
        .about-mv-eyebrow { font-size: .74rem; margin-bottom: 1rem; }
        .about-mv-body { font-size: .9375rem; }
        .about-mv-pad { padding: 2.5rem; }

        /* Objectives */
        .about-obj-header { margin-bottom: 2rem; }
        .about-obj-grid {display: grid; grid-template-columns: repeat(auto-fill,minmax(240px,1fr)); gap: 1rem;}
        .about-obj-pad { padding: 1.375rem; }
        .about-obj-num { width: 1.625rem; height: 1.625rem; font-size: .74rem; margin-bottom: .875rem; }
        .about-obj-text { font-size: .875rem; }

        /* Areas */
        .about-areas-pad-outer { padding: 4rem 0; }
        .about-areas-header { margin-bottom: 2rem; }
        .about-areas-grid { display: grid; grid-template-columns: repeat(auto-fill,minmax(200px,1fr)); gap: .875rem; }
        .about-areas-card { padding: 1.5rem; }
        .about-areas-icon { width: 1.25rem; height: 1.25rem; margin-bottom: .75rem; }
        .about-areas-name { font-size: .9375rem; margin-bottom: .375rem; }
        .about-areas-desc { font-size: .845rem; }

        /* Board */
        .about-board-header { max-width: 42rem; margin-bottom: 2.5rem; }
        .about-board-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 1.25rem; }
        .about-board-sub { font-size: .95rem; }
        .about-board-img { height: 220px; margin-bottom: 1rem; }
        .bc-body { padding: .875rem 1rem 1rem; }
        .bc-role { font-size: .68rem; margin-bottom: .3rem; }
        .bc-name { font-size: .9375rem; margin-bottom: .875rem; }
        .bc-btn { font-size: .75rem; }
        .bc-num { font-size: .7rem; }

        /* CTA */
        .about-cta-pad { padding: 4rem 0; }
        .about-cta-icon { width: 2.5rem; height: 2.5rem; margin: 0 auto 1.25rem; }
        .about-cta-sub { font-size: .9375rem; max-width: 30rem; margin: 0 auto 2rem; }
        .about-cta-btns { gap: .75rem; }

        @media (min-width: 1440px) {
          .about-story-gap { gap: 5.5rem; }
          .about-story-text { font-size: .975rem; }
          .about-stat-val { font-size: 2.7rem; }
          .about-stat-label { font-size: .875rem; margin-top: .45rem; }
          .about-stat-pad { padding: 2.125rem 1.625rem; }

          .about-motto-pad { padding: 4.5rem 0; }
          .about-motto-label { font-size: .875rem; margin-bottom: .8rem; }
          .motto-h1 { font-size: 4.25rem; }
          .about-motto-sub { font-size: 1.05rem; max-width: 40rem; }

          .about-mv-gap { margin-bottom: 4.25rem; gap: 1.625rem; }
          .about-mv-eyebrow { font-size: .78rem; margin-bottom: 1.075rem; }
          .about-mv-body { font-size: .975rem; }
          .about-mv-pad { padding: 2.625rem; }

          .about-obj-header { margin-bottom: 2.125rem; }
          .about-obj-grid {grid-template-columns: repeat(4, 1fr); }
          .about-obj-pad { padding: 1.5rem; }
          .about-obj-num { width: 1.725rem; height: 1.725rem; font-size: .76rem; margin-bottom: .925rem; }
          .about-obj-text { font-size: .9rem; }

          .about-areas-pad-outer { padding: 4.5rem 0; }
          .about-areas-header { margin-bottom: 2.125rem; }
          .about-areas-grid { display: grid; grid-template-columns: repeat(5, 1fr); }
          .about-areas-card { padding: 1.625rem; }
          .about-areas-icon { width: 1.3rem; height: 1.3rem; margin-bottom: .8rem; }
          .about-areas-name { font-size: .975rem; margin-bottom: .4rem; }
          .about-areas-desc { font-size: .875rem; }

          .about-board-header { max-width: 43rem; margin-bottom: 2.75rem; }
          .about-board-grid { display: grid; grid-template-columns: repeat(4, 1fr); }
          .about-board-sub { font-size: .975rem; }
          .about-board-img { height: 235px; margin-bottom: 1.075rem; }
          .board-image{width: 218px;}
          .bc-body { padding: .925rem 1.075rem 1.075rem; }
          .bc-role { font-size: .7rem; margin-bottom: .325rem; }
          .bc-name { font-size: .975rem; margin-bottom: .925rem; }
          .bc-btn { font-size: .775rem; }
          .bc-num { font-size: .72rem; }

          .about-cta-pad { padding: 4.5rem 0; }
          .about-cta-icon { width: 2.625rem; height: 2.625rem; margin: 0 auto 1.325rem; }
          .about-cta-sub { font-size: .995rem; max-width: 32rem; margin: 0 auto 2.125rem; }
          .about-cta-btns { gap: .8rem; }
        }

        @media (min-width: 1536px) {
          .about-story-gap { gap: 6.5rem; }
          .about-story-text { font-size: 1.075rem; }
          .about-stat-val { font-size: 3.1rem; }
          .about-stat-label { font-size: 1rem; margin-top: .55rem; }
          .about-stat-pad { padding: 2.375rem 1.875rem; }

          .about-motto-pad { padding: 5.25rem 0; }
          .about-motto-label { font-size: 1rem; margin-bottom: .9rem; }
          .motto-h1 { font-size: 4.5rem; }
          .about-motto-sub { font-size: 1.15rem; max-width: 44rem; margin: 1.25rem auto 0; }

          .about-mv-gap { margin-bottom: 4.75rem; gap: 1.875rem; }
          .about-mv-eyebrow { font-size: .86rem; margin-bottom: 1.2rem; }
          .about-mv-body { font-size: 1.05rem; }
          .about-mv-pad { padding: 3rem; }

          .about-obj-header { margin-bottom: 2.375rem; }
          .about-obj-pad { padding: 1.75rem; }
          .about-obj-num { width: 1.925rem; height: 1.925rem; font-size: .84rem; margin-bottom: 1.05rem; }
          .about-obj-text { font-size: 1rem; }

          .about-areas-pad-outer { padding: 5.25rem 0; }
          .about-areas-header { margin-bottom: 2.375rem; }
          .about-areas-card { padding: 1.875rem; }
          .about-areas-icon { width: 1.475rem; height: 1.475rem; margin-bottom: .925rem; }
          .about-areas-name { font-size: 1.075rem; margin-bottom: .475rem; }
          .about-areas-desc { font-size: .975rem; }

          .about-board-header { max-width: 47rem; margin-bottom: 3.25rem; }
          .about-board-sub { font-size: 1.075rem; }
          .about-board-img { height: 265px; margin-bottom: 1.2rem; }
          .board-image{width: 238px;}
          .bc-body { padding: 1.05rem 1.2rem 1.2rem; }
          .bc-role { font-size: .78rem; margin-bottom: .375rem; }
          .bc-name { font-size: 1.075rem; margin-bottom: 1.05rem; }
          .bc-btn { font-size: .875rem; }
          .bc-num { font-size: .8rem; }

          .about-cta-pad { padding: 5.25rem 0; }
          .about-cta-icon { width: 3rem; height: 3rem; margin: 0 auto 1.5rem; }
          .about-cta-sub { font-size: 1.075rem; max-width: 36rem; margin: 0 auto 2.375rem; }
          .about-cta-btns { gap: .925rem; }
        }

        @media (min-width: 1680px) {
          .about-story-gap { gap: 7.5rem; }
          .about-story-text { font-size: 1.175rem; }
          .about-stat-val { font-size: 3.5rem; }
          .about-stat-label { font-size: 1.1rem; margin-top: .625rem; }
          .about-stat-pad { padding: 2.625rem 2.125rem; }

          .about-motto-pad { padding: 6rem 0; }
          .about-motto-label { font-size: 1.1rem; margin-bottom: 1rem; }
          .motto-h1 { font-size: 5.15rem; }
          .about-motto-sub { font-size: 1.25rem; max-width: 48rem; margin: 1.375rem auto 0; }

          .about-mv-gap { margin-bottom: 5.25rem; gap: 2rem; }
          .about-mv-eyebrow { font-size: .94rem; margin-bottom: 1.325rem; }
          .about-mv-body { font-size: 1.155rem; }
          .about-mv-pad { padding: 3.375rem; }

          .about-obj-header { margin-bottom: 2.625rem; }
          .about-obj-pad { padding: 2rem; }
          .about-obj-num { width: 2.125rem; height: 2.125rem; font-size: .92rem; margin-bottom: 1.175rem; }
          .about-obj-text { font-size: 1.1rem; }

          .about-areas-pad-outer { padding: 6rem 0; }
          .about-areas-header { margin-bottom: 2.625rem; }
          .about-areas-card { padding: 2.125rem; }
          .about-areas-icon { width: 1.625rem; height: 1.625rem; margin-bottom: 1.025rem; }
          .about-areas-name { font-size: 1.175rem; margin-bottom: .525rem; }
          .about-areas-desc { font-size: 1.075rem; }

          .about-board-header { max-width: 51rem; margin-bottom: 3.625rem; }
          .about-board-sub { font-size: 1.175rem; }
          .about-board-img { height: 295px; margin-bottom: 1.325rem; }
          .board-image{width: 258px;}
          .bc-body { padding: 1.175rem 1.35rem 1.35rem; }
          .bc-role { font-size: .86rem; margin-bottom: .425rem; }
          .bc-name { font-size: 1.175rem; margin-bottom: 1.175rem; }
          .bc-btn { font-size: .95rem; }
          .bc-num { font-size: .875rem; }

          .about-cta-pad { padding: 6rem 0; }
          .about-cta-icon { width: 3.375rem; height: 3.375rem; margin: 0 auto 1.675rem; }
          .about-cta-sub { font-size: 1.175rem; max-width: 40rem; margin: 0 auto 2.625rem; }
          .about-cta-btns { gap: 1rem; }
        }

        @media (min-width: 1920px) {
          .about-story-gap { gap: 9rem; }
          .about-story-text { font-size: 1.35rem; }
          .about-stat-val { font-size: 4.25rem; }
          .about-stat-label { font-size: 1.3rem; margin-top: .75rem; }
          .about-stat-pad { padding: 3rem 2.5rem; }

          .about-motto-pad { padding: 7.5rem 0; }
          .about-motto-label { font-size: 1.3rem; margin-bottom: 1.25rem; }
          .motto-h1 { font-size: 5.5rem; }
          .about-motto-sub { font-size: 1.5rem; max-width: 56rem; margin: 1.625rem auto 0; }

          .about-mv-gap { margin-bottom: 6.25rem; gap: 2.25rem; }
          .about-mv-eyebrow { font-size: 1.1rem; margin-bottom: 1.5rem; }
          .about-mv-body { font-size: 1.3rem; }
          .about-mv-pad { padding: 4rem; }

          .about-obj-header { margin-bottom: 3rem; }
          .about-obj-pad { padding: 2.375rem; }
          .about-obj-num { width: 2.5rem; height: 2.5rem; font-size: 1.075rem; margin-bottom: 1.375rem; }
          .about-obj-text { font-size: 1.2rem; }

          .about-areas-pad-outer { padding: 7.5rem 0; }
          .about-areas-header { margin-bottom: 3rem; }
          .about-areas-card { padding: 2.5rem; }
          .about-areas-icon { width: 1.875rem; height: 1.875rem; margin-bottom: 1.2rem; }
          .about-areas-name { font-size: 1.35rem; margin-bottom: .625rem; }
          .about-areas-desc { font-size: 1.225rem; }

          .about-board-header { max-width: 60rem; margin-bottom: 4.25rem; }
          .about-board-sub { font-size: 1.35rem; }
          .about-board-img { height: 345px; margin-bottom: 1.5rem; }
          .board-image{width: 288px;}
          .bc-body { padding: 1.375rem 1.625rem 1.625rem; }
          .bc-role { font-size: 1rem; margin-bottom: .5rem; }
          .bc-name { font-size: 1.35rem; margin-bottom: 1.375rem; }
          .bc-btn { font-size: 1.1rem; }
          .bc-num { font-size: 1rem; }

          .about-cta-pad { padding: 7.5rem 0; }
          .about-cta-icon { width: 4rem; height: 4rem; margin: 0 auto 2rem; }
          .about-cta-sub { font-size: 1.35rem; max-width: 48rem; margin: 0 auto 3rem; }
          .about-cta-btns { gap: 1.25rem; }
        }
      `}</style>
    </>
  );
}
