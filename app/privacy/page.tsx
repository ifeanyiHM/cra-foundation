import type { Metadata } from 'next';
import PageHeader from '@/components/shared/PageHeader';
import Link from 'next/link';
export const metadata: Metadata = { title: 'Privacy Policy' };

const sections = [
  { title: 'Information We Collect', body: 'We collect personal information you provide when donating, volunteering, or contacting us — including your name, email, phone number, and payment details. We also collect non-personal data such as browser type and usage statistics to improve our website.' },
  { title: 'How We Use Your Information', body: 'We use your information to process donations and sponsorships, send receipts and updates, respond to enquiries, match you with volunteer opportunities, and improve our services. We do not sell or share your personal information with third parties for marketing purposes.' },
  { title: 'Data Security', body: 'We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. All payment transactions are secured using SSL encryption.' },
  { title: 'Cookies', body: 'Our website uses cookies to enhance your browsing experience and analyse traffic. You can control cookie settings through your browser. Disabling cookies may affect some website functionality.' },
  { title: 'Third-Party Links', body: 'Our website may contain links to third-party websites. We are not responsible for their privacy practices and encourage you to read their policies.' },
  { title: 'Your Rights', body: 'You have the right to access, correct, or delete your personal data. You may also opt out of marketing communications at any time. To exercise these rights, contact us at nurtureadream@yahoo.com.' },
  { title: 'Contact', body: 'If you have questions about this Privacy Policy, contact us at: 40B Ayilara Street, Surulere, Lagos | nurtureadream@yahoo.com | 08063811840.' },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHeader badge="Legal" title="Privacy" highlight="Policy" description="How we collect, use, and protect your personal information." />
      <section className="section-padding" style={{ background: 'var(--white)' }}>
        <div className="container-max" style={{ maxWidth: '44rem' }}>
          <div style={{ padding: '1rem 1.25rem', background: 'var(--neutral-50)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', fontSize: '0.845rem', color: 'var(--neutral-500)', marginBottom: '3rem' }}>
            Last updated: January 2024. This Privacy Policy applies to the CRA Foundation website and all related services.
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
