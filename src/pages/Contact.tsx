import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, CheckCircle, Send } from 'lucide-react';

const services = [
  'SEO Optimization',
  'Social Media Marketing',
  'PPC Advertising',
  'Content Marketing',
  'Email Marketing',
  'Analytics & Reporting',
  'Full-Service Package',
];

const budgets = ['$1,000 – $2,499/mo', '$2,500 – $4,999/mo', '$5,000 – $9,999/mo', '$10,000+/mo'];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', budget: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page">
      {/* HERO */}
      <section className="hero" style={{ paddingBottom: '4rem' }}>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', textAlign: 'center' }}>
          <div className="section-tag">Get In Touch</div>
          <h1 style={{ color: '#fff', marginTop: '1rem' }}>
            Let's Talk About <span style={{ color: 'var(--brand-primary-color)' }}>Your Growth</span>
          </h1>
          <p style={{ color: '#94a3b8', maxWidth: '520px', margin: '0 auto' }}>
            Book a free 30-minute strategy session. We'll audit your current marketing and give you a custom roadmap — no strings attached.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="section" style={{ background: 'var(--bg-main)' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', maxWidth: '1100px', margin: '0 auto', alignItems: 'flex-start' }}>
          {/* FORM */}
          <div style={{ flex: '1 1 400px' }}>
            {submitted ? (
              <div style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-primary-color)',
                borderRadius: '20px',
                padding: '3rem',
                textAlign: 'center',
                boxShadow: 'var(--shadow-md)',
              }}>
                <div style={{ width: '72px', height: '72px', background: 'var(--brand-fourth-color)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                  <CheckCircle size={32} color="var(--brand-primary-color)" />
                </div>
                <h2>We'll be in touch soon!</h2>
                <p style={{ color: 'var(--text-muted-color)' }}>
                  Thanks for reaching out, {form.name.split(' ')[0]}. A member of our team will contact you within 24 hours to schedule your strategy session.
                </p>
              </div>
            ) : (
              <div className="form-container" style={{ maxWidth: '100%' }}>
                <h3 style={{ marginBottom: '0.25rem' }}>Send Us a Message</h3>
                <p style={{ color: 'var(--text-muted-color)', fontSize: '0.875rem', marginBottom: '2rem' }}>
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
                <form onSubmit={handleSubmit}>
                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <div style={{ flex: '1 1 180px' }}>
                      <label>Full Name *</label>
                      <input
                        type="text"
                        placeholder="John Smith"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                      />
                    </div>
                    <div style={{ flex: '1 1 180px' }}>
                      <label>Email Address *</label>
                      <input
                        type="email"
                        placeholder="john@company.com"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                      />
                    </div>
                  </div>
                  <div>
                    <label>Company / Website</label>
                    <input
                      type="text"
                      placeholder="Acme Inc. or acme.com"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                    />
                  </div>
                  <div>
                    <label>Service You're Interested In</label>
                    <div className="select-container">
                      <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}>
                        <option value="">Select a service...</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label>Monthly Budget</label>
                    <div className="select-container">
                      <select value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })}>
                        <option value="">Select a budget range...</option>
                        {budgets.map((b) => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label>Tell Us About Your Goals *</label>
                    <textarea
                      placeholder="What are you trying to achieve? What's your biggest marketing challenge right now?"
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      style={{ minHeight: '140px' }}
                    />
                  </div>
                  <button type="submit" style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}>
                    <Send size={16} /> Send Message
                  </button>
                </form>
              </div>
            )}
          </div>

          {/* INFO CARDS */}
          <div style={{ flex: '1 1 280px', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {[
              { icon: Mail, title: 'Email Us', val: 'hello@nexusdigital.com', sub: 'For general inquiries' },
              { icon: Phone, title: 'Call Us', val: '+1 (555) 123-4567', sub: 'Mon-Fri, 9am – 6pm PST' },
              { icon: MapPin, title: 'Visit Us', val: '340 Pine St, Suite 800', sub: 'San Francisco, CA 94104' },
              { icon: Clock, title: 'Response Time', val: 'Within 24 Hours', sub: 'We respond to every inquiry' },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  display: 'flex',
                  gap: '1.25rem',
                  alignItems: 'flex-start',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-primary-color)',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--brand-primary-color)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--shadow-md)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border-primary-color)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--shadow-sm)';
                }}
              >
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'var(--brand-fourth-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <item.icon size={20} color="var(--brand-primary-color)" />
                </div>
                <div>
                  <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-muted-color)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{item.title}</p>
                  <p style={{ margin: '0.2rem 0 0.1rem', fontWeight: 600, color: 'var(--text-primary-color)', fontSize: '0.95rem' }}>{item.val}</p>
                  <p style={{ margin: 0, fontSize: '0.825rem', color: 'var(--text-muted-color)' }}>{item.sub}</p>
                </div>
              </div>
            ))}

            {/* What to expect */}
            <div style={{ background: 'linear-gradient(135deg, #0b1120, #0c2040)', borderRadius: '16px', padding: '1.75rem', marginTop: '0.5rem' }}>
              <h4 style={{ color: '#fff', marginBottom: '1rem' }}>What to Expect</h4>
              {[
                'Free 30-min strategy session',
                'Custom growth roadmap',
                'No sales pressure',
                'Proposal within 48 hours',
              ].map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.65rem' }}>
                  <CheckCircle size={15} color="var(--brand-third-color)" />
                  <span style={{ color: '#cbd5e1', fontSize: '0.875rem' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
