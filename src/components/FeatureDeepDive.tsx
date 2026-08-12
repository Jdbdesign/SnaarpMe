export default function FeatureDeepDive() {
  return (
    <section id="product" style={{ padding: '80px 26px 80px', background: '#fff' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto' }}>
        <div data-reveal="" style={{ maxWidth: 620 }}>
          <span style={{ fontSize: '12.5px', letterSpacing: '.14em', fontWeight: 700, color: '#7C3AED' }}>THE PRODUCT</span>
          <h2 style={{ fontFamily: "'Poppins',system-ui,sans-serif", fontSize: 'clamp(30px,3.4vw,42px)', lineHeight: 1.16, letterSpacing: '-.024em', fontWeight: 600, color: '#17131F', margin: '14px 0 0' }}>Everything the back-and-forth was doing, done properly.</h2>
        </div>
      </div>

      {/* Row 1 — Smart Scheduling */}
      <div style={{ maxWidth: 1440, margin: '56px auto 0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(340px,1fr))', gap: 52, alignItems: 'center' }}>
        <div data-reveal="">
          <FeatureBadge>Smart Scheduling</FeatureBadge>
          <h3 style={{ fontFamily: "'Poppins',system-ui,sans-serif", fontSize: 'clamp(25px,2.5vw,32px)', lineHeight: 1.2, letterSpacing: '-.02em', fontWeight: 600, color: '#17131F', margin: '18px 0 0' }}>The perfect time, found for you.</h3>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: '#5A5468', margin: '14px 0 0', maxWidth: 470 }}>SnaarpMe finds the perfect meeting time instantly — checking real availability, not just a static calendar grid.</p>
          <CheckList items={['Reads busy blocks from every connected calendar', 'Respects buffers, notice periods and daily limits', 'Converts time zones for the invitee, not for you']} />
        </div>
        <div data-reveal="" data-reveal-delay="90" style={{ background: '#FBFAFE', border: '1px solid #ECE7F6', borderRadius: 22, padding: 22, boxShadow: '0 30px 60px -44px rgba(35,20,70,.4)' }}>
          <SmartSchedulingMock />
        </div>
      </div>

      {/* Row 2 — Booking Links (reversed) */}
      <div style={{ maxWidth: 1440, margin: '78px auto 0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(340px,1fr))', gap: 52, alignItems: 'center' }}>
        <div data-reveal="" data-reveal-delay="90" style={{ background: '#FBFAFE', border: '1px solid #ECE7F6', borderRadius: 22, padding: 22, boxShadow: '0 30px 60px -44px rgba(35,20,70,.4)' }}>
          <BookingLinksMock />
        </div>
        <div data-reveal="">
          <FeatureBadge>Booking Links</FeatureBadge>
          <h3 style={{ fontFamily: "'Poppins',system-ui,sans-serif", fontSize: 'clamp(25px,2.5vw,32px)', lineHeight: 1.2, letterSpacing: '-.02em', fontWeight: 600, color: '#17131F', margin: '18px 0 0' }}>Booking links, made personal.</h3>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: '#5A5468', margin: '14px 0 0', maxWidth: 470 }}>Share personalised booking pages for every meeting type — a 15-minute intro, a 60-minute deep-dive, each with its own rules.</p>
          <CheckList items={['Custom URL per meeting type', 'Your colours and logo on the invitee view', 'Buffers and screening questions per link']} />
        </div>
      </div>

      {/* Row 3 — Team Scheduling */}
      <div style={{ maxWidth: 1440, margin: '78px auto 0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(340px,1fr))', gap: 52, alignItems: 'center' }}>
        <div data-reveal="">
          <FeatureBadge>Team Scheduling</FeatureBadge>
          <h3 style={{ fontFamily: "'Poppins',system-ui,sans-serif", fontSize: 'clamp(25px,2.5vw,32px)', lineHeight: 1.2, letterSpacing: '-.02em', fontWeight: 600, color: '#17131F', margin: '18px 0 0' }}>One queue. No double-bookings.</h3>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: '#5A5468', margin: '14px 0 0', maxWidth: 470 }}>Coordinate across teams with round-robin routing and collective availability — no double-bookings, no manual routing.</p>
          <CheckList items={['Round-robin by rotation, load, or priority', 'Collective availability for panel interviews', 'Out-of-office skips the rep automatically']} />
        </div>
        <div data-reveal="" data-reveal-delay="90" style={{ background: '#FBFAFE', border: '1px solid #ECE7F6', borderRadius: 22, padding: 22, boxShadow: '0 30px 60px -44px rgba(35,20,70,.4)' }}>
          <TeamSchedulingMock />
        </div>
      </div>

      {/* Row 4 — Automation (reversed) */}
      <div style={{ maxWidth: 1440, margin: '78px auto 0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(340px,1fr))', gap: 52, alignItems: 'center' }}>
        <div data-reveal="" data-reveal-delay="90" style={{ background: '#FBFAFE', border: '1px solid #ECE7F6', borderRadius: 22, padding: 22, boxShadow: '0 30px 60px -44px rgba(35,20,70,.4)' }}>
          <AutomationMock />
        </div>
        <div data-reveal="">
          <FeatureBadge>Automation</FeatureBadge>
          <h3 style={{ fontFamily: "'Poppins',system-ui,sans-serif", fontSize: 'clamp(25px,2.5vw,32px)', lineHeight: 1.2, letterSpacing: '-.02em', fontWeight: 600, color: '#17131F', margin: '18px 0 0' }}>Set it once. It runs every time.</h3>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: '#5A5468', margin: '14px 0 0', maxWidth: 470 }}>Automate reminders, confirmations, and follow-ups — every meeting gets the same care without anyone lifting a finger.</p>
          <CheckList items={['Email and SMS reminders on your schedule', 'Follow-ups that fire after the call, not before', 'Per-meeting-type workflows, reused across the team']} />
        </div>
      </div>
    </section>
  );
}

