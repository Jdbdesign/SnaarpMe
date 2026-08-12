export default function HowItWorks() {
  return (
    <section id="how" style={{ padding: '80px 26px 80px', background: '#FBFAFE', borderTop: '1px solid #F2EFF9', borderBottom: '1px solid #F2EFF9' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto' }}>
        <div data-reveal="" style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
          <span style={{ fontSize: '12.5px', letterSpacing: '.14em', fontWeight: 700, color: '#7C3AED' }}>HOW SNAARPME WORKS</span>
          <h2 style={{ fontFamily: "'Poppins',system-ui,sans-serif", fontSize: 'clamp(30px,3.4vw,42px)', lineHeight: 1.16, letterSpacing: '-.024em', fontWeight: 600, color: '#17131F', margin: '14px 0 0' }}>Three steps. Then it runs itself.</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 22, marginTop: 40 }}>
          {/* Step 1: Share your link */}
          <article data-reveal="" data-reveal-delay={60} style={{ background: '#fff', border: '1px solid #ECE7F6', borderRadius: 20, padding: 24, boxShadow: '0 20px 44px -34px rgba(35,20,70,.35)' }}>
            <div style={{ minHeight: 172, overflow: 'hidden', borderRadius: 14, background: '#FAF8FE', border: '1px solid #F0ECF9', padding: 14, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10 }}>
              {/* Slack-style message card */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ width: 24, height: 24, borderRadius: 6, background: '#7C3AED', color: '#fff', fontSize: 9, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>PS</span>
                <span style={{ fontSize: 12, fontWeight: 700, color: '#17131F' }}>#design-team</span>
              </div>
              <div style={{ background: '#fff', border: '1px solid #ECE7F6', borderRadius: 10, padding: '10px 12px' }}>
                <p style={{ fontSize: 12, color: '#5A5468', margin: '0 0 8px' }}>Grab a slot whenever suits — <span style={{ color: '#7C3AED', fontWeight: 600 }}>snaarp.me/priya</span></p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 10px', background: '#FAF8FE', border: '1px solid #F0ECF9', borderRadius: 8 }}>
                  <span style={{ width: 8, height: 8, borderRadius: 999, background: '#7C3AED' }} />
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: '#17131F' }}>Priya Shah · Intro call</div>
                    <div style={{ fontSize: 10, color: '#8A8599' }}>30 min · Video</div>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <span style={{ padding: '5px 14px', borderRadius: 8, background: '#7C3AED', color: '#fff', fontSize: 11, fontWeight: 700 }}>Send</span>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginTop: 20 }}>
              <span style={{ fontFamily: "'Poppins',system-ui,sans-serif", fontSize: 13, color: '#7C3AED', fontWeight: 700 }}>01</span>
              <h3 style={{ fontFamily: "'Poppins',system-ui,sans-serif", fontSize: 20, fontWeight: 600, color: '#17131F', margin: 0, letterSpacing: '-.01em' }}>Share your link</h3>
            </div>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: '#5A5468', margin: '9px 0 0' }}>One link. Share it in an email, a Slack message, or your bio — no back-and-forth required.</p>
          </article>

          {/* Step 2: They pick a time */}
          <article data-reveal="" data-reveal-delay={130} style={{ background: '#fff', border: '1px solid #ECE7F6', borderRadius: 20, padding: 24, boxShadow: '0 20px 44px -34px rgba(35,20,70,.35)' }}>
            <div style={{ minHeight: 172, overflow: 'hidden', borderRadius: 14, background: '#FAF8FE', border: '1px solid #F0ECF9', padding: 14, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.08em', color: '#8A8599' }}>SELECT A TIME</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: '#17131F' }}>Tuesday, 15 September</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 6, width: '100%', maxWidth: 200 }}>
                <span style={{ textAlign: 'center', padding: '7px 0', borderRadius: 8, border: '1px solid #E9E4F2', fontSize: 12, fontWeight: 600, color: '#17131F' }}>09:00</span>
                <span style={{ textAlign: 'center', padding: '7px 0', borderRadius: 8, background: '#7C3AED', color: '#fff', fontSize: 12, fontWeight: 700 }}>10:00</span>
                <span style={{ textAlign: 'center', padding: '7px 0', borderRadius: 8, border: '1px solid #E9E4F2', fontSize: 12, fontWeight: 600, color: '#17131F' }}>11:00</span>
                <span style={{ textAlign: 'center', padding: '7px 0', borderRadius: 8, border: '1px solid #E9E4F2', fontSize: 12, fontWeight: 600, color: '#17131F' }}>13:00</span>
              </div>
              <span style={{ padding: '6px 18px', borderRadius: 999, background: '#7C3AED', color: '#fff', fontSize: 11, fontWeight: 700 }}>Confirm 10:00 – 10:30</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginTop: 20 }}>
              <span style={{ fontFamily: "'Poppins',system-ui,sans-serif", fontSize: 13, color: '#7C3AED', fontWeight: 700 }}>02</span>
              <h3 style={{ fontFamily: "'Poppins',system-ui,sans-serif", fontSize: 20, fontWeight: 600, color: '#17131F', margin: 0, letterSpacing: '-.01em' }}>They pick a time</h3>
            </div>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: '#5A5468', margin: '9px 0 0' }}>Invitees see your real availability and book instantly — no &quot;does Tuesday work?&quot; emails.</p>
          </article>

          {/* Step 3: It's on both calendars */}
          <article data-reveal="" data-reveal-delay={200} style={{ background: '#fff', border: '1px solid #ECE7F6', borderRadius: 20, padding: 24, boxShadow: '0 20px 44px -34px rgba(35,20,70,.35)' }}>
            <div style={{ minHeight: 172, overflow: 'hidden', borderRadius: 14, background: '#FAF8FE', border: '1px solid #F0ECF9', padding: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14 }}>
              {/* Calendar card */}
              <div style={{ background: '#fff', border: '1px solid #ECE7F6', borderRadius: 10, padding: '10px 12px', width: 100 }}>
                <div style={{ fontSize: 9, fontWeight: 700, color: '#8A8599', letterSpacing: '.06em' }}>TUE 15</div>
                <div style={{ marginTop: 6, padding: '6px 8px', borderRadius: 6, background: '#7C3AED', color: '#fff', fontSize: 10, fontWeight: 700 }}>Intro call</div>
              </div>
              {/* Arrow */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8A8599" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              {/* Confirmed card */}
              <div style={{ background: '#fff', border: '1px solid #ECE7F6', borderRadius: 10, padding: '10px 12px', width: 110 }}>
                <div style={{ fontSize: 9, fontWeight: 700, color: '#8A8599', letterSpacing: '.06em' }}>SNAARPME</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 6 }}>
                  <span style={{ width: 14, height: 14, borderRadius: 999, background: '#0EA47A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 12.5l5 5 10-11" /></svg>
                  </span>
                  <span style={{ fontSize: 10, fontWeight: 700, color: '#0EA47A' }}>Confirmed</span>
                </div>
                <div style={{ marginTop: 6, fontSize: 9, color: '#8A8599' }}>Reminder queued<br />1 hr before</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginTop: 20 }}>
              <span style={{ fontFamily: "'Poppins',system-ui,sans-serif", fontSize: 13, color: '#7C3AED', fontWeight: 700 }}>03</span>
              <h3 style={{ fontFamily: "'Poppins',system-ui,sans-serif", fontSize: 20, fontWeight: 600, color: '#17131F', margin: 0, letterSpacing: '-.01em' }}>It&apos;s on both calendars</h3>
            </div>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: '#5A5468', margin: '9px 0 0' }}>The meeting syncs to your calendar and theirs automatically. Reminders go out on their own.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
