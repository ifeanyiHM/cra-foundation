import { boardMembers } from "@/data";
import { slugify } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RiArrowLeftLine } from "react-icons/ri";

export function generateMetadata({ params }: { params: { id: string } }) {
  const member = boardMembers.find((m) => slugify(m.name) === params.id);
  if (!member) return {};
  return {
    title: `${member.name} | Board Member`,
    description: member.role,
  };
}
// gjhjhj bnnnnnnnnnnnnnnnn
export default async function BoardMemberPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params; // ✅ IMPORTANT FIX

  const member = boardMembers.find((m) => slugify(m.name) === id);

  if (!member) return notFound();

  const related = boardMembers.filter((m) => m.id !== member.id);

  return (
    <>
      <style>{`
        /* ── Page shell ── */
        .bmp-root {
          min-height: 100svh;
          background: var(--white);
        }

        /* ── Hero banner ── */
        .bmp-hero {
          background: var(--neutral-950);
          padding: 6rem 0 0;
          position: relative;
          overflow: hidden;
        }

        /* subtle grid texture */
        .bmp-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            repeating-linear-gradient(90deg, transparent, transparent 79px, rgba(255,255,255,.03) 79px, rgba(255,255,255,.03) 80px),
            repeating-linear-gradient(0deg,  transparent, transparent 79px, rgba(255,255,255,.03) 79px, rgba(255,255,255,.03) 80px);
          pointer-events: none;
        }

        /* red glow top-right */
        .bmp-hero::after {
          content: '';
          position: absolute;
          top: -8rem;
          right: -8rem;
          width: 36rem;
          height: 36rem;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(220,38,38,.14) 0%, transparent 70%);
          pointer-events: none;
        }

        .bmp-hero-inner {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr;
          // gap: 3rem;
          padding-top: 1rem;
          padding-bottom: 0rem;
        }

        @media (min-width: 1024px) {
          .bmp-hero-inner {
            grid-template-columns: 420px 1fr;
            gap: 2rem;
            align-items: center;
            padding-top: 3rem;
            padding-bottom: 3rem;
          }
        }

        /* ── Photo column ── */
        .bmp-photo-col {
          position: relative;
          align-self: end;
        }

        .bmp-photo-frame {
          position: relative;
          width: 100%;
          max-width: 320px;
          height: 340px;
          border-radius: 1.5rem 1.5rem 0 0;
          // overflow: hidden;
          // border: 1px solid rgba(255,255,255,.08);
          // border-bottom: none;
        }

        @media (max-width: 1023px) {
          .bmp-photo-frame {
            max-width: 260px;
            height: 280px;
            margin: 0 auto;
            // border-radius: 1.25rem 1.25rem 0 0;
          }
        }

        /* ── Info column ── */
        .bmp-info-col {
          // padding-bottom: 3rem;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }

        @media (max-width: 1023px) {
          .bmp-info-col {
            padding-bottom: 2rem;
            text-align: center;
            align-items: center;
          }
        }

        .bmp-back {
          align-items: center;
          gap: .4rem;
          font-size: .8125rem;
          font-weight: 600;
          color: rgba(255,255,255,.35);
          text-decoration: none;
          margin-bottom: 2rem;
          letter-spacing: .01em;
          transition: color .15s ease;
        }
        .bmp-back:hover { color: rgba(255,255,255,.75); }

        .bmp-role-tag {
          display: inline-flex;
          align-items: center;
          gap: .375rem;
          font-size: .7rem;
          font-weight: 700;
          letter-spacing: .1em;
          text-transform: uppercase;
          color: var(--brand-600);
          background: rgba(220,38,38,.12);
          border: 1px solid rgba(220,38,38,.25);
          border-radius: var(--radius-full);
          padding: .25rem .75rem;
          margin-bottom: 1.25rem;
        }

        .bmp-name {
          font-size: clamp(2rem, 4vw, 3.25rem);
          font-weight: 800;
          letter-spacing: -.04em;
          line-height: 1.05;
          color: #fff;
          margin: 0 0 1.5rem;
        }

        .bmp-divider {
          width: 3rem;
          height: 2px;
          background: var(--brand-600);
          border-radius: 2px;
          margin-bottom: 1.5rem;
        }

        @media (max-width: 1023px) {
          .bmp-divider { margin: 0 auto 1.5rem; }
        }

        .bmp-bio-short {
          font-size: .9375rem;
          color: rgba(255,255,255,.5);
          line-height: 1.75;
          max-width: 38rem;
          margin: 0;
        }

        /* ── Body ── */
        .bmp-body {
          padding-top: 4rem;
          padding-bottom: 5rem;
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
        }

        @media (min-width: 1024px) {
          .bmp-body {
            grid-template-columns: 1fr 320px;
            gap: 5rem;
            padding-bottom: 6rem;
          }
        }

        /* ── Main content ── */
        .bmp-main {}

        .bmp-section-label {
          font-size: .7rem;
          font-weight: 700;
          letter-spacing: .12em;
          text-transform: uppercase;
          color: var(--brand-600);
          margin-bottom: .875rem;
          display: flex;
          align-items: center;
          gap: .5rem;
        }

        .bmp-section-label::before {
          content: '';
          display: block;
          width: 1.5rem;
          height: 1.5px;
          background: var(--brand-600);
          border-radius: 2px;
        }

        .bmp-bio-full {
          font-size: .9375rem;
          color: var(--neutral-600);
          line-height: 1.85;
          white-space: pre-line;
          margin: 0 0 3rem;
        }

        .bmp-quote {
          border-left: 3px solid var(--brand-600);
          padding: 1.5rem 1.75rem;
          background: var(--neutral-50);
          border-radius: 0 var(--radius-xl) var(--radius-xl) 0;
          margin-bottom: 3rem;
        }

        .bmp-quote p {
          font-size: 1.0625rem;
          font-style: italic;
          color: var(--neutral-700);
          line-height: 1.75;
          margin: 0 0 .625rem;
        }

        .bmp-quote cite {
          font-size: .8rem;
          font-style: normal;
          font-weight: 600;
          color: var(--neutral-400);
        }

        /* ── Sidebar ── */
        .bmp-sidebar {}

        .bmp-sidebar-title {
          font-size: .7rem;
          font-weight: 700;
          letter-spacing: .12em;
          text-transform: uppercase;
          color: var(--neutral-400);
          margin-bottom: 1.25rem;
          padding-bottom: .875rem;
          border-bottom: 1px solid var(--border-subtle);
        }

        /* Show approximately 5 members, then scroll */
        .bmp-related-list {
          max-height: 24rem;
          overflow-y: auto;

          /* Hide scrollbar by default */
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .bmp-related-list::-webkit-scrollbar {
          width: 0;
        }

        /* Show scrollbar when the sidebar is hovered */
        .bmp-sidebar:hover .bmp-related-list {
          scrollbar-width: thin;
        }

        .bmp-sidebar:hover .bmp-related-list::-webkit-scrollbar {
          width: 5px;
        }

        .bmp-sidebar:hover .bmp-related-list::-webkit-scrollbar-track {
          background: transparent;
        }

        .bmp-sidebar:hover .bmp-related-list::-webkit-scrollbar-thumb {
          background: var(--border-subtle);
          border-radius: 999px;
        }

        .bmp-sidebar:hover .bmp-related-list::-webkit-scrollbar-thumb:hover {
          background: var(--neutral-300);
        }

        .bmp-related-card {
          display: flex;
          align-items: center;
          gap: .875rem;
          padding: .875rem;
          border-radius: var(--radius-lg);
          text-decoration: none;
          transition: background .15s ease;
          border: 1px solid transparent;
        }

        .bmp-related-card:hover {
          background: var(--neutral-50);
          border-color: var(--border-subtle);
        }

        .bmp-related-img {
          flex-shrink: 0;
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          overflow: hidden;
          background: var(--neutral-200);
          border: 2px solid var(--border-subtle);
          position: relative;
        }

        .bmp-related-name {
          font-size: .875rem;
          font-weight: 600;
          color: var(--neutral-900);
          margin: 0 0 .2rem;
          line-height: 1.3;
        }

        .bmp-related-role {
          font-size: .75rem;
          color: var(--neutral-400);
          margin: 0;
          line-height: 1.3;
        }

        /* ── CTA strip ── */
        .bmp-cta-strip {
          background: var(--neutral-950);
          padding: 3.5rem 1.25rem;
          position: relative;
          overflow: hidden;
        }

        .bmp-cta-strip::before {
          content: '';
          position: absolute;
          bottom: -6rem;
          left: -6rem;
          width: 28rem;
          height: 28rem;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(220,38,38,.12) 0%, transparent 70%);
          pointer-events: none;
        }

        .bmp-cta-inner {
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.5rem;
          position: relative;
          z-index: 1;
        }

        .bmp-cta-label {
          font-size: .65rem;
          font-weight: 700;
          letter-spacing: .12em;
          text-transform: uppercase;
          color: var(--brand-600);
          margin-bottom: .5rem;
          display: flex;
          align-items: center;
          gap: .4rem;
        }

        .bmp-cta-label::before {
          content: '';
          display: block;
          width: 1.25rem;
          height: 1.5px;
          background: var(--brand-600);
          border-radius: 2px;
        }

        .bmp-cta-title {
          font-size: clamp(1.25rem, 2.5vw, 1.625rem);
          font-weight: 700;
          color: #fff;
          letter-spacing: -.025em;
          margin: 0;
          line-height: 1.2;
        }

        /* === RESPONSIVE SCALE > 1440px === */

        @media (min-width: 1440px) {
          .bmp-hero { padding: 6.75rem 0 0; }
          .bmp-hero-inner { gap: 4rem; padding-top: 1.5rem; }
          .bmp-photo-frame { max-width: 345px; height: 370px; }
          .bmp-back { font-size: .8375rem; margin-bottom: 2.125rem; }
          .bmp-role-tag { font-size: .72rem; padding: .275rem .8rem; margin-bottom: 1.325rem; }
          .bmp-name { font-size: 3.5rem; margin: 0 0 1.625rem; }
          .bmp-divider { width: 3.25rem; margin-bottom: 1.625rem; }
          .bmp-bio-short { font-size: .975rem; max-width: 40rem; }

          .bmp-body { padding-top: 4.5rem; padding-bottom: 5.5rem; gap: 3.5rem; }
          .bmp-section-label { font-size: .72rem; margin-bottom: .925rem; }
          .bmp-bio-full { font-size: .975rem; margin: 0 0 3.25rem; }
          .bmp-quote { padding: 1.625rem 1.875rem; margin-bottom: 3.25rem; }
          .bmp-quote p { font-size: 1.1rem; }
          .bmp-quote cite { font-size: .825rem; }
          .bmp-sidebar-title { font-size: .72rem; margin-bottom: 1.325rem; padding-bottom: .925rem; }
          .bmp-related-card { gap: .925rem; padding: .925rem; }
          .bmp-related-img { width: 3.125rem; height: 3.125rem; }
          .bmp-related-name { font-size: .9rem; }
          .bmp-related-role { font-size: .775rem; }

          .bmp-cta-strip { padding: 4rem 1.25rem; }
          .bmp-cta-label { font-size: .68rem; margin-bottom: .55rem; }
          .bmp-cta-title { font-size: 1.75rem; }
          .bmp-cta-btns { gap: .8rem; }
        }

        @media (min-width: 1536px) {
          .bmp-hero { padding: 7rem 0 0; }
          .bmp-hero-inner { gap: 6rem; padding-top: 2.5rem; }
          .bmp-photo-frame { max-width: 350px; height: 380px; }
          .bmp-back { font-size: .9rem; margin-bottom: 2.375rem; }
          .bmp-role-tag { font-size: .8rem; padding: .325rem .9rem; margin-bottom: 1.5rem; }
          .bmp-name { font-size: 3.65rem; margin: 0 0 1.875rem; }
          .bmp-divider { width: 3.75rem; margin-bottom: 1.875rem; }
          .bmp-bio-short { font-size: 1.075rem; max-width: 44rem; }

          .bmp-body { grid-template-columns: 1fr 380px; padding-top: 5.25rem; padding-bottom: 6.5rem; gap: 5rem; }
          .bmp-section-label { font-size: .8rem; margin-bottom: 1.05rem; }
          .bmp-bio-full { font-size: 1.075rem; margin: 0 0 3.75rem; }
          .bmp-quote { padding: 1.875rem 2.125rem; margin-bottom: 3.75rem; }
          .bmp-quote p { font-size: 1.225rem; }
          .bmp-quote cite { font-size: .925rem; }
          .bmp-sidebar-title { font-size: .8rem; margin-bottom: 1.5rem; padding-bottom: 1.05rem; }
          .bmp-related-list {max-height: 28rem;}
          .bmp-related-card { gap: 1.05rem; padding: 1.05rem; }
          .bmp-related-img { width: 3.5rem; height: 3.5rem; }
          .bmp-related-name { font-size: 1rem; }
          .bmp-related-role { font-size: .875rem; }

          .bmp-cta-strip { padding: 4.75rem 1.25rem; }
          .bmp-cta-label { font-size: .76rem; margin-bottom: .625rem; }
          .bmp-cta-title { font-size: 2rem; }
          .bmp-cta-btns { gap: .925rem; }
        }

        @media (min-width: 1680px) {
          .bmp-hero { padding: 7.5rem 0 0; }
          .bmp-hero-inner { gap: 8rem; padding-top: 3rem; }
          .bmp-photo-frame { max-width: 400px; height: 420px; }
          .bmp-back { font-size: .975rem; margin-bottom: 2.625rem; }
          .bmp-role-tag { font-size: .88rem; padding: .35rem 1rem; margin-bottom: 1.625rem; }
          .bmp-name { font-size: 4rem; margin: 0 0 2.125rem; }
          .bmp-divider { width: 4.25rem; margin-bottom: 2.125rem; }
          .bmp-bio-short { font-size: 1.175rem; max-width: 48rem; }

          .bmp-body { grid-template-columns: 1fr 400px; padding-top: 6rem; padding-bottom: 7.5rem; gap: 6rem; }
          .bmp-section-label { font-size: .88rem; margin-bottom: 1.175rem; }
          .bmp-bio-full { font-size: 1.175rem; margin: 0 0 4.25rem; }
          .bmp-quote { padding: 2.125rem 2.375rem; margin-bottom: 4.25rem; }
          .bmp-quote p { font-size: 1.35rem; }
          .bmp-quote cite { font-size: 1rem; }
          .bmp-sidebar-title { font-size: .88rem; margin-bottom: 1.625rem; padding-bottom: 1.175rem; }
          .bmp-related-list {max-height: 30rem;}
          .bmp-related-card { gap: 1.175rem; padding: 1.175rem; }
          .bmp-related-img { width: 3.875rem; height: 3.875rem; }
          .bmp-related-name { font-size: 1.1rem; }
          .bmp-related-role { font-size: .95rem; }

          .bmp-cta-strip { padding: 5.5rem 1.25rem; }
          .bmp-cta-label { font-size: .84rem; margin-bottom: .7rem; }
          .bmp-cta-title { font-size: 2.25rem; }
          .bmp-cta-btns { gap: 1rem; }
        }

        @media (min-width: 1920px) {
          .bmp-hero { padding: 7rem 0 0; }
          .bmp-hero-inner { grid-template-columns: 520px 1fr; padding-top: 4rem; }
          .bmp-photo-frame { max-width: 460px; height: 500px; }
          .bmp-back { font-size: 1.125rem; margin-bottom: 3rem; }
          .bmp-role-tag { font-size: 1rem; padding: .4rem 1.175rem; margin-bottom: 1.875rem; }
          .bmp-name { font-size: 4.5rem; margin: 0 0 2.5rem; }
          .bmp-divider { width: 5rem; margin-bottom: 2.5rem; }
          .bmp-bio-short { font-size: 1.35rem; max-width: 56rem; }

          .bmp-body { grid-template-columns: 1fr 470px; padding-top: 7.5rem; padding-bottom: 9rem; gap: 7.5rem; }
          .bmp-section-label { font-size: 1rem; margin-bottom: 1.375rem; }
          .bmp-bio-full { font-size: 1.35rem; margin: 0 0 5rem; }
          .bmp-quote { padding: 2.5rem 2.875rem; margin-bottom: 5rem; }
          .bmp-quote p { font-size: 1.6rem; }
          .bmp-quote cite { font-size: 1.175rem; }
          .bmp-sidebar-title { font-size: 1rem; margin-bottom: 1.875rem; padding-bottom: 1.375rem; }
          .bmp-related-list {max-height: 36rem;}
          .bmp-related-card { gap: 1.375rem; padding: 1.375rem; }
          .bmp-related-img { width: 4.5rem; height: 4.5rem; }
          .bmp-related-name { font-size: 1.25rem; }
          .bmp-related-role { font-size: 1.075rem; }

          .bmp-cta-strip { padding: 6.5rem 1.25rem; }
          .bmp-cta-label { font-size: .96rem; margin-bottom: .875rem; }
          .bmp-cta-title { font-size: 2.75rem; }
          .bmp-cta-btns { gap: 1.25rem; }
        }
      `}</style>

      <div className="bmp-root">
        {/* ── Hero banner ── */}
        <div className=" bmp-hero">
          <div className="container-max bmp-hero-inner">
            {/* Photo */}
            <div className="bmp-photo-col">
              <div className="bmp-photo-frame">
                <Image
                  src={`/images/board/${member.name}.webp`}
                  alt={member.name}
                  fill
                  priority
                  // style={{ objectFit: "cover", objectPosition: "center top" }}
                />
              </div>
            </div>

            {/* Info */}
            <div className="bmp-info-col">
              <Link
                href="/about/#board"
                className="hidden lg:inline-flex bmp-back"
              >
                <RiArrowLeftLine
                  style={{ width: ".875rem", height: ".875rem" }}
                />
                Board of Directors
              </Link>

              <div className="bmp-role-tag lg:w-4/5 xl:w-3/4">
                {member.role}
              </div>

              <h1 className="bmp-name">{member.name}</h1>

              <div className="bmp-divider" />

              <p
                className="bmp-bio-short"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {member.bio}
              </p>
              <Link
                href="/about/#board"
                className="pt-5! lg:hidden inline-flex self-end! bmp-back"
              >
                <RiArrowLeftLine
                  style={{ width: ".875rem", height: ".875rem" }}
                />
                Board of Directors
              </Link>
            </div>
          </div>
        </div>

        {/* ── Body ── */}
        <div className="container-max bmp-body">
          {/* Main */}
          <main className="bmp-main">
            <div className="bmp-section-label">Biography</div>
            <p className="bmp-bio-full">{member.bio}</p>

            <div className="bmp-quote">
              <p>&quot;{member.quote}&quot;</p>
              <cite>— {member.name}</cite>
            </div>
          </main>

          {/* Sidebar */}

          <aside className="bmp-sidebar">
            <div className="bmp-sidebar-title">Other Board Members</div>

            <div className="bmp-related-list">
              {related.map((m) => (
                <Link
                  key={m.id}
                  href={`/board/${slugify(m.name)}`}
                  className="bmp-related-card"
                >
                  <div className="bmp-related-img">
                    <Image
                      src={`/images/board/${m.name}.webp`}
                      alt={m.name}
                      fill
                      sizes="48px"
                      style={{
                        objectFit: "cover",
                        objectPosition: "center top",
                      }}
                    />
                  </div>

                  <div style={{ minWidth: 0 }}>
                    <p className="bmp-related-name">{m.name}</p>
                    <p className="bmp-related-role">{m.role}</p>
                  </div>
                </Link>
              ))}
            </div>
          </aside>
        </div>

        {/* ── CTA strip ── */}
        <div className="bmp-cta-strip">
          <div className="container-max bmp-cta-inner">
            <div>
              <div className="bmp-cta-label">Support the Mission</div>
              <h2 className="bmp-cta-title">Help Us Nurture More Dreams</h2>
            </div>
            <div
              className="bmp-cta-btns"
              style={{ display: "flex", flexWrap: "wrap" }}
            >
              <Link href="/donate" className="btn btn-primary btn-lg">
                Donate Now
              </Link>
              <Link href="/volunteer" className="btn btn-outline-white btn-lg">
                Volunteer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
