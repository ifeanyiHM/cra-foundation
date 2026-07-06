"use client";
import { useState } from "react";
import { RiErrorWarningLine } from "react-icons/ri";

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
        style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0.75rem",
          }}
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
        <div>
          <label className="form-label">Phone Number *</label>
          <input
            type="tel"
            className="form-input"
            placeholder="0801 234 5678"
            value={form.phone}
            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
          />
          {errors.phone && <p className="form-error">{errors.phone}</p>}
        </div>
        <div>
          <label className="form-label">Sponsorship Type</label>
          <select
            className="form-select"
            value={form.sponsorshipType}
            onChange={(e) =>
              setForm((f) => ({ ...f, sponsorshipType: e.target.value }))
            }
          >
            <option value="child">Sponsor a Specific Child</option>
            <option value="meal">Meals Program</option>
            <option value="education">Education Scholarship</option>
            <option value="health">Health & Wellness</option>
            <option value="general">General Support</option>
          </select>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0.75rem",
          }}
        >
          <div>
            <label className="form-label">Monthly Amount (₦)</label>
            <select
              className="form-select"
              value={form.amount}
              onChange={(e) =>
                setForm((f) => ({ ...f, amount: e.target.value }))
              }
            >
              <option value="10000">₦10,000</option>
              <option value="25000">₦25,000</option>
              <option value="50000">₦50,000</option>
              <option value="100000">₦100,000</option>
            </select>
          </div>
          <div>
            <label className="form-label">Frequency</label>
            <select
              className="form-select"
              value={form.frequency}
              onChange={(e) =>
                setForm((f) => ({ ...f, frequency: e.target.value }))
              }
            >
              <option value="monthly">Monthly</option>
              <option value="once">One Time</option>
              <option value="annually">Annually</option>
            </select>
          </div>
        </div>

        {form.frequency !== "once" && (
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "0.5rem",
              padding: "0.75rem 1rem",
              background: "var(--accent-amber-50)",
              border: "1px solid #FEF3C7",
              borderRadius: "var(--radius-lg)",
            }}
          >
            <RiErrorWarningLine
              style={{
                width: "1rem",
                height: "1rem",
                color: "var(--accent-amber)",
                flexShrink: 0,
                marginTop: "0.1rem",
              }}
            />
            <p
              style={{
                fontSize: "0.8rem",
                color: "var(--neutral-600)",
                lineHeight: 1.5,
              }}
            >
              The first {form.frequency} charge happens now. We&apos;ll set up
              automatic future charges using your card after this payment.
            </p>
          </div>
        )}

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

        {paymentError && (
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "0.5rem",
              padding: "0.75rem 1rem",
              background: "var(--brand-50)",
              border: "1px solid var(--brand-100)",
              borderRadius: "var(--radius-lg)",
            }}
          >
            <RiErrorWarningLine
              style={{
                width: "1rem",
                height: "1rem",
                color: "var(--brand-600)",
                flexShrink: 0,
                marginTop: "0.1rem",
              }}
            />
            <p
              style={{
                fontSize: "0.8rem",
                color: "var(--neutral-700)",
                lineHeight: 1.5,
              }}
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

            if (isValid) {
              setShowTransferModal(true);
            }
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
          style={{
            fontSize: "0.74rem",
            color: "var(--neutral-400)",
            textAlign: "center",
            marginTop: "0.25rem",
          }}
        >
          Online sponsorship payments are temporarily unavailable. Click the
          button above to view our bank transfer details.
        </p>
      </form>

      {showTransferModal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            padding: "1rem",
          }}
          onClick={() => setShowTransferModal(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%",
              maxWidth: "520px",
              background: "#fff",
              borderRadius: "20px",
              padding: "2rem",
              boxShadow: "0 25px 80px rgba(0,0,0,.25)",
            }}
          >
            <h3
              style={{
                textAlign: "center",
                marginBottom: "0.75rem",
              }}
            >
              Online Donations Temporarily Unavailable
            </h3>

            <p
              style={{
                textAlign: "center",
                color: "var(--neutral-600)",
                lineHeight: 1.7,
                marginBottom: "1.75rem",
              }}
            >
              Kindly support CRA Foundation by making a bank transfer using the
              account details below.
            </p>

            <div
              style={{
                background: "var(--neutral-950)",
                borderRadius: "var(--radius-xl)",
                padding: "1.75rem",
              }}
            >
              <p
                style={{
                  fontSize: "0.74rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.35)",
                  marginBottom: "1rem",
                }}
              >
                Bank Transfer
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                {[
                  ["Bank", "Zenith Bank Surulere"],
                  ["Account Name", "Children's Right Advocate Foundation"],
                  ["Account Number", "1012771274"],
                ].map(([k, v]) => (
                  <div key={k}>
                    <p
                      style={{
                        fontSize: "0.74rem",
                        color: "rgba(255,255,255,0.3)",
                        marginBottom: "0.15rem",
                      }}
                    >
                      {k}
                    </p>
                    <p
                      style={{
                        fontSize:
                          k === "Account Number" ? "1.125rem" : "0.875rem",
                        fontWeight: k === "Account Number" ? 800 : 600,
                        color:
                          k === "Account Number"
                            ? "var(--brand-600)"
                            : "rgba(255,255,255,0.8)",
                        letterSpacing:
                          k === "Account Number" ? "0.05em" : "normal",
                      }}
                    >
                      {v}
                    </p>
                  </div>
                ))}
              </div>
              <p
                style={{
                  fontSize: "0.78rem",
                  color: "rgba(255,255,255,0.25)",
                  marginTop: "1.25rem",
                  lineHeight: 1.6,
                }}
              >
                After transfer, email your name and reference to
                admin@crafoundation.com.ng
              </p>
            </div>

            <button
              onClick={() => setShowTransferModal(false)}
              className="btn btn-primary"
              style={{
                width: "100%",
                justifyContent: "center",
                marginTop: "1.5rem",
              }}
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
      `}
      </style>
    </>
  );
}

// "use client";
// import { useState } from "react";
// import { RiCheckLine, RiErrorWarningLine } from "react-icons/ri";
// import PaystackButton from "@/components/payments/PaystackButton";

// export default function SponsorForm() {
//   const [submitted, setSubmitted] = useState(false);
//   const [verifying, setVerifying] = useState(false);
//   const [paymentError, setPaymentError] = useState<string | null>(null);
//   const [form, setForm] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     sponsorshipType: "child",
//     amount: "25000",
//     frequency: "monthly",
//     message: "",
//   });
//   const [errors, setErrors] = useState<Record<string, string>>({});

//   const validate = () => {
//     const e: Record<string, string> = {};
//     if (!form.firstName.trim()) e.firstName = "Required";
//     if (!form.lastName.trim()) e.lastName = "Required";
//     if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
//       e.email = "Valid email required";
//     if (!form.phone.trim()) e.phone = "Required";
//     setErrors(e);
//     return !Object.keys(e).length;
//   };

//   /** Re-validate on every relevant field change so the Pay button enables/disables live. */
//   const isValid =
//     form.firstName.trim() &&
//     form.lastName.trim() &&
//     /\S+@\S+\.\S+/.test(form.email) &&
//     form.phone.trim();

//   const amountNumber = parseInt(form.amount, 10) || 0;

//   const handlePaystackSuccess = async (reference: string) => {
//     setPaymentError(null);
//     setVerifying(true);
//     try {
//       const res = await fetch("/api/paystack/verify", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ reference }),
//       });
//       const data = await res.json();

//       if (!res.ok || !data.success) {
//         setPaymentError(
//           data.error
//             ? `${data.error}. Reference: ${reference}. Please contact us if you were charged.`
//             : `We couldn't verify your payment. Reference: ${reference}. Please contact us if you were charged.`,
//         );
//         return;
//       }

