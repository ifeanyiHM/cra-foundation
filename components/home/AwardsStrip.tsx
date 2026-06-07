"use client";
import { awards } from "@/data";
import Image from "next/image";
import { useState } from "react";
import {
  RiMedalLine,
  RiExternalLinkLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
} from "react-icons/ri";

export default function AwardsStrip() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      <style>{`
        .award-card {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          transition: transform .25s ease, box-shadow .25s ease;
          background: #fff;
          border: 1px solid rgba(0,0,0,.07);
        }
        .award-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 24px 60px rgba(0,0,0,.14);
        }
        .award-img-wrap {
          position: relative;
          height: 16rem;
          overflow: hidden;
          background: #F3F4F6;
        }
        .award-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          transition: transform .45s ease;
        }
        .award-card:hover .award-img-wrap img {
          transform: scale(1.06);
        }
        .award-year-badge {
          position: absolute;
          top: .75rem;
          left: .75rem;
          padding: .25rem .625rem;
          border-radius: 999px;awards-scroll-track
          font-size: .7rem;
          font-weight: 800;
          letter-spacing: .05em;
          color: #fff;
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,.25);
        }
        .award-label-badge {
          position: absolute;
          top: .75rem;
          right: .75rem;
          width: 2.125rem;
          height: 2.125rem;
          border-radius: 50%;
          background: rgba(255,255,255,.92);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .award-body {
          padding: 1.125rem 1.25rem 0.5rem;
        }
        .award-lightbox {
          position: fixed;
          inset: 0;
          z-index: 200;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          background: rgba(0,0,0,.75);
          backdrop-filter: blur(6px);
          animation: fadeIn .2s ease;
        }
        .award-lightbox-inner {
          background: #fff;
          border-radius: 24px;
          overflow: hidden;
          max-width: 32rem;
          width: 100%;
          box-shadow: 0 40px 100px rgba(0,0,0,.4);
          animation: scaleUp .22s ease;
        }
        @keyframes scaleUp {
          from { transform: scale(.94); opacity: 0; }
          to   { transform: scale(1);   opacity: 1; }
        }
        .awards-scroll-track {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 1.125rem;
        }
        @media (min-width: 1024px) {
          .awards-scroll-track {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (min-width: 1280px) {
          .awards-scroll-track {
            grid-template-columns: repeat(6, 1fr);
            gap: .875rem;
          }
        }
      `}</style>

      <section
        style={{
          background: "var(--neutral-50)",
          borderTop: "1px solid var(--border-subtle)",
          padding: "5rem 0 4rem",
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
              gap: "1.25rem",
              marginBottom: "3rem",
            }}
          >
            <div>
              <p className="section-label">Recognition</p>
              <h2 style={{ margin: "0 0 .625rem" }}>Awards & Laurels</h2>
              <p
                style={{
                  fontSize: ".9375rem",
                  color: "var(--neutral-500)",
                  maxWidth: "34rem",
                  lineHeight: 1.7,
                }}
              >
                Formally recognised by Lagos State Government and educational
                authorities since 2013. Click any award to view it in detail.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: ".5rem",
                padding: ".625rem 1rem",
                background: "#fff",
                border: "1px solid var(--border-subtle)",
                borderRadius: "10px",
              }}
            >
              <RiMedalLine
                style={{
                  width: "1rem",
                  height: "1rem",
                  color: "var(--accent-amber)",
                }}
              />
              <span
                style={{
                  fontSize: ".845rem",
                  fontWeight: 600,
                  color: "var(--neutral-700)",
                }}
              >
                6 Awards Received
              </span>
            </div>
          </div>

          {/* Award cards grid */}
          <div className="awards-scroll-track">
            {awards.map((award, i) => (
              <div
                key={i}
                className="award-card"
                onClick={() => setActive(i)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setActive(i)}
                aria-label={`View ${award.title}`}
              >
                {/* Image */}
                <div className="award-img-wrap">
                  <Image
                    src={award.image || "/images/default-avatar.jpg"}
                    alt={award.title}
                    loading="lazy"
                    fill
                  />
                  {/* Gradient overlay */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: `linear-gradient(to bottom, transparent 40%, ${award?.color?.from}cc 100%)`,
                      pointerEvents: "none",
                    }}
                  />

                  {/* Year badge */}
                  <div
                    className="award-year-badge"
                    style={{
                      background: `linear-gradient(135deg, ${award?.color?.from}, ${award?.color?.to})`,
                    }}
                  >
                    {award.year}
                  </div>

                  {/* Medal icon */}
                  <div className="award-label-badge">
                    <RiMedalLine
                      style={{
                        width: ".95rem",
                        height: ".95rem",
                        color: award?.color?.to,
                      }}
                    />
                  </div>

                  {/* Issuer short name on image */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: ".625rem",
                      left: ".75rem",
                      right: ".75rem",
                      fontSize: ".72rem",
                      fontWeight: 700,
                      color: "rgba(255,255,255,.9)",
                      textShadow: "0 1px 4px rgba(0,0,0,.5)",
                      letterSpacing: ".02em",
                    }}
                  >
                    {award.label}
                  </div>
                </div>

                {/* Body */}
                <div
                  className="award-body"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <p
                    style={{
                      fontSize: ".845rem",
                      fontWeight: 700,
                      color: "var(--neutral-900)",
                      lineHeight: 1.4,
                      /* Reserve exactly 2 lines so short titles don't collapse the space */
                      minHeight: "calc(1.4em * 2)",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {award.title}
                  </p>

                  <p
                    style={{
                      fontSize: ".775rem",
                      color: "var(--neutral-400)",
                      lineHeight: 1.5,
                      /* Reserve exactly 2 lines */
                      minHeight: "calc(1.5em * 2)",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      marginBottom: 0,
                    }}
                  >
                    {award.issuer}
                  </p>

                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: ".3rem",
                      fontSize: ".775rem",
                      fontWeight: 600,
                      color: award?.color?.to,
                    }}
                  >
                    <RiExternalLinkLine
                      style={{ width: ".775rem", height: ".775rem" }}
                    />
                    View Award
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {active !== null && (
        <div className="award-lightbox" onClick={() => setActive(null)}>
          <div
            className="award-lightbox-inner"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Navigation */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: ".875rem 1.25rem",
                borderBottom: "1px solid var(--border-subtle)",
              }}
            >
              <button
                onClick={() =>
                  setActive((active - 1 + awards.length) % awards.length)
                }
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: ".375rem",
                  background: "none",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "8px",
                  padding: ".375rem .625rem",
                  cursor: "pointer",
                  fontSize: ".8rem",
                  fontWeight: 600,
                  color: "var(--neutral-600)",
                }}
              >
                <RiArrowLeftSLine style={{ width: "1rem", height: "1rem" }} />{" "}
                Prev
              </button>
              <span
                style={{
                  fontSize: ".8rem",
                  fontWeight: 600,
                  color: "var(--neutral-400)",
                }}
              >
                {active + 1} of {awards.length}
              </span>
              <button
                onClick={() => setActive((active + 1) % awards.length)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: ".375rem",
                  background: "none",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "8px",
                  padding: ".375rem .625rem",
                  cursor: "pointer",
                  fontSize: ".8rem",
                  fontWeight: 600,
                  color: "var(--neutral-600)",
                }}
              >
                Next{" "}
                <RiArrowRightSLine style={{ width: "1rem", height: "1rem" }} />
              </button>
            </div>

            {/* Award image */}
            <div
              style={{
                height: "22rem",
                overflow: "hidden",
                background: "#F9FAFB",
                position: "relative",
              }}
            >
              <Image
                src={awards[active]?.image || "/images/default-avatar.jpg"}
                alt={awards[active]?.title}
                fill
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  objectPosition: "center",
                  padding: "1rem",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `radial-gradient(ellipse at center, transparent 50%, ${awards[active]?.color?.from}22 100%)`,
                  pointerEvents: "none",
                }}
              />
            </div>

            {/* Details */}
            <div style={{ padding: "1.5rem 1.75rem" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: ".375rem",
                  padding: ".25rem .625rem",
                  borderRadius: "999px",
                  background: `linear-gradient(135deg, ${awards[active]?.color?.from}, ${awards[active]?.color?.to})`,
                  marginBottom: ".875rem",
                }}
              >
                <RiMedalLine
                  style={{ width: ".75rem", height: ".75rem", color: "#fff" }}
                />
                <span
                  style={{
                    fontSize: ".7rem",
                    fontWeight: 800,
                    color: "#fff",
                    letterSpacing: ".05em",
                  }}
                >
                  {awards[active]?.year}
                </span>
              </div>
              <h3
                style={{
                  fontSize: "1.125rem",
                  fontWeight: 700,
                  color: "var(--neutral-900)",
                  marginBottom: ".5rem",
                  lineHeight: 1.35,
                }}
              >
                {awards[active]?.title}
              </h3>
              <p
                style={{
                  fontSize: ".9rem",
                  color: "var(--neutral-500)",
                  lineHeight: 1.65,
                }}
              >
                {awards[active]?.issuer}
              </p>
              <div
                style={{
                  marginTop: "1.25rem",
                  display: "flex",
                  gap: ".625rem",
                }}
              >
                <button
                  onClick={() => setActive(null)}
                  style={{
                    flex: 1,
                    padding: ".625rem",
                    background: "var(--neutral-100)",
                    border: "none",
                    borderRadius: "10px",
                    fontSize: ".875rem",
                    fontWeight: 600,
                    color: "var(--neutral-700)",
                    cursor: "pointer",
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
