import type { Metadata } from 'next';
import PageHeader from '@/components/shared/PageHeader';
import { sponsorChildren } from '@/data';
import SponsorForm from '@/components/forms/SponsorForm';
import { RiHeartLine, RiCheckLine, RiArrowRightLine } from 'react-icons/ri';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Sponsor a Child' };

const steps = [
  { n: '1', title: 'Choose a Child', desc: 'Browse profiles of children awaiting sponsorship.' },
  { n: '2', title: 'Select Amount', desc: 'Choose a level that works for your budget.' },
  { n: '3', title: 'Submit Application', desc: 'Complete the secure sponsorship form.' },
  { n: '4', title: 'Track Progress', desc: 'Receive termly updates on your sponsored child.' },
];

export default function SponsorPage() {
  return (
    <>
      <PageHeader badge="Child Sponsorship" title="Sponsor a" highlight="Child Today"
        description="Choose a child to sponsor and provide complete support for their education, meals, health, and future — for a full academic year." />

      {/* How it works */}
      <section style={{ background: 'var(--neutral-50)', borderBottom: '1px solid var(--border-subtle)', padding: '3.5rem 0' }}>
        <div className="container-max">
          <div style={{ marginBottom: '2rem' }}>
            <p className="section-label">How It Works</p>
            <h2>Simple Steps to Change a Life</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '1rem' }}>
            {steps.map(({ n, title, desc }) => (
              <div key={n} className="card" style={{ padding: '1.5rem' }}>
                <div style={{ width: '2rem', height: '2rem', borderRadius: 'var(--radius-md)', background: 'var(--neutral-950)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.78rem', fontWeight: 800, color: 'rgba(255,255,255,0.7)', marginBottom: '1rem' }}>{n}</div>
                <h4 style={{ fontSize: '0.9375rem', marginBottom: '0.375rem' }}>{title}</h4>
                <p style={{ fontSize: '0.845rem', color: 'var(--neutral-400)', lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Children grid */}
      <section className="section-padding" style={{ background: 'var(--white)' }}>
        <div className="container-max">
          <div style={{ marginBottom: '2rem' }}>
            <p className="section-label">Available Children</p>
            <h2>Children Awaiting Sponsorship</h2>
            <p style={{ color: 'var(--neutral-500)', fontSize: '0.9375rem', maxWidth: '38rem', marginTop: '0.75rem', lineHeight: 1.7 }}>
              Each child has a story, a dream, and a future waiting to be unlocked with your help.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))', gap: '1rem', marginBottom: '3.5rem' }}>
            {sponsorChildren.map(child => (
              <div key={child.id} className="card" style={{ overflow: 'hidden', opacity: child.sponsored ? 0.6 : 1 }}>
                {/* Avatar */}
                <div style={{ height: '10rem', background: 'var(--neutral-950)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                  <div style={{ width: '4rem', height: '4rem', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', border: '2px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.375rem', fontWeight: 800, color: 'rgba(255,255,255,0.5)', letterSpacing: '-0.02em' }}>
                    {child.name.charAt(0)}
                  </div>
                  <div style={{ position: 'absolute', top: '0.75rem', right: '0.75rem' }}>
                    <span style={{ padding: '0.2rem 0.6rem', borderRadius: '999px', fontSize: '0.72rem', fontWeight: 700,
                      background: child.sponsored ? 'var(--accent-green-50)' : 'var(--brand-50)',
                      color: child.sponsored ? 'var(--accent-green-600)' : 'var(--brand-600)' }}>
                      {child.sponsored ? 'Sponsored' : 'Available'}
                    </span>
                  </div>
                </div>
                <div style={{ padding: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.375rem' }}>
                    <h4 style={{ fontSize: '0.9375rem' }}>{child.name}</h4>
                    <span style={{ fontSize: '0.78rem', color: 'var(--neutral-400)', fontWeight: 500 }}>Age {child.age}</span>
                  </div>
                  <p style={{ fontSize: '0.78rem', color: 'var(--brand-600)', fontWeight: 500, marginBottom: '0.625rem' }}>{child.school}</p>
                  <p style={{ fontSize: '0.845rem', color: 'var(--neutral-500)', lineHeight: 1.65, marginBottom: '1.25rem' }} className="line-clamp-3">{child.story}</p>
                  {!child.sponsored ? (
                    <a href="#sponsor-form" className="btn btn-primary btn-sm" style={{ width: '100%', justifyContent: 'center' }}>
                      <RiHeartLine style={{ width: '0.875rem', height: '0.875rem' }} />
                      Sponsor {child.name.split(' ')[0]}
                    </a>
                  ) : (
                    <div style={{ padding: '0.625rem', background: 'var(--accent-green-50)', borderRadius: 'var(--radius-md)', textAlign: 'center', fontSize: '0.845rem', fontWeight: 600, color: 'var(--accent-green-600)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.375rem' }}>
                      <RiCheckLine style={{ width: '0.875rem', height: '0.875rem' }} /> Sponsored
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Sponsorship form */}
          <div id="sponsor-form" style={{ background: 'var(--neutral-50)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-2xl)', padding: 'clamp(2rem,4vw,3rem)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.5fr)', gap: '4rem', alignItems: 'start' }}>
              <div>
                <p className="section-label">Ready to Help?</p>
                <h2 style={{ marginBottom: '1rem' }}>Become a Sponsor</h2>
                <p style={{ fontSize: '0.9375rem', color: 'var(--neutral-500)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                  Your monthly sponsorship covers a child's school fees, meals, uniform, books, and health care. A small commitment creates a lifetime of impact.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                  {['₦10,000/month — Basic Support','₦25,000/month — Full Support','₦50,000/term — Scholarship'].map(opt => (
                    <div key={opt} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', fontSize: '0.875rem', color: 'var(--neutral-700)' }}>
                      <div style={{ width: '1.25rem', height: '1.25rem', borderRadius: '50%', background: 'var(--accent-green-50)', border: '1px solid #D1FAE5', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <RiCheckLine style={{ width: '0.7rem', height: '0.7rem', color: 'var(--accent-green-600)' }} />
                      </div>
                      {opt}
                    </div>
                  ))}
                </div>
              </div>
              <div className="card" style={{ padding: '2rem' }}>
                <SponsorForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