//       setSubmitted(true);
//     } catch {
//       setPaymentError(
//         `Network error while verifying payment. Reference: ${reference}. Please contact us if you were charged.`,
//       );
//     } finally {
//       setVerifying(false);
//     }
//   };

//   /** Pressing Enter inside the form (or clicking a non-Paystack submit) just runs validation feedback. */
//   const handleFormSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setPaymentError(null);
//     validate();
//   };

//   if (submitted)
//     return (
//       <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
//         <div
//           style={{
//             width: "3.5rem",
//             height: "3.5rem",
//             borderRadius: "50%",
//             background: "var(--accent-green-50)",
//             border: "1px solid #D1FAE5",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             margin: "0 auto 1.25rem",
//           }}
//         >
//           <RiCheckLine
//             style={{
//               width: "1.5rem",
//               height: "1.5rem",
//               color: "var(--accent-green-600)",
//             }}
//           />
//         </div>
//         <h3 style={{ marginBottom: "0.5rem" }}>Application Received!</h3>
//         <p style={{ color: "var(--neutral-500)" }}>
//           Thank you, {form.firstName}. Your payment of{" "}
//           <strong style={{ color: "var(--neutral-900)" }}>
//             ₦{amountNumber.toLocaleString()}
//           </strong>{" "}
//           has been verified. We&apos;ll contact you at {form.email} within 24
//           hours to confirm your sponsorship.
//         </p>
//       </div>
//     );

