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
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "1rem",
            marginBottom: "2.5rem",
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
                  marginBottom: "0.75rem",
                }}
              >
                <Cat label={featured.category} />
                <span
                  style={{
                    fontSize: "0.775rem",
                    color: "rgba(255,255,255,0.38)",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.3rem",
                  }}
                >
                  <RiCalendarLine
                    style={{ width: "0.75rem", height: "0.75rem" }}
                  />
                  {featured.date}
                </span>
              </div>
              <h3
                style={{
                  color: "#fff",
                  fontSize: "clamp(1.15rem, 2vw, 1.5rem)",
                  lineHeight: 1.25,
                  marginBottom: "0.625rem",
                  letterSpacing: "-0.02em",
                }}
              >
                {featured.title}
              </h3>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.7,
                  marginBottom: "1.25rem",
                }}
                className="line-clamp-3"
              >
                {featured.excerpt}
              </p>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  color: "#F87171",
                }}
              >
                Read article{" "}
                <RiArrowRightLine
                  style={{ width: "0.8rem", height: "0.8rem" }}
                />
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
                <div className="ns-card-img">
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
                      marginBottom: "0.625rem",
                    }}
                  >
                    <Cat label={article.category} />
                    <span
                      style={{
                        fontSize: "0.72rem",
                        color: "var(--neutral-400)",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.25rem",
                      }}
                    >
                      <RiCalendarLine
                        style={{ width: "0.72rem", height: "0.72rem" }}
                      />
                      {article.date}
                    </span>
                  </div>
                  <h4
                    style={{
                      fontSize: "0.9375rem",
                      lineHeight: 1.4,
                      marginBottom: "0.4rem",
                      letterSpacing: "-0.015em",
                    }}
                    className="line-clamp-2"
                  >
                    {article.title}
                  </h4>
                  <p
                    style={{
                      fontSize: "0.8125rem",
                      lineHeight: 1.65,
                      color: "var(--neutral-500)",
                    }}
                    className="line-clamp-2"
                  >
                    {article.excerpt}
                  </p>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.25rem",
                      fontSize: "0.775rem",
                      fontWeight: 600,
                      color: "var(--brand-600)",
                      marginTop: "0.875rem",
                    }}
                  >
                    Read more{" "}
                    <RiArrowRightLine
                      style={{ width: "0.75rem", height: "0.75rem" }}
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
      `}</style>
    </section>
  );
}

// import Link from "next/link";
// import { news } from "@/data";
// import { RiArrowRightLine, RiCalendarLine } from "react-icons/ri";

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

// function Cat({ label }: { label: string }) {
//   const s = catStyle[label] || {
//     bg: "var(--neutral-100)",
//     color: "var(--neutral-600)",
//   };
//   return (
//     <span
//       style={{
//         display: "inline-block",
//         padding: "0.2rem 0.6rem",
//         borderRadius: "999px",
//         fontSize: "0.72rem",
//         fontWeight: 700,
//         letterSpacing: "0.04em",
//         background: s.bg,
//         color: s.color,
//       }}
//     >
//       {label}
//     </span>
//   );
// }

// export default function NewsSection() {
//   const [featured, ...rest] = news;

//   return (
//     <section
//       className="section-padding"
//       style={{
//         background: "var(--neutral-50)",
//         borderTop: "1px solid var(--border-subtle)",
//       }}
//     >
//       <div className="container-max">
//         <div
//           style={{
//             display: "flex",
//             flexWrap: "wrap",
//             alignItems: "flex-end",
//             justifyContent: "space-between",
//             gap: "1rem",
//             marginBottom: "2.5rem",
//           }}
//         >
//           <div>
//             <p className="section-label">Latest Updates</p>
//             <h2 style={{ margin: 0 }}>News & Events</h2>
//           </div>
//           <Link href="/news" className="btn btn-secondary btn-sm">
//             All Articles{" "}
//             <RiArrowRightLine style={{ width: "0.85rem", height: "0.85rem" }} />
//           </Link>
//         </div>

//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
//             gap: "1rem",
//           }}
//         >
//           {/* Featured */}
//           <div className="featured-article">
//             <Link
//               href={`/news/${featured.id}`}
//               className="card card-hover"
//               style={{
//                 display: "block",
//                 height: "100%",
//                 padding: "2rem",
//                 background: "var(--neutral-950)",
//                 border: "1px solid rgba(255,255,255,0.06)",
//               }}
//             >
//               <div
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "space-between",
//                   marginBottom: "1.5rem",
//                 }}
//               >
//                 <Cat label={featured.category} />
//                 <span
//                   style={{
//                     fontSize: "0.8rem",
//                     color: "rgba(255,255,255,0.35)",
//                     display: "flex",
//                     alignItems: "center",
//                     gap: "0.35rem",
//                   }}
//                 >
//                   <RiCalendarLine
//                     style={{ width: "0.8rem", height: "0.8rem" }}
//                   />{" "}
//                   {featured.date}
//                 </span>
//               </div>
//               <h3
//                 style={{
//                   color: "#fff",
//                   fontSize: "clamp(1.15rem, 2.5vw, 1.5rem)",
//                   marginBottom: "0.875rem",
//                   lineHeight: 1.3,
//                 }}
//               >
//                 {featured.title}
//               </h3>
//               <p
//                 style={{
//                   fontSize: "0.9rem",
//                   color: "rgba(255,255,255,0.45)",
//                   lineHeight: 1.7,
//                   marginBottom: "1.5rem",
//                 }}
//                 className="line-clamp-3"
//               >
//                 {featured.excerpt}
//               </p>
//               <span
//                 style={{
//                   display: "inline-flex",
//                   alignItems: "center",
//                   gap: "0.35rem",
//                   fontSize: "0.875rem",
//                   fontWeight: 600,
//                   color: "#F87171",
//                 }}
//               >
//                 Read article{" "}
//                 <RiArrowRightLine
//                   style={{ width: "0.875rem", height: "0.875rem" }}
//                 />
//               </span>
//             </Link>
//           </div>

//           {/* Side articles */}
//           {rest.slice(0, 4).map((article) => (
//             <Link
//               key={article.id}
//               href={`/news/${article.id}`}
//               className="card card-hover"
//               style={{ display: "block", padding: "1.5rem" }}
//             >
//               <div
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "space-between",
//                   marginBottom: "0.875rem",
//                 }}
//               >
//                 <Cat label={article.category} />
//                 <span
//                   style={{
//                     fontSize: "0.75rem",
//                     color: "var(--neutral-400)",
//                     display: "flex",
//                     alignItems: "center",
//                     gap: "0.3rem",
//                   }}
//                 >
//                   <RiCalendarLine
//                     style={{ width: "0.75rem", height: "0.75rem" }}
//                   />{" "}
//                   {article.date}
//                 </span>
//               </div>
//               <h4
//                 style={{
//                   fontSize: "0.9375rem",
//                   lineHeight: 1.4,
//                   marginBottom: "0.625rem",
//                 }}
//                 className="line-clamp-2"
//               >
//                 {article.title}
//               </h4>
//               <p
//                 style={{
//                   fontSize: "0.845rem",
//                   lineHeight: 1.65,
//                   color: "var(--neutral-500)",
//                 }}
//                 className="line-clamp-2"
//               >
//                 {article.excerpt}
//               </p>
//             </Link>
//           ))}
//         </div>
//       </div>

//       <style>
//         {`
//           .featured-article {
//             grid-column: span 2;
//           }

//           @media (max-width: 767px) {
//             .featured-article {
//               grid-column: span 1 !important;
//             }
//           }
//         `}
//       </style>
//     </section>
//   );
// }
