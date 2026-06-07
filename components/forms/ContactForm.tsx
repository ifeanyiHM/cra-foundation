'use client';
import { useState } from 'react';
import { RiCheckLine, RiLoader4Line } from 'react-icons/ri';

const subjects = ['General Enquiry','Donation / Financial Support','Volunteer Application','Sponsorship','Media & Press','Partnership / Corporate','Item Donation','Other'];

export default function ContactForm() {
  const [form, setForm] = useState({ firstName:'', lastName:'', email:'', phone:'', subject:'', message:'' });
  const [errors, setErrors] = useState<Record<string,string>>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: Record<string,string> = {};
    if (!form.firstName.trim()) e.firstName = 'Required';
    if (!form.lastName.trim()) e.lastName = 'Required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required';
    if (!form.subject) e.subject = 'Please select a subject';
    if (form.message.trim().length < 10) e.message = 'Please enter at least 10 characters';
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
      <h3 style={{ marginBottom:'0.5rem' }}>Message Sent!</h3>
      <p style={{ color:'var(--neutral-500)', fontSize:'0.9375rem' }}>Thank you, {form.firstName}. We'll reply to {form.email} within 24–48 hours.</p>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:'1rem' }}>
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
        <label className="form-label">Phone (optional)</label>
        <input type="tel" className="form-input" placeholder="0801 234 5678" value={form.phone} onChange={e => setForm(f => ({...f,phone:e.target.value}))} />
      </div>
      <div>
        <label className="form-label">Subject *</label>
        <select className="form-select" value={form.subject} onChange={e => setForm(f => ({...f,subject:e.target.value}))}>
          <option value="">Select a subject…</option>
          {subjects.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
        {errors.subject && <p className="form-error">{errors.subject}</p>}
      </div>
      <div>
        <label className="form-label">Message *</label>
        <textarea className="form-textarea" rows={5} placeholder="Write your message here…" value={form.message} onChange={e => setForm(f => ({...f,message:e.target.value}))} style={{ resize:'vertical' }} />
        {errors.message && <p className="form-error">{errors.message}</p>}
      </div>
      <button type="submit" className="btn btn-primary btn-lg" style={{ width:'100%', justifyContent:'center' }} disabled={loading}>
        {loading ? <><RiLoader4Line style={{ width:'1rem', height:'1rem', animation:'spin 1s linear infinite' }} /> Sending…</> : 'Send Message'}
      </button>
    </form>
  );
}
