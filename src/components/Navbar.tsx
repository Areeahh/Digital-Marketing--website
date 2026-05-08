import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Zap, Menu, X, ChevronDown } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  {
    label: 'Services',
    path: '/services',
    dropdown: [
      { label: 'SEO Optimization', path: '/services#seo' },
      { label: 'Social Media', path: '/services#social' },
      { label: 'PPC Advertising', path: '/services#ppc' },
      { label: 'Content Marketing', path: '/services#content' },
    ],
  },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Dashboard', path: '/dashboard' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  return (
    <nav style={{ boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.08)' : undefined }}>
      <Link to="/">
        <Zap size={22} strokeWidth={2.5} />
        NexusDigital
      </Link>

      <ul className={menuOpen ? 'open' : ''}>
        {navLinks.map((link) =>
          link.dropdown ? (
            <li key={link.label} className="dropdown">
              <a
                href={link.path}
                style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenDropdown(openDropdown === link.label ? null : link.label);
                }}
                className={location.pathname === link.path ? 'active-link' : ''}
              >
                {link.label}
                <ChevronDown size={14} />
              </a>
              <div
                className="dropdown-menu"
                style={{ display: openDropdown === link.label ? 'flex' : undefined }}
              >
                {link.dropdown.map((sub) => (
                  <Link key={sub.label} to={sub.path}>
                    {sub.label}
                  </Link>
                ))}
              </div>
            </li>
          ) : (
            <li key={link.label}>
              <Link
                to={link.path}
                style={{
                  color: location.pathname === link.path ? 'var(--brand-primary-color)' : undefined,
                  background: location.pathname === link.path ? 'var(--brand-fourth-color)' : undefined,
                }}
              >
                {link.label}
              </Link>
            </li>
          )
        )}
        <li>
          <Link to="/login">
            <button className="sm-button">Log In</button>
          </Link>
        </li>
        <li>
          <Link to="/signup">
            <button className="sm-button" style={{ background: 'var(--brand-accent-color)', border: 'none' }}>
              Get Started
            </button>
          </Link>
        </li>
      </ul>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
    </nav>
  );
}
