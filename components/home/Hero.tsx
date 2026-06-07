"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { RiArrowRightLine, RiHeartFill, RiDoubleQuotesL } from "react-icons/ri";

/* ── African / Black children — Unsplash photo pool ── */
const photos = [
  {
    src: "/images/hero/hero1.jpg",
    alt: "Nigerian children smiling at school",
  },
  {
    src: "/images/hero/hero2.jpg",
    alt: "African child learning with joy",
  },
  {
    src: "/images/hero/hero3.jpg",
    alt: "African children at school",
  },
  {
    src: "/images/hero/hero4.jpg",
    alt: "Smiling Black children together",
  },
];

const slides = [
  {
    eyebrow: "Established 2010 · Lagos, Nigeria",
    headline: "Every Child Deserves a Future Worth Living",
    sub: "We nurture underprivileged children in Lagos through education, nutrition, health care, and mentorship — addressing every dimension of their well-being.",
    primary: { label: "Sponsor a Child", href: "/sponsor" },
    secondary: { label: "See Our Programs", href: "/programs" },
    photo: photos[0],
  },
  {
    eyebrow: "2,500+ Children Supported Since 2010",
    headline: "Education Is the Most Powerful Gift You Can Give",
    sub: "After-school tutoring, scholarships, textbooks, uniforms and a safe learning space — we remove every barrier between a child and their potential.",
    primary: { label: "Donate Today", href: "/donate" },
    secondary: { label: "Our Impact", href: "/impact" },
    photo: photos[1],
  },
  {
    eyebrow: "38 Active Volunteers · 5 LGEAs Covered",
    headline: "Your Generosity Plants Seeds of Greatness",
    sub: "Volunteer, donate, mentor, or sponsor. Every act of kindness you show today changes the trajectory of a child's tomorrow and builds a stronger community.",
    primary: { label: "Get Involved", href: "/volunteer" },
    secondary: { label: "Contact Us", href: "/contact" },
    photo: photos[2],
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = (idx: number) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, 320);
  };

  useEffect(() => {
    const t = setInterval(() => goTo((current + 1) % slides.length), 9000);
    return () => clearInterval(t);
  }, [current, animating]);

  const slide = slides[current];

  return (
    <>
      <style>
        {`
        .hero-root {
          min-height: 100svh;
          display: flex;
          flex-direction: column;
          background: #FFFBF7;
          position: relative;
          overflow: hidden;
        }

        /* warm cream-to-white gradient */
        .hero-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 80% 60% at 60% -10%, rgba(0,65,255,.07) 0%, transparent 70%),
            radial-gradient(ellipse 50% 50% at 100% 80%,  rgba(0,55,217,.06) 0%, transparent 70%),
            radial-gradient(ellipse 60% 70% at -10% 50%,  rgba(0,45,179,.04) 0%, transparent 70%);
          pointer-events: none;
        }

        .hero-body {
          flex: 1;
          display: grid;
          grid-template-columns: 1fr;
          align-items: center;
          padding-top: 5.5rem;
          gap: 2.5rem;
        }

        @media (min-width: 1024px) {
          .hero-body {
            grid-template-columns: 1fr 1fr;
            gap: 0rem;
            padding-top: 6rem;
          }
        }

        /* ── Left text panel ── */
        .hero-text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-left: 0;
        }

        /* MOBILE: text sits on top of the background slideshow */
        @media (max-width: 1023px) {
          .hero-text {
            position: relative;
            z-index: 2;
          }
        }

        .hero-text-inner {
          transition: opacity .3s ease, transform .3s ease;
        }

        .hero-text-inner.fade {
          opacity: 0;
          transform: translateY(10px);
        }

        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: .5rem;
          margin-bottom: 1.25rem;
        }

        .hero-eyebrow-dot {
          width: .4rem;
          height: .4rem;
          border-radius: 50%;
          background: #0041ff;
          flex-shrink: 0;
          animation: pulse-dot 2s ease-in-out infinite;
        }

        @keyframes pulse-dot {
          0%,100% { transform: scale(1); opacity:1; }
          50%     { transform: scale(1.4); opacity:.7; }
        }

        .hero-eyebrow-text {
          font-size: .74rem;
          font-weight: 700;
          letter-spacing: .07em;
          text-transform: uppercase;
          color: #0041ff;
        }

        /* MOBILE: lighten eyebrow text against dark photo bg */
        @media (max-width: 1023px) {
          .hero-eyebrow-text { color: #93C5FD; }
          .hero-eyebrow-dot  { background: #93C5FD; }
        }

        .hero-headline {
          font-size: clamp(2rem, 4vw + .5rem, 3rem);
          font-weight: 800;
          line-height: 1.12;
          letter-spacing: -.035em;
          color: #111827;
          margin: 0 0 1.125rem;
        }

        .hero-headline span {
          color: #0041ff;
        }

        /* MOBILE: white headline over photo */
        @media (max-width: 1023px) {
          .hero-headline       { color: #fff; }
          .hero-headline span  { color: #93C5FD; }
        }

        .hero-sub {
          font-size: .9875rem;
          color: #4B5563;
          line-height: 1.8;
          max-width: 32rem;
          margin: 0 0 2.25rem;
        }

        /* MOBILE: readable subtitle over photo */
        @media (max-width: 1023px) {
          .hero-sub { color: rgba(255,255,255,.75); }
        }

        .hero-ctas {
          display: flex;
          flex-wrap: wrap;
          gap: .625rem;
          margin-bottom: 2.5rem;
        }

        .hero-trust {
          display: flex;
          align-items: center;
          gap: .625rem;
          padding: .75rem 1rem;
          background: rgba(0,65,255,.05);
          border: 1px solid rgba(0,65,255,.12);
          border-radius: 10px;
          width: fit-content;
        }

        /* MOBILE: trust badge adapts to dark background */
        @media (max-width: 1023px) {
          .hero-trust {
            background: rgba(255,255,255,.1);
            border-color: rgba(255,255,255,.2);
            backdrop-filter: blur(8px);
          }
          .hero-trust p { color: #fff !important; }
          .hero-trust p:last-child { color: rgba(255,255,255,.6) !important; }
        }

        .hero-trust-icon {
          width: 1.75rem;
          height: 1.75rem;
          border-radius: 6px;
          background: #0041ff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        /* ── Right photo panel ── */
        .hero-photo-panel {
          display: none;
          position: relative;
          width: 100%;
          height: 100%;
        }

        @media (min-width: 1024px) {
          .hero-photo-panel {
            display: block;
          }
        }

        /* MOBILE: full-bleed fixed background behind everything */
        @media (max-width: 1023px) {
          .hero-photo-panel {
            display: block;
            position: absolute;
            inset: 0;
            z-index: 0;
          }
        }

        .hero-photo-frame {
          position: relative;
          overflow: hidden;
          width: 100%;
          height: 90vh;
          box-shadow:
            0 30px 80px rgba(0,65,255,.18),
            0 10px 30px rgba(0,0,0,.12);
        }

        /* MOBILE: frame fills the whole hero */
        @media (max-width: 1023px) {
          .hero-photo-frame {
            height: 100%;
            box-shadow: none;
          }
        }

        .hero-photo-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
          transition: opacity .4s ease, transform .5s ease;
        }

        .hero-photo-frame img.hidden {
          opacity: 0;
          transform: scale(1.03);
        }

        .hero-photo-frame::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(17,24,39,.55) 0%,
            rgba(17,24,39,.12) 40%,
            transparent 65%
          );
          pointer-events: none;
        }

        /* MOBILE: stronger scrim so text stays readable */
        @media (max-width: 1023px) {
          .hero-photo-frame::after {
            background: linear-gradient(
              to top,
              rgba(11,14,19,.82) 0%,
              rgba(11,14,19,.55) 50%,
              rgba(11,14,19,.35) 100%
            );
          }
        }

        /* Decorative ring */
        .hero-deco-ring {
          position: absolute;
          border-radius: 50%;
          border: 2px dashed rgba(0,65,255,.15);
          pointer-events: none;
          top: -2.5rem;
          right: -2.5rem;
          width: calc(100% + 5rem);
          height: calc(100% + 5rem);
          z-index: 0;
        }

        .hero-deco-ring-2 {
          top: -4.5rem;
          right: -4.5rem;
          width: calc(100% + 9rem);
          height: calc(100% + 9rem);
          border-color: rgba(0,65,255,.07);
        }

        /* MOBILE: hide decorative rings — they don't make sense as a bg */
        @media (max-width: 1023px) {
          .hero-deco-ring { display: none; }
        }

        /* Floating quote badge */
        .hero-badge-quote {
          position: absolute;
          top: 1.75rem;
          left: -2.25rem;
          z-index: 10;
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 8px 32px rgba(0,0,0,.14), 0 2px 8px rgba(0,0,0,.08);
          padding: .3rem 1.125rem;
          max-width: 13rem;
          animation: float-a 3.5s ease-in-out infinite;
        }

        @keyframes float-a {
          0%,100% { transform: translateY(0); }
          50%     { transform: translateY(-7px); }
        }

        .hero-badge-stat {
          position: absolute;
          bottom: 3rem;
          right: -2rem;
          z-index: 10;
          background: #fff;
          border-radius: 14px;
          box-shadow: 0 8px 32px rgba(0,0,0,.14), 0 2px 8px rgba(0,0,0,.08);
          padding: .875rem 1.125rem;
          display: flex;
          align-items: center;
          gap: .625rem;
          animation: float-b 3.5s ease-in-out infinite;
          animation-delay: 1.75s;
        }

        @keyframes float-b {
          0%,100% { transform: translateY(0); }
          50%     { transform: translateY(-7px); }
        }

        .hero-photo-caption {
          position: absolute;
          bottom: 1.25rem;
          left: 1.25rem;
          right: 1.25rem;
          z-index: 5;
          display: flex;
          align-items: center;
          gap: .5rem;
        }

        /* MOBILE: hide caption strip — too cluttered on small screens */
        @media (max-width: 1023px) {
          .hero-photo-caption { display: none; }
        }

        .hero-dots {
          position: absolute;
          bottom: 1.25rem;
          right: 1.25rem;
          z-index: 10;
          display: flex;
          gap: .35rem;
        }

        /* MOBILE: hide dots from the photo frame; the text panel shows its own */
        @media (max-width: 1023px) {
          .hero-dots { display: none; }
        }

        /* ── Stats bar ── */
        .hero-stats {
          border-top: 1px solid rgba(0,0,0,.07);
          background: rgba(255,255,255,.7);
          backdrop-filter: blur(8px);
        }

        .hero-stats-inner {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          padding: 1.25rem 0;
        }

        @media (min-width: 640px) {
          .hero-stats-inner {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .hero-stat-item {
          display: flex;
          align-items: center;
          gap: .75rem;
          padding: .625rem .875rem;
          border-radius: 10px;
          background: #fff;
          border: 1px solid rgba(0,0,0,.06);
        }

        .hero-stat-icon {
          width: 2.25rem;
          height: 2.25rem;
          border-radius: 8px;
          background: rgba(0,65,255,.08);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        /* MOBILE: slide dots rendered inside the text panel */
        .hero-mobile-dots {
          display: none;
          gap: .35rem;
          margin-top: 1.25rem;
        }
        @media (max-width: 1023px) {
          .hero-mobile-dots { display: flex; }
        }
      `}
      </style>

      <section className="hero-root">
        <div className="hero-body">
          {/* ── LEFT: Text ── */}
          <div className="container-max hero-text">
            <div className={`hero-text-inner${animating ? " fade" : ""}`}>
              {/* Eyebrow */}
              <div className="hero-eyebrow">
                <span className="hero-eyebrow-dot" />
                <span className="hero-eyebrow-text">{slide.eyebrow}</span>
              </div>

              {/* Headline */}
              <h1 className="hero-headline">
                {slide.headline.includes("Child") ? (
                  <>
                    Every Child Deserves
                    <br />
                    <span>a Future Worth Living</span>
                  </>
                ) : slide.headline.includes("Education") ? (
                  <>
                    Education Is the
                    <br />
                    <span>Most Powerful Gift</span>
                  </>
                ) : (
                  <>
                    Your Generosity
                    <br />
                    <span>Plants Seeds of Greatness</span>
                  </>
                )}
              </h1>

              {/* Sub */}
              <p className="hero-sub">{slide.sub}</p>

              {/* CTAs */}
              <div className="hero-ctas">
                <Link
                  href={slide.primary.href}
                  className="btn btn-primary btn-lg"
                >
                  {slide.primary.label}
                  <RiArrowRightLine style={{ width: "1rem", height: "1rem" }} />
                </Link>
                <Link
                  href={slide.secondary.href}
                  className="btn btn-secondary btn-lg"
                >
                  {slide.secondary.label}
                </Link>
              </div>
            </div>

            {/* Trust badge */}
            <div className="hero-trust">
              <div className="hero-trust-icon">
                <RiHeartFill
                  style={{
                    width: ".875rem",
                    height: ".875rem",
                    color: "#fff",
                  }}
                />
              </div>
              <div>
                <p
                  style={{
                    fontSize: ".78rem",
                    fontWeight: 700,
                    color: "#111827",
                    margin: 0,
                    lineHeight: 1.2,
                  }}
                >
                  Trusted & Government Recognised
                </p>
                <p
                  style={{
                    fontSize: ".72rem",
                    color: "#6B7280",
                    margin: "0.15rem 0 0",
                    lineHeight: 1,
                  }}
                >
                  Incorporated 2011 · 6 Lagos State Awards
                </p>
              </div>
            </div>

            {/* Mobile-only slide dots */}
            <div className="hero-mobile-dots">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  style={{
                    width: i === current ? "1.375rem" : ".375rem",
                    height: ".375rem",
                    borderRadius: "999px",
                    background: i === current ? "#fff" : "rgba(255,255,255,.4)",
                    border: "none",
                    cursor: "pointer",
                    transition: "all .25s ease",
                    padding: 0,
                  }}
                />
              ))}
            </div>
          </div>

          {/* ── RIGHT: Photo panel ── */}
          <div className="hero-photo-panel">
            <div className="hero-deco-ring" />
            <div className="hero-deco-ring hero-deco-ring-2" />

            <div
              className="hero-photo-frame"
              style={{ position: "relative", zIndex: 1 }}
            >
              {slides.map((s, i) => (
                <Image
                  key={s.photo.src}
                  src={s.photo.src}
                  alt={s.photo.alt}
                  fill
                  priority={i === 0}
                  className="grayscale hover:grayscale-0 transition duration-300"
                  style={{
                    position: "absolute",
                    inset: 0,
                    objectFit: "cover",
                    objectPosition: "center top",
                    opacity: i === current ? 1 : 0,
                    transition: "opacity 0.5s ease",
                    willChange: "opacity",
                  }}
                />
              ))}

              {/* Caption strip */}
              <div className="hero-photo-caption">
                <div
                  style={{
                    flex: 1,
                    background: "rgba(255,255,255,.12)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,.18)",
                    borderRadius: "10px",
                    padding: ".5rem .875rem",
                    display: "flex",
                    alignItems: "center",
                    gap: ".4rem",
                  }}
                >
                  <span
                    style={{
                      width: ".4rem",
                      height: ".4rem",
                      borderRadius: "50%",
                      background: "#4ADE80",
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontSize: ".78rem",
                      fontWeight: 600,
                      color: "#fff",
                    }}
                  >
                    {slide.photo.alt}
                  </span>
                </div>
              </div>

              {/* Dots */}
              <div className="hero-dots">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    style={{
                      width: i === current ? "1.375rem" : ".375rem",
                      height: ".375rem",
                      borderRadius: "999px",
                      background:
                        i === current ? "#fff" : "rgba(255,255,255,.4)",
                      border: "none",
                      cursor: "pointer",
                      transition: "all .25s ease",
                      padding: 0,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Floating quote badge */}
            <div className="hero-badge-quote">
              <div className="flex items-center gap-0.5">
                <RiDoubleQuotesL
                  style={{
                    width: "1rem",
                    height: "1rem",
                    color: "#0041ff",
                    marginBottom: ".25rem",
                  }}
                />
                <p
                  style={{
                    fontSize: ".78rem",
                    fontWeight: 600,
                    color: "#111827",
                    lineHeight: 0.5,
                    margin: "0.5rem 0 .375rem",
                  }}
                >
                  To nuture a dream
                </p>
              </div>
              <p
                style={{
                  fontSize: ".69rem",
                  color: "#9CA3AF",
                  margin: 0,
                  fontWeight: 500,
                }}
              >
                — CRA, Surulere Lagos
              </p>
            </div>

            {/* Floating stat badge */}
            {/* <div className="hero-badge-stat">
              <div
                style={{
                  width: "2.25rem",
                  height: "2.25rem",
                  borderRadius: "8px",
                  background: "linear-gradient(135deg, #DC2626, #F87171)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <RiHeartFill
                  style={{ width: "1rem", height: "1rem", color: "#fff" }}
                />
              </div>
              <div>
                <p
                  style={{
                    fontSize: ".9rem",
                    fontWeight: 800,
                    color: "#111827",
                    lineHeight: 1,
                    margin: 0,
                    letterSpacing: "-.02em",
                  }}
                >
                  2,500+
                </p>
                <p
                  style={{
                    fontSize: ".7rem",
                    color: "#6B7280",
                    margin: ".15rem 0 0",
                    fontWeight: 500,
                  }}
                >
                  Children Supported
                </p>
              </div>
            </div> */}
          </div>
        </div>

        {/* ── Stats bar ── */}
        {/* <div className="hero-stats">
          <div className="container-max">
            <div className="hero-stats-inner">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="hero-stat-item">
                  <div className="hero-stat-icon">
                    <Icon
                      style={{
                        width: "1rem",
                        height: "1rem",
                        color: "#DC2626",
                      }}
                    />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "1.125rem",
                        fontWeight: 800,
                        color: "#111827",
                        lineHeight: 1,
                        letterSpacing: "-.03em",
                      }}
                    >
                      {value}
                    </div>
                    <div
                      style={{
                        fontSize: ".72rem",
                        color: "#6B7280",
                        marginTop: ".15rem",
                        fontWeight: 500,
                      }}
                    >
                      {label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
}

// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { RiArrowRightLine, RiHeartFill, RiDoubleQuotesL } from "react-icons/ri";

// /* ── African / Black children — Unsplash photo pool ── */
// const photos = [
//   {
//     src: "/images/hero/hero1.jpg",
//     alt: "Nigerian children smiling at school",
//   },
//   {
//     src: "/images/hero/hero2.jpg",
//     alt: "African child learning with joy",
//   },
//   {
//     src: "/images/hero/hero3.jpg",
//     alt: "African children at school",
//   },
//   {
//     src: "/images/hero/hero4.jpg",
//     alt: "Smiling Black children together",
//   },
// ];

// const slides = [
//   {
//     eyebrow: "Established 2010 · Lagos, Nigeria",
//     headline: "Every Child Deserves a Future Worth Living",
//     sub: "We nurture underprivileged children in Lagos through education, nutrition, health care, and mentorship — addressing every dimension of their well-being.",
//     primary: { label: "Sponsor a Child", href: "/sponsor" },
//     secondary: { label: "See Our Programs", href: "/programs" },
//     photo: photos[0],
//   },
//   {
//     eyebrow: "2,500+ Children Supported Since 2010",
//     headline: "Education Is the Most Powerful Gift You Can Give",
//     sub: "After-school tutoring, scholarships, textbooks, uniforms and a safe learning space — we remove every barrier between a child and their potential.",
//     primary: { label: "Donate Today", href: "/donate" },
//     secondary: { label: "Our Impact", href: "/impact" },
//     photo: photos[1],
//   },
//   {
//     eyebrow: "38 Active Volunteers · 5 LGEAs Covered",
//     headline: "Your Generosity Plants Seeds of Greatness",
//     sub: "Volunteer, donate, mentor, or sponsor. Every act of kindness you show today changes the trajectory of a child's tomorrow and builds a stronger community.",
//     primary: { label: "Get Involved", href: "/volunteer" },
//     secondary: { label: "Contact Us", href: "/contact" },
//     photo: photos[2],
//   },
// ];

// export default function Hero() {
//   const [current, setCurrent] = useState(0);
//   const [animating, setAnimating] = useState(false);

//   const goTo = (idx: number) => {
//     if (animating) return;
//     setAnimating(true);
//     setTimeout(() => {
//       setCurrent(idx);
//       setAnimating(false);
//     }, 320);
//   };

//   useEffect(() => {
//     const t = setInterval(() => goTo((current + 1) % slides.length), 9000);
//     return () => clearInterval(t);
//   }, [current, animating]);

//   const slide = slides[current];

//   return (
//     <>
//       <style>
//         {`
//         .hero-root {
//           min-height: 100svh;
//           display: flex;
//           flex-direction: column;
//           background: #FFFBF7;
//           position: relative;
//           overflow: hidden;
//         }

//         /* warm cream-to-white gradient */
//         .hero-root::before {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background:
//             radial-gradient(ellipse 80% 60% at 60% -10%, rgba(0,65,255,.07) 0%, transparent 70%),
//             radial-gradient(ellipse 50% 50% at 100% 80%,  rgba(0,55,217,.06) 0%, transparent 70%),
//             radial-gradient(ellipse 60% 70% at -10% 50%,  rgba(0,45,179,.04) 0%, transparent 70%);
//           pointer-events: none;
//         }

//         .hero-body {
//           flex: 1;
//           display: grid;
//           grid-template-columns: 1fr;
//           align-items: center;
//           padding-top: 5.5rem;
//           gap: 2.5rem;
//         }

//         @media (min-width: 1024px) {
//           .hero-body {
//             grid-template-columns: 1fr 1fr;
//             gap: 0rem;
//             padding-top: 6rem;
//           }
//         }

//         /* ── Left text panel ── */
//         .hero-text {
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           margin-left: 0;
//         }

//         .hero-text-inner {
//           transition: opacity .3s ease, transform .3s ease;
//         }

//         .hero-text-inner.fade {
//           opacity: 0;
//           transform: translateY(10px);
//         }

//         .hero-eyebrow {
//           display: inline-flex;
//           align-items: center;
//           gap: .5rem;
//           margin-bottom: 1.25rem;
//         }

//         .hero-eyebrow-dot {
//           width: .4rem;
//           height: .4rem;
//           border-radius: 50%;
//           background: #0041ff;
//           flex-shrink: 0;
//           animation: pulse-dot 2s ease-in-out infinite;
//         }

//         @keyframes pulse-dot {
//           0%,100% { transform: scale(1); opacity:1; }
//           50%     { transform: scale(1.4); opacity:.7; }
//         }

//         .hero-eyebrow-text {
//           font-size: .74rem;
//           font-weight: 700;
//           letter-spacing: .07em;
//           text-transform: uppercase;
//           color: #0041ff;
//         }

//         .hero-headline {
//           font-size: clamp(2rem, 4vw + .5rem, 3rem);
//           font-weight: 800;
//           line-height: 1.12;
//           letter-spacing: -.035em;
//           color: #111827;
//           margin: 0 0 1.125rem;
//         }

//         .hero-headline span {
//           color: #0041ff;
//         }

//         .hero-sub {
//           font-size: .9875rem;
//           color: #4B5563;
//           line-height: 1.8;
//           max-width: 32rem;
//           margin: 0 0 2.25rem;
//         }

//         .hero-ctas {
//           display: flex;
//           flex-wrap: wrap;
//           gap: .625rem;
//           margin-bottom: 2.5rem;
//         }

//         .hero-trust {
//           display: flex;
//           align-items: center;
//           gap: .625rem;
//           padding: .75rem 1rem;
//           background: rgba(0,65,255,.05);
//           border: 1px solid rgba(0,65,255,.12);
//           border-radius: 10px;
//           width: fit-content;
//         }

//         .hero-trust-icon {
//           width: 1.75rem;
//           height: 1.75rem;
//           border-radius: 6px;
//           background: #0041ff;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           flex-shrink: 0;
//         }

//         /* ── Right photo panel ── */
//         .hero-photo-panel {
//           display: none;
//           position: relative;
//           width: 100%;
//           height: 100%;
//         }

//         @media (min-width: 1024px) {
//           .hero-photo-panel {
//             display: block;
//           }
//         }

//         .hero-photo-frame {
//           position: relative;
//           overflow: hidden;
//           width: 100%;
//           height: 90vh;
//           box-shadow:
//             0 30px 80px rgba(0,65,255,.18),
//             0 10px 30px rgba(0,0,0,.12);
//         }

//         .hero-photo-frame img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           object-position: center top;
//           display: block;
//           transition: opacity .4s ease, transform .5s ease;
//         }

//         .hero-photo-frame img.hidden {
//           opacity: 0;
//           transform: scale(1.03);
//         }

//         .hero-photo-frame::after {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(
//             to top,
//             rgba(17,24,39,.55) 0%,
//             rgba(17,24,39,.12) 40%,
//             transparent 65%
//           );
//           pointer-events: none;
//         }

//         /* Decorative ring */
//         .hero-deco-ring {
//           position: absolute;
//           border-radius: 50%;
//           border: 2px dashed rgba(0,65,255,.15);
//           pointer-events: none;
//           top: -2.5rem;
//           right: -2.5rem;
//           width: calc(100% + 5rem);
//           height: calc(100% + 5rem);
//           z-index: 0;
//         }

//         .hero-deco-ring-2 {
//           top: -4.5rem;
//           right: -4.5rem;
//           width: calc(100% + 9rem);
//           height: calc(100% + 9rem);
//           border-color: rgba(0,65,255,.07);
//         }

//         /* Floating quote badge */
//         .hero-badge-quote {
//           position: absolute;
//           top: 1.75rem;
//           left: -2.25rem;
//           z-index: 10;
//           background: #fff;
//           border-radius: 10px;
//           box-shadow: 0 8px 32px rgba(0,0,0,.14), 0 2px 8px rgba(0,0,0,.08);
//           padding: .3rem 1.125rem;
//           max-width: 13rem;
//           animation: float-a 3.5s ease-in-out infinite;
//         }

//         @keyframes float-a {
//           0%,100% { transform: translateY(0); }
//           50%     { transform: translateY(-7px); }
//         }

//         .hero-badge-stat {
//           position: absolute;
//           bottom: 3rem;
//           right: -2rem;
//           z-index: 10;
//           background: #fff;
//           border-radius: 14px;
//           box-shadow: 0 8px 32px rgba(0,0,0,.14), 0 2px 8px rgba(0,0,0,.08);
//           padding: .875rem 1.125rem;
//           display: flex;
//           align-items: center;
//           gap: .625rem;
//           animation: float-b 3.5s ease-in-out infinite;
//           animation-delay: 1.75s;
//         }

//         @keyframes float-b {
//           0%,100% { transform: translateY(0); }
//           50%     { transform: translateY(-7px); }
//         }

//         .hero-photo-caption {
//           position: absolute;
//           bottom: 1.25rem;
//           left: 1.25rem;
//           right: 1.25rem;
//           z-index: 5;
//           display: flex;
//           align-items: center;
//           gap: .5rem;
//         }

//         .hero-dots {
//           position: absolute;
//           bottom: 1.25rem;
//           right: 1.25rem;
//           z-index: 10;
//           display: flex;
//           gap: .35rem;
//         }

//         /* ── Stats bar ── */
//         .hero-stats {
//           border-top: 1px solid rgba(0,0,0,.07);
//           background: rgba(255,255,255,.7);
//           backdrop-filter: blur(8px);
//         }

//         .hero-stats-inner {
//           display: grid;
//           grid-template-columns: repeat(2, 1fr);
//           gap: 1rem;
//           padding: 1.25rem 0;
//         }

//         @media (min-width: 640px) {
//           .hero-stats-inner {
//             grid-template-columns: repeat(4, 1fr);
//           }
//         }

//         .hero-stat-item {
//           display: flex;
//           align-items: center;
//           gap: .75rem;
//           padding: .625rem .875rem;
//           border-radius: 10px;
//           background: #fff;
//           border: 1px solid rgba(0,0,0,.06);
//         }

//         .hero-stat-icon {
//           width: 2.25rem;
//           height: 2.25rem;
//           border-radius: 8px;
//           background: rgba(0,65,255,.08);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           flex-shrink: 0;
//         }
//       `}
//       </style>

//       <section className="hero-root">
//         <div className="hero-body">
//           {/* ── LEFT: Text ── */}
//           <div className="container-max hero-text">
//             <div className={`hero-text-inner${animating ? " fade" : ""}`}>
//               {/* Eyebrow */}
//               <div className="hero-eyebrow">
//                 <span className="hero-eyebrow-dot" />
//                 <span className="hero-eyebrow-text">{slide.eyebrow}</span>
//               </div>

//               {/* Headline */}
//               <h1 className="hero-headline">
//                 {slide.headline.includes("Child") ? (
//                   <>
//                     Every Child Deserves
//                     <br />
//                     <span>a Future Worth Living</span>
//                   </>
//                 ) : slide.headline.includes("Education") ? (
//                   <>
//                     Education Is the
//                     <br />
//                     <span>Most Powerful Gift</span>
//                   </>
//                 ) : (
//                   <>
//                     Your Generosity
//                     <br />
//                     <span>Plants Seeds of Greatness</span>
//                   </>
//                 )}
//               </h1>

//               {/* Sub */}
//               <p className="hero-sub">{slide.sub}</p>

//               {/* CTAs */}
//               <div className="hero-ctas">
//                 <Link
//                   href={slide.primary.href}
//                   className="btn btn-primary btn-lg"
//                 >
//                   {slide.primary.label}
//                   <RiArrowRightLine style={{ width: "1rem", height: "1rem" }} />
//                 </Link>
//                 <Link
//                   href={slide.secondary.href}
//                   className="btn btn-secondary btn-lg"
//                 >
//                   {slide.secondary.label}
//                 </Link>
//               </div>
//             </div>
//             {/* Trust badge */}
//             <div className="hero-trust">
//               <div className="hero-trust-icon">
//                 <RiHeartFill
//                   style={{
//                     width: ".875rem",
//                     height: ".875rem",
//                     color: "#fff",
//                   }}
//                 />
//               </div>
//               <div>
//                 <p
//                   style={{
//                     fontSize: ".78rem",
//                     fontWeight: 700,
//                     color: "#111827",
//                     margin: 0,
//                     lineHeight: 1.2,
//                   }}
//                 >
//                   Trusted & Government Recognised
//                 </p>
//                 <p
//                   style={{
//                     fontSize: ".72rem",
//                     color: "#6B7280",
//                     margin: "0.15rem 0 0",
//                     lineHeight: 1,
//                   }}
//                 >
//                   Incorporated 2011 · 6 Lagos State Awards
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* ── RIGHT: Photo panel ── */}
//           <div className="hero-photo-panel">
//             <div className="hero-deco-ring" />
//             <div className="hero-deco-ring hero-deco-ring-2" />

//             <div
//               className="hero-photo-frame"
//               style={{ position: "relative", zIndex: 1 }}
//             >
//               {slides.map((s, i) => (
//                 <Image
//                   key={s.photo.src}
//                   src={s.photo.src}
//                   alt={s.photo.alt}
//                   fill
//                   priority={i === 0}
//                   className="grayscale hover:grayscale-0 transition duration-300"
//                   style={{
//                     position: "absolute",
//                     inset: 0,
//                     objectFit: "cover",
//                     objectPosition: "center top",
//                     opacity: i === current ? 1 : 0,
//                     transition: "opacity 0.5s ease",
//                     willChange: "opacity",
//                   }}
//                 />
//               ))}

//               {/* Caption strip */}
//               <div className="hero-photo-caption">
//                 <div
//                   style={{
//                     flex: 1,
//                     background: "rgba(255,255,255,.12)",
//                     backdropFilter: "blur(12px)",
//                     border: "1px solid rgba(255,255,255,.18)",
//                     borderRadius: "10px",
//                     padding: ".5rem .875rem",
//                     display: "flex",
//                     alignItems: "center",
//                     gap: ".4rem",
//                   }}
//                 >
//                   <span
//                     style={{
//                       width: ".4rem",
//                       height: ".4rem",
//                       borderRadius: "50%",
//                       background: "#4ADE80",
//                       flexShrink: 0,
//                     }}
//                   />
//                   <span
//                     style={{
//                       fontSize: ".78rem",
//                       fontWeight: 600,
//                       color: "#fff",
//                     }}
//                   >
//                     {slide.photo.alt}
//                   </span>
//                 </div>
//               </div>

//               {/* Dots */}
//               <div className="hero-dots">
//                 {slides.map((_, i) => (
//                   <button
//                     key={i}
//                     onClick={() => goTo(i)}
//                     style={{
//                       width: i === current ? "1.375rem" : ".375rem",
//                       height: ".375rem",
//                       borderRadius: "999px",
//                       background:
//                         i === current ? "#fff" : "rgba(255,255,255,.4)",
//                       border: "none",
//                       cursor: "pointer",
//                       transition: "all .25s ease",
//                       padding: 0,
//                     }}
//                   />
//                 ))}
//               </div>
//             </div>

//             {/* Floating quote badge */}
//             <div className="hero-badge-quote">
//               <div className="flex items-center gap-0.5">
//                 <RiDoubleQuotesL
//                   style={{
//                     width: "1rem",
//                     height: "1rem",
//                     color: "#0041ff",
//                     marginBottom: ".25rem",
//                   }}
//                 />
//                 <p
//                   style={{
//                     fontSize: ".78rem",
//                     fontWeight: 600,
//                     color: "#111827",
//                     lineHeight: 0.5,
//                     margin: "0.5rem 0 .375rem",
//                   }}
//                 >
//                   To nuture a dream
//                 </p>
//               </div>
//               <p
//                 style={{
//                   fontSize: ".69rem",
//                   color: "#9CA3AF",
//                   margin: 0,
//                   fontWeight: 500,
//                 }}
//               >
//                 — CRA, Surulere Lagos
//               </p>
//             </div>

//             {/* Floating stat badge */}
//             {/* <div className="hero-badge-stat">
//               <div
//                 style={{
//                   width: "2.25rem",
//                   height: "2.25rem",
//                   borderRadius: "8px",
//                   background: "linear-gradient(135deg, #DC2626, #F87171)",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   flexShrink: 0,
//                 }}
//               >
//                 <RiHeartFill
//                   style={{ width: "1rem", height: "1rem", color: "#fff" }}
//                 />
//               </div>
//               <div>
//                 <p
//                   style={{
//                     fontSize: ".9rem",
//                     fontWeight: 800,
//                     color: "#111827",
//                     lineHeight: 1,
//                     margin: 0,
//                     letterSpacing: "-.02em",
//                   }}
//                 >
//                   2,500+
//                 </p>
//                 <p
//                   style={{
//                     fontSize: ".7rem",
//                     color: "#6B7280",
//                     margin: ".15rem 0 0",
//                     fontWeight: 500,
//                   }}
//                 >
//                   Children Supported
//                 </p>
//               </div>
//             </div> */}
//           </div>
//         </div>

//         {/* ── Stats bar ── */}
//         {/* <div className="hero-stats">
//           <div className="container-max">
//             <div className="hero-stats-inner">
//               {stats.map(({ icon: Icon, value, label }) => (
//                 <div key={label} className="hero-stat-item">
//                   <div className="hero-stat-icon">
//                     <Icon
//                       style={{
//                         width: "1rem",
//                         height: "1rem",
//                         color: "#DC2626",
//                       }}
//                     />
//                   </div>
//                   <div>
//                     <div
//                       style={{
//                         fontSize: "1.125rem",
//                         fontWeight: 800,
//                         color: "#111827",
//                         lineHeight: 1,
//                         letterSpacing: "-.03em",
//                       }}
//                     >
//                       {value}
//                     </div>
//                     <div
//                       style={{
//                         fontSize: ".72rem",
//                         color: "#6B7280",
//                         marginTop: ".15rem",
//                         fontWeight: 500,
//                       }}
//                     >
//                       {label}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div> */}
//       </section>
//     </>
//   );
// }
