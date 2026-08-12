'use client';

import { useState, useEffect } from 'react';

export default function FeatureDeepDive() {
  return (
    <section id="product" style={{ padding: '80px 26px 80px', background: '#fff' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto' }}>
        <div data-reveal="" style={{ maxWidth: 820, margin: '0 auto', textAlign: 'center' }}>
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
  const [scanCol, setScanCol] = useState(-1);
  const [found, setFound] = useState(false);

  useEffect(() => {
    let col = 0;
    const interval = setInterval(() => {
      if (col < 8) {
        setScanCol(col);
        col++;
      } else if (col === 8) {
        setFound(true);
        col++;
      } else {
        // Reset
        col = 0;
        setScanCol(-1);
        setFound(false);
      }
    }, 600);
    return () => clearInterval(interval);
  }, []);

  const priya =  [1,1,0,0,1,0,1,1];
  const marcus = [1,0,0,1,1,1,0,1];

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
        <span style={{ fontSize: 13, fontWeight: 700, color: '#17131F' }}>Finding a slot &middot; Tue 15 Sep</span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '11.5px', color: found ? '#0B7A5B' : '#8A8599', background: found ? '#E9F9F3' : '#F2EFF9', padding: '5px 10px', borderRadius: 999, fontWeight: 700, transition: 'all 300ms ease' }}>
          <span style={{ width: 6, height: 6, borderRadius: 999, background: found ? '#0EA47A' : '#C3BFCF', transition: 'background 300ms ease' }} />{found ? '1 match' : 'Scanning...'}
        </span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '76px 1fr', gap: 9, alignItems: 'center' }}>
        <span style={{ fontSize: '11.5px', color: '#8A8599', fontWeight: 700 }}>Priya</span>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8,1fr)', gap: 4 }}>
          {priya.map((b, i) => <span key={i} style={{ height: 32, borderRadius: 7, background: b ? '#E5DFF0' : '#fff', border: b ? undefined : '1px solid #E9E4F2', boxShadow: i === scanCol ? '0 0 0 2px #7C3AED' : undefined, transition: 'box-shadow 200ms ease' }} />)}
        </div>
        <span style={{ fontSize: '11.5px', color: '#8A8599', fontWeight: 700 }}>Marcus</span>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8,1fr)', gap: 4 }}>
          {marcus.map((b, i) => <span key={i} style={{ height: 32, borderRadius: 7, background: b ? '#E5DFF0' : '#fff', border: b ? undefined : '1px solid #E9E4F2', boxShadow: i === scanCol ? '0 0 0 2px #7C3AED' : undefined, transition: 'box-shadow 200ms ease' }} />)}
        </div>
        <span />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8,1fr)', gap: 4, marginTop: 2 }}>
          {[9,10,11,12,13,14,15,16].map(h => <span key={h} style={{ fontSize: '9.5px', color: '#B4AEC2', textAlign: 'center', fontFamily: "'Poppins',system-ui,sans-serif" }}>{h}</span>)}
        </div>
      </div>
      <div style={{ marginTop: 16, padding: 14, borderRadius: 14, background: '#fff', border: `1px solid ${found ? '#C7F0E2' : '#E9E4F2'}`, boxShadow: found ? '0 10px 24px -18px rgba(14,164,122,.7)' : 'none', display: 'flex', alignItems: 'center', gap: 11, opacity: found ? 1 : 0.4, transform: found ? 'translateY(0)' : 'translateY(6px)', transition: 'all 400ms ease' }}>
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
  const [duration, setDuration] = useState(0);
  const [color, setColor] = useState(0);
  const [buffer, setBuffer] = useState(true);
  const [screening, setScreening] = useState(false);
  const colors = ['#7C3AED', '#0EA47A', '#E08A00', '#17131F', '#E15588'];
  const durations = ['15 min', '30 min', '60 min'];
  const slugs = ['intro-15', 'strategy-30', 'deep-dive-60'];

  useEffect(() => {
    const sequence = [
      () => setDuration(1),
      () => setColor(1),
      () => setDuration(2),
      () => setColor(2),
      () => setScreening(true),
      () => setBuffer(false),
      () => setColor(3),
      () => setDuration(0),
      () => setBuffer(true),
      () => setScreening(false),
      () => setColor(0),
    ];
    let step = 0;
    const interval = setInterval(() => {
      sequence[step]();
      step = (step + 1) % sequence.length;
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div style={{ fontSize: 13, fontWeight: 700, color: '#17131F', marginBottom: 14 }}>Edit booking page</div>
      <label style={{ display: 'block', fontSize: '11.5px', color: '#8A8599', fontWeight: 700, letterSpacing: '.05em' }}>LINK</label>
      <div style={{ marginTop: 6, display: 'flex', alignItems: 'center', background: '#fff', border: '1px solid #E9E4F2', borderRadius: 11, padding: '10px 12px', fontFamily: "'Poppins',system-ui,sans-serif", fontSize: '12.5px' }}>
        <span style={{ color: '#A9A4B8' }}>snaarp.me/priya/</span><span style={{ color: '#17131F', transition: 'opacity 200ms ease' }}>{slugs[duration]}</span>
        <span style={{ width: 1.5, height: 14, background: colors[color], marginLeft: 2, animation: 'smPulse 1.1s steps(1,end) infinite', transition: 'background 300ms ease' }} />
      </div>
      <label style={{ display: 'block', fontSize: '11.5px', color: '#8A8599', fontWeight: 700, letterSpacing: '.05em', marginTop: 15 }}>DURATION</label>
      <div style={{ marginTop: 6, display: 'flex', gap: 6, background: '#F2EFF9', padding: 4, borderRadius: 11 }}>
        {durations.map((d, i) => (
          <span
            key={d}
            style={{ flex: 1, textAlign: 'center', padding: 8, borderRadius: 8, background: i === duration ? '#fff' : undefined, color: i === duration ? '#17131F' : '#8A8599', fontSize: '12.5px', fontWeight: 700, boxShadow: i === duration ? '0 2px 6px -3px rgba(35,20,70,.4)' : undefined, transition: 'background 300ms ease, box-shadow 300ms ease, color 300ms ease' }}
          >{d}</span>
        ))}
      </div>
      <label style={{ display: 'block', fontSize: '11.5px', color: '#8A8599', fontWeight: 700, letterSpacing: '.05em', marginTop: 15 }}>BRAND COLOUR</label>
      <div style={{ marginTop: 8, display: 'flex', gap: 9, alignItems: 'center' }}>
        {colors.map((c, i) => (
          <span
            key={c}
            style={{ width: 26, height: 26, borderRadius: 999, background: c, boxShadow: i === color ? `0 0 0 2px #fff, 0 0 0 4px ${c}` : undefined, transition: 'box-shadow 300ms ease, transform 300ms ease', transform: i === color ? 'scale(1.15)' : 'scale(1)' }}
          />
        ))}
      </div>
      <ToggleRow label="Buffer time" sub="10 min after each meeting" on={buffer} />
      <ToggleRow label="Ask a screening question" sub="Optional, shown before booking" on={screening} />
    </>
  );
}

function ToggleRow({ label, sub, on }: { label: string; sub: string; on: boolean }) {
  return (
    <div
      style={{ marginTop: 12, display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#fff', border: '1px solid #E9E4F2', borderRadius: 12, padding: '12px 13px', transition: 'border-color 180ms ease' }}
    >
      <span>
        <span style={{ display: 'block', fontSize: 13, fontWeight: 700, color: '#17131F' }}>{label}</span>
        <span style={{ display: 'block', fontSize: '11.5px', color: '#8A8599' }}>{sub}</span>
      </span>
      <span style={{ width: 42, height: 24, borderRadius: 999, background: on ? '#7C3AED' : '#E5DFF0', display: 'flex', alignItems: 'center', justifyContent: on ? 'flex-end' : 'flex-start', padding: 3, flexShrink: 0, transition: 'background 300ms ease' }}>
        <span style={{ width: 18, height: 18, borderRadius: 999, background: '#fff', transition: 'transform 200ms ease' }} />
      </span>
    </div>
  );
}

function TeamSchedulingMock() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [assigned, setAssigned] = useState(false);
  const names = ['Marcus Webb', 'Aisha Karim', 'Dan Lowry'];
  const avatars = ['/assets/avatars/Container-1.png', '/assets/avatars/Container-3.png', '/assets/avatars/Container-4.png'];
  const subs = ['4 calls this week', '5 calls this week', '3 calls this week'];

  useEffect(() => {
    let step = 0;
    const interval = setInterval(() => {
      if (step < 3) {
        setActiveIdx(step);
        setAssigned(false);
        step++;
      } else if (step === 3) {
        setAssigned(true);
        step++;
      } else {
        step = 0;
        setActiveIdx(0);
        setAssigned(false);
      }
    }, 1400);
    return () => clearInterval(interval);
  }, []);

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
          {names.map((name, idx) => (
            <div key={name} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 10px', borderRadius: 11, background: idx === activeIdx ? '#F5F1FE' : '#fff', border: `1px solid ${idx === activeIdx ? '#DED3F5' : '#F0ECF9'}`, transition: 'all 300ms ease' }}>
              <img src={avatars[idx]} alt={name} style={{ width: 36, height: 36, borderRadius: 999, objectFit: 'cover', flexShrink: 0 }} />
              <span style={{ flex: 1, minWidth: 0 }}>
                <span style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: '#17131F' }}>{name}</span>
                <span style={{ display: 'block', fontSize: 11, color: '#8A8599' }}>{subs[idx]}</span>
              </span>
              {idx === activeIdx && <span style={{ padding: '4px 9px', borderRadius: 999, background: '#7C3AED', color: '#fff', fontSize: '10.5px', fontWeight: 700, flexShrink: 0, transition: 'opacity 300ms ease' }}>Next up</span>}
              {idx !== activeIdx && <span style={{ fontSize: '10.5px', color: '#A9A4B8', fontFamily: "'Poppins',system-ui,sans-serif", flexShrink: 0 }}>#{idx + 1}</span>}
            </div>
          ))}
        </div>
      </div>
      <div style={{ marginTop: 12, padding: '11px 13px', borderRadius: 12, background: assigned ? '#E9F9F3' : '#F9F7FE', display: 'flex', alignItems: 'center', gap: 9, transition: 'all 400ms ease', opacity: assigned ? 1 : 0.5 }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={assigned ? '#0EA47A' : '#8A8599'} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'stroke 300ms ease' }}><path d="M4.5 12.5l5 5 10-11" /></svg>
        <span style={{ fontSize: '12.5px', fontWeight: 700, color: assigned ? '#0B7A5B' : '#8A8599', transition: 'color 300ms ease' }}>{assigned ? `Assigned to ${names[activeIdx]}` : 'Routing...'}</span>
      </div>
    </>
  );
}



