import Link from 'next/link';
import { sponsorChildren } from '@/data';
import { RiHeartLine, RiArrowRightLine, RiShieldCheckLine } from 'react-icons/ri';

export default function SponsorshipSection() {
  const available = sponsorChildren.filter(c => !c.sponsored);

  return (
    <section className="section-padding" style={{ background: 'var(--neutral-50)', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container-max">
        {/* Header */}
        <div style={{ maxWidth: '40rem', marginBottom: '3rem' }}>
          <p className="section-label">Child Sponsorship</p>
          <h2 style={{ margin: '0 0 0.875rem' }}>Give a Child Their Future</h2>
          <p style={{ fontSize: '0.9375rem', color: 'var(--neutral-500)', lineHeight: 1.7 }}>
            Sponsor a child directly and provide complete support — school fees, meals, health care, and guidance — for a full year.
          </p>
        </div>

        {/* Children grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
          {available.map((child) => (
            <div key={child.id} className="card card-hover" style={{ overflow: 'hidden' }}>
              {/* Avatar */}
              <div style={{ height: '10rem', background: 'linear-gradient(135deg, var(--neutral-900) 0%, var(--neutral-800) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                <div style={{ width: '4rem', height: '4rem', borderRadius: '50%', background: 'rgba(255,255,255,0.08)', border: '2px solid rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 800, color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-sans)', letterSpacing: '-0.02em' }}>
                  {child.name.charAt(0)}
                </div>
                <div style={{ position: 'absolute', top: '0.75rem', right: '0.75rem' }}>
                  <span className="badge badge-red">Needs Sponsor</span>
                </div>
              </div>
              {/* Info */}
              <div style={{ padding: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <h4 style={{ fontSize: '0.9375rem' }}>{child.name}</h4>
                  <span style={{ fontSize: '0.78rem', color: 'var(--neutral-400)', fontWeight: 500 }}>Age {child.age}</span>
                </div>
                <p style={{ fontSize: '0.78rem', color: 'var(--brand-600)', fontWeight: 500, marginBottom: '0.625rem' }}>{child.school}</p>
                <p style={{ fontSize: '0.845rem', color: 'var(--neutral-500)', lineHeight: 1.65, marginBottom: '1.25rem' }} className="line-clamp-3">{child.story}</p>
                <Link href={`/sponsor?child=${child.id}`} className="btn btn-primary btn-sm" style={{ width: '100%', justifyContent: 'center' }}>
                  <RiHeartLine style={{ width: '0.875rem', height: '0.875rem' }} />
                  Sponsor {child.name.split(' ')[0]}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom strip */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.25rem', padding: '1.5rem 2rem', background: 'var(--white)', borderRadius: 'var(--radius-xl)', border: '1px solid var(--border-subtle)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: 'var(--radius-md)', background: 'var(--accent-green-50)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <RiShieldCheckLine style={{ width: '1.125rem', height: '1.125rem', color: 'var(--accent-green-600)' }} />
            </div>
            <div>
              <p style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--neutral-900)', marginBottom: '0.1rem' }}>Transparent & Accountable</p>
              <p style={{ fontSize: '0.8rem', color: 'var(--neutral-500)' }}>You receive updates on your sponsored child every term</p>
            </div>
          </div>
          <Link href="/sponsor" className="btn btn-secondary">
            View All Children <RiArrowRightLine style={{ width: '0.9rem', height: '0.9rem' }} />
          </Link>
        </div>
      </div>
    </section>
  );
}
