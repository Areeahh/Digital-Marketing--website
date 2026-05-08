import { Link } from 'react-router-dom';
import {
  Search, Megaphone, Target, BarChart2, Mail, Globe,
  CheckCircle, ArrowRight, TrendingUp, Shield, Clock,
} from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'SEO Optimization',
    tagline: 'Rank higher, get found, grow organically',
    desc: 'Our SEO specialists combine technical expertise with content strategy to build long-term organic visibility that drives compounding returns.',
    features: ['Technical SEO Audits', 'Keyword Research & Strategy', 'On-Page Optimization', 'Link Building Campaigns', 'Local SEO', 'Core Web Vitals'],
    result: '+340% avg. organic traffic',
    img: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Megaphone,
    title: 'Social Media Marketing',
    tagline: 'Build communities that convert',
    desc: 'We craft platform-native content strategies that grow your following, build brand authority, and generate qualified leads from social channels.',
    features: ['Content Calendar & Creation', 'Community Management', 'Influencer Partnerships', 'Social Ad Campaigns', 'Competitor Analysis', 'Monthly Reporting'],
    result: '85K avg. follower growth',
    img: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Target,
    title: 'PPC & Paid Advertising',
    tagline: 'Every dollar working at maximum efficiency',
    desc: 'From Google Search to Meta and LinkedIn — our paid media team engineers campaigns that maximize ROAS and minimize wasted spend.',
    features: ['Google Ads Management', 'Meta Ads (FB/IG)', 'LinkedIn Advertising', 'Retargeting Campaigns', 'Conversion Rate Optimization', 'A/B Testing'],
    result: '4.2x average ROAS',
    img: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Globe,
    title: 'Content Marketing',
    tagline: 'Content that educates, engages, and converts',
    desc: 'Our content team produces SEO-optimized blog posts, whitepapers, case studies, and video scripts that establish your brand as the definitive authority.',
    features: ['Content Strategy', 'Blog & Article Writing', 'Case Study Production', 'Video Script Writing', 'Infographic Design', 'Content Distribution'],
    result: '220% avg. engagement lift',
    img: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Mail,
    title: 'Email Marketing',
    tagline: 'The highest-ROI channel done right',
    desc: 'We design, write, and automate email programs that nurture leads through your funnel and keep customers coming back for more.',
    features: ['Email Strategy & Planning', 'Drip Sequence Design', 'List Segmentation', 'A/B Subject Line Testing', 'Deliverability Optimization', 'CRM Integration'],
    result: '42% avg. open rate',
    img: 'https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: BarChart2,
    title: 'Analytics & Reporting',
    tagline: 'Data clarity that drives smarter decisions',
    desc: 'We set up comprehensive tracking, build real-time dashboards, and deliver weekly/monthly reports that connect marketing activity to business outcomes.',
    features: ['GA4 Setup & Configuration', 'Custom Dashboard Build', 'Attribution Modeling', 'Weekly Performance Reports', 'Quarterly Business Reviews', 'Competitor Benchmarking'],
    result: '100% data transparency',
    img: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

const whyUs = [
  { icon: TrendingUp, title: 'Data-First Approach', desc: 'Every decision backed by analytics, not guesswork.' },
  { icon: Shield, title: 'Transparent Reporting', desc: 'Real-time dashboards and honest reporting — always.' },
  { icon: Clock, title: 'Dedicated Team', desc: 'A specialist team assigned exclusively to your account.' },
  { icon: CheckCircle, title: 'Proven Results', desc: 'Average client sees 3-5x ROI within the first 6 months.' },
];

export default function Services() {
  return (
    <div className="page">
      {/* HERO */}
      <section className="hero">
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', textAlign: 'center' }}>
          <div className="section-tag">Our Services</div>
          <h1 style={{ color: '#fff', marginTop: '1rem' }}>
            Everything Your Brand Needs to <span style={{ color: 'var(--brand-primary-color)' }}>Grow</span>
          </h1>
          <p style={{ color: '#94a3b8', maxWidth: '560px', margin: '0 auto' }}>
            Six core services, one integrated strategy. Built to work together and deliver exponential results.
          </p>
        </div>
      </section>

      {/* WHY US BAR */}
      <div className="stats-bar">
        {whyUs.map((w) => (
          <div key={w.title} className="stats-bar-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <w.icon size={28} color="var(--brand-primary-color)" style={{ marginBottom: '0.75rem' }} />
            <h4 style={{ margin: '0 0 0.25rem', color: 'var(--text-primary-color)' }}>{w.title}</h4>
            <p style={{ margin: 0, fontSize: '0.85rem' }}>{w.desc}</p>
          </div>
        ))}
      </div>

      {/* SERVICES LIST */}
      <section className="section">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem', maxWidth: '1100px', margin: '0 auto' }}>
          {services.map((service, i) => (
            <div
              key={service.title}
              id={service.title.toLowerCase().replace(/\s+/g, '-')}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '3rem',
                alignItems: 'center',
                flexDirection: i % 2 === 0 ? 'row' : 'row-reverse',
              }}
            >
              <div style={{ flex: '1 1 300px' }}>
                <img
                  src={service.img}
                  alt={service.title}
                  style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '20px', boxShadow: 'var(--shadow-lg)' }}
                />
              </div>
              <div style={{ flex: '1 1 340px' }}>
                <div style={{
                  width: '52px', height: '52px', borderRadius: '14px',
                  background: 'var(--brand-fourth-color)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.2rem',
                }}>
                  <service.icon size={24} color="var(--brand-primary-color)" />
                </div>
                <div className="section-tag" style={{ marginBottom: '0.75rem' }}>{service.result}</div>
                <h2 style={{ marginBottom: '0.4rem' }}>{service.title}</h2>
                <p style={{ color: 'var(--brand-primary-color)', fontWeight: 600, marginBottom: '1rem' }}>{service.tagline}</p>
                <p style={{ color: 'var(--text-muted-color)', marginBottom: '1.5rem' }}>{service.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                  {service.features.map((f) => (
                    <span key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.85rem', color: 'var(--text-secondary-color)' }}>
                      <CheckCircle size={14} color="var(--brand-primary-color)" /> {f}
                    </span>
                  ))}
                </div>
                <Link to="/contact">
                  <button>Get Started <ArrowRight size={16} /></button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--bg-card)', padding: '5rem 2.5rem', textAlign: 'center', borderTop: '1px solid var(--border-primary-color)' }}>
        <div className="section-tag">Ready to Start?</div>
        <h2 style={{ marginTop: '1rem' }}>Not Sure Which Service You Need?</h2>
        <p style={{ color: 'var(--text-muted-color)', maxWidth: '480px', margin: '0 auto 2rem' }}>
          Book a free strategy call. Our team will analyze your current marketing and recommend the highest-impact services for your goals.
        </p>
        <Link to="/contact">
          <button className="lg-button">Book Free Strategy Call <ArrowRight size={18} /></button>
        </Link>
      </section>
    </div>
  );
}
