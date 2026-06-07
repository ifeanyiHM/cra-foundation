"use client";
import Image from "next/image";
import PageHeader from "@/components/shared/PageHeader";
import { useState, useEffect, useCallback } from "react";
import {
  RiMailSendLine,
  RiCloseLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
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
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem",
              marginBottom: "2.5rem",
            }}
          >
            {cats.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActive(cat);
                  setModalIdx(null);
                }}
                style={{
                  padding: "0.5rem 1.125rem",
                  borderRadius: "var(--radius-full)",
                  fontSize: "0.845rem",
                  fontWeight: 600,
                  border: `1.5px solid ${active === cat ? "var(--brand-600)" : "var(--border-default)"}`,
                  background:
                    active === cat ? "var(--brand-600)" : "var(--white)",
                  color: active === cat ? "#fff" : "var(--neutral-600)",
                  cursor: "pointer",
                  transition: "all 0.15s ease",
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
                    <Image
                      src={item.img}
                      alt={item.caption}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      style={{
                        objectFit: "cover",
                        transition: "transform 0.55s ease",
                      }}
                      className="gallery-thumb"
                    />
                    {/* Category badge */}
                    <span
                      className="gallery-badge"
                      style={{ background: bs.bg, color: bs.color }}
                    >
                      {item.cat}
                    </span>
                    {/* Hover overlay */}
                    <div className="gallery-card-overlay">
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
                    </div>
                  </div>
                  <div style={{ padding: "0.875rem 1rem" }}>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        fontWeight: 500,
                        color: "var(--neutral-700)",
                        lineHeight: 1.5,
                      }}
                    >
                      {item.caption}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Submit photos CTA */}
          <div
            style={{
              background: "var(--neutral-50)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "var(--radius-2xl)",
              padding: "3rem",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: "3rem",
                height: "3rem",
                borderRadius: "var(--radius-lg)",
                background: "var(--neutral-100)",
                border: "1px solid var(--border-default)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 1.25rem",
              }}
            >
              <RiMailSendLine
                style={{
                  width: "1.25rem",
                  height: "1.25rem",
                  color: "var(--neutral-500)",
                }}
              />
            </div>
            <h3 style={{ marginBottom: "0.5rem" }}>Have Photos to Share?</h3>
            <p
              style={{
                color: "var(--neutral-500)",
                fontSize: "0.9375rem",
                maxWidth: "28rem",
                margin: "0 auto 1.5rem",
                lineHeight: 1.7,
              }}
            >
              If you&apos;ve attended one of our events or programs, we&apos;d
              love to feature your photos.
            </p>
            <a
              href="mailto:nurtureadream@yahoo.com?subject=Gallery Photo Submission"
              className="btn btn-primary"
            >
              <RiMailSendLine style={{ width: "0.9rem", height: "0.9rem" }} />{" "}
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
            {/* Close */}
            <button
              className="modal-close"
              onClick={closeModal}
              aria-label="Close"
            >
              <RiCloseLine style={{ width: "1.25rem", height: "1.25rem" }} />
            </button>

            {/* Image */}
            <div className="modal-img-wrap">
              <Image
                src={currentItem.img.replace("w=800", "w=1400")}
                alt={currentItem.caption}
                fill
                sizes="(max-width: 768px) 100vw, 80vw"
                style={{ objectFit: "contain" }}
                priority
              />
            </div>

            {/* Footer */}
            <div className="modal-footer">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
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
                  {currentItem.cat}
                </span>
                <p
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    color: "#fff",
                    margin: 0,
                  }}
                >
                  {currentItem.caption}
                </p>
              </div>
              <span
                style={{
                  fontSize: "0.78rem",
                  color: "rgba(255,255,255,0.4)",
                  whiteSpace: "nowrap",
                }}
              >
                {modalIdx + 1} / {filtered.length}
              </span>
            </div>

            {/* Prev / Next */}
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
      `}</style>
    </>
  );
}
