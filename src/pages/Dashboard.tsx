import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  TrendingUp, Users, Target, Mail, BarChart2,
  ArrowUpRight, ArrowDownRight, Bell, Settings,
  LogOut, Search, Plus, Eye,
} from 'lucide-react';

const kpis = [
  { label: 'Organic Traffic', value: '24,892', change: '+18.2%', up: true, icon: TrendingUp },
  { label: 'Leads Generated', value: '1,247', change: '+12.5%', up: true, icon: Users },
  { label: 'Active Campaigns', value: '8', change: '+2 this month', up: true, icon: Target },
  { label: 'Email Open Rate', value: '41.6%', change: '-0.8%', up: false, icon: Mail },
];

const campaigns = [
  { name: 'Google Search – Brand', channel: 'PPC', status: 'Active', spend: '$4,200', roas: '4.8x', leads: 184, trend: 'up' },
  { name: 'SEO Content Cluster Q2', channel: 'SEO', status: 'Active', spend: '—', roas: '—', leads: 342, trend: 'up' },
  { name: 'LinkedIn Lead Gen', channel: 'Social', status: 'Active', spend: '$1,800', roas: '3.1x', leads: 67, trend: 'up' },
  { name: 'Welcome Email Sequence', channel: 'Email', status: 'Active', spend: '—', roas: '—', leads: 89, trend: 'down' },
  { name: 'Meta Retargeting', channel: 'PPC', status: 'Paused', spend: '$620', roas: '2.4x', leads: 31, trend: 'down' },
];

const activities = [
  { text: 'New lead from Google Ads campaign', time: '2 min ago', type: 'success' },
  { text: 'SEO ranking update: +3 positions for "digital marketing agency"', time: '1 hour ago', type: 'info' },
  { text: 'Email campaign "May Newsletter" sent to 12,400 subscribers', time: '3 hours ago', type: 'info' },
  { text: 'Campaign "Meta Retargeting" budget limit reached', time: '5 hours ago', type: 'warning' },
  { text: 'Monthly report generated and emailed to your team', time: '1 day ago', type: 'success' },
];

