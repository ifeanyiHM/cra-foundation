import Link from "next/link";
import Image from "next/image";
import {
  RiArrowRightLine,
  RiHeartsLine,
  RiGroupLine,
  RiGiftLine,
  RiHandHeartLine,
} from "react-icons/ri";

const highlights = [
  { icon: RiHandHeartLine, label: "Peer Mentorship", color: "#DC2626" },
  { icon: RiGiftLine, label: "Gift & Supply Drives", color: "#7C3AED" },
  { icon: RiGroupLine, label: "Buddy Programs", color: "#16A34A" },
  { icon: RiHeartsLine, label: "Shared Celebrations", color: "#D97706" },
];

const galleryPhotos = [
  {
    src: "/images/cgc/cgbc3.jpg",
    alt: "Children playing and sharing together",
  },
  {
    src: "/images/cgc/cgbc2.jpg",
    alt: "Kids sorting donated books and toys",
  },
  {
    src: "/images/cgc/cgbc4.jpg",
    alt: "Group of children at school",
  },
];

export default function ChildrenGivingSection() {
  return (
    <>
      <style>{`
        .cgtc-section {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #FEF2F2 0%, #FFFBEB 50%, #F5F3FF 100%);
          border-top: 1px solid var(--border-subtle);
          border-bottom: 1px solid var(--border-subtle);
        }
        .cgtc-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          pointer-events: none;
          opacity: .35;
        }
        .cgtc-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          align-items: center;
        }
        @media (min-width: 1024px) {
          .cgtc-grid { grid-template-columns: 1.05fr 1fr; gap: 3.5rem; }
        }

        .cgtc-photo-stack {
          position: relative;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto auto;
          gap: .875rem;
        }
        .cgtc-photo {
          border-radius: 18px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 16px 40px rgba(0,0,0,.10);
          background: #F3F4F6;
        }
        .cgtc-photo img {
          width: 100%; height: 100%;
          object-fit: cover; display: block;
          transition: transform .5s ease;
        }
        .cgtc-photo:hover img { transform: scale(1.06); }
        .cgtc-photo-main {
          grid-row: 1 / 3;
          aspect-ratio: 3/4;
        }
        .cgtc-photo-sub {
          aspect-ratio: 1/1;
        }

        .cgtc-badge {
          position: absolute;
          z-index: 10;
          background: #fff;
          border-radius: 14px;
          box-shadow: 0 10px 30px rgba(0,0,0,.14);
          padding: .75rem 1rem;
          display: flex;
          align-items: center;
          gap: .625rem;
        }

        .cgtc-pill-row {
          display: flex;
          flex-wrap: wrap;
          gap: .625rem;
          margin: 1.5rem 0 2rem;
        }
        .cgtc-pill {
          display: inline-flex;
          align-items: center;
          gap: .4rem;
          padding: .4rem .875rem;
          border-radius: 999px;
          background: #fff;
          border: 1px solid var(--border-subtle);
          font-size: .8rem;
          font-weight: 600;
          color: var(--neutral-700);
          box-shadow: 0 1px 3px rgba(0,0,0,.04);
        }

        .cgtc-eyebrow { font-size: .74rem; margin-bottom: 1.25rem; }
      .cgtc-intro { font-size: 1rem; max-width: 32rem; }
      .cgtc-pill-row { gap: .625rem; margin: 1.5rem 0 2rem; }
      .cgtc-pill { font-size: .8rem; padding: .4rem .875rem; gap: .4rem; }
      .cgtc-pill-icon { width: .95rem; height: .95rem; }
      .cgtc-badge-num { font-size: .9rem; }
      .cgtc-badge-sub { font-size: .7rem; }
      .cgtc-badge-icon { width: 2.25rem; height: 2.25rem; }
      .cgtc-badge-icon-svg { width: 1.05rem; height: 1.05rem; }

      @media (min-width: 1440px) {
        .cgtc-grid { gap: 4rem; }
        .cgtc-eyebrow { font-size: .78rem; margin-bottom: 1.375rem; }
        .cgtc-intro { font-size: 1.05rem; max-width: 34rem; }
        .cgtc-pill-row { gap: .7rem; margin: 1.625rem 0 2.125rem; }
        .cgtc-pill { font-size: .825rem; padding: .425rem .925rem; }
        .cgtc-pill-icon { width: 1rem; height: 1rem; }
        .cgtc-badge-num { font-size: .95rem; }
        .cgtc-badge-sub { font-size: .72rem; }
        .cgtc-badge-icon { width: 2.375rem; height: 2.375rem; }
        .cgtc-badge-icon-svg { width: 1.1rem; height: 1.1rem; }
      }

      @media (min-width: 1536px) {
        .cgtc-grid { gap: 4.5rem; }
        .cgtc-eyebrow { font-size: .82rem; margin-bottom: 1.5rem; }
        .cgtc-intro { font-size: 1.15rem; max-width: 38rem; }
        .cgtc-pill-row { gap: .75rem; margin: 1.75rem 0 2.25rem; }
        .cgtc-pill { font-size: .875rem; padding: .45rem .975rem; }
        .cgtc-pill-icon { width: 1.025rem; height: 1.025rem; }
        .cgtc-badge-num { font-size: 1rem; }
        .cgtc-badge-sub { font-size: .74rem; }
        .cgtc-badge-icon { width: 2.5rem; height: 2.5rem; }
        .cgtc-badge-icon-svg { width: 1.15rem; height: 1.15rem; }
      }

      @media (min-width: 1680px) {
        .cgtc-grid { gap: 5rem; }
        .cgtc-eyebrow { font-size: .88rem; margin-bottom: 1.625rem; }
        .cgtc-intro { font-size: 1.25rem; max-width: 40rem; }
        .cgtc-pill-row { gap: .8rem; margin: 1.875rem 0 2.375rem; }
        .cgtc-pill { font-size: 1rem; padding: .475rem 1.025rem; }
        .cgtc-pill-icon { width: 1.05rem; height: 1.05rem; }
        .cgtc-badge-num { font-size: 1.05rem; }
        .cgtc-badge-sub { font-size: .78rem; }
        .cgtc-badge-icon { width: 2.625rem; height: 2.625rem; }
        .cgtc-badge-icon-svg { width: 1.2rem; height: 1.2rem; }
      }

      @media (min-width: 1920px) {
        .cgtc-grid { gap: 6rem; }
        .cgtc-eyebrow { font-size: 1rem; margin-bottom: 1.875rem; }
        .cgtc-intro { font-size: 1.42rem; max-width: 47rem; }
        .cgtc-pill-row { gap: .9rem; margin: 2.125rem 0 2.75rem; }
        .cgtc-pill { font-size: 1.15rem; padding: .55rem 1.175rem; }
        .cgtc-pill-icon { width: 1.175rem; height: 1.175rem; }
        .cgtc-badge-num { font-size: 1.2rem; }
        .cgtc-badge-sub { font-size: .88rem; }
        .cgtc-badge-icon { width: 3rem; height: 3rem; }
        .cgtc-badge-icon-svg { width: 1.375rem; height: 1.375rem; }
      }
      `}</style>

      <section className="section-padding cgtc-section">
        {/* Decorative color blobs */}
        <div
          className="cgtc-blob"
          style={{
            width: "24rem",
            height: "24rem",
            background: "#DC2626",
            top: "-8rem",
            left: "-8rem",
          }}
        />
        <div
          className="cgtc-blob"
          style={{
            width: "20rem",
            height: "20rem",
            background: "#7C3AED",
            bottom: "-6rem",
            right: "-6rem",
          }}
        />
        <div
          className="cgtc-blob"
          style={{
            width: "16rem",
            height: "16rem",
            background: "#D97706",
            top: "40%",
            right: "10%",
          }}
        />

        <div
          className="container-max"
          style={{ position: "relative", zIndex: 1 }}
        >
          <div className="cgtc-grid">
            {/* ── Left: Text ── */}
            <div>
              <div
                className="cgtc-eyebrow"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: ".5rem",
                }}
              >
                <span
                  style={{
                    width: ".4rem",
                    height: ".4rem",
                    borderRadius: "50%",
                    background: "var(--brand-600)",
                  }}
                />
                <span
                  style={{
                    fontWeight: 700,
                    letterSpacing: ".09em",
                    textTransform: "uppercase",
                    color: "var(--brand-600)",
                  }}
                >
                  A New Initiative
                </span>
              </div>

              <h2 style={{ margin: "0 0 1rem", maxWidth: "26rem" }}>
                Children Giving to Children
              </h2>

              <p
                className="cgtc-intro"
                style={{
                  color: "var(--neutral-600)",
                  lineHeight: 1.8,
                  marginBottom: 0,
                }}
              >
                A movement that invites privileged children to become active
                givers — sharing books, toys, clothes, and friendship with
                underprivileged children in need. Because compassion,
                generosity, and gratitude are values best shaped early, and best
                learned by practising them.
              </p>

              {/* Pills */}
              <div className="cgtc-pill-row">
                {highlights.map(({ icon: Icon, label, color }) => (
                  <span key={label} className="cgtc-pill">
                    <Icon className="cgtc-pill-icon" style={{ color }} />
                    {label}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <Link href="/cgc" className="btn btn-primary btn-lg">
                Explore the Initiative
                <RiArrowRightLine style={{ width: "1rem", height: "1rem" }} />
              </Link>
            </div>

            {/* ── Right: Photo collage ── */}
            <div className="cgtc-photo-stack">
              <div className="cgtc-photo cgtc-photo-main">
                <Image
                  src={galleryPhotos[0].src}
                  alt={galleryPhotos[0].alt}
                  fill
                  loading="lazy"
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,.35) 0%, transparent 50%)",
                  }}
                />
              </div>
              <div className="cgtc-photo cgtc-photo-sub">
                <Image
                  src={galleryPhotos[1].src}
                  alt={galleryPhotos[1].alt}
                  fill
                  loading="lazy"
                />
              </div>
              <div className="cgtc-photo cgtc-photo-sub">
                <Image
                  src={galleryPhotos[2].src}
                  alt={galleryPhotos[2].alt}
                  fill
                  loading="lazy"
                />
              </div>

              {/* Floating badge */}

              <div
                className="cgtc-badge"
                style={{ top: "-1rem", left: "-1rem" }}
              >
                <div
                  className="cgtc-badge-icon"
                  style={{
                    borderRadius: "8px",
                    background: "linear-gradient(135deg, #DC2626, #F87171)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <RiHeartsLine
                    className="cgtc-badge-icon-svg"
                    style={{ color: "#fff" }}
                  />
                </div>
                <div>
                  <p
                    className="cgtc-badge-num"
                    style={{
                      fontWeight: 800,
                      color: "var(--neutral-900)",
                      lineHeight: 1,
                      margin: 0,
                      letterSpacing: "-.02em",
                    }}
                  >
                    Kid-Led
                  </p>
                  <p
                    className="cgtc-badge-sub"
                    style={{
                      color: "var(--neutral-400)",
                      margin: ".15rem 0 0",
                      fontWeight: 500,
                    }}
                  >
                    Giving Program
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