function FeatureBadge({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 13px', borderRadius: 999, background: '#F4F0FE', color: '#6D28D9', fontSize: 13, fontWeight: 700 }}>{children}</span>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul style={{ margin: '22px 0 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 11 }}>
      {items.map(item => (
        <li key={item} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: '15.5px', color: '#40394F' }}>
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 3 }}><path d="M4.5 12.5l5 5 10-11" /></svg>
          {item}
        </li>
      ))}
    </ul>
  );
}

function SmartSchedulingMock() {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
        <span style={{ fontSize: 13, fontWeight: 700, color: '#17131F' }}>Finding a slot &middot; Tue 15 Sep</span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '11.5px', color: '#0B7A5B', background: '#E9F9F3', padding: '5px 10px', borderRadius: 999, fontWeight: 700 }}>
          <span style={{ width: 6, height: 6, borderRadius: 999, background: '#0EA47A' }} />1 match
        </span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '76px 1fr', gap: 9, alignItems: 'center' }}>
        <span style={{ fontSize: '11.5px', color: '#8A8599', fontWeight: 700 }}>Priya</span>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8,1fr)', gap: 4 }}>
          {[1,1,0,0,1,0,1,1].map((b, i) => <span key={i} style={{ height: 32, borderRadius: 7, background: b ? '#E5DFF0' : '#fff', border: b ? undefined : '1px solid #E9E4F2' }} />)}
        </div>
        <span style={{ fontSize: '11.5px', color: '#8A8599', fontWeight: 700 }}>Marcus</span>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8,1fr)', gap: 4 }}>
          {[1,0,0,1,1,1,0,1].map((b, i) => <span key={i} style={{ height: 32, borderRadius: 7, background: b ? '#E5DFF0' : '#fff', border: b ? undefined : '1px solid #E9E4F2' }} />)}
        </div>
        <span />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8,1fr)', gap: 4, marginTop: 2 }}>
          {[9,10,11,12,13,14,15,16].map(h => <span key={h} style={{ fontSize: '9.5px', color: '#B4AEC2', textAlign: 'center', fontFamily: "'Poppins',system-ui,sans-serif" }}>{h}</span>)}
        </div>
      </div>
      <div style={{ marginTop: 16, padding: 14, borderRadius: 14, background: '#fff', border: '1px solid #C7F0E2', boxShadow: '0 10px 24px -18px rgba(14,164,122,.7)', display: 'flex', alignItems: 'center', gap: 11 }}>
        <span style={{ width: 32, height: 32, borderRadius: 10, background: '#E9F9F3', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0EA47A" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 12.5l5 5 10-11" /></svg>
        </span>
        <span style={{ minWidth: 0 }}>
          <span style={{ display: 'block', fontSize: '13.5px', fontWeight: 700, color: '#17131F' }}>Both free &middot; 11:00 – 11:30</span>
          <span style={{ display: 'block', fontSize: 12, color: '#8A8599' }}>Only open overlap before Thursday</span>
        </span>
      </div>
      <div style={{ marginTop: 10, display: 'flex', alignItems: 'center', gap: 7, fontSize: '11.5px', color: '#A9A4B8' }}>
        <span style={{ width: 11, height: 11, borderRadius: 4, background: '#E5DFF0' }} />Busy
        <span style={{ width: 11, height: 11, borderRadius: 4, background: '#fff', border: '1px solid #E9E4F2', marginLeft: 8 }} />Free
      </div>
    </>
  );
}

