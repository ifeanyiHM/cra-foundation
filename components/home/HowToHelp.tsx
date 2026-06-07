import Image from "next/image";
import Link from "next/link";

const ways = [
  {
    title: "Donate Money",
    desc: "Fund education, meals, health care, and shelter for children in need.",
    href: "/donate",
    tag: "Financial Support",
    image: "/images/help/help1.jpg",
    cta: "Give Now",
    size: "large",
  },
  {
    title: "Sponsor a Child",
    desc: "Provide full yearly support — fees, books, meals, uniform, and health care.",
    href: "/sponsor",
    tag: "Direct Impact",
    image: "/images/help/help2.jpg",
    cta: "Sponsor Today",
    size: "tall",
  },
  {
    title: "Volunteer",
    desc: "Tutor, mentor, photograph, or organize events for the children.",
    href: "/volunteer",
    tag: "Give Your Time",
    image: "/images/help/help3.jpg",
    cta: "Join Us",
    size: "medium",
  },
  {
    title: "Donate Items",
    desc: "Clothes, food, desks, computers, books, toys, and school supplies.",
    href: "/contact",
    tag: "In-Kind Giving",
    image: "/images/help/help4.jpg",
    cta: "Learn More",
    size: "medium",
  },
  {
    title: "Birthday Hero",
    desc: "Mark your special day by sponsoring children instead of gifts.",
    href: "/donate",
    tag: "Celebrate & Give",
    image: "/images/help/help5.jpg",
    cta: "Be a Hero",
    size: "wide",
  },
  {
    title: "Provide Transport",
    desc: "Help us convey children on educational excursions and events.",
    href: "/contact",
    tag: "Logistics",
    image: "/images/help/help6.jpg",
    cta: "Get Involved",
    size: "medium",
  },
];

