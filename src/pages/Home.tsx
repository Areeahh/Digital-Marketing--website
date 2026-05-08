import { Link } from 'react-router-dom';
import {
  ArrowRight, TrendingUp, Users, Award, Star, CheckCircle,
  BarChart2, Target, Megaphone, Search, Mail, Globe,
  Play, ChevronRight, Zap,
} from 'lucide-react';

const services = [
  { icon: Search, title: 'SEO Optimization', desc: 'Dominate search rankings with our data-driven SEO strategies that bring organic traffic and qualified leads.' },
  { icon: Megaphone, title: 'Social Media Marketing', desc: 'Build brand awareness and engagement across all platforms with compelling content and targeted campaigns.' },
  { icon: Target, title: 'PPC Advertising', desc: 'Maximize ROI with precision-targeted pay-per-click campaigns on Google, Meta, and LinkedIn.' },
  { icon: BarChart2, title: 'Analytics & Reporting', desc: 'Make smarter decisions with real-time dashboards and comprehensive performance reports.' },
  { icon: Mail, title: 'Email Marketing', desc: 'Nurture leads and retain customers with personalized email sequences that convert.' },
  { icon: Globe, title: 'Content Marketing', desc: 'Establish thought leadership with high-quality content that educates, engages, and converts.' },
];

const testimonials = [
  { name: 'Sarah Mitchell', role: 'CEO, TechBloom', text: 'NexusDigital transformed our online presence. We saw a 340% increase in organic traffic within 6 months. Absolutely incredible results.', rating: 5, initials: 'SM' },
  { name: 'James Rodriguez', role: 'CMO, GrowthLabs', text: 'The PPC campaigns they built for us have a 4.2x ROAS. Best digital marketing investment we\'ve ever made.', rating: 5, initials: 'JR' },
  { name: 'Priya Nair', role: 'Founder, Aurelia Brand', text: 'Their social media strategy took us from 2k to 87k followers in under a year. The team is brilliant and responsive.', rating: 5, initials: 'PN' },
];

const clients = [
  'Shopify', 'HubSpot', 'Stripe', 'Vercel', 'Notion', 'Linear', 'Figma', 'Netlify', 'Shopify', 'HubSpot', 'Stripe', 'Vercel', 'Notion', 'Linear', 'Figma', 'Netlify',
];

const stats = [
  { value: '500+', label: 'Clients Served' },
  { value: '$2.4B', label: 'Revenue Generated' },
  { value: '98%', label: 'Client Retention' },
  { value: '12x', label: 'Average ROI' },
];

const steps = [
  { num: '01', title: 'Discovery Call', desc: 'We audit your current digital presence and understand your business goals.' },
  { num: '02', title: 'Strategy Design', desc: 'Our team crafts a custom growth strategy tailored to your market.' },
  { num: '03', title: 'Execute & Launch', desc: 'We implement campaigns, content, and technical optimizations at scale.' },
  { num: '04', title: 'Measure & Scale', desc: 'Continuous monitoring and optimization to compound your results.' },
];

