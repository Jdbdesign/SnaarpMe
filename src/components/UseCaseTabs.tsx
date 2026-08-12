'use client';

import { useState } from 'react';

const TABS = [
  { label: 'Sales Teams', pitch: 'Book more discovery calls, automatically routed to the right rep.', body: 'Inbound demo requests land on whoever is next in the rotation — no spreadsheet, no "who is taking this one?" thread, no lead sitting cold overnight.', cta: 'Set up round-robin' },
  { label: 'Recruiters', pitch: 'Coordinate multi-interviewer panels without the email chain.', body: 'Collective availability finds the window where every interviewer is genuinely free, then books the panel in one action and tells the candidate.', cta: 'Book a panel faster' },
  { label: 'Consultants & Coaches', pitch: 'Let clients book and pay for a session in one step.', body: 'Attach a price to a session type and take payment at the moment of booking, so no-shows cost less and invoicing stops being a Friday job.', cta: 'Take paid bookings' },
  { label: 'Support Teams', pitch: 'Escalate a chat straight into a scheduled call.', body: 'When a ticket needs a human, drop your next open slots into the conversation and let the customer pick — the handoff takes seconds, not a day.', cta: 'Turn chats into calls' },
];

export default function UseCaseTabs() {
  const [tab, setTab] = useState(0);
  const active = TABS[tab];

  return (
    <section id="solution" style={{ padding: '80px 26px', background: '#FBFAFE', borderTop: '1px solid #F2EFF9', borderBottom: '1px solid #F2EFF9' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto' }}>
        <div data-reveal="" style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto' }}>
          <span style={{ fontSize: '12.5px', letterSpacing: '.14em', fontWeight: 700, color: '#7C3AED' }}>USE CASES</span>
          <h2 style={{ fontFamily: "'Poppins',system-ui,sans-serif", fontSize: 'clamp(30px,3.4vw,42px)', lineHeight: 1.16, letterSpacing: '-.024em', fontWeight: 600, color: '#17131F', margin: '14px 0 0' }}>Built for how you work.</h2>
        </div>

        {/* Tab buttons */}
        <div data-reveal="" role="tablist" aria-label="Use cases" style={{ margin: '32px auto 0', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 7, background: '#F2EFF9', padding: 5, borderRadius: 14, width: 'fit-content', maxWidth: '100%' }}>
          {TABS.map((t, i) => (
            <button
              key={t.label}
              type="button"
              role="tab"
              aria-selected={i === tab}
              onClick={() => setTab(i)}
              style={{
                padding: '10px 16px',
                borderRadius: 10,
                border: 0,
                cursor: 'pointer',
                fontSize: '14.5px',
                fontWeight: 700,
                transition: 'background 180ms ease,color 180ms ease',
                background: i === tab ? '#fff' : 'transparent',
                color: i === tab ? '#17131F' : '#5A5468',
                boxShadow: i === tab ? '0 2px 8px -3px rgba(35,20,70,.45)' : 'none',
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div style={{ marginTop: 28, background: '#fff', border: '1px solid #ECE7F6', borderRadius: 22, padding: 28, boxShadow: '0 30px 64px -46px rgba(35,20,70,.45)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 32, alignItems: 'center' }}>
          <div>
            <h3 style={{ fontFamily: "'Poppins',system-ui,sans-serif", fontSize: 'clamp(21px,2.2vw,27px)', lineHeight: 1.3, letterSpacing: '-.018em', fontWeight: 600, color: '#17131F', margin: 0 }}>{active.pitch}</h3>
            <p style={{ fontSize: '15.5px', lineHeight: 1.62, color: '#5A5468', margin: '14px 0 0' }}>{active.body}</p>
            <a href="#signup" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 20, fontSize: 15, fontWeight: 700, color: '#7C3AED' }}>
              {active.cta}
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h13M12 5.5l6.5 6.5-6.5 6.5" /></svg>
            </a>
          </div>
          <div style={{ minWidth: 0 }}>
            {tab === 0 && <SalesCard />}
            {tab === 1 && <RecruitersCard />}
            {tab === 2 && <ConsultantsCard />}
            {tab === 3 && <SupportCard />}
          </div>
        </div>
      </div>
    </section>
  );
}

function SalesCard() {
  return (
    <div style={{ background: '#FBFAFE', border: '1px solid #EFEBF7', borderRadius: 16, padding: 16 }}>
      <div style={{ fontSize: 12, fontWeight: 700, color: '#8A8599', letterSpacing: '.06em' }}>INBOUND DEMO REQUEST</div>
      <div style={{ marginTop: 11, display: 'flex', flexDirection: 'column', gap: 7 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '9px 11px', borderRadius: 11, background: '#F5F1FE', border: '1px solid #DED3F5' }}>
          <span style={{ width: 26, height: 26, borderRadius: 999, background: 'linear-gradient(145deg,#C4B5FD,#7C3AED)', color: '#fff', fontSize: '10.5px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>MW</span>
          <span style={{ flex: 1, fontSize: '12.5px', fontWeight: 700, color: '#17131F' }}>Marcus Webb</span>
          <span style={{ padding: '3px 9px', borderRadius: 999, background: '#7C3AED', color: '#fff', fontSize: '10.5px', fontWeight: 700 }}>Routed</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '9px 11px', borderRadius: 11, background: '#fff', border: '1px solid #F0ECF9' }}>
          <span style={{ width: 26, height: 26, borderRadius: 999, background: '#E9F4FF', color: '#2563EB', fontSize: '10.5px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>AK</span>
          <span style={{ flex: 1, fontSize: '12.5px', color: '#5A5468' }}>Aisha Karim</span>
          <span style={{ fontSize: '10.5px', color: '#A9A4B8', fontFamily: "'Poppins',system-ui,sans-serif" }}>#2</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '9px 11px', borderRadius: 11, background: '#fff', border: '1px solid #F0ECF9' }}>
          <span style={{ width: 26, height: 26, borderRadius: 999, background: '#FDF1E3', color: '#B26A00', fontSize: '10.5px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>DL</span>
          <span style={{ flex: 1, fontSize: '12.5px', color: '#5A5468' }}>Dan Lowry</span>
          <span style={{ fontSize: '10.5px', color: '#A9A4B8', fontFamily: "'Poppins',system-ui,sans-serif" }}>#3</span>
        </div>
      </div>
    </div>
  );
}

function RecruitersCard() {
  return (
    <div style={{ background: '#FBFAFE', border: '1px solid #EFEBF7', borderRadius: 16, padding: 16 }}>
      <div style={{ fontSize: 12, fontWeight: 700, color: '#8A8599', letterSpacing: '.06em' }}>PANEL AVAILABILITY &middot; THU 17</div>
      <div style={{ marginTop: 12, display: 'grid', gridTemplateColumns: '66px 1fr', gap: 7, alignItems: 'center' }}>
        <span style={{ fontSize: '11.5px', color: '#5A5468', fontWeight: 700 }}>Elena</span>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 4 }}>
          {[1,0,0,1,0,1].map((b, i) => <span key={i} style={{ height: 24, borderRadius: 6, background: b ? '#E5DFF0' : '#fff', border: b ? undefined : '1px solid #E9E4F2' }} />)}
        </div>
        <span style={{ fontSize: '11.5px', color: '#5A5468', fontWeight: 700 }}>Rahul</span>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 4 }}>
          {[1,1,0,0,1,1].map((b, i) => <span key={i} style={{ height: 24, borderRadius: 6, background: b ? '#E5DFF0' : '#fff', border: b ? undefined : '1px solid #E9E4F2' }} />)}
        </div>
        <span style={{ fontSize: '11.5px', color: '#5A5468', fontWeight: 700 }}>Nadia</span>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 4 }}>
          {[0,1,0,1,1,0].map((b, i) => <span key={i} style={{ height: 24, borderRadius: 6, background: b ? '#E5DFF0' : '#fff', border: b ? undefined : '1px solid #E9E4F2' }} />)}
        </div>
      </div>
      <div style={{ marginTop: 12, padding: '10px 12px', borderRadius: 11, background: '#E9F9F3', fontSize: '12.5px', fontWeight: 700, color: '#0B7A5B' }}>All three free &middot; 11:00 – 12:00</div>
    </div>
  );
}

function ConsultantsCard() {
  return (
    <div style={{ background: '#FBFAFE', border: '1px solid #EFEBF7', borderRadius: 16, padding: 16 }}>
      <div style={{ fontSize: 12, fontWeight: 700, color: '#8A8599', letterSpacing: '.06em' }}>BOOK &amp; PAY</div>
      <div style={{ marginTop: 11, background: '#fff', border: '1px solid #E9E4F2', borderRadius: 13, padding: 13 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 13, fontWeight: 700, color: '#17131F' }}>Strategy session &middot; 60 min</span>
          <span style={{ fontFamily: "'Poppins',system-ui,sans-serif", fontSize: 16, fontWeight: 700, color: '#17131F' }}>&pound;180</span>
        </div>
        <div style={{ marginTop: 11, display: 'flex', alignItems: 'center', gap: 9, padding: '10px 11px', borderRadius: 10, border: '1px solid #E9E4F2' }}>
          <span style={{ width: 28, height: 19, borderRadius: 4, background: 'linear-gradient(120deg,#5A5468,#17131F)', flexShrink: 0 }} />
          <span style={{ fontFamily: "'Poppins',system-ui,sans-serif", fontSize: '12.5px', color: '#5A5468' }}>&bull;&bull;&bull;&bull; 4242</span>
          <span style={{ flex: 1 }} />
          <span style={{ fontSize: 11, color: '#A9A4B8' }}>Stripe</span>
        </div>
        <div style={{ marginTop: 11, padding: 10, borderRadius: 10, background: '#7C3AED', color: '#fff', fontSize: '12.5px', fontWeight: 700, textAlign: 'center' }}>Confirm &amp; pay</div>
      </div>
    </div>
  );
}

function SupportCard() {
  return (
    <div style={{ background: '#FBFAFE', border: '1px solid #EFEBF7', borderRadius: 16, padding: 16 }}>
      <div style={{ fontSize: 12, fontWeight: 700, color: '#8A8599', letterSpacing: '.06em' }}>LIVE CHAT &middot; TICKET #4417</div>
      <div style={{ marginTop: 11, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <span style={{ alignSelf: 'flex-start', maxWidth: '82%', padding: '9px 12px', borderRadius: '13px 13px 13px 4px', background: '#F2EFF9', fontSize: '12.5px', color: '#40394F', lineHeight: 1.45 }}>This needs a screen-share — can we get someone on a call?</span>
        <span style={{ alignSelf: 'flex-end', maxWidth: '82%', padding: '9px 12px', borderRadius: '13px 13px 4px 13px', background: '#7C3AED', color: '#fff', fontSize: '12.5px', lineHeight: 1.45 }}>Absolutely. Here are our next open slots &#x1F447;</span>
      </div>
      <div style={{ marginTop: 11, display: 'flex', gap: 6 }}>
        <span style={{ flex: 1, textAlign: 'center', padding: 9, borderRadius: 10, border: '1px solid #E9E4F2', background: '#fff', fontSize: '11.5px', fontWeight: 700, color: '#40394F' }}>Today 15:30</span>
        <span style={{ flex: 1, textAlign: 'center', padding: 9, borderRadius: 10, background: '#17131F', color: '#fff', fontSize: '11.5px', fontWeight: 700 }}>Today 16:15</span>
      </div>
    </div>
  );
}