export default function HowToHelp() {
  return (
    <>
      {" "}
      <style>{`
/* === BENTO GRID === */
.hth-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1rem;
  margin-bottom: 3.5rem;
}

.hth-card:nth-child(1) { grid-column: span 5; grid-row: span 2; }
.hth-card:nth-child(2) { grid-column: span 4; grid-row: span 2; }
.hth-card:nth-child(3) { grid-column: span 3; }
.hth-card:nth-child(4) { grid-column: span 3; }
.hth-card:nth-child(5) { grid-column: span 8; }
.hth-card:nth-child(6) { grid-column: span 4; }

.hth-card {
  position: relative;
  border-radius: var(--radius-xl);
  overflow: hidden;
  cursor: pointer;
  text-decoration: none;
  display: block;
  min-height: 220px;
  background: var(--neutral-900);
}

.hth-card-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  filter: brightness(0.52) saturate(0.75);
}

.hth-card:hover .hth-card-img {
  transform: scale(1.06);
  filter: brightness(0.38) saturate(0.65);
}

/* Blue hover overlay instead of red */
.hth-card::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0,65,255,0.16) 0%,
    transparent 50%
  );
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 1;
}

.hth-card:hover::after {
  opacity: 1;
}

.hth-card-body {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.625rem;
}

/* Tag updated to blue system */
.hth-card-tag {
  display: inline-block;
  font-size: 0.625rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--brand-100);
  border: 1px solid rgba(0,65,255,0.35);
  border-radius: var(--radius-full);
  padding: 0.2rem 0.625rem;
  margin-bottom: 0.625rem;
  background: rgba(0,65,255,0.12);
  width: fit-content;
  backdrop-filter: blur(6px);
}

.hth-card-title {
  font-size: 1.125rem;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin: 0 0 0.4rem;
}

.hth-card:nth-child(1) .hth-card-title,
.hth-card:nth-child(2) .hth-card-title {
  font-size: 1.5rem;
}

.hth-card-desc {
  font-size: 0.8125rem;
  color: rgba(255,255,255,0.5);
  line-height: 1.6;
  margin: 0 0 1rem;
}

.hth-card-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--brand-100);
  transition: gap 0.2s ease, color 0.2s ease;
}

.hth-card-cta::after {
  content: '→';
  transition: transform 0.2s ease;
}

.hth-card:hover .hth-card-cta {
  gap: 0.6rem;
  color: #fff;
}

.hth-card:hover .hth-card-cta::after {
  transform: translateX(3px);
}

.hth-card-num {
  position: absolute;
  top: 1.125rem;
  right: 1.25rem;
  z-index: 2;
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: rgba(255,255,255,0.2);
}

/* === CTA BANNER === */
.hth-banner {
  position: relative;
  border-radius: var(--radius-2xl);
  overflow: hidden;
  padding: 3rem 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
  background: var(--neutral-950);
}

/* Blue glow instead of red */
.hth-banner::before {
  content: '';
  position: absolute;
  width: 600px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(
    ellipse,
    rgba(0,65,255,0.14) 0%,
    transparent 70%
  );
  top: 50%;
  left: 30%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}

/* texture unchanged */
.hth-banner::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: repeating-linear-gradient(
    90deg,
    transparent,
    transparent 60px,
    rgba(255,255,255,0.02) 60px,
    rgba(255,255,255,0.02) 61px
  );
  pointer-events: none;
}

/* Border updated */
.hth-banner-border {
  position: absolute;
  inset: 0;
  border-radius: var(--radius-2xl);
  border: 1px solid rgba(0,65,255,0.22);
  pointer-events: none;
  z-index: 1;
}

.hth-banner-content {
  position: relative;
  z-index: 2;
}

.hth-banner-label {
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--brand-600);
  margin-bottom: 0.625rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.hth-banner-label::before {
  content: '';
  display: block;
  width: 1.5rem;
  height: 1.5px;
  background: var(--brand-600);
  border-radius: 2px;
}

.hth-banner-title {
  font-size: clamp(1.25rem, 2.5vw, 1.75rem);
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 0.5rem;
  line-height: 1.2;
  letter-spacing: -0.025em;
}

.hth-banner-desc {
  font-size: 0.9rem;
  color: rgba(255,255,255,0.45);
  margin: 0;
  max-width: 34rem;
  line-height: 1.7;
}

/* CTA button fully blue */
.hth-banner-cta {
  position: relative;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.875rem;
  background: var(--brand-600);
  color: #fff;
  font-family: var(--font-sans);
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  text-decoration: none;
  border-radius: var(--radius-full);
  white-space: nowrap;
  flex-shrink: 0;
  box-shadow: 0 4px 20px rgba(0,65,255,0.28);
  transition: background 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
}

.hth-banner-cta:hover {
  background: var(--brand-700);
  transform: translateY(-1px);
  box-shadow: 0 6px 24px rgba(0,65,255,0.38);
}

.hth-banner-cta svg {
  width: 1rem;
  height: 1rem;
}

/* Responsive unchanged */
@media (max-width: 900px) {
  .hth-card:nth-child(1) { grid-column: span 12; min-height: 300px; }
  .hth-card:nth-child(2) { grid-column: span 7; }
  .hth-card:nth-child(3) { grid-column: span 5; }
  .hth-card:nth-child(4) { grid-column: span 5; }
  .hth-card:nth-child(5) { grid-column: span 7; }
  .hth-card:nth-child(6) { grid-column: span 12; }
}

@media (max-width: 640px) {
  .hth-grid { grid-template-columns: 1fr 1fr; }
  .hth-card { grid-column: span 2 !important; min-height: 220px; }
  .hth-card:nth-child(3),
  .hth-card:nth-child(4) { grid-column: span 1 !important; }
}
`}</style>
      <section
        className="section-padding"
        style={{
          background: "var(--white)",
          borderTop: "1px solid var(--border-subtle)",
        }}
      >
        <div className="container-max">
          {/* Header */}
          <div style={{ maxWidth: "38rem", marginBottom: "3rem" }}>
            <p className="section-label">Get Involved</p>
            <h2 style={{ margin: "0 0 0.875rem" }}>How You Can Help</h2>
            <p
              style={{
                fontSize: "0.9375rem",
                color: "var(--neutral-500)",
                lineHeight: 1.7,
              }}
            >
              Few things in life are more important than helping needy children.
              There are many ways to make a lasting difference.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="hth-grid">
            {ways.map(({ title, desc, href, tag, image, cta }, i) => (
              <Link key={title} href={href} className="hth-card">
                <Image src={image} alt={title} fill className="hth-card-img" />
                <div className="hth-card-overlay" />
                <span className="hth-card-num">0{i + 1}</span>
                <div className="hth-card-body">
                  <span className="hth-card-tag">{tag}</span>
                  <h3 className="hth-card-title">{title}</h3>
                  <p className="hth-card-desc">{desc}</p>
                  <span className="hth-card-cta">{cta}</span>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="hth-banner">
            <div className="hth-banner-border" />
            <div className="hth-banner-content">
              <div className="hth-banner-label">Something on Your Heart?</div>
              <h3 className="hth-banner-title">
                Have Something Special on Your Heart?
              </h3>
              <p className="hth-banner-desc">
                Call and tell us what The Lord has placed on your mind to do for
                the needy children.
              </p>
            </div>
            <a href="tel:08063811840" className="hth-banner-cta">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 14 19.79 19.79 0 0 1 1.61 5.44 2 2 0 0 1 3.6 3h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.4a16 16 0 0 0 6.29 6.29l1.5-1.5a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Call 08063811840
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