//   return (
//     <>
//       <form
//         onSubmit={handleFormSubmit}
//         style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}
//       >
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "1fr 1fr",
//             gap: "0.75rem",
//           }}
//         >
//           {(
//             [
//               ["firstName", "First Name *", "text", "First name"],
//               ["lastName", "Last Name *", "text", "Last name"],
//             ] as [string, string, string, string][]
//           ).map(([k, l, t, p]) => (
//             <div key={k}>
//               <label className="form-label">{l}</label>
//               <input
//                 type={t}
//                 className="form-input"
//                 placeholder={p}
//                 value={(form as Record<string, string>)[k]}
//                 onChange={(e) =>
//                   setForm((f) => ({ ...f, [k]: e.target.value }))
//                 }
//               />
//               {errors[k] && <p className="form-error">{errors[k]}</p>}
//             </div>
//           ))}
//         </div>
//         <div>
//           <label className="form-label">Email Address *</label>
//           <input
//             type="email"
//             className="form-input"
//             placeholder="you@example.com"
//             value={form.email}
//             onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
//           />
//           {errors.email && <p className="form-error">{errors.email}</p>}
//         </div>
//         <div>
//           <label className="form-label">Phone Number *</label>
//           <input
//             type="tel"
//             className="form-input"
//             placeholder="0801 234 5678"
//             value={form.phone}
//             onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
//           />
//           {errors.phone && <p className="form-error">{errors.phone}</p>}
//         </div>
//         <div>
//           <label className="form-label">Sponsorship Type</label>
//           <select
//             className="form-select"
//             value={form.sponsorshipType}
//             onChange={(e) =>
//               setForm((f) => ({ ...f, sponsorshipType: e.target.value }))
//             }
//           >
//             <option value="child">Sponsor a Specific Child</option>
//             <option value="meal">Meals Program</option>
//             <option value="education">Education Scholarship</option>
//             <option value="health">Health & Wellness</option>
//             <option value="general">General Support</option>
//           </select>
//         </div>
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "1fr 1fr",
//             gap: "0.75rem",
//           }}
//         >
//           <div>
//             <label className="form-label">Monthly Amount (₦)</label>
//             <select
//               className="form-select"
//               value={form.amount}
//               onChange={(e) =>
//                 setForm((f) => ({ ...f, amount: e.target.value }))
//               }
//             >
//               <option value="10000">₦10,000</option>
//               <option value="25000">₦25,000</option>
//               <option value="50000">₦50,000</option>
//               <option value="100000">₦100,000</option>
//             </select>
//           </div>
//           <div>
//             <label className="form-label">Frequency</label>
//             <select
//               className="form-select"
//               value={form.frequency}
//               onChange={(e) =>
//                 setForm((f) => ({ ...f, frequency: e.target.value }))
//               }
//             >
//               <option value="monthly">Monthly</option>
//               <option value="once">One Time</option>
//               <option value="annually">Annually</option>
//             </select>
//           </div>
//         </div>

