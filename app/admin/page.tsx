"use client";
import { useState } from "react";
import Link from "next/link";
import { news, sponsorChildren } from "@/data";
import {
  RiDashboardLine,
  RiGroupLine,
  RiMoneyDollarCircleLine,
  RiHeartLine,
  RiTeamLine,
  RiArticleLine,
  RiImageLine,
  RiSettings3Line,
  RiLogoutBoxLine,
  RiBellLine,
  RiSearchLine,
  RiAddLine,
  RiMenu3Line,
  RiCloseLine,
  RiArrowUpLine,
  RiArrowRightLine,
  RiEyeLine,
  RiCalendarLine,
  RiCheckLine,
  RiTimeLine,
} from "react-icons/ri";
import { redirect } from "next/navigation";

const nav = [
  { icon: RiDashboardLine, label: "Dashboard", active: true },
  { icon: RiGroupLine, label: "Beneficiaries" },
  { icon: RiMoneyDollarCircleLine, label: "Donations" },
  { icon: RiHeartLine, label: "Sponsorships" },
  { icon: RiTeamLine, label: "Volunteers" },
  { icon: RiArticleLine, label: "Content" },
  { icon: RiImageLine, label: "Gallery" },
  { icon: RiSettings3Line, label: "Settings" },
];

const donations = [
  {
    name: "Adunola B.",
    amount: "₦25,000",
    type: "Monthly",
    date: "Jun 1, 2025",
    status: "confirmed",
  },
  {
    name: "Tunde K.",
    amount: "₦10,000",
    type: "One-time",
    date: "May 30, 2025",
    status: "confirmed",
  },
  {
    name: "Anonymous",
    amount: "₦50,000",
    type: "One-time",
    date: "May 28, 2025",
    status: "pending",
  },
  {
    name: "Chidi N.",
    amount: "₦5,000",
    type: "Monthly",
    date: "May 27, 2025",
    status: "confirmed",
  },
  {
    name: "Fatima A.",
    amount: "₦100,000",
    type: "Annual",
    date: "May 25, 2025",
    status: "confirmed",
  },
];

const volunteers = [
  {
    name: "Emeka Okonkwo",
    skill: "Tutoring",
    status: "active",
    joined: "May 29",
  },
  {
    name: "Sola Martins",
    skill: "Photography",
    status: "pending",
    joined: "May 28",
  },
  {
    name: "Grace Adeyemi",
    skill: "Counseling",
    status: "active",
    joined: "May 26",
  },
];

