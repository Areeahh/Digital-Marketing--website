import { useState } from 'react';
import { ArrowRight, Clock, User, Tag, Search } from 'lucide-react';

const categories = ['All', 'SEO', 'PPC', 'Social Media', 'Content', 'Analytics', 'Strategy'];

const posts = [
  {
    title: 'The Complete 2026 SEO Guide: How to Rank #1 on Google',
    category: 'SEO',
    author: 'Alex Chen',
    date: 'May 2, 2026',
    readTime: '12 min read',
    excerpt: 'Search engine optimization has evolved dramatically. This comprehensive guide covers every technique you need to dominate search rankings in 2026.',
    img: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=700',
    featured: true,
  },
  {
    title: 'How We Achieved 4.2x ROAS on Google Ads: A Case Study',
    category: 'PPC',
    author: 'Jordan Park',
    date: 'Apr 28, 2026',
    readTime: '8 min read',
    excerpt: 'Breaking down the exact campaign structure, bidding strategy, and ad creative that delivered a 4.2x return on ad spend for our e-commerce client.',
    img: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=700',
    featured: false,
  },
  {
    title: 'Social Media Strategy Framework: Growing to 100K Followers',
    category: 'Social Media',
    author: 'Sophie Laurent',
    date: 'Apr 22, 2026',
    readTime: '10 min read',
    excerpt: 'The exact content framework, posting cadence, and engagement strategy we use to grow brand accounts from zero to six figures.',
    img: 'https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=700',
    featured: false,
  },
  {
    title: 'Content Marketing ROI: How to Measure What Actually Matters',
    category: 'Analytics',
    author: 'Luis Mendez',
    date: 'Apr 18, 2026',
    readTime: '7 min read',
    excerpt: 'Most content marketers measure vanity metrics. Here\'s how to build an attribution model that connects content to revenue.',
    img: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=700',
    featured: false,
  },
  {
    title: 'Email Marketing in 2026: What\'s Working Right Now',
    category: 'Content',
    author: 'Maya Torres',
    date: 'Apr 12, 2026',
    readTime: '9 min read',
    excerpt: 'From AI-personalization to interactive emails — the latest tactics that are driving open rates above 40% across our client portfolio.',
    img: 'https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=700',
    featured: false,
  },
  {
    title: 'Building a Digital Marketing Strategy from Scratch',
    category: 'Strategy',
    author: 'Priya Shah',
    date: 'Apr 8, 2026',
    readTime: '15 min read',
    excerpt: 'A step-by-step framework for building a cohesive digital marketing strategy — from audience research to channel selection to measurement.',
    img: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=700',
    featured: false,
  },
  {
    title: 'Core Web Vitals 2026: The Technical SEO Guide',
    category: 'SEO',
    author: 'Alex Chen',
    date: 'Apr 3, 2026',
    readTime: '11 min read',
    excerpt: 'Google\'s page experience signals are more important than ever. Learn exactly how to optimize your Core Web Vitals scores.',
    img: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=700',
    featured: false,
  },
];

export default function Blog() {
  const [active, setActive] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = posts.filter((p) => {
    const matchCat = active === 'All' || p.category === active;
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) || p.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const featured = posts.find((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <div className="page">
      {/* HERO */}
      <section className="hero" style={{ paddingBottom: '3rem' }}>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', textAlign: 'center' }}>
          <div className="section-tag">Blog & Insights</div>
          <h1 style={{ color: '#fff', marginTop: '1rem' }}>
            Digital Marketing <span style={{ color: 'var(--brand-primary-color)' }}>Insights</span>
          </h1>
          <p style={{ color: '#94a3b8', maxWidth: '500px', margin: '0 auto 2rem' }}>
            Expert strategies, case studies, and actionable guides from the NexusDigital team.
          </p>
          {/* Search */}
          <div style={{ display: 'flex', maxWidth: '440px', margin: '0 auto', position: 'relative' }}>
            <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }} />
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem 1rem 0.75rem 2.75rem',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.15)',
                background: 'rgba(255,255,255,0.08)',
                color: '#fff',
                fontSize: '0.95rem',
              }}
            />
          </div>
        </div>
      </section>

      {/* FEATURED POST */}
      {featured && active === 'All' && !search && (
        <section className="section" style={{ background: 'var(--bg-card)', paddingBottom: '2rem' }}>
          <div className="section-tag" style={{ marginBottom: '1.5rem' }}>Featured Article</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center', maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ flex: '1 1 360px' }}>
              <img
                src={featured.img}
                alt={featured.title}
                style={{ width: '100%', height: '320px', objectFit: 'cover', borderRadius: '20px', boxShadow: 'var(--shadow-lg)' }}
              />
            </div>
            <div style={{ flex: '1 1 340px' }}>
              <span className="badge" style={{ marginBottom: '1rem', display: 'inline-flex' }}>
                <Tag size={12} /> {featured.category}
              </span>
              <h2>{featured.title}</h2>
              <p style={{ color: 'var(--text-muted-color)' }}>{featured.excerpt}</p>
              <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--text-muted-color)' }}>
                  <User size={14} /> {featured.author}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--text-muted-color)' }}>
                  <Clock size={14} /> {featured.readTime}
                </span>
              </div>
              <button>Read Article <ArrowRight size={16} /></button>
            </div>
          </div>
        </section>
      )}

      {/* FILTER + POSTS */}
      <section className="section" style={{ background: 'var(--bg-main)' }}>
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

        {rest.length === 0 ? (
          <p style={{ textAlign: 'center', color: 'var(--text-muted-color)' }}>No articles found.</p>
        ) : (
          <div className="card-container">
            {rest.map((post) => (
              <div key={post.title} className="card" style={{ padding: 0, overflow: 'hidden', maxWidth: '380px' }}>
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <img
                    src={post.img}
                    alt={post.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease', borderRadius: 0 }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.07)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem', alignItems: 'center' }}>
                    <span className="badge"><Tag size={11} /> {post.category}</span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted-color)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <Clock size={12} /> {post.readTime}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.05rem', lineHeight: '1.4', marginBottom: '0.6rem' }}>{post.title}</h3>
                  <p style={{ color: 'var(--text-muted-color)', fontSize: '0.875rem', marginBottom: '1rem' }}>{post.excerpt.substring(0, 100)}...</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted-color)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <User size={12} /> {post.author} · {post.date}
                    </span>
                    <a href="#" className="link-button" style={{ fontSize: '0.8rem' }}>Read <ArrowRight size={12} /></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* NEWSLETTER CTA */}
      <section style={{ background: 'var(--bg-card)', padding: '5rem 2.5rem', textAlign: 'center', borderTop: '1px solid var(--border-primary-color)' }}>
        <div className="section-tag">Newsletter</div>
        <h2 style={{ marginTop: '1rem' }}>Get Marketing Insights Weekly</h2>
        <p style={{ color: 'var(--text-muted-color)', maxWidth: '440px', margin: '0 auto 2rem' }}>
          Join 12,000+ marketers who get our best strategies, case studies, and growth tactics every Tuesday.
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap', maxWidth: '480px', margin: '0 auto' }}>
          <input type="email" placeholder="Your email address" style={{ flex: 1, minWidth: '220px' }} />
          <button>Subscribe <ArrowRight size={16} /></button>
        </div>
        <p style={{ color: 'var(--text-muted-color)', fontSize: '0.8rem', marginTop: '1rem' }}>No spam. Unsubscribe anytime.</p>
      </section>
    </div>
  );
}
