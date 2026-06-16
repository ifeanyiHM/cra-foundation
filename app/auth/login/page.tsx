"use client";
import { useState } from "react";
import Link from "next/link";
import {
  RiMailLine,
  RiLockLine,
  RiEyeLine,
  RiEyeOffLine,
  RiArrowLeftLine,
  RiLoader4Line,
  RiCheckLine,
} from "react-icons/ri";
import { redirect } from "next/navigation";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPass, setShowPass] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  redirect("/");

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      e.email = "Valid email required";
    if (form.password.length < 6)
      e.password = "Password must be at least 6 characters";
    setErrors(e);
    return !Object.keys(e).length;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setDone(true);
  };

  return (
    <div
      style={{
        minHeight: "100svh",
        background: "var(--neutral-950)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <div style={{ width: "100%", maxWidth: "26rem" }}>
        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div
            style={{
              width: "3rem",
              height: "3rem",
              background: "var(--brand-600)",
              borderRadius: "var(--radius-lg)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 1rem",
            }}
          >
            <span
              style={{
                color: "#fff",
                fontWeight: 800,
                fontSize: "0.78rem",
                letterSpacing: "-0.01em",
              }}
            >
              CRA
            </span>
          </div>
          <h3 style={{ color: "#fff", marginBottom: "0.3rem" }}>
            Admin Portal
          </h3>
          <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.845rem" }}>
            Children&apos;s Right Advocate Foundation
          </p>
        </div>

        {/* Card */}
        <div
          style={{
            background: "var(--white)",
            borderRadius: "var(--radius-2xl)",
            padding: "2.5rem",
            boxShadow: "0 25px 50px rgba(0,0,0,0.4)",
          }}
        >
          {done ? (
            <div style={{ textAlign: "center", padding: "1rem 0" }}>
              <div
                style={{
                  width: "3.5rem",
                  height: "3.5rem",
                  borderRadius: "50%",
                  background: "var(--accent-green-50)",
                  border: "1px solid #D1FAE5",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1.25rem",
                }}
              >
                <RiCheckLine
                  style={{
                    width: "1.5rem",
                    height: "1.5rem",
                    color: "var(--accent-green-600)",
                  }}
                />
              </div>
              <h3 style={{ marginBottom: "0.5rem" }}>Welcome back!</h3>
              <p
                style={{
                  color: "var(--neutral-500)",
                  fontSize: "0.9rem",
                  marginBottom: "1.5rem",
                }}
              >
                Redirecting to dashboard…
              </p>
              <Link
                href="/admin"
                className="btn btn-primary"
                style={{ width: "100%", justifyContent: "center" }}
              >
                Go to Dashboard →
              </Link>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.125rem",
              }}
            >
              <div>
                <label className="form-label">Email Address</label>
                <div style={{ position: "relative" }}>
                  <RiMailLine
                    style={{
                      position: "absolute",
                      left: "0.875rem",
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: "0.9rem",
                      height: "0.9rem",
                      color: "var(--neutral-400)",
                    }}
                  />
                  <input
                    type="email"
                    className="form-input"
                    style={{ paddingLeft: "2.5rem" }}
                    placeholder="admin@crafoundation.org"
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                  />
                </div>
                {errors.email && <p className="form-error">{errors.email}</p>}
              </div>

              <div>
                <label className="form-label">Password</label>
                <div style={{ position: "relative" }}>
                  <RiLockLine
                    style={{
                      position: "absolute",
                      left: "0.875rem",
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: "0.9rem",
                      height: "0.9rem",
                      color: "var(--neutral-400)",
                    }}
                  />
                  <input
                    type={showPass ? "text" : "password"}
                    className="form-input"
                    style={{ paddingLeft: "2.5rem", paddingRight: "3rem" }}
                    placeholder="••••••••"
                    value={form.password}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, password: e.target.value }))
                    }
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass(!showPass)}
                    style={{
                      position: "absolute",
                      right: "0.875rem",
                      top: "50%",
                      transform: "translateY(-50%)",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      color: "var(--neutral-400)",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {showPass ? (
                      <RiEyeOffLine style={{ width: "1rem", height: "1rem" }} />
                    ) : (
                      <RiEyeLine style={{ width: "1rem", height: "1rem" }} />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="form-error">{errors.password}</p>
                )}
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    cursor: "pointer",
                    fontSize: "0.845rem",
                    color: "var(--neutral-600)",
                  }}
                >
                  <input
                    type="checkbox"
                    style={{ accentColor: "var(--brand-600)" }}
                  />{" "}
                  Remember me
                </label>
                <button
                  type="button"
                  style={{
                    background: "none",
                    border: "none",
                    fontSize: "0.845rem",
                    fontWeight: 600,
                    color: "var(--brand-600)",
                    cursor: "pointer",
                  }}
                >
                  Forgot password?
                </button>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-lg"
                style={{
                  width: "100%",
                  justifyContent: "center",
                  marginTop: "0.25rem",
                }}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <RiLoader4Line
                      style={{
                        width: "1rem",
                        height: "1rem",
                        animation: "spin 1s linear infinite",
                      }}
                    />{" "}
                    Signing in…
                  </>
                ) : (
                  "Sign In"
                )}
              </button>
            </form>
          )}
        </div>

        <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              fontSize: "0.845rem",
              color: "rgba(255,255,255,0.3)",
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color =
                "rgba(255,255,255,0.7)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color =
                "rgba(255,255,255,0.3)")
            }
          >
            <RiArrowLeftLine
              style={{ width: "0.875rem", height: "0.875rem" }}
            />{" "}
            Back to website
          </Link>
        </div>
      </div>
    </div>
  );
}
