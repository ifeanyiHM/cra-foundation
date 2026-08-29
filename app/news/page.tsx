import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/shared/PageHeader";
import { news } from "@/data";
import Link from "next/link";
import { RiArrowRightLine, RiCalendarLine } from "react-icons/ri";

export const metadata: Metadata = { title: "News & Events" };

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

function CatBadge({ label }: { label: string }) {
  const s = catStyle[label] || {
    bg: "var(--neutral-100)",
    color: "var(--neutral-600)",
  };
  return (
    <span
      style={{
        padding: "0.2rem 0.6rem",
        borderRadius: "999px",
        fontSize: "0.72rem",
        fontWeight: 700,
        background: s.bg,
        color: s.color,
      }}
    >
      {label}
    </span>
  );
}

export default function NewsPage() {
  const [featured, ...rest] = news;

  return (
    <>
      <PageHeader
        badge="Stay Updated"
        title="News &"
        highlight="Events"
        description="The latest stories, announcements, and impact reports from CRA Foundation."
      />

      <section
        className="section-padding"
        style={{ background: "var(--white)" }}
      >
        <div className="container-max">
          {/* Featured article */}
          <Link
            href={`/news/${featured.id}`}
            className="news-page-featured news-feat-mb card-hover"
            style={{
              display: "block",
              background: "var(--neutral-950)",
              borderRadius: "var(--radius-2xl)",
              textDecoration: "none",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {/* Image */}
              <div className="news-page-featured-img">
                <Image
                  src={featured.images?.[0] || ""}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                  priority
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to right, transparent 60%, var(--neutral-950) 100%)",
                  }}
                />
              </div>

              {/* Text */}
              <div
                className="news-feat-pad"
                style={{
                  flex: "1 1 300px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  minWidth: 0,
                }}
              >
                <div
                  className="news-feat-meta"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                  }}
                >
                  <CatBadge label={featured.category} />
                  <span
                    className="news-feat-date"
                    style={{
                      color: "rgba(255,255,255,.35)",
                      display: "flex",
                      alignItems: "center",
                      gap: ".35rem",
                    }}
                  >
                    <RiCalendarLine
                      style={{ width: ".8rem", height: ".8rem" }}
                    />
                    {featured.date}
                  </span>
                </div>
                <h2 className="news-feat-title" style={{ color: "#fff" }}>
                  {featured.title}
                </h2>
                <p
                  className="news-feat-excerpt line-clamp-3"
                  style={{ color: "rgba(255,255,255,.45)", lineHeight: 1.75 }}
                >
                  {featured.excerpt}
                </p>
                <span
                  className="news-feat-cta"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    fontWeight: 600,
                    color: "#F87171",
                  }}
                >
                  Read article{" "}
                  <RiArrowRightLine
                    style={{ width: ".875rem", height: ".875rem" }}
                  />
                </span>
              </div>
            </div>
          </Link>

          {/* Article grid */}
          <div
            className="news-page-grid"
            // style={{
            //   display: "grid",
            //   gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            //   gap: "1rem",
            //   alignItems: "stretch",
            // }}
          >
            {rest.map((article) => (
              <Link
                key={article.id}
                href={`/news/${article.id}`}
                className="card card-hover"
                style={{
                  display: "block",
                  textDecoration: "none",
                  overflow: "hidden",
                }}
              >
                <div className="news-page-thumb">
                  <Image
                    src={article.images?.[0] || ""}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{
                      objectFit: "cover",
                      transition: "transform .5s ease",
                    }}
                    className="news-page-thumb-img"
                  />
                </div>
                <div className="news-card-body flex flex-col h-60">
                  <div
                    className="news-card-meta"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <CatBadge label={article.category} />
                    <span
                      className="news-card-date"
                      style={{
                        color: "var(--neutral-400)",
                        display: "flex",
                        alignItems: "center",
                        gap: ".3rem",
                      }}
                    >
                      <RiCalendarLine
                        style={{ width: ".75rem", height: ".75rem" }}
                      />
                      {article.date}
                    </span>
                  </div>
                  <h4
                    className="news-card-title line-clamp-2"
                    style={{ lineHeight: 1.4 }}
                  >
                    {article.title}
                  </h4>
                  <p
                    className="news-card-excerpt line-clamp-3"
                    style={{
                      color: "var(--neutral-500)",
                      lineHeight: 1.65,
                      marginTop: "auto",
                    }}
                  >
                    {article.excerpt}
                  </p>
                  <span
                    className="news-card-cta"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: ".3rem",
                      fontWeight: 600,
                      color: "var(--brand-600)",
                    }}
                  >
                    Read more{" "}
                    <RiArrowRightLine
                      style={{ width: ".8rem", height: ".8rem" }}
                    />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .news-page-featured-img {
          position: relative;
          flex: 0 0 420px;
          min-height: 320px;
          overflow: hidden;
        }

        .news-page-featured:hover .news-page-featured-img img {
          transform: scale(1.04);
          transition: transform 0.6s ease;
        }

        .news-page-grid {display: grid; grid-template-columns: repeat(auto-fill,minmax(280px,1fr)); gap: 1rem; align-items: stretch; }

        .news-page-thumb {
          position: relative;
          width: 100%;
          height: 180px;
          overflow: hidden;
          flex-shrink: 0;
        }

        .card:hover .news-page-thumb-img {
          transform: scale(1.05) !important;
        }

        @media (max-width: 767px) {
          .news-page-featured-img {
            flex: none;
            width: 100%;
            height: 220px;
          }
        }

        /* === RESPONSIVE SCALE > 1280px === */

        /* Featured card */
        .news-page-featured-img { flex: 0 0 420px; min-height: 320px; }
        .news-feat-meta { margin-bottom: 1.25rem; gap: .75rem; }
        .news-feat-date { font-size: .8rem; }
        .news-feat-title { font-size: clamp(1.4rem, 3vw, 2rem); max-width: 44rem; margin-bottom: .875rem; }
        .news-feat-excerpt { font-size: .9375rem; max-width: 40rem; margin-bottom: 1.5rem; }
        .news-feat-cta { font-size: .875rem; gap: .375rem; }
        .news-feat-pad { padding: clamp(2rem, 4vw, 3rem); }

        /* Grid cards */
        .news-page-thumb { height: 180px; }
        .news-card-body { padding: 1.25rem 1.5rem 1.5rem; }
        .news-card-meta { margin-bottom: .875rem; }
        .news-card-date { font-size: .75rem; }
        .news-card-title { font-size: .9375rem; margin-bottom: .625rem; }
        .news-card-excerpt { font-size: .845rem; }
        .news-card-cta { font-size: .8rem; margin-top: 1rem; }

        /* Featured mb */
        .news-feat-mb { margin-bottom: 1.5rem; }

        @media (min-width: 1440px) {
          .news-page-featured-img { flex: 0 0 460px; min-height: 340px; }
          .news-feat-meta { margin-bottom: 1.325rem; }
          .news-feat-date { font-size: .825rem; }
          .news-feat-title { font-size: clamp(1.5rem, 3vw, 2.1rem); margin-bottom: .925rem; }
          .news-feat-excerpt { font-size: .975rem; margin-bottom: 1.625rem; }
          .news-feat-cta { font-size: .9rem; }
          .news-feat-mb { margin-bottom: 1.625rem; }

          .news-page-grid {grid-template-columns: repeat(4, 1fr);}
          .news-page-thumb { height: 195px; }
          .news-card-body { padding: 1.375rem 1.625rem 1.625rem; height: auto; }
          .news-card-meta { margin-bottom: .925rem; }
          .news-card-date { font-size: .775rem; }
          .news-card-title { font-size: .975rem; margin-bottom: .675rem; }
          .news-card-excerpt { font-size: .875rem; }
          .news-card-cta { font-size: .825rem; margin-top: 1.075rem; }
        }

        @media (min-width: 1536px) {
          .news-page-featured-img { flex: 0 0 520px; min-height: 380px; }
          .news-feat-meta { margin-bottom: 1.5rem; }
          .news-feat-date { font-size: .925rem; }
          .news-feat-title { font-size: clamp(1.65rem, 3vw, 2.35rem); margin-bottom: 1.075rem; }
          .news-feat-excerpt { font-size: 1.075rem; margin-bottom: 1.875rem; }
          .news-feat-cta { font-size: 1rem; }
          .news-feat-mb { margin-bottom: 1.875rem; }

          .news-page-thumb { height: 215px; }
          .news-card-body { padding: 1.625rem 1.875rem 1.875rem; }
          .news-card-meta { margin-bottom: 1.05rem; }
          .news-card-date { font-size: .875rem; }
          .news-card-title { font-size: 1.075rem; margin-bottom: .75rem; }
          .news-card-excerpt { font-size: .975rem; }
          .news-card-cta { font-size: .925rem; margin-top: 1.2rem; }
        }

        @media (min-width: 1680px) {
          .news-page-featured-img { flex: 0 0 580px; min-height: 420px; }
          .news-feat-meta { margin-bottom: 1.625rem; }
          .news-feat-date { font-size: 1rem; }
          .news-feat-title { font-size: clamp(1.8rem, 3vw, 2.6rem); margin-bottom: 1.175rem; }
          .news-feat-excerpt { font-size: 1.175rem; margin-bottom: 2.125rem; }
          .news-feat-cta { font-size: 1.075rem; }
          .news-feat-mb { margin-bottom: 2rem; }

          .news-page-thumb { height: 240px; }
          .news-card-body { padding: 1.875rem 2.125rem 2.125rem; }
          .news-card-meta { margin-bottom: 1.175rem; }
          .news-card-date { font-size: .95rem; }
          .news-card-title { font-size: 1.175rem; margin-bottom: .825rem; }
          .news-card-excerpt { font-size: 1.075rem; }
          .news-card-cta { font-size: 1rem; margin-top: 1.325rem; }
        }

        @media (min-width: 1920px) {
          .news-page-featured-img { flex: 0 0 680px; min-height: 500px; }
          .news-feat-meta { margin-bottom: 1.875rem; }
          .news-feat-date { font-size: 1.175rem; }
          .news-feat-title { font-size: clamp(2rem, 3vw, 3rem); margin-bottom: 1.375rem; }
          .news-feat-excerpt { font-size: 1.35rem; margin-bottom: 2.5rem; }
          .news-feat-cta { font-size: 1.225rem; }
          .news-feat-mb { margin-bottom: 2.375rem; }

          .news-page-thumb { height: 285px; }
          .news-card-body { padding: 2.25rem 2.5rem 2.5rem; }
          .news-card-meta { margin-bottom: 1.375rem; }
          .news-card-date { font-size: 1.1rem; }
          .news-card-title { font-size: 1.35rem; margin-bottom: .975rem; }
          .news-card-excerpt { font-size: 1.225rem; }
          .news-card-cta { font-size: 1.15rem; margin-top: 1.5rem; }
        }
      `}</style>
    </>
  );
}
