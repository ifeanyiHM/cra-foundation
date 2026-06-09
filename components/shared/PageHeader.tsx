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
    <section
      style={{
        background: dark ? "var(--neutral-950)" : "var(--neutral-50)",
        paddingTop: "8rem",
        paddingBottom: "4rem",
        borderBottom: `1px solid ${dark ? "rgba(255,255,255,0.06)" : "var(--border-subtle)"}`,
      }}
    >
      <div className="container-max">
        <div style={{ maxWidth: "52rem" }}>
          {badge && (
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.375rem",
                marginBottom: "1rem",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  background: "rgba(220,38,38,0.12)",
                  color: "#F87171",
                  fontSize: "0.74rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  padding: "0.3rem 0.75rem",
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
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.7,
                color: dark ? "rgba(255,255,255,0.55)" : "var(--neutral-500)",
                maxWidth: "42rem",
                marginTop: "0.875rem",
              }}
            >
              {description}
            </p>
          )}
          {children && <div style={{ marginTop: "2rem" }}>{children}</div>}
        </div>
      </div>
    </section>
  );
}