//         {form.frequency !== "once" && (
//           <div
//             style={{
//               display: "flex",
//               alignItems: "flex-start",
//               gap: "0.5rem",
//               padding: "0.75rem 1rem",
//               background: "var(--accent-amber-50)",
//               border: "1px solid #FEF3C7",
//               borderRadius: "var(--radius-lg)",
//             }}
//           >
//             <RiErrorWarningLine
//               style={{
//                 width: "1rem",
//                 height: "1rem",
//                 color: "var(--accent-amber)",
//                 flexShrink: 0,
//                 marginTop: "0.1rem",
//               }}
//             />
//             <p
//               style={{
//                 fontSize: "0.8rem",
//                 color: "var(--neutral-600)",
//                 lineHeight: 1.5,
//               }}
//             >
//               The first {form.frequency} charge happens now. We&apos;ll set up
//               automatic future charges using your card after this payment.
//             </p>
//           </div>
//         )}

//         <div>
//           <label className="form-label">Message (optional)</label>
//           <textarea
//             className="form-textarea"
//             rows={3}
//             placeholder="Any notes or preferences…"
//             value={form.message}
//             onChange={(e) =>
//               setForm((f) => ({ ...f, message: e.target.value }))
//             }
//             style={{ resize: "vertical" }}
//           />
//         </div>

//         {paymentError && (
//           <div
//             style={{
//               display: "flex",
//               alignItems: "flex-start",
//               gap: "0.5rem",
//               padding: "0.75rem 1rem",
//               background: "var(--brand-50)",
//               border: "1px solid var(--brand-100)",
//               borderRadius: "var(--radius-lg)",
//             }}
//           >
//             <RiErrorWarningLine
//               style={{
//                 width: "1rem",
//                 height: "1rem",
//                 color: "var(--brand-600)",
//                 flexShrink: 0,
//                 marginTop: "0.1rem",
//               }}
//             />
//             <p
//               style={{
//                 fontSize: "0.8rem",
//                 color: "var(--neutral-700)",
//                 lineHeight: 1.5,
//               }}
//             >
//               {paymentError}
//             </p>
//           </div>
//         )}

//         <PaystackButton
//           email={form.email}
//           amount={amountNumber}
//           disabled={!isValid || verifying}
//           onSuccess={handlePaystackSuccess}
//           onClose={() => validate()}
//           label={
//             verifying ? "Verifying…" : `Pay ₦${amountNumber.toLocaleString()}`
//           }
//           metadata={{
//             custom_fields: [
//               {
//                 display_name: "Sponsor Name",
//                 variable_name: "sponsor_name",
//                 value: `${form.firstName} ${form.lastName}`,
//               },
//               {
//                 display_name: "Sponsorship Type",
//                 variable_name: "sponsorship_type",
//                 value: form.sponsorshipType,
//               },
//               {
//                 display_name: "Frequency",
//                 variable_name: "frequency",
//                 value: form.frequency,
//               },
//               {
//                 display_name: "Phone",
//                 variable_name: "phone",
//                 value: form.phone,
//               },
//               {
//                 display_name: "Message",
//                 variable_name: "message",
//                 value: form.message || "N/A",
//               },
//             ],
//           }}
//         />

//         <p
//           style={{
//             fontSize: "0.74rem",
//             color: "var(--neutral-400)",
//             textAlign: "center",
//             marginTop: "0.25rem",
//           }}
//         >
//           Clicking &quot;Pay&quot; opens Paystack&apos;s secure checkout. Your
//           card details never touch our servers.
//         </p>
//       </form>
//       <style>
//         {`
//           @media (max-width: 767px) {
//             input, select, textarea {
//               background: none !important;
//             }
//           }
//       `}
//       </style>
//     </>
//   );
// }
