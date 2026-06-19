import type { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import DonationForm from "@/components/forms/DonationForm";
import { donationTiers } from "@/data";
import {
  RiShieldCheckLine,
  RiRefreshLine,
  RiBankCardLine,
} from "react-icons/ri";

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
        style={{
          background: "var(--neutral-50)",
          borderBottom: "1px solid var(--border-subtle)",
          padding: "0.875rem 0",
        }}
      >
        <div
          className="container-max"
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            columnGap: "2rem",
            rowGap: "1rem",
          }}
        >
          {[
            { icon: RiShieldCheckLine, label: "100% Secure" },
            { icon: RiRefreshLine, label: "Cancel Anytime" },
            { icon: RiBankCardLine, label: "Multiple Payment Methods" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.845rem",
                color: "var(--neutral-500)",
                fontWeight: 500,
              }}
            >
              <Icon
                style={{
                  width: "1rem",
                  height: "1rem",
                  color: "var(--accent-green-600)",
                }}
              />{" "}
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
            style={{
              gap: "3.5rem",
              alignItems: "start",
            }}
            className="grid lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]"
          >
            {/* Form */}
            <div className="card p-3! md:p-10!">
              <h3 style={{ marginBottom: "0.375rem" }}>Make Your Donation</h3>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "var(--neutral-400)",
                  marginBottom: "2rem",
                }}
              >
                Secure, flexible donation options for every level of support.
              </p>
              <DonationForm tiers={donationTiers} />
            </div>

            {/* Sidebar */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
                position: "sticky",
                top: "6rem",
              }}
            >
              {/* Impact guide */}
              <div className="card p-4! md:p-7!">
                <h4 style={{ marginBottom: "1.25rem" }}>What Your Gift Does</h4>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  {donationTiers.map((t) => (
                    <div
                      key={t.amount}
                      style={{
                        display: "flex",
                        gap: "0.875rem",
                        paddingBottom: "1rem",
                        borderBottom: "1px solid var(--border-subtle)",
                      }}
                    >
                      <div
                        style={{
                          fontWeight: 700,
                          fontSize: "0.875rem",
                          color: "var(--brand-600)",
                          minWidth: "5.5rem",
                          flexShrink: 0,
                        }}
                      >
                        {t.label}
                      </div>
                      <p
                        style={{
                          fontSize: "0.845rem",
                          lineHeight: 1.6,
                          color: "var(--neutral-500)",
                        }}
                      >
                        {t.impact}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bank details */}
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

              {/* Help */}
              <div
                style={{
                  padding: "1.25rem",
                  background: "var(--neutral-50)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "var(--radius-lg)",
                }}
              >
                <p
                  style={{
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    color: "var(--neutral-900)",
                    marginBottom: "0.25rem",
                  }}
                >
                  Need help?
                </p>
                <p
                  style={{
                    fontSize: "0.845rem",
                    color: "var(--neutral-500)",
                    marginBottom: "0.875rem",
                  }}
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
    </>
  );
}
