import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ minHeight: '100svh', background: 'var(--neutral-950)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <div style={{ textAlign: 'center', maxWidth: '32rem' }}>
        <div style={{ fontSize: 'clamp(6rem,18vw,12rem)', fontWeight: 800, color: 'rgba(255,255,255,0.04)', lineHeight: 1, letterSpacing: '-0.05em', marginBottom: '-1rem', userSelect: 'none' }}>404</div>
        <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Page not found</h2>
        <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.9375rem', lineHeight: 1.75, marginBottom: '2.5rem' }}>
          The page you're looking for doesn't exist or has moved. There are children whose dreams still need nurturing — let's get you back on track.
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" className="btn btn-white btn-lg">← Back to Home</Link>
          <Link href="/donate" className="btn btn-outline-white btn-lg">Donate Now</Link>
        </div>
      </div>
    </div>
  );
}
