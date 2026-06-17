import type { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import Link from "next/link";
import {
  RiGiftLine,
  RiHandHeartLine,
  RiArrowRightLine,
  RiBookReadLine,
  RiEmotionHappyLine,
  RiShieldCheckLine,
  RiCalendarEventLine,
  RiDoubleQuotesL,
} from "react-icons/ri";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Children Giving to Children",
  description:
    "A peer-led initiative where children supported by CRA Foundation become givers themselves — sharing books, toys, meals, and friendship with other children in need.",
};

/* ── Image galleries ── */
const heroPhoto = {
  src: "/images/cgc/cgbc5.jpg",
  alt: "Children sharing and playing together",
};

const storyGallery = [
  {
    src: "/images/cgc/cgc10.jpg",
    alt: "Children sorting donated books",
  },
  {
    src: "/images/cgc/cgc7.jpg",
    alt: "Group of children at school",
  },
  {
    src: "/images/cgc/cgc4.jpg",
    alt: "Child smiling with a gift",
  },
];

const activitiesGallery = [
  {
    src: "/images/cgc/cgc10.jpg",
    alt: "Buddy reading session",
  },
  {
    src: "/images/cgc/cgc5.jpg",
    alt: "Donated books and supplies",
  },
  {
    src: "/images/cgc/cgc6.jpg",
    alt: "Children celebrating together",
  },
  {
    src: "/images/cgc/cgc7.jpg",
    alt: "Child mentoring another child",
  },
  {
    src: "/images/cgc/cgc8.jpg",
    alt: "Excursion with children",
  },
  {
    src: "/images/cgc/cgc3.jpg",
    alt: "Classroom group activity",
  },
  {
    src: "/images/cgc/cgc1.jpg",
    alt: "Classroom group activity",
  },
  {
    src: "/images/cgc/cgc2.jpg",
    alt: "Classroom group activity",
  },
  {
    src: "/images/cgc/cgc4.jpg",
    alt: "Classroom group activity",
  },
];

const eventsGallery = [
  {
    src: "/images/cgc/cgc7.jpg",
    alt: "Fun day celebration",
  },
  {
    src: "/images/cgc/cgc8.jpg",
    alt: "Children at an event",
  },
  {
    src: "/images/cgc/cgc1.jpg",
    alt: "Children in classroom event",
  },
];

/* ── How it works ── */
const pillars = [
  {
    icon: RiBookReadLine,
    title: "Buddy Reading",
    desc: "Older sponsored children read with and mentor younger children during after-school sessions, passing on the gift of literacy.",
    color: "#DC2626",
    bg: "#FEF2F2",
  },
  {
    icon: RiGiftLine,
    title: "Gift & Supply Drives",
    desc: "Children donate gently-used books, toys, clothes, and school supplies they have outgrown to children who need them most.",
    color: "#7C3AED",
    bg: "#F5F3FF",
  },
  {
    icon: RiHandHeartLine,
    title: "Peer Mentorship",
    desc: "Children who have overcome challenges — academic or personal — are paired with newer children to offer encouragement and friendship.",
    color: "#16A34A",
    bg: "#F0FDF4",
  },
  {
    icon: RiEmotionHappyLine,
    title: "Shared Celebrations",
    desc: "Birthdays, festivals, and milestones are celebrated together, with children organising small treats and gifts for each other.",
    color: "#D97706",
    bg: "#FFFBEB",
  },
];

/* ── Impact stats ── */
const stats = [
  { value: "480+", label: "Children Participating" },
  { value: "1,200+", label: "Items Shared or Donated" },
  { value: "60+", label: "Peer Mentorship Pairs" },
  { value: "12", label: "Community Events Held" },
];

