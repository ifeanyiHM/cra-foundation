import Image from "next/image";
import Link from "next/link";
import { RiPhoneLine, RiMailLine, RiMapPinLine } from "react-icons/ri";
import {
  RiFacebookCircleLine,
  RiTwitterXLine,
  RiInstagramLine,
  RiYoutubeLine,
} from "react-icons/ri";

const footerLinks = {
  Organization: [
    { label: "About Us", href: "/about" },
    { label: "Our Mission", href: "/about#mission" },
    { label: "Board of Trustees", href: "/about#board" },
    { label: "Awards & Recognition", href: "/about#awards" },
    { label: "Impact Report", href: "/impact" },
  ],
  Programs: [
    { label: "After-School Support", href: "/programs#after-school" },
    { label: "Meals Scheme", href: "/programs#meals" },
    { label: "Health & Wellness", href: "/programs#health" },
    { label: "Scholarships", href: "/programs#scholarships" },
    { label: "Learning Center", href: "/programs#learning-center" },
  ],
  "Get Involved": [
    { label: "Donate", href: "/donate" },
    { label: "Sponsor a Child", href: "/sponsor" },
    { label: "Volunteer", href: "/volunteer" },
    { label: "News & Events", href: "/news" },
    { label: "Contact Us", href: "/contact" },
  ],
};

