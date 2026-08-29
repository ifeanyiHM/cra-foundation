"use client";
import Image from "next/image";
import PageHeader from "@/components/shared/PageHeader";
import { useState, useEffect, useCallback } from "react";
import {
  RiMailSendLine,
  RiCloseLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiPlayFill,
} from "react-icons/ri";
import { gallery } from "@/data";

const cats = [
  "All",
  "Events",
  "Programs",
  "Games",
  "Meals",
  "Skills",
  "Excursions",
  "Learning",
];

const catBadge: Record<string, { bg: string; color: string }> = {
  Events: { bg: "var(--brand-50)", color: "var(--brand-600)" },
  Programs: { bg: "var(--accent-blue-50)", color: "var(--accent-blue-600)" },
  Games: { bg: "var(--accent-green-50)", color: "var(--accent-green-600)" },
  Meals: { bg: "var(--accent-amber-50)", color: "var(--accent-amber)" },
  Skills: { bg: "var(--accent-teal-50)", color: "var(--accent-teal-600)" },
  Learning: {
    bg: "var(--accent-green-50)",
    color: "var(--accent-green-600)",
  },
  Excursions: {
    bg: "var(--accent-violet-50)",
    color: "var(--accent-violet-600)",
  },
};

export default function GalleryPage() {
  const [active, setActive] = useState("All");
  const [modalIdx, setModalIdx] = useState<number | null>(null);

  const filtered =
    active === "All" ? gallery : gallery.filter((i) => i.cat === active);

  const openModal = (idx: number) => setModalIdx(idx);
  const closeModal = useCallback(() => setModalIdx(null), []);

  const prev = useCallback(
    () =>
      setModalIdx((i) =>
        i !== null ? (i - 1 + filtered.length) % filtered.length : null,
      ),
    [filtered.length],
  );
  const next = useCallback(
    () => setModalIdx((i) => (i !== null ? (i + 1) % filtered.length : null)),
    [filtered.length],
  );

  useEffect(() => {
    if (modalIdx === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [modalIdx, closeModal, prev, next]);

  const currentItem = modalIdx !== null ? filtered[modalIdx] : null;
  const s = currentItem
    ? catBadge[currentItem.cat] || {
        bg: "var(--neutral-100)",
        color: "var(--neutral-600)",
      }
    : null;

  const isVideo = (src: string) => /\.(mp4|webm|ogg|mov)$/i.test(src);

  return (
    <>
      <PageHeader
        badge="Photo Gallery"
        title="Our Work in"
        highlight="Pictures"
        description="A glimpse into the lives we touch and the moments that define our mission."
      />

      <section
        className="section-padding"
        style={{ background: "var(--white)" }}
      >
        <div className="container-max">
          {/* Filter tabs */}
          <div
            className="gal-filter-row"
            style={{ display: "flex", flexWrap: "wrap" }}
          >
            {cats.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActive(cat);
                  setModalIdx(null);
                }}
                className="gal-filter-btn"
                style={{
                  borderRadius: "var(--radius-full)",
                  fontWeight: 600,
                  border: `1.5px solid ${active === cat ? "var(--brand-600)" : "var(--border-default)"}`,
                  background:
                    active === cat ? "var(--brand-600)" : "var(--white)",
                  color: active === cat ? "#fff" : "var(--neutral-600)",
                  cursor: "pointer",
                  transition: "all .15s ease",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="gallery-grid" style={{ marginBottom: "3rem" }}>
            {filtered.map((item, idx) => {
              const bs = catBadge[item.cat] || {
                bg: "var(--neutral-100)",
                color: "var(--neutral-600)",
              };
              return (
                <div
                  key={item.id}
                  className="gallery-card card card-hover"
                  onClick={() => openModal(idx)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View: ${item.caption}`}
                  onKeyDown={(e) => e.key === "Enter" && openModal(idx)}
                >
                  <div className="gallery-card-img">
                    {isVideo(item.src) ? (
                      <>
                        <video
                          src={item.src}
                          muted
                          autoPlay
                          playsInline
                          loop
                          style={{
                            position: "absolute",
                            inset: 0,
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            transition: "transform .55s ease",
                          }}
                          className="gallery-thumb"
                        />
                        <div className="gallery-video-badge">
                          <RiPlayFill
                            style={{ width: ".7rem", height: ".7rem" }}
                          />
                          Video
                        </div>
                      </>
                    ) : (
                      <Image
                        src={item.src}
                        alt={item.caption}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        style={{
                          objectFit: "cover",
                          transition: "transform .55s ease",
                        }}
                        className="gallery-thumb"
                      />
                    )}
                    <span
                      className="gallery-badge"
                      style={{ background: bs.bg, color: bs.color }}
                    >
                      {item.cat}
                    </span>
                    <div className="gallery-card-overlay">
                      {isVideo(item.src) ? (
                        <RiPlayFill
                          style={{
                            width: "2rem",
                            height: "2rem",
                            color: "#fff",
                          }}
                        />
                      ) : (
                        <svg
                          width="28"
                          height="28"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{ color: "#fff" }}
                        >
                          <circle cx="11" cy="11" r="8" />
                          <line x1="21" y1="21" x2="16.65" y2="16.65" />
                          <line x1="11" y1="8" x2="11" y2="14" />
                          <line x1="8" y1="11" x2="14" y2="11" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <div
                    className="gal-card-caption"
                    style={{
                      fontWeight: 500,
                      color: "var(--neutral-700)",
                      lineHeight: 1.5,
                    }}
                  >
                    {item.caption}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Submit photos CTA */}
          <div
            className="gal-submit-pad"
            style={{
              background: "var(--neutral-50)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "var(--radius-2xl)",
              textAlign: "center",
            }}
          >
            <div
              className="gal-submit-icon"
              style={{
                borderRadius: "var(--radius-lg)",
                background: "var(--neutral-100)",
                border: "1px solid var(--border-default)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <RiMailSendLine
                className="gal-submit-icon-svg"
                style={{ color: "var(--neutral-500)" }}
              />
            </div>
            <h3 className="gal-submit-title">Have Photos to Share?</h3>
            <p
              className="gal-submit-sub"
              style={{ color: "var(--neutral-500)", lineHeight: 1.7 }}
            >
              If you&apos;ve attended one of our events or programs, we&apos;d
              love to feature your photos.
            </p>
            <a
              href="mailto:nurtureadream@yahoo.com?subject=Gallery Photo Submission"
              className="btn btn-primary"
            >
              <RiMailSendLine style={{ width: ".9rem", height: ".9rem" }} />{" "}
              Send Us Your Photos
            </a>
          </div>
        </div>
      </section>

      {/* ── Lightbox Modal ─────────────────────────────────────── */}
      {modalIdx !== null && currentItem && s && (
        <div
          className="modal-backdrop"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label={currentItem.caption}
        >
          <div className="modal-inner" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={closeModal}
              aria-label="Close"
            >
              <RiCloseLine style={{ width: "1.25rem", height: "1.25rem" }} />
            </button>

            <div className="modal-img-wrap">
              {isVideo(currentItem.src) ? (
                <video
                  key={currentItem.src}
                  src={currentItem.src}
                  muted
                  autoPlay
                  playsInline
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    background: "#000",
                  }}
                />
              ) : (
                <Image
                  src={currentItem.src.replace("w=800", "w=1400")}
                  alt={currentItem.caption}
                  fill
                  sizes="(max-width: 768px) 100vw, 80vw"
                  style={{ objectFit: "contain" }}
                  priority
                />
              )}
            </div>

            <div className="modal-footer">
              <div
                style={{ display: "flex", alignItems: "center", gap: ".75rem" }}
              >
                <span
                  className="modal-footer-cat"
                  style={{
                    borderRadius: "999px",
                    fontWeight: 700,
                    background: s.bg,
                    color: s.color,
                  }}
                >
                  {currentItem.cat}
                </span>
                <p
                  className="modal-footer-caption"
                  style={{ fontWeight: 500, color: "#fff", margin: 0 }}
                >
                  {currentItem.caption}
                </p>
              </div>
              <span
                className="modal-footer-counter"
                style={{ color: "rgba(255,255,255,.4)", whiteSpace: "nowrap" }}
              >
                {modalIdx + 1} / {filtered.length}
              </span>
            </div>

            <button
              className="modal-nav modal-nav-prev"
              onClick={prev}
              aria-label="Previous"
            >
              <RiArrowLeftSLine style={{ width: "1.5rem", height: "1.5rem" }} />
            </button>
            <button
              className="modal-nav modal-nav-next"
              onClick={next}
              aria-label="Next"
            >
              <RiArrowRightSLine
                style={{ width: "1.5rem", height: "1.5rem" }}
              />
            </button>
          </div>
        </div>
      )}

      <style>{`
        /* Grid */
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 1rem;
        }

        .gallery-card {
          overflow: hidden;
          cursor: pointer;
          outline: none;
        }
        .gallery-card:focus-visible {
          box-shadow: 0 0 0 3px var(--brand-600);
        }

        .gallery-card-img {
          position: relative;
          height: 11rem;
          overflow: hidden;
          background: var(--neutral-100);
        }

        .gallery-card:hover .gallery-thumb {
          transform: scale(1.07) !important;
        }

        .gallery-badge {
          position: absolute;
          top: 0.625rem;
          left: 0.625rem;
          z-index: 2;
          padding: 0.18rem 0.55rem;
          border-radius: 999px;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.04em;
        }

        .gallery-card-overlay {
          position: absolute;
          inset: 0;
          background: rgba(11,14,19,0.45);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.2s ease;
          z-index: 1;
        }

        .gallery-card:hover .gallery-card-overlay {
          opacity: 1;
        }

        /* Lightbox */
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(7, 9, 12, 0.92);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          animation: fadeIn 0.18s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0 }
          to   { opacity: 1 }
        }

        .modal-inner {
          position: relative;
          width: 100%;
          max-width: 900px;
          background: #111827;
          border-radius: var(--radius-2xl);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 32px 64px rgba(0,0,0,0.6);
          animation: scaleIn 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.93) }
          to   { opacity: 1; transform: scale(1) }
        }

        .modal-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          background: #0b0e13;
          flex-shrink: 0;
        }

        @media (max-width: 640px) {
          .modal-img-wrap { aspect-ratio: 1 / 1; }
        }

        .modal-footer {
          padding: 1rem 1.25rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          background: #111827;
          border-top: 1px solid rgba(255,255,255,0.07);
          flex-wrap: wrap;
        }

        .modal-close {
          position: absolute;
          top: 0.875rem;
          right: 0.875rem;
          z-index: 10;
          width: 2.25rem;
          height: 2.25rem;
          border-radius: 50%;
          background: rgba(11,14,19,0.7);
          border: 1px solid rgba(255,255,255,0.12);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          backdrop-filter: blur(8px);
          transition: background 0.15s;
        }
        .modal-close:hover { background: rgba(11,14,19,0.95); }

        .modal-nav {
          position: absolute;
          top: 50%;
          transform: translateY(calc(-50% - 1.5rem));
          z-index: 10;
          width: 2.75rem;
          height: 2.75rem;
          border-radius: 50%;
          background: rgba(11,14,19,0.65);
          border: 1px solid rgba(255,255,255,0.12);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          backdrop-filter: blur(8px);
          transition: background 0.15s, transform 0.15s;
        }
        .modal-nav:hover { background: rgba(11,14,19,0.92); }
        .modal-nav:active { transform: translateY(calc(-50% - 1.5rem)) scale(0.93); }
        .modal-nav-prev { left: 0.875rem; }
        .modal-nav-next { right: 0.875rem; }

        @media (max-width: 640px) {
          .modal-nav { width: 2.25rem; height: 2.25rem; }
          .modal-nav-prev { left: 0.5rem; }
          .modal-nav-next { right: 0.5rem; }
        }

        /* === RESPONSIVE SCALE > 1280px === */

          /* Filter tabs */
          .gal-filter-row { gap: .5rem; margin-bottom: 2.5rem; }
          .gal-filter-btn { padding: .5rem 1.125rem; font-size: .845rem; }

          /* Grid */
          .gallery-grid { gap: 1rem; }
          .gallery-card-img { height: 11rem; }
          .gallery-badge { font-size: .68rem; padding: .18rem .55rem; top: .625rem; left: .625rem; }
          .gal-card-caption { font-size: .875rem; padding: .875rem 1rem; }

          /* Submit CTA */
          .gal-submit-pad { padding: 3rem; }
          .gal-submit-icon { width: 3rem; height: 3rem; margin: 0 auto 1.25rem; }
          .gal-submit-icon-svg { width: 1.25rem; height: 1.25rem; }
          .gal-submit-title { margin-bottom: .5rem; }
          .gal-submit-sub { font-size: .9375rem; max-width: 28rem; margin: 0 auto 1.5rem; }

          /* Modal */
          .modal-inner { max-width: 900px; }
          .modal-footer { padding: 1rem 1.25rem; gap: 1rem; }
          .modal-footer-cat { font-size: .72rem; padding: .2rem .6rem; }
          .modal-footer-caption { font-size: .9rem; }
          .modal-footer-counter { font-size: .78rem; }
          .modal-close { width: 2.25rem; height: 2.25rem; top: .875rem; right: .875rem; }
          .modal-nav { width: 2.75rem; height: 2.75rem; }
          .modal-nav-prev { left: .875rem; }
          .modal-nav-next { right: .875rem; }

          .gallery-video-badge {
            position: absolute;
            bottom: .625rem;
            right: .625rem;
            z-index: 2;
            display: inline-flex;
            align-items: center;
            gap: .3rem;
            padding: .2rem .55rem;
            border-radius: 999px;
            font-size: .68rem;
            font-weight: 700;
            background: rgba(0,0,0,.55);
            color: #fff;
            backdrop-filter: blur(6px);
          }

          @media (min-width: 1440px) {
            .gal-filter-row { gap: .55rem; margin-bottom: 2.75rem; }
            .gal-filter-btn { padding: .525rem 1.2rem; font-size: .875rem; }

            .gallery-grid { gap: 1.125rem; }
            .gallery-card-img { height: 11.75rem; }
            .gallery-badge { font-size: .7rem; padding: .2rem .575rem; }
            .gal-card-caption { font-size: .9rem; padding: .925rem 1.05rem; }

            .gal-submit-pad { padding: 3.25rem; }
            .gal-submit-icon { width: 3.125rem; height: 3.125rem; margin: 0 auto 1.325rem; }
            .gal-submit-icon-svg { width: 1.3rem; height: 1.3rem; }
            .gal-submit-sub { font-size: .975rem; max-width: 30rem; margin: 0 auto 1.625rem; }

            .modal-inner { max-width: 980px; }
            .modal-footer { padding: 1.075rem 1.325rem; }
            .modal-footer-cat { font-size: .74rem; }
            .modal-footer-caption { font-size: .925rem; }
            .modal-footer-counter { font-size: .8rem; }
            .modal-close { width: 2.375rem; height: 2.375rem; }
            .modal-nav { width: 2.875rem; height: 2.875rem; }
          }

          @media (min-width: 1536px) {
            .gal-filter-row { gap: .625rem; margin-bottom: 3.125rem; }
            .gal-filter-btn { padding: .6rem 1.325rem; font-size: .975rem; }

            .gallery-grid { gap: 1.25rem; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); }
            .gallery-card-img { height: 13rem; }
            .gallery-badge { font-size: .76rem; padding: .225rem .65rem; top: .7rem; left: .7rem; }
            .gal-card-caption { font-size: 1rem; padding: 1.05rem 1.175rem; }

            .gal-submit-pad { padding: 3.75rem; }
            .gal-submit-icon { width: 3.5rem; height: 3.5rem; margin: 0 auto 1.5rem; }
            .gal-submit-icon-svg { width: 1.5rem; height: 1.5rem; }
            .gal-submit-sub { font-size: 1.075rem; max-width: 34rem; margin: 0 auto 1.875rem; }

            .modal-inner { max-width: 1080px; }
            .modal-footer { padding: 1.2rem 1.5rem; gap: 1.125rem; }
            .modal-footer-cat { font-size: .84rem; padding: .225rem .7rem; }
            .modal-footer-caption { font-size: 1.05rem; }
            .modal-footer-counter { font-size: .9rem; }
            .modal-close { width: 2.625rem; height: 2.625rem; top: 1rem; right: 1rem; }
            .modal-nav { width: 3.125rem; height: 3.125rem; }
            .modal-nav-prev { left: 1rem; }
            .modal-nav-next { right: 1rem; }
          }

          @media (min-width: 1680px) {
            .gal-filter-row { gap: .7rem; margin-bottom: 3.5rem; }
            .gal-filter-btn { padding: .65rem 1.45rem; font-size: 1.05rem; }

            .gallery-grid { gap: 1.375rem; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); }
            .gallery-card-img { height: 14.5rem; }
            .gallery-badge { font-size: .82rem; padding: .25rem .7rem; top: .775rem; left: .775rem; }
            .gal-card-caption { font-size: 1.1rem; padding: 1.15rem 1.3rem; }

            .gal-submit-pad { padding: 4.25rem; }
            .gal-submit-icon { width: 3.875rem; height: 3.875rem; margin: 0 auto 1.625rem; }
            .gal-submit-icon-svg { width: 1.65rem; height: 1.65rem; }
            .gal-submit-sub { font-size: 1.175rem; max-width: 38rem; margin: 0 auto 2.125rem; }

            .modal-inner { max-width: 1180px; }
            .modal-footer { padding: 1.35rem 1.75rem; gap: 1.25rem; }
            .modal-footer-cat { font-size: .92rem; padding: .25rem .775rem; }
            .modal-footer-caption { font-size: 1.15rem; }
            .modal-footer-counter { font-size: .975rem; }
            .modal-close { width: 2.875rem; height: 2.875rem; top: 1.125rem; right: 1.125rem; }
            .modal-nav { width: 3.375rem; height: 3.375rem; }
            .modal-nav-prev { left: 1.125rem; }
            .modal-nav-next { right: 1.125rem; }
          }

          @media (min-width: 1920px) {
            .gal-filter-row { gap: .875rem; margin-bottom: 4rem; }
            .gal-filter-btn { padding: .75rem 1.675rem; font-size: 1.225rem; }

            .gallery-grid { gap: 1.625rem; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); }
            .gallery-card-img { height: 17rem; }
            .gallery-badge { font-size: .96rem; padding: .3rem .825rem; top: .9rem; left: .9rem; }
            .gal-card-caption { font-size: 1.275rem; padding: 1.375rem 1.5rem; }

            .gal-submit-pad { padding: 5rem; }
            .gal-submit-icon { width: 4.5rem; height: 4.5rem; margin: 0 auto 1.875rem; }
            .gal-submit-icon-svg { width: 1.875rem; height: 1.875rem; }
            .gal-submit-sub { font-size: 1.35rem; max-width: 44rem; margin: 0 auto 2.5rem; }

            .modal-inner { max-width: 1400px; }
            .modal-footer { padding: 1.625rem 2.125rem; gap: 1.5rem; }
            .modal-footer-cat { font-size: 1.075rem; padding: .3rem .9rem; }
            .modal-footer-caption { font-size: 1.35rem; }
            .modal-footer-counter { font-size: 1.125rem; }
            .modal-close { width: 3.375rem; height: 3.375rem; top: 1.375rem; right: 1.375rem; }
            .modal-nav { width: 3.875rem; height: 3.875rem; }
            .modal-nav-prev { left: 1.375rem; }
            .modal-nav-next { right: 1.375rem; }
          }
      `}</style>
    </>
  );
}
