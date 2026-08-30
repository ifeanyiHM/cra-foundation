"use client";
import { useState } from "react";
import { RiCheckLine, RiLoader4Line } from "react-icons/ri";
import Dropdown, { DropdownOption } from "../ui/DropDown";

const subjects = [
  "General Enquiry",
  "Donation / Financial Support",
  "Volunteer Application",
  "Sponsorship",
  "Media & Press",
  "Partnership / Corporate",
  "Item Donation",
  "Other",
];

const subjectOptions: DropdownOption[] = subjects.map((s) => ({
  value: s,
  label: s,
}));

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.firstName.trim()) e.firstName = "Required";
    if (!form.lastName.trim()) e.lastName = "Required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      e.email = "Valid email required";
    if (!form.subject) e.subject = "Please select a subject";
    if (form.message.trim().length < 10)
      e.message = "Please enter at least 10 characters";
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
        body: JSON.stringify({ type: "contact", ...form }),
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

  {
    /* Success state */
  }
  if (submitted)
    return (
      <div className="cf-success-pad" style={{ textAlign: "center" }}>
        <div
          className="cf-success-icon"
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
            className="cf-success-icon-svg"
            style={{ color: "var(--accent-green-600)" }}
          />
        </div>
        <h3 className="cf-success-title">Message Sent!</h3>
        <p className="cf-success-sub" style={{ color: "var(--neutral-500)" }}>
          Thank you, {form.firstName}. We&apos;ll reply to {form.email} within
          24–48 hours.
        </p>
      </div>
    );

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="cf-form"
        style={{ display: "flex", flexDirection: "column" }}
      >
        {/* Name row */}
        <div
          className="cf-row-gap"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
        >
          {(
            [
              ["firstName", "First Name *", "text", "First name"],
              ["lastName", "Last Name *", "text", "Last name"],
            ] as [string, string, string, string][]
          ).map(([k, l, t, p]) => (
            <div key={k}>
              <label className="form-label">{l}</label>
              <input
                type={t}
                className="form-input"
                placeholder={p}
                value={(form as Record<string, string>)[k]}
                onChange={(e) =>
                  setForm((f) => ({ ...f, [k]: e.target.value }))
                }
              />
              {errors[k] && <p className="form-error">{errors[k]}</p>}
            </div>
          ))}
        </div>

        {/* Email */}
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

        {/* Phone */}
        <div>
          <label className="form-label">Phone (optional)</label>
          <input
            type="tel"
            className="form-input"
            placeholder="0801 234 5678"
            value={form.phone}
            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
          />
        </div>

        {/* Subject — Dropdown */}
        <Dropdown
          label="Subject *"
          options={subjectOptions}
          value={form.subject}
          onChange={(val) => setForm((f) => ({ ...f, subject: val }))}
          placeholder="Select a subject…"
          error={errors.subject}
        />

        {/* Message */}
        <div>
          <label className="form-label">Message *</label>
          <textarea
            className="form-textarea"
            rows={5}
            placeholder="Write your message here…"
            value={form.message}
            onChange={(e) =>
              setForm((f) => ({ ...f, message: e.target.value }))
            }
            style={{ resize: "vertical" }}
          />
          {errors.message && <p className="form-error">{errors.message}</p>}
        </div>

        {/* Server error */}
        {serverError && (
          <p
            className="cf-error-text"
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
              Sending…
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
      <style>{`
      /* === RESPONSIVE SCALE > 1280px === */

      /* Form */
      .cf-form { gap: 1rem; }
      .cf-row-gap { gap: .75rem; }
      .cf-error-text { font-size: .875rem; padding: .75rem 1rem; }

      /* Success state */
      .cf-success-pad { padding: 3rem 1rem; }
      .cf-success-icon { width: 3.5rem; height: 3.5rem; margin: 0 auto 1.25rem; }
      .cf-success-icon-svg { width: 1.5rem; height: 1.5rem; }
      .cf-success-title { margin-bottom: .5rem; }
      .cf-success-sub { font-size: .9375rem; }

      @media (min-width: 1440px) {
        .cf-form { gap: 1.075rem; }
        .cf-row-gap { gap: .825rem; }
        .cf-error-text { font-size: .9rem; padding: .8rem 1.05rem; }

        .cf-success-pad { padding: 3.25rem 1rem; }
        .cf-success-icon { width: 3.625rem; height: 3.625rem; margin: 0 auto 1.325rem; }
        .cf-success-icon-svg { width: 1.575rem; height: 1.575rem; }
        .cf-success-sub { font-size: .975rem; }
      }

      @media (min-width: 1536px) {
        .cf-form { gap: 1.25rem; }
        .cf-row-gap { gap: .925rem; }
        .cf-error-text { font-size: 1rem; padding: .9rem 1.175rem; }

        .cf-success-pad { padding: 3.75rem 1rem; }
        .cf-success-icon { width: 4rem; height: 4rem; margin: 0 auto 1.5rem; }
        .cf-success-icon-svg { width: 1.75rem; height: 1.75rem; }
        .cf-success-sub { font-size: 1.075rem; }
      }

      @media (min-width: 1680px) {
        .cf-form { gap: 1.425rem; }
        .cf-row-gap { gap: 1.025rem; }
        .cf-error-text { font-size: 1.1rem; padding: 1rem 1.3rem; }

        .cf-success-pad { padding: 4.25rem 1rem; }
        .cf-success-icon { width: 4.5rem; height: 4.5rem; margin: 0 auto 1.675rem; }
        .cf-success-icon-svg { width: 1.975rem; height: 1.975rem; }
        .cf-success-sub { font-size: 1.175rem; }
      }

      @media (min-width: 1920px) {
        .cf-form { gap: 1.625rem; }
        .cf-row-gap { gap: 1.25rem; }
        .cf-error-text { font-size: 1.275rem; padding: 1.175rem 1.5rem; }

        .cf-success-pad { padding: 5rem 1rem; }
        .cf-success-icon { width: 5.25rem; height: 5.25rem; margin: 0 auto 2rem; }
        .cf-success-icon-svg { width: 2.25rem; height: 2.25rem; }
        .cf-success-sub { font-size: 1.35rem; }
      }

      @media (max-width: 767px) {
        input, select, textarea { background: none !important; }
      }
    `}</style>
    </>
  );
}
