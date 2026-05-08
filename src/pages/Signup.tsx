import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Zap, Eye, EyeOff, ArrowRight, CheckCircle } from 'lucide-react';

export default function Signup() {
  const [showPass, setShowPass] = useState(false);
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', company: '', password: '' });

  const passwordStrength = (p: string) => {
    if (!p) return 0;
    let score = 0;
    if (p.length >= 8) score++;
    if (/[A-Z]/.test(p)) score++;
    if (/[0-9]/.test(p)) score++;
    if (/[^A-Za-z0-9]/.test(p)) score++;
    return score;
  };

  const strength = passwordStrength(form.password);
  const strengthColors = ['', '#ef4444', '#f59e0b', '#0ea5e9', '#22c55e'];
  const strengthLabels = ['', 'Weak', 'Fair', 'Good', 'Strong'];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0b1120 0%, #0c2040 50%, #0b1120 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', top: '-200px', right: '-200px', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(14,165,233,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ width: '100%', maxWidth: '520px', position: 'relative', zIndex: 1 }}>
        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.35rem', fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif', color: 'var(--brand-primary-color)' }}>
            <Zap size={24} strokeWidth={2.5} />
            NexusDigital
          </Link>
        </div>

        <div className="form-container" style={{ maxWidth: '100%' }}>
          <h3 style={{ textAlign: 'center', marginBottom: '0.25rem' }}>Create your account</h3>
          <p style={{ textAlign: 'center', color: 'var(--text-muted-color)', fontSize: '0.875rem', marginBottom: '2rem' }}>
            Already have an account? <Link to="/login" style={{ color: 'var(--brand-primary-color)', fontWeight: 600 }}>Sign in</Link>
          </p>

          {/* Benefits */}
          <div style={{ background: 'var(--bg-main)', borderRadius: '12px', padding: '1rem 1.25rem', marginBottom: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {['Free 30-day trial', 'No credit card required', 'Cancel anytime'].map((b) => (
              <span key={b} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.8rem', color: 'var(--text-muted-color)' }}>
                <CheckCircle size={13} color="var(--brand-primary-color)" /> {b}
              </span>
            ))}
          </div>

          <form onSubmit={(e) => e.preventDefault()}>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <div style={{ flex: '1 1 160px' }}>
                <label>First Name *</label>
                <input type="text" placeholder="John" required value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} />
              </div>
              <div style={{ flex: '1 1 160px' }}>
                <label>Last Name *</label>
                <input type="text" placeholder="Smith" required value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} />
              </div>
            </div>
            <div>
              <label>Work Email *</label>
              <input type="email" placeholder="you@company.com" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </div>
            <div>
              <label>Company Name</label>
              <input type="text" placeholder="Acme Inc." value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
            </div>
            <div style={{ position: 'relative' }}>
              <label>Password *</label>
              <input
                type={showPass ? 'text' : 'password'}
                placeholder="Min. 8 characters"
                required
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                style={{ paddingRight: '3rem' }}
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                style={{ position: 'absolute', right: '0.75rem', bottom: '0.65rem', background: 'none', border: 'none', padding: 0, color: 'var(--text-muted-color)', cursor: 'pointer', boxShadow: 'none', transform: 'none' }}
              >
                {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {form.password && (
              <div style={{ marginTop: '-0.5rem', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', gap: '4px', marginBottom: '0.4rem' }}>
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} style={{ flex: 1, height: '4px', borderRadius: '2px', background: i <= strength ? strengthColors[strength] : 'var(--border-primary-color)', transition: 'background 0.3s' }} />
                  ))}
                </div>
                <span style={{ fontSize: '0.78rem', color: strengthColors[strength] }}>{strengthLabels[strength]}</span>
              </div>
            )}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', cursor: 'pointer', marginBottom: 0, fontWeight: 400, fontSize: '0.85rem', color: 'var(--text-muted-color)' }}>
                <input type="checkbox" style={{ width: 'auto', marginTop: '2px' }} required />
                I agree to the <a href="#" style={{ color: 'var(--brand-primary-color)', fontWeight: 600 }}>Terms of Service</a> and <a href="#" style={{ color: 'var(--brand-primary-color)', fontWeight: 600 }}>Privacy Policy</a>
              </label>
            </div>
            <Link to="/dashboard">
              <button type="submit" style={{ width: '100%', justifyContent: 'center' }}>
                Create Free Account <ArrowRight size={16} />
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