function AutomationMock() {
  const [visibleSteps, setVisibleSteps] = useState(0);
  const [live, setLive] = useState(false);

  useEffect(() => {
    let step = 0;
    const interval = setInterval(() => {
      if (step < 3) {
        setVisibleSteps(step + 1);
        step++;
      } else if (step === 3) {
        setLive(true);
        step++;
      } else {
        step = 0;
        setVisibleSteps(0);
        setLive(false);
      }
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    { label: 'Send reminder', sub: '1 hour before · Email + SMS', on: true },
    { label: 'Send follow-up', sub: '1 day after · Email', on: true },
    { label: 'No-show follow-up', sub: 'Off', on: false },
  ];

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
        <span style={{ fontSize: 13, fontWeight: 700, color: '#17131F' }}>Workflow &middot; Intro call</span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 11, color: live ? '#0B7A5B' : '#8A8599', background: live ? '#E9F9F3' : '#F2EFF9', padding: '5px 10px', borderRadius: 999, fontWeight: 700, transition: 'all 300ms ease' }}>
          <span style={{ width: 6, height: 6, borderRadius: 999, background: live ? '#0EA47A' : '#C3BFCF', transition: 'background 300ms ease' }} />{live ? 'Live' : 'Building...'}
        </span>
      </div>
      <div style={{ padding: '12px 14px', borderRadius: 12, background: '#17131F', color: '#fff', display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ width: 26, height: 26, borderRadius: 8, background: 'rgba(255,255,255,.14)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2.5L4 14h7l-1 8 9-11.5h-7z" /></svg>
        </span>
        <span><span style={{ display: 'block', fontSize: '12.5px', fontWeight: 700 }}>When a meeting is booked</span><span style={{ display: 'block', fontSize: 11, color: '#B6AEC8' }}>Trigger</span></span>
      </div>
      {steps.map((s, idx) => (
        <div key={s.label} style={{ opacity: idx < visibleSteps ? 1 : 0, transform: idx < visibleSteps ? 'translateY(0)' : 'translateY(10px)', transition: 'opacity 400ms ease, transform 400ms ease' }}>
          <div style={{ width: 2, height: 16, background: '#E5DFF0', marginLeft: 26 }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '12px 14px', borderRadius: 12, background: '#fff', border: '1px solid #E9E4F2', opacity: s.on ? 1 : 0.55 }}>
            <span style={{ width: 26, height: 26, borderRadius: 8, background: s.on ? '#F4F0FE' : '#F2EFF9', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={s.on ? '#7C3AED' : '#8A8599'} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                {s.on ? <><circle cx="12" cy="12" r="9" /><path d="M12 7.5V12l3 2" /></> : <path d="M12 5v14M5 12h14" />}
              </svg>
            </span>
            <span style={{ flex: 1, minWidth: 0 }}>
              <span style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: '#17131F' }}>{s.label}</span>
              <span style={{ display: 'block', fontSize: 11, color: '#8A8599' }}>{s.sub}</span>
            </span>
            <span style={{ width: 38, height: 22, borderRadius: 999, background: s.on ? '#7C3AED' : '#E5DFF0', display: 'flex', alignItems: 'center', justifyContent: s.on ? 'flex-end' : 'flex-start', padding: 3, flexShrink: 0 }}>
              <span style={{ width: 16, height: 16, borderRadius: 999, background: '#fff' }} />
            </span>
          </div>
        </div>
      ))}
      <div style={{ marginTop: 14, padding: 11, borderRadius: 12, border: '1.5px dashed #DED3F5', textAlign: 'center', fontSize: 12, fontWeight: 700, color: '#8B5CF6', opacity: visibleSteps >= 3 ? 1 : 0, transition: 'opacity 400ms ease' }}>+ Add step</div>
    </>
  );
}
