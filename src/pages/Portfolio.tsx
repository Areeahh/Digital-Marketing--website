import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, Target } from 'lucide-react';

const categories = ['All', 'SEO', 'PPC', 'Social Media', 'Content', 'Email'];

const projects = [
  {
    title: 'TechBloom SaaS',
    category: 'SEO',
    result: '+340% Organic Traffic',
    metric: '340%',
    metricLabel: 'Traffic Increase',
    duration: '6 months',
    industry: 'SaaS',
    desc: 'Complete technical SEO overhaul and content strategy that took TechBloom from page 3 to #1 for 47 target keywords.',
    img: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=700',
  },
  {
    title: 'GrowthLabs Ad Scale',
    category: 'PPC',
    result: '4.2x ROAS',
    metric: '4.2x',
    metricLabel: 'Return on Ad Spend',
    duration: '3 months',
    industry: 'E-commerce',
    desc: 'Rebuilt Google Shopping and Meta campaigns from scratch, eliminating $80K/year in wasted spend while 4x-ing revenue.',
    img: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=700',
  },
  {
    title: 'Aurelia Brand Social',
    category: 'Social Media',
    result: '+85K Followers',
    metric: '85K',
    metricLabel: 'New Followers',
    duration: '12 months',
    industry: 'Fashion',
    desc: 'Developed a cross-platform social strategy that built a loyal community and generated $1.2M in social-attributed revenue.',
    img: 'https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=700',
  },
  {
    title: 'FinEdge Content Hub',
    category: 'Content',
    result: '220% More Engagement',
    metric: '220%',
    metricLabel: 'Engagement Lift',
    duration: '9 months',
    industry: 'Fintech',
    desc: 'Built an editorial content hub that established FinEdge as the go-to thought leader for personal finance in Southeast Asia.',
    img: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=700',
  },
  {
    title: 'MedTech Email Funnel',
    category: 'Email',
    result: '42% Open Rate',
    metric: '42%',
    metricLabel: 'Average Open Rate',
    duration: '4 months',
    industry: 'Healthcare',
    desc: 'Redesigned email automation sequences that drove a 42% open rate and 18% click-through — 3x industry average.',
    img: 'https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=700',
  },
  {
    title: 'RetailRush Holiday PPC',
    category: 'PPC',
    result: '$2.4M Revenue',
    metric: '$2.4M',
    metricLabel: 'Holiday Revenue',
    duration: '2 months',
    industry: 'Retail',
    desc: 'Engineered a Black Friday/Cyber Monday PPC blitz that generated $2.4M in sales from a $200K ad budget.',
    img: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=700',
  },
];

export default function Portfolio() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="page">
      {/* HERO */}
      <section className="hero">
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', textAlign: 'center' }}>
          <div className="section-tag">Our Work</div>
          <h1 style={{ color: '#fff', marginTop: '1rem' }}>
            Real Brands, <span style={{ color: 'var(--brand-primary-color)' }}>Real Results</span>
          </h1>
          <p style={{ color: '#94a3b8', maxWidth: '540px', margin: '0 auto' }}>
            Every number on this page represents a real business that trusted us with their growth. Here's what happened.
          </p>
        </div>
      </section>

      {/* AGGREGATE STATS */}
      <div className="stats-bar">
        {[
          { icon: TrendingUp, value: '500+', label: 'Projects Completed' },
          { icon: Target, value: '$2.4B', label: 'Revenue Generated' },
          { icon: Users, value: '28', label: 'Countries Served' },
        ].map((s) => (
          <div key={s.label} className="stats-bar-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <s.icon size={26} color="var(--brand-primary-color)" style={{ marginBottom: '0.5rem' }} />
            <h2 style={{ marginBottom: '0.2rem' }}>{s.value}</h2>
            <p style={{ margin: 0, fontSize: '0.85rem' }}>{s.label}</p>
          </div>
        ))}
      </div>

      {/* FILTER + PROJECTS */}
      <section className="section">
        {/* Filter tabs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center', marginBottom: '3rem' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                background: active === cat ? 'var(--brand-primary-color)' : 'var(--bg-card)',
                color: active === cat ? '#fff' : 'var(--text-secondary-color)',
                border: `1px solid ${active === cat ? 'var(--brand-primary-color)' : 'var(--border-primary-color)'}`,
                padding: '0.45rem 1.1rem',
                fontSize: '0.875rem',
                borderRadius: '999px',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="card-container">
          {filtered.map((project) => (
            <div key={project.title} className="card" style={{ padding: 0, overflow: 'hidden', maxWidth: '400px' }}>
              <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                <img
                  src={project.img}
                  alt={project.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease', borderRadius: 0 }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.07)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <span className="badge" style={{ position: 'absolute', top: '12px', left: '12px' }}>{project.category}</span>
                <span className="badge badge-accent" style={{ position: 'absolute', top: '12px', right: '12px' }}>{project.industry}</span>
              </div>
              <div style={{ padding: '1.75rem' }}>
                <h3 style={{ marginBottom: '0.3rem' }}>{project.title}</h3>
                <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1rem' }}>
                  <div>
                    <p style={{ margin: 0, fontSize: '1.5rem', fontWeight: 800, color: 'var(--brand-primary-color)', fontFamily: 'Space Grotesk, sans-serif' }}>{project.metric}</p>
                    <p style={{ margin: 0, fontSize: '0.78rem', color: 'var(--text-muted-color)' }}>{project.metricLabel}</p>
                  </div>
                  <div>
                    <p style={{ margin: 0, fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary-color)', fontFamily: 'Space Grotesk, sans-serif' }}>{project.duration}</p>
                    <p style={{ margin: 0, fontSize: '0.78rem', color: 'var(--text-muted-color)' }}>Timeline</p>
                  </div>
                </div>
                <p style={{ color: 'var(--text-muted-color)', fontSize: '0.9rem', marginBottom: '1rem' }}>{project.desc}</p>
                <Link to="/contact" className="link-button" style={{ fontSize: '0.875rem' }}>
                  Get similar results <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{
        background: 'linear-gradient(135deg, #0b1120 0%, #0c2040 100%)',
        padding: '5rem 2.5rem',
        textAlign: 'center',
      }}>
        <h2 style={{ color: '#fff' }}>Your Brand Could Be Our Next Case Study</h2>
        <p style={{ color: '#94a3b8', maxWidth: '460px', margin: '0 auto 2rem' }}>
          Join 500+ brands that trusted NexusDigital to deliver transformational results.
        </p>
        <Link to="/contact">
          <button className="lg-button">Start Your Project <ArrowRight size={18} /></button>
        </Link>
      </section>
    </div>
  );
}
