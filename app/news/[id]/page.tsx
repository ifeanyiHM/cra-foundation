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
      <div style={{ background: "var(--neutral-950)", padding: "4rem 0 3rem" }}>
        <div className="container-max" style={{ maxWidth: "52rem" }}>
          <Link
            href="/news"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              marginBottom: "1.5rem",
              fontSize: "0.845rem",
              fontWeight: 600,
              color: "rgba(255,255,255,0.35)",
              textDecoration: "none",
              transition: "color 0.15s ease",
            }}
          >
            <RiArrowLeftLine
              style={{ width: "0.875rem", height: "0.875rem" }}
            />
            All Articles
          </Link>

          <span
            style={{
              display: "inline-block",
              padding: "0.2rem 0.6rem",
              borderRadius: "999px",
              fontSize: "0.72rem",
              fontWeight: 700,
              background: s.bg,
              color: s.color,
              marginBottom: "1.25rem",
            }}
          >
            {article.category}
          </span>

          <h1 style={{ color: "#fff", marginBottom: "1.25rem" }}>
            {article.title}
          </h1>

          <div
            style={{
              display: "flex",
              gap: "1.25rem",
              color: "rgba(255,255,255,0.35)",
              fontSize: "0.845rem",
              flexWrap: "wrap",
            }}
          >
            <span
              style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}
            >
              <RiCalendarLine
                style={{ width: "0.875rem", height: "0.875rem" }}
              />
              {article.date}
            </span>
            {article.author && (
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.375rem",
                }}
              >
                <RiUserLine style={{ width: "0.875rem", height: "0.875rem" }} />
                {article.author}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* ── Article body ──────────────────────────────────────── */}
      <div
        className="container-max"
        style={{ maxWidth: "52rem", padding: "3.5rem 1.25rem" }}
      >
        {/* Carousel */}
        <ImageCarousel images={article.images} title={article.title} />

        {/* Lead excerpt */}
        <p
          style={{
            fontSize: "1.125rem",
            fontWeight: 500,
            color: "var(--neutral-700)",
            lineHeight: 1.8,
            marginBottom: "2rem",
            borderLeft: "3px solid var(--brand-600)",
            paddingLeft: "1.25rem",
          }}
        >
          {article.excerpt}
        </p>

        {/* Body paragraphs */}
        <div
          style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
        >
          {[
            "The Children's Right Advocate Foundation continues its unwavering commitment to supporting underprivileged children across Lagos State. This initiative reflects the core values upon which the foundation was built — a deep, holistic care for children who society has left behind.",
            "Our programs operate daily to ensure that every child enrolled receives not just academic support, but also nutritional, emotional, and health-related care. We believe that a hungry child cannot learn, and an unwell child cannot thrive — so we address every dimension of a child's well-being.",
            "Through the dedication of our board, staff, volunteers, and donors, we are able to maintain all our active programs including after-school lessons, midday meals, school supply procurement, health check-ups, and our learning resource center.",
            "We remain deeply grateful to all who support this mission — through donations, sponsorships, volunteering, or simply spreading the word. Each contribution, no matter the size, directly changes a life. To get involved, please visit our programs page or contact us directly.",
          ].map((p, i) => (
            <p
              key={i}
              style={{
                fontSize: "0.9375rem",
                lineHeight: 1.8,
                color: "var(--neutral-600)",
              }}
            >
              {p}
            </p>
          ))}
        </div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background: "var(--border-subtle)",
            margin: "3rem 0",
          }}
        />

        {/* Related articles */}
        <h3 style={{ marginBottom: "1.5rem" }}>More Stories</h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "1rem",
          }}
        >
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
                {/* Related thumbnail */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "120px",
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
                      transition: "transform 0.5s ease",
                    }}
                    className="news-related-img"
                  />
                </div>

                <div style={{ padding: "1rem 1.25rem 1.25rem" }}>
                  <span
                    style={{
                      display: "inline-block",
                      padding: "0.2rem 0.5rem",
                      borderRadius: "999px",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      background: rs.bg,
                      color: rs.color,
                      marginBottom: "0.625rem",
                    }}
                  >
                    {rel.category}
                  </span>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      color: "var(--neutral-900)",
                      lineHeight: 1.4,
                      marginBottom: "0.5rem",
                    }}
                    className="line-clamp-2"
                  >
                    {rel.title}
                  </p>
                  <p
                    style={{
                      fontSize: "0.78rem",
                      color: "var(--neutral-400)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.3rem",
                    }}
                  >
                    <RiCalendarLine
                      style={{ width: "0.75rem", height: "0.75rem" }}
                    />
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
        `}</style>
      </div>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <div
        style={{
          background: "var(--neutral-950)",
          padding: "4rem 0",
          textAlign: "center",
        }}
      >
        <div className="container-max">
          <h2 style={{ color: "#fff", marginBottom: "0.875rem" }}>
            Be Part of These Stories
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.45)",
              maxWidth: "28rem",
              margin: "0 auto 2rem",
              lineHeight: 1.7,
            }}
          >
            Your support creates the stories we tell. Donate or volunteer today.
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
            <Link href="/volunteer" className="btn btn-outline-white btn-lg">
              Volunteer
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// import type { Metadata } from "next";
// import { news } from "@/data";
// import { notFound } from "next/navigation";
// import Link from "next/link";
// import { RiCalendarLine, RiUserLine, RiArrowLeftLine } from "react-icons/ri";

// interface Props {
//   params: Promise<{ id: string }>;
// }

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const { id } = await params;
//   const article = news.find((n) => n.id === id);
//   return { title: article?.title ?? "Article Not Found" };
// }

// const catStyle: Record<string, { bg: string; color: string }> = {
//   Events: { bg: "var(--brand-50)", color: "var(--brand-600)" },
//   News: { bg: "var(--accent-blue-50)", color: "var(--accent-blue-600)" },
//   Impact: { bg: "var(--accent-green-50)", color: "var(--accent-green-600)" },
//   Health: { bg: "var(--accent-teal-50)", color: "var(--accent-teal-600)" },
//   Milestone: {
//     bg: "var(--accent-violet-50)",
//     color: "var(--accent-violet-600)",
//   },
//   Programs: { bg: "var(--accent-amber-50)", color: "var(--accent-amber)" },
// };

// export default async function ArticlePage({ params }: Props) {
//   const { id } = await params;
//   const article = news.find((n) => n.id === id);
//   if (!article) notFound();
//   const related = news.filter((n) => n.id !== id).slice(0, 3);

//   return (
//     <div style={{ paddingTop: "4rem" }}>
//       {/* Header */}
//       <div style={{ background: "var(--neutral-950)", padding: "4rem 0 3rem" }}>
//         <div className="container-max" style={{ maxWidth: "48rem" }}>
//           {/* <Link href="/news" style={{ display:'inline-flex', alignItems:'center', gap:'0.4rem', fontSize:'0.845rem', fontWeight:600, color:'rgba(255,255,255,0.35)', marginBottom:'1.5rem', transition:'color 0.15s' }}
//             onMouseEnter={e => (e.currentTarget as HTMLElement).style.color='rgba(255,255,255,0.7)'}
//             onMouseLeave={e => (e.currentTarget as HTMLElement).style.color='rgba(255,255,255,0.35)'}>
//             <RiArrowLeftLine style={{ width:'0.875rem', height:'0.875rem' }} /> All Articles
//           </Link> */}
//           <Link
//             href="/news"
//             className="inline-flex items-center gap-2 mb-6 text-[0.845rem] font-semibold text-white/35 hover:text-white/70 transition-colors"
//           >
//             <RiArrowLeftLine className="w-[0.875rem] h-[0.875rem]" />
//             All Articles
//           </Link>
//           {(() => {
//             const s = catStyle[article.category] || {
//               bg: "var(--neutral-100)",
//               color: "var(--neutral-600)",
//             };
//             return (
//               <span
//                 style={{
//                   display: "inline-block",
//                   padding: "0.2rem 0.6rem",
//                   borderRadius: "999px",
//                   fontSize: "0.72rem",
//                   fontWeight: 700,
//                   background: s.bg,
//                   color: s.color,
//                   marginBottom: "1.25rem",
//                 }}
//               >
//                 {article.category}
//               </span>
//             );
//           })()}
//           <h1 style={{ color: "#fff", marginBottom: "1.25rem" }}>
//             {article.title}
//           </h1>
//           <div
//             style={{
//               display: "flex",
//               gap: "1.25rem",
//               color: "rgba(255,255,255,0.35)",
//               fontSize: "0.845rem",
//             }}
//           >
//             <span
//               style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}
//             >
//               <RiCalendarLine
//                 style={{ width: "0.875rem", height: "0.875rem" }}
//               />
//               {article.date}
//             </span>
//             {article.author && (
//               <span
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "0.375rem",
//                 }}
//               >
//                 <RiUserLine style={{ width: "0.875rem", height: "0.875rem" }} />
//                 {article.author}
//               </span>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Content */}
//       <div
//         className="container-max"
//         style={{ maxWidth: "48rem", padding: "3.5rem 1.25rem" }}
//       >
//         <p
//           style={{
//             fontSize: "1.125rem",
//             fontWeight: 500,
//             color: "var(--neutral-700)",
//             lineHeight: 1.8,
//             marginBottom: "2rem",
//             borderLeft: "3px solid var(--brand-600)",
//             paddingLeft: "1.25rem",
//           }}
//         >
//           {article.excerpt}
//         </p>
//         <div
//           style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
//         >
//           {[
//             "The Children's Right Advocate Foundation continues its unwavering commitment to supporting underprivileged children across Lagos State. This initiative reflects the core values upon which the foundation was built — a deep, holistic care for children who society has left behind.",
//             "Our programs operate daily to ensure that every child enrolled receives not just academic support, but also nutritional, emotional, and health-related care. We believe that a hungry child cannot learn, and an unwell child cannot thrive — so we address every dimension of a child's well-being.",
//             "Through the dedication of our board, staff, volunteers, and donors, we are able to maintain all our active programs including after-school lessons, midday meals, school supply procurement, health check-ups, and our learning resource center.",
//             "We remain deeply grateful to all who support this mission — through donations, sponsorships, volunteering, or simply spreading the word. Each contribution, no matter the size, directly changes a life. To get involved, please visit our programs page or contact us directly.",
//           ].map((p, i) => (
//             <p
//               key={i}
//               style={{
//                 fontSize: "0.9375rem",
//                 lineHeight: 1.8,
//                 color: "var(--neutral-600)",
//               }}
//             >
//               {p}
//             </p>
//           ))}
//         </div>

//         {/* Divider */}
//         <div
//           style={{
//             height: "1px",
//             background: "var(--border-subtle)",
//             margin: "3rem 0",
//           }}
//         />

//         {/* Related */}
//         <h3 style={{ marginBottom: "1.5rem" }}>More Stories</h3>
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))",
//             gap: "1rem",
//           }}
//         >
//           {related.map((rel) => {
//             const s = catStyle[rel.category] || {
//               bg: "var(--neutral-100)",
//               color: "var(--neutral-600)",
//             };
//             return (
//               <Link
//                 key={rel.id}
//                 href={`/news/${rel.id}`}
//                 className="card card-hover"
//                 style={{
//                   display: "block",
//                   padding: "1.25rem",
//                   textDecoration: "none",
//                 }}
//               >
//                 <span
//                   style={{
//                     display: "inline-block",
//                     padding: "0.2rem 0.5rem",
//                     borderRadius: "999px",
//                     fontSize: "0.7rem",
//                     fontWeight: 700,
//                     background: s.bg,
//                     color: s.color,
//                     marginBottom: "0.75rem",
//                   }}
//                 >
//                   {rel.category}
//                 </span>
//                 <p
//                   style={{
//                     fontSize: "0.875rem",
//                     fontWeight: 500,
//                     color: "var(--neutral-900)",
//                     lineHeight: 1.4,
//                     marginBottom: "0.5rem",
//                   }}
//                   className="line-clamp-2"
//                 >
//                   {rel.title}
//                 </p>
//                 <p
//                   style={{
//                     fontSize: "0.78rem",
//                     color: "var(--neutral-400)",
//                     display: "flex",
//                     alignItems: "center",
//                     gap: "0.3rem",
//                   }}
//                 >
//                   <RiCalendarLine
//                     style={{ width: "0.75rem", height: "0.75rem" }}
//                   />
//                   {rel.date}
//                 </p>
//               </Link>
//             );
//           })}
//         </div>
//       </div>

//       {/* CTA */}
//       <div
//         style={{
//           background: "var(--neutral-950)",
//           padding: "4rem 0",
//           textAlign: "center",
//         }}
//       >
//         <div className="container-max">
//           <h2 style={{ color: "#fff", marginBottom: "0.875rem" }}>
//             Be Part of These Stories
//           </h2>
//           <p
//             style={{
//               color: "rgba(255,255,255,0.45)",
//               maxWidth: "28rem",
//               margin: "0 auto 2rem",
//               lineHeight: 1.7,
//             }}
//           >
//             Your support creates the stories we tell. Donate or volunteer today.
//           </p>
//           <div
//             style={{
//               display: "flex",
//               gap: "0.75rem",
//               justifyContent: "center",
//               flexWrap: "wrap",
//             }}
//           >
//             <Link href="/donate" className="btn btn-white btn-lg">
//               Donate Now
//             </Link>
//             <Link href="/volunteer" className="btn btn-outline-white btn-lg">
//               Volunteer
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
