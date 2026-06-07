import type { Metadata } from 'next';
import PageHeader from '@/components/shared/PageHeader';
import VolunteerForm from '@/components/forms/VolunteerForm';
import { RiBook2Line, RiUserHeartLine, RiCalendarEventLine, RiCameraLine, RiComputerLine, RiCarLine } from 'react-icons/ri';

export const metadata: Metadata = { title: 'Volunteer' };

const roles = [
  { icon: RiBook2Line, title: 'Tutor / Teacher', desc: 'Help children with after-school lessons in any subject.', accent: { bg: 'var(--accent-blue-50)', icon: 'var(--accent-blue-600)', border: '#DBEAFE' } },
  { icon: RiUserHeartLine, title: 'Mentor', desc: 'Guide and inspire children through one-on-one mentoring.', accent: { bg: 'var(--brand-50)', icon: 'var(--brand-600)', border: 'var(--brand-100)' } },
  { icon: RiCalendarEventLine, title: 'Event Organizer', desc: 'Help plan and execute fun days, excursions, and festivals.', accent: { bg: 'var(--accent-violet-50)', icon: 'var(--accent-violet-600)', border: '#EDE9FE' } },
  { icon: RiCameraLine, title: 'Media / Content', desc: 'Document our work through photography, video, or social media.', accent: { bg: 'var(--accent-amber-50)', icon: 'var(--accent-amber)', border: '#FEF3C7' } },
  { icon: RiComputerLine, title: 'IT Support', desc: 'Maintain learning center computers and internet resources.', accent: { bg: 'var(--accent-teal-50)', icon: 'var(--accent-teal-600)', border: '#CCFBF1' } },
  { icon: RiCarLine, title: 'Transport / Driver', desc: 'Provide transportation for children on excursions and events.', accent: { bg: 'var(--accent-green-50)', icon: 'var(--accent-green-600)', border: '#D1FAE5' } },
];

const perks = [
  ['Flexible Hours', 'Work around your schedule'],
  ['Direct Impact', 'Engage one-on-one with children'],
  ['Certificate', 'Recognised volunteer certificate'],
  ['Community', 'Join a passionate team'],
  ['Skills Dev', 'Grow personally and professionally'],
  ['Surulere', 'Based in Lagos Island and Mainland'],
];

export default function VolunteerPage() {
  return (
    <>
      <PageHeader badge="Get Involved" title="Volunteer" highlight="With Us"
        description="Offer your time, skills, and passion to make a direct difference in the lives of underprivileged children across Lagos." />

      {/* Why volunteer */}
      <section className="section-padding" style={{ background: 'var(--white)' }}>
        <div className="container-max">
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.1fr) minmax(0,1fr)', gap: '5rem', alignItems: 'center', marginBottom: '5rem' }}>
            <div>
              <p className="section-label">Why Volunteer</p>
              <h2 style={{ marginBottom: '1.25rem' }}>Your Time Changes Everything</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {['Volunteering with CRA Foundation is one of the most meaningful things you can do. You will work directly with children who are hungry for knowledge, attention, and positive role models.',
                  'Whether you have one hour a week or a full Saturday, your presence makes a profound difference. Children in our programs go from struggling to thriving — and volunteers are a core reason why.',
                  'You will gain experience, build meaningful relationships, and leave with a deep sense of purpose and community.'].map((t, i) => (
                  <p key={i} style={{ fontSize: '0.9375rem', color: 'var(--neutral-500)', lineHeight: 1.75 }}>{t}</p>
                ))}
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.875rem' }}>
              {perks.map(([title, desc]) => (
                <div key={title} className="card" style={{ padding: '1.25rem' }}>
                  <p style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--neutral-900)', marginBottom: '0.2rem' }}>{title}</p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--neutral-400)' }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Roles */}
          <div style={{ marginBottom: '5rem' }}>
            <p className="section-label">Open Roles</p>
            <h2 style={{ marginBottom: '2rem' }}>Volunteer Roles Available</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))', gap: '1rem' }}>
              {roles.map(({ icon: Icon, title, desc, accent }) => (
                <div key={title} className="card card-hover" style={{ padding: '1.625rem' }}>
                  <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: 'var(--radius-md)', background: accent.bg, border: `1px solid ${accent.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.125rem' }}>
                    <Icon style={{ width: '1.125rem', height: '1.125rem', color: accent.icon }} />
                  </div>
                  <h4 style={{ marginBottom: '0.5rem' }}>{title}</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--neutral-500)', lineHeight: 1.65 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div id="volunteer-form" style={{ background: 'var(--neutral-50)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-2xl)', padding: 'clamp(2rem,4vw,3rem)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.5fr)', gap: '4rem', alignItems: 'start' }}>
              <div>
                <p className="section-label">Apply Now</p>
                <h2 style={{ marginBottom: '1rem' }}>Join Our Team</h2>
                <p style={{ fontSize: '0.9375rem', color: 'var(--neutral-500)', lineHeight: 1.75, marginBottom: '2rem' }}>
                  Complete the form and we'll match you with the perfect volunteer opportunity within 48 hours.
                </p>
                <div style={{ background: 'var(--neutral-950)', borderRadius: 'var(--radius-xl)', padding: '1.5rem' }}>
                  <p style={{ fontSize: '0.74rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '0.875rem' }}>Our Location</p>
                  <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.65 }}>40B Ayilara Street,<br />Surulere, Lagos, Nigeria</p>
                  <p style={{ fontSize: '0.74rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginTop: '1rem', marginBottom: '0.375rem' }}>Phone</p>
                  <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)' }}>08063811840</p>
                </div>
              </div>
              <div className="card" style={{ padding: '2rem' }}>
                <VolunteerForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
