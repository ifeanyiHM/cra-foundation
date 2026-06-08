"use client";

import { useEffect, useState } from "react";
import { RiArrowUpLine } from "react-icons/ri";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setVisible(scrollY > 400);
      setProgress(docHeight > 0 ? (scrollY / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const size = 48;
  const strokeW = 2.5;
  const radius = (size - strokeW) / 2;
  const circumference = 2 * Math.PI * radius;
  const dash = (progress / 100) * circumference;

  return (
    <>
      <style>{`
        .stt-btn {
          position: fixed;
          bottom: 1.75rem;
          right: 1.75rem;
          z-index: 50;
          width: ${size}px;
          height: ${size}px;
          cursor: pointer;
          background: none;
          border: none;
          padding: 0;
          transition: opacity .3s ease, transform .3s ease;
        }
        .stt-btn.hidden-btn {
          opacity: 0;
          transform: translateY(12px) scale(.9);
          pointer-events: none;
        }
        .stt-btn.visible-btn {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .stt-inner {
          position: absolute;
          inset: 4px;
          border-radius: 50%;
          background: var(--neutral-950);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background .2s ease;
        }
        .stt-btn:hover .stt-inner {
          background: var(--brand-600);
        }
        .stt-btn:hover .stt-arrow {
          transform: translateY(-2px);
        }

        .stt-arrow {
          width: 1rem;
          height: 1rem;
          color: #fff;
          transition: transform .2s ease;
          flex-shrink: 0;
        }

        .stt-ring-track {
          stroke: rgba(255,255,255,0.08);
          fill: none;
        }
        .stt-ring-fill {
          fill: none;
          stroke: var(--brand-600);
          stroke-linecap: round;
          transition: stroke-dashoffset .15s linear;
          transform-origin: center;
          transform: rotate(-90deg);
        }
      `}</style>

      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`stt-btn ${visible ? "visible-btn" : "hidden-btn"}`}
      >
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          style={{ position: "absolute", inset: 0 }}
        >
          <circle
            className="stt-ring-track"
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={strokeW}
          />
          <circle
            className="stt-ring-fill"
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={strokeW}
            strokeDasharray={`${dash} ${circumference - dash}`}
            strokeDashoffset={0}
          />
        </svg>

        <div className="stt-inner">
          <RiArrowUpLine className="stt-arrow" />
        </div>
      </button>
    </>
  );
}
