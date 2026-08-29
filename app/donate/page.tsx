import type { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import { donationTiers } from "@/data";
import {
  RiShieldCheckLine,
  RiRefreshLine,
  RiBankCardLine,
} from "react-icons/ri";
import DonationForm from "@/components/forms/DonationForm";

export const metadata: Metadata = { title: "Donate" };

export default function DonatePage() {
  return (
    <>
      <PageHeader
        badge="Make a Difference"
        title="Donate &"
        highlight="Transform Lives"
        description="Every naira you give feeds a hungry child, buys a textbook, or covers a medical check-up. Your generosity is the difference."
      />

      {/* Trust bar */}
      <div
        className="don-trust-bar"
        style={{
          background: "var(--neutral-50)",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        <div
          className="container-max don-trust-bar-inner"
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {[
            { icon: RiShieldCheckLine, label: "100% Secure" },
            { icon: RiRefreshLine, label: "Cancel Anytime" },
            { icon: RiBankCardLine, label: "Multiple Payment Methods" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="don-trust-item"
              style={{
                display: "flex",
                alignItems: "center",
                color: "var(--neutral-500)",
                fontWeight: 500,
              }}
            >
              <Icon
                className="don-trust-icon"
                style={{ color: "var(--accent-green-600)" }}
              />
              {label}
            </div>
          ))}
        </div>
      </div>

      <section
        className="section-padding"
        style={{ background: "var(--white)" }}
      >
        <div className="container-max">
          <div
            className="don-layout grid lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]"
            style={{ alignItems: "start" }}
          >
            {/* Form */}
            <div className="card p-3! md:p-10!">
              <h3 className="don-form-title">Make Your Donation</h3>
              <p
                className="don-form-sub"
                style={{ color: "var(--neutral-400)" }}
              >
                Secure, flexible donation options for every level of support.
              </p>
              <DonationForm tiers={donationTiers} />
            </div>

            {/* Sidebar */}
            <div
              className="don-sidebar"
              style={{
                display: "flex",
                flexDirection: "column",
                position: "sticky",
              }}
            >
              {/* Impact guide */}
              <div className="card p-4! md:p-7!">
                <h4 className="don-impact-title">What Your Gift Does</h4>
                <div
                  className="don-impact-list"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  {donationTiers.map((t) => (
                    <div
                      key={t.amount}
                      className="don-impact-row"
                      style={{
                        display: "flex",
                        borderBottom: "1px solid var(--border-subtle)",
                      }}
                    >
                      <div
                        className="don-impact-amount"
                        style={{
                          fontWeight: 700,
                          color: "var(--brand-600)",
                          flexShrink: 0,
                        }}
                      >
                        {t.label}
                      </div>
                      <p
                        className="don-impact-desc"
                        style={{ lineHeight: 1.6, color: "var(--neutral-500)" }}
                      >
                        {t.impact}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bank details */}
              <div
                className="don-bank-pad"
                style={{
                  background: "var(--neutral-950)",
                  borderRadius: "var(--radius-xl)",
                }}
              >
                <p
                  className="don-bank-label"
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
                  className="don-bank-gap"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  {[
                    ["Bank", "Zenith Bank Surulere"],
                    ["Account Name", "Children's Right Advocate Foundation"],
                    ["Account Number", "1012771274"],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <p
                        className="don-bank-field-key"
                        style={{ color: "rgba(255,255,255,.3)" }}
                      >
                        {k}
                      </p>
                      <p
                        className={
                          k === "Account Number"
                            ? "don-bank-field-val-num"
                            : "don-bank-field-val"
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
                  className="don-bank-note"
                  style={{ color: "rgba(255,255,255,.25)", lineHeight: 1.6 }}
                >
                  After transfer, email your name and reference to
                  admin@crafoundation.com.ng
                </p>
              </div>

              {/* Help */}
              <div
                className="don-help-pad"
                style={{
                  background: "var(--neutral-50)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "var(--radius-lg)",
                }}
              >
                <p
                  className="don-help-title"
                  style={{ fontWeight: 600, color: "var(--neutral-900)" }}
                >
                  Need help?
                </p>
                <p
                  className="don-help-sub"
                  style={{ color: "var(--neutral-500)" }}
                >
                  Our team is happy to assist with your donation.
                </p>
                <a
                  href="tel:08063811840"
                  className="btn btn-secondary btn-sm"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  Call 08063811840
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
      /* === RESPONSIVE SCALE > 1280px === */

      /* Trust bar */
      .don-trust-bar { padding: .875rem 0; }
      .don-trust-bar-inner { column-gap: 2rem; row-gap: 1rem; }
      .don-trust-item { font-size: .845rem; gap: .5rem; }
      .don-trust-icon { width: 1rem; height: 1rem; }

      /* Main layout */
      .don-layout { gap: 3.5rem; align-items: start; }

      /* Form card */
      .don-form-title { margin-bottom: .375rem; }
      .don-form-sub { font-size: .9rem; margin-bottom: 2rem; }

      /* Sidebar */
      .don-sidebar { gap: 1.25rem; top: 6rem; }

      /* Impact guide */
      .don-impact-title { margin-bottom: 1.25rem; }
      .don-impact-list { gap: 1rem; }
      .don-impact-row { gap: .875rem; padding-bottom: 1rem; }
      .don-impact-amount { font-size: .875rem; min-width: 5.5rem; }
      .don-impact-desc { font-size: .845rem; }

      /* Bank card */
      .don-bank-pad { padding: 1.75rem; }
      .don-bank-label { font-size: .74rem; margin-bottom: 1rem; }
      .don-bank-field-key { font-size: .74rem; margin-bottom: .15rem; }
      .don-bank-field-val { font-size: .875rem; }
      .don-bank-field-val-num { font-size: 1.125rem; }
      .don-bank-gap { gap: .75rem; }
      .don-bank-note { font-size: .78rem; margin-top: 1.25rem; }

      /* Help card */
      .don-help-pad { padding: 1.25rem; }
      .don-help-title { font-size: .9rem; margin-bottom: .25rem; }
      .don-help-sub { font-size: .845rem; margin-bottom: .875rem; }

      @media (min-width: 1440px) {
        .don-trust-bar { padding: 1rem 0; }
        .don-trust-bar-inner { column-gap: 2.25rem; }
        .don-trust-item { font-size: .875rem; gap: .55rem; }
        .don-trust-icon { width: 1.05rem; height: 1.05rem; }

        .don-layout { gap: 3.875rem; }

        .don-form-sub { font-size: .925rem; margin-bottom: 2.125rem; }

        .don-sidebar { gap: 1.375rem; top: 6.25rem; }

        .don-impact-title { margin-bottom: 1.375rem; }
        .don-impact-list { gap: 1.075rem; }
        .don-impact-row { gap: .925rem; padding-bottom: 1.075rem; }
        .don-impact-amount { font-size: .9rem; min-width: 5.75rem; }
        .don-impact-desc { font-size: .875rem; }

        .don-bank-pad { padding: 1.875rem; }
        .don-bank-label { font-size: .76rem; margin-bottom: 1.075rem; }
        .don-bank-field-key { font-size: .76rem; }
        .don-bank-field-val { font-size: .9rem; }
        .don-bank-field-val-num { font-size: 1.175rem; }
        .don-bank-gap { gap: .8rem; }
        .don-bank-note { font-size: .8rem; margin-top: 1.325rem; }

        .don-help-pad { padding: 1.375rem; }
        .don-help-title { font-size: .925rem; margin-bottom: .275rem; }
        .don-help-sub { font-size: .875rem; margin-bottom: .925rem; }
      }

      @media (min-width: 1536px) {
        .don-trust-bar { padding: 1.175rem 0; }
        .don-trust-bar-inner { column-gap: 2.625rem; }
        .don-trust-item { font-size: .975rem; gap: .625rem; }
        .don-trust-icon { width: 1.175rem; height: 1.175rem; }

        .don-layout { gap: 4.375rem; }

        .don-form-sub { font-size: 1.025rem; margin-bottom: 2.375rem; }

        .don-sidebar { gap: 1.625rem; top: 6.5rem; }

        .don-impact-title { margin-bottom: 1.625rem; }
        .don-impact-list { gap: 1.2rem; }
        .don-impact-row { gap: 1.05rem; padding-bottom: 1.2rem; }
        .don-impact-amount { font-size: 1rem; min-width: 6.25rem; }
        .don-impact-desc { font-size: .975rem; }

        .don-bank-pad { padding: 2.125rem; }
        .don-bank-label { font-size: .84rem; margin-bottom: 1.2rem; }
        .don-bank-field-key { font-size: .84rem; }
        .don-bank-field-val { font-size: 1rem; }
        .don-bank-field-val-num { font-size: 1.35rem; }
        .don-bank-gap { gap: .925rem; }
        .don-bank-note { font-size: .9rem; margin-top: 1.5rem; }

        .don-help-pad { padding: 1.625rem; }
        .don-help-title { font-size: 1.025rem; margin-bottom: .3rem; }
        .don-help-sub { font-size: .975rem; margin-bottom: 1.075rem; }
      }

      @media (min-width: 1680px) {
        .don-trust-bar { padding: 1.375rem 0; }
        .don-trust-bar-inner { column-gap: 3rem; }
        .don-trust-item { font-size: 1.075rem; gap: .7rem; }
        .don-trust-icon { width: 1.3rem; height: 1.3rem; }

        .don-layout { gap: 5rem; }

        .don-form-sub { font-size: 1.125rem; margin-bottom: 2.625rem; }

        .don-sidebar { gap: 1.875rem; top: 6.75rem; }

        .don-impact-title { margin-bottom: 1.875rem; }
        .don-impact-list { gap: 1.375rem; }
        .don-impact-row { gap: 1.175rem; padding-bottom: 1.375rem; }
        .don-impact-amount { font-size: 1.1rem; min-width: 6.75rem; }
        .don-impact-desc { font-size: 1.075rem; }

        .don-bank-pad { padding: 2.375rem; }
        .don-bank-label { font-size: .92rem; margin-bottom: 1.375rem; }
        .don-bank-field-key { font-size: .92rem; }
        .don-bank-field-val { font-size: 1.1rem; }
        .don-bank-field-val-num { font-size: 1.5rem; }
        .don-bank-gap { gap: 1.05rem; }
        .don-bank-note { font-size: .975rem; margin-top: 1.675rem; }

        .don-help-pad { padding: 1.875rem; }
        .don-help-title { font-size: 1.125rem; margin-bottom: .35rem; }
        .don-help-sub { font-size: 1.075rem; margin-bottom: 1.2rem; }
      }

      @media (min-width: 1920px) {
        .don-trust-bar { padding: 1.625rem 0; }
        .don-trust-bar-inner { column-gap: 3.625rem; }
        .don-trust-item { font-size: 1.25rem; gap: .825rem; }
        .don-trust-icon { width: 1.5rem; height: 1.5rem; }

        .don-layout { gap: 6rem; }

        .don-form-sub { font-size: 1.3rem; margin-bottom: 3rem; }

        .don-sidebar { gap: 2.25rem; top: 7.25rem; }

        .don-impact-title { margin-bottom: 2.25rem; }
        .don-impact-list { gap: 1.625rem; }
        .don-impact-row { gap: 1.375rem; padding-bottom: 1.625rem; }
        .don-impact-amount { font-size: 1.275rem; min-width: 7.75rem; }
        .don-impact-desc { font-size: 1.225rem; }

        .don-bank-pad { padding: 2.875rem; }
        .don-bank-label { font-size: 1.075rem; margin-bottom: 1.625rem; }
        .don-bank-field-key { font-size: 1.075rem; }
        .don-bank-field-val { font-size: 1.275rem; }
        .don-bank-field-val-num { font-size: 1.875rem; }
        .don-bank-gap { gap: 1.25rem; }
        .don-bank-note { font-size: 1.125rem; margin-top: 2rem; }

        .don-help-pad { padding: 2.25rem; }
        .don-help-title { font-size: 1.3rem; margin-bottom: .425rem; }
        .don-help-sub { font-size: 1.225rem; margin-bottom: 1.425rem; }
      }
    `}</style>
    </>
  );
}
