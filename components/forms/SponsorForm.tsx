'use client';
import { useState } from 'react';
import { RiCheckLine, RiLoader4Line } from 'react-icons/ri';

export default function SponsorForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ firstName:'', lastName:'', email:'', phone:'', sponsorshipType:'child', amount:'25000', frequency:'monthly', message:'' });
  const [errors, setErrors] = useState<Record<string,string>>({});

  const validate = () => {
    const e: Record<string,string> = {};
    if (!form.firstName.trim()) e.firstName = 'Required';
    if (!form.lastName.trim()) e.lastName = 'Required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required';
    if (!form.phone.trim()) e.phone = 'Required';
    setErrors(e); return !Object.keys(e).length;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    await new Promise(r => setTimeout(r, 1000));
    setSubmitted(true);
  };

  if (submitted) return (
    <div style={{ textAlign:'center', padding:'3rem 1rem' }}>
      <div style={{ width:'3.5rem', height:'3.5rem', borderRadius:'50%', background:'var(--accent-green-50)', border:'1px solid #D1FAE5', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 1.25rem' }}>
        <RiCheckLine style={{ width:'1.5rem', height:'1.5rem', color:'var(--accent-green-600)' }} />
      </div>
      <h3 style={{ marginBottom:'0.5rem' }}>Application Received!</h3>
      <p style={{ color:'var(--neutral-500)' }}>Thank you, {form.firstName}. We'll contact you at {form.email} within 24 hours to confirm your sponsorship.</p>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:'0.875rem' }}>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'0.75rem' }}>
        {([['firstName','First Name *','text','First name'],['lastName','Last Name *','text','Last name']] as [string,string,string,string][]).map(([k,l,t,p]) => (
          <div key={k}>
            <label className="form-label">{l}</label>
            <input type={t} className="form-input" placeholder={p} value={(form as Record<string,string>)[k]} onChange={e => setForm(f => ({...f,[k]:e.target.value}))} />
            {errors[k] && <p className="form-error">{errors[k]}</p>}
          </div>
        ))}
      </div>
      <div>
        <label className="form-label">Email Address *</label>
        <input type="email" className="form-input" placeholder="you@example.com" value={form.email} onChange={e => setForm(f => ({...f,email:e.target.value}))} />
        {errors.email && <p className="form-error">{errors.email}</p>}
      </div>
      <div>
        <label className="form-label">Phone Number *</label>
        <input type="tel" className="form-input" placeholder="0801 234 5678" value={form.phone} onChange={e => setForm(f => ({...f,phone:e.target.value}))} />
        {errors.phone && <p className="form-error">{errors.phone}</p>}
      </div>
      <div>
        <label className="form-label">Sponsorship Type</label>
        <select className="form-select" value={form.sponsorshipType} onChange={e => setForm(f => ({...f,sponsorshipType:e.target.value}))}>
          <option value="child">Sponsor a Specific Child</option>
          <option value="meal">Meals Program</option>
          <option value="education">Education Scholarship</option>
          <option value="health">Health & Wellness</option>
          <option value="general">General Support</option>
        </select>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'0.75rem' }}>
        <div>
          <label className="form-label">Monthly Amount (₦)</label>
          <select className="form-select" value={form.amount} onChange={e => setForm(f => ({...f,amount:e.target.value}))}>
            <option value="10000">₦10,000</option>
            <option value="25000">₦25,000</option>
            <option value="50000">₦50,000</option>
            <option value="100000">₦100,000</option>
          </select>
        </div>
        <div>
          <label className="form-label">Frequency</label>
          <select className="form-select" value={form.frequency} onChange={e => setForm(f => ({...f,frequency:e.target.value}))}>
            <option value="monthly">Monthly</option>
            <option value="once">One Time</option>
            <option value="annually">Annually</option>
          </select>
        </div>
      </div>
      <div>
        <label className="form-label">Message (optional)</label>
        <textarea className="form-textarea" rows={3} placeholder="Any notes or preferences…" value={form.message} onChange={e => setForm(f => ({...f,message:e.target.value}))} style={{ resize:'vertical' }} />
      </div>
      <button type="submit" className="btn btn-primary btn-lg" style={{ width:'100%', justifyContent:'center' }} disabled={loading}>
        {loading ? <><RiLoader4Line style={{ width:'1rem', height:'1rem', animation:'spin 1s linear infinite' }} /> Submitting…</> : 'Submit Sponsorship Application'}
      </button>
    </form>
  );
}
