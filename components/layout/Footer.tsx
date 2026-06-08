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
  { Icon: RiTwitterXLine, href: "https://x.com" },
  { Icon: RiInstagramLine, href: "https://instagram.com" },
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
      `}</style>

      <div className="container-max" style={{ padding: "4rem 1.25rem 0" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(175px, 1fr))",
            gap: "2.5rem 2rem",
            paddingBottom: "3rem",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.625rem",
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
              style={{
                fontSize: "0.845rem",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.4)",
                marginBottom: "1.5rem",
              }}
            >
              Nurturing underprivileged children in Lagos through education,
              welfare, and advocacy since 2010.
            </p>
            <p
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.25)",
                marginBottom: "0.625rem",
              }}
            >
              Follow Us
            </p>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              {socialLinks.map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social"
                >
                  <Icon style={{ width: "0.875rem", height: "0.875rem" }} />
                </a>
              ))}
            </div>
          </div>

          {/* Link groups */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <p
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.25)",
                  marginBottom: "1.125rem",
                }}
              >
                {group}
              </p>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
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
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.07em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.25)",
                marginBottom: "1.125rem",
              }}
            >
              Contact
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.875rem",
                marginBottom: "1.5rem",
              }}
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
                  text: "nurtureadream@yahoo.com",
                  href: "mailto:nurtureadream@yahoo.com",
                },
              ].map(({ Icon, text, href }) => (
                <a
                  key={text}
                  href={href || "#"}
                  className="footer-link"
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.5rem",
                  }}
                >
                  <Icon
                    style={{
                      width: "0.875rem",
                      height: "0.875rem",
                      color: "var(--brand-600)",
                      marginTop: "0.2rem",
                      flexShrink: 0,
                    }}
                  />
                  <span>{text}</span>
                </a>
              ))}
            </div>
            <div
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "var(--radius-lg)",
                padding: "1rem",
              }}
            >
              <p
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.25)",
                  marginBottom: "0.5rem",
                }}
              >
                Bank Donation
              </p>
              <p
                style={{
                  fontSize: "0.845rem",
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                Zenith Bank
              </p>
              <p
                style={{
                  fontSize: "1rem",
                  fontWeight: 800,
                  color: "var(--brand-600)",
                  letterSpacing: "0.05em",
                }}
              >
                1012771274
              </p>
              <p
                style={{
                  fontSize: "0.74rem",
                  color: "rgba(255,255,255,0.25)",
                  marginTop: "0.2rem",
                }}
              >
                Children&apos;s Right Advocate Foundation
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ padding: "1.25rem 0" }}>
        <div
          className="container-max"
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "0.75rem",
          }}
        >
          <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.3)" }}>
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
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.3rem",
                fontSize: "0.78rem",
                color: "rgba(255,255,255,0.2)",
              }}
            >
              Developed by
              <a
                href="https://ifeanyiiheme.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-legal-link"
              >
                Ifeanyi Iheme
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
