import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Zap, Eye, EyeOff, ArrowRight } from 'lucide-react';

export default function Login() {
  const [showPass, setShowPass] = useState(false);
  const [form, setForm] = useState({ email: '', password: '' });

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
      <div style={{ position: 'absolute', bottom: '-200px', left: '-200px', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ width: '100%', maxWidth: '440px', position: 'relative', zIndex: 1 }}>
        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.35rem', fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif', color: 'var(--brand-primary-color)' }}>
            <Zap size={24} strokeWidth={2.5} />
            NexusDigital
          </Link>
          <p style={{ color: '#64748b', fontSize: '0.875rem', marginTop: '0.5rem' }}>Sign in to your account</p>
        </div>

        <div className="form-container" style={{ maxWidth: '100%' }}>
          <h3 style={{ textAlign: 'center', marginBottom: '0.5rem' }}>Welcome back</h3>
          <p style={{ textAlign: 'center', color: 'var(--text-muted-color)', fontSize: '0.875rem', marginBottom: '2rem' }}>
            Don't have an account? <Link to="/signup" style={{ color: 'var(--brand-primary-color)', fontWeight: 600 }}>Sign up free</Link>
          </p>

          <form onSubmit={(e) => e.preventDefault()}>
            <div>
              <label>Email Address</label>
              <input
                type="email"
                placeholder="you@company.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>
            <div style={{ position: 'relative' }}>
              <label>Password</label>
              <input
                type={showPass ? 'text' : 'password'}
                placeholder="Enter your password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
                style={{ paddingRight: '3rem' }}
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                style={{
                  position: 'absolute', right: '0.75rem', bottom: '0.65rem',
                  background: 'none', border: 'none', padding: '0',
                  color: 'var(--text-muted-color)', cursor: 'pointer',
                  boxShadow: 'none', transform: 'none',
                }}
              >
                {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer', marginBottom: 0 }}>
                <input type="checkbox" style={{ width: 'auto' }} /> Remember me
              </label>
              <a href="#" style={{ fontSize: '0.875rem', color: 'var(--brand-primary-color)' }}>Forgot password?</a>
            </div>
            <Link to="/dashboard">
              <button type="submit" style={{ width: '100%', justifyContent: 'center' }}>
                Sign In <ArrowRight size={16} />
              </button>
            </Link>
          </form>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '1.5rem 0' }}>
            <div style={{ flex: 1, height: '1px', background: 'var(--border-primary-color)' }} />
            <span style={{ color: 'var(--text-muted-color)', fontSize: '0.8rem' }}>or continue with</span>
            <div style={{ flex: 1, height: '1px', background: 'var(--border-primary-color)' }} />
          </div>

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            {['Google', 'Microsoft'].map((provider) => (
              <button
                key={provider}
                style={{
                  flex: 1, background: 'var(--bg-main)',
                  border: '1px solid var(--border-primary-color)',
                  color: 'var(--text-secondary-color)',
                  justifyContent: 'center',
                }}
              >
                {provider}
              </button>
            ))}
          </div>
        </div>

        <p style={{ textAlign: 'center', color: '#475569', fontSize: '0.78rem', marginTop: '1.5rem' }}>
          By signing in, you agree to our{' '}
          <a href="#" style={{ color: '#64748b', textDecoration: 'underline' }}>Terms</a>{' '}
          and{' '}
          <a href="#" style={{ color: '#64748b', textDecoration: 'underline' }}>Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
}
