import Image from "next/image";
import Link from "next/link";
import { news } from "@/data";
import { RiArrowRightLine, RiCalendarLine } from "react-icons/ri";

const catStyle: Record<string, { bg: string; color: string }> = {
  Events: { bg: "var(--brand-50)", color: "var(--brand-600)" },
  News: { bg: "var(--accent-blue-50)", color: "var(--accent-blue-600)" },
  Impact: { bg: "var(--accent-green-50)", color: "var(--accent-green-600)" },
  Health: { bg: "var(--accent-teal-50)", color: "var(--accent-teal-600)" },
  Milestone: {
    bg: "var(--accent-violet-50)",
    color: "var(--accent-violet-600)",
  },
  Programs: { bg: "var(--accent-amber-50)", color: "var(--accent-amber)" },
};

function Cat({ label }: { label: string }) {
  const s = catStyle[label] || {
    bg: "var(--neutral-100)",
    color: "var(--neutral-600)",
  };
  return (
    <span
      style={{
        display: "inline-block",
        padding: "0.2rem 0.6rem",
        borderRadius: "999px",
        fontSize: "0.72rem",
        fontWeight: 700,
        letterSpacing: "0.04em",
        background: s.bg,
        color: s.color,
      }}
    >
      {label}
    </span>
  );
}

