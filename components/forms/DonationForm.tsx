'use client';
import { useState } from 'react';
import { DonationTier, DonationFrequency } from '@/types';
import { RiCheckLine, RiLoader4Line } from 'react-icons/ri';

interface Props { tiers: DonationTier[] }

export default function DonationForm({ tiers }: Props) {
  const [frequency, setFrequency] = useState<DonationFrequency>('once');
  const [selectedTier, setSelectedTier] = useState<number | null>(null);
  const [custom, setCustom] = useState('');
  const [step, setStep] = useState<1 | 2>(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', message: '', anonymous: false, coverFees: false });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const amount = selectedTier ?? (custom ? parseFloat(custom) : null);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.firstName.trim()) e.firstName = 'First name is required';
    if (!form.lastName.trim()) e.lastName = 'Last name is required';
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Valid email required';
    setErrors(e);
    return !Object.keys(e).length;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    setSubmitted(true);
  };

  if (submitted) return (
    <div style={{ textAlign: 'center', padding: '3rem 2rem' }}>
      <div style={{ width: '3.5rem', height: '3.5rem', borderRadius: '50%', background: 'var(--accent-green-50)', border: '1px solid #D1FAE5', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
        <RiCheckLine style={{ width: '1.5rem', height: '1.5rem', color: 'var(--accent-green-600)' }} />
      </div>
      <h3 style={{ marginBottom: '0.5rem' }}>Thank you, {form.firstName}!</h3>
      <p style={{ color: 'var(--neutral-500)', fontSize: '0.9375rem' }}>
        Your donation of <strong style={{ color: 'var(--neutral-900)' }}>₦{amount?.toLocaleString()}</strong> has been received. A receipt will be sent to {form.email}.
      </p>
    </div>
  );

  return (
    <div>
      {/* Progress indicator */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
        {[{ n: 1, label: 'Amount' }, { n: 2, label: 'Details' }].map(({ n, label }, i) => (
          <div key={n} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '1.625rem', height: '1.625rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700, background: step >= n ? 'var(--brand-600)' : 'var(--neutral-100)', color: step >= n ? '#fff' : 'var(--neutral-400)', transition: 'all 0.2s' }}>{n}</div>
              <span style={{ fontSize: '0.845rem', fontWeight: 500, color: step >= n ? 'var(--neutral-900)' : 'var(--neutral-400)' }}>{label}</span>
            </div>
            {i < 1 && <div style={{ flex: 1, height: '1px', background: step > n ? 'var(--brand-600)' : 'var(--border-subtle)', width: '3rem', transition: 'background 0.2s' }} />}
          </div>
        ))}
      </div>

      {step === 1 && (
        <div>
          {/* Frequency */}
          <div style={{ display: 'flex', background: 'var(--neutral-100)', padding: '0.25rem', borderRadius: 'var(--radius-full)', width: 'fit-content', marginBottom: '1.5rem' }}>
            {(['once', 'monthly', 'annually'] as DonationFrequency[]).map(f => (
              <button key={f} onClick={() => setFrequency(f)}
                style={{ padding: '0.45rem 1rem', borderRadius: 'var(--radius-full)', fontSize: '0.845rem', fontWeight: 600, border: 'none', cursor: 'pointer', transition: 'all 0.15s ease', background: frequency === f ? 'var(--white)' : 'transparent', color: frequency === f ? 'var(--neutral-900)' : 'var(--neutral-500)', boxShadow: frequency === f ? 'var(--shadow-sm)' : 'none' }}>
                {f === 'once' ? 'One-time' : f === 'monthly' ? 'Monthly' : 'Annual'}
              </button>
            ))}
          </div>

          {/* Tier grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '0.625rem', marginBottom: '1rem' }}>
            {tiers.map(tier => (
              <button key={tier.amount} onClick={() => { setSelectedTier(tier.amount); setCustom(''); }}
                style={{ textAlign: 'left', padding: '1rem', borderRadius: 'var(--radius-lg)', border: `1.5px solid ${selectedTier === tier.amount ? 'var(--brand-600)' : 'var(--border-default)'}`, background: selectedTier === tier.amount ? 'var(--brand-50)' : 'var(--white)', cursor: 'pointer', transition: 'all 0.15s ease' }}>
                <div style={{ fontWeight: 700, fontSize: '1rem', color: selectedTier === tier.amount ? 'var(--brand-600)' : 'var(--neutral-900)', marginBottom: '0.2rem' }}>{tier.label}</div>
                <div style={{ fontSize: '0.74rem', fontWeight: 600, color: selectedTier === tier.amount ? 'var(--brand-600)' : 'var(--neutral-500)', marginBottom: '0.375rem' }}>{tier.description}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--neutral-400)', lineHeight: 1.5 }} className="line-clamp-2">{tier.impact}</div>
              </button>
            ))}
          </div>

          {/* Custom */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label className="form-label">Or enter a custom amount (₦)</label>
            <input type="number" className="form-input" placeholder="e.g. 15000"
              value={custom}
              onChange={e => { setCustom(e.target.value); setSelectedTier(null); }}
            />
          </div>

          <button onClick={() => setStep(2)} disabled={!amount} className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center', opacity: !amount ? 0.45 : 1 }}>
            Continue — {amount ? `₦${amount.toLocaleString()}` : 'Select an amount'}
          </button>
        </div>
      )}

      {step === 2 && (
        <form onSubmit={handleSubmit}>
          <div style={{ padding: '0.875rem 1rem', background: 'var(--neutral-50)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
            <p style={{ fontSize: '0.875rem', color: 'var(--neutral-600)' }}>
              Donating <strong style={{ color: 'var(--neutral-900)' }}>₦{amount?.toLocaleString()}</strong> · <span style={{ color: 'var(--neutral-400)', textTransform: 'capitalize' }}>{frequency}</span>
            </p>
            <button type="button" onClick={() => setStep(1)} style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--brand-600)', background: 'none', border: 'none', cursor: 'pointer' }}>Change</button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '0.75rem' }}>
            {[['firstName', 'First Name *', 'text', 'First name'], ['lastName', 'Last Name *', 'text', 'Last name']].map(([k, lbl, t, ph]) => (
              <div key={k}>
                <label className="form-label">{lbl}</label>
                <input type={t} className="form-input" placeholder={ph}
                  value={(form as unknown as Record<string, string>)[k]}
                  onChange={e => setForm(f => ({ ...f, [k]: e.target.value }))} />
                {errors[k] && <p className="form-error">{errors[k]}</p>}
              </div>
            ))}
          </div>
          <div style={{ marginBottom: '0.75rem' }}>
            <label className="form-label">Email Address *</label>
            <input type="email" className="form-input" placeholder="you@example.com" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
            {errors.email && <p className="form-error">{errors.email}</p>}
          </div>
          <div style={{ marginBottom: '0.75rem' }}>
            <label className="form-label">Phone (optional)</label>
            <input type="tel" className="form-input" placeholder="08012345678" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} />
          </div>
          <div style={{ marginBottom: '1.25rem' }}>
            <label className="form-label">Message (optional)</label>
            <textarea className="form-textarea" rows={3} placeholder="A note for the team..." value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', marginBottom: '1.5rem' }}>
            {[{ k: 'anonymous', l: 'Make this donation anonymous' }, { k: 'coverFees', l: 'Cover processing fees (adds 2%)' }].map(({ k, l }) => (
              <label key={k} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', cursor: 'pointer', fontSize: '0.875rem', color: 'var(--neutral-700)' }}>
                <input type="checkbox" checked={(form as unknown as Record<string, boolean>)[k]}
                  onChange={e => setForm(f => ({ ...f, [k]: e.target.checked }))}
                  style={{ width: '1rem', height: '1rem', accentColor: 'var(--brand-600)', cursor: 'pointer' }} />
                {l}
              </label>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button type="button" onClick={() => setStep(1)} className="btn btn-secondary" style={{ flex: 1 }}>← Back</button>
            <button type="submit" className="btn btn-primary" style={{ flex: 2, justifyContent: 'center' }} disabled={loading}>
              {loading ? <><RiLoader4Line style={{ width: '1rem', height: '1rem', animation: 'spin 1s linear infinite' }} /> Processing…</> : 'Complete Donation'}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
