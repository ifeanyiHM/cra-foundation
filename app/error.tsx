'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import { RiErrorWarningLine } from 'react-icons/ri';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error(error); }, [error]);
  return (
    <div style={{ minHeight: '100svh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--neutral-50)', padding: '2rem', paddingTop: '5rem' }}>
      <div style={{ textAlign: 'center', maxWidth: '28rem' }}>
        <div style={{ width: '3.5rem', height: '3.5rem', borderRadius: 'var(--radius-xl)', background: 'var(--brand-50)', border: '1px solid var(--brand-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
          <RiErrorWarningLine style={{ width: '1.5rem', height: '1.5rem', color: 'var(--brand-600)' }} />
        </div>
        <h2 style={{ marginBottom: '0.75rem' }}>Something went wrong</h2>
        <p style={{ color: 'var(--neutral-500)', fontSize: '0.9375rem', marginBottom: '2rem', lineHeight: 1.7 }}>An unexpected error occurred. Please try again or contact us if the issue persists.</p>
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={reset} className="btn btn-primary">Try Again</button>
          <Link href="/" className="btn btn-secondary">Go Home</Link>
        </div>
      </div>
    </div>
  );
}