export default function ChildrenGivingPage() {
  return (
    <>
      <style>{`
        .cgp-gallery {
          display: grid;
          grid-template-columns: 1fr;
          gap: .875rem;
        }
        @media (min-width: 640px)  { .cgp-gallery-3 { grid-template-columns: repeat(3, 1fr); } }
        @media (min-width: 640px)  { .cgp-gallery-2 { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .cgp-gallery-6 { grid-template-columns: repeat(3, 1fr); } }
        @media (min-width: 1280px) { .cgp-gallery-6 { grid-template-columns: repeat(6, 1fr); } }

        .cgp-photo {
          border-radius: 16px;
          overflow: hidden;
          position: relative;
          aspect-ratio: 4/3;
          background: #F3F4F6;
        }
        .cgp-photo img {
          width: 100%; height: 100%;
          object-fit: cover; display: block;
          transition: transform .45s ease;
        }
        .cgp-photo:hover img { transform: scale(1.06); }

        .cgp-photo-tall { aspect-ratio: 3/4; }

        .cgp-pillar-card {
          display: flex;
          gap: 1rem;
          padding: 1.5rem;
          border-radius: 18px;
          background: #fff;
          border: 1px solid var(--border-subtle);
          transition: transform .2s ease, box-shadow .2s ease;
        }
        .cgp-pillar-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 40px rgba(0,0,0,.08);
        }

        .cgp-stat-card {
          padding: 1.5rem;
          border-radius: 16px;
          background: #fff;
          border: 1px solid var(--border-subtle);
          text-align: center;
        }
      `}</style>

      {/* ── Hero ── */}
      <PageHeader
        badge="A Peer-Led Initiative"
        title="Children Giving"
        highlight="to Children"
        description="A movement that invites privileged children to become active givers — sharing books, toys, clothes, and friendship with underprivileged children in need. Because compassion, generosity, and gratitude are values best shaped early, and best learned by practising them."
      >
        <div style={{ display: "flex", flexWrap: "wrap", gap: ".75rem" }}>
          <Link href="/donate" className="btn btn-primary btn-lg">
            Support This Initiative{" "}
            <RiArrowRightLine style={{ width: "1rem", height: "1rem" }} />
          </Link>
          <Link href="/volunteer" className="btn btn-outline-white btn-lg">
            Get Involved
          </Link>
        </div>
      </PageHeader>

      {/* ── Featured hero photo ── */}
      <section style={{ background: "var(--white)", padding: "0" }}>
        <div
          className="container-max"
          style={{ paddingTop: "2.5rem", paddingBottom: "0" }}
        >
          <div
            className="cgp-photo"
            style={{ aspectRatio: "21/9", borderRadius: "24px" }}
          >
            <Image
              src={heroPhoto.src}
              alt={heroPhoto.alt}
              fill
              loading="eager"
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(17,24,39,.55) 0%, transparent 55%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "1.5rem",
                left: "1.5rem",
                right: "1.5rem",
              }}
            >
              <p
                style={{
                  fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                  fontWeight: 700,
                  color: "#fff",
                  lineHeight: 1.35,
                  maxWidth: "38rem",
                }}
              >
                &quot;When a child gives, they discover they have something
                valuable to offer — and that changes how they see
                themselves.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Story / Introduction ── */}
      <section
        className="section-padding"
        style={{ background: "var(--white)" }}
      >
        <div className="container-max">
          <div
            style={{
              gap: "4rem",
              alignItems: "center",
            }}
            className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]"
            // style={{
            //   display: "grid",
            //   gridTemplateColumns: "minmax(0,1.1fr) minmax(0,1fr)",
            //   gap: "4rem",
            //   alignItems: "center",
            // }}
          >
            <div>
              <p className="section-label">Our Story</p>
              <h2 style={{ marginBottom: "1.25rem" }}>
                When Privilege Meets Purpose
              </h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                {[
                  '"Children Giving to Children" was born from a simple belief: that children who have been given much carry a unique responsibility — and joy — in giving to others. This initiative invites children from privileged homes to look beyond their own comfort and extend a hand to peers who have far less.',
                  "Whether donating outgrown clothes, school supplies, or toys they no longer use, these children are learning one of life's most important lessons early — that generosity is not about having extra, it is about choosing to share what you have.",
                  "The impact goes both ways. Privileged children grow in empathy, gratitude, and social awareness. And for the children who receive, knowing the gift came from a fellow child — not an institution — carries a warmth that is hard to put into words.",
                ].map((p, i) => (
                  <p
                    key={i}
                    style={{
                      fontSize: ".9375rem",
                      lineHeight: 1.8,
                      color: "var(--neutral-600)",
                    }}
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>

            {/* Story gallery — vertical stack */}
            <div
              className="cgp-gallery"
              style={{
                gridTemplateColumns: "1fr 1fr",
                gridTemplateRows: "auto auto",
              }}
            >
              <div
                className="cgp-photo cgp-photo-tall"
                style={{ gridRow: "1 / 3" }}
              >
                <Image
                  src={storyGallery[0].src}
                  alt={storyGallery[0].alt}
                  fill
                  loading="lazy"
                />
              </div>
              <div className="cgp-photo">
                <Image
                  src={storyGallery[1].src}
                  alt={storyGallery[1].alt}
                  fill
                  loading="lazy"
                />
              </div>
              <div className="cgp-photo">
                <Image
                  src={storyGallery[2].src}
                  alt={storyGallery[2].alt}
                  fill
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section
        style={{
          background: "var(--neutral-50)",
          borderTop: "1px solid var(--border-subtle)",
          borderBottom: "1px solid var(--border-subtle)",
          padding: "3.5rem 0",
        }}
      >
        <div className="container-max">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))",
              gap: "1rem",
            }}
          >
            {stats.map((s) => (
              <div key={s.label} className="cgp-stat-card">
                <div
                  style={{
                    fontSize: "2.25rem",
                    fontWeight: 800,
                    color: "var(--brand-600)",
                    letterSpacing: "-.04em",
                    lineHeight: 1,
                    marginBottom: ".5rem",
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontSize: ".845rem",
                    color: "var(--neutral-500)",
                    fontWeight: 500,
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works (pillars) ── */}
      <section
        className="section-padding"
        style={{ background: "var(--white)" }}
      >
        <div className="container-max">
          <div style={{ marginBottom: "2.5rem", maxWidth: "40rem" }}>
            <p className="section-label">How It Works</p>
            <h2 style={{ marginBottom: ".875rem" }}>
              Four Ways Children Give Back
            </h2>
            <p
              style={{
                fontSize: ".9375rem",
                color: "var(--neutral-500)",
                lineHeight: 1.75,
              }}
            >
              The initiative runs through simple, repeatable activities woven
              into our existing programs — no extra burden, just a shift in how
              children see their role.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))",
              gap: "1.25rem",
            }}
          >
            {pillars.map(({ icon: Icon, title, desc, color, bg }) => (
              <div key={title} className="cgp-pillar-card">
                <div
                  style={{
                    width: "2.75rem",
                    height: "2.75rem",
                    borderRadius: "12px",
                    background: bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon
                    style={{ width: "1.25rem", height: "1.25rem", color }}
                  />
                </div>
                <div>
                  <h4 style={{ marginBottom: ".5rem" }}>{title}</h4>
                  <p
                    style={{
                      fontSize: ".875rem",
                      color: "var(--neutral-500)",
                      lineHeight: 1.65,
                    }}
                  >
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Activities gallery ── */}
      <section
        className="section-padding"
        style={{
          background: "var(--neutral-50)",
          borderTop: "1px solid var(--border-subtle)",
        }}
      >
        <div className="container-max">
          <div style={{ marginBottom: "2.5rem" }}>
            <p className="section-label">Activities Gallery</p>
            <h2>Moments from the Initiative</h2>
          </div>
          <div className="cgp-gallery cgp-gallery-6">
            {activitiesGallery.map((p, i) => (
              <div
                key={i}
                className="cgp-photo"
                style={{
                  gridColumn: i === 0 ? "span 2" : undefined,
                  gridRow: i === 0 ? "span 2" : undefined,
                  aspectRatio: i === 0 ? "1/1" : "4/3",
                }}
              >
                <Image src={p.src} alt={p.alt} fill loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonial ── */}
      <section
        className="section-padding"
        style={{ background: "var(--neutral-950)" }}
      >
        <div className="container-max">
          <div
            style={{ maxWidth: "42rem", margin: "0 auto", textAlign: "center" }}
          >
            <RiDoubleQuotesL
              style={{
                width: "2.5rem",
                height: "2.5rem",
                color: "var(--brand-600)",
                opacity: 0.6,
                margin: "0 auto 1.5rem",
              }}
            />
            <p
              style={{
                fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
                fontWeight: 400,
                color: "rgba(255,255,255,.85)",
                lineHeight: 1.7,
                fontStyle: "italic",
                marginBottom: "2rem",
              }}
            >
              &quot;I used to think I had nothing to give because I was the one
              always receiving help. But when I started reading with the younger
              kids and gave my old books to them, I felt like I mattered. Now I
              want to be a teacher.&quot;
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: ".875rem",
              }}
            >
              <div
                style={{
                  width: "2.75rem",
                  height: "2.75rem",
                  borderRadius: "50%",
                  background: "var(--brand-600)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "#fff",
                }}
              >
                T
              </div>
              <div style={{ textAlign: "left" }}>
                <p
                  style={{
                    fontWeight: 600,
                    color: "#fff",
                    fontSize: ".9375rem",
                    marginBottom: ".15rem",
                  }}
                >
                  Toyin, age 12
                </p>
                <p style={{ fontSize: ".8rem", color: "rgba(255,255,255,.4)" }}>
                  Buddy Reading Participant
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Events & Celebrations gallery ── */}
      <section
        className="section-padding"
        style={{ background: "var(--white)" }}
      >
        <div className="container-max">
          <div style={{ marginBottom: "2.5rem" }}>
            <p className="section-label">Events & Celebrations</p>
            <h2>Shared Joy, Shared Memories</h2>
          </div>
          <div className="cgp-gallery cgp-gallery-3">
            {eventsGallery.map((p, i) => (
              <div key={i} className="cgp-photo">
                <Image src={p.src} alt={p.alt} fill loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust / Safeguarding note ── */}
      <section
        style={{
          background: "var(--neutral-50)",
          borderTop: "1px solid var(--border-subtle)",
          padding: "3rem 0",
        }}
      >
        <div className="container-max">
          <div
            style={{
              display: "flex",
              gap: "1.25rem",
              alignItems: "flex-start",
              maxWidth: "46rem",
              margin: "0 auto",
            }}
          >
            <div
              style={{
                width: "2.75rem",
                height: "2.75rem",
                borderRadius: "12px",
                background: "var(--accent-green-50)",
                border: "1px solid #D1FAE5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <RiShieldCheckLine
                style={{
                  width: "1.25rem",
                  height: "1.25rem",
                  color: "var(--accent-green-600)",
                }}
              />
            </div>
            <div>
              <h4 style={{ marginBottom: ".5rem" }}>
                Safe, Supervised, and Age-Appropriate
              </h4>
              <p
                style={{
                  fontSize: ".9rem",
                  color: "var(--neutral-500)",
                  lineHeight: 1.7,
                }}
              >
                All &quot;Children Giving to Children&quot; activities are
                facilitated and supervised by trained CRA Foundation staff and
                volunteers. Mentorship pairings, gift exchanges, and events
                follow strict child-safeguarding guidelines to ensure every
                child&apos;s safety and dignity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        style={{
          background: "var(--neutral-950)",
          padding: "4rem 0",
          textAlign: "center",
        }}
      >
        <div className="container-max">
          <RiCalendarEventLine
            style={{
              width: "2.5rem",
              height: "2.5rem",
              color: "var(--brand-600)",
              margin: "0 auto 1.25rem",
            }}
          />
          <h2 style={{ color: "#fff", marginBottom: ".875rem" }}>
            Help Us Grow This Initiative
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,.45)",
              maxWidth: "30rem",
              margin: "0 auto 2rem",
              lineHeight: 1.7,
            }}
          >
            Sponsor a buddy-reading kit, fund a celebration day, or volunteer to
            help facilitate peer mentorship sessions.
          </p>
          <div
            style={{
              display: "flex",
              gap: ".75rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link href="/donate" className="btn btn-white btn-lg">
              Donate Now
            </Link>
            <Link href="/volunteer" className="btn btn-outline-white btn-lg">
              Become a Volunteer
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