const portfolioItems = [
  { category: 'SEO', title: 'TechBloom', result: '+340% Organic Traffic', img: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { category: 'PPC', title: 'GrowthLabs', result: '4.2x ROAS', img: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { category: 'Social', title: 'Aurelia Brand', result: '+85K Followers', img: 'https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

export default function Home() {
  return (
    <div className="page">
      {/* HERO */}
      <section className="hero">
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1100px', width: '100%' }}>
          <div className="section-tag" style={{ marginBottom: '1.5rem' }}>
            #1 Digital Marketing Agency
          </div>
          <h1 style={{ color: '#fff', marginBottom: '1.5rem' }}>
            We Grow Brands That <br />
            <span style={{ color: 'var(--brand-primary-color)' }}>Mean Business</span>
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1.2rem', maxWidth: '620px', margin: '0 auto 2.5rem' }}>
            From SEO to performance ads — NexusDigital builds end-to-end digital marketing systems that drive measurable, compounding growth for ambitious brands.
          </p>
          <div className="hero-actions">
            <Link to="/contact">
              <button className="lg-button" style={{ background: 'var(--brand-primary-color)' }}>
                Get Free Audit <ArrowRight size={18} />
              </button>
            </Link>
            <button
              className="lg-button border-button"
              style={{ borderColor: 'rgba(255,255,255,0.25)', color: '#fff', background: 'rgba(255,255,255,0.05)' }}
            >
              <Play size={18} fill="currentColor" /> Watch Case Study
            </button>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', marginTop: '3.5rem' }}>
            {['Google Premier Partner', 'Meta Business Partner', 'HubSpot Certified'].map((b) => (
              <div key={b} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#94a3b8', fontSize: '0.85rem' }}>
                <CheckCircle size={14} color="var(--brand-third-color)" />
                {b}
              </div>
            ))}
          </div>
        </div>
        {/* Decorative blobs */}
        <div style={{ position: 'absolute', bottom: '-80px', left: '-80px', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(14,165,233,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
      </section>

      {/* STATS */}
      <div className="stats-bar">
        {stats.map((s) => (
          <div key={s.label} className="stats-bar-item">
            <h2>{s.value}</h2>
            <p>{s.label}</p>
          </div>
        ))}
      </div>

      {/* SLIDING CLIENTS */}
      <section style={{ background: 'var(--bg-card)', padding: '2.5rem 0', borderBottom: '1px solid var(--border-primary-color)' }}>
        <p style={{ textAlign: 'center', color: 'var(--text-muted-color)', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '1.5rem' }}>
          Trusted by industry leaders worldwide
        </p>
        <div className="slider-wrapper">
          <div className="slider-track">
            {clients.map((c, i) => (
              <div key={i} className="slide-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: '160px', padding: '1rem 2rem' }}>
                <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-muted-color)' }}>{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section" style={{ background: 'var(--bg-main)' }}>
        <div className="section-header">
          <div className="section-tag">What We Do</div>
          <h2>Full-Stack Digital Marketing</h2>
          <p style={{ maxWidth: '560px', margin: '0 auto', color: 'var(--text-muted-color)' }}>
            Every service we offer is backed by data, executed by specialists, and optimized for your specific growth goals.
          </p>
        </div>
        <div className="card-container">
          {services.map((s) => (
            <div key={s.title} className="card">
              <div style={{
                width: '52px', height: '52px', borderRadius: '14px',
                background: 'linear-gradient(135deg, var(--brand-fourth-color), rgba(14,165,233,0.08))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1.2rem',
              }}>
                <s.icon size={24} color="var(--brand-primary-color)" strokeWidth={1.8} />
              </div>
              <h3>{s.title}</h3>
              <p style={{ flex: 1, color: 'var(--text-muted-color)', fontSize: '0.925rem' }}>{s.desc}</p>
              <Link to="/services" className="link-button" style={{ marginTop: '1rem', fontSize: '0.875rem' }}>
                Learn more <ChevronRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="section" style={{ background: 'var(--bg-card)' }}>
        <div className="section-header">
          <div className="section-tag">Our Process</div>
          <h2>How We Deliver Results</h2>
          <p style={{ maxWidth: '520px', margin: '0 auto', color: 'var(--text-muted-color)' }}>
            A proven 4-step framework that takes you from discovery to scaled growth.
          </p>
        </div>
        <div className="steps-container">
          {steps.map((step, i) => (
            <div key={step.num} className="step-item">
              <div className="step-number">{step.num}</div>
              {i < steps.length - 1 && (
                <div style={{
                  position: 'absolute', top: '44px', left: 'calc(50% + 28px)', width: 'calc(100% - 56px)',
                  height: '2px', background: 'var(--border-primary-color)',
                }} />
              )}
              <h3>{step.title}</h3>
              <p style={{ color: 'var(--text-muted-color)', fontSize: '0.9rem' }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section className="section" style={{ background: 'var(--bg-main)' }}>
        <div className="section-header">
          <div className="section-tag">Case Studies</div>
          <h2>Results That Speak</h2>
        </div>
        <div className="card-container">
          {portfolioItems.map((item) => (
            <div key={item.title} className="card" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ position: 'relative', overflow: 'hidden', height: '200px' }}>
                <img
                  src={item.img}
                  alt={item.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease', borderRadius: 0 }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <span className="badge" style={{ position: 'absolute', top: '12px', left: '12px' }}>{item.category}</span>
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ marginBottom: '0.4rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--brand-primary-color)', fontWeight: 700, fontSize: '1.1rem', margin: 0 }}>{item.result}</p>
                <Link to="/portfolio" className="link-button" style={{ marginTop: '0.75rem', fontSize: '0.875rem' }}>
                  View Case Study <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <Link to="/portfolio">
            <button className="border-button">View All Case Studies <ArrowRight size={16} /></button>
          </Link>
        </div>
      </section>

      {/* SLIDING TESTIMONIALS */}
      <section className="section" style={{ background: 'var(--bg-card)', overflow: 'hidden' }}>
        <div className="section-header">
          <div className="section-tag">Testimonials</div>
          <h2>What Our Clients Say</h2>
        </div>
        <div style={{ overflow: 'hidden', paddingBottom: '1rem' }}>
          <div style={{ display: 'flex', gap: '24px', animation: 'slide 35s linear infinite', width: 'max-content' }}>
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="testimonial-card">
                <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '0.75rem' }}>
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} fill="var(--brand-accent-color)" color="var(--brand-accent-color)" />
                  ))}
                </div>
                <p style={{ color: 'var(--text-secondary-color)', fontSize: '0.925rem', marginBottom: 0 }}>{t.text}</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.initials}</div>
                  <div>
                    <p style={{ margin: 0, fontWeight: 600, color: 'var(--text-primary-color)', fontSize: '0.9rem' }}>{t.name}</p>
                    <p style={{ margin: 0, color: 'var(--text-muted-color)', fontSize: '0.8rem' }}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{
        background: 'linear-gradient(135deg, #0b1120 0%, #0c2a50 50%, #0b1120 100%)',
        padding: '5rem 2.5rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(14,165,233,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
            <span className="badge" style={{ background: 'rgba(14,165,233,0.2)', color: 'var(--brand-third-color)' }}>
              <Zap size={12} /> Limited spots for Q3 2026
            </span>
          </div>
          <h2 style={{ color: '#fff', fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>Ready to Dominate <br />Your Market?</h2>
          <p style={{ color: '#94a3b8', maxWidth: '500px', margin: '0 auto 2.5rem', fontSize: '1.05rem' }}>
            Book a free 30-minute strategy call and get a custom growth roadmap for your business — no strings attached.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact">
              <button className="lg-button">Schedule Free Call <ArrowRight size={18} /></button>
            </Link>
            <Link to="/pricing">
              <button className="lg-button border-button" style={{ borderColor: 'rgba(255,255,255,0.25)', color: '#fff', background: 'rgba(255,255,255,0.05)' }}>
                View Pricing
              </button>
            </Link>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
            {['No setup fees', 'Cancel anytime', '30-day money back'].map((f) => (
              <span key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#64748b', fontSize: '0.875rem' }}>
                <CheckCircle size={14} color="var(--brand-third-color)" /> {f}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* AWARDS */}
      <section className="section" style={{ background: 'var(--bg-main)' }}>
        <div className="section-header">
          <div className="section-tag">Recognition</div>
          <h2>Award-Winning Work</h2>
        </div>
        <div className="card-container">
          {[
            { icon: Award, title: 'Best Digital Agency 2025', org: 'Clutch.co', year: '2025' },
            { icon: TrendingUp, title: 'Fastest Growing Agency', org: 'Inc. 5000', year: '2024' },
            { icon: Users, title: 'Top SEO Agency', org: 'G2 Reviews', year: '2025' },
            { icon: Star, title: 'Excellence in PPC', org: 'Search Engine Land', year: '2024' },
          ].map((award) => (
            <div key={award.title} className="card" style={{ textAlign: 'center', alignItems: 'center', maxWidth: '280px' }}>
              <award.icon size={36} color="var(--brand-accent-color)" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1rem', textAlign: 'center' }}>{award.title}</h3>
              <p style={{ color: 'var(--text-muted-color)', fontSize: '0.85rem', margin: 0 }}>{award.org} · {award.year}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
