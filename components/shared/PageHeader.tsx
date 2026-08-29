import { ReactNode } from "react";

interface PageHeaderProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  dark?: boolean;
  children?: ReactNode;
}

export default function PageHeader({
  badge,
  title,
  highlight,
  description,
  dark = true,
  children,
}: PageHeaderProps) {
  return (
    <>
      <style>{`
        .ph-outer { padding-top: 8rem; padding-bottom: 4rem; }
        .ph-inner { max-width: 52rem; }
        .ph-badge { font-size: .74rem; padding: .3rem .75rem; margin-bottom: 1rem; }
        .ph-desc { font-size: 1.0625rem; max-width: 42rem; margin-top: .875rem; }
        .ph-children { margin-top: 2rem; }

        @media (min-width: 1440px) {
          .ph-outer { padding-top: 8.75rem; padding-bottom: 4.5rem; }
          .ph-inner { max-width: 56rem; }
          .ph-badge { font-size: .78rem; padding: .325rem .8rem; margin-bottom: 1.075rem; }
          .ph-desc { font-size: 1.13rem; max-width: 44rem; margin-top: .925rem; }
          .ph-children { margin-top: 2.125rem; }
        }

        @media (min-width: 1536px) {
          .ph-outer { padding-top: 9rem; padding-bottom: 5.25rem; }
          .ph-inner { max-width: 62rem; }
          .ph-badge { font-size: .86rem; padding: .375rem .9rem; margin-bottom: 1.2rem; }
          .ph-desc { font-size: 1.2rem; max-width: 47rem; margin-top: 1.075rem; }
          .ph-children { margin-top: 2.375rem; }
        }

        @media (min-width: 1680px) {
          .ph-outer { padding-top: 9rem; padding-bottom: 5.75rem; }
          .ph-inner { max-width: 68rem; }
          .ph-badge { font-size: .94rem; padding: .4rem 1rem; margin-bottom: 1.325rem; }
          .ph-desc { font-size: 1.35rem; max-width: 50rem; margin-top: 1.175rem; }
          .ph-children { margin-top: 2.625rem; }
        }

        @media (min-width: 1920px) {
          .ph-outer { padding-top: 10rem; padding-bottom: 7rem; }
          .ph-inner { max-width: 80rem; }
          .ph-badge { font-size: 1.1rem; padding: .475rem 1.2rem; margin-bottom: 1.625rem; }
          .ph-desc { font-size: 1.55rem; max-width: 60rem; margin-top: 1.375rem; line-height: 1.65; }
          .ph-children { margin-top: 3rem; }
        }
      `}</style>

      <section
        className="ph-outer"
        style={{
          background: dark ? "var(--neutral-950)" : "var(--neutral-50)",
          borderBottom: `1px solid ${dark ? "rgba(255,255,255,0.06)" : "var(--border-subtle)"}`,
        }}
      >
        <div className="container-max">
          <div className="ph-inner">
            {badge && (
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: ".375rem",
                }}
              >
                <span
                  className="ph-badge"
                  style={{
                    display: "inline-block",
                    background: "rgba(220,38,38,0.12)",
                    color: "#F87171",
                    fontWeight: 700,
                    letterSpacing: ".08em",
                    textTransform: "uppercase",
                    borderRadius: "999px",
                    border: "1px solid rgba(220,38,38,0.2)",
                  }}
                >
                  {badge}
                </span>
              </div>
            )}
            <h1
              style={{
                color: dark ? "#fff" : "var(--neutral-950)",
                marginBottom: description ? "1rem" : 0,
              }}
            >
              {title}{" "}
              {highlight && (
                <span style={{ color: "var(--brand-600)" }}>{highlight}</span>
              )}
            </h1>
            {description && (
              <p
                className="ph-desc"
                style={{
                  lineHeight: 1.7,
                  color: dark ? "rgba(255,255,255,0.55)" : "var(--neutral-500)",
                }}
              >
                {description}
              </p>
            )}
            {children && <div className="ph-children">{children}</div>}
          </div>
        </div>
      </section>
    </>
  );
}
