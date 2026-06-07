export default function Loading() {
  return (
    <div style={{ minHeight: '100svh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--neutral-50)' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ width: '3rem', height: '3rem', borderRadius: 'var(--radius-lg)', background: 'var(--brand-600)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', opacity: 0.9 }}>
          <span style={{ color: '#fff', fontWeight: 800, fontSize: '0.75rem', letterSpacing: '-0.01em' }}>CRA</span>
        </div>
        <div style={{ display: 'flex', gap: '0.3rem', justifyContent: 'center', marginBottom: '0.75rem' }}>
          {[0, 1, 2].map(i => (
            <div key={i} style={{ width: '0.4rem', height: '0.4rem', borderRadius: '50%', background: 'var(--brand-600)', opacity: 0.7, animation: `bounce 1s ${i * 0.15}s infinite` }} />
          ))}
        </div>
        <p style={{ fontSize: '0.845rem', color: 'var(--neutral-400)', fontWeight: 500 }}>Loading…</p>
      </div>
      <style>{`@keyframes bounce { 0%,80%,100%{transform:translateY(0)} 40%{transform:translateY(-6px)} }`}</style>
    </div>
  );
}
