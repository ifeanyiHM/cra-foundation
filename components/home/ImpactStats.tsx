"use client";
import { impactStats } from "@/data";
import { useEffect, useRef, useState } from "react";
import {
  RiGroupLine,
  RiTimeLine,
  RiMapPin2Line,
  RiMedalLine,
  RiBookOpenLine,
  RiTeamLine,
} from "react-icons/ri";

const icons = [
  RiGroupLine,
  RiTimeLine,
  RiMapPin2Line,
  RiMedalLine,
  RiBookOpenLine,
  RiTeamLine,
];

function Counter({ target }: { target: string }) {
  const [val, setVal] = useState("0");
  const ref = useRef<HTMLDivElement>(null);
  const done = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !done.current) {
          done.current = true;
          const match = target.match(/[\d,]+/);
          if (!match) {
            setVal(target);
            return;
          }
          const num = parseInt(match[0].replace(",", ""));
          const suffix = target.slice(match.index! + match[0].length);
          const prefix = target.slice(0, match.index);
          let n = 0;
          const step = Math.max(1, Math.ceil(num / 55));
          const t = setInterval(() => {
            n = Math.min(n + step, num);
            setVal(prefix + n.toLocaleString() + suffix);
            if (n >= num) clearInterval(t);
          }, 28);
        }
      },
      { threshold: 0.4 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);

  return <div ref={ref}>{val}</div>;
}

export default function ImpactStats() {
  return (
    <>
      <style>{`
  .impact-section-padding { padding: 4.5rem 0; }
  .impact-header { margin-bottom: 3rem; }
  .impact-header-sub { font-size: .9375rem; max-width: 26rem; }
  .impact-grid{ margin: 0 1.25rem;}
  .impact-stat-number { font-size: 2rem; }
  .impact-stat-label { font-size: .875rem; margin-top: .35rem; }
  .impact-stat-desc { font-size: .8rem; margin-top: .2rem; }
  .impact-stat-icon { width: 2.25rem; height: 2.25rem; }
  .impact-stat-icon-svg { width: 1.125rem; height: 1.125rem; }
  .impact-stat-cell { padding: 2rem 1.5rem; gap: .875rem; }

  @media (min-width: 1440px) {
    .impact-section-padding { padding: 5rem 0; }
    .impact-header { margin-bottom: 3.25rem; }
    .impact-header-sub { font-size: .975rem; max-width: 28rem; }
    .impact-grid{ margin: 0 1.25rem;}
    .impact-stat-number { font-size: 2.2rem; }
    .impact-stat-label { font-size: .9rem; margin-top: .375rem; }
    .impact-stat-desc { font-size: .825rem; }
    .impact-stat-icon { width: 2.375rem; height: 2.375rem; }
    .impact-stat-icon-svg { width: 1.175rem; height: 1.175rem; }
    .impact-stat-cell { padding: 2.125rem 1.625rem; gap: .9rem; }
  }

  @media (min-width: 1536px) {
    .impact-section-padding { padding: 5.5rem 0; }
    .impact-header { margin-bottom: 3.5rem; }
    .impact-header-sub { font-size: 1.055rem; max-width: 30rem; }
    .impact-grid{ margin: 0 1.5rem;}
    .impact-stat-number { font-size: 2.4rem; }
    .impact-stat-label { font-size: .95rem; margin-top: .4rem; }
    .impact-stat-desc { font-size: .875rem; }
    .impact-stat-icon { width: 2.5rem; height: 2.5rem; }
    .impact-stat-icon-svg { width: 1.225rem; height: 1.225rem; }
    .impact-stat-cell { padding: 2.25rem 1.75rem; gap: .975rem; }
  }

  @media (min-width: 1680px) {
    .impact-section-padding { padding: 6rem 0; }
    .impact-header { margin-bottom: 3.75rem; }
    .impact-header-sub { font-size: 1.15rem; max-width: 32rem; }
    .impact-grid{ margin: 0 2rem;}
    .impact-stat-number { font-size: 2.65rem; }
    .impact-stat-label { font-size: 1.1rem; margin-top: .425rem; }
    .impact-stat-desc { font-size: 1rem; }
    .impact-stat-icon { width: 2.625rem; height: 2.625rem; }
    .impact-stat-icon-svg { width: 1.3rem; height: 1.3rem; }
    .impact-stat-cell { padding: 2.375rem 1.875rem; gap: 1rem; }
  }

  @media (min-width: 1920px) {
    .impact-section-padding { padding: 7rem 0; }
    .impact-header { margin-bottom: 4.25rem; }
    .impact-header-sub { font-size: 1.35rem; max-width: 36rem; }
    .impact-stat-number { font-size: 3rem; }
    .impact-stat-label { font-size: 1.25rem; margin-top: .5rem; }
    .impact-stat-desc { font-size: 1.15rem; }
    .impact-stat-icon { width: 2.875rem; height: 2.875rem; }
    .impact-stat-icon-svg { width: 1.425rem; height: 1.425rem; }
    .impact-stat-cell { padding: 2.625rem 2.125rem; gap: 1.125rem; }
  }
`}</style>
      <section
        style={{
          background: "var(--neutral-50)",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        <div className="impact-section-padding">
          {/* header */}
          <div
            className="container-max impact-header"
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: "1rem",
            }}
          >
            <div>
              <p className="section-label">Our Impact</p>
              <h2 style={{ margin: 0 }}>Numbers That Tell Our Story</h2>
            </div>
            <p
              className="impact-header-sub"
              style={{
                color: "var(--neutral-500)",
                lineHeight: 1.65,
              }}
            >
              Over 13 years of consistent, measurable service to underprivileged
              children across Lagos State.
            </p>
          </div>

          {/* Stats grid */}
          <div
            className="impact-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: "1px",
              background: "var(--border-subtle)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "var(--radius-xl)",
              overflow: "hidden",
            }}
          >
            {impactStats.map((stat, i) => {
              const Icon = icons[i] || RiGroupLine;
              return (
                <div
                  key={i}
                  className="impact-stat-cell"
                  style={{
                    background: "var(--white)",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    className="impact-stat-icon"
                    style={{
                      borderRadius: "var(--radius-md)",
                      background: "var(--brand-50)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon
                      className="impact-stat-icon-svg"
                      style={{ color: "var(--brand-600)" }}
                    />
                  </div>
                  <div>
                    <div
                      className="impact-stat-number"
                      style={{
                        fontWeight: 800,
                        color: "var(--neutral-950)",
                        letterSpacing: "-0.04em",
                        lineHeight: 1,
                      }}
                    >
                      <Counter target={stat.number} />
                    </div>
                    <div
                      className="impact-stat-label"
                      style={{ fontWeight: 600, color: "var(--neutral-700)" }}
                    >
                      {stat.label}
                    </div>
                    {stat.description && (
                      <div
                        className="impact-stat-desc"
                        style={{ color: "var(--neutral-400)" }}
                      >
                        {stat.description}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
