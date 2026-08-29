"use client";
import { useState } from "react";
import { DonationTier, DonationFrequency } from "@/types";
import { RiErrorWarningLine } from "react-icons/ri";

interface Props {
  tiers: DonationTier[];
}

export default function DonationForm({ tiers }: Props) {
  const [frequency, setFrequency] = useState<DonationFrequency>("once");
  const [selectedTier, setSelectedTier] = useState<number | null>(null);
  const [custom, setCustom] = useState("");
  const [step, setStep] = useState<1 | 2>(1);
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    anonymous: false,
    coverFees: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showTransferModal, setShowTransferModal] = useState(false);

  const baseAmount = selectedTier ?? (custom ? parseFloat(custom) : null);
  const feeAdjustedAmount =
    baseAmount && form.coverFees ? Math.round(baseAmount * 1.02) : baseAmount;

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.firstName.trim()) e.firstName = "First name is required";
    if (!form.lastName.trim()) e.lastName = "Last name is required";
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email))
      e.email = "Valid email required";
    setErrors(e);
    return !Object.keys(e).length;
  };

  const goToDetails = () => {
    if (!baseAmount) return;
    setStep(2);
  };

  const proceedToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    setPaymentError(null);
    if (!validate()) return;
    // Validation passed — PaystackButton below handles the actual charge.
    // We don't auto-trigger it here; the button itself opens the Paystack popup.
  };

  return (
    <>
      <div>
        {/* Progress indicator */}
        <div
          className="df-progress"
          style={{ display: "flex", alignItems: "center" }}
        >
          {[
            { n: 1, label: "Amount" },
            { n: 2, label: "Details" },
          ].map(({ n, label }, i) => (
            <div
              key={n}
              style={{ display: "flex", alignItems: "center", gap: ".5rem" }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: ".5rem" }}
              >
                <div
                  className="df-step-num"
                  style={{
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    background:
                      step >= n ? "var(--brand-600)" : "var(--neutral-100)",
                    color: step >= n ? "#fff" : "var(--neutral-400)",
                    transition: "all .2s",
                  }}
                >
                  {n}
                </div>
                <span
                  className="df-step-label"
                  style={{
                    fontWeight: 500,
                    color:
                      step >= n ? "var(--neutral-900)" : "var(--neutral-400)",
                  }}
                >
                  {label}
                </span>
              </div>
              {i < 1 && (
                <div
                  className="df-step-line"
                  style={{
                    height: "1px",
                    background:
                      step > n ? "var(--brand-600)" : "var(--border-subtle)",
                    transition: "background .2s",
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Step 1 */}
        {step === 1 && (
          <div>
            {/* Frequency toggle */}
            <div
              className="df-freq-wrap"
              style={{
                display: "flex",
                background: "var(--neutral-100)",
                borderRadius: "var(--radius-full)",
                width: "fit-content",
              }}
            >
              {(["once", "monthly", "annually"] as DonationFrequency[]).map(
                (f) => (
                  <button
                    key={f}
                    onClick={() => setFrequency(f)}
                    className="df-freq-btn"
                    style={{
                      borderRadius: "var(--radius-full)",
                      fontWeight: 600,
                      border: "none",
                      cursor: "pointer",
                      transition: "all .15s ease",
                      background:
                        frequency === f ? "var(--white)" : "transparent",
                      color:
                        frequency === f
                          ? "var(--neutral-900)"
                          : "var(--neutral-500)",
                      boxShadow: frequency === f ? "var(--shadow-sm)" : "none",
                    }}
                  >
                    {f === "once"
                      ? "One-time"
                      : f === "monthly"
                        ? "Monthly"
                        : "Annual"}
                  </button>
                ),
              )}
            </div>

            {/* Recurring notice */}
            {frequency !== "once" && (
              <div
                className="df-notice"
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  background: "var(--accent-amber-50)",
                  border: "1px solid #FEF3C7",
                  borderRadius: "var(--radius-lg)",
                }}
              >
                <RiErrorWarningLine
                  className="df-notice-icon"
                  style={{
                    color: "var(--accent-amber)",
                    flexShrink: 0,
                    marginTop: ".1rem",
                  }}
                />
                <p
                  className="df-notice-text"
                  style={{ color: "var(--neutral-600)", lineHeight: 1.5 }}
                >
                  The first {frequency} charge happens now. We&apos;ll set up
                  automatic future charges using your card after this payment.
                </p>
              </div>
            )}

            {/* Tier grid */}
            <div className="df-tier-grid">
              {tiers.map((tier) => (
                <button
                  key={tier.amount}
                  onClick={() => {
                    setSelectedTier(tier.amount);
                    setCustom("");
                  }}
                  className="df-tier-pad"
                  style={{
                    textAlign: "left",
                    borderRadius: "var(--radius-lg)",
                    border: `1.5px solid ${selectedTier === tier.amount ? "var(--brand-600)" : "var(--border-default)"}`,
                    background:
                      selectedTier === tier.amount
                        ? "var(--brand-50)"
                        : "var(--white)",
                    cursor: "pointer",
                    transition: "all .15s ease",
                  }}
                >
                  <div
                    className="df-tier-label"
                    style={{
                      fontWeight: 700,
                      color:
                        selectedTier === tier.amount
                          ? "var(--brand-600)"
                          : "var(--neutral-900)",
                    }}
                  >
                    {tier.label}
                  </div>
                  <div
                    className="df-tier-desc"
                    style={{
                      fontWeight: 600,
                      color:
                        selectedTier === tier.amount
                          ? "var(--brand-600)"
                          : "var(--neutral-500)",
                    }}
                  >
                    {tier.description}
                  </div>
                  <div
                    className="df-tier-impact line-clamp-2"
                    style={{ color: "var(--neutral-400)", lineHeight: 1.5 }}
                  >
                    {tier.impact}
                  </div>
                </button>
              ))}
            </div>

            {/* Custom amount */}
            <div className="df-custom-mb">
              <label className="form-label">Or enter a custom amount (₦)</label>
              <input
                type="number"
                className="form-input"
                placeholder="e.g. 15000"
                min="100"
                value={custom}
                onChange={(e) => {
                  setCustom(e.target.value);
                  setSelectedTier(null);
                }}
              />
            </div>

            <button
              onClick={goToDetails}
              disabled={!baseAmount}
              className="btn btn-primary btn-lg"
              style={{
                width: "100%",
                justifyContent: "center",
                opacity: !baseAmount ? 0.45 : 1,
              }}
            >
              Continue —{" "}
              {baseAmount
                ? `₦${baseAmount.toLocaleString()}`
                : "Select an amount"}
            </button>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <form onSubmit={proceedToPayment}>
            {/* Summary bar */}
            <div
              className="df-summary"
              style={{
                background: "var(--neutral-50)",
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--border-subtle)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p
                className="df-summary-text"
                style={{ color: "var(--neutral-600)" }}
              >
                Donating{" "}
                <strong style={{ color: "var(--neutral-900)" }}>
                  ₦{baseAmount?.toLocaleString()}
                </strong>{" "}
                ·{" "}
                <span
                  style={{
                    color: "var(--neutral-400)",
                    textTransform: "capitalize",
                  }}
                >
                  {frequency}
                </span>
              </p>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="df-summary-change"
                style={{
                  fontWeight: 600,
                  color: "var(--brand-600)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Change
              </button>
            </div>

            {/* Name row */}
            <div
              className="df-row-gap"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
            >
              {[
                ["firstName", "First Name *", "text", "First name"],
                ["lastName", "Last Name *", "text", "Last name"],
              ].map(([k, lbl, t, ph]) => (
                <div key={k}>
                  <label className="form-label">{lbl}</label>
                  <input
                    type={t}
                    className="form-input"
                    placeholder={ph}
                    value={(form as unknown as Record<string, string>)[k]}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, [k]: e.target.value }))
                    }
                  />
                  {errors[k] && <p className="form-error">{errors[k]}</p>}
                </div>
              ))}
            </div>

            {/* Email */}
            <div className="df-field-mb">
              <label className="form-label">Email Address *</label>
              <input
                type="email"
                className="form-input"
                placeholder="you@example.com"
                value={form.email}
                onChange={(e) =>
                  setForm((f) => ({ ...f, email: e.target.value }))
                }
              />
              {errors.email && <p className="form-error">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div className="df-field-mb">
              <label className="form-label">Phone (optional)</label>
              <input
                type="tel"
                className="form-input"
                placeholder="08012345678"
                value={form.phone}
                onChange={(e) =>
                  setForm((f) => ({ ...f, phone: e.target.value }))
                }
              />
            </div>

            {/* Message */}
            <div className="df-msg-mb">
              <label className="form-label">Message (optional)</label>
              <textarea
                className="form-textarea"
                rows={3}
                placeholder="A note for the team..."
                value={form.message}
                onChange={(e) =>
                  setForm((f) => ({ ...f, message: e.target.value }))
                }
              />
            </div>

            {/* Checkboxes */}
            <div
              className="df-check-group"
              style={{ display: "flex", flexDirection: "column" }}
            >
              {[
                { k: "anonymous", l: "Make this donation anonymous" },
                { k: "coverFees", l: "Cover processing fees (adds 2%)" },
              ].map(({ k, l }) => (
                <label
                  key={k}
                  className="df-check-label"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    color: "var(--neutral-700)",
                  }}
                >
                  <input
                    type="checkbox"
                    className="df-check-input"
                    checked={(form as unknown as Record<string, boolean>)[k]}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, [k]: e.target.checked }))
                    }
                    style={{
                      accentColor: "var(--brand-600)",
                      cursor: "pointer",
                    }}
                  />
                  {l}
                </label>
              ))}
            </div>

            {/* Fee note */}
            {feeAdjustedAmount && form.coverFees && (
              <p
                className="df-fee-note"
                style={{ color: "var(--neutral-500)" }}
              >
                Total charge including fees:{" "}
                <strong style={{ color: "var(--neutral-900)" }}>
                  ₦{feeAdjustedAmount.toLocaleString()}
                </strong>
              </p>
            )}

            {/* Payment error */}
            {paymentError && (
              <div
                className="df-error-wrap"
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  background: "var(--brand-50)",
                  border: "1px solid var(--brand-100)",
                  borderRadius: "var(--radius-lg)",
                }}
              >
                <RiErrorWarningLine
                  className="df-error-icon"
                  style={{
                    color: "var(--brand-600)",
                    flexShrink: 0,
                    marginTop: ".1rem",
                  }}
                />
                <p
                  className="df-error-text"
                  style={{ color: "var(--neutral-700)", lineHeight: 1.5 }}
                >
                  {paymentError}
                </p>
              </div>
            )}

            {/* Actions */}
            <div className="df-actions" style={{ display: "flex" }}>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="btn btn-secondary"
                style={{ flex: 1 }}
              >
                ← Back
              </button>
              <div style={{ flex: 2 }}>
                <button
                  type="button"
                  disabled={
                    !form.firstName ||
                    !form.lastName ||
                    !/^\S+@\S+\.\S+$/.test(form.email)
                  }
                  onClick={() => setShowTransferModal(true)}
                  className="btn btn-primary"
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    opacity:
                      !form.firstName ||
                      !form.lastName ||
                      !/^\S+@\S+\.\S+$/.test(form.email)
                        ? 0.5
                        : 1,
                  }}
                >
                  Donate ₦{feeAdjustedAmount?.toLocaleString() ?? 0}
                </button>
              </div>
            </div>

            <p
              className="df-hint"
              style={{ color: "var(--neutral-400)", textAlign: "center" }}
            >
              Online payments are temporarily unavailable. Click the button
              above to view our bank transfer details.
            </p>
          </form>
        )}

        {/* Modal */}
        {showTransferModal && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,.6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 9999,
              padding: "1rem",
            }}
            onClick={() => setShowTransferModal(false)}
          >
            <div
              className="df-modal-inner"
              onClick={(e) => e.stopPropagation()}
              style={{
                width: "100%",
                background: "#fff",
                boxShadow: "0 25px 80px rgba(0,0,0,.25)",
              }}
            >
              <h3 className="df-modal-title" style={{ textAlign: "center" }}>
                Online Donations Temporarily Unavailable
              </h3>
              <p
                className="df-modal-sub"
                style={{
                  textAlign: "center",
                  color: "var(--neutral-600)",
                  lineHeight: 1.7,
                }}
              >
                Kindly support CRA Foundation by making a bank transfer using
                the account details below.
              </p>
              <div
                className="df-modal-bank"
                style={{
                  background: "var(--neutral-950)",
                  borderRadius: "var(--radius-xl)",
                }}
              >
                <p
                  className="df-modal-bank-label"
                  style={{
                    fontWeight: 700,
                    letterSpacing: ".08em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,.35)",
                  }}
                >
                  Bank Transfer
                </p>
                <div
                  className="df-modal-bank-gap"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  {[
                    ["Bank", "Zenith Bank Surulere"],
                    ["Account Name", "Children's Right Advocate Foundation"],
                    ["Account Number", "1012771274"],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <p
                        className="df-modal-field-key"
                        style={{ color: "rgba(255,255,255,.3)" }}
                      >
                        {k}
                      </p>
                      <p
                        className={
                          k === "Account Number"
                            ? "df-modal-field-val-num"
                            : "df-modal-field-val"
                        }
                        style={{
                          fontWeight: k === "Account Number" ? 800 : 600,
                          color:
                            k === "Account Number"
                              ? "var(--brand-600)"
                              : "rgba(255,255,255,.8)",
                          letterSpacing:
                            k === "Account Number" ? ".05em" : "normal",
                        }}
                      >
                        {v}
                      </p>
                    </div>
                  ))}
                </div>
                <p
                  className="df-modal-note"
                  style={{ color: "rgba(255,255,255,.25)", lineHeight: 1.6 }}
                >
                  After transfer, email your name and reference to
                  admin@crafoundation.com.ng
                </p>
              </div>
              <button
                onClick={() => setShowTransferModal(false)}
                className="btn btn-primary df-modal-close-mt"
                style={{ width: "100%", justifyContent: "center" }}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      <style>{`
  /* === RESPONSIVE SCALE > 1280px === */

  /* Progress indicator */
  .df-progress { gap: .5rem; margin-bottom: 2rem; }
  .df-step-num { width: 1.625rem; height: 1.625rem; font-size: .75rem; }
  .df-step-label { font-size: .845rem; }
  .df-step-line { width: 3rem; }

  /* Step 1 — Frequency toggle */
  .df-freq-wrap { padding: .25rem; margin-bottom: 1.5rem; }
  .df-freq-btn { padding: .45rem 1rem; font-size: .845rem; }

  /* Step 1 — Recurring notice */
  .df-notice { padding: .75rem 1rem; gap: .5rem; margin-bottom: 1.25rem; }
  .df-notice-icon { width: 1rem; height: 1rem; }
  .df-notice-text { font-size: .8rem; }

  /* Step 1 — Tier grid */
  .df-tier-grid { display: grid; grid-template-columns: repeat(auto-fill,minmax(160px,1fr)); gap: .625rem; margin-bottom: 1rem; }
  .df-tier-pad { padding: 1rem; }
  .df-tier-label { font-size: 1rem; margin-bottom: .2rem; }
  .df-tier-desc { font-size: .74rem; margin-bottom: .375rem; }
  .df-tier-impact { font-size: .75rem; }

  /* Step 1 — Custom + continue */
  .df-custom-mb { margin-bottom: 1.5rem; }

  /* Step 2 — Summary bar */
  .df-summary { padding: .875rem 1rem; margin-bottom: 1.5rem; }
  .df-summary-text { font-size: .875rem; }
  .df-summary-change { font-size: .8rem; }

  /* Step 2 — Fields */
  .df-row-gap { gap: .75rem; margin-bottom: .75rem; }
  .df-field-mb { margin-bottom: .75rem; }
  .df-msg-mb { margin-bottom: 1.25rem; }

  /* Step 2 — Checkboxes */
  .df-check-group { gap: .625rem; margin-bottom: 1.5rem; }
  .df-check-label { font-size: .875rem; gap: .625rem; }
  .df-check-input { width: 1rem; height: 1rem; }

  /* Step 2 — Fee note */
  .df-fee-note { font-size: .8rem; margin-bottom: 1rem; }

  /* Step 2 — Error */
  .df-error-wrap { padding: .75rem 1rem; gap: .5rem; margin-bottom: 1.25rem; }
  .df-error-icon { width: 1rem; height: 1rem; }
  .df-error-text { font-size: .8rem; }

  /* Step 2 — Actions */
  .df-actions { gap: .75rem; }
  .df-hint { font-size: .74rem; margin-top: 1rem; }

  /* Modal — same classes as sf- in SponsorForm */
  .df-modal-inner { max-width: 520px; padding: 2rem; border-radius: 20px; }
  .df-modal-title { margin-bottom: .75rem; }
  .df-modal-sub { font-size: .9375rem; margin-bottom: 1.75rem; }
  .df-modal-bank { padding: 1.75rem; }
  .df-modal-bank-label { font-size: .74rem; margin-bottom: 1rem; }
  .df-modal-field-key { font-size: .74rem; margin-bottom: .15rem; }
  .df-modal-field-val { font-size: .875rem; }
  .df-modal-field-val-num { font-size: 1.125rem; }
  .df-modal-bank-gap { gap: .75rem; }
  .df-modal-note { font-size: .78rem; margin-top: 1.25rem; }
  .df-modal-close-mt { margin-top: 1.5rem; }

  @media (min-width: 1440px) {
    .df-progress { margin-bottom: 2.125rem; }
    .df-step-num { width: 1.75rem; height: 1.75rem; font-size: .775rem; }
    .df-step-label { font-size: .875rem; }
    .df-step-line { width: 3.25rem; }

    .df-freq-btn { padding: .475rem 1.075rem; font-size: .875rem; }
    .df-notice { padding: .8rem 1.075rem; }
    .df-notice-text { font-size: .825rem; }

    .df-tier-grid { grid-template-columns: repeat(3, 1fr); gap: .675rem; margin-bottom: 1.075rem; }
    .df-tier-pad { padding: 1.075rem; }
    .df-tier-label { font-size: 1.025rem; }
    .df-tier-desc { font-size: .76rem; }
    .df-tier-impact { font-size: .775rem; }

    .df-summary { padding: .925rem 1.075rem; margin-bottom: 1.625rem; }
    .df-summary-text { font-size: .9rem; }
    .df-summary-change { font-size: .825rem; }

    .df-check-label { font-size: .9rem; }
    .df-fee-note { font-size: .825rem; }
    .df-error-text { font-size: .825rem; }
    .df-hint { font-size: .76rem; }

    .df-modal-inner { max-width: 560px; padding: 2.125rem; }
    .df-modal-sub { font-size: .975rem; margin-bottom: 1.875rem; }
    .df-modal-bank { padding: 1.875rem; }
    .df-modal-bank-label { font-size: .76rem; margin-bottom: 1.075rem; }
    .df-modal-field-key { font-size: .76rem; }
    .df-modal-field-val { font-size: .9rem; }
    .df-modal-field-val-num { font-size: 1.175rem; }
    .df-modal-bank-gap { gap: .8rem; }
    .df-modal-note { font-size: .8rem; margin-top: 1.325rem; }
    .df-modal-close-mt { margin-top: 1.625rem; }
  }

  @media (min-width: 1536px) {
    .df-progress { margin-bottom: 2.375rem; }
    .df-step-num { width: 1.975rem; height: 1.975rem; font-size: .875rem; }
    .df-step-label { font-size: .975rem; }
    .df-step-line { width: 3.75rem; }

    .df-freq-btn { padding: .55rem 1.2rem; font-size: .975rem; }
    .df-notice { padding: .9rem 1.175rem; }
    .df-notice-icon { width: 1.15rem; height: 1.15rem; }
    .df-notice-text { font-size: .925rem; }

    .df-tier-grid { gap: .775rem; margin-bottom: 1.2rem; }
    .df-tier-pad { padding: 1.2rem; }
    .df-tier-label { font-size: 1.15rem; margin-bottom: .25rem; }
    .df-tier-desc { font-size: .86rem; margin-bottom: .425rem; }
    .df-tier-impact { font-size: .875rem; }

    .df-custom-mb { margin-bottom: 1.875rem; }

    .df-summary { padding: 1.05rem 1.2rem; margin-bottom: 1.875rem; }
    .df-summary-text { font-size: 1rem; }
    .df-summary-change { font-size: .925rem; }

    .df-row-gap { gap: .925rem; margin-bottom: .925rem; }
    .df-field-mb { margin-bottom: .925rem; }
    .df-msg-mb { margin-bottom: 1.5rem; }

    .df-check-group { gap: .75rem; margin-bottom: 1.875rem; }
    .df-check-label { font-size: 1rem; gap: .7rem; }
    .df-check-input { width: 1.15rem; height: 1.15rem; }
    .df-fee-note { font-size: .925rem; margin-bottom: 1.2rem; }
    .df-error-text { font-size: .925rem; }
    .df-actions { gap: .875rem; }
    .df-hint { font-size: .84rem; margin-top: 1.2rem; }

    .df-modal-inner { max-width: 620px; padding: 2.375rem; border-radius: 24px; }
    .df-modal-sub { font-size: 1.075rem; margin-bottom: 2.125rem; }
    .df-modal-bank { padding: 2.125rem; }
    .df-modal-bank-label { font-size: .84rem; margin-bottom: 1.2rem; }
    .df-modal-field-key { font-size: .84rem; }
    .df-modal-field-val { font-size: 1rem; }
    .df-modal-field-val-num { font-size: 1.35rem; }
    .df-modal-bank-gap { gap: .925rem; }
    .df-modal-note { font-size: .9rem; margin-top: 1.5rem; }
    .df-modal-close-mt { margin-top: 1.875rem; }
  }

  @media (min-width: 1680px) {
    .df-progress { margin-bottom: 2.625rem; }
    .df-step-num { width: 2.175rem; height: 2.175rem; font-size: .975rem; }
    .df-step-label { font-size: 1.075rem; }
    .df-step-line { width: 4.25rem; }

    .df-freq-btn { padding: .625rem 1.35rem; font-size: 1.075rem; }
    .df-notice { padding: 1rem 1.3rem; }
    .df-notice-icon { width: 1.25rem; height: 1.25rem; }
    .df-notice-text { font-size: 1.025rem; }

    .df-tier-grid { gap: .875rem; margin-bottom: 1.375rem; }
    .df-tier-pad { padding: 1.375rem; }
    .df-tier-label { font-size: 1.275rem; margin-bottom: .275rem; }
    .df-tier-desc { font-size: .95rem; margin-bottom: .475rem; }
    .df-tier-impact { font-size: .975rem; }

    .df-custom-mb { margin-bottom: 2.125rem; }

    .df-summary { padding: 1.175rem 1.375rem; margin-bottom: 2.125rem; }
    .df-summary-text { font-size: 1.1rem; }
    .df-summary-change { font-size: 1.025rem; }

    .df-row-gap { gap: 1.025rem; margin-bottom: 1.025rem; }
    .df-field-mb { margin-bottom: 1.025rem; }
    .df-msg-mb { margin-bottom: 1.75rem; }

    .df-check-group { gap: .875rem; margin-bottom: 2.125rem; }
    .df-check-label { font-size: 1.1rem; gap: .775rem; }
    .df-check-input { width: 1.3rem; height: 1.3rem; }
    .df-fee-note { font-size: 1.025rem; margin-bottom: 1.375rem; }
    .df-error-text { font-size: 1rem; }
    .df-actions { gap: 1rem; }
    .df-hint { font-size: .92rem; margin-top: 1.375rem; }

    .df-modal-inner { max-width: 680px; padding: 2.625rem; border-radius: 26px; }
    .df-modal-sub { font-size: 1.175rem; margin-bottom: 2.375rem; }
    .df-modal-bank { padding: 2.375rem; }
    .df-modal-bank-label { font-size: .92rem; margin-bottom: 1.375rem; }
    .df-modal-field-key { font-size: .92rem; }
    .df-modal-field-val { font-size: 1.1rem; }
    .df-modal-field-val-num { font-size: 1.5rem; }
    .df-modal-bank-gap { gap: 1.025rem; }
    .df-modal-note { font-size: .975rem; margin-top: 1.675rem; }
    .df-modal-close-mt { margin-top: 2.125rem; }
  }

  @media (min-width: 1920px) {
    .df-progress { margin-bottom: 3rem; }
    .df-step-num { width: 2.5rem; height: 2.5rem; font-size: 1.125rem; }
    .df-step-label { font-size: 1.25rem; }
    .df-step-line { width: 5rem; }

    .df-freq-btn { padding: .725rem 1.575rem; font-size: 1.25rem; }
    .df-notice { padding: 1.175rem 1.5rem; }
    .df-notice-icon { width: 1.425rem; height: 1.425rem; }
    .df-notice-text { font-size: 1.175rem; }

    .df-tier-grid { gap: 1.05rem; margin-bottom: 1.625rem; }
    .df-tier-pad { padding: 1.625rem; }
    .df-tier-label { font-size: 1.5rem; margin-bottom: .325rem; }
    .df-tier-desc { font-size: 1.1rem; margin-bottom: .55rem; }
    .df-tier-impact { font-size: 1.125rem; }

    .df-custom-mb { margin-bottom: 2.5rem; }

    .df-summary { padding: 1.375rem 1.625rem; margin-bottom: 2.5rem; }
    .df-summary-text { font-size: 1.275rem; }
    .df-summary-change { font-size: 1.175rem; }

    .df-row-gap { gap: 1.25rem; margin-bottom: 1.25rem; }
    .df-field-mb { margin-bottom: 1.25rem; }
    .df-msg-mb { margin-bottom: 2rem; }

    .df-check-group { gap: 1rem; margin-bottom: 2.5rem; }
    .df-check-label { font-size: 1.275rem; gap: .9rem; }
    .df-check-input { width: 1.5rem; height: 1.5rem; }
    .df-fee-note { font-size: 1.175rem; margin-bottom: 1.625rem; }
    .df-error-text { font-size: 1.15rem; }
    .df-actions { gap: 1.25rem; }
    .df-hint { font-size: 1.075rem; margin-top: 1.625rem; }

    .df-modal-inner { max-width: 800px; padding: 3.125rem; border-radius: 30px; }
    .df-modal-sub { font-size: 1.35rem; margin-bottom: 2.875rem; }
    .df-modal-bank { padding: 2.875rem; }
    .df-modal-bank-label { font-size: 1.075rem; margin-bottom: 1.625rem; }
    .df-modal-field-key { font-size: 1.075rem; }
    .df-modal-field-val { font-size: 1.275rem; }
    .df-modal-field-val-num { font-size: 1.875rem; }
    .df-modal-bank-gap { gap: 1.25rem; }
    .df-modal-note { font-size: 1.125rem; margin-top: 2rem; }
    .df-modal-close-mt { margin-top: 2.5rem; }
  }
`}</style>
    </>
  );
}