const socialLinks = [
  {
    Icon: RiFacebookCircleLine,
    href: "https://web.facebook.com/nurtureadream?rdid=PyoQ16CCNhujAVtX&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2F1EKD1fnrUs%2F%3F_rdc%3D1%26_rdr#",
  },
  {
    Icon: RiInstagramLine,
    href: "https://www.instagram.com/childrensright?igsh=bHJhaDB2NWlnaTR3",
  },
  { Icon: RiTwitterXLine, href: "https://x.com" },
  { Icon: RiYoutubeLine, href: "https://youtube.com" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        background: "var(--neutral-950)",
        color: "rgba(255,255,255,0.6)",
        fontFamily: "var(--font-sans)",
      }}
    >
      <style>{`
        .footer-link { color: rgba(255,255,255,0.45); font-size:0.875rem; transition:color 0.15s; text-decoration:none; }
        .footer-link:hover { color:#fff; }
        .footer-social { width:2rem;height:2rem;border-radius:var(--radius-md);border:1px solid rgba(255,255,255,0.1);display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,0.4);transition:all 0.15s; text-decoration:none; }
        .footer-social:hover { background:rgba(255,255,255,0.08);color:#fff;border-color:rgba(255,255,255,0.2); }
        .footer-legal-link { font-size:0.8125rem;color:rgba(255,255,255,0.35);transition:color 0.15s;text-decoration:none; }
        .footer-legal-link:hover { color:rgba(255,255,255,0.65); }
        .site-logo img {width: 150px; height: auto; transition: width .2s ease;
  }

        /* === RESPONSIVE SCALE > 1280px === */
        .footer-top { padding: 4rem 1.25rem 0; }
        .footer-grid { gap: 2.5rem 2rem; padding-bottom: 3rem; }
        .footer-brand-desc { font-size: .845rem; margin-bottom: 1.5rem; }
        .footer-social-label { font-size: .72rem; margin-bottom: .625rem; }
        .footer-social { width: 2rem; height: 2rem; }
        .footer-social-icon { width: .875rem; height: .875rem; }
        .footer-social-gap { gap: .5rem; }
        .footer-group-label { font-size: .72rem; margin-bottom: 1.125rem; }
        .footer-link { font-size: .875rem; }
        .footer-link-gap { gap: .5rem; }
        .footer-contact-gap { gap: .875rem; margin-bottom: 1.5rem; }
        .footer-contact-icon { width: .875rem; height: .875rem; }
        .footer-bank-label { font-size: .7rem; margin-bottom: .5rem; }
        .footer-bank-name { font-size: .845rem; }
        .footer-bank-num { font-size: 1rem; }
        .footer-bank-holder { font-size: .74rem; }
        .footer-bank-pad { padding: 1rem; }
        .footer-bottom { padding: 1.25rem 0; }
        .footer-copy { font-size: .8125rem; }
        .footer-legal-link { font-size: .8125rem; }
        .footer-dev { font-size: .78rem; }

        @media (min-width: 1440px) {
          .footer-top { padding: 4.5rem 1.25rem 0; }
          .footer-grid { gap: 2.75rem 2.25rem; padding-bottom: 3.25rem; }
          .footer-brand-desc { font-size: .875rem; margin-bottom: 1.625rem; }
          .footer-social-label { font-size: .74rem; margin-bottom: .65rem; }
          .footer-social { width: 2.125rem; height: 2.125rem; }
          .footer-social-icon { width: .9rem; height: .9rem; }
          .footer-social-gap { gap: .55rem; }
          .footer-group-label { font-size: .74rem; margin-bottom: 1.175rem; }
          .footer-link { font-size: .9rem; }
          .footer-link-gap { gap: .55rem; }
          .footer-contact-gap { gap: .925rem; margin-bottom: 1.625rem; }
          .footer-contact-icon { width: .9rem; height: .9rem; }
          .footer-bank-label { font-size: .72rem; margin-bottom: .525rem; }
          .footer-bank-name { font-size: .875rem; }
          .footer-bank-num { font-size: 1.05rem; }
          .footer-bank-holder { font-size: .76rem; }
          .footer-bank-pad { padding: 1.075rem; }
          .footer-bottom { padding: 1.375rem 0; }
          .footer-copy { font-size: .8375rem; }
          .footer-legal-link { font-size: .8375rem; }
          .footer-dev { font-size: .8rem; }
          .site-logo img { width: 170px !important; }
        }

        @media (min-width: 1536px) {
          .footer-top { padding: 5rem 1.25rem 0; }
          .footer-grid { gap: 3rem 2.5rem; padding-bottom: 3.5rem; }
          .footer-brand-desc { font-size: 1.05rem; margin-bottom: 1.75rem; }
          .footer-social-label { font-size: .81rem; margin-bottom: .675rem; }
          .footer-social { width: 2.35rem; height: 2.35rem; }
          .footer-social-icon { width: 1.025rem; height: 1.025rem; }
          .footer-social-gap { gap: .575rem; }
          .footer-group-label { font-size: .86rem; margin-bottom: 1.225rem; }
          .footer-link { font-size: .95rem; }
          .footer-link-gap { gap: .575rem; }
          .footer-contact-gap { gap: .975rem; margin-bottom: 1.75rem; }
          .footer-contact-icon { width: .925rem; height: .925rem; }
          .footer-bank-label { font-size: .84rem; margin-bottom: .55rem; }
          .footer-bank-name { font-size: 1rem; }
          .footer-bank-num { font-size: 1.2rem; }
          .footer-bank-holder { font-size: .88rem; }
          .footer-bank-pad { padding: 1.125rem; }
          .footer-bottom { padding: 1.5rem 0; }
          .footer-copy { font-size: .9625rem; }
          .footer-legal-link { font-size: .9625rem; }
          .footer-dev { font-size: .92rem; }
          .site-logo img { width: 180px !important; }
        }

        @media (min-width: 1680px) {
          .footer-top { padding: 5.5rem 1.25rem 0; }
          .footer-grid { gap: 3.25rem 2.75rem; padding-bottom: 3.75rem; }
          .footer-brand-desc { font-size: 1.05rem; margin-bottom: 1.875rem; }
          .footer-social-label { font-size: .83rem; margin-bottom: .7rem; }
          .footer-social { width: 2.475rem; height: 2.475rem; }
          .footer-social-icon { width: 1.075rem; height: 1.075rem; }
          .footer-social-gap { gap: .6rem; }
          .footer-group-label { font-size: .88rem; margin-bottom: 1.275rem; }
          .footer-link { font-size: 1.055rem; }
          .footer-link-gap { gap: .7rem; }
          .footer-contact-gap { gap: 1.025rem; margin-bottom: 1.875rem; }
          .footer-contact-icon { width: 1.075rem; height: 1.075rem; }
          .footer-bank-label { font-size: .86rem; margin-bottom: .575rem; }
          .footer-bank-name { font-size: 1.05rem; }
          .footer-bank-num { font-size: 1.175rem; }
          .footer-bank-holder { font-size: .92rem; }
          .footer-bank-pad { padding: 1.2rem; }
          .footer-bottom { padding: 1.625rem 0; }
          .footer-copy { font-size: 1.0rem; }
          .footer-legal-link { font-size: 1.0rem; }
          .footer-dev { font-size: .96rem; }
          .site-logo img { width: 190px !important; }
        }

        @media (min-width: 1920px) {
          .footer-top { padding: 6.5rem 1.25rem 0; }
          .footer-grid { gap: 3.75rem 3.25rem; padding-bottom: 4.25rem; }
          .footer-brand-desc { font-size: 1.22rem; margin-bottom: 2.125rem; }
          .footer-social-label { font-size: .98rem; margin-bottom: .8rem; }
          .footer-social { width: 2.725rem; height: 2.725rem; }
          .footer-social-icon { width: 1.2rem; height: 1.2rem; }
          .footer-social-gap { gap: .8rem; }
          .footer-group-label { font-size: .98rem; margin-bottom: 1.425rem; }
          .footer-link { font-size: 1.2rem; }
          .footer-link-gap { gap: .83rem; }
          .footer-contact-gap { gap: 1.175rem; margin-bottom: 2.125rem; }
          .footer-contact-icon { width: 1.2rem; height: 1.2rem; }
          .footer-bank-label { font-size: .96rem; margin-bottom: .65rem; }
          .footer-bank-name { font-size: 1.175rem; }
          .footer-bank-num { font-size: 1.45rem; }
          .footer-bank-holder { font-size: 1.02rem; }
          .footer-bank-pad { padding: 1.375rem; }
          .footer-bottom { padding: 1.875rem 0; }
          .footer-copy { font-size: 1.12rem; }
          .footer-legal-link { font-size: 1.12rem; }
          .footer-dev { font-size: 1.08rem; }
          .site-logo img { width: 205px !important; }
        }
      `}</style>

      <div className="container-max footer-top">
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(175px, 1fr))",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {/* Brand */}
          <div>
            <div
              className="site-logo"
              style={{
                display: "flex",
                alignItems: "center",
                gap: ".625rem",
                marginBottom: "1.25rem",
              }}
            >
              <Image
                src="/cra-logoo.png"
                alt="Children's Right Advocate Foundation"
                width={150}
                height={50}
                priority
              />
            </div>
            <p
              className="footer-brand-desc"
              style={{ lineHeight: 1.7, color: "rgba(255,255,255,.4)" }}
            >
              Nurturing underprivileged children in Lagos through education,
              welfare, and advocacy since 2010.
            </p>
            <p
              className="footer-social-label"
              style={{
                fontWeight: 700,
                letterSpacing: ".06em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,.25)",
              }}
            >
              Follow Us
            </p>
            <div className="footer-social-gap" style={{ display: "flex" }}>
              {socialLinks.map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social"
                >
                  <Icon className="footer-social-icon" />
                </a>
              ))}
            </div>
          </div>

          {/* Link groups */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <p
                className="footer-group-label"
                style={{
                  fontWeight: 700,
                  letterSpacing: ".07em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,.25)",
                }}
              >
                {group}
              </p>
              <ul
                className="footer-link-gap"
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <p
              className="footer-group-label"
              style={{
                fontWeight: 700,
                letterSpacing: ".07em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,.25)",
              }}
            >
              Contact
            </p>
            <div
              className="footer-contact-gap"
              style={{ display: "flex", flexDirection: "column" }}
            >
              {[
                {
                  Icon: RiMapPinLine,
                  text: "40B Ayilara Street, Surulere, Lagos",
                },
                {
                  Icon: RiPhoneLine,
                  text: "08063811840",
                  href: "tel:08063811840",
                },
                {
                  Icon: RiMailLine,
                  text: "admin@crafoundation.com.ng",
                  href: "mailto:admin@crafoundation.com.ng",
                },
              ].map(({ Icon, text, href }) => (
                <a
                  key={text}
                  href={href || "#"}
                  className="footer-link"
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: ".5rem",
                  }}
                >
                  <Icon
                    className="footer-contact-icon"
                    style={{
                      color: "var(--brand-600)",
                      marginTop: ".2rem",
                      flexShrink: 0,
                    }}
                  />
                  <span>{text}</span>
                </a>
              ))}
            </div>

            {/* Bank card — inline with contact (md:hidden xl:block) */}
            <div
              className="footer-bank-pad md:hidden xl:block"
              style={{
                background: "rgba(255,255,255,.04)",
                border: "1px solid rgba(255,255,255,.07)",
                borderRadius: "var(--radius-lg)",
              }}
            >
              <p
                className="footer-bank-label"
                style={{
                  fontWeight: 700,
                  letterSpacing: ".06em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,.25)",
                }}
              >
                Bank Donation
              </p>
              <p
                className="footer-bank-name"
                style={{ fontWeight: 600, color: "rgba(255,255,255,.7)" }}
              >
                Zenith Bank
              </p>
              <p
                className="footer-bank-num"
                style={{
                  fontWeight: 800,
                  color: "var(--brand-600)",
                  letterSpacing: ".05em",
                }}
              >
                1012771274
              </p>
              <p
                className="footer-bank-holder"
                style={{ color: "rgba(255,255,255,.25)", marginTop: ".2rem" }}
              >
                Children&apos;s Right Advocate Foundation
              </p>
            </div>
          </div>

          {/* Bank card — standalone (hidden md:block xl:hidden) */}
          <div
            className="footer-bank-pad hidden md:block xl:hidden"
            style={{
              background: "rgba(255,255,255,.04)",
              border: "1px solid rgba(255,255,255,.07)",
              borderRadius: "var(--radius-lg)",
            }}
          >
            <p
              className="footer-bank-label"
              style={{
                fontWeight: 700,
                letterSpacing: ".06em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,.25)",
              }}
            >
              Bank Donation
            </p>
            <p
              className="footer-bank-name"
              style={{ fontWeight: 600, color: "rgba(255,255,255,.7)" }}
            >
              Zenith Bank
            </p>
            <p
              className="footer-bank-num"
              style={{
                fontWeight: 800,
                color: "var(--brand-600)",
                letterSpacing: ".05em",
              }}
            >
              1012771274
            </p>
            <p
              className="footer-bank-holder"
              style={{ color: "rgba(255,255,255,.25)", marginTop: ".2rem" }}
            >
              Children&apos;s Right Advocate Foundation
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div
          className="container-max"
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: ".75rem",
          }}
        >
          <p className="footer-copy" style={{ color: "rgba(255,255,255,.3)" }}>
            © {year} Children&apos;s Right Advocate Foundation. All rights
            reserved.
          </p>
          <div className="flex flex-col md:flex-row md:items-center md:gap-6">
            <Link href="/privacy" className="footer-legal-link">
              Privacy Policy
            </Link>
            <Link href="/terms" className="footer-legal-link">
              Terms of Use
            </Link>
            <span
              className="footer-dev"
              style={{
                display: "flex",
                alignItems: "center",
                gap: ".3rem",
                color: "rgba(255,255,255,.2)",
              }}
            >
              Developed by
              <a
                href="https://ihemestudio.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-legal-link"
              >
                Iheme Studio
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
