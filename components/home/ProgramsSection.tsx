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
    <section className="section-padding" style={{ background: "var(--white)" }}>
      <div className="container-max">
        {/* Header */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "1.5rem",
            marginBottom: "3rem",
          }}
        >
          <div style={{ maxWidth: "34rem" }}>
            <p className="section-label">What We Do</p>
            <h2 style={{ margin: 0 }}>Programs That Change Lives</h2>
            <p
              style={{
                marginTop: "0.75rem",
                fontSize: "0.9375rem",
                color: "var(--neutral-500)",
              }}
            >
              Eight evidence-based programs designed to nurture the whole child
              — mind, body, and spirit.
            </p>
          </div>
          <Link href="/programs" className="btn btn-secondary">
            All Programs{" "}
            <RiArrowRightLine style={{ width: "0.9rem", height: "0.9rem" }} />
          </Link>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "1rem",
          }}
        >
          {programs.map((prog, i) => {
            const Icon = programIcons[i] || RiBook2Line;
            const color = accentColors[i] || accentColors[0];
            return (
              <div
                key={prog.id}
                className="card card-hover flex flex-col"
                style={{ padding: "1.625rem" }}
              >
                <div
                  style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    borderRadius: "var(--radius-md)",
                    background: color.bg,
                    border: `1px solid ${color.border}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.125rem",
                  }}
                >
                  <Icon
                    style={{
                      width: "1.125rem",
                      height: "1.125rem",
                      color: color.icon,
                    }}
                  />
                </div>
                <h4 style={{ marginBottom: "0.5rem" }}>{prog.title}</h4>
                <p
                  style={{
                    fontSize: "0.875rem",
                    lineHeight: 1.65,
                    marginBottom: "1.25rem",
                  }}
                >
                  {prog.description}
                </p>
                {prog.details && (
                  <ul
                    style={{
                      listStyle: "none",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.35rem",
                      marginTop: "auto",
                    }}
                  >
                    {prog.details.slice(0, 3).map((d) => (
                      <li
                        key={d}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          fontSize: "0.8rem",
                          color: "var(--neutral-500)",
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
  );
}
