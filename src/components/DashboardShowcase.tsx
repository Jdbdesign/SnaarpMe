export default function DashboardShowcase() {
  return (
    <section id="dashboard" style={{ padding: '80px 26px', background: 'linear-gradient(180deg,#FBFAFE,#fff 70%)', borderTop: '1px solid #F2EFF9', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 70, right: -40, width: 280, height: 240, opacity: 0.55, backgroundImage: 'radial-gradient(#DED3F5 1.4px,transparent 1.4px)', backgroundSize: '15px 15px', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', maxWidth: 1440, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 52, alignItems: 'center' }}>
        {/* Dashboard mockup */}
        <div data-reveal="" style={{ flex: '1 1 520px', minWidth: 0, display: 'flex', background: '#fff', border: '1px solid #ECE7F6', borderRadius: 20, overflow: 'hidden', boxShadow: '0 44px 84px -48px rgba(35,20,70,.5),0 2px 6px -3px rgba(35,20,70,.08)' }}>
          {/* Sidebar */}
          <div style={{ width: 58, flexShrink: 0, background: 'linear-gradient(170deg,#7C3AED,#6D28D9)', padding: '14px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 11 }}>
            <SidebarIcon active>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="16" rx="3" /><path d="M3 10h18M8 3v4M16 3v4" /></svg>
            </SidebarIcon>
            <SidebarIcon>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h18M3 6h18M3 18h18" /></svg>
            </SidebarIcon>
            <SidebarIcon>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
            </SidebarIcon>
            <SidebarIcon>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></svg>
            </SidebarIcon>
            <SidebarIcon>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="M18 9l-5 5-2-2-4 4" /></svg>
            </SidebarIcon>
            <SidebarIcon>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1.08-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 3 15.1a1.65 1.65 0 0 0-1.51-1H1a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 2.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9c.2.58.76 1 1.4 1.01H21a2 2 0 0 1 0 4h-.09" /></svg>
            </SidebarIcon>
          </div>
          {/* Main */}
          <div style={{ flex: 1, minWidth: 0, padding: '16px 16px 18px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ width: 22, height: 22, borderRadius: 7, background: '#F4F0FE', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="7.5" height="7.5" rx="2" /><rect x="13.5" y="4" width="7.5" height="7.5" rx="2" /><rect x="3" y="13" width="7.5" height="7.5" rx="2" /><rect x="13.5" y="13" width="7.5" height="7.5" rx="2" /></svg>
              </span>
              <span style={{ fontSize: '13.5px', fontWeight: 700, color: '#17131F' }}>Dashboard</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.55fr) minmax(0,1fr)', gap: 12, marginTop: 14, alignItems: 'start' }}>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontFamily: "'Poppins',system-ui,sans-serif", fontSize: 17, fontWeight: 600, color: '#17131F', letterSpacing: '-.012em' }}>Welcome back, Alex</div>
                <div style={{ fontSize: '11.5px', color: '#645E75', marginTop: 4 }}>Here&apos;s what&apos;s happening with your meetings today.</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,minmax(0,1fr))', gap: 8, marginTop: 13 }}>
                  <StatChip val="12" label="Meetings today" border="#EDE7FA" bg="#FAF8FE" color="#7C3AED" />
                  <StatChip val="6" label="Confirmed" border="#D9F2E9" bg="#F4FCF9" color="#0B7A5B" />
                  <StatChip val="2" label="Pending" border="#F7E8CE" bg="#FFFAF2" color="#B26A00" />
                  <StatChip val="1" label="No-shows" border="#F8DCE1" bg="#FFF7F8" color="#C2334D" />
                </div>
              </div>
              <div style={{ minWidth: 0, border: '1px solid #ECE7F6', borderRadius: 14, padding: 13, background: '#fff' }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#17131F' }}>Team Stand-up</div>
                <div style={{ fontSize: 11, color: '#645E75', marginTop: 3 }}>Daily sync and updates</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginTop: 11, paddingTop: 11, borderTop: '1px solid #F4F1FA' }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#8A8599" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="8.6" /><path d="M12 7.6V12l3 2" /></svg>
                  <span style={{ fontSize: '11.5px', color: '#40394F', fontFamily: "'Poppins',system-ui,sans-serif" }}>10:00 – 10:30</span>
                </div>
                <div style={{ display: 'flex', gap: 7, marginTop: 11 }}>
                  <span style={{ flex: 1, textAlign: 'center', padding: 9, borderRadius: 10, background: '#7C3AED', color: '#fff', fontSize: 12, fontWeight: 700 }}>Join meeting</span>
                </div>
              </div>
            </div>
            {/* Chart placeholder */}
            <div style={{ marginTop: 12, border: '1px solid #ECE7F6', borderRadius: 14, padding: 13 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
                <span style={{ fontSize: '12.5px', fontWeight: 700, color: '#17131F' }}>Bookings</span>
                <span style={{ fontSize: '10.5px', color: '#645E75', padding: '4px 8px', borderRadius: 7, background: '#F7F5FC' }}>This week</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 7, marginTop: 9 }}>
                <span style={{ fontFamily: "'Poppins',system-ui,sans-serif", fontSize: 19, fontWeight: 700, color: '#17131F', lineHeight: 1 }}>74</span>
                <span style={{ fontSize: '10.5px', fontWeight: 700, color: '#0B7A5B' }}>+18% vs last week</span>
              </div>
              <svg viewBox="0 0 280 108" preserveAspectRatio="none" style={{ width: '100%', height: 108, display: 'block', marginTop: 8 }} aria-hidden="true">
                <defs><linearGradient id="smBk" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#8B5CF6" stopOpacity=".26" /><stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" /></linearGradient></defs>
                <path d="M6 86 C28 84 30 42 52 42 C74 42 74 74 96 74 C118 74 118 34 140 34 C162 34 160 66 182 70 C204 74 206 80 228 82 C250 84 252 78 274 78 L274 104 L6 104 Z" fill="url(#smBk)" />
                <path d="M6 86 C28 84 30 42 52 42 C74 42 74 74 96 74 C118 74 118 34 140 34 C162 34 160 66 182 70 C204 74 206 80 228 82 C250 84 252 78 274 78" fill="none" stroke="#7C3AED" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="52" cy="42" r="4" fill="#7C3AED" stroke="#fff" strokeWidth="2.4" />
                <circle cx="96" cy="74" r="4" fill="#7C3AED" stroke="#fff" strokeWidth="2.4" />
                <circle cx="140" cy="34" r="4.6" fill="#7C3AED" stroke="#fff" strokeWidth="2.8" />
                <circle cx="228" cy="82" r="4" fill="#7C3AED" stroke="#fff" strokeWidth="2.4" />
              </svg>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 5 }}>
                {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(d => <span key={d} style={{ fontSize: '9.5px', color: '#B4AEC2', fontFamily: "'Poppins',system-ui,sans-serif" }}>{d}</span>)}
              </div>
            </div>
          </div>
        </div>

        {/* Copy */}
        <div style={{ flex: '1 1 360px', minWidth: 0 }}>
          <span data-reveal="" style={{ fontSize: '12.5px', letterSpacing: '.14em', fontWeight: 700, color: '#7C3AED' }}>SEE YOUR SCHEDULING, NOT JUST YOUR CALENDAR</span>
          <h2 data-reveal="" data-reveal-delay="60" style={{ fontFamily: "'Poppins',system-ui,sans-serif", fontSize: 'clamp(28px,3.3vw,42px)', lineHeight: 1.16, letterSpacing: '-.024em', fontWeight: 600, color: '#17131F', margin: '16px 0 0' }}>A dashboard that actually tells you something.</h2>
          <p data-reveal="" data-reveal-delay="110" style={{ fontSize: 17, lineHeight: 1.62, color: '#5A5468', margin: '16px 0 0', maxWidth: 490 }}>See booking trends, popular time slots, and no-show rates at a glance — not just a list of events.</p>
          <ul data-reveal="" data-reveal-delay="170" style={{ margin: '30px 0 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 22, maxWidth: 490 }}>
            <DashFeature icon="clock" title="Real-time availability" desc="Always up to date, converted to your invitee's time zone." />
            <DashFeature icon="calendar" title="Calendar sync" desc="Seamless two-way sync with Google Calendar and Outlook." />
            <DashFeature icon="bell" title="Smart reminders" desc="Cut no-shows with automated email and SMS nudges." />
            <DashFeature icon="chart" title="Analytics & insights" desc="Spot your busiest hours and where meetings quietly leak time." />
          </ul>
          <a data-reveal="" data-reveal-delay="230" href="#how" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, marginTop: 28, fontSize: 16, fontWeight: 700, color: '#7C3AED' }}>
            See how it works
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h13M12 5.5l6.5 6.5-6.5 6.5" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}

function SidebarIcon({ active, children }: { active?: boolean; children: React.ReactNode }) {
  return (
    <span style={{ width: 34, height: 34, borderRadius: 10, background: active ? 'rgba(255,255,255,.96)' : 'rgba(255,255,255,.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      {children}
    </span>
  );
}

function StatChip({ val, label, border, bg, color }: { val: string; label: string; border: string; bg: string; color: string }) {
  return (
    <div style={{ minWidth: 0, border: `1px solid ${border}`, borderRadius: 12, padding: '10px 8px', background: bg }}>
      <span style={{ display: 'block', fontFamily: "'Poppins',system-ui,sans-serif", fontSize: 21, fontWeight: 700, color, lineHeight: 1 }}>{val}</span>
      <span style={{ display: 'block', fontSize: 10, color: '#645E75', marginTop: 5, lineHeight: 1.3 }}>{label}</span>
    </div>
  );
}

function DashFeature({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  const icons: Record<string, React.ReactNode> = {
    clock: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="8.6" /><path d="M12 7.6V12l3 2" /></svg>,
    calendar: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="16" rx="3" /><path d="M3 10h18M8 3v4M16 3v4" /></svg>,
    bell: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>,
    chart: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="M18 9l-5 5-2-2-4 4" /></svg>,
  };
  return (
    <li style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
      <span style={{ width: 38, height: 38, borderRadius: 11, background: '#F4F0FE', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        {icons[icon] || icons.clock}
      </span>
      <span style={{ minWidth: 0 }}>
        <span style={{ display: 'block', fontSize: '16.5px', fontWeight: 700, color: '#17131F' }}>{title}</span>
        <span style={{ display: 'block', fontSize: 15, lineHeight: 1.55, color: '#5A5468', marginTop: 4 }}>{desc}</span>
      </span>
    </li>
  );
}
