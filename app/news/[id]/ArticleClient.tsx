"use client";

import { use } from "react";
import Image from "next/image";
import { news } from "@/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { useState, useCallback } from "react";
import {
  RiCalendarLine,
  RiUserLine,
  RiArrowLeftLine,
  // RiArrowRightLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
} from "react-icons/ri";

/* ─── Types ─────────────────────────────────────────────────── */
// interface Props {
//   params: { id: string };
// }

/* ─── Category badge styles ──────────────────────────────────── */
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

/* ─── Image Carousel ─────────────────────────────────────────── */
function ImageCarousel({
  images = [],
  title,
}: {
  images?: string[];
  title: string;
}) {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + images.length) % images.length),
    [images.length],
  );

  const next = useCallback(
    () => setCurrent((c) => (c + 1) % images.length),
    [images.length],
  );

  return (
    <div className="carousel-root">
      {/* Main image */}
      <div className="carousel-main">
        {images.map((src, i) => (
          <div
            key={src}
            className="carousel-slide"
            style={{
              opacity: i === current ? 1 : 0,
              zIndex: i === current ? 1 : 0,
            }}
            aria-hidden={i !== current}
          >
            <Image
              src={src}
              alt={`${title} — image ${i + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              style={{ objectFit: "cover" }}
              priority={i === 0}
            />
          </div>
        ))}

        {/* Nav arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="carousel-btn carousel-btn-prev"
              aria-label="Previous image"
            >
              <RiArrowLeftSLine style={{ width: "1.5rem", height: "1.5rem" }} />
            </button>
            <button
              onClick={next}
              className="carousel-btn carousel-btn-next"
              aria-label="Next image"
            >
              <RiArrowRightSLine
                style={{ width: "1.5rem", height: "1.5rem" }}
              />
            </button>
          </>
        )}

        {/* Counter badge */}
        <div className="carousel-counter">
          {current + 1} / {images.length}
        </div>
      </div>

      {/* Dot indicators */}
      {images.length > 1 && (
        <div
          className="carousel-dots"
          role="tablist"
          aria-label="Image navigation"
        >
          {images.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === current}
              aria-label={`Go to image ${i + 1}`}
              onClick={() => setCurrent(i)}
              className={`carousel-dot${i === current ? " carousel-dot-active" : ""}`}
            />
          ))}
        </div>
      )}

      {/* Thumbnail strip */}
      {images.length > 1 && (
        <div className="carousel-thumbs">
          {images.map((src, i) => (
            <button
              key={src}
              onClick={() => setCurrent(i)}
              className={`carousel-thumb${i === current ? " carousel-thumb-active" : ""}`}
              aria-label={`View image ${i + 1}`}
            >
              <Image
                src={src}
                alt={`Thumbnail ${i + 1}`}
                fill
                sizes="100px"
                style={{ objectFit: "cover" }}
              />
            </button>
          ))}
        </div>
      )}

      <style>{`
        .carousel-root {
          margin-bottom: 2.5rem;
          border-radius: var(--radius-2xl);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
        }

        .carousel-main {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          background: var(--neutral-900);
          overflow: hidden;
        }

        @media (max-width: 640px) {
          .carousel-main {
            aspect-ratio: 4 / 3;
          }
        }

        .carousel-slide {
          position: absolute;
          inset: 0;
          transition: opacity 0.5s ease;
        }

        .carousel-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          width: 2.75rem;
          height: 2.75rem;
          border-radius: var(--radius-full);
          border: none;
          background: rgba(11, 14, 19, 0.65);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          backdrop-filter: blur(8px);
          transition: background 0.2s ease, transform 0.15s ease;
        }

        .carousel-btn:hover {
          background: rgba(11, 14, 19, 0.9);
        }

        .carousel-btn:active {
          transform: translateY(-50%) scale(0.93);
        }

        .carousel-btn-prev { left: 1rem; }
        .carousel-btn-next { right: 1rem; }

        .carousel-counter {
          position: absolute;
          bottom: 1rem;
          right: 1rem;
          z-index: 10;
          font-size: 0.75rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.7);
          background: rgba(11, 14, 19, 0.55);
          backdrop-filter: blur(6px);
          padding: 0.25rem 0.625rem;
          border-radius: var(--radius-full);
          letter-spacing: 0.05em;
        }

        .carousel-dots {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.875rem 1rem 0;
          background: var(--neutral-100);
        }

        .carousel-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          border: none;
          background: var(--neutral-300);
          cursor: pointer;
          padding: 0;
          transition: background 0.2s ease, transform 0.2s ease;
          flex-shrink: 0;
        }

        .carousel-dot-active {
          background: var(--brand-600);
          transform: scale(1.3);
        }

        .carousel-thumbs {
          display: flex;
          gap: 0.5rem;
          padding: 0.75rem;
          background: var(--neutral-100);
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
        }

        .carousel-thumbs::-webkit-scrollbar { height: 3px; }
        .carousel-thumbs::-webkit-scrollbar-thumb { background: var(--neutral-300); border-radius: 99px; }

        .carousel-thumb {
          position: relative;
          flex-shrink: 0;
          width: 80px;
          height: 56px;
          border-radius: var(--radius-md);
          overflow: hidden;
          border: 2px solid transparent;
          cursor: pointer;
          padding: 0;
          scroll-snap-align: start;
          transition: border-color 0.2s ease, opacity 0.2s ease;
          opacity: 0.6;
        }

        .carousel-thumb:hover { opacity: 0.85; }

        .carousel-thumb-active {
          border-color: var(--brand-600);
          opacity: 1;
        }

        @media (max-width: 480px) {
          .carousel-thumb { width: 64px; height: 46px; }
        }

        /* === CAROUSEL RESPONSIVE SCALE > 1280px === */
        .carousel-btn { width: 2.75rem; height: 2.75rem; }
        .carousel-btn-svg { width: 1.5rem; height: 1.5rem; }
        .carousel-counter { font-size: .75rem; padding: .25rem .625rem; }
        .carousel-dots { gap: .5rem; padding: .875rem 1rem 0; }
        .carousel-dot { width: 8px; height: 8px; }
        .carousel-thumbs { gap: .5rem; padding: .75rem; }
        .carousel-thumb { width: 80px; height: 56px; }

        @media (min-width: 1440px) {
          .carousel-btn { width: 2.875rem; height: 2.875rem; }
          .carousel-counter { font-size: .775rem; padding: .275rem .675rem; }
          .carousel-thumb { width: 88px; height: 62px; }
        }

        @media (min-width: 1536px) {
          .carousel-btn { width: 3.125rem; height: 3.125rem; }
          .carousel-counter { font-size: .875rem; padding: .3rem .75rem; }
          .carousel-dots { gap: .625rem; padding: 1rem 1.25rem 0; }
          .carousel-dot { width: 9px; height: 9px; }
          .carousel-thumbs { gap: .625rem; padding: .875rem; }
          .carousel-thumb { width: 100px; height: 70px; }
        }

        @media (min-width: 1680px) {
          .carousel-btn { width: 3.375rem; height: 3.375rem; }
          .carousel-counter { font-size: .95rem; padding: .325rem .825rem; }
          .carousel-dots { gap: .7rem; padding: 1.125rem 1.375rem 0; }
          .carousel-dot { width: 10px; height: 10px; }
          .carousel-thumbs { gap: .7rem; padding: 1rem; }
          .carousel-thumb { width: 112px; height: 78px; }
        }

        @media (min-width: 1920px) {
          .carousel-btn { width: 3.875rem; height: 3.875rem; }
          .carousel-counter { font-size: 1.1rem; padding: .375rem .975rem; }
          .carousel-dots { gap: .8rem; padding: 1.375rem 1.625rem 0; }
          .carousel-dot { width: 11px; height: 11px; }
          .carousel-thumbs { gap: .8rem; padding: 1.25rem; }
          .carousel-thumb { width: 130px; height: 90px; }
        }
      `}</style>
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────── */
export default function ArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const article = news.find((n) => n.id === id);
  if (!article) notFound();

  const related = news.filter((n) => n.id !== id).slice(0, 3);

  const s = catStyle[article.category] || {
    bg: "var(--neutral-100)",
    color: "var(--neutral-600)",
  };

  return (
    <div style={{ paddingTop: "4rem" }}>
      {/* ── Page header ───────────────────────────────────────── */}
      <div
        className="art-header-outer"
        style={{ background: "var(--neutral-950)" }}
      >
        <div className="container-max art-header-inner">
          <Link
            href="/news"
            className="art-back"
            style={{
              display: "inline-flex",
              alignItems: "center",
              fontWeight: 600,
              color: "rgba(255,255,255,.35)",
              textDecoration: "none",
              transition: "color .15s ease",
            }}
          >
            <RiArrowLeftLine className="art-back-icon" />
            All Articles
          </Link>

          <span
            className="art-cat-badge"
            style={{
              display: "inline-block",
              borderRadius: "999px",
              fontWeight: 700,
              background: s.bg,
              color: s.color,
            }}
          >
            {article.category}
          </span>

          <h1 className="art-title-mb" style={{ color: "#fff" }}>
            {article.title}
          </h1>

          <div
            className="art-meta"
            style={{
              display: "flex",
              color: "rgba(255,255,255,.35)",
              flexWrap: "wrap",
            }}
          >
            <span
              style={{ display: "flex", alignItems: "center", gap: ".375rem" }}
            >
              <RiCalendarLine className="art-meta-icon" />
              {article.date}
            </span>
            {article.author && (
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: ".375rem",
                }}
              >
                <RiUserLine className="art-meta-icon" />
                {article.author}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* ── Article body ──────────────────────────────────────── */}
      <div className="container-max art-body-outer">
        <ImageCarousel images={article.images} title={article.title} />

        <p
          className="art-excerpt"
          style={{
            fontWeight: 500,
            color: "var(--neutral-700)",
            lineHeight: 1.8,
            borderLeft: "3px solid var(--brand-600)",
          }}
        >
          {article.excerpt}
        </p>

        {/* body paragraph */}
        <div
          className="art-body-gap"
          style={{ display: "flex", flexDirection: "column" }}
        >
          {[
            "The Children's Right Advocate Foundation continues its unwavering commitment to supporting underprivileged children across Lagos State. This initiative reflects the core values upon which the foundation was built — a deep, holistic care for children who society has left behind.",
            "Our programs operate daily to ensure that every child enrolled receives not just academic support, but also nutritional, emotional, and health-related care. We believe that a hungry child cannot learn, and an unwell child cannot thrive — so we address every dimension of a child's well-being.",
            "Through the dedication of our board, staff, volunteers, and donors, we are able to maintain all our active programs including after-school lessons, midday meals, school supply procurement, health check-ups, and our learning resource center.",
            "We remain deeply grateful to all who support this mission — through donations, sponsorships, volunteering, or simply spreading the word. Each contribution, no matter the size, directly changes a life. To get involved, please visit our programs page or contact us directly.",
          ].map((p, i) => (
            <p
              key={i}
              className="art-body-p"
              style={{ lineHeight: 1.8, color: "var(--neutral-600)" }}
            >
              {p}
            </p>
          ))}
        </div>

        {/* Divider */}
        <div
          className="art-divider"
          style={{ height: "1px", background: "var(--border-subtle)" }}
        />

        {/* Related articles */}
        <h3 className="art-related-header">More Stories</h3>
        <div className="art-related-grid">
          {related.map((rel) => {
            const rs = catStyle[rel.category] || {
              bg: "var(--neutral-100)",
              color: "var(--neutral-600)",
            };
            return (
              <Link
                key={rel.id}
                href={`/news/${rel.id}`}
                className="card card-hover"
                style={{
                  display: "block",
                  textDecoration: "none",
                  overflow: "hidden",
                }}
              >
                <div
                  className="art-related-thumb"
                  style={{
                    position: "relative",
                    width: "100%",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={rel.images?.[0] || ""}
                    alt={rel.title}
                    fill
                    sizes="220px"
                    style={{
                      objectFit: "cover",
                      transition: "transform .5s ease",
                    }}
                    className="news-related-img"
                  />
                </div>
                <div className="art-related-body">
                  <span
                    className="art-related-cat"
                    style={{
                      display: "inline-block",
                      borderRadius: "999px",
                      fontWeight: 700,
                      background: rs.bg,
                      color: rs.color,
                    }}
                  >
                    {rel.category}
                  </span>
                  <p
                    className="art-related-title line-clamp-2"
                    style={{
                      fontWeight: 500,
                      color: "var(--neutral-900)",
                      lineHeight: 1.4,
                    }}
                  >
                    {rel.title}
                  </p>
                  <p
                    className="art-related-date"
                    style={{
                      color: "var(--neutral-400)",
                      display: "flex",
                      alignItems: "center",
                      gap: ".3rem",
                    }}
                  >
                    <RiCalendarLine className="art-related-date-icon" />
                    {rel.date}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        <style>{`
          .card:hover .news-related-img {
            transform: scale(1.05) !important;
          }

          /* === PAGE RESPONSIVE SCALE > 1280px === */

          /* Article header */
          .art-header-outer { padding: 4rem 0 3rem; }
          .art-header-inner { max-width: 52rem; }
          .art-back { font-size: .845rem; margin-bottom: 1.5rem; gap: .375rem; }
          .art-back-icon { width: .875rem; height: .875rem; }
          .art-cat-badge { font-size: .72rem; padding: .2rem .6rem; margin-bottom: 1.25rem; }
          .art-title-mb { margin-bottom: 1.25rem; }
          .art-meta { font-size: .845rem; gap: 1.25rem; }
          .art-meta-icon { width: .875rem; height: .875rem; }

          /* Article body */
          .art-body-outer { max-width: 52rem; padding: 3.5rem 1.25rem; }
          .art-carousel-mb { margin-bottom: 2.5rem; }
          .art-excerpt { font-size: 1.125rem; margin-bottom: 2rem; padding-left: 1.25rem; }
          .art-body-gap { gap: 1.25rem; }
          .art-body-p { font-size: .9375rem; }
          .art-divider { margin: 3rem 0; }
          .art-related-header { margin-bottom: 1.5rem; }
          .art-related-grid {display: grid; grid-template-columns: repeat(auto-fill,minmax(200px,1fr)); gap: 1rem;}
          .art-related-thumb { height: 120px; }
          .art-related-body { padding: 1rem 1.25rem 1.25rem; }
          .art-related-cat { font-size: .7rem; padding: .2rem .5rem; margin-bottom: .625rem; }
          .art-related-title { font-size: .875rem; margin-bottom: .5rem; }
          .art-related-date { font-size: .78rem; }
          .art-related-date-icon { width: .75rem; height: .75rem; }

          /* CTA */
          .art-cta-outer { padding: 4rem 0; }
          .art-cta-sub { max-width: 28rem; margin: 0 auto 2rem; }
          .art-cta-btns { gap: .75rem; }

          @media (min-width: 1440px) {
            .art-header-outer { padding: 4.5rem 0 3.25rem; }
            .art-header-inner { max-width: 56rem; }
            .art-back { font-size: .875rem; margin-bottom: 1.625rem; }
            .art-cat-badge { font-size: .74rem; margin-bottom: 1.325rem; }
            .art-meta { font-size: .875rem; gap: 1.375rem; }

            .art-body-outer { max-width: 56rem; padding: 3.75rem 1.25rem; }
            .art-excerpt { font-size: 1.175rem; margin-bottom: 2.125rem; padding-left: 1.375rem; }
            .art-body-gap { gap: 1.375rem; }
            .art-body-p { font-size: .975rem; }
            .art-divider { margin: 3.25rem 0; }
            .art-related-header { margin-bottom: 1.625rem; }
            .art-related-grid {grid-template-columns: repeat(3, 1fr); }
            .art-related-thumb { height: 130px; }
            .art-related-body { padding: 1.075rem 1.325rem 1.325rem; }
            .art-related-cat { font-size: .72rem; margin-bottom: .675rem; }
            .art-related-title { font-size: .9rem; margin-bottom: .525rem; }
            .art-related-date { font-size: .8rem; }

            .art-cta-outer { padding: 4.5rem 0; }
            .art-cta-sub { max-width: 30rem; margin: 0 auto 2.125rem; font-size: .975rem; }
            .art-cta-btns { gap: .8rem; }
          }

          @media (min-width: 1536px) {
            .art-header-outer { padding: 5.25rem 0 3.75rem; }
            .art-header-inner { max-width: 62rem; }
            .art-back { font-size: .975rem; margin-bottom: 1.875rem; }
            .art-cat-badge { font-size: .84rem; margin-bottom: 1.5rem; }
            .art-meta { font-size: .975rem; gap: 1.625rem; }
            .art-meta-icon { width: 1rem; height: 1rem; }

            .art-body-outer { max-width: 62rem; padding: 4.25rem 1.25rem; }
            .art-excerpt { font-size: 1.325rem; margin-bottom: 2.375rem; padding-left: 1.625rem; }
            .art-body-gap { gap: 1.625rem; }
            .art-body-p { font-size: 1.075rem; }
            .art-divider { margin: 3.75rem 0; }
            .art-related-header { margin-bottom: 1.875rem; }
            .art-related-thumb { height: 150px; }
            .art-related-body { padding: 1.2rem 1.5rem 1.5rem; }
            .art-related-cat { font-size: .8rem; margin-bottom: .75rem; }
            .art-related-title { font-size: 1rem; margin-bottom: .575rem; }
            .art-related-date { font-size: .9rem; }
            .art-related-date-icon { width: .875rem; height: .875rem; }

            .art-cta-outer { padding: 5.25rem 0; }
            .art-cta-sub { max-width: 34rem; margin: 0 auto 2.375rem; font-size: 1.075rem; }
            .art-cta-btns { gap: .925rem; }
          }

          @media (min-width: 1680px) {
            .art-header-outer { padding: 6rem 0 4.25rem; }
            .art-header-inner { max-width: 68rem; }
            .art-back { font-size: 1.05rem; margin-bottom: 2.125rem; }
            .art-cat-badge { font-size: .92rem; margin-bottom: 1.625rem; }
            .art-meta { font-size: 1.05rem; gap: 1.875rem; }
            .art-meta-icon { width: 1.1rem; height: 1.1rem; }

            .art-body-outer { max-width: 68rem; padding: 4.75rem 1.25rem; }
            .art-excerpt { font-size: 1.475rem; margin-bottom: 2.625rem; padding-left: 1.875rem; }
            .art-body-gap { gap: 1.875rem; }
            .art-body-p { font-size: 1.175rem; }
            .art-divider { margin: 4.25rem 0; }
            .art-related-header { margin-bottom: 2.125rem; }
            .art-related-thumb { height: 168px; }
            .art-related-body { padding: 1.35rem 1.625rem 1.625rem; }
            .art-related-cat { font-size: .88rem; margin-bottom: .825rem; }
            .art-related-title { font-size: 1.1rem; margin-bottom: .625rem; }
            .art-related-date { font-size: .975rem; }
            .art-related-date-icon { width: .95rem; height: .95rem; }

            .art-cta-outer { padding: 6rem 0; }
            .art-cta-sub { max-width: 38rem; margin: 0 auto 2.625rem; font-size: 1.175rem; }
            .art-cta-btns { gap: 1rem; }
          }

          @media (min-width: 1920px) {
            .art-header-outer { padding: 7.5rem 0 5rem; }
            .art-header-inner { max-width: 80rem; }
            .art-back { font-size: 1.225rem; margin-bottom: 2.5rem; }
            .art-cat-badge { font-size: 1.075rem; margin-bottom: 1.875rem; }
            .art-meta { font-size: 1.225rem; gap: 2.25rem; }
            .art-meta-icon { width: 1.275rem; height: 1.275rem; }

            .art-body-outer { max-width: 80rem; padding: 5.5rem 1.25rem; }
            .art-excerpt { font-size: 1.7rem; margin-bottom: 3rem; padding-left: 2.25rem; }
            .art-body-gap { gap: 2.25rem; }
            .art-body-p { font-size: 1.35rem; }
            .art-divider { margin: 5rem 0; }
            .art-related-header { margin-bottom: 2.5rem; }
            .art-related-thumb { height: 200px; }
            .art-related-body { padding: 1.625rem 1.875rem 1.875rem; }
            .art-related-cat { font-size: 1rem; margin-bottom: .975rem; }
            .art-related-title { font-size: 1.275rem; margin-bottom: .75rem; }
            .art-related-date { font-size: 1.125rem; }
            .art-related-date-icon { width: 1.1rem; height: 1.1rem; }

            .art-cta-outer { padding: 7.5rem 0; }
            .art-cta-sub { max-width: 44rem; margin: 0 auto 3rem; font-size: 1.35rem; }
            .art-cta-btns { gap: 1.25rem; }
          }
        `}</style>
      </div>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <div
        className="art-cta-outer"
        style={{ background: "var(--neutral-950)", textAlign: "center" }}
      >
        <div className="container-max">
          <h2 style={{ color: "#fff", marginBottom: ".875rem" }}>
            Be Part of These Stories
          </h2>
          <p
            className="art-cta-sub"
            style={{ color: "rgba(255,255,255,.45)", lineHeight: 1.7 }}
          >
            Your support creates the stories we tell. Donate or volunteer today.
          </p>
          <div
            className="art-cta-btns"
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link href="/donate" className="btn btn-white btn-lg">
              Donate Now
            </Link>
            <Link href="/volunteer" className="btn btn-outline-white btn-lg">
              Volunteer
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
