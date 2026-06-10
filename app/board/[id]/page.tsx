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
              <p>
                &quot;Leadership is service, and every act of service is an
                investment in the future of a child.&quot;
              </p>
              <cite>— {member.name}</cite>
            </div>
          </main>

          {/* Sidebar */}
          <aside className="bmp-sidebar">
            <div className="bmp-sidebar-title">Other Board Members</div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: ".25rem",
              }}
            >
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
            <div style={{ display: "flex", gap: ".75rem", flexWrap: "wrap" }}>
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
