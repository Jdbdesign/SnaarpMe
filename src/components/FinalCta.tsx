export default function FinalCta() {
  return (
    <section id="signup" style={{ padding: '80px 26px 80px', background: '#FBFAFE' }}>
      <div data-reveal="" style={{ maxWidth: 1440, margin: '0 auto', background: 'linear-gradient(115deg,#6D28D9 0%,#7C3AED 46%,#7C4DE0 78%,#A78BFA 100%)', borderRadius: 28, padding: 'clamp(30px,4vw,44px)', position: 'relative', overflow: 'hidden', display: 'flex', flexWrap: 'wrap', gap: 36, alignItems: 'center' }}>
        <div style={{ position: 'absolute', top: -140, left: '18%', width: 420, height: 420, background: 'radial-gradient(circle,rgba(255,255,255,.14),transparent 66%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -180, left: -60, width: 420, height: 420, background: 'radial-gradient(circle,rgba(14,164,122,.20),transparent 68%)', pointerEvents: 'none' }} />

        {/* Copy */}
        <div style={{ position: 'relative', flex: '1 1 340px', minWidth: 0 }}>
          <h2 style={{ fontFamily: "'Poppins',system-ui,sans-serif", fontSize: 'clamp(28px,3.6vw,42px)', lineHeight: 1.14, letterSpacing: '-.026em', fontWeight: 600, color: '#fff', margin: 0, maxWidth: 440 }}>Ready to schedule smarter?</h2>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: '#DDD3F5', margin: '16px 0 0', maxWidth: 400 }}>Join teams who&apos;ve stopped emailing back and forth to book a meeting.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 28 }}>
            <a href="#signup" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, padding: '14px 26px', borderRadius: 12, background: '#fff', color: '#6D28D9', fontSize: 16, fontWeight: 700, boxShadow: '0 16px 30px -18px rgba(0,0,0,.7)', transition: 'background 180ms ease' }}>
              Get started free
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6D28D9" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h13M12 5.5l6.5 6.5-6.5 6.5" /></svg>
            </a>
            <a href="#login" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, padding: '14px 26px', borderRadius: 12, border: '1px solid rgba(255,255,255,.4)', color: '#fff', fontSize: 16, fontWeight: 700, transition: 'background 180ms ease,border-color 180ms ease' }}>Log in</a>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px 18px', marginTop: 24 }}>
            {['Free forever', 'No credit card required'].map(t => (
              <span key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: '13.5px', color: '#DDD3F5' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#B9E9D8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 12.5l5 5 10-11" /></svg>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div style={{ position: 'relative', flex: '1 1 440px', minWidth: 0, display: 'grid', gridTemplateColumns: 'minmax(0,.86fr) minmax(0,1.14fr)', gap: 14, alignItems: 'stretch' }}>
          {/* Meeting booked card */}
          <div style={{ position: 'relative', borderRadius: 16, padding: 2, background: 'linear-gradient(150deg,#F59E0B,#EC4899 34%,#8B5CF6 68%,#22D3EE)', boxShadow: '0 26px 50px -30px rgba(0,0,0,.6)' }}>
            <div style={{ position: 'relative', height: '100%', background: '#fff', borderRadius: 14, padding: '18px 14px', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12, textAlign: 'center' }}>
              <span style={{ fontSize: '12.5px', fontWeight: 700, color: '#17131F' }}>Meeting Booked</span>
              <span style={{ width: 46, height: 46, borderRadius: 999, background: '#0EA47A', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 12px 24px -12px rgba(14,164,122,.95)' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 12.5l5 5 10-11" /></svg>
              </span>
              <span>
                <span style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: '#17131F' }}>Product Demo</span>
                <span style={{ display: 'block', fontSize: 11, color: '#645E75', fontFamily: "'Poppins',system-ui,sans-serif", marginTop: 3 }}>Today &middot; 10:00 AM</span>
              </span>
            </div>
          </div>

          {/* Booking link card */}
          <div style={{ background: '#fff', borderRadius: 16, padding: 18, boxShadow: '0 26px 50px -30px rgba(0,0,0,.6)', display: 'flex', flexDirection: 'column', gap: 14 }}>
            <span style={{ fontSize: '12.5px', fontWeight: 700, color: '#17131F' }}>Your booking link</span>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <span style={{ flex: 1, minWidth: 0, background: '#F7F5FC', border: '1px solid #EDE8F7', borderRadius: 10, padding: '10px 11px', fontFamily: "'Poppins',system-ui,sans-serif", fontSize: '11.5px', color: '#645E75', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>snaarp.me/alex</span>
              <button type="button" style={{ flexShrink: 0, padding: '10px 12px', borderRadius: 10, border: '1px solid #DED3F5', background: '#fff', color: '#7C3AED', fontSize: '11.5px', fontWeight: 700, cursor: 'pointer' }}>Copy link</button>
            </div>
            <div style={{ height: 1, background: '#F4F1FA' }} />
            <span style={{ fontSize: 11, color: '#645E75' }}>Syncs with</span>
            <div style={{ display: 'flex', gap: 9, flexWrap: 'wrap' }}>
              {['#F4F0FE', '#EAF2FE', '#EAF2FE', '#F2EFF9'].map((bg, i) => (
                <span key={i} style={{ width: 32, height: 32, borderRadius: 9, background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={i === 0 ? '#7C3AED' : i === 3 ? '#5A5468' : '#2563EB'} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="16" rx="3" /><path d="M3 10h18M8 3v4M16 3v4" /></svg>
                </span>
              ))}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 'auto', paddingTop: 4 }}>
              <span style={{ width: 7, height: 7, borderRadius: 999, background: '#0EA47A', flexShrink: 0 }} />
              <span style={{ fontSize: 11, color: '#645E75' }}>Live &middot; accepting bookings</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
