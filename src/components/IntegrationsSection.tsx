export default function IntegrationsSection() {
  const integrations = [
    { name: 'Google\nCalendar', src: '/assets/integrations/google-calendar.svg' },
    { name: 'Outlook', src: '/assets/integrations/outlook.svg' },
    { name: 'Zoom', src: '/assets/integrations/zoom.svg' },
    { name: 'Google\nMeet', src: '/assets/integrations/google-meet.svg' },
    { name: 'Slack', src: '/assets/integrations/slack.svg' },
  ];

  return (
    <section id="integrations" style={{ padding: '80px 26px', background: '#fff' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(380px,1fr))', gap: 56, alignItems: 'center' }}>
        {/* Left: connected calendars card */}
        <div data-reveal="" style={{ position: 'relative', borderRadius: 24, background: 'linear-gradient(150deg,#F6F2FE,#FBFAFE 62%)', border: '1px solid #EFEBF7', padding: 26, overflow: 'hidden', minHeight: 400, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, alignItems: 'start' }}>
          <div style={{ position: 'absolute', top: -90, right: -60, width: 320, height: 320, background: 'radial-gradient(circle,rgba(139,92,246,.20),transparent 68%)', pointerEvents: 'none' }} />

          {/* Left column widgets */}
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 14 }}>
            {/* Sync activity widget */}
            <div style={{ background: '#fff', border: '1px solid #EFEBF7', borderRadius: 14, padding: '14px 16px', boxShadow: '0 12px 30px -16px rgba(35,20,70,.3)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                <span style={{ width: 8, height: 8, borderRadius: 999, background: '#0EA47A', animation: 'smPulse 2s ease-in-out infinite' }} />
                <span style={{ fontSize: 12, fontWeight: 700, color: '#17131F' }}>Live sync</span>
                <span style={{ marginLeft: 'auto', fontSize: 10, color: '#A9A4B8' }}>Real-time</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ width: 24, height: 24, borderRadius: 6, background: '#F4F0FE', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="16" rx="3" /><path d="M3 10h18" /></svg>
                  </span>
                  <span style={{ fontSize: 11, color: '#5A5468' }}>3 events synced</span>
                  <span style={{ marginLeft: 'auto', fontSize: 10, color: '#A9A4B8' }}>2s ago</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ width: 24, height: 24, borderRadius: 6, background: '#EAF2FE', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="16" rx="3" /><path d="M3 10h18" /></svg>
                  </span>
                  <span style={{ fontSize: 11, color: '#5A5468' }}>1 event synced</span>
                  <span style={{ marginLeft: 'auto', fontSize: 10, color: '#A9A4B8' }}>5s ago</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ width: 24, height: 24, borderRadius: 6, background: '#F2EFF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#5A5468" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="16" rx="3" /><path d="M3 10h18" /></svg>
                  </span>
                  <span style={{ fontSize: 11, color: '#5A5468' }}>2 events synced</span>
                  <span style={{ marginLeft: 'auto', fontSize: 10, color: '#A9A4B8' }}>12s ago</span>
                </div>
              </div>
            </div>

            {/* Video link auto-generated widget */}
            <div style={{ background: '#fff', border: '1px solid #EFEBF7', borderRadius: 14, padding: '14px 16px', boxShadow: '0 12px 30px -16px rgba(35,20,70,.3)' }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: '#17131F', marginBottom: 10 }}>Auto-generated links</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 10px', background: '#F9F7FE', borderRadius: 9 }}>
                  <span style={{ width: 22, height: 22, borderRadius: 6, background: '#E8F5E9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#0EA47A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M15 10l-4 4" /><path d="M8 14l-2 2" /><path d="M18 6l-2 2" /></svg>
                  </span>
                  <span style={{ fontSize: 11, color: '#5A5468', flex: 1 }}>Zoom link added</span>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#0EA47A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 12.5l5 5 10-11" /></svg>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 10px', background: '#F9F7FE', borderRadius: 9 }}>
                  <span style={{ width: 22, height: 22, borderRadius: 6, background: '#E8F5E9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#0EA47A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M15 10l-4 4" /><path d="M8 14l-2 2" /><path d="M18 6l-2 2" /></svg>
                  </span>
                  <span style={{ fontSize: 11, color: '#5A5468', flex: 1 }}>Meet link added</span>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#0EA47A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 12.5l5 5 10-11" /></svg>
                </div>
              </div>
            </div>

            {/* Notification toast widget */}
            <div style={{ background: '#fff', border: '1px solid #EFEBF7', borderRadius: 14, padding: '12px 16px', boxShadow: '0 12px 30px -16px rgba(35,20,70,.3)', display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 28, height: 28, borderRadius: 8, background: '#F4F0FE', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
              </span>
              <span style={{ fontSize: 11, color: '#5A5468', lineHeight: 1.4 }}>
                <span style={{ fontWeight: 700, color: '#17131F' }}>Slack notification sent</span><br />
                Reminder: Team stand-up in 15 min
              </span>
            </div>
          </div>

          {/* Right column: Connected Calendars */}
          <div style={{ position: 'relative', background: '#fff', border: '1px solid #EFEBF7', borderRadius: 18, padding: '18px 20px', boxShadow: '0 34px 66px -34px rgba(35,20,70,.45),0 2px 6px -3px rgba(35,20,70,.1)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: 6 }}>
              <span style={{ fontSize: 15, fontWeight: 700, color: '#17131F' }}>Connected Calendars</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#8A8599" strokeWidth="2.4" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
            </div>
            {[
              { name: 'Google Calendar', bg: '#F4F0FE', stroke: '#7C3AED' },
              { name: 'Outlook Calendar', bg: '#EAF2FE', stroke: '#2563EB' },
              { name: 'Apple Calendar', bg: '#F2EFF9', stroke: '#5A5468' },
            ].map(cal => (
              <div key={cal.name} style={{ display: 'flex', alignItems: 'center', gap: 13, padding: '14px 4px', borderBottom: '1px solid #F4F1FA' }}>
                <span style={{ width: 32, height: 32, borderRadius: 9, background: cal.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={cal.stroke} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="16" rx="3" /><path d="M3 10h18M8 3v4M16 3v4" /></svg>
                </span>
                <span style={{ flex: 1, fontSize: 14, color: '#2B2438' }}>{cal.name}</span>
                <span style={{ width: 21, height: 21, borderRadius: 999, background: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 12.5l5 5 10-11" /></svg>
                </span>
              </div>
            ))}
            <div style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '14px 4px 2px' }}>
              <span style={{ width: 32, height: 32, borderRadius: 9, border: '1.5px dashed #DED3F5', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="3" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
              </span>
              <span style={{ fontSize: '13.5px', fontWeight: 700, color: '#7C3AED' }}>Connect another</span>
            </div>
          </div>
        </div>

        {/* Right: copy + tile grid */}
        <div>
          <span data-reveal="" style={{ display: 'inline-flex', alignItems: 'center', padding: '7px 14px', borderRadius: 8, background: '#F4F0FE', color: '#6D28D9', fontSize: '12.5px', fontWeight: 700, letterSpacing: '.12em' }}>INTEGRATIONS</span>
          <h2 data-reveal="" data-reveal-delay="60" style={{ fontFamily: "'Poppins',system-ui,sans-serif", fontSize: 'clamp(28px,3.2vw,40px)', lineHeight: 1.16, letterSpacing: '-.024em', fontWeight: 600, color: '#17131F', margin: '18px 0 0' }}>Works with the tools you already use.</h2>
          <p data-reveal="" data-reveal-delay="120" style={{ fontSize: 17, lineHeight: 1.62, color: '#5A5468', margin: '16px 0 0', maxWidth: 480 }}>Two-way calendar sync, video links generated automatically, and payments where you need them.</p>
          <div data-reveal="" data-reveal-delay="180" style={{ marginTop: 30, display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' }}>
            {integrations.map(item => (
              <div key={item.name} data-hover-icon="" style={{ border: '1px solid #ECE7F6', borderRadius: 14, padding: '14px 18px', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 20px -18px rgba(35,20,70,.45)' }}>
                <img src={item.src} alt={item.name.replace('\n', ' ')} style={{ height: 60, width: 'auto', objectFit: 'contain', display: 'block' }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
