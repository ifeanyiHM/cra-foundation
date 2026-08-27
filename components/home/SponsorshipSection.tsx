import Link from "next/link";
import { sponsorChildren } from "@/data";
import {
  RiHeartLine,
  RiArrowRightLine,
  RiShieldCheckLine,
} from "react-icons/ri";
import Image from "next/image";

export default function SponsorshipSection() {
  const available = sponsorChildren.filter((c) => !c.sponsored);

  return (
    <>
      <style>{`
  .sponsor-header { max-width: 40rem; margin-bottom: 3rem; }
  .sponsor-header-sub { font-size: .9375rem; }
  .sponsor-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 1rem; margin-bottom: 2.5rem; }
  .sponsor-card-img { height: 16rem; }
  .sponsor-card-body { padding: 1.25rem; }
  .sponsor-card-name { font-size: .9375rem; }
  .sponsor-card-age { font-size: .78rem; }
  .sponsor-card-school { font-size: .78rem; margin-bottom: .625rem; }
  .sponsor-strip { padding: 1.5rem 2rem; gap: 1.25rem; }
  .sponsor-strip-icon { width: 2.5rem; height: 2.5rem; }
  .sponsor-strip-icon-svg { width: 1.125rem; height: 1.125rem; }
  .sponsor-strip-title { font-size: .9rem; }
  .sponsor-strip-sub { font-size: .8rem; }

  @media (min-width: 1280px) {
    .sponsor-grid { grid-template-columns: repeat(5, 1fr); }
  }

  @media (min-width: 1440px) {
    .sponsor-header { max-width: 43rem; margin-bottom: 3.25rem; }
    .sponsor-header-sub { font-size: 1rem; }
    .sponsor-grid { gap: 1.125rem; margin-bottom: 2.75rem; }
    .sponsor-card-img { height: 17rem; }
    .sponsor-card-body { padding: 1.375rem; }
    .sponsor-card-name { font-size: .975rem; }
    .sponsor-card-age { font-size: .8rem; }
    .sponsor-card-school { font-size: .8rem; margin-bottom: .675rem; }
    .sponsor-strip { padding: 1.625rem 2.125rem; gap: 1.375rem; }
    .sponsor-strip-icon { width: 2.625rem; height: 2.625rem; }
    .sponsor-strip-icon-svg { width: 1.175rem; height: 1.175rem; }
    .sponsor-strip-title { font-size: .95rem; }
    .sponsor-strip-sub { font-size: .825rem; }
  }

  @media (min-width: 1536px) {
    .sponsor-header { max-width: 46rem; margin-bottom: 3.5rem; }
    .sponsor-header-sub { font-size: 1.05rem; }
    .sponsor-grid { gap: 1.25rem; margin-bottom: 3rem; }
    .sponsor-card-img { height: 18rem; }
    .sponsor-card-body { padding: 1.5rem; }
    .sponsor-card-name { font-size: 1.1rem; }
    .sponsor-card-age { font-size: .925rem; }
    .sponsor-card-school { font-size: .875rem; margin-bottom: .7rem; }
    .sponsor-strip { padding: 1.75rem 2.25rem; gap: 1.5rem; }
    .sponsor-strip-icon { width: 2.75rem; height: 2.75rem; }
    .sponsor-strip-icon-svg { width: 1.275rem; height: 1.275rem; }
    .sponsor-strip-title { font-size: 1.05rem; }
    .sponsor-strip-sub { font-size: .9rem; }
  }

  @media (min-width: 1680px) {
    .sponsor-header { max-width: 50rem; margin-bottom: 3.75rem; }
    .sponsor-header-sub { font-size: 1.15rem; }
    .sponsor-grid { gap: 1.375rem; margin-bottom: 3.25rem; }
    .sponsor-card-img { height: 21rem; }
    .sponsor-card-body { padding: 1.625rem; }
    .sponsor-card-name { font-size: 1.1625rem; }
    .sponsor-card-age { font-size: .975rem; }
    .sponsor-card-school { font-size: .98rem; margin-bottom: .75rem; }
    .sponsor-strip { padding: 1.875rem 2.375rem; gap: 1.625rem; }
    .sponsor-strip-icon { width: 2.9rem; height: 2.9rem; }
    .sponsor-strip-icon-svg { width: 1.5rem; height: 1.5rem; }
    .sponsor-strip-title { font-size: 1.1rem; }
    .sponsor-strip-sub { font-size: .95rem; }
  }

  @media (min-width: 1920px) {
    .sponsor-header { max-width: 58rem; margin-bottom: 4.25rem; }
    .sponsor-header-sub { font-size: 1.35rem; }
    .sponsor-grid { gap: 1.625rem; margin-bottom: 3.75rem; }
    .sponsor-card-img { height: 23rem; }
    .sponsor-card-body { padding: 1.875rem; }
    .sponsor-card-name { font-size: 1.275rem; }
    .sponsor-card-age { font-size: 1rem; }
    .sponsor-card-school { font-size: 1.12rem; margin-bottom: .875rem; }
    .sponsor-strip { padding: 2.125rem 2.75rem; gap: 1.875rem; }
    .sponsor-strip-icon { width: 3.45rem; height: 3.45rem; }
    .sponsor-strip-icon-svg { width: 1.775rem; height: 1.775rem; }
    .sponsor-strip-title { font-size: 1.3rem; }
    .sponsor-strip-sub { font-size: 1.1rem; }
  }
`}</style>
      <section
        className="section-padding"
        style={{
          background: "var(--neutral-50)",
          borderTop: "1px solid var(--border-subtle)",
        }}
      >
        <div className="container-max">
          {/* Header */}
          <div className="sponsor-header">
            <p className="section-label">Child Sponsorship</p>
            <h2 style={{ margin: "0 0 0.875rem" }}>
              Give a Child Their Future
            </h2>
            <p
              className="sponsor-header-sub"
              style={{
                // fontSize: "0.9375rem",
                color: "var(--neutral-500)",
                lineHeight: 1.7,
              }}
            >
              Sponsor a child directly and provide complete support — school
              fees, meals, health care, and guidance — for a full year.
            </p>
          </div>

          {/* Children grid */}
          <div className="sponsor-grid">
            {available.map((child) => {
              const imageSrc = `/images/sac/${child.name}.jpeg`;
              return (
                <div
                  key={child.id}
                  className="card card-hover flex flex-col"
                  style={{ overflow: "hidden" }}
                >
                  <div
                    className="sponsor-card-img"
                    style={{
                      // height: "16rem",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    {/* IMAGE */}
                    {imageSrc ? (
                      <Image
                        src={imageSrc}
                        alt={child.name}
                        fill
                        className="object-cover object-top"
                        // onError={() => !imageSrc}
                      />
                    ) : (
                      /* FALLBACK */
                      <div
                        style={{
                          height: "100%",
                          background:
                            "linear-gradient(135deg, var(--neutral-900) 0%, var(--neutral-800) 100%)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          position: "relative",
                        }}
                      >
                        <div
                          style={{
                            width: "4rem",
                            height: "4rem",
                            borderRadius: "50%",
                            background: "rgba(255,255,255,0.08)",
                            border: "2px solid rgba(255,255,255,0.12)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "1.5rem",
                            fontWeight: 800,
                            color: "rgba(255,255,255,0.6)",
                          }}
                        >
                          {child.name.charAt(0)}
                        </div>

                        <div
                          style={{
                            position: "absolute",
                            top: "0.75rem",
                            right: "0.75rem",
                          }}
                        >
                          <span className="badge badge-red">Needs Sponsor</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* INFO */}
                  <div
                    className="sponsor-card-body"
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
                        marginBottom: "0.5rem",
                      }}
                    >
                      <h4 className="sponsor-card-name">{child.name}</h4>
                      <span
                        className="sponsor-card-age"
                        style={{ color: "var(--neutral-400)", fontWeight: 500 }}
                      >
                        Age {child.age}
                      </span>
                    </div>
                    <p
                      className="sponsor-card-school"
                      style={{ color: "var(--brand-600)", fontWeight: 500 }}
                    >
                      {child.school}
                    </p>
                    <Link
                      href={`/sponsor?child=${child.id}`}
                      className="btn btn-primary btn-sm"
                      style={{
                        width: "100%",
                        justifyContent: "center",
                        marginTop: "auto",
                      }}
                    >
                      <RiHeartLine
                        style={{ width: "0.875rem", height: "0.875rem" }}
                      />
                      Sponsor {child.name.split(" ")[0]}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom strip */}
          <div
            className="sponsor-strip"
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              background: "var(--white)",
              borderRadius: "var(--radius-xl)",
              border: "1px solid var(--border-subtle)",
            }}
          >
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
            >
              <div
                className="sponsor-strip-icon"
                style={{
                  borderRadius: "var(--radius-md)",
                  background: "var(--accent-green-50)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <RiShieldCheckLine
                  className="sponsor-strip-icon-svg"
                  style={{ color: "var(--accent-green-600)" }}
                />
              </div>
              <div>
                <p
                  className="sponsor-strip-title"
                  style={{
                    fontWeight: 600,
                    color: "var(--neutral-900)",
                    marginBottom: ".1rem",
                  }}
                >
                  Transparent & Accountable
                </p>
                <p
                  className="sponsor-strip-sub"
                  style={{ color: "var(--neutral-500)" }}
                >
                  You receive updates on your sponsored child every term
                </p>
              </div>
            </div>
            <Link href="/sponsor" className="btn btn-secondary">
              View All Children{" "}
              <RiArrowRightLine style={{ width: "0.9rem", height: "0.9rem" }} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
