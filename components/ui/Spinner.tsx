export default function Spinner({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const dim = size === 'sm' ? '1rem' : size === 'lg' ? '2rem' : '1.5rem';
  return (
    <svg style={{ width: dim, height: dim, animation: 'spin 1s linear infinite', color: 'var(--brand-600)' }} fill="none" viewBox="0 0 24 24">
      <circle style={{ opacity: .25 }} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
      <path style={{ opacity: .75 }} fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
    </svg>
  );
}
