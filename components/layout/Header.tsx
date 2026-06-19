"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { navigation } from "@/data";
import {
  RiMenu3Line,
  RiCloseLine,
  RiPhoneLine,
  RiMailLine,
  RiArrowDownSLine,
  RiHandHeartFill,
  RiFacebookFill,
  RiInstagramLine,
  RiTwitterXFill,
  RiWhatsappLine,
} from "react-icons/ri";

import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const close = () => {
    setIsOpen(false);
    setMobileOpen(null);
  };

  return (
    <>
      <style>{`
  .nav-link {
    display: inline-flex;
    align-items: center;
    gap: .2rem;
    padding: .45rem .7rem;
    font-size: .845rem;
    font-weight: 500;
    color: var(--neutral-700);
    border-radius: var(--radius-md);
    transition: all .15s ease;
    text-decoration: none;
    letter-spacing: -.01em;
  }

  .nav-link:hover {
    color: var(--neutral-950);
    background: var(--neutral-100);
  }

    @media (max-width: 1024px) {
      .nav-link {
        padding: .45rem .3rem;
    }
  }

  .dropdown-item {
    display: block;
    padding: .5rem .75rem;
    font-size: .845rem;
    font-weight: 500;
    color: var(--neutral-600);
    border-radius: var(--radius-md);
    transition: all .12s ease;
    text-decoration: none;
  }

  .dropdown-item:hover {
    background: var(--neutral-50);
    color: var(--neutral-950);
  }

  .mobile-nav-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .625rem .75rem;
    font-size: .9rem;
    font-weight: 600;
    color: var(--neutral-800);
    border-radius: var(--radius-md);
    transition: background .12s;
    text-decoration: none;
  }

  .mobile-nav-link:hover {
    background: var(--neutral-50);
  }

  .mobile-sub-link {
    display: block;
    padding: .4rem .5rem;
    font-size: .845rem;
    color: var(--neutral-500);
    border-radius: var(--radius-sm);
    transition: color .12s;
    text-decoration: none;
  }

  .mobile-sub-link:hover {
    color: var(--brand-600);
  }

  .topbar-link {
    display: flex;
    align-items: center;
    gap: .35rem;
    color: rgba(255,255,255,.5);
    font-size: .78rem;
    text-decoration: none;
    transition: color .15s;
  }

  .topbar-link:hover {
    color: #fff;
  }




`}</style>

      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "all .2s ease",
        }}
      >
        {/* Top utility bar */}
        <div
          style={{
            background: "var(--neutral-950)",
            overflow: "hidden",
            maxHeight: scrolled ? "0" : "2.25rem",
            opacity: scrolled ? 0 : 1,
            transition: "max-height .3s ease, opacity .3s ease",
          }}
        >
          <div
            className="container-max"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "2.25rem",
            }}
          >
            <div
              style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}
            >
              <a href="tel:08063811840" className="topbar-link">
                <RiPhoneLine style={{ width: ".8rem", height: ".8rem" }} />{" "}
                08063811840
              </a>
              <a
                href="mailto:admin@crafoundation.com.ng"
                className="topbar-link hidden! md:flex!"
              >
                <RiMailLine style={{ width: ".8rem", height: ".8rem" }} />{" "}
                admin@crafoundation.com.ng
              </a>
            </div>

            <div
              style={{
                alignItems: "center",
                gap: "0.875rem",
              }}
              className="flex"
            >
              <a
                href="https://web.facebook.com/nurtureadream?rdid=PyoQ16CCNhujAVtX&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2F1EKD1fnrUs%2F%3F_rdc%3D1%26_rdr#"
                target="_blank"
                rel="noopener noreferrer"
                className="topbar-link"
                aria-label="Facebook"
              >
                <RiFacebookFill style={{ width: ".8rem", height: ".8rem" }} />
              </a>
              <a
                href="https://www.instagram.com/childrensright?igsh=bHJhaDB2NWlnaTR3"
                target="_blank"
                rel="noopener noreferrer"
                className="topbar-link"
                aria-label="Instagram"
              >
                <RiInstagramLine style={{ width: ".8rem", height: ".8rem" }} />
              </a>
              <a
                href="https://x.com/your-page"
                target="_blank"
                rel="noopener noreferrer"
                className="topbar-link"
                aria-label="X (Twitter)"
              >
                <RiTwitterXFill style={{ width: ".8rem", height: ".8rem" }} />
              </a>
              <a
                href="https://wa.me/2348063811840"
                target="_blank"
                rel="noopener noreferrer"
                className="topbar-link"
                aria-label="WhatsApp"
              >
                <RiWhatsappLine style={{ width: ".8rem", height: ".8rem" }} />
              </a>
            </div>
          </div>
        </div>

        {/* Main nav */}
        <div
          style={{
            background: scrolled
              ? "rgba(255,255,255,.97)"
              : "rgba(255,255,255,.98)",
            backdropFilter: "blur(16px)",
            borderBottom: scrolled
              ? "1px solid var(--border-subtle)"
              : "1px solid rgba(0,0,0,.04)",
            boxShadow: scrolled ? "var(--shadow-sm)" : "none",
            transition: "all .2s ease",
          }}
        >
          <div
            className="container-max"
            style={{
              display: "flex",
              alignItems: "center",
              height: "3.75rem",
              gap: ".75rem",
            }}
          >
            {/* Logo */}
            <Link
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: ".625rem",
                textDecoration: "none",
                flexShrink: 0,
              }}
            >
              <Image
                src="/cra-logoo.png"
                alt="Children's Right Advocate Foundation"
                width={150}
                height={50}
                priority
              />
            </Link>

            {/* Desktop nav */}
            <nav
              style={{
                display: "flex",
                alignItems: "center",
                gap: ".125rem",
                marginLeft: ".5rem",
                flex: 1,
              }}
              className="desktop-nav-block"
            >
              {navigation.map((item) => (
                <div
                  key={item.label}
                  style={{ position: "relative" }}
                  onMouseEnter={() => setDropdown(item.label)}
                  onMouseLeave={() => setDropdown(null)}
                >
                  <Link href={item.href} className="nav-link">
                    {item.label}
                    {item.children && (
                      <RiArrowDownSLine
                        style={{
                          width: ".9rem",
                          height: ".9rem",
                          opacity: 0.5,
                          transition: "transform .2s",
                          transform:
                            dropdown === item.label
                              ? "rotate(-180deg)"
                              : "rotate(0)",
                        }}
                      />
                    )}
                  </Link>
                  {item.children && dropdown === item.label && (
                    <div
                      style={{
                        position: "absolute",
                        top: "calc(100% + 4px)",
                        left: 0,
                        background: "var(--white)",
                        border: "1px solid var(--border-subtle)",
                        borderRadius: "var(--radius-lg)",
                        boxShadow: "var(--shadow-xl)",
                        minWidth: "13rem",
                        padding: ".375rem",
                        zIndex: 100,
                        animation: "fadeUp .15s ease forwards",
                      }}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="dropdown-item"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA */}
            <div
              style={{
                marginLeft: "auto",
                display: "flex",
                alignItems: "center",
                gap: ".5rem",
                flexShrink: 0,
              }}
              className="cta-block"
            >
              <Link
                href="/volunteer"
                className="btn btn-secondary btn-sm volunteer-btn"
              >
                Volunteer
              </Link>
              <Link
                href="/donate"
                className="btn btn-primary btn-sm pulse-ring"
              >
                <RiHandHeartFill
                  style={{ width: ".875rem", height: ".875rem" }}
                />{" "}
                Donate
              </Link>
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="hamburger-btn"
              style={{
                display: "none",
                padding: ".5rem",
                background: "var(--neutral-100)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--radius-md)",
                color: "var(--neutral-700)",
                cursor: "pointer",
                marginLeft: "auto",
              }}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <RiCloseLine style={{ width: "1.25rem", height: "1.25rem" }} />
              ) : (
                <RiMenu3Line style={{ width: "1.25rem", height: "1.25rem" }} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div
            style={{
              background: "var(--white)",
              borderBottom: "1px solid var(--border-subtle)",
              boxShadow: "var(--shadow-lg)",
            }}
          >
            <div
              className="container-max"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: ".25rem",
                padding: "1rem 1.25rem",
              }}
            >
              {navigation.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() =>
                          setMobileOpen(
                            mobileOpen === item.label ? null : item.label,
                          )
                        }
                        style={{
                          width: "100%",
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          textAlign: "left",
                          padding: 0,
                        }}
                      >
                        <div
                          className="mobile-nav-link"
                          style={{ pointerEvents: "none" }}
                        >
                          {item.label}
                          <RiArrowDownSLine
                            style={{
                              width: "1rem",
                              height: "1rem",
                              opacity: 0.4,
                              transition: "transform .2s",
                              transform:
                                mobileOpen === item.label
                                  ? "rotate(-180deg)"
                                  : "rotate(0)",
                            }}
                          />
                        </div>
                      </button>

                      {mobileOpen === item.label && (
                        <div
                          style={{
                            marginLeft: ".75rem",
                            borderLeft: "2px solid var(--border-subtle)",
                            paddingLeft: ".75rem",
                            marginBottom: ".25rem",
                            display: "flex",
                            flexDirection: "column",
                            gap: ".125rem",
                          }}
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="mobile-sub-link"
                              onClick={close}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="mobile-nav-link"
                      onClick={close}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div
                style={{
                  paddingTop: ".75rem",
                  borderTop: "1px solid var(--border-subtle)",
                  display: "flex",
                  gap: ".5rem",
                  marginTop: ".25rem",
                }}
              >
                <Link
                  href="/volunteer"
                  className="btn btn-secondary"
                  style={{ flex: 1, justifyContent: "center" }}
                  onClick={close}
                >
                  Volunteer
                </Link>
                <Link
                  href="/donate"
                  className="btn btn-primary"
                  style={{ flex: 1, justifyContent: "center" }}
                  onClick={close}
                >
                  Donate Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Responsive rules */}
      <style>{`
        @media (min-width:640px) { .logo-text-block { display:block !important; } }
        @media (min-width:1024px) { .logo-text-block { display:none !important; } }
        @media (min-width:1280px) { .logo-text-block { display:block !important; } }
        @media (min-width:1024px) { .volunteer-btn { display:inline-flex !important; } .hamburger-btn { display:none !important; } }
        @media (max-width:1023px)  { .desktop-nav-block { display:none !important; } .cta-block { display:none !important; } .hamburger-btn { display:flex !important; } }
        // @media (min-width:768px)  { .hamburger-btn { display:none !important; } }
      `}</style>
    </>
  );
}