function BookingLinksMock() {
  return (
    <>
      <div style={{ fontSize: 13, fontWeight: 700, color: '#17131F', marginBottom: 14 }}>Edit booking page</div>
      <label style={{ display: 'block', fontSize: '11.5px', color: '#8A8599', fontWeight: 700, letterSpacing: '.05em' }}>LINK</label>
      <div style={{ marginTop: 6, display: 'flex', alignItems: 'center', background: '#fff', border: '1px solid #E9E4F2', borderRadius: 11, padding: '10px 12px', fontFamily: "'Poppins',system-ui,sans-serif", fontSize: '12.5px' }}>
        <span style={{ color: '#A9A4B8' }}>snaarp.me/priya/</span><span style={{ color: '#17131F' }}>intro-15</span>
        <span style={{ width: 1.5, height: 14, background: '#7C3AED', marginLeft: 2, animation: 'smPulse 1.1s steps(1,end) infinite' }} />
      </div>
      <label style={{ display: 'block', fontSize: '11.5px', color: '#8A8599', fontWeight: 700, letterSpacing: '.05em', marginTop: 15 }}>DURATION</label>
      <div style={{ marginTop: 6, display: 'flex', gap: 6, background: '#F2EFF9', padding: 4, borderRadius: 11 }}>
        {['15 min', '30 min', '60 min'].map((d, i) => (
          <span key={d} style={{ flex: 1, textAlign: 'center', padding: 8, borderRadius: 8, background: i === 0 ? '#fff' : undefined, color: i === 0 ? '#17131F' : '#8A8599', fontSize: '12.5px', fontWeight: 700, boxShadow: i === 0 ? '0 2px 6px -3px rgba(35,20,70,.4)' : undefined }}>{d}</span>
        ))}
      </div>
      <label style={{ display: 'block', fontSize: '11.5px', color: '#8A8599', fontWeight: 700, letterSpacing: '.05em', marginTop: 15 }}>BRAND COLOUR</label>
      <div style={{ marginTop: 8, display: 'flex', gap: 9, alignItems: 'center' }}>
        {['#7C3AED', '#0EA47A', '#E08A00', '#17131F', '#E15588'].map((c, i) => (
          <span key={c} style={{ width: 26, height: 26, borderRadius: 999, background: c, boxShadow: i === 0 ? '0 0 0 2px #fff,0 0 0 4px #7C3AED' : undefined }} />
        ))}
      </div>
      <ToggleRow label="Buffer time" sub="10 min after each meeting" on />
      <ToggleRow label="Ask a screening question" sub="Optional, shown before booking" on={false} />
    </>
  );
}

