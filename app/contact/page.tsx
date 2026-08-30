import type { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import ContactForm from "@/components/forms/ContactForm";
import {
  RiPhoneLine,
  RiMailLine,
  RiMapPinLine,
  RiTimeLine,
  RiExternalLinkLine,
} from "react-icons/ri";

export const metadata: Metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <>
      <PageHeader
        badge="Reach Out"
        title="Contact"
        highlight="Us"
        description="Questions, partnership enquiries, donation support, or volunteering — we respond to all messages within 24 hours."
      />

      <section
        className="section-padding"
        style={{ background: "var(--white)" }}
      >
        <div className="container-max">
          <div className="ct-layout grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)]">
            {/* Info */}
            <div>
              <h3 className="ct-info-title">Get in Touch</h3>
              <p
                className="ct-info-sub"
                style={{ color: "var(--neutral-500)", lineHeight: 1.7 }}
              >
                Our team is ready to answer your questions and explore how you
                can be part of our mission.
              </p>

              <div
                className="ct-contacts"
                style={{ display: "flex", flexDirection: "column" }}
              >
                {[
                  {
                    icon: RiMapPinLine,
                    label: "Address",
                    value: "40B Ayilara Street, Surulere, Lagos, Nigeria",
                    href: "https://maps.google.com/?q=Ayilara+Street+Surulere+Lagos",
                    external: true,
                  },
                  {
                    icon: RiPhoneLine,
                    label: "Phone",
                    value: "08063811840",
                    href: "tel:08063811840",
                  },
                  {
                    icon: RiMailLine,
                    label: "Email",
                    value: "admin@crafoundation.com.ng",
                    href: "mailto:admin@crafoundation.com.ng",
                  },
                  {
                    icon: RiExternalLinkLine,
                    label: "Website",
                    value: "www.crafoundation.com.ng",
                    href: "http://www.crafoundation.com.ng",
                    external: true,
                  },
                ].map(({ icon: Icon, label, value, href, external }) => (
                  <a
                    key={label}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer" : undefined}
                    className="card card-hover ct-contact-card"
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      textDecoration: "none",
                    }}
                  >
                    <div
                      className="ct-contact-icon"
                      style={{
                        borderRadius: "var(--radius-md)",
                        background: "var(--neutral-50)",
                        border: "1px solid var(--border-subtle)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Icon
                        className="ct-contact-icon-svg"
                        style={{ color: "var(--brand-600)" }}
                      />
                    </div>
                    <div>
                      <p
                        className="ct-contact-label"
                        style={{
                          fontWeight: 700,
                          letterSpacing: ".06em",
                          textTransform: "uppercase",
                          color: "var(--neutral-400)",
                        }}
                      >
                        {label}
                      </p>
                      <p
                        className="ct-contact-value"
                        style={{ fontWeight: 500, color: "var(--neutral-800)" }}
                      >
                        {value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Hours */}
              <div className="card ct-hours-pad">
                <div
                  className="ct-hours-header"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <RiTimeLine
                    className="ct-hours-icon"
                    style={{ color: "var(--neutral-400)" }}
                  />
                  <h4 className="ct-hours-title">Office Hours</h4>
                </div>
                <div
                  className="ct-hours-list"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  {[
                    ["Monday – Friday", "8:00am – 5:00pm"],
                    ["Saturday", "9:00am – 2:00pm"],
                    ["Sunday", "Closed"],
                  ].map(([day, time]) => (
                    <div
                      key={day}
                      className="ct-hours-row"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <span style={{ color: "var(--neutral-600)" }}>{day}</span>
                      <span
                        style={{
                          fontWeight: 600,
                          color:
                            time === "Closed"
                              ? "var(--neutral-400)"
                              : "var(--neutral-900)",
                        }}
                      >
                        {time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bank */}
              <div
                className="ct-bank-pad"
                style={{
                  background: "var(--neutral-950)",
                  borderRadius: "var(--radius-xl)",
                }}
              >
                <p
                  className="ct-bank-label"
                  style={{
                    fontWeight: 700,
                    letterSpacing: ".08em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,.3)",
                  }}
                >
                  Direct Bank Donation
                </p>
                {[
                  ["Bank", "Zenith Bank Surulere"],
                  ["Account No", "1012771274"],
                  ["Account Name", "Children's Right Advocate Foundation"],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="ct-bank-row"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span
                      className="ct-bank-key"
                      style={{ color: "rgba(255,255,255,.35)" }}
                    >
                      {k}
                    </span>
                    <span
                      className={
                        k === "Account No" ? "ct-bank-val-num" : "ct-bank-val"
                      }
                      style={{
                        fontWeight: k === "Account No" ? 800 : 600,
                        color:
                          k === "Account No"
                            ? "var(--brand-600)"
                            : "rgba(255,255,255,.75)",
                        letterSpacing: k === "Account No" ? ".06em" : "normal",
                        textAlign: "right",
                        maxWidth: "60%",
                      }}
                    >
                      {v}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Form column */}
            <div className="card p-5! md:p-10!">
              <h3 className="ct-form-title">Send Us a Message</h3>
              <p
                className="ct-form-sub"
                style={{ color: "var(--neutral-400)" }}
              >
                We respond to all enquiries within 24–48 hours on working days.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <style>{`
      /* === RESPONSIVE SCALE > 1280px === */

      /* Layout */
      .ct-layout { gap: 4rem; align-items: start; }

      /* Info column */
      .ct-info-title { margin-bottom: .375rem; }
      .ct-info-sub { font-size: .9375rem; margin-bottom: 2rem; }
      .ct-contacts { gap: .75rem; margin-bottom: 2rem; }
      .ct-contact-card { padding: 1.125rem 1.25rem; gap: .875rem; }
      .ct-contact-icon { width: 2.25rem; height: 2.25rem; }
      .ct-contact-icon-svg { width: 1rem; height: 1rem; }
      .ct-contact-label { font-size: .74rem; margin-bottom: .2rem; }
      .ct-contact-value { font-size: .875rem; }

      /* Hours card */
      .ct-hours-pad { padding: 1.5rem; }
      .ct-hours-header { gap: .5rem; margin-bottom: 1rem; }
      .ct-hours-icon { width: 1rem; height: 1rem; }
      .ct-hours-title { font-size: .9375rem; }
      .ct-hours-list { gap: .625rem; }
      .ct-hours-row { font-size: .875rem; }

      /* Bank card */
      .ct-bank-pad { margin-top: 1.25rem; padding: 1.5rem; }
      .ct-bank-label { font-size: .74rem; margin-bottom: .875rem; }
      .ct-bank-row { margin-bottom: .5rem; }
      .ct-bank-key { font-size: .8rem; }
      .ct-bank-val { font-size: .845rem; }
      .ct-bank-val-num { font-size: 1rem; }

      /* Form column */
      .ct-form-title { margin-bottom: .375rem; }
      .ct-form-sub { font-size: .9rem; margin-bottom: 2rem; }

      @media (min-width: 1440px) {
        .ct-layout { gap: 4.375rem; }

        .ct-info-sub { font-size: .975rem; margin-bottom: 2.125rem; }
        .ct-contacts { gap: .8rem; margin-bottom: 2.125rem; }
        .ct-contact-card { padding: 1.2rem 1.325rem; gap: .925rem; }
        .ct-contact-icon { width: 2.375rem; height: 2.375rem; }
        .ct-contact-icon-svg { width: 1.05rem; height: 1.05rem; }
        .ct-contact-label { font-size: .76rem; margin-bottom: .225rem; }
        .ct-contact-value { font-size: .9rem; }

        .ct-hours-pad { padding: 1.625rem; }
        .ct-hours-header { gap: .55rem; margin-bottom: 1.075rem; }
        .ct-hours-icon { width: 1.05rem; height: 1.05rem; }
        .ct-hours-title { font-size: .975rem; }
        .ct-hours-list { gap: .675rem; }
        .ct-hours-row { font-size: .9rem; }

        .ct-bank-pad { margin-top: 1.375rem; padding: 1.625rem; }
        .ct-bank-label { font-size: .76rem; margin-bottom: .925rem; }
        .ct-bank-row { margin-bottom: .525rem; }
        .ct-bank-key { font-size: .825rem; }
        .ct-bank-val { font-size: .875rem; }
        .ct-bank-val-num { font-size: 1.05rem; }

        .ct-form-sub { font-size: .925rem; margin-bottom: 2.125rem; }
      }

      @media (min-width: 1536px) {
        .ct-layout { gap: 5rem; }

        .ct-info-sub { font-size: 1.075rem; margin-bottom: 2.375rem; }
        .ct-contacts { gap: .925rem; margin-bottom: 2.375rem; }
        .ct-contact-card { padding: 1.375rem 1.5rem; gap: 1.05rem; }
        .ct-contact-icon { width: 2.625rem; height: 2.625rem; }
        .ct-contact-icon-svg { width: 1.175rem; height: 1.175rem; }
        .ct-contact-label { font-size: .84rem; margin-bottom: .275rem; }
        .ct-contact-value { font-size: 1rem; }

        .ct-hours-pad { padding: 1.875rem; }
        .ct-hours-header { gap: .625rem; margin-bottom: 1.2rem; }
        .ct-hours-icon { width: 1.175rem; height: 1.175rem; }
        .ct-hours-title { font-size: 1.075rem; }
        .ct-hours-list { gap: .775rem; }
        .ct-hours-row { font-size: 1rem; }

        .ct-bank-pad { margin-top: 1.625rem; padding: 1.875rem; }
        .ct-bank-label { font-size: .84rem; margin-bottom: 1.075rem; }
        .ct-bank-row { margin-bottom: .625rem; }
        .ct-bank-key { font-size: .925rem; }
        .ct-bank-val { font-size: 1rem; }
        .ct-bank-val-num { font-size: 1.2rem; }

        .ct-form-sub { font-size: 1.025rem; margin-bottom: 2.375rem; }
      }

      @media (min-width: 1680px) {
        .ct-layout { gap: 5.75rem; }

        .ct-info-sub { font-size: 1.175rem; margin-bottom: 2.625rem; }
        .ct-contacts { gap: 1.025rem; margin-bottom: 2.625rem; }
        .ct-contact-card { padding: 1.525rem 1.675rem; gap: 1.175rem; }
        .ct-contact-icon { width: 2.875rem; height: 2.875rem; }
        .ct-contact-icon-svg { width: 1.3rem; height: 1.3rem; }
        .ct-contact-label { font-size: .92rem; margin-bottom: .3rem; }
        .ct-contact-value { font-size: 1.1rem; }

        .ct-hours-pad { padding: 2.125rem; }
        .ct-hours-header { gap: .7rem; margin-bottom: 1.375rem; }
        .ct-hours-icon { width: 1.3rem; height: 1.3rem; }
        .ct-hours-title { font-size: 1.175rem; }
        .ct-hours-list { gap: .875rem; }
        .ct-hours-row { font-size: 1.1rem; }

        .ct-bank-pad { margin-top: 1.875rem; padding: 2.125rem; }
        .ct-bank-label { font-size: .92rem; margin-bottom: 1.2rem; }
        .ct-bank-row { margin-bottom: .7rem; }
        .ct-bank-key { font-size: 1.025rem; }
        .ct-bank-val { font-size: 1.1rem; }
        .ct-bank-val-num { font-size: 1.375rem; }

        .ct-form-sub { font-size: 1.125rem; margin-bottom: 2.625rem; }
      }

      @media (min-width: 1920px) {
        .ct-layout { gap: 7rem; }

        .ct-info-sub { font-size: 1.35rem; margin-bottom: 3rem; }
        .ct-contacts { gap: 1.225rem; margin-bottom: 3rem; }
        .ct-contact-card { padding: 1.75rem 2rem; gap: 1.375rem; }
        .ct-contact-icon { width: 3.375rem; height: 3.375rem; }
        .ct-contact-icon-svg { width: 1.5rem; height: 1.5rem; }
        .ct-contact-label { font-size: 1.075rem; margin-bottom: .35rem; }
        .ct-contact-value { font-size: 1.275rem; }

        .ct-hours-pad { padding: 2.5rem; }
        .ct-hours-header { gap: .825rem; margin-bottom: 1.625rem; }
        .ct-hours-icon { width: 1.5rem; height: 1.5rem; }
        .ct-hours-title { font-size: 1.35rem; }
        .ct-hours-list { gap: 1.025rem; }
        .ct-hours-row { font-size: 1.275rem; }

        .ct-bank-pad { margin-top: 2.25rem; padding: 2.5rem; }
        .ct-bank-label { font-size: 1.075rem; margin-bottom: 1.425rem; }
        .ct-bank-row { margin-bottom: .825rem; }
        .ct-bank-key { font-size: 1.175rem; }
        .ct-bank-val { font-size: 1.275rem; }
        .ct-bank-val-num { font-size: 1.75rem; }

        .ct-form-sub { font-size: 1.3rem; margin-bottom: 3rem; }
      }
    `}</style>
    </>
  );
}