const alertColors: Record<string, string> = {
  success: '#22c55e',
  info: 'var(--brand-primary-color)',
  warning: '#f59e0b',
};

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg-main)' }}>
      {/* SIDEBAR */}
      <aside style={{
        width: '240px',
        background: '#0b1120',
        display: 'flex',
        flexDirection: 'column',
        padding: '0',
        flexShrink: 0,
        position: 'sticky',
        top: 0,
        height: '100vh',
      }}>
        <div style={{ padding: '1.5rem 1.5rem 1rem', borderBottom: '1px solid #1e293b' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--brand-primary-color)', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '1.1rem', textDecoration: 'none' }}>
            <TrendingUp size={20} strokeWidth={2.5} />
            NexusDigital
          </Link>
        </div>

        <nav style={{ flex: 1, padding: '1.25rem 0.75rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          {[
            { id: 'overview', label: 'Overview', icon: BarChart2 },
            { id: 'campaigns', label: 'Campaigns', icon: Target },
            { id: 'traffic', label: 'Traffic', icon: TrendingUp },
            { id: 'leads', label: 'Leads', icon: Users },
            { id: 'email', label: 'Email', icon: Mail },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.65rem 1rem',
                borderRadius: '10px',
                background: activeTab === item.id ? 'rgba(14,165,233,0.15)' : 'transparent',
                color: activeTab === item.id ? 'var(--brand-third-color)' : '#64748b',
                border: 'none',
                fontWeight: activeTab === item.id ? 600 : 400,
                fontSize: '0.9rem',
                cursor: 'pointer',
                width: '100%',
                textAlign: 'left',
                transition: 'all 0.2s ease',
                boxShadow: 'none',
                transform: 'none',
              }}
            >
              <item.icon size={18} />
              {item.label}
            </button>
          ))}
        </nav>

        <div style={{ padding: '1rem 0.75rem', borderTop: '1px solid #1e293b', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          <button style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.65rem 1rem', borderRadius: '10px', background: 'transparent', color: '#64748b', border: 'none', fontWeight: 400, fontSize: '0.9rem', width: '100%', textAlign: 'left', cursor: 'pointer', boxShadow: 'none', transform: 'none' }}>
            <Settings size={18} /> Settings
          </button>
          <Link to="/login" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.65rem 1rem', borderRadius: '10px', color: '#ef4444', fontSize: '0.9rem' }}>
            <LogOut size={18} /> Sign Out
          </Link>
        </div>
      </aside>

      {/* MAIN */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'auto' }}>
        {/* TOP BAR */}
        <header style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '1rem 2rem', background: 'var(--bg-card)',
          borderBottom: '1px solid var(--border-primary-color)', gap: '1rem',
          position: 'sticky', top: 0, zIndex: 10,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1, maxWidth: '400px' }}>
            <Search size={16} color="var(--text-muted-color)" />
            <input type="text" placeholder="Search campaigns, reports..." style={{ border: 'none', background: 'transparent', fontSize: '0.9rem', flex: 1, outline: 'none', color: 'var(--text-primary-color)' }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button style={{ background: 'none', color: 'var(--text-muted-color)', border: 'none', padding: '0.4rem', boxShadow: 'none', transform: 'none', position: 'relative' }}>
              <Bell size={20} />
              <span style={{ position: 'absolute', top: '2px', right: '2px', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--brand-primary-color)' }} />
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--brand-primary-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: '0.875rem' }}>AC</div>
              <div>
                <p style={{ margin: 0, fontWeight: 600, fontSize: '0.875rem', color: 'var(--text-primary-color)' }}>Alex Chen</p>
                <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--text-muted-color)' }}>Admin</p>
              </div>
            </div>
          </div>
        </header>

        {/* CONTENT */}
        <main style={{ padding: '2rem', flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h2 style={{ margin: 0 }}>Dashboard Overview</h2>
              <p style={{ margin: 0, color: 'var(--text-muted-color)', fontSize: '0.875rem' }}>May 1–6, 2026 · Compared to last period</p>
            </div>
            <button><Plus size={16} /> New Campaign</button>
          </div>

          {/* KPI CARDS */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', marginBottom: '2rem' }}>
            {kpis.map((kpi) => (
              <div key={kpi.label} style={{
                flex: '1 1 200px', background: 'var(--bg-card)',
                border: '1px solid var(--border-primary-color)',
                borderRadius: '16px', padding: '1.5rem',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all 0.3s ease',
              }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--shadow-md)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--shadow-sm)'; }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <p style={{ margin: '0 0 0.5rem', fontSize: '0.8rem', color: 'var(--text-muted-color)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{kpi.label}</p>
                    <h2 style={{ margin: 0, fontSize: '1.75rem', fontFamily: 'Space Grotesk, sans-serif' }}>{kpi.value}</h2>
                  </div>
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'var(--brand-fourth-color)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <kpi.icon size={20} color="var(--brand-primary-color)" />
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', marginTop: '0.75rem' }}>
                  {kpi.up ? <ArrowUpRight size={14} color="#22c55e" /> : <ArrowDownRight size={14} color="#ef4444" />}
                  <span style={{ fontSize: '0.825rem', color: kpi.up ? '#22c55e' : '#ef4444', fontWeight: 600 }}>{kpi.change}</span>
                </div>
              </div>
            ))}
          </div>

          {/* CAMPAIGNS TABLE + ACTIVITY */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
            {/* TABLE */}
            <div style={{ flex: '2 1 400px', background: 'var(--bg-card)', border: '1px solid var(--border-primary-color)', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--border-muted-color)' }}>
                <h4 style={{ margin: 0 }}>Active Campaigns</h4>
                <button className="tiny-button border-button"><Eye size={12} /> View All</button>
              </div>
              <div className="table-container" style={{ margin: 0 }}>
                <table style={{ minWidth: '500px' }}>
                  <thead>
                    <tr>
                      <th>Campaign</th>
                      <th>Channel</th>
                      <th>Status</th>
                      <th>Leads</th>
                      <th>ROAS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {campaigns.map((c) => (
                      <tr key={c.name}>
                        <td style={{ fontWeight: 500, maxWidth: '180px' }}>{c.name}</td>
                        <td><span className="badge">{c.channel}</span></td>
                        <td>
                          <span className={`badge ${c.status === 'Active' ? 'badge-success' : 'badge-error'}`}>
                            {c.status}
                          </span>
                        </td>
                        <td style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                          {c.leads}
                          {c.trend === 'up'
                            ? <ArrowUpRight size={13} color="#22c55e" />
                            : <ArrowDownRight size={13} color="#ef4444" />}
                        </td>
                        <td>{c.roas}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* ACTIVITY */}
            <div style={{ flex: '1 1 260px', background: 'var(--bg-card)', border: '1px solid var(--border-primary-color)', borderRadius: '16px', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--border-muted-color)' }}>
                <h4 style={{ margin: 0 }}>Recent Activity</h4>
              </div>
              <div style={{ padding: '1rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {activities.map((a, i) => (
                  <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: alertColors[a.type], marginTop: '0.4rem', flexShrink: 0 }} />
                    <div>
                      <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary-color)', lineHeight: '1.4' }}>{a.text}</p>
                      <p style={{ margin: '0.2rem 0 0', fontSize: '0.75rem', color: 'var(--text-muted-color)' }}>{a.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
