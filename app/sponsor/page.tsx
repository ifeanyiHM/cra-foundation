import type { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import { sponsorChildren } from "@/data";
import SponsorForm from "@/components/forms/SponsorForm";
import { RiHeartLine, RiCheckLine } from "react-icons/ri";
import Image from "next/image";

export const metadata: Metadata = { title: "Sponsor a Child" };

const steps = [
  {
    n: "1",
    title: "Choose a Child",
    desc: "Browse profiles of children awaiting sponsorship.",
  },
  {
    n: "2",
    title: "Select Amount",
    desc: "Choose a level that works for your budget.",
  },
  {
    n: "3",
    title: "Submit Application",
    desc: "Complete the secure sponsorship form.",
  },
  {
    n: "4",
    title: "Track Progress",
    desc: "Receive termly updates on your sponsored child.",
  },
];

export default function SponsorPage() {
  return (
    <>
      <PageHeader
        badge="Child Sponsorship"
        title="Sponsor a"
        highlight="Child Today"
        description="Choose a child to sponsor and provide complete support for their education, meals, health, and future — for a full academic year."
      />

      {/* How it works */}
      <section
        className="sp-how-pad"
        style={{
          background: "var(--neutral-50)",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        <div className="container-max">
          <div className="sp-how-header">
            <p className="section-label">How It Works</p>
            <h2>Simple Steps to Change a Life</h2>
          </div>
          <div
            className="sp-how-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
            }}
          >
            {steps.map(({ n, title, desc }) => (
              <div key={n} className="card sp-step-pad">
                <div
                  className="sp-step-num"
                  style={{
                    borderRadius: "var(--radius-md)",
                    background: "var(--neutral-950)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 800,
                    color: "rgba(255,255,255,.7)",
                  }}
                >
                  {n}
                </div>
                <h4 className="sp-step-title">{title}</h4>
                <p
                  className="sp-step-desc"
                  style={{ color: "var(--neutral-400)", lineHeight: 1.65 }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Children grid */}
      <section
        className="section-padding"
        style={{ background: "var(--white)" }}
      >
        <div className="container-max">
          <div className="sp-grid-header">
            <p className="section-label">Available Children</p>
            <h2>Children Awaiting Sponsorship</h2>
            <p
              className="sp-grid-sub"
              style={{ color: "var(--neutral-500)", lineHeight: 1.7 }}
            >
              Each child has a story, a dream, and a future waiting to be
              unlocked with your help.
            </p>
          </div>

          <div className="sp-grid">
            {sponsorChildren.map((child) => {
              const imageSrc = `/images/sac/${child.name}.jpeg`;
              return (
                <div
                  key={child.id}
                  className="card flex flex-col"
                  style={{
                    overflow: "hidden",
                    opacity: child.sponsored ? 0.6 : 1,
                  }}
                >
                  <div
                    className="sp-child-img"
                    style={{
                      background: "var(--neutral-950)",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    {imageSrc ? (
                      <Image
                        src={imageSrc}
                        alt={child.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        style={{ objectFit: "cover", objectPosition: "top" }}
                      />
                    ) : (
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <div
                          style={{
                            width: "4rem",
                            height: "4rem",
                            borderRadius: "50%",
                            background: "rgba(255,255,255,.06)",
                            border: "2px solid rgba(255,255,255,.1)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "1.375rem",
                            fontWeight: 800,
                            color: "rgba(255,255,255,.5)",
                            letterSpacing: "-.02em",
                          }}
                        >
                          {child.name.charAt(0)}
                        </div>
                      </div>
                    )}
                    <div
                      style={{ position: "absolute", zIndex: 1 }}
                      className="sp-child-status"
                    >
                      <span
                        className="sp-child-status"
                        style={{
                          padding: ".2rem .6rem",
                          borderRadius: "999px",
                          fontWeight: 700,
                          background: child.sponsored
                            ? "var(--accent-green-50)"
                            : "var(--brand-50)",
                          color: child.sponsored
                            ? "var(--accent-green-600)"
                            : "var(--brand-600)",
                        }}
                      >
                        {child.sponsored ? "Sponsored" : "Available"}
                      </span>
                    </div>
                  </div>

                  <div
                    className="sp-child-body"
                    style={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: ".375rem",
                      }}
                    >
                      <h4 className="sp-child-name">{child.name}</h4>
                      <span
                        className="sp-child-age"
                        style={{ color: "var(--neutral-400)", fontWeight: 500 }}
                      >
                        Age {child.age}
                      </span>
                    </div>
                    <p
                      className="sp-child-school"
                      style={{ color: "var(--brand-600)", fontWeight: 500 }}
                    >
                      {child.school}
                    </p>
                    {!child.sponsored ? (
                      <a
                        href="#sponsor-form"
                        className="btn btn-primary btn-sm"
                        style={{
                          width: "100%",
                          justifyContent: "center",
                          marginTop: "auto",
                        }}
                      >
                        <RiHeartLine
                          style={{ width: ".875rem", height: ".875rem" }}
                        />
                        Sponsor {child.name.split(" ")[0]}
                      </a>
                    ) : (
                      <div
                        className="sp-child-sponsored"
                        style={{
                          background: "var(--accent-green-50)",
                          borderRadius: "var(--radius-md)",
                          textAlign: "center",
                          fontWeight: 600,
                          color: "var(--accent-green-600)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginTop: "auto",
                        }}
                      >
                        <RiCheckLine className="sp-child-sponsored-icon" />
                        Sponsored
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sponsorship form */}
          <div
            id="sponsor-form"
            style={{
              background: "var(--neutral-50)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "var(--radius-2xl)",
              padding: "clamp(1rem,4vw,3rem)",
            }}
          >
            <div className="sp-form-gap grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)]">
              <div>
                <p className="section-label">Ready to Help?</p>
                <h2 style={{ marginBottom: "1rem" }}>Become a Sponsor</h2>
                <p
                  className="sp-form-intro"
                  style={{ color: "var(--neutral-500)", lineHeight: 1.75 }}
                >
                  Your monthly sponsorship covers a child&apos;s school fees,
                  meals, uniform, books, and health care. A small commitment
                  creates a lifetime of impact.
                </p>
                <div
                  className="sp-tier-gap"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  {[
                    "₦10,000/month — Basic Support",
                    "₦25,000/month — Full Support",
                    "₦50,000/term — Scholarship",
                  ].map((opt) => (
                    <div
                      key={opt}
                      className="sp-tier-text"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        color: "var(--neutral-700)",
                      }}
                    >
                      <div
                        className="sp-tier-check"
                        style={{
                          borderRadius: "50%",
                          background: "var(--accent-green-50)",
                          border: "1px solid #D1FAE5",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <RiCheckLine
                          className="sp-tier-check-svg"
                          style={{ color: "var(--accent-green-600)" }}
                        />
                      </div>
                      {opt}
                    </div>
                  ))}
                </div>
              </div>
              <div className="card bg-transparent! md:bg-white! border-none! md:border! shadow-none! md:shadow! p-0! md:p-8!">
                <SponsorForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* === RESPONSIVE SCALE > 1280px === */

        /* How it works */
        .sp-how-pad { padding: 3.5rem 0; }
        .sp-how-header { margin-bottom: 2rem; }
        .sp-how-grid { gap: 1rem; }
        .sp-step-pad { padding: 1.5rem; }
        .sp-step-num { width: 2rem; height: 2rem; font-size: .78rem; margin-bottom: 1rem; }
        .sp-step-title { font-size: .9375rem; margin-bottom: .375rem; }
        .sp-step-desc { font-size: .845rem; }

        /* Children grid */
        .sp-grid {display: grid; grid-template-columns: repeat(auto-fill,minmax(220px,1fr)); gap: 1rem;}
        .sp-grid-header { margin-bottom: 2rem; }
        .sp-grid-sub { font-size: .9375rem; max-width: 38rem; margin-top: .75rem; }
        .sp-grid { gap: 1rem; margin-bottom: 3.5rem; }
        .sp-child-img { height: 16rem; }
        .sp-child-status { font-size: .72rem; padding: .2rem .6rem; top: .75rem; right: .75rem; }
        .sp-child-body { padding: 1.25rem; }
        .sp-child-name { font-size: .9375rem; }
        .sp-child-age { font-size: .78rem; }
        .sp-child-school { font-size: .78rem; margin-bottom: .625rem; }
        .sp-child-sponsored { font-size: .845rem; padding: .625rem; gap: .375rem; }
        .sp-child-sponsored-icon { width: .875rem; height: .875rem; }

        /* Form section */
        .sp-form-gap { gap: 4rem; align-items: start; }
        .sp-form-intro { font-size: .9375rem; margin-bottom: 1.5rem; }
        .sp-tier-gap { gap: .625rem; }
        .sp-tier-text { font-size: .875rem; gap: .625rem; }
        .sp-tier-check { width: 1.25rem; height: 1.25rem; }
        .sp-tier-check-svg { width: .7rem; height: .7rem; }

        @media (min-width: 1280px) {
          .sp-grid { grid-template-columns: repeat(5, 1fr); }
        }

        @media (min-width: 1440px) {
          .sp-how-pad { padding: 4rem 0; }
          .sp-how-header { margin-bottom: 2.25rem; }
          .sp-how-grid { gap: 1.125rem; }
          .sp-step-pad { padding: 1.625rem; }
          .sp-step-num { width: 2.125rem; height: 2.125rem; font-size: .8rem; margin-bottom: 1.075rem; }
          .sp-step-title { font-size: .975rem; margin-bottom: .4rem; }
          .sp-step-desc { font-size: .875rem; }

          .sp-grid-header { margin-bottom: 2.25rem; }
          .sp-grid-sub { font-size: .975rem; max-width: 40rem; margin-top: .8rem; }
          .sp-grid { gap: 1.125rem; margin-bottom: 3.75rem; }
          .sp-child-img { height: 17rem; }
          .sp-child-status { font-size: .74rem; }
          .sp-child-body { padding: 1.375rem; }
          .sp-child-name { font-size: .975rem; }
          .sp-child-age { font-size: .8rem; }
          .sp-child-school { font-size: .8rem; margin-bottom: .675rem; }
          .sp-child-sponsored { font-size: .875rem; padding: .675rem; }

          .sp-form-gap { gap: 4.25rem; }
          .sp-form-intro { font-size: .975rem; margin-bottom: 1.625rem; }
          .sp-tier-gap { gap: .675rem; }
          .sp-tier-text { font-size: .9rem; }
          .sp-tier-check { width: 1.3rem; height: 1.3rem; }
          .sp-tier-check-svg { width: .72rem; height: .72rem; }
        }

        @media (min-width: 1536px) {
          .sp-how-pad { padding: 4.75rem 0; }
          .sp-how-header { margin-bottom: 2.5rem; }
          .sp-how-grid { gap: 1.25rem; }
          .sp-step-pad { padding: 1.875rem; }
          .sp-step-num { width: 2.375rem; height: 2.375rem; font-size: .9rem; margin-bottom: 1.2rem; }
          .sp-step-title { font-size: 1.075rem; margin-bottom: .45rem; }
          .sp-step-desc { font-size: .975rem; }

          .sp-grid-header { margin-bottom: 2.5rem; }
          .sp-grid-sub { font-size: 1.075rem; max-width: 44rem; margin-top: .9rem; }
          .sp-grid { gap: 1.25rem; margin-bottom: 4.25rem; }
          .sp-child-img { height: 18.5rem; }
          .sp-child-status { font-size: .82rem; padding: .225rem .7rem; }
          .sp-child-body { padding: 1.625rem; }
          .sp-child-name { font-size: 1.075rem; }
          .sp-child-age { font-size: .9rem; }
          .sp-child-school { font-size: .9rem; margin-bottom: .75rem; }
          .sp-child-sponsored { font-size: .975rem; padding: .775rem; }
          .sp-child-sponsored-icon { width: .975rem; height: .975rem; }

          .sp-form-gap { gap: 4.75rem; }
          .sp-form-intro { font-size: 1.075rem; margin-bottom: 1.875rem; }
          .sp-tier-gap { gap: .775rem; }
          .sp-tier-text { font-size: 1rem; gap: .7rem; }
          .sp-tier-check { width: 1.475rem; height: 1.475rem; }
          .sp-tier-check-svg { width: .82rem; height: .82rem; }
        }

        @media (min-width: 1680px) {
          .sp-how-pad { padding: 5.5rem 0; }
          .sp-how-header { margin-bottom: 2.75rem; }
          .sp-how-grid { gap: 1.375rem; }
          .sp-step-pad { padding: 2.125rem; }
          .sp-step-num { width: 2.625rem; height: 2.625rem; font-size: 1rem; margin-bottom: 1.375rem; }
          .sp-step-title { font-size: 1.175rem; margin-bottom: .5rem; }
          .sp-step-desc { font-size: 1.075rem; }

          .sp-grid-header { margin-bottom: 2.75rem; }
          .sp-grid-sub { font-size: 1.175rem; max-width: 48rem; margin-top: 1rem; }
          .sp-grid { gap: 1.375rem; margin-bottom: 4.75rem; }
          .sp-child-img { height: 20rem; }
          .sp-child-status { font-size: .9rem; padding: .25rem .775rem; }
          .sp-child-body { padding: 1.875rem; }
          .sp-child-name { font-size: 1.175rem; }
          .sp-child-age { font-size: .975rem; }
          .sp-child-school { font-size: .975rem; margin-bottom: .825rem; }
          .sp-child-sponsored { font-size: 1.075rem; padding: .875rem; }
          .sp-child-sponsored-icon { width: 1.075rem; height: 1.075rem; }

          .sp-form-gap { gap: 5.25rem; }
          .sp-form-intro { font-size: 1.175rem; margin-bottom: 2.125rem; }
          .sp-tier-gap { gap: .875rem; }
          .sp-tier-text { font-size: 1.1rem; gap: .775rem; }
          .sp-tier-check { width: 1.625rem; height: 1.625rem; }
          .sp-tier-check-svg { width: .9rem; height: .9rem; }
        }

        @media (min-width: 1920px) {
          .sp-how-pad { padding: 6.5rem 0; }
          .sp-how-header { margin-bottom: 3.25rem; }
          .sp-how-grid { gap: 1.625rem; }
          .sp-step-pad { padding: 2.5rem; }
          .sp-step-num { width: 3rem; height: 3rem; font-size: 1.175rem; margin-bottom: 1.625rem; }
          .sp-step-title { font-size: 1.35rem; margin-bottom: .6rem; }
          .sp-step-desc { font-size: 1.225rem; }

          .sp-grid-header { margin-bottom: 3.25rem; }
          .sp-grid-sub { font-size: 1.35rem; max-width: 56rem; margin-top: 1.175rem; }
          .sp-grid { gap: 1.625rem; margin-bottom: 5.5rem; }
          .sp-child-img { height: 23rem; }
          .sp-child-status { font-size: 1.025rem; padding: .3rem .9rem; }
          .sp-child-body { padding: 2.25rem; }
          .sp-child-name { font-size: 1.35rem; }
          .sp-child-age { font-size: 1.125rem; }
          .sp-child-school { font-size: 1.125rem; margin-bottom: .975rem; }
          .sp-child-sponsored { font-size: 1.25rem; padding: 1.025rem; }
          .sp-child-sponsored-icon { width: 1.25rem; height: 1.25rem; }

          .sp-form-gap { gap: 6.25rem; }
          .sp-form-intro { font-size: 1.35rem; margin-bottom: 2.5rem; }
          .sp-tier-gap { gap: 1rem; }
          .sp-tier-text { font-size: 1.275rem; gap: .9rem; }
          .sp-tier-check { width: 1.875rem; height: 1.875rem; }
          .sp-tier-check-svg { width: 1.05rem; height: 1.05rem; }
        }
      `}</style>
    </>
  );
}
