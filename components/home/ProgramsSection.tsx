import Link from "next/link";
import { programs } from "@/data";
import {
  RiArrowRightLine,
  RiBook2Line,
  RiRestaurantLine,
  RiHeartPulseLine,
  RiShoppingBagLine,
  RiGraduationCapLine,
  RiComputerLine,
  RiUserHeartLine,
  RiBusLine,
} from "react-icons/ri";

const programIcons = [
  RiBook2Line,
  RiRestaurantLine,
  RiHeartPulseLine,
  RiShoppingBagLine,
  RiGraduationCapLine,
  RiComputerLine,
  RiUserHeartLine,
  RiBusLine,
];
const accentColors = [
  {
    bg: "var(--brand-50)",
    icon: "var(--brand-600)",
    border: "var(--brand-100)",
  },
  {
    bg: "var(--accent-amber-50)",
    icon: "var(--accent-amber)",
    border: "#FEF3C7",
  },
  {
    bg: "var(--accent-green-50)",
    icon: "var(--accent-green-600)",
    border: "#D1FAE5",
  },
  {
    bg: "var(--accent-blue-50)",
    icon: "var(--accent-blue-600)",
    border: "#DBEAFE",
  },
  {
    bg: "var(--accent-violet-50)",
    icon: "var(--accent-violet-600)",
    border: "#EDE9FE",
  },
  {
    bg: "var(--accent-teal-50)",
    icon: "var(--accent-teal-600)",
    border: "#CCFBF1",
  },
  {
    bg: "var(--brand-50)",
    icon: "var(--brand-600)",
    border: "var(--brand-100)",
  },
  {
    bg: "var(--accent-green-50)",
    icon: "var(--accent-green-600)",
    border: "#D1FAE5",
  },
];

export default function ProgramsSection() {
  return (
    <>
      <style>{`
  .programs-top { max-width: 34rem }
  .programs-section-inner { margin-bottom: 3rem; }
  .programs-header-sub { font-size: .9375rem; margin-top: .75rem; }
  .programs-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 1rem; }
  .programs-card { padding: 1.625rem; }
  .programs-card-icon { width: 2.5rem; height: 2.5rem; margin-bottom: 1.125rem; }
  .programs-card-icon-svg { width: 1.125rem; height: 1.125rem; }
  .programs-card-title { margin-bottom: .5rem; }
  .programs-card-desc { font-size: .875rem; margin-bottom: 1.25rem; }
  .programs-card-detail { font-size: .8rem; gap: .9rem; }

  @media (min-width: 1440px) {
    .programs-top { max-width: 35.5rem }
    .programs-section-inner { margin-bottom: 3.25rem; }
    .programs-header-sub { font-size: 1rem; margin-top: .8rem; }
    .programs-grid { grid-template-columns: repeat(4, 1fr); gap: 1.125rem; }
    .programs-card { padding: 1.75rem; }
    .programs-card-icon { width: 2.625rem; height: 2.625rem; margin-bottom: 1.2rem; }
    .programs-card-icon-svg { width: 1.175rem; height: 1.175rem; }
    .programs-card-desc { font-size: .95rem; margin-bottom: 1.3rem; }
    .programs-card-detail { font-size: .83rem; gap: .95rem; }
  }

  @media (min-width: 1536px) {
    .programs-top { max-width: 38rem }
    .programs-section-inner { margin-bottom: 3.5rem; }
    .programs-header-sub { font-size: 1.055rem; margin-top: .875rem; }
    .programs-grid { gap: 1.25rem; }
    .programs-card { padding: 1.875rem; }
    .programs-card-icon { width: 2.75rem; height: 2.75rem; margin-bottom: 1.275rem; }
    .programs-card-icon-svg { width: 1.225rem; height: 1.225rem; }
    .programs-card-desc { font-size: 1rem; margin-bottom: 1.375rem; }
    .programs-card-detail { font-size: .9rem; gap: 1rem; }
  }

  @media (min-width: 1680px) {
    .programs-top { max-width: 41.5rem }
    .programs-section-inner { margin-bottom: 3.75rem; }
    .programs-header-sub { font-size: 1.15rem; margin-top: .9rem; }
    .programs-grid { gap: 1.375rem; }
    .programs-card { padding: 2rem; }
    .programs-card-icon { width: 2.975rem; height: 2.975rem; margin-bottom: 1.375rem; }
    .programs-card-icon-svg { width: 1.3rem; height: 1.3rem; }
    .programs-card-desc { font-size: 1.1rem; margin-bottom: 1.5rem; }
    .programs-card-detail { font-size: 1rem; gap: 1.05rem; }
  }

  @media (min-width: 1920px) {
   .programs-top { max-width: 48rem }
    .programs-section-inner { margin-bottom: 4.25rem; }
    .programs-header-sub { font-size: 1.35rem; margin-top: 1rem; }
    .programs-grid { gap: 1.625rem; }
    .programs-card { padding: 2.375rem; }
    .programs-card-icon { width: 3.45rem; height: 3.45rem; margin-bottom: 1.625rem; }
    .programs-card-icon-svg { width: 1.475rem; height: 1.475rem; }
    .programs-card-desc { font-size: 1.25rem; margin-bottom: 1.75rem; }
    .programs-card-detail { font-size: 1.15rem; gap: 1.125rem; }
  }
`}</style>
      <section
        className="section-padding"
        style={{ background: "var(--white)" }}
      >
        <div className="container-max">
          {/* Header */}
          <div
            className="programs-section-inner"
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: "1.5rem",
            }}
          >
            <div className="programs-top">
              <p className="section-label">What We Do</p>
              <h2 style={{ margin: 0 }}>Programs That Change Lives</h2>
              <p
                className="programs-header-sub"
                style={{ color: "var(--neutral-500)" }}
              >
                Eight evidence-based programs designed to nurture the whole
                child — mind, body, and spirit.
              </p>
            </div>
            <Link href="/programs" className="btn btn-secondary">
              All Programs{" "}
              <RiArrowRightLine style={{ width: "0.9rem", height: "0.9rem" }} />
            </Link>
          </div>

          {/* Grid */}
          <div className="programs-grid">
            {programs.map((prog, i) => {
              const Icon = programIcons[i] || RiBook2Line;
              const color = accentColors[i] || accentColors[0];
              return (
                <div
                  key={prog.id}
                  className="programs-card card card-hover flex flex-col"
                >
                  <div
                    className="programs-card-icon"
                    style={{
                      borderRadius: "var(--radius-md)",
                      background: color.bg,
                      border: `1px solid ${color.border}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon
                      className="programs-card-icon-svg"
                      style={{ color: color.icon }}
                    />
                  </div>
                  <h4 className="programs-card-title">{prog.title}</h4>
                  <p
                    className="programs-card-desc"
                    style={{ lineHeight: 1.65 }}
                  >
                    {prog.description}
                  </p>
                  {prog.details && (
                    <ul
                      className="programs-card-detail"
                      style={{
                        listStyle: "none",
                        display: "flex",
                        flexDirection: "column",
                        marginTop: "auto",
                      }}
                    >
                      {prog.details.slice(0, 3).map((d) => (
                        <li
                          key={d}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: ".5rem",
                            color: "var(--neutral-500)",
                            lineHeight: 1,
                          }}
                        >
                          <span
                            style={{
                              width: "4px",
                              height: "4px",
                              borderRadius: "50%",
                              background: color.icon,
                              flexShrink: 0,
                            }}
                          />
                          {d}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
