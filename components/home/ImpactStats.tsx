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
    <section
      style={{
        background: "var(--neutral-50)",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      <div className="container-max" style={{ padding: "4.5rem 1.25rem" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "1rem",
            marginBottom: "3rem",
          }}
        >
          <div>
            <p className="section-label">Our Impact</p>
            <h2 style={{ margin: 0 }}>Numbers That Tell Our Story</h2>
          </div>
          <p
            style={{
              fontSize: "0.9375rem",
              color: "var(--neutral-500)",
              maxWidth: "26rem",
              lineHeight: 1.65,
            }}
          >
            Over 13 years of consistent, measurable service to underprivileged
            children across Lagos State.
          </p>
        </div>

        {/* Stats grid */}
        <div
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
                style={{
                  background: "var(--white)",
                  padding: "2rem 1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.875rem",
                }}
              >
                <div
                  style={{
                    width: "2.25rem",
                    height: "2.25rem",
                    borderRadius: "var(--radius-md)",
                    background: "var(--brand-50)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon
                    style={{
                      width: "1.125rem",
                      height: "1.125rem",
                      color: "var(--brand-600)",
                    }}
                  />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "2rem",
                      fontWeight: 800,
                      color: "var(--neutral-950)",
                      letterSpacing: "-0.04em",
                      lineHeight: 1,
                    }}
                  >
                    <Counter target={stat.number} />
                  </div>
                  <div
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      color: "var(--neutral-700)",
                      marginTop: "0.35rem",
                    }}
                  >
                    {stat.label}
                  </div>
                  {stat.description && (
                    <div
                      style={{
                        fontSize: "0.8rem",
                        color: "var(--neutral-400)",
                        marginTop: "0.2rem",
                      }}
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
  );
}
