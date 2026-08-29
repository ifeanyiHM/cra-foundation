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
    <>
      <style>{`
        .as-outer { padding: 4rem 0; }
        .as-eyebrow { font-size: .74rem; margin-bottom: .75rem; }
        .as-header { margin-bottom: 2rem; }
        .as-grid {  display: grid; grid-template-columns: repeat(auto-fill,minmax(280px,1fr)); gap: .875rem; }
        .as-card { gap: 1rem; padding: 1.375rem; }
        .as-icon { width: 2.25rem; height: 2.25rem; }
        .as-icon-svg { width: 1rem; height: 1rem; }
        .as-year { font-size: .72rem; margin-bottom: .25rem; }
        .as-title { font-size: .875rem; margin-bottom: .2rem; }
        .as-issuer { font-size: .8rem; }

        @media (min-width: 1440px) {
          .as-outer { padding: 4.5rem 0; }
          .as-eyebrow { font-size: .78rem; margin-bottom: .8rem; }
          .as-header { margin-bottom: 2.125rem; }
          .as-grid { gap: .975rem; }
          .as-card { gap: 1.075rem; padding: 1.5rem; }
          .as-icon { width: 2.375rem; height: 2.375rem; }
          .as-icon-svg { width: 1.05rem; height: 1.05rem; }
          .as-year { font-size: .74rem; margin-bottom: .275rem; }
          .as-title { font-size: .9rem; margin-bottom: .225rem; }
          .as-issuer { font-size: .825rem; }
        }

        @media (min-width: 1536px) {
          .as-outer { padding: 5.25rem 0; }
          .as-eyebrow { font-size: .86rem; margin-bottom: .9rem; }
          .as-header { margin-bottom: 2.375rem; }
          .as-grid { grid-template-columns: repeat(4, 1fr); gap: 1.075rem; }
          .as-card { gap: 1.2rem; padding: 1.75rem; }
          .as-icon { width: 2.625rem; height: 2.625rem; }
          .as-icon-svg { width: 1.2rem; height: 1.2rem; }
          .as-year { font-size: .84rem; margin-bottom: .325rem; }
          .as-title { font-size: 1.025rem; margin-bottom: .275rem; }
          .as-issuer { font-size: .93rem; }
        }

        @media (min-width: 1680px) {
          .as-outer { padding: 6rem 0; }
          .as-eyebrow { font-size: .94rem; margin-bottom: 1rem; }
          .as-header { margin-bottom: 2.625rem; }
          .as-grid { gap: 1.175rem; }
          .as-card { gap: 1.325rem; padding: 2rem; }
          .as-icon { width: 2.875rem; height: 2.875rem; }
          .as-icon-svg { width: 1.35rem; height: 1.35rem; }
          .as-year { font-size: .92rem; margin-bottom: .375rem; }
          .as-title { font-size: 1.15rem; margin-bottom: .3rem; }
          .as-issuer { font-size: 1rem; }
        }

        @media (min-width: 1920px) {
          .as-outer { padding: 7.5rem 0; }
          .as-eyebrow { font-size: 1.1rem; margin-bottom: 1.25rem; }
          .as-header { margin-bottom: 3rem; }
          .as-grid { gap: 1.375rem; }
          .as-card { gap: 1.5rem; padding: 2.15rem; }
          .as-icon { width: 3.25rem; height: 3.25rem; }
          .as-icon-svg { width: 1.55rem; height: 1.55rem; }
          .as-year { font-size: 1.05rem; margin-bottom: .425rem; }
          .as-title { font-size: 1.325rem; margin-bottom: .35rem; }
          .as-issuer { font-size: 1.2rem; }
        }
      `}</style>

      <section
        id={id}
        className="as-outer"
        style={{ background: "var(--neutral-950)" }}
      >
        <div className="container-max">
          <p
            className="as-eyebrow"
            style={{
              display: "inline-flex",
              fontWeight: 700,
              letterSpacing: ".09em",
              textTransform: "uppercase",
              color: "var(--brand-600)",
            }}
          >
            {subtitle}
          </p>

          <h2 className="as-header" style={{ color: "#fff" }}>
            {title}
          </h2>

          <div className="as-grid">
            {awards.map((a, i) => (
              <div
                key={i}
                className="as-card"
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "var(--radius-xl)",
                }}
              >
                <div
                  className="as-icon"
                  style={{
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
                    className="as-icon-svg"
                    style={{ color: "#FCD34D" }}
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "100%",
                  }}
                >
                  <span
                    className="as-year"
                    style={{ fontWeight: 700, color: "#FCD34D" }}
                  >
                    {a.year}
                  </span>
                  <p
                    className="as-title"
                    style={{
                      fontWeight: 600,
                      color: "rgba(255,255,255,0.8)",
                      lineHeight: 1.4,
                    }}
                  >
                    {a.title}
                  </p>
                  <p
                    className="as-issuer"
                    style={{
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
    </>
  );
}
