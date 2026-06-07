import type { Metadata } from 'next';
import PageHeader from '@/components/shared/PageHeader';
import ContactForm from '@/components/forms/ContactForm';
import { RiPhoneLine, RiMailLine, RiMapPinLine, RiTimeLine, RiExternalLinkLine } from 'react-icons/ri';

export const metadata: Metadata = { title: 'Contact Us' };

export default function ContactPage() {
  return (
    <>
      <PageHeader badge="Reach Out" title="Contact" highlight="Us"
        description="Questions, partnership enquiries, donation support, or volunteering — we respond to all messages within 24 hours." />

      <section className="section-padding" style={{ background:'var(--white)' }}>
        <div className="container-max">
          <div style={{ display:'grid', gridTemplateColumns:'minmax(0,1fr) minmax(0,1.5fr)', gap:'4rem', alignItems:'start' }}>
            {/* Info */}
            <div>
              <h3 style={{ marginBottom:'0.375rem' }}>Get in Touch</h3>
              <p style={{ fontSize:'0.9375rem', color:'var(--neutral-500)', marginBottom:'2rem', lineHeight:1.7 }}>Our team is ready to answer your questions and explore how you can be part of our mission.</p>

              <div style={{ display:'flex', flexDirection:'column', gap:'0.75rem', marginBottom:'2rem' }}>
                {[
                  { icon:RiMapPinLine, label:'Address', value:'40B Ayilara Street, Surulere, Lagos, Nigeria', href:'https://maps.google.com/?q=Ayilara+Street+Surulere+Lagos', external:true },
                  { icon:RiPhoneLine, label:'Phone', value:'08063811840', href:'tel:08063811840' },
                  { icon:RiMailLine, label:'Email', value:'nurtureadream@yahoo.com', href:'mailto:nurtureadream@yahoo.com' },
                  { icon:RiExternalLinkLine, label:'Website', value:'www.crafoundation.org', href:'http://www.crafoundation.org', external:true },
                ].map(({ icon:Icon, label, value, href, external }) => (
                  <a key={label} href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}
                    className="card card-hover" style={{ padding:'1.125rem 1.25rem', display:'flex', alignItems:'flex-start', gap:'0.875rem', textDecoration:'none' }}>
                    <div style={{ width:'2.25rem', height:'2.25rem', borderRadius:'var(--radius-md)', background:'var(--neutral-50)', border:'1px solid var(--border-subtle)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                      <Icon style={{ width:'1rem', height:'1rem', color:'var(--brand-600)' }} />
                    </div>
                    <div>
                      <p style={{ fontSize:'0.74rem', fontWeight:700, letterSpacing:'0.06em', textTransform:'uppercase', color:'var(--neutral-400)', marginBottom:'0.2rem' }}>{label}</p>
                      <p style={{ fontSize:'0.875rem', fontWeight:500, color:'var(--neutral-800)' }}>{value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Hours */}
              <div className="card" style={{ padding:'1.5rem' }}>
                <div style={{ display:'flex', alignItems:'center', gap:'0.5rem', marginBottom:'1rem' }}>
                  <RiTimeLine style={{ width:'1rem', height:'1rem', color:'var(--neutral-400)' }} />
                  <h4 style={{ fontSize:'0.9375rem' }}>Office Hours</h4>
                </div>
                <div style={{ display:'flex', flexDirection:'column', gap:'0.625rem' }}>
                  {[['Monday – Friday','8:00am – 5:00pm'],['Saturday','9:00am – 2:00pm'],['Sunday','Closed']].map(([day,time]) => (
                    <div key={day} style={{ display:'flex', justifyContent:'space-between', alignItems:'center', fontSize:'0.875rem' }}>
                      <span style={{ color:'var(--neutral-600)' }}>{day}</span>
                      <span style={{ fontWeight:600, color:time === 'Closed' ? 'var(--neutral-400)' : 'var(--neutral-900)' }}>{time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bank */}
              <div style={{ marginTop:'1.25rem', background:'var(--neutral-950)', borderRadius:'var(--radius-xl)', padding:'1.5rem' }}>
                <p style={{ fontSize:'0.74rem', fontWeight:700, letterSpacing:'0.08em', textTransform:'uppercase', color:'rgba(255,255,255,0.3)', marginBottom:'0.875rem' }}>Direct Bank Donation</p>
                {[['Bank','Zenith Bank Surulere'],['Account No','1012771274'],['Account Name',"Children's Right Advocate Foundation"]].map(([k,v]) => (
                  <div key={k} style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'0.5rem' }}>
                    <span style={{ fontSize:'0.8rem', color:'rgba(255,255,255,0.35)' }}>{k}</span>
                    <span style={{ fontSize: k === 'Account No' ? '1rem' : '0.845rem', fontWeight: k === 'Account No' ? 800 : 600, color: k === 'Account No' ? 'var(--brand-600)' : 'rgba(255,255,255,0.75)', letterSpacing: k === 'Account No' ? '0.06em' : 'normal', textAlign:'right', maxWidth:'60%' }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="card" style={{ padding:'2.5rem' }}>
              <h3 style={{ marginBottom:'0.375rem' }}>Send Us a Message</h3>
              <p style={{ fontSize:'0.9rem', color:'var(--neutral-400)', marginBottom:'2rem' }}>We respond to all enquiries within 24–48 hours on working days.</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
