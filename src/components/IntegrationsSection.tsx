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
        <div data-reveal="" style={{ position: 'relative', borderRadius: 24, background: 'linear-gradient(150deg,#F6F2FE,#FBFAFE 62%)', border: '1px solid #EFEBF7', padding: 26, overflow: 'hidden', minHeight: 400 }}>
          <div style={{ position: 'absolute', top: -90, right: -60, width: 320, height: 320, background: 'radial-gradient(circle,rgba(139,92,246,.20),transparent 68%)', pointerEvents: 'none' }} />
          {/* Foreground card */}
          <div style={{ position: 'relative', margin: '34px 0 34px auto', maxWidth: 300, background: '#fff', border: '1px solid #EFEBF7', borderRadius: 18, padding: '18px 20px', boxShadow: '0 34px 66px -34px rgba(35,20,70,.45),0 2px 6px -3px rgba(35,20,70,.1)' }}>
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
              <div key={item.name} style={{ border: '1px solid #ECE7F6', borderRadius: 14, padding: '14px 18px', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 20px -18px rgba(35,20,70,.45)' }}>
                <img src={item.src} alt={item.name.replace('\n', ' ')} style={{ height: 60, width: 'auto', objectFit: 'contain', display: 'block' }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