function ToggleRow({ label, sub, on }: { label: string; sub: string; on: boolean }) {
  return (
    <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#fff', border: '1px solid #E9E4F2', borderRadius: 12, padding: '12px 13px' }}>
      <span>
        <span style={{ display: 'block', fontSize: 13, fontWeight: 700, color: '#17131F' }}>{label}</span>
        <span style={{ display: 'block', fontSize: '11.5px', color: '#8A8599' }}>{sub}</span>
      </span>
      <span style={{ width: 42, height: 24, borderRadius: 999, background: on ? '#7C3AED' : '#E5DFF0', display: 'flex', alignItems: 'center', justifyContent: on ? 'flex-end' : 'flex-start', padding: 3, flexShrink: 0 }}>
        <span style={{ width: 18, height: 18, borderRadius: 999, background: '#fff' }} />
      </span>
    </div>
  );
}

function TeamSchedulingMock() {
  return (
    <>
      <div style={{ background: '#fff', border: '1px solid #E9E4F2', borderRadius: 14, padding: 13, display: 'flex', alignItems: 'center', gap: 11 }}>
        <span style={{ width: 34, height: 34, borderRadius: 10, background: '#F4F0FE', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6.5h18v13H3z" /><path d="M3 7l9 6.5L21 7" /></svg>
        </span>
        <span style={{ minWidth: 0 }}>
          <span style={{ display: 'block', fontSize: 13, fontWeight: 700, color: '#17131F' }}>New booking request</span>
          <span style={{ display: 'block', fontSize: '11.5px', color: '#8A8599' }}>j.okoro@northwind.co &middot; Demo, 30 min</span>
        </span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', padding: '9px 0' }}>
        <svg width="16" height="22" viewBox="0 0 24 32" fill="none" stroke="#C3BFCF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v24M5.5 21.5L12 28l6.5-6.5" /></svg>
      </div>
      <div style={{ background: '#fff', border: '1px solid #E9E4F2', borderRadius: 14, padding: 13 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 11 }}>
          <span style={{ fontSize: '12.5px', fontWeight: 700, color: '#17131F' }}>Round-robin queue</span>
          <span style={{ fontSize: 11, color: '#8A8599', fontFamily: "'Poppins',system-ui,sans-serif" }}>EMEA &middot; Sales</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
          <QueueItem avatar="/assets/avatars/Container-1.png" name="Marcus Webb" sub="4 calls this week" tag="Next up" active />
          <QueueItem avatar="/assets/avatars/Container-3.png" name="Aisha Karim" sub="5 calls this week" num="#2" />
          <QueueItem avatar="/assets/avatars/Container-4.png" name="Dan Lowry" sub="Out of office · skipped" num="#3" dim />
        </div>
      </div>
      <div style={{ marginTop: 12, padding: '11px 13px', borderRadius: 12, background: '#E9F9F3', display: 'flex', alignItems: 'center', gap: 9 }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0EA47A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 12.5l5 5 10-11" /></svg>
        <span style={{ fontSize: '12.5px', fontWeight: 700, color: '#0B7A5B' }}>Assigned to Marcus &middot; Tue 15 Sep, 14:00</span>
      </div>
    </>
  );
}

function QueueItem({ avatar, name, sub, tag, num, active, dim }: { avatar: string; name: string; sub: string; tag?: string; num?: string; active?: boolean; dim?: boolean }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 10px', borderRadius: 11, background: active ? '#F5F1FE' : '#fff', border: `1px solid ${active ? '#DED3F5' : '#F0ECF9'}`, opacity: dim ? 0.6 : 1 }}>
      <img src={avatar} alt={name} style={{ width: 36, height: 36, borderRadius: 999, objectFit: 'cover', flexShrink: 0 }} />
      <span style={{ flex: 1, minWidth: 0 }}>
        <span style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: '#17131F' }}>{name}</span>
        <span style={{ display: 'block', fontSize: 11, color: '#8A8599' }}>{sub}</span>
      </span>
      {tag && <span style={{ padding: '4px 9px', borderRadius: 999, background: '#7C3AED', color: '#fff', fontSize: '10.5px', fontWeight: 700, flexShrink: 0 }}>{tag}</span>}
      {num && <span style={{ fontSize: '10.5px', color: '#A9A4B8', fontFamily: "'Poppins',system-ui,sans-serif", flexShrink: 0 }}>{num}</span>}
    </div>
  );
}

