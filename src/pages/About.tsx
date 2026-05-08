import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Heart, Lightbulb, Target, Users } from 'lucide-react';

const team = [
  { name: 'Alex Chen', role: 'CEO & Co-Founder', bio: 'Former Google Growth Lead with 12 years building digital marketing systems for Fortune 500 brands.', initials: 'AC', img: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Maya Torres', role: 'Head of SEO', bio: 'SEO specialist with a track record of ranking clients #1 across over 200 competitive niches.', initials: 'MT', img: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Jordan Park', role: 'Paid Media Director', bio: 'Managed $40M+ in ad spend across Google, Meta, and LinkedIn with consistent 4x+ ROAS.', initials: 'JP', img: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Priya Shah', role: 'Content Strategist', bio: 'Content marketing expert whose work has generated over 50M+ organic impressions in the last 3 years.', initials: 'PS', img: 'https://images.pexels.com/photos/3771807/pexels-photo-3771807.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Luis Mendez', role: 'Analytics Lead', bio: 'Data engineer who has built dashboards and attribution models for 100+ enterprise marketing teams.', initials: 'LM', img: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Sophie Laurent', role: 'Social Media Director', bio: 'Social strategist who grew a portfolio of brands from zero to 500K+ combined followers in under 18 months.', initials: 'SL', img: 'https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=400' },
];

const values = [
  { icon: Target, title: 'Results Over Vanity', desc: 'We measure success by your business outcomes — revenue, leads, and growth — not just impressions or clicks.' },
  { icon: Heart, title: 'Client-First Culture', desc: 'Your success is our success. We operate as an extension of your team, not just a vendor.' },
  { icon: Lightbulb, title: 'Relentless Innovation', desc: 'The digital landscape evolves constantly. We stay ahead so you do too.' },
  { icon: Users, title: 'Radical Transparency', desc: 'No vanity metrics, no hidden fees, no surprises. Just honest communication at every step.' },
];

const milestones = [
  { year: '2016', event: 'Founded in San Francisco with 3 clients and a big vision' },
  { year: '2018', event: 'Expanded to full-service with launch of paid media division' },
  { year: '2020', event: 'Crossed $100M in tracked client revenue generated' },
  { year: '2022', event: 'Named #1 Digital Agency by Clutch.co — 50 team members strong' },
  { year: '2024', event: 'Opened London & Singapore offices, serving clients in 28 countries' },
  { year: '2026', event: 'Over 500 clients, $2.4B in revenue generated, still growing fast' },
];

export default function About() {
  return (
    <div className="page">
      {/* HERO */}
      <section className="hero">
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', textAlign: 'center' }}>
          <div className="section-tag">Our Story</div>
          <h1 style={{ color: '#fff', marginTop: '1rem' }}>
            Built by Marketers,<br />
            <span style={{ color: 'var(--brand-primary-color)' }}>For Ambitious Brands</span>
          </h1>
          <p style={{ color: '#94a3b8', maxWidth: '580px', margin: '0 auto' }}>
            We started NexusDigital because we were tired of agencies that cared more about retainers than results. A decade later, we've helped 500+ brands achieve transformational growth.
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section className="section" style={{ background: 'var(--bg-card)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>
          <div style={{ flex: '1 1 320px' }}>
            <img
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=700"
              alt="Team at work"
              style={{ width: '100%', borderRadius: '20px', objectFit: 'cover', height: '400px', boxShadow: 'var(--shadow-lg)' }}
            />
          </div>
          <div style={{ flex: '1 1 360px' }}>
            <div className="section-tag">Our Mission</div>
            <h2 style={{ marginTop: '1rem' }}>We Exist to Make Digital Marketing Honest and Effective</h2>
            <p style={{ color: 'var(--text-muted-color)' }}>
              Too many businesses waste money on agencies that don't deliver. We built NexusDigital around a simple promise: every dollar you invest in marketing should come back multiplied.
            </p>
            <p style={{ color: 'var(--text-muted-color)' }}>
              Our integrated approach combines technical excellence, creative strategy, and data science to build marketing engines that grow with your business.
            </p>
            {['500+ clients across 28 countries', '$2.4B in client revenue generated', '98% client retention rate', 'Google Premier & Meta Business Partner'].map((f) => (
              <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginTop: '0.75rem' }}>
                <CheckCircle size={16} color="var(--brand-primary-color)" />
                <span style={{ fontSize: '0.95rem', color: 'var(--text-secondary-color)' }}>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section" style={{ background: 'var(--bg-main)' }}>
        <div className="section-header">
          <div className="section-tag">Our Values</div>
          <h2>What We Stand For</h2>
        </div>
        <div className="card-container">
          {values.map((v) => (
            <div key={v.title} className="card">
              <div style={{
                width: '52px', height: '52px', borderRadius: '14px',
                background: 'var(--brand-fourth-color)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.2rem',
              }}>
                <v.icon size={24} color="var(--brand-primary-color)" />
              </div>
              <h3>{v.title}</h3>
              <p style={{ color: 'var(--text-muted-color)', fontSize: '0.925rem' }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="section" style={{ background: 'var(--bg-card)' }}>
        <div className="section-header">
          <div className="section-tag">The Team</div>
          <h2>The Specialists Behind Your Growth</h2>
          <p style={{ color: 'var(--text-muted-color)', maxWidth: '520px', margin: '0 auto' }}>
            World-class marketers, data scientists, and creatives — all working together on your account.
          </p>
        </div>
        <div className="card-container">
          {team.map((member) => (
            <div key={member.name} className="card" style={{ padding: 0, overflow: 'hidden', alignItems: 'stretch' }}>
              <img
                src={member.img}
                alt={member.name}
                style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '0' }}
              />
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ marginBottom: '0.2rem' }}>{member.name}</h3>
                <span className="badge" style={{ marginBottom: '0.75rem', display: 'inline-flex' }}>{member.role}</span>
                <p style={{ color: 'var(--text-muted-color)', fontSize: '0.875rem', margin: 0 }}>{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section" style={{ background: 'var(--bg-main)' }}>
        <div className="section-header">
          <div className="section-tag">Our Journey</div>
          <h2>A Decade of Growth</h2>
        </div>
        <div style={{ maxWidth: '700px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0' }}>
          {milestones.map((m, i) => (
            <div key={m.year} style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '50%',
                  background: 'var(--brand-primary-color)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', fontWeight: 700, fontSize: '0.8rem', fontFamily: 'Space Grotesk, sans-serif',
                  flexShrink: 0,
                }}>{m.year}</div>
                {i < milestones.length - 1 && (
                  <div style={{ width: '2px', flex: 1, background: 'var(--border-primary-color)', minHeight: '40px' }} />
                )}
              </div>
              <div style={{ paddingTop: '0.75rem', paddingBottom: i < milestones.length - 1 ? '1.5rem' : 0 }}>
                <p style={{ color: 'var(--text-secondary-color)', margin: 0, fontSize: '0.95rem' }}>{m.event}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--bg-card)', padding: '5rem 2.5rem', textAlign: 'center', borderTop: '1px solid var(--border-primary-color)' }}>
        <h2>Join the Brands Growing with NexusDigital</h2>
        <p style={{ color: 'var(--text-muted-color)', maxWidth: '460px', margin: '0 auto 2rem' }}>
          Let's talk about your goals and how we can help you achieve them.
        </p>
        <Link to="/contact">
          <button className="lg-button">Start Your Journey <ArrowRight size={18} /></button>
        </Link>
      </section>
    </div>
  );
}