const stats = [
  {
    label: "Total Donations",
    value: "₦4.2M",
    change: "+12%",
    up: true,
    icon: RiMoneyDollarCircleLine,
    accent: "var(--brand-600)",
    accentBg: "var(--brand-50)",
  },
  {
    label: "Active Sponsorships",
    value: "47",
    change: "+5",
    up: true,
    icon: RiHeartLine,
    accent: "var(--accent-violet-600)",
    accentBg: "var(--accent-violet-50)",
  },
  {
    label: "Children Enrolled",
    value: "312",
    change: "+23",
    up: true,
    icon: RiGroupLine,
    accent: "var(--accent-green-600)",
    accentBg: "var(--accent-green-50)",
  },
  {
    label: "Volunteers",
    value: "38",
    change: "+4",
    up: true,
    icon: RiTeamLine,
    accent: "var(--accent-amber)",
    accentBg: "var(--accent-amber-50)",
  },
];

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [active, setActive] = useState("Dashboard");

  redirect("/");

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100svh",
        background: "var(--neutral-50)",
        paddingTop: 0,
      }}
    >
      {/* Sidebar */}
      <aside
        style={{
          width: "15rem",
          background: "var(--neutral-950)",
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          inset: "0 auto 0 0",
          zIndex: 40,
          transform: sidebarOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.25s ease",
        }}
        className="sidebar"
      >
        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.625rem",
            padding: "1.125rem 1.25rem",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div
            style={{
              width: "2rem",
              height: "2rem",
              background: "var(--brand-600)",
              borderRadius: "var(--radius-md)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.7rem",
              fontWeight: 800,
              color: "#fff",
              flexShrink: 0,
            }}
          >
            CRA
          </div>
          <div style={{ flex: 1 }}>
            <p
              style={{
                fontSize: "0.8rem",
                fontWeight: 700,
                color: "#fff",
                lineHeight: 1.2,
              }}
            >
              CRA Foundation
            </p>
            <p
              style={{
                fontSize: "0.7rem",
                color: "rgba(255,255,255,0.3)",
                fontWeight: 400,
              }}
            >
              Admin Portal
            </p>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            style={{
              background: "none",
              border: "none",
              color: "rgba(255,255,255,0.3)",
              cursor: "pointer",
              padding: "0.25rem",
            }}
            className="sidebar-close"
          >
            <RiCloseLine style={{ width: "1.25rem", height: "1.25rem" }} />
          </button>
        </div>

        {/* Nav */}
        <nav
          style={{
            flex: 1,
            padding: "0.75rem",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "0.125rem",
          }}
        >
          {nav.map(({ icon: Icon, label }) => (
            <button
              key={label}
              onClick={() => setActive(label)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.625rem",
                padding: "0.5625rem 0.75rem",
                borderRadius: "var(--radius-md)",
                border: "none",
                cursor: "pointer",
                width: "100%",
                textAlign: "left",
                fontSize: "0.845rem",
                fontWeight: 500,
                background:
                  active === label ? "rgba(255,255,255,0.08)" : "transparent",
                color: active === label ? "#fff" : "rgba(255,255,255,0.45)",
                transition: "all 0.12s ease",
              }}
              onMouseEnter={(e) => {
                if (active !== label) {
                  (e.currentTarget as HTMLElement).style.background =
                    "rgba(255,255,255,0.04)";
                  (e.currentTarget as HTMLElement).style.color =
                    "rgba(255,255,255,0.7)";
                }
              }}
              onMouseLeave={(e) => {
                if (active !== label) {
                  (e.currentTarget as HTMLElement).style.background =
                    "transparent";
                  (e.currentTarget as HTMLElement).style.color =
                    "rgba(255,255,255,0.45)";
                }
              }}
            >
              <Icon style={{ width: "1rem", height: "1rem", flexShrink: 0 }} />
              {label}
              {active === label && (
                <div
                  style={{
                    width: "4px",
                    height: "4px",
                    borderRadius: "50%",
                    background: "var(--brand-600)",
                    marginLeft: "auto",
                  }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* User */}
        <div
          style={{
            padding: "0.75rem",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.625rem",
              padding: "0.625rem 0.75rem",
              borderRadius: "var(--radius-md)",
            }}
          >
            <div
              style={{
                width: "2rem",
                height: "2rem",
                borderRadius: "50%",
                background: "var(--brand-600)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.7rem",
                fontWeight: 700,
                color: "#fff",
                flexShrink: 0,
              }}
            >
              AD
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  color: "#fff",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                Admin User
              </p>
              <p
                style={{
                  fontSize: "0.72rem",
                  color: "rgba(255,255,255,0.3)",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                admin@crafoundation.org
              </p>
            </div>
            <Link
              href="/auth/login"
              style={{
                color: "rgba(255,255,255,0.25)",
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "#fff")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color =
                  "rgba(255,255,255,0.25)")
              }
            >
              <RiLogoutBoxLine style={{ width: "1rem", height: "1rem" }} />
            </Link>
          </div>
        </div>
      </aside>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.4)",
            zIndex: 30,
          }}
        />
      )}

      {/* Main content */}
      <div
        style={{
          flex: 1,
          marginLeft: 0,
          display: "flex",
          flexDirection: "column",
          minWidth: 0,
        }}
        className="admin-main"
      >
        {/* Topbar */}
        <header
          style={{
            background: "var(--white)",
            borderBottom: "1px solid var(--border-subtle)",
            padding: "0 1.5rem",
            height: "3.75rem",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            position: "sticky",
            top: 0,
            zIndex: 20,
          }}
        >
          <button
            onClick={() => setSidebarOpen(true)}
            style={{
              background: "none",
              border: "1px solid var(--border-subtle)",
              borderRadius: "var(--radius-md)",
              padding: "0.5rem",
              color: "var(--neutral-600)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
          >
            <RiMenu3Line style={{ width: "1.125rem", height: "1.125rem" }} />
          </button>
          <div style={{ flex: 1, maxWidth: "22rem", position: "relative" }}>
            <RiSearchLine
              style={{
                position: "absolute",
                left: "0.75rem",
                top: "50%",
                transform: "translateY(-50%)",
                width: "0.9rem",
                height: "0.9rem",
                color: "var(--neutral-400)",
              }}
            />
            <input
              placeholder="Search…"
              style={{
                width: "100%",
                paddingLeft: "2.25rem",
                paddingRight: "0.875rem",
                paddingTop: "0.5rem",
                paddingBottom: "0.5rem",
                fontSize: "0.845rem",
                background: "var(--neutral-50)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--radius-full)",
                outline: "none",
                color: "var(--neutral-900)",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.625rem",
              marginLeft: "auto",
            }}
          >
            <Link
              href="/"
              className="btn btn-ghost btn-sm"
              style={{ gap: "0.375rem" }}
            >
              <RiEyeLine style={{ width: "0.875rem", height: "0.875rem" }} />{" "}
              View Site
            </Link>
            <button
              style={{
                position: "relative",
                background: "none",
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--radius-md)",
                padding: "0.5rem",
                color: "var(--neutral-500)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
              }}
            >
              <RiBellLine style={{ width: "1rem", height: "1rem" }} />
              <span
                style={{
                  position: "absolute",
                  top: "0.3rem",
                  right: "0.3rem",
                  width: "0.45rem",
                  height: "0.45rem",
                  background: "var(--brand-600)",
                  borderRadius: "50%",
                }}
              />
            </button>
          </div>
        </header>

        {/* Page content */}
        <main style={{ flex: 1, padding: "2rem 1.5rem", overflowY: "auto" }}>
          {/* Title row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "2rem",
            }}
          >
            <div>
              <h2 style={{ marginBottom: "0.2rem" }}>{active}</h2>
              <p style={{ fontSize: "0.875rem", color: "var(--neutral-400)" }}>
                Welcome back. Here&apos;s your overview.
              </p>
            </div>
            <button className="btn btn-primary btn-sm">
              <RiAddLine style={{ width: "0.9rem", height: "0.9rem" }} /> New
              Entry
            </button>
          </div>

          {/* Stats */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
              gap: "1rem",
              marginBottom: "1.5rem",
            }}
          >
            {stats.map(
              ({ label, value, change, up, icon: Icon, accent, accentBg }) => (
                <div key={label} className="card" style={{ padding: "1.5rem" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "1.25rem",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "0.8rem",
                        fontWeight: 500,
                        color: "var(--neutral-500)",
                      }}
                    >
                      {label}
                    </p>
                    <div
                      style={{
                        width: "2rem",
                        height: "2rem",
                        borderRadius: "var(--radius-md)",
                        background: accentBg,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon
                        style={{ width: "1rem", height: "1rem", color: accent }}
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      fontSize: "1.75rem",
                      fontWeight: 800,
                      color: "var(--neutral-950)",
                      letterSpacing: "-0.04em",
                      lineHeight: 1,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {value}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.3rem",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      color: up
                        ? "var(--accent-green-600)"
                        : "var(--brand-600)",
                    }}
                  >
                    <RiArrowUpLine
                      style={{ width: "0.875rem", height: "0.875rem" }}
                    />{" "}
                    {change} this month
                  </div>
                </div>
              ),
            )}
          </div>

          {/* Two columns */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0,1.5fr) minmax(0,1fr)",
              gap: "1.25rem",
              marginBottom: "1.25rem",
            }}
          >
            {/* Donations table */}
            <div className="card" style={{ padding: "1.5rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "1.25rem",
                }}
              >
                <h4>Recent Donations</h4>
                <button
                  style={{
                    background: "none",
                    border: "none",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: "var(--brand-600)",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.25rem",
                  }}
                >
                  View All{" "}
                  <RiArrowRightLine
                    style={{ width: "0.8rem", height: "0.8rem" }}
                  />
                </button>
              </div>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr
                      style={{ borderBottom: "1px solid var(--border-subtle)" }}
                    >
                      {["Donor", "Amount", "Type", "Date", "Status"].map(
                        (h) => (
                          <th
                            key={h}
                            style={{
                              textAlign: "left",
                              padding: "0.5rem 0.625rem",
                              fontSize: "0.72rem",
                              fontWeight: 700,
                              letterSpacing: "0.06em",
                              textTransform: "uppercase",
                              color: "var(--neutral-400)",
                            }}
                          >
                            {h}
                          </th>
                        ),
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {donations.map((d, i) => (
                      <tr
                        key={i}
                        style={{ borderBottom: "1px solid var(--neutral-50)" }}
                      >
                        <td
                          style={{
                            padding: "0.75rem 0.625rem",
                            fontSize: "0.875rem",
                            fontWeight: 500,
                            color: "var(--neutral-900)",
                          }}
                        >
                          {d.name}
                        </td>
                        <td
                          style={{
                            padding: "0.75rem 0.625rem",
                            fontSize: "0.875rem",
                            fontWeight: 700,
                            color: "var(--brand-600)",
                          }}
                        >
                          {d.amount}
                        </td>
                        <td
                          style={{
                            padding: "0.75rem 0.625rem",
                            fontSize: "0.845rem",
                            color: "var(--neutral-500)",
                          }}
                        >
                          {d.type}
                        </td>
                        <td
                          style={{
                            padding: "0.75rem 0.625rem",
                            fontSize: "0.8rem",
                            color: "var(--neutral-400)",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.3rem",
                          }}
                        >
                          <RiCalendarLine
                            style={{ width: "0.75rem", height: "0.75rem" }}
                          />
                          {d.date}
                        </td>
                        <td style={{ padding: "0.75rem 0.625rem" }}>
                          <span
                            className={`badge badge-${d.status === "confirmed" ? "green" : "amber"}`}
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "0.25rem",
                            }}
                          >
                            {d.status === "confirmed" ? (
                              <RiCheckLine
                                style={{ width: "0.65rem", height: "0.65rem" }}
                              />
                            ) : (
                              <RiTimeLine
                                style={{ width: "0.65rem", height: "0.65rem" }}
                              />
                            )}
                            {d.status === "confirmed" ? "Confirmed" : "Pending"}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Volunteers */}
            <div className="card" style={{ padding: "1.5rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "1.25rem",
                }}
              >
                <h4>New Volunteers</h4>
                <button
                  style={{
                    background: "none",
                    border: "none",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: "var(--brand-600)",
                    cursor: "pointer",
                  }}
                >
                  View All →
                </button>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.875rem",
                }}
              >
                {volunteers.map((v, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      paddingBottom: "0.875rem",
                      borderBottom:
                        i < volunteers.length - 1
                          ? "1px solid var(--border-subtle)"
                          : "none",
                    }}
                  >
                    <div
                      style={{
                        width: "2.25rem",
                        height: "2.25rem",
                        borderRadius: "50%",
                        background: "var(--neutral-900)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.74rem",
                        fontWeight: 700,
                        color: "rgba(255,255,255,0.7)",
                        flexShrink: 0,
                      }}
                    >
                      {v.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p
                        style={{
                          fontSize: "0.875rem",
                          fontWeight: 600,
                          color: "var(--neutral-900)",
                        }}
                      >
                        {v.name}
                      </p>
                      <p
                        style={{
                          fontSize: "0.78rem",
                          color: "var(--neutral-400)",
                        }}
                      >
                        {v.skill} · Joined {v.joined}
                      </p>
                    </div>
                    <span
                      className={`badge badge-${v.status === "active" ? "green" : "amber"}`}
                    >
                      {v.status === "active" ? "Active" : "Pending"}
                    </span>
                  </div>
                ))}
                <button
                  className="btn btn-secondary btn-sm"
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    borderStyle: "dashed",
                    marginTop: "0.25rem",
                  }}
                >
                  <RiAddLine
                    style={{ width: "0.875rem", height: "0.875rem" }}
                  />{" "}
                  Add Volunteer
                </button>
              </div>
            </div>
          </div>

          {/* Bottom row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
              gap: "1.25rem",
            }}
          >
            {/* Children */}
            <div className="card" style={{ padding: "1.5rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "1.25rem",
                }}
              >
                <h4>Children Status</h4>
                <button
                  style={{
                    background: "none",
                    border: "none",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: "var(--brand-600)",
                    cursor: "pointer",
                  }}
                >
                  Manage →
                </button>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.625rem",
                }}
              >
                {sponsorChildren.map((c) => (
                  <div
                    key={c.id}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.625rem",
                      padding: "0.625rem",
                      borderRadius: "var(--radius-md)",
                      background: "var(--neutral-50)",
                    }}
                  >
                    <div
                      style={{
                        width: "2rem",
                        height: "2rem",
                        borderRadius: "50%",
                        background: "var(--neutral-900)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        color: "rgba(255,255,255,0.6)",
                        flexShrink: 0,
                      }}
                    >
                      {c.name.charAt(0)}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p
                        style={{
                          fontSize: "0.845rem",
                          fontWeight: 600,
                          color: "var(--neutral-900)",
                        }}
                      >
                        {c.name}
                      </p>
                      <p
                        style={{
                          fontSize: "0.75rem",
                          color: "var(--neutral-400)",
                        }}
                      >
                        Age {c.age}
                      </p>
                    </div>
                    <span
                      className={`badge badge-${c.sponsored ? "green" : "red"}`}
                    >
                      {c.sponsored ? "Sponsored" : "Needs Sponsor"}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* News */}
            <div className="card" style={{ padding: "1.5rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "1.25rem",
                }}
              >
                <h4>Recent Articles</h4>
                <button
                  style={{
                    background: "none",
                    border: "none",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: "var(--brand-600)",
                    cursor: "pointer",
                  }}
                >
                  Manage →
                </button>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                {news.slice(0, 5).map((a) => (
                  <div
                    key={a.id}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.625rem",
                      paddingBottom: "0.75rem",
                      borderBottom: "1px solid var(--border-subtle)",
                    }}
                  >
                    <div
                      style={{
                        width: "2rem",
                        height: "2rem",
                        borderRadius: "var(--radius-md)",
                        background: "var(--brand-50)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <RiArticleLine
                        style={{
                          width: "0.875rem",
                          height: "0.875rem",
                          color: "var(--brand-600)",
                        }}
                      />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p
                        style={{
                          fontSize: "0.845rem",
                          fontWeight: 500,
                          color: "var(--neutral-800)",
                          lineHeight: 1.4,
                        }}
                        className="line-clamp-1"
                      >
                        {a.title}
                      </p>
                      <p
                        style={{
                          fontSize: "0.75rem",
                          color: "var(--neutral-400)",
                          marginTop: "0.15rem",
                        }}
                      >
                        {a.date} · {a.category}
                      </p>
                    </div>
                  </div>
                ))}
                <button
                  className="btn btn-secondary btn-sm"
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    borderStyle: "dashed",
                  }}
                >
                  <RiAddLine
                    style={{ width: "0.875rem", height: "0.875rem" }}
                  />{" "}
                  New Article
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .sidebar { transform: translateX(0) !important; position: sticky !important; top: 0 !important; height: 100svh !important; }
          .sidebar-close { display: none !important; }
          .admin-main { margin-left: 0 !important; }
        }
      `}</style>
    </div>
  );
}
