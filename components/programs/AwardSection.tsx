import { Award } from "@/types";
import { RiMedalLine } from "react-icons/ri";

interface AwardsSectionProps {
  awards: Award[];
  id?: string;
  title?: string;
  subtitle?: string;
}

export default function AwardsSection({
  awards,
  id = "awards",
  title = "Government Awards & Laurels",
  subtitle = "Recognition",
}: AwardsSectionProps) {
  return (
    <section
      id={id}
      style={{ background: "var(--neutral-950)", padding: "4rem 0" }}
    >
      <div className="container-max">
        <p
          style={{
            display: "inline-flex",
            fontSize: "0.74rem",
            fontWeight: 700,
            letterSpacing: "0.09em",
            textTransform: "uppercase",
            color: "var(--brand-600)",
            marginBottom: "0.75rem",
          }}
        >
          {subtitle}
        </p>

        <h2 style={{ color: "#fff", marginBottom: "2rem" }}>{title}</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))",
            gap: "0.875rem",
          }}
        >
          {awards.map((a, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "1rem",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "var(--radius-xl)",
                padding: "1.375rem",
              }}
            >
              {/* ICON */}
              <div
                style={{
                  width: "2.25rem",
                  height: "2.25rem",
                  borderRadius: "var(--radius-md)",
                  background: "rgba(217,119,6,0.12)",
                  border: "1px solid rgba(217,119,6,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <RiMedalLine
                  style={{ width: "1rem", height: "1rem", color: "#FCD34D" }}
                />
              </div>

              {/* CONTENT */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  minHeight: "100%",
                }}
              >
                <span
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    color: "#FCD34D",
                    marginBottom: "0.25rem",
                  }}
                >
                  {a.year}
                </span>

                <p
                  style={{
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    color: "rgba(255,255,255,0.8)",
                    lineHeight: 1.4,
                    marginBottom: "0.2rem",
                  }}
                >
                  {a.title}
                </p>

                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "rgba(255,255,255,0.35)",
                    marginTop: "auto",
                  }}
                >
                  {a.issuer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
