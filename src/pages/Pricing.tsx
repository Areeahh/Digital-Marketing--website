import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Zap, HelpCircle } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: { monthly: 1499, annual: 1199 },
    tagline: 'Perfect for small businesses getting started',
    features: [
      'Up to 2 active channels',
      'SEO audit & basic optimization',
      'Monthly performance report',
      'Google Analytics setup',
      'Email support (48h response)',
      '2 blog posts per month',
    ],
    notIncluded: ['PPC management', 'Social media management', 'Dedicated account manager'],
    cta: 'Get Started',
    featured: false,
  },
  {
    name: 'Growth',
    price: { monthly: 3499, annual: 2799 },
    tagline: 'For growing businesses ready to scale',
    features: [
      'Up to 4 active channels',
      'Full SEO management',
      'PPC campaign management ($10K budget)',
      'Social media (2 platforms)',
      'Weekly performance reports',
      '4 blog posts per month',
      'Email marketing automation',
      'Dedicated account manager',
      'Priority support (12h response)',
    ],
    notIncluded: [],
    cta: 'Start Growing',
    featured: true,
    badge: 'Most Popular',
  },
  {
    name: 'Enterprise',
    price: { monthly: 7999, annual: 6399 },
    tagline: 'For brands that demand premium results',
    features: [
      'Unlimited channels',
      'Full-stack SEO management',
      'PPC management (unlimited budget)',
      'Social media (all platforms)',
      'Custom analytics dashboard',
      'Daily performance reports',
      '8+ content pieces per month',
      'Influencer partnership management',
      'Dedicated senior team (3 specialists)',
      '24/7 Slack support',
      'Quarterly strategy sessions',
    ],
    notIncluded: [],
    cta: 'Contact Sales',
    featured: false,
  },
];

