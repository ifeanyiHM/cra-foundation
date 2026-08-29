import type { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import VolunteerForm from "@/components/forms/VolunteerForm";
import {
  RiBook2Line,
  RiUserHeartLine,
  RiCalendarEventLine,
  RiCameraLine,
  RiComputerLine,
  RiCarLine,
} from "react-icons/ri";

export const metadata: Metadata = { title: "Volunteer" };

const roles = [
  {
    icon: RiBook2Line,
    title: "Tutor / Teacher",
    desc: "Help children with after-school lessons in any subject.",
    accent: {
      bg: "var(--accent-blue-50)",
      icon: "var(--accent-blue-600)",
      border: "#DBEAFE",
    },
  },
  {
    icon: RiUserHeartLine,
    title: "Mentor",
    desc: "Guide and inspire children through one-on-one mentoring.",
    accent: {
      bg: "var(--brand-50)",
      icon: "var(--brand-600)",
      border: "var(--brand-100)",
    },
  },
  {
    icon: RiCalendarEventLine,
    title: "Event Organizer",
    desc: "Help plan and execute fun days, excursions, and festivals.",
    accent: {
      bg: "var(--accent-violet-50)",
      icon: "var(--accent-violet-600)",
      border: "#EDE9FE",
    },
  },
  {
    icon: RiCameraLine,
    title: "Media / Content",
    desc: "Document our work through photography, video, or social media.",
    accent: {
      bg: "var(--accent-amber-50)",
      icon: "var(--accent-amber)",
      border: "#FEF3C7",
    },
  },
  {
    icon: RiComputerLine,
    title: "IT Support",
    desc: "Maintain learning center computers and internet resources.",
    accent: {
      bg: "var(--accent-teal-50)",
      icon: "var(--accent-teal-600)",
      border: "#CCFBF1",
    },
  },
  {
    icon: RiCarLine,
    title: "Transport / Driver",
    desc: "Provide transportation for children on excursions and events.",
    accent: {
      bg: "var(--accent-green-50)",
      icon: "var(--accent-green-600)",
      border: "#D1FAE5",
    },
  },
];

const perks = [
  ["Flexible Hours", "Work around your schedule"],
  ["Direct Impact", "Engage one-on-one with children"],
  ["Certificate", "Recognised volunteer certificate"],
  ["Community", "Join a passionate team"],
  ["Skills Dev", "Grow personally and professionally"],
  ["Surulere", "Based in Lagos Island and Mainland"],
];

export default function VolunteerPage() {
  return (
    <>
      <PageHeader
        badge="Get Involved"
        title="Volunteer"
        highlight="With Us"
        description="Offer your time, skills, and passion to make a direct difference in the lives of underprivileged children across Lagos."
      />

      {/* Why volunteer */}
      <section
        className="section-padding"
        style={{ background: "var(--white)" }}
      >
        <div className="container-max">
          <div className="vol-why-gap grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
            <div>
              <p className="section-label">Why Volunteer</p>
              <h2 style={{ marginBottom: "1.25rem" }}>
                Your Time Changes Everything
              </h2>
              <div
                className="vol-why-text"
                style={{ display: "flex", flexDirection: "column" }}
              >
                {[
                  "Volunteering with CRA Foundation is one of the most meaningful things you can do. You will work directly with children who are hungry for knowledge, attention, and positive role models.",
                  "Whether you have one hour a week or a full Saturday, your presence makes a profound difference. Children in our programs go from struggling to thriving — and volunteers are a core reason why.",
                  "You will gain experience, build meaningful relationships, and leave with a deep sense of purpose and community.",
                ].map((t, i) => (
                  <p
                    key={i}
                    className="vol-why-p"
                    style={{ color: "var(--neutral-500)", lineHeight: 1.75 }}
                  >
                    {t}
                  </p>
                ))}
              </div>
            </div>
            <div
              className="vol-perks-grid"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
            >
              {perks.map(([title, desc]) => (
                <div key={title} className="card vol-perk-pad">
                  <p
                    className="vol-perk-title"
                    style={{ fontWeight: 600, color: "var(--neutral-900)" }}
                  >
                    {title}
                  </p>
                  <p
                    className="vol-perk-desc"
                    style={{ color: "var(--neutral-400)" }}
                  >
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Roles */}
          <div className="vol-roles-mb">
            <p className="section-label">Open Roles</p>
            <h2 className="vol-roles-header">Volunteer Roles Available</h2>
            <div className="vol-roles-grid">
              {roles.map(({ icon: Icon, title, desc, accent }) => (
                <div key={title} className="card card-hover vol-role-pad">
                  <div
                    className="vol-role-icon"
                    style={{
                      borderRadius: "var(--radius-md)",
                      background: accent.bg,
                      border: `1px solid ${accent.border}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon
                      className="vol-role-icon-svg"
                      style={{ color: accent.icon }}
                    />
                  </div>
                  <h4 className="vol-role-title">{title}</h4>
                  <p
                    className="vol-role-desc"
                    style={{ color: "var(--neutral-500)", lineHeight: 1.65 }}
                  >
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div
            id="volunteer-form"
            style={{
              background: "var(--neutral-50)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "var(--radius-2xl)",
              padding: "clamp(1rem,4vw,3rem)",
            }}
          >
            <div className="vol-form-gap grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)]">
              <div>
                <p className="section-label">Apply Now</p>
                <h2 style={{ marginBottom: "1rem" }}>Join Our Team</h2>
                <p
                  className="vol-form-intro"
                  style={{ color: "var(--neutral-500)", lineHeight: 1.75 }}
                >
                  Complete the form and we&apos;ll match you with the perfect
                  volunteer opportunity within 48 hours.
                </p>
                <div
                  className="vol-form-loc-pad"
                  style={{
                    background: "var(--neutral-950)",
                    borderRadius: "var(--radius-xl)",
                  }}
                >
                  <p
                    className="vol-form-loc-label"
                    style={{
                      fontWeight: 700,
                      letterSpacing: ".08em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,.3)",
                    }}
                  >
                    Our Location
                  </p>
                  <p
                    className="vol-form-loc-addr"
                    style={{ color: "rgba(255,255,255,.7)", lineHeight: 1.65 }}
                  >
                    40B Ayilara Street,
                    <br />
                    Surulere, Lagos, Nigeria
                  </p>
                  <p
                    className="vol-form-loc-phone-label"
                    style={{
                      fontWeight: 700,
                      letterSpacing: ".08em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,.3)",
                    }}
                  >
                    Phone
                  </p>
                  <p
                    className="vol-form-loc-phone"
                    style={{ color: "rgba(255,255,255,.7)" }}
                  >
                    08063811840
                  </p>
                </div>
              </div>
              <div className="card bg-transparent! md:bg-white! border-none! md:border! shadow-none! md:shadow! p-0! md:p-8!">
                <VolunteerForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* === RESPONSIVE SCALE > 1280px === */

        /* Why volunteer */
        .vol-why-gap { gap: 5rem; align-items: center; margin-bottom: 5rem; }
        .vol-why-text { gap: 1rem; }
        .vol-why-p { font-size: .9375rem; }
        .vol-perks-grid { gap: .875rem; }
        .vol-perk-pad { padding: 1.25rem; }
        .vol-perk-title { font-size: .875rem; margin-bottom: .2rem; }
        .vol-perk-desc { font-size: .8rem; }

        /* Roles */
        .vol-roles-mb { margin-bottom: 5rem; }
        .vol-roles-header { margin-bottom: 2rem; }
        .vol-roles-grid {display: grid; grid-template-columns: repeat(auto-fill,minmax(260px,1fr)); gap: 1rem;}
        .vol-role-pad { padding: 1.625rem; }
        .vol-role-icon { width: 2.5rem; height: 2.5rem; margin-bottom: 1.125rem; }
        .vol-role-icon-svg { width: 1.125rem; height: 1.125rem; }
        .vol-role-title { margin-bottom: .5rem; }
        .vol-role-desc { font-size: .875rem; }

        /* Form section */
        .vol-form-gap { gap: 4rem; align-items: start; }
        .vol-form-intro { font-size: .9375rem; margin-bottom: 2rem; }
        .vol-form-loc-pad { padding: 1.5rem; }
        .vol-form-loc-label { font-size: .74rem; margin-bottom: .875rem; }
        .vol-form-loc-addr { font-size: .875rem; }
        .vol-form-loc-phone-label { font-size: .74rem; margin-top: 1rem; margin-bottom: .375rem; }
        .vol-form-loc-phone { font-size: .875rem; }

        @media (min-width: 1440px) {
          .vol-why-gap { gap: 5.5rem; margin-bottom: 5.5rem; }
          .vol-why-text { gap: 1.075rem; }
          .vol-why-p { font-size: .975rem; }
          .vol-perks-grid { gap: .925rem; }
          .vol-perk-pad { padding: 1.325rem; }
          .vol-perk-title { font-size: .9rem; margin-bottom: .225rem; }
          .vol-perk-desc { font-size: .825rem; }

          .vol-roles-mb { margin-bottom: 5.5rem; }
          .vol-roles-header { margin-bottom: 2.125rem; }
          .vol-roles-grid {grid-template-columns: repeat(4, 1fr);}
          .vol-role-pad { padding: 1.75rem; }
          .vol-role-icon { width: 2.625rem; height: 2.625rem; margin-bottom: 1.2rem; }
          .vol-role-icon-svg { width: 1.175rem; height: 1.175rem; }
          .vol-role-desc { font-size: .9rem; }

          .vol-form-gap { gap: 4.25rem; }
          .vol-form-intro { font-size: .975rem; margin-bottom: 2.125rem; }
          .vol-form-loc-pad { padding: 1.625rem; }
          .vol-form-loc-label { font-size: .76rem; margin-bottom: .925rem; }
          .vol-form-loc-addr { font-size: .9rem; }
          .vol-form-loc-phone-label { font-size: .76rem; margin-top: 1.075rem; margin-bottom: .4rem; }
          .vol-form-loc-phone { font-size: .9rem; }
        }

        @media (min-width: 1536px) {
          .vol-why-gap { gap: 6.5rem; margin-bottom: 6.5rem; }
          .vol-why-text { gap: 1.25rem; }
          .vol-why-p { font-size: 1.075rem; }
          .vol-perks-grid { gap: 1.05rem; }
          .vol-perk-pad { padding: 1.5rem; }
          .vol-perk-title { font-size: 1rem; margin-bottom: .275rem; }
          .vol-perk-desc { font-size: .925rem; }

          .vol-roles-mb { margin-bottom: 6.5rem; }
          .vol-roles-header { margin-bottom: 2.375rem; }
          .vol-role-pad { padding: 1.975rem; }
          .vol-role-icon { width: 2.875rem; height: 2.875rem; margin-bottom: 1.375rem; }
          .vol-role-icon-svg { width: 1.3rem; height: 1.3rem; }
          .vol-role-desc { font-size: 1rem; }

          .vol-form-gap { gap: 4.75rem; }
          .vol-form-intro { font-size: 1.075rem; margin-bottom: 2.375rem; }
          .vol-form-loc-pad { padding: 1.875rem; }
          .vol-form-loc-label { font-size: .84rem; margin-bottom: 1.05rem; }
          .vol-form-loc-addr { font-size: 1rem; }
          .vol-form-loc-phone-label { font-size: .84rem; margin-top: 1.2rem; margin-bottom: .475rem; }
          .vol-form-loc-phone { font-size: 1rem; }
        }

        @media (min-width: 1680px) {
          .vol-why-gap { gap: 7.5rem; margin-bottom: 7.5rem; }
          .vol-why-text { gap: 1.4rem; }
          .vol-why-p { font-size: 1.175rem; }
          .vol-perks-grid { gap: 1.175rem; }
          .vol-perk-pad { padding: 1.675rem; }
          .vol-perk-title { font-size: 1.1rem; margin-bottom: .3rem; }
          .vol-perk-desc { font-size: 1.025rem; }

          .vol-roles-mb { margin-bottom: 7.5rem; }
          .vol-roles-header { margin-bottom: 2.625rem; }
          .vol-role-pad { padding: 2.175rem; }
          .vol-role-icon { width: 3.125rem; height: 3.125rem; margin-bottom: 1.5rem; }
          .vol-role-icon-svg { width: 1.425rem; height: 1.425rem; }
          .vol-role-desc { font-size: 1.1rem; }

          .vol-form-gap { gap: 5.25rem; }
          .vol-form-intro { font-size: 1.175rem; margin-bottom: 2.625rem; }
          .vol-form-loc-pad { padding: 2.125rem; }
          .vol-form-loc-label { font-size: .92rem; margin-bottom: 1.175rem; }
          .vol-form-loc-addr { font-size: 1.1rem; }
          .vol-form-loc-phone-label { font-size: .92rem; margin-top: 1.375rem; margin-bottom: .525rem; }
          .vol-form-loc-phone { font-size: 1.1rem; }
        }

        @media (min-width: 1920px) {
          .vol-why-gap { gap: 9rem; margin-bottom: 9rem; }
          .vol-why-text { gap: 1.625rem; }
          .vol-why-p { font-size: 1.35rem; }
          .vol-perks-grid { gap: 1.375rem; }
          .vol-perk-pad { padding: 1.975rem; }
          .vol-perk-title { font-size: 1.275rem; margin-bottom: .375rem; }
          .vol-perk-desc { font-size: 1.175rem; }

          .vol-roles-mb { margin-bottom: 9rem; }
          .vol-roles-header { margin-bottom: 3rem; }
          .vol-role-pad { padding: 2.625rem; }
          .vol-role-icon { width: 3.625rem; height: 3.625rem; margin-bottom: 1.75rem; }
          .vol-role-icon-svg { width: 1.65rem; height: 1.65rem; }
          .vol-role-desc { font-size: 1.275rem; }

          .vol-form-gap { gap: 6.25rem; }
          .vol-form-intro { font-size: 1.35rem; margin-bottom: 3rem; }
          .vol-form-loc-pad { padding: 2.5rem; }
          .vol-form-loc-label { font-size: 1.075rem; margin-bottom: 1.375rem; }
          .vol-form-loc-addr { font-size: 1.275rem; }
          .vol-form-loc-phone-label { font-size: 1.075rem; margin-top: 1.625rem; margin-bottom: .625rem; }
          .vol-form-loc-phone { font-size: 1.275rem; }
        }
      `}</style>
    </>
  );
}