export default function NewsSection() {
  const [featured, second, third] = news;

  return (
    <section
      className="section-padding"
      style={{
        background: "var(--neutral-50)",
        borderTop: "1px solid var(--border-subtle)",
      }}
    >
      <div className="container-max">
        {/* Header */}
        <div
          className="ns-header"
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <div>
            <p className="section-label">Latest Updates</p>
            <h2 style={{ margin: 0 }}>News & Events</h2>
          </div>
          <Link href="/news" className="btn btn-secondary btn-sm">
            All Articles{" "}
            <RiArrowRightLine style={{ width: "0.85rem", height: "0.85rem" }} />
          </Link>
        </div>

        {/* 3-column layout: big featured left, two stacked right */}
        <div className="ns-grid">
          {/* ── Featured (left) ───────────────────────────── */}
          <Link
            href={`/news/${featured.id}`}
            className="ns-featured card-hover"
            style={{ textDecoration: "none" }}
          >
            <div className="ns-featured-img">
              <Image
                src={featured.images?.[0] || ""}
                alt={featured.title}
                fill
                sizes="(max-width: 768px) 100vw, 55vw"
                style={{ objectFit: "cover" }}
                priority
              />
              <div className="ns-featured-scrim" />
            </div>
            <div className="ns-featured-body">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: ".75rem",
                }}
              >
                <Cat label={featured.category} />
                <span
                  className="ns-featured-date"
                  style={{
                    color: "rgba(255,255,255,.38)",
                    display: "flex",
                    alignItems: "center",
                    gap: ".3rem",
                  }}
                >
                  <RiCalendarLine
                    style={{ width: ".75rem", height: ".75rem" }}
                  />
                  {featured.date}
                </span>
              </div>
              <h3
                className="ns-featured-title"
                style={{
                  color: "#fff",
                  lineHeight: 1.25,
                  letterSpacing: "-.02em",
                }}
              >
                {featured.title}
              </h3>
              <p
                className="ns-featured-excerpt line-clamp-3"
                style={{ color: "rgba(255,255,255,.5)", lineHeight: 1.7 }}
              >
                {featured.excerpt}
              </p>
              <span
                className="ns-featured-cta"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: ".35rem",
                  fontWeight: 600,
                  color: "#F87171",
                }}
              >
                Read article{" "}
                <RiArrowRightLine style={{ width: ".8rem", height: ".8rem" }} />
              </span>
            </div>
          </Link>

          {/* ── Two stacked cards (right) ──────────────────── */}
          <div className="ns-stack">
            {[second, third].map((article) => (
              <Link
                key={article.id}
                href={`/news/${article.id}`}
                className="ns-card card card-hover"
                style={{ textDecoration: "none" }}
              >
                <div className="ns-card-img-wrap ns-card-img">
                  <Image
                    src={article.images?.[0] || ""}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 22vw"
                    style={{
                      objectFit: "cover",
                      transition: "transform 0.55s ease",
                    }}
                    className="ns-card-thumb"
                  />
                </div>
                <div className="ns-card-body">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: ".625rem",
                    }}
                  >
                    <Cat label={article.category} />
                    <span
                      className="ns-card-date"
                      style={{
                        color: "var(--neutral-400)",
                        display: "flex",
                        alignItems: "center",
                        gap: ".25rem",
                      }}
                    >
                      <RiCalendarLine
                        style={{ width: ".72rem", height: ".72rem" }}
                      />
                      {article.date}
                    </span>
                  </div>
                  <h4
                    className="ns-card-title line-clamp-2"
                    style={{
                      lineHeight: 1.4,
                      paddingBottom: ".3rem",
                      letterSpacing: "-.015em",
                    }}
                  >
                    {article.title}
                  </h4>
                  <p
                    className="ns-card-excerpt line-clamp-2"
                    style={{ lineHeight: 1.65, color: "var(--neutral-500)" }}
                  >
                    {article.excerpt}
                  </p>
                  <span
                    className="ns-card-cta"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: ".25rem",
                      fontWeight: 600,
                      color: "var(--brand-600)",
                    }}
                  >
                    Read more{" "}
                    <RiArrowRightLine
                      style={{ width: ".75rem", height: ".75rem" }}
                    />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .ns-grid {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 1rem;
          align-items: stretch;
        }

        /* ── Featured card ── */
        .ns-featured {
          position: relative;
          border-radius: var(--radius-2xl);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          background: var(--neutral-950);
          min-height: 420px;
        }

        .ns-featured-img {
          position: relative;
          width: 100%;
          flex: 1;
          min-height: 240px;
          overflow: hidden;
        }

        .ns-featured-img img {
          transition: transform 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .ns-featured:hover .ns-featured-img img {
          transform: scale(1.05);
        }

        .ns-featured-scrim {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 30%, rgba(11,14,19,0.75) 100%);
          z-index: 1;
        }

        .ns-featured-body {
          position: relative;
          z-index: 2;
          padding: 1.5rem 1.75rem 1.875rem;
          background: var(--neutral-950);
          border-top: 1px solid rgba(255,255,255,0.05);
        }

        /* ── Stacked pair ── */
        .ns-stack {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .ns-card {
          display: flex;
          flex-direction: row;
          overflow: hidden;
          border-radius: var(--radius-xl);
          flex: 1;
        }

        .ns-card-img {
          position: relative;
          flex: 0 0 130px;
          overflow: hidden;
          background: var(--neutral-200);
        }

        .ns-card:hover .ns-card-thumb {
          transform: scale(1.06) !important;
        }

        .ns-card-body {
          flex: 1;
          padding: 1.125rem 1.25rem;
          display: flex;
          flex-direction: column;
          min-width: 0;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .ns-grid {
            grid-template-columns: 1fr;
          }
          .ns-featured {
            min-height: 360px;
          }
          .ns-stack {
            flex-direction: row;
          }
          .ns-card {
            flex-direction: column;
          }
          .ns-card-img {
            flex: none;
            height: 150px;
            width: 100%;
          }
        }

        @media (max-width: 580px) {
          .ns-stack {
            flex-direction: column;
          }
          .ns-card {
            flex-direction: row;
          }
          .ns-card-img {
            flex: 0 0 110px;
            height: auto;
          }
        }

        /* === RESPONSIVE SCALE > 1280px === */
        .ns-header { margin-bottom: 2.5rem; gap: 1rem; }
        .ns-grid { gap: 1rem; }
        .ns-stack { gap: 1rem; }
        .ns-featured-body { padding: 1.5rem 1.75rem 1.875rem; }
        .ns-featured-title { font-size: clamp(1.15rem, 2vw, 1.5rem); margin-bottom: .625rem; }
        .ns-featured-excerpt { font-size: .875rem; margin-bottom: 1.25rem; }
        .ns-featured-date { font-size: .775rem; }
        .ns-featured-cta { font-size: .8125rem; }
        .ns-card-img-wrap { flex: 0 0 130px; }
        .ns-card-body { padding: 1.125rem 1.25rem; }
        .ns-card-title { font-size: .9375rem; }
        .ns-card-excerpt { font-size: .8125rem; }
        .ns-card-date { font-size: .72rem; }
        .ns-card-cta { font-size: .775rem; margin-top: .875rem; }

        @media (min-width: 1440px) {
          .ns-grid { grid-template-columns: 1fr 400px; gap: 1.125rem; }
          .ns-stack { gap: 1.125rem; }
          .ns-featured-body { padding: 1.625rem 1.875rem 2rem; }
          .ns-featured-title { font-size: clamp(1.2rem, 2vw, 1.575rem); margin-bottom: .675rem; }
          .ns-featured-excerpt { font-size: .9rem; margin-bottom: 1.325rem; }
          .ns-featured-date { font-size: .8rem; }
          .ns-featured-cta { font-size: .8375rem; }
          .ns-card-img-wrap { flex: 0 0 140px; }
          .ns-card-body { padding: 1.2rem 1.325rem; }
          .ns-card-title { font-size: .975rem; }
          .ns-card-excerpt { font-size: .8375rem; }
          .ns-card-date { font-size: .74rem; }
          .ns-card-cta { font-size: .8rem; margin-top: .925rem; }
        }

        @media (min-width: 1536px) {
          .ns-grid { grid-template-columns: 1fr 440px; gap: 1.25rem; }
          .ns-stack { gap: 1.25rem; }
          .ns-featured {min-height: 560px;}
          .ns-featured-body { padding: 1.75rem 2rem 2.125rem; }
          .ns-featured-title { font-size: clamp(1.25rem, 2vw, 1.75rem); margin-bottom: .8rem; }
          .ns-featured-excerpt { font-size: .975rem; margin-bottom: 1.475rem; }
          .ns-featured-date { font-size: .875rem; }
          .ns-featured-cta { font-size: .8925rem; }
          .ns-card-img-wrap { flex: 0 0 150px; }
          .ns-card-body { padding: 1.275rem 1.4rem; }
          .ns-card-title { font-size: 1.1rem; }
          .ns-card-excerpt { font-size: .9625rem; }
          .ns-card-date { font-size: .76rem; }
          .ns-card-cta { font-size: .825rem; margin-top: .975rem; }
        }

        @media (min-width: 1680px) {
          .ns-grid { grid-template-columns: 1fr 480px; gap: 1.375rem; }
          .ns-stack { gap: 1.375rem; }
          .ns-featured {min-height: 570px;}
          .ns-featured-body { padding: 1.875rem 2.125rem 2.25rem; }
          .ns-featured-title { font-size: clamp(1.3rem, 2vw, 1.85rem); margin-bottom: .85rem; }
          .ns-featured-excerpt { font-size: 1.1rem; margin-bottom: 1.6rem; }
          .ns-featured-date { font-size: .95rem; }
          .ns-featured-cta { font-size: 1rem; }
          .ns-card-img-wrap { flex: 0 0 160px; }
          .ns-card-body { padding: 1.35rem 1.5rem; }
          .ns-card-title { font-size: 1.15rem; }
          .ns-card-excerpt { font-size: 1rem; }
          .ns-card-date { font-size: .88rem; }
          .ns-card-cta { font-size: .95rem; margin-top: 1rem; }
        }

        @media (min-width: 1920px) {
          .ns-grid { grid-template-columns: 1fr 560px; gap: 1.625rem; }
          .ns-stack { gap: 1.625rem; }
          .ns-featured {min-height: 670px;}
          .ns-featured-body { padding: 2.125rem 2.5rem 2.625rem; }
          .ns-featured-title { font-size: clamp(1.5rem, 2vw, 2.2rem); margin-bottom: 1.275rem; }
          .ns-featured-excerpt { font-size: 1.23rem; margin-bottom: 1.95rem; }
          .ns-featured-date { font-size: 1.15rem; }
          .ns-featured-cta { font-size: 1.2rem; }
          .ns-card-img-wrap { flex: 0 0 185px; }
          .ns-card-body { padding: 1.5rem 1.75rem; }
          .ns-card-title { font-size: 1.275rem; }
          .ns-card-excerpt { font-size: 1.2rem; }
          .ns-card-date { font-size: 1.075rem; }
          .ns-card-cta { font-size: 1.15rem; margin-top: 1.125rem; }
        }
      `}</style>
    </section>
  );
}