const faqs = [
  { q: 'Are there any setup fees?', a: 'No setup fees on any plan. We believe in earning your trust through results, not upfront charges.' },
  { q: 'Can I cancel anytime?', a: 'Yes. All plans are month-to-month with no long-term contracts. We retain clients through performance, not lock-in.' },
  { q: 'What happens after I sign up?', a: 'Within 48 hours you\'ll have a dedicated onboarding call to audit your current marketing and build your first 90-day strategy.' },
  { q: 'Do you work with my industry?', a: 'We\'ve worked across 40+ industries. Our strategy team will research your specific market before starting any work.' },
  { q: 'Is ad spend included in pricing?', a: 'Pricing covers management fees only. Ad spend is billed separately and goes directly to the ad platforms.' },
  { q: 'Can I change plans later?', a: 'Absolutely. Upgrade or downgrade at any time — changes take effect at the next billing cycle.' },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="page">
      {/* HERO */}
      <section className="hero">
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', textAlign: 'center' }}>
          <div className="section-tag">Pricing</div>
          <h1 style={{ color: '#fff', marginTop: '1rem' }}>
            Simple, Transparent <span style={{ color: 'var(--brand-primary-color)' }}>Pricing</span>
          </h1>
          <p style={{ color: '#94a3b8', maxWidth: '500px', margin: '0 auto' }}>
            No hidden fees, no surprises. Pick a plan that fits your goals and scale as you grow.
          </p>
          {/* Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
            <span style={{ color: annual ? '#64748b' : '#fff', fontWeight: 600, fontSize: '0.95rem' }}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              style={{
                width: '52px', height: '28px', borderRadius: '999px',
                background: annual ? 'var(--brand-primary-color)' : 'rgba(255,255,255,0.2)',
                border: 'none', cursor: 'pointer', position: 'relative',
                padding: 0, transition: 'background 0.3s ease',
              }}
            >
              <span style={{
                position: 'absolute', top: '4px',
                left: annual ? '28px' : '4px',
                width: '20px', height: '20px', borderRadius: '50%',
                background: '#fff', transition: 'left 0.3s ease',
              }} />
            </button>
            <span style={{ color: annual ? '#fff' : '#64748b', fontWeight: 600, fontSize: '0.95rem' }}>
              Annual <span style={{ fontSize: '0.78rem', background: 'rgba(14,165,233,0.2)', color: 'var(--brand-third-color)', padding: '0.15rem 0.5rem', borderRadius: '999px', marginLeft: '0.3rem' }}>Save 20%</span>
            </span>
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section className="section" style={{ background: 'var(--bg-main)' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '24px', maxWidth: '1100px', margin: '0 auto', alignItems: 'stretch' }}>
          {plans.map((plan) => (
            <div key={plan.name} className={`pricing-card${plan.featured ? ' featured' : ''}`}>
              {plan.badge && (
                <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '0.5rem' }}>
                  <span style={{ background: 'var(--brand-primary-color)', color: '#fff', fontSize: '0.75rem', fontWeight: 700, padding: '0.2rem 0.7rem', borderRadius: '999px', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <Zap size={11} /> {plan.badge}
                  </span>
                </div>
              )}
              <h3 style={{ color: plan.featured ? '#fff' : 'var(--text-primary-color)' }}>{plan.name}</h3>
              <p style={{ fontSize: '0.875rem', color: plan.featured ? '#94a3b8' : 'var(--text-muted-color)', marginBottom: '0.5rem' }}>{plan.tagline}</p>
              <div className="price-amount">
                ${annual ? plan.price.annual.toLocaleString() : plan.price.monthly.toLocaleString()}
                <span style={{ fontSize: '1rem', color: plan.featured ? '#94a3b8' : 'var(--text-muted-color)', fontWeight: 400 }}>/mo</span>
              </div>
              {annual && (
                <p style={{ fontSize: '0.8rem', color: 'var(--brand-third-color)', marginBottom: '1rem' }}>
                  Billed ${(plan.price.annual * 12).toLocaleString()}/year
                </p>
              )}

              <ul className="pricing-features">
                {plan.features.map((f) => (
                  <li key={f}>
                    <CheckCircle size={15} color={plan.featured ? 'var(--brand-third-color)' : 'var(--brand-primary-color)'} />
                    <span style={{ color: plan.featured ? '#cbd5e1' : 'var(--text-secondary-color)' }}>{f}</span>
                  </li>
                ))}
              </ul>

              {plan.name === 'Enterprise' ? (
                <Link to="/contact">
                  <button style={{ width: '100%', justifyContent: 'center', background: 'var(--brand-primary-color)' }}>
                    {plan.cta} <ArrowRight size={16} />
                  </button>
                </Link>
              ) : (
                <Link to="/signup">
                  <button
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      background: plan.featured ? 'var(--brand-primary-color)' : 'transparent',
                      border: plan.featured ? 'none' : '2px solid var(--brand-primary-color)',
                      color: plan.featured ? '#fff' : 'var(--brand-primary-color)',
                    }}
                  >
                    {plan.cta} <ArrowRight size={16} />
                  </button>
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Trust signals */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', marginTop: '3rem' }}>
          {['No setup fees', 'Cancel anytime', '30-day money back guarantee', 'Dedicated onboarding'].map((f) => (
            <span key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.875rem', color: 'var(--text-muted-color)' }}>
              <CheckCircle size={14} color="var(--brand-primary-color)" /> {f}
            </span>
          ))}
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="section" style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--border-primary-color)' }}>
        <div className="section-header">
          <div className="section-tag">Compare Plans</div>
          <h2>Feature Comparison</h2>
        </div>
        <div className="table-container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <table style={{ minWidth: '600px', maxWidth: '900px' }}>
            <thead>
              <tr>
                <th>Feature</th>
                <th style={{ textAlign: 'center' }}>Starter</th>
                <th style={{ textAlign: 'center', background: 'var(--brand-secondary-color)' }}>Growth</th>
                <th style={{ textAlign: 'center' }}>Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['SEO Management', 'Basic', 'Full', 'Advanced'],
                ['PPC Management', '—', '✓', '✓'],
                ['Social Platforms', '—', '2', 'Unlimited'],
                ['Blog Posts/Month', '2', '4', '8+'],
                ['Reporting', 'Monthly', 'Weekly', 'Daily'],
                ['Account Manager', '—', '✓', 'Senior'],
                ['Support', 'Email 48h', 'Priority 12h', '24/7 Slack'],
                ['Ad Budget Cap', '—', '$10K', 'Unlimited'],
              ].map(([feature, starter, growth, enterprise]) => (
                <tr key={feature}>
                  <td style={{ fontWeight: 500 }}>{feature}</td>
                  <td style={{ textAlign: 'center', color: starter === '—' ? 'var(--text-muted-color)' : 'var(--text-secondary-color)' }}>{starter}</td>
                  <td style={{ textAlign: 'center', fontWeight: 600, color: 'var(--brand-primary-color)' }}>{growth}</td>
                  <td style={{ textAlign: 'center', color: enterprise === '—' ? 'var(--text-muted-color)' : 'var(--text-secondary-color)' }}>{enterprise}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: 'var(--bg-main)' }}>
        <div className="section-header">
          <div className="section-tag">FAQ</div>
          <h2>Frequently Asked Questions</h2>
        </div>
        <div style={{ maxWidth: '700px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-primary-color)',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                cursor: 'pointer',
              }}
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.1rem 1.4rem' }}>
                <span style={{ fontWeight: 600, color: 'var(--text-primary-color)', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <HelpCircle size={16} color="var(--brand-primary-color)" /> {faq.q}
                </span>
                <span style={{ color: 'var(--text-muted-color)', fontSize: '1.2rem', transform: openFaq === i ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>+</span>
              </div>
              {openFaq === i && (
                <div style={{ padding: '0 1.4rem 1.2rem', borderTop: '1px solid var(--border-muted-color)' }}>
                  <p style={{ margin: '1rem 0 0', color: 'var(--text-muted-color)', fontSize: '0.925rem' }}>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
