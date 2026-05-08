export default function Footer() {
  return (
    <footer
      style={{
        background: '#0f172a',
        color: '#cbd5e1',
        padding: '2rem 1rem',
        borderTop: '1px solid #1e293b',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ marginTop: '1rem' }}>
          <p style={{ color: '#64748b', fontSize: '0.8rem', marginBottom: '0.5rem' }}>Subscribe to newsletter</p>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <input
              type="email"
              placeholder="Your email"
              style={{
                flex: 1,
                padding: '0.5rem 0.75rem',
                borderRadius: '8px',
                border: '1px solid #334155',
                background: '#1e293b',
                color: '#e2e8f0',
                fontSize: '0.85rem',
                width: 'auto',
              }}
            />
            <button style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', flexShrink: 0 }}>Go</button>
          </div>
        </div>
      </div>

      <div
        style={{
          borderTop: '1px solid #1e293b',
          paddingTop: '1.5rem',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <p style={{ margin: 0, color: '#475569', fontSize: '0.85rem' }}>
          © 2026 NexusDigital. All rights reserved.
        </p>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="#" style={{ fontSize: '0.85rem', display: 'inline' }}>Privacy Policy</a>
          <a href="#" style={{ fontSize: '0.85rem', display: 'inline' }}>Terms of Service</a>
          <a href="#" style={{ fontSize: '0.85rem', display: 'inline' }}>Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}