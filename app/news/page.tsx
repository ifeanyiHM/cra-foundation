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
            style={{
              display: "block",
              background: "var(--neutral-950)",
              borderRadius: "var(--radius-2xl)",
              marginBottom: "1.5rem",
              textDecoration: "none",
              overflow: "hidden",
            }}
            className="news-page-featured card-hover"
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {/* Image side */}
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

              {/* Text side */}
              <div
                style={{
                  flex: "1 1 300px",
                  padding: "clamp(2rem, 4vw, 3rem)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  minWidth: 0,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "0.75rem",
                    marginBottom: "1.25rem",
                  }}
                >
                  <CatBadge label={featured.category} />
                  <span
                    style={{
                      fontSize: "0.8rem",
                      color: "rgba(255,255,255,0.35)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.35rem",
                    }}
                  >
                    <RiCalendarLine
                      style={{ width: "0.8rem", height: "0.8rem" }}
                    />
                    {featured.date}
                  </span>
                </div>
                <h2
                  style={{
                    color: "#fff",
                    maxWidth: "44rem",
                    marginBottom: "0.875rem",
                    fontSize: "clamp(1.4rem, 3vw, 2rem)",
                  }}
                >
                  {featured.title}
                </h2>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.75,
                    maxWidth: "40rem",
                    marginBottom: "1.5rem",
                  }}
                  className="line-clamp-3"
                >
                  {featured.excerpt}
                </p>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.375rem",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "#F87171",
                  }}
                >
                  Read article{" "}
                  <RiArrowRightLine
                    style={{ width: "0.875rem", height: "0.875rem" }}
                  />
                </span>
              </div>
            </div>
          </Link>

          {/* Article grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "1rem",
            }}
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
                {/* Card thumbnail */}
                <div className="news-page-thumb">
                  <Image
                    src={article.images?.[0] || ""}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{
                      objectFit: "cover",
                      transition: "transform 0.5s ease",
                    }}
                    className="news-page-thumb-img"
                  />
                </div>

                {/* Card body */}
                <div style={{ padding: "1.25rem 1.5rem 1.5rem" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "0.875rem",
                    }}
                  >
                    <CatBadge label={article.category} />
                    <span
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--neutral-400)",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.3rem",
                      }}
                    >
                      <RiCalendarLine
                        style={{ width: "0.75rem", height: "0.75rem" }}
                      />
                      {article.date}
                    </span>
                  </div>
                  <h4
                    style={{
                      fontSize: "0.9375rem",
                      marginBottom: "0.625rem",
                      lineHeight: 1.4,
                    }}
                    className="line-clamp-2"
                  >
                    {article.title}
                  </h4>
                  <p
                    style={{
                      fontSize: "0.845rem",
                      color: "var(--neutral-500)",
                      lineHeight: 1.65,
                    }}
                    className="line-clamp-3"
                  >
                    {article.excerpt}
                  </p>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.3rem",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      color: "var(--brand-600)",
                      marginTop: "1rem",
                    }}
                  >
                    Read more{" "}
                    <RiArrowRightLine
                      style={{ width: "0.8rem", height: "0.8rem" }}
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
      `}</style>
    </>
  );
}

// import type { Metadata } from 'next';
// import PageHeader from '@/components/shared/PageHeader';
// import { news } from '@/data';
// import Link from 'next/link';
// import { RiArrowRightLine, RiCalendarLine } from 'react-icons/ri';

// export const metadata: Metadata = { title: 'News & Events' };

// const catStyle: Record<string,{bg:string;color:string}> = {
//   Events:    { bg:'var(--brand-50)',          color:'var(--brand-600)' },
//   News:      { bg:'var(--accent-blue-50)',    color:'var(--accent-blue-600)' },
//   Impact:    { bg:'var(--accent-green-50)',   color:'var(--accent-green-600)' },
//   Health:    { bg:'var(--accent-teal-50)',    color:'var(--accent-teal-600)' },
//   Milestone: { bg:'var(--accent-violet-50)', color:'var(--accent-violet-600)' },
//   Programs:  { bg:'var(--accent-amber-50)',   color:'var(--accent-amber)' },
// };

// function CatBadge({ label }: { label: string }) {
//   const s = catStyle[label] || { bg:'var(--neutral-100)', color:'var(--neutral-600)' };
//   return <span style={{ padding:'0.2rem 0.6rem', borderRadius:'999px', fontSize:'0.72rem', fontWeight:700, background:s.bg, color:s.color }}>{label}</span>;
// }

// export default function NewsPage() {
//   const [featured, ...rest] = news;

//   return (
//     <>
//       <PageHeader badge="Stay Updated" title="News &" highlight="Events"
//         description="The latest stories, announcements, and impact reports from CRA Foundation." />

//       <section className="section-padding" style={{ background: 'var(--white)' }}>
//         <div className="container-max">
//           {/* Featured */}
//           <Link href={`/news/${featured.id}`} style={{ display:'block', background:'var(--neutral-950)', borderRadius:'var(--radius-2xl)', padding:'clamp(2rem,4vw,3rem)', marginBottom:'1.5rem', textDecoration:'none' }}>
//             <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:'0.75rem', marginBottom:'1.25rem' }}>
//               <CatBadge label={featured.category} />
//               <span style={{ fontSize:'0.8rem', color:'rgba(255,255,255,0.35)', display:'flex', alignItems:'center', gap:'0.35rem' }}>
//                 <RiCalendarLine style={{ width:'0.8rem', height:'0.8rem' }} />{featured.date}
//               </span>
//             </div>
//             <h2 style={{ color:'#fff', maxWidth:'44rem', marginBottom:'0.875rem', fontSize:'clamp(1.4rem,3vw,2rem)' }}>{featured.title}</h2>
//             <p style={{ fontSize:'0.9375rem', color:'rgba(255,255,255,0.45)', lineHeight:1.75, maxWidth:'40rem', marginBottom:'1.5rem' }} className="line-clamp-3">{featured.excerpt}</p>
//             <span style={{ display:'inline-flex', alignItems:'center', gap:'0.375rem', fontSize:'0.875rem', fontWeight:600, color:'#F87171' }}>
//               Read article <RiArrowRightLine style={{ width:'0.875rem', height:'0.875rem' }} />
//             </span>
//           </Link>

//           {/* Grid */}
//           <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))', gap:'1rem' }}>
//             {rest.map(article => (
//               <Link key={article.id} href={`/news/${article.id}`} className="card card-hover" style={{ display:'block', padding:'1.5rem', textDecoration:'none' }}>
//                 <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'0.875rem' }}>
//                   <CatBadge label={article.category} />
//                   <span style={{ fontSize:'0.75rem', color:'var(--neutral-400)', display:'flex', alignItems:'center', gap:'0.3rem' }}>
//                     <RiCalendarLine style={{ width:'0.75rem', height:'0.75rem' }} />{article.date}
//                   </span>
//                 </div>
//                 <h4 style={{ fontSize:'0.9375rem', marginBottom:'0.625rem', lineHeight:1.4 }} className="line-clamp-2">{article.title}</h4>
//                 <p style={{ fontSize:'0.845rem', color:'var(--neutral-500)', lineHeight:1.65 }} className="line-clamp-3">{article.excerpt}</p>
//                 <span style={{ display:'inline-flex', alignItems:'center', gap:'0.3rem', fontSize:'0.8rem', fontWeight:600, color:'var(--brand-600)', marginTop:'1rem' }}>
//                   Read more <RiArrowRightLine style={{ width:'0.8rem', height:'0.8rem' }} />
//                 </span>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
