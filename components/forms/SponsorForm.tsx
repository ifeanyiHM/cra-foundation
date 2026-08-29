"use client";
import { useState } from "react";
import { RiErrorWarningLine } from "react-icons/ri";
import Dropdown, { DropdownOption } from "../ui/DropDown";

const sponsorshipTypeOptions: DropdownOption[] = [
  { value: "child", label: "Sponsor a Specific Child" },
  { value: "meal", label: "Meals Program" },
  { value: "education", label: "Education Scholarship" },
  { value: "health", label: "Health & Wellness" },
  { value: "general", label: "General Support" },
];

const amountOptions: DropdownOption[] = [
  { value: "10000", label: "₦10,000" },
  { value: "25000", label: "₦25,000" },
  { value: "50000", label: "₦50,000" },
  { value: "100000", label: "₦100,000" },
];

const frequencyOptions: DropdownOption[] = [
  { value: "monthly", label: "Monthly" },
  { value: "once", label: "One Time" },
  { value: "annually", label: "Annually" },
];

export default function SponsorForm() {
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    sponsorshipType: "child",
    amount: "25000",
    frequency: "monthly",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showTransferModal, setShowTransferModal] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.firstName.trim()) e.firstName = "Required";
    if (!form.lastName.trim()) e.lastName = "Required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      e.email = "Valid email required";
    if (!form.phone.trim()) e.phone = "Required";
    setErrors(e);
    return !Object.keys(e).length;
  };

  /** Re-validate on every relevant field change so the Pay button enables/disables live. */
  const isValid =
    form.firstName.trim() &&
    form.lastName.trim() &&
    /\S+@\S+\.\S+/.test(form.email) &&
    form.phone.trim();

  const amountNumber = parseInt(form.amount, 10) || 0;

  /** Pressing Enter inside the form (or clicking a non-Paystack submit) just runs validation feedback. */
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPaymentError(null);
    validate();
  };

  return (
    <>
      <form
        onSubmit={handleFormSubmit}
        className="sf-form"
        style={{ display: "flex", flexDirection: "column" }}
      >
        {/* Name row */}
        <div
          className="sf-row-gap"
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
              {errors[k] && (
                <p className="form-error sf-error-text">{errors[k]}</p>
              )}
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
          {errors.email && (
            <p className="form-error sf-error-text">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="form-label">Phone Number *</label>
          <input
            type="tel"
            className="form-input"
            placeholder="0801 234 5678"
            value={form.phone}
            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
          />
          {errors.phone && (
            <p className="form-error sf-error-text">{errors.phone}</p>
          )}
        </div>

        {/* Sponsorship type */}
        <Dropdown
          label="Sponsorship Type"
          options={sponsorshipTypeOptions}
          value={form.sponsorshipType}
          onChange={(val) => setForm((f) => ({ ...f, sponsorshipType: val }))}
        />

        {/* Amount + Frequency */}
        <div
          className="sf-row-gap"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
        >
          <Dropdown
            label="Monthly Amount (₦)"
            options={amountOptions}
            value={form.amount}
            onChange={(val) => setForm((f) => ({ ...f, amount: val }))}
          />
          <Dropdown
            label="Frequency"
            options={frequencyOptions}
            value={form.frequency}
            onChange={(val) => setForm((f) => ({ ...f, frequency: val }))}
          />
        </div>

        {/* Recurring notice */}
        {form.frequency !== "once" && (
          <div
            className="sf-notice"
            style={{
              display: "flex",
              alignItems: "flex-start",
              background: "var(--accent-amber-50)",
              border: "1px solid #FEF3C7",
              borderRadius: "var(--radius-lg)",
            }}
          >
            <RiErrorWarningLine
              className="sf-notice-icon"
              style={{
                color: "var(--accent-amber)",
                flexShrink: 0,
                marginTop: ".1rem",
              }}
            />
            <p
              className="sf-notice-text"
              style={{ color: "var(--neutral-600)", lineHeight: 1.5 }}
            >
              The first {form.frequency} charge happens now. We&apos;ll set up
              automatic future charges using your card after this payment.
            </p>
          </div>
        )}

        {/* Message */}
        <div>
          <label className="form-label">Message (optional)</label>
          <textarea
            className="form-textarea"
            rows={3}
            placeholder="Any notes or preferences…"
            value={form.message}
            onChange={(e) =>
              setForm((f) => ({ ...f, message: e.target.value }))
            }
            style={{ resize: "vertical" }}
          />
        </div>

        {/* Payment error */}
        {paymentError && (
          <div
            className="sf-notice"
            style={{
              display: "flex",
              alignItems: "flex-start",
              background: "var(--brand-50)",
              border: "1px solid var(--brand-100)",
              borderRadius: "var(--radius-lg)",
            }}
          >
            <RiErrorWarningLine
              className="sf-notice-icon"
              style={{
                color: "var(--brand-600)",
                flexShrink: 0,
                marginTop: ".1rem",
              }}
            />
            <p
              className="sf-error-text"
              style={{ color: "var(--neutral-700)", lineHeight: 1.5 }}
            >
              {paymentError}
            </p>
          </div>
        )}

        <button
          type="button"
          disabled={!isValid}
          onClick={() => {
            validate();
            if (isValid) setShowTransferModal(true);
          }}
          className="btn btn-primary"
          style={{
            width: "100%",
            justifyContent: "center",
            opacity: !isValid ? 0.5 : 1,
          }}
        >
          Sponsor with ₦{amountNumber.toLocaleString()}
        </button>

        <p
          className="sf-submit-hint"
          style={{ color: "var(--neutral-400)", textAlign: "center" }}
        >
          Online sponsorship payments are temporarily unavailable. Click the
          button above to view our bank transfer details.
        </p>
      </form>

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
            className="sf-modal-inner"
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%",
              background: "#fff",
              boxShadow: "0 25px 80px rgba(0,0,0,.25)",
            }}
          >
            <h3 className="sf-modal-title" style={{ textAlign: "center" }}>
              Online Donations Temporarily Unavailable
            </h3>
            <p
              className="sf-modal-sub"
              style={{
                textAlign: "center",
                color: "var(--neutral-600)",
                lineHeight: 1.7,
              }}
            >
              Kindly support CRA Foundation by making a bank transfer using the
              account details below.
            </p>

            <div
              className="sf-modal-bank"
              style={{
                background: "var(--neutral-950)",
                borderRadius: "var(--radius-xl)",
              }}
            >
              <p
                className="sf-modal-bank-label"
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
                className="sf-modal-bank-gap"
                style={{ display: "flex", flexDirection: "column" }}
              >
                {[
                  ["Bank", "Zenith Bank Surulere"],
                  ["Account Name", "Children's Right Advocate Foundation"],
                  ["Account Number", "1012771274"],
                ].map(([k, v]) => (
                  <div key={k}>
                    <p
                      className="sf-modal-field-key"
                      style={{ color: "rgba(255,255,255,.3)" }}
                    >
                      {k}
                    </p>
                    <p
                      className={
                        k === "Account Number"
                          ? "sf-modal-field-val-num"
                          : "sf-modal-field-val"
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
                className="sf-modal-note"
                style={{ color: "rgba(255,255,255,.25)", lineHeight: 1.6 }}
              >
                After transfer, email your name and reference to
                admin@crafoundation.com.ng
              </p>
            </div>

            <button
              onClick={() => setShowTransferModal(false)}
              className="btn btn-primary sf-modal-close-mt"
              style={{ width: "100%", justifyContent: "center" }}
            >
              Close
            </button>
          </div>
        </div>
      )}
      <style>
        {`
          @media (max-width: 767px) {
            input, select, textarea {
              background: none !important;
            }
          }

          /* === RESPONSIVE SCALE > 1280px === */

/* Form */
.sf-form { gap: .875rem; }
.sf-row-gap { gap: .75rem; }
.sf-notice { padding: .75rem 1rem; gap: .5rem; }
.sf-notice-icon { width: 1rem; height: 1rem; }
.sf-notice-text { font-size: .8rem; }
.sf-error-text { font-size: .8rem; }
.sf-submit-hint { font-size: .74rem; margin-top: .25rem; }

/* Modal */
.sf-modal-inner { max-width: 520px; padding: 2rem; border-radius: 20px; }
.sf-modal-title { margin-bottom: .75rem; }
.sf-modal-sub { font-size: .9375rem; margin-bottom: 1.75rem; }
.sf-modal-bank { padding: 1.75rem; }
.sf-modal-bank-label { font-size: .74rem; margin-bottom: 1rem; }
.sf-modal-field-key { font-size: .74rem; margin-bottom: .15rem; }
.sf-modal-field-val { font-size: .875rem; }
.sf-modal-field-val-num { font-size: 1.125rem; }
.sf-modal-bank-gap { gap: .75rem; }
.sf-modal-note { font-size: .78rem; margin-top: 1.25rem; }
.sf-modal-close-mt { margin-top: 1.5rem; }

@media (min-width: 1440px) {
  .sf-form { gap: .975rem; }
  .sf-row-gap { gap: .825rem; }
  .sf-notice { padding: .8rem 1.075rem; }
  .sf-notice-icon { width: 1.05rem; height: 1.05rem; }
  .sf-notice-text { font-size: .825rem; }
  .sf-error-text { font-size: .825rem; }
  .sf-submit-hint { font-size: .76rem; margin-top: .275rem; }

  .sf-modal-inner { max-width: 560px; padding: 2.125rem; }
  .sf-modal-sub { font-size: .975rem; margin-bottom: 1.875rem; }
  .sf-modal-bank { padding: 1.875rem; }
  .sf-modal-bank-label { font-size: .76rem; margin-bottom: 1.075rem; }
  .sf-modal-field-key { font-size: .76rem; }
  .sf-modal-field-val { font-size: .9rem; }
  .sf-modal-field-val-num { font-size: 1.175rem; }
  .sf-modal-bank-gap { gap: .8rem; }
  .sf-modal-note { font-size: .8rem; margin-top: 1.325rem; }
  .sf-modal-close-mt { margin-top: 1.625rem; }
}

@media (min-width: 1536px) {
  .sf-form { gap: 1.125rem; }
  .sf-row-gap { gap: .925rem; }
  .sf-notice { padding: .9rem 1.175rem; gap: .575rem; }
  .sf-notice-icon { width: 1.15rem; height: 1.15rem; }
  .sf-notice-text { font-size: .925rem; }
  .sf-error-text { font-size: .925rem; }
  .sf-submit-hint { font-size: .84rem; margin-top: .3rem; }

  .sf-modal-inner { max-width: 620px; padding: 2.375rem; border-radius: 24px; }
  .sf-modal-sub { font-size: 1.075rem; margin-bottom: 2.125rem; }
  .sf-modal-bank { padding: 2.125rem; }
  .sf-modal-bank-label { font-size: .84rem; margin-bottom: 1.2rem; }
  .sf-modal-field-key { font-size: .84rem; }
  .sf-modal-field-val { font-size: 1rem; }
  .sf-modal-field-val-num { font-size: 1.35rem; }
  .sf-modal-bank-gap { gap: .925rem; }
  .sf-modal-note { font-size: .9rem; margin-top: 1.5rem; }
  .sf-modal-close-mt { margin-top: 1.875rem; }
}

@media (min-width: 1680px) {
  .sf-form { gap: 1.275rem; }
  .sf-row-gap { gap: 1.025rem; }
  .sf-notice { padding: 1rem 1.3rem; gap: .625rem; }
  .sf-notice-icon { width: 1.25rem; height: 1.25rem; }
  .sf-notice-text { font-size: 1.025rem; }
  .sf-error-text { font-size: 1rem; }
  .sf-submit-hint { font-size: .92rem; margin-top: .35rem; }

  .sf-modal-inner { max-width: 680px; padding: 2.625rem; border-radius: 26px; }
  .sf-modal-sub { font-size: 1.175rem; margin-bottom: 2.375rem; }
  .sf-modal-bank { padding: 2.375rem; }
  .sf-modal-bank-label { font-size: .92rem; margin-bottom: 1.375rem; }
  .sf-modal-field-key { font-size: .92rem; }
  .sf-modal-field-val { font-size: 1.1rem; }
  .sf-modal-field-val-num { font-size: 1.5rem; }
  .sf-modal-bank-gap { gap: 1.025rem; }
  .sf-modal-note { font-size: .975rem; margin-top: 1.675rem; }
  .sf-modal-close-mt { margin-top: 2.125rem; }
}

@media (min-width: 1920px) {
  .sf-form { gap: 1.5rem; }
  .sf-row-gap { gap: 1.25rem; }
  .sf-notice { padding: 1.175rem 1.5rem; gap: .725rem; }
  .sf-notice-icon { width: 1.425rem; height: 1.425rem; }
  .sf-notice-text { font-size: 1.175rem; }
  .sf-error-text { font-size: 1.15rem; }
  .sf-submit-hint { font-size: 1.075rem; margin-top: .425rem; }

  .sf-modal-inner { max-width: 800px; padding: 3.125rem; border-radius: 30px; }
  .sf-modal-sub { font-size: 1.35rem; margin-bottom: 2.875rem; }
  .sf-modal-bank { padding: 2.875rem; }
  .sf-modal-bank-label { font-size: 1.075rem; margin-bottom: 1.625rem; }
  .sf-modal-field-key { font-size: 1.075rem; }
  .sf-modal-field-val { font-size: 1.275rem; }
  .sf-modal-field-val-num { font-size: 1.875rem; }
  .sf-modal-bank-gap { gap: 1.225rem; }
  .sf-modal-note { font-size: 1.125rem; margin-top: 2rem; }
  .sf-modal-close-mt { margin-top: 2.5rem; }
}
      `}
      </style>
    </>
  );
}
