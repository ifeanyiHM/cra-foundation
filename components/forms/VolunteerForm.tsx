"use client";
import { useState } from "react";
import { RiCheckLine, RiLoader4Line } from "react-icons/ri";

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
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
  };

  if (submitted)
    return (
      <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
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
        <h3 style={{ marginBottom: "0.5rem" }}>Application Received!</h3>
        <p style={{ color: "var(--neutral-500)" }}>
          Thank you, {form.firstName}. We&apos;ll be in touch at {form.email}{" "}
          within 48 hours.
        </p>
      </div>
    );

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0.75rem",
          }}
        >
          <div>
            <label className="form-label">First Name *</label>
            <input
              className="form-input"
              placeholder="First name"
              value={form.firstName}
              onChange={(e) =>
                setForm((f) => ({ ...f, firstName: e.target.value }))
              }
            />
            {errors.firstName && (
              <p className="form-error">{errors.firstName}</p>
            )}
          </div>
          <div>
            <label className="form-label">Last Name</label>
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
        <div>
          <label className="form-label">Email Address *</label>
          <input
            type="email"
            className="form-input"
            placeholder="you@example.com"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          />
          {errors.email && <p className="form-error">{errors.email}</p>}
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0.75rem",
          }}
        >
          <div>
            <label className="form-label">Phone *</label>
            <input
              type="tel"
              className="form-input"
              placeholder="0801…"
              value={form.phone}
              onChange={(e) =>
                setForm((f) => ({ ...f, phone: e.target.value }))
              }
            />
            {errors.phone && <p className="form-error">{errors.phone}</p>}
          </div>
          <div>
            <label className="form-label">Occupation</label>
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
        <div>
          <label className="form-label">Skills & Interests</label>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.4rem",
              marginTop: "0.25rem",
            }}
          >
            {skillOptions.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => toggleSkill(s)}
                style={{
                  padding: "0.35rem 0.75rem",
                  borderRadius: "999px",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  border: `1.5px solid ${skills.includes(s) ? "var(--brand-600)" : "var(--border-default)"}`,
                  background: skills.includes(s)
                    ? "var(--brand-50)"
                    : "var(--white)",
                  color: skills.includes(s)
                    ? "var(--brand-600)"
                    : "var(--neutral-600)",
                  cursor: "pointer",
                  transition: "all 0.12s ease",
                }}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="form-label">Availability</label>
          <select
            className="form-select"
            value={form.availability}
            onChange={(e) =>
              setForm((f) => ({ ...f, availability: e.target.value }))
            }
          >
            <option value="">Select availability…</option>
            <option>Weekday mornings</option>
            <option>Weekday afternoons / evenings</option>
            <option>Weekends only</option>
            <option>Flexible / any time</option>
          </select>
        </div>
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
            <p className="form-error">{errors.motivation}</p>
          )}
        </div>
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
      `}
      </style>
    </>
  );
}
