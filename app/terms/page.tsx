import type { Metadata } from 'next';
import PageHeader from '@/components/shared/PageHeader';
import Link from 'next/link';
export const metadata: Metadata = { title: 'Terms of Use' };

const sections = [
  { title: 'Acceptance of Terms', body: 'By accessing or using the CRA Foundation website, you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, please do not use our website.' },
  { title: 'Use of Website', body: 'This website is provided for informational and donation purposes. You may not use it for any unlawful purpose, to post harmful content, or to interfere with its proper functioning.' },
  { title: 'Donations', body: 'All donations are final and non-refundable unless there was an error in processing. Donations are used exclusively for CRA Foundation programs and activities.' },
  { title: 'Intellectual Property', body: 'All content including text, images, logos, and designs is the property of CRA Foundation and may not be reproduced without written permission.' },
  { title: 'Disclaimer of Warranties', body: 'This website is provided "as is" without warranties of any kind. We make no guarantees regarding uptime, accuracy of information, or fitness for a particular purpose.' },
  { title: 'Limitation of Liability', body: 'CRA Foundation shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website.' },
  { title: 'Changes to Terms', body: 'We reserve the right to modify these Terms at any time. Continued use of the website after changes constitutes acceptance of the updated terms.' },
];

export default function TermsPage() {
  return (
    <>
      <PageHeader badge="Legal" title="Terms of" highlight="Use" description="Please read these terms carefully before using our website and services." />
      <section className="section-padding" style={{ background: 'var(--white)' }}>
        <div className="container-max" style={{ maxWidth: '44rem' }}>
          <div style={{ padding: '1rem 1.25rem', background: 'var(--neutral-50)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', fontSize: '0.845rem', color: 'var(--neutral-500)', marginBottom: '3rem' }}>
            Last updated: January 2024.
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {sections.map((s, i) => (
              <div key={i}>
                <h3 style={{ marginBottom: '0.625rem' }}>{i + 1}. {s.title}</h3>
                <p style={{ fontSize: '0.9375rem', lineHeight: 1.8 }}>{s.body}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border-subtle)', textAlign: 'center' }}>
            <Link href="/contact" className="btn btn-primary">Contact Us with Questions</Link>
          </div>
        </div>
      </section>
    </>
  );
}