function AutomationMock() {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
        <span style={{ fontSize: 13, fontWeight: 700, color: '#17131F' }}>Workflow &middot; Intro call</span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 11, color: '#0B7A5B', background: '#E9F9F3', padding: '5px 10px', borderRadius: 999, fontWeight: 700 }}>
          <span style={{ width: 6, height: 6, borderRadius: 999, background: '#0EA47A' }} />Live
        </span>
      </div>
      <div style={{ padding: '12px 14px', borderRadius: 12, background: '#17131F', color: '#fff', display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ width: 26, height: 26, borderRadius: 8, background: 'rgba(255,255,255,.14)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2.5L4 14h7l-1 8 9-11.5h-7z" /></svg>
        </span>
        <span><span style={{ display: 'block', fontSize: '12.5px', fontWeight: 700 }}>When a meeting is booked</span><span style={{ display: 'block', fontSize: 11, color: '#B6AEC8' }}>Trigger</span></span>
      </div>
      <WorkflowStep label="Send reminder" sub="1 hour before · Email + SMS" on />
      <WorkflowStep label="Send follow-up" sub="1 day after · Email" on />
      <WorkflowStep label="No-show follow-up" sub="Off" on={false} dim />
      <div style={{ marginTop: 14, padding: 11, borderRadius: 12, border: '1.5px dashed #DED3F5', textAlign: 'center', fontSize: 12, fontWeight: 700, color: '#8B5CF6' }}>+ Add step</div>
    </>
  );
}

function WorkflowStep({ label, sub, on, dim }: { label: string; sub: string; on: boolean; dim?: boolean }) {
  return (
    <>
      <div style={{ width: 2, height: 16, background: '#E5DFF0', marginLeft: 26 }} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '12px 14px', borderRadius: 12, background: '#fff', border: '1px solid #E9E4F2', opacity: dim ? 0.55 : 1 }}>
        <span style={{ width: 26, height: 26, borderRadius: 8, background: dim ? '#F2EFF9' : '#F4F0FE', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={dim ? '#8A8599' : '#7C3AED'} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
            {dim ? <path d="M12 5v14M5 12h14" /> : <><circle cx="12" cy="12" r="9" /><path d="M12 7.5V12l3 2" /></>}
          </svg>
        </span>
        <span style={{ flex: 1, minWidth: 0 }}>
          <span style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: '#17131F' }}>{label}</span>
          <span style={{ display: 'block', fontSize: 11, color: '#8A8599' }}>{sub}</span>
        </span>
        <span style={{ width: 38, height: 22, borderRadius: 999, background: on ? '#7C3AED' : '#E5DFF0', display: 'flex', alignItems: 'center', justifyContent: on ? 'flex-end' : 'flex-start', padding: 3, flexShrink: 0 }}>
          <span style={{ width: 16, height: 16, borderRadius: 999, background: '#fff' }} />
        </span>
      </div>
    </>
  );
}
