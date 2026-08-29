"use client";
import { useState } from "react";
import { RiCheckLine, RiLoader4Line } from "react-icons/ri";
import Dropdown, { DropdownOption } from "../ui/DropDown";

const skillOptions = [
  "Teaching/Tutoring",
  "Mentoring",
  "Event Planning",
  "Photography/Video",
  "IT/Tech Support",
  "Driving/Transport",
  "Medical/Health",
  "Counseling",
  "Fundraising",
  "Other",
];

export default function VolunteerForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    occupation: "",
    availability: "",
    motivation: "",
  });
  const [skills, setSkills] = useState<string[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const toggleSkill = (s: string) =>
    setSkills((p) => (p.includes(s) ? p.filter((x) => x !== s) : [...p, s]));

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.firstName.trim()) e.firstName = "Required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      e.email = "Valid email required";
    if (!form.phone.trim()) e.phone = "Required";
    if (form.motivation.trim().length < 10)
      e.motivation = "Please tell us a bit more about your motivation";
    setErrors(e);
    return !Object.keys(e).length;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setServerError("");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "volunteer", ...form, skills }),
      });

      if (!res.ok) {
        const data = await res.json();
        setServerError(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setSubmitted(true);
    } catch {
      setServerError(
        "Network error. Please check your connection and try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  const availabilityOptions: DropdownOption[] = [
    { value: "weekday-mornings", label: "Weekday mornings" },
    { value: "weekday-evenings", label: "Weekday afternoons / evenings" },
    { value: "weekends", label: "Weekends only" },
    { value: "flexible", label: "Flexible / any time" },
  ];

  if (submitted)
    return (
      <div className="vf-success-pad" style={{ textAlign: "center" }}>
        <div
          className="vf-success-icon"
          style={{
            borderRadius: "50%",
            background: "var(--accent-green-50)",
            border: "1px solid #D1FAE5",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <RiCheckLine
            className="vf-success-icon-svg"
            style={{ color: "var(--accent-green-600)" }}
          />
        </div>
        <h3 className="vf-success-title">Application Received!</h3>
        <p className="vf-success-sub" style={{ color: "var(--neutral-500)" }}>
          Thank you, {form.firstName}. We&apos;ll be in touch at {form.email}{" "}
          within 48 hours.
        </p>
      </div>
    );

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="vf-form"
        style={{ display: "flex", flexDirection: "column" }}
      >
        {/* Name row */}
        <div
          className="vf-row-gap"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
        >
          <div>
            <label className="form-label ">First Name *</label>
            <input
              className="form-input"
              placeholder="First name"
              value={form.firstName}
              onChange={(e) =>
                setForm((f) => ({ ...f, firstName: e.target.value }))
              }
            />
            {errors.firstName && (
              <p className="form-error vf-error">{errors.firstName}</p>
            )}
          </div>
          <div>
            <label className="form-label ">Last Name</label>
            <input
              className="form-input"
              placeholder="Last name"
              value={form.lastName}
              onChange={(e) =>
                setForm((f) => ({ ...f, lastName: e.target.value }))
              }
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="form-label ">Email Address *</label>
          <input
            type="email"
            className="form-input"
            placeholder="you@example.com"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          />
          {errors.email && (
            <p className="form-error vf-error">{errors.email}</p>
          )}
        </div>

        {/* Phone + Occupation */}
        <div
          className="vf-row-gap"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
        >
          <div>
            <label className="form-label ">Phone *</label>
            <input
              type="tel"
              className="form-input"
              placeholder="0801…"
              value={form.phone}
              onChange={(e) =>
                setForm((f) => ({ ...f, phone: e.target.value }))
              }
            />
            {errors.phone && (
              <p className="form-error vf-error">{errors.phone}</p>
            )}
          </div>
          <div>
            <label className="form-label ">Occupation</label>
            <input
              className="form-input"
              placeholder="Your profession"
              value={form.occupation}
              onChange={(e) =>
                setForm((f) => ({ ...f, occupation: e.target.value }))
              }
            />
          </div>
        </div>

        {/* Skills */}
        <div>
          <label className="form-label ">Skills & Interests</label>
          <div
            className="vf-skill-gap"
            style={{ display: "flex", flexWrap: "wrap" }}
          >
            {skillOptions.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => toggleSkill(s)}
                className="vf-skill-btn"
                style={{
                  borderRadius: "999px",
                  fontWeight: 600,
                  border: `1.5px solid ${skills.includes(s) ? "var(--brand-600)" : "var(--border-default)"}`,
                  background: skills.includes(s)
                    ? "var(--brand-50)"
                    : "var(--white)",
                  color: skills.includes(s)
                    ? "var(--brand-600)"
                    : "var(--neutral-600)",
                  cursor: "pointer",
                  transition: "all .12s ease",
                }}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Availability */}
        <div>
          <Dropdown
            label="Availability"
            options={availabilityOptions}
            value={form.availability}
            onChange={(val) => setForm((f) => ({ ...f, availability: val }))}
            placeholder="Select availability…"
          />
        </div>

        {/* Motivation */}
        <div>
          <label className="form-label">Why do you want to volunteer? *</label>
          <textarea
            className="form-textarea"
            rows={4}
            placeholder="Tell us what motivates you…"
            value={form.motivation}
            onChange={(e) =>
              setForm((f) => ({ ...f, motivation: e.target.value }))
            }
            style={{ resize: "vertical" }}
          />
          {errors.motivation && (
            <p className="form-error vf-error">{errors.motivation}</p>
          )}
        </div>

        {/* Server error */}
        {serverError && (
          <p
            className="vf-server-error"
            style={{
              color: "var(--brand-600)",
              background: "var(--brand-50)",
              border: "1px solid var(--brand-100)",
              borderRadius: "var(--radius-md)",
              fontWeight: 500,
            }}
          >
            {serverError}
          </p>
        )}

        <button
          type="submit"
          className="btn btn-primary btn-lg"
          style={{ width: "100%", justifyContent: "center" }}
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
              Submitting…
            </>
          ) : (
            "Submit Application"
          )}
        </button>
      </form>
      <style>
        {`
          @media (max-width: 767px) {
            input, select, textarea {
              background: none !important;
            }
          }

          /* === RESPONSIVE SCALE > 1280px === */

          /* Form layout */
          .vf-form { gap: .875rem; }
          .vf-row-gap { gap: .75rem; }
          .vf-skill-btn { font-size: .8rem; padding: .35rem .75rem; }
          .vf-skill-gap { gap: .4rem; margin-top: .25rem; }
          .vf-error { font-size: .8rem; }
          .vf-server-error { font-size: .875rem; padding: .75rem 1rem; }

          /* Success state */
          .vf-success-pad { padding: 3rem 1rem; }
          .vf-success-icon { width: 3.5rem; height: 3.5rem; margin: 0 auto 1.25rem; }
          .vf-success-icon-svg { width: 1.5rem; height: 1.5rem; }
          .vf-success-title { margin-bottom: .5rem; }
          .vf-success-sub { font-size: .9375rem; }

          @media (min-width: 1440px) {
            .vf-form { gap: .975rem; }
            .vf-row-gap { gap: .825rem; }
            .vf-skill-btn { font-size: .825rem; padding: .375rem .8rem; }
            .vf-skill-gap { gap: .45rem; }
            .vf-error { font-size: .825rem; }
            .vf-server-error { font-size: .9rem; padding: .8rem 1.05rem; }

            .vf-success-pad { padding: 3.25rem 1rem; }
            .vf-success-icon { width: 3.625rem; height: 3.625rem; margin: 0 auto 1.325rem; }
            .vf-success-icon-svg { width: 1.575rem; height: 1.575rem; }
            .vf-success-sub { font-size: .975rem; }
          }

          @media (min-width: 1536px) {
            .vf-form { gap: 1.125rem; }
            .vf-row-gap { gap: .925rem; }
            .vf-skill-btn { font-size: .925rem; padding: .425rem .9rem; }
            .vf-skill-gap { gap: .525rem; margin-top: .3rem; }
            .vf-error { font-size: .925rem; }
            .vf-server-error { font-size: 1rem; padding: .9rem 1.175rem; }

            .vf-success-pad { padding: 3.75rem 1rem; }
            .vf-success-icon { width: 4rem; height: 4rem; margin: 0 auto 1.5rem; }
            .vf-success-icon-svg { width: 1.75rem; height: 1.75rem; }
            .vf-success-sub { font-size: 1.075rem; }
          }

          @media (min-width: 1680px) {
            .vf-form { gap: 1.275rem; }
            .vf-row-gap { gap: 1.025rem; }
            .vf-skill-btn { font-size: 1.025rem; padding: .475rem 1rem; }
            .vf-skill-gap { gap: .575rem; margin-top: .35rem; }
            .vf-error { font-size: 1rem; }
            .vf-server-error { font-size: 1.1rem; padding: 1rem 1.3rem; }

            .vf-success-pad { padding: 4.25rem 1rem; }
            .vf-success-icon { width: 4.5rem; height: 4.5rem; margin: 0 auto 1.675rem; }
            .vf-success-icon-svg { width: 1.975rem; height: 1.975rem; }
            .vf-success-sub { font-size: 1.175rem; }
          }

          @media (min-width: 1920px) {
            .vf-form { gap: 1.5rem; }
            .vf-row-gap { gap: 1.25rem; }
            . { font-size: 1.25rem; }
            .vf-skill-btn { font-size: 1.2rem; padding: .575rem 1.2rem; }
            .vf-skill-gap { gap: .7rem; margin-top: .425rem; }
            .vf-error { font-size: 1.15rem; }
            .vf-server-error { font-size: 1.275rem; padding: 1.175rem 1.5rem; }

            .vf-success-pad { padding: 5rem 1rem; }
            .vf-success-icon { width: 5.25rem; height: 5.25rem; margin: 0 auto 2rem; }
            .vf-success-icon-svg { width: 2.25rem; height: 2.25rem; }
            .vf-success-sub { font-size: 1.35rem; }
          }
      `}
      </style>
    </>
  );
}
