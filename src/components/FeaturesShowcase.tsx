'use client';

import { useState, useEffect, useRef } from 'react';

/* ─── Design Tokens (unified across all mockups) ─── */
const T = {
  // Colors
  purple: '#7C3AED',
  purpleDark: '#6D28D9',
  purpleTint: '#F4F0FE',
  purpleSubtle: '#F3F0FA',
  ink: '#17131F',
  body: '#5A5468',
  muted: '#8A8599',
  faint: '#A9A4B8',
  border: '#ECE7F6',
  green: '#0EA47A',
  greenDark: '#0B7A5B',
  greenTint: '#E9F9F3',
  blue: '#3B82F6',
  red: '#E74C3C',
  amber: '#F59E0B',
  amberTint: '#FEF3C7',
  // Typography
  titleSize: 13,
  bodySize: 11,
  metaSize: 9,
  pillSize: 9,
  // Spacing
  cardRadius: 12,
  cardPadding: 16,
  gap: 8,
  // Pills
  pillPad: '3px 8px',
  pillRadius: 999,
};

/* ─── Feature Data ─── */
interface Feature {
  id: string;
  label: string;
  description: string;
}

const FEATURES: Feature[] = [
  {
    id: 'smart-booking',
    label: 'Smart Booking',
    description: 'SnaarpMe shows only your truly free times',
  },
  {
    id: 'video-ready',
    label: 'Video-Ready',
    description: 'Connects directly to Snaarp Meet, automatically adding conferencing details so you don\u2019t have to.',
  },
  {
    id: 'unlimited-meetings',
    label: 'Unlimited Meetings',
    description: 'Schedule as many meetings as you need without worrying about monthly limits or paywalls\u2014even on our free plan.',
  },
  {
    id: 'team-scheduling',
    label: 'Team Scheduling',
    description: 'Unite your team in a single smart queue. We instantly route meetings to the right person so you don\u2019t have to.',
  },
];

/* Fixed container dimensions — sized to fit Team Scheduling (tallest) */
const MOCKUP_HEIGHT = 460;
const AUTO_ADVANCE_MS = 6000;

/* ─── Main Component ─── */
export default function FeaturesShowcase() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const timerStart = useRef(Date.now());
  const rafRef = useRef<number>(0);
  const intervalRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Detect reduced motion
  useEffect(() => {
    setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  // IntersectionObserver to detect when section is in view
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: '0px 0px -10% 0px', threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Auto-advance timer
  useEffect(() => {
    if (reducedMotion || paused || !inView) {
      if (intervalRef.current) { clearTimeout(intervalRef.current); intervalRef.current = null; }
      return;
    }
    timerStart.current = Date.now();
    intervalRef.current = setTimeout(() => {
      setActiveIdx(prev => (prev + 1) % FEATURES.length);
    }, AUTO_ADVANCE_MS);
    return () => { if (intervalRef.current) clearTimeout(intervalRef.current); };
  }, [activeIdx, paused, inView, reducedMotion]);

  // Progress bar RAF
  useEffect(() => {
    if (reducedMotion || paused || !inView) { setProgress(0); return; }
    timerStart.current = Date.now();
    const tick = () => {
      const elapsed = Date.now() - timerStart.current;
      setProgress(Math.min(elapsed / AUTO_ADVANCE_MS, 1));
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [activeIdx, paused, inView, reducedMotion]);

  const handleClick = (idx: number) => {
    setActiveIdx(idx);
    setProgress(0);
    timerStart.current = Date.now();
  };

  return (
    <section ref={sectionRef} id="product" style={{ padding: '80px 26px', background: '#fff', fontFamily: "'Poppins',system-ui,sans-serif" }}>
      <div style={{ maxWidth: 1440, margin: '0 auto' }}>
        {/* Section header */}
        <div data-reveal="" style={{ maxWidth: 620, margin: '0 auto 48px', textAlign: 'center' }}>
          <span style={{ fontSize: '12.5px', letterSpacing: '.14em', fontWeight: 700, color: T.purple }}>
            EVERYTHING YOU NEED TO RUN MEETINGS
          </span>
          <h2 style={{ fontFamily: "'Poppins',system-ui,sans-serif", fontSize: 'clamp(30px,3.4vw,42px)', lineHeight: 1.16, letterSpacing: '-.024em', fontWeight: 600, color: T.ink, margin: '14px 0 0' }}>
            One product. Every part of the meeting,{' '}
            <span style={{ color: T.purpleDark }}>handled.</span>
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.62, color: T.body, margin: '16px 0 0', maxWidth: 560, marginLeft: 'auto', marginRight: 'auto' }}>
            Booking, video, routing, and reminders &mdash; SnaarpMe isn&apos;t a scheduling link with extras bolted on. It&apos;s the whole meeting lifecycle, in one place.
          </p>
        </div>

        {/* Desktop card */}
        <div
          data-reveal=""
          data-reveal-delay="90"
          className="fs-card-desktop"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget as Node)) setPaused(false); }}
          style={{
            background: '#fff',
            border: `1px solid ${T.border}`,
            borderRadius: 22,
            boxShadow: '0 40px 80px -48px rgba(35,20,70,.20)',
            display: 'grid',
            gridTemplateColumns: '300px 1fr',
            overflow: 'hidden',
            height: MOCKUP_HEIGHT + 80,
          }}
        >
          {/* Left column: feature list */}
          <div style={{ padding: '32px 28px', borderRight: `1px solid ${T.border}`, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 24 }}>
            {FEATURES.map((f, idx) => {
              const isActive = idx === activeIdx;
              return (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => handleClick(idx)}
                  style={{
                    display: 'block',
                    textAlign: 'left',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    padding: isActive ? '16px 18px' : '2px 0',
                    background: isActive ? T.purpleTint : 'transparent',
                    borderLeft: isActive ? `4px solid ${T.purple}` : '4px solid transparent',
                    borderRadius: isActive ? 12 : 0,
                    transition: 'all 200ms cubic-bezier(.22,.8,.3,1)',
                    position: 'relative',
                  }}
                >
                  <span style={{ display: 'block', fontSize: 16, fontWeight: 700, color: isActive ? T.purpleDark : T.ink, lineHeight: 1.3, transition: 'color 200ms ease' }}>
                    {f.label}
                  </span>
                  <span style={{ display: 'block', fontSize: 13, color: T.body, marginTop: 4, lineHeight: 1.5 }}>
                    {f.description}
                  </span>
                  {/* Progress bar */}
                  {isActive && !reducedMotion && inView && (
                    <span style={{ position: 'absolute', bottom: 4, left: 18, right: 18, height: 2, background: T.border, borderRadius: T.pillRadius, overflow: 'hidden' }}>
                      <span style={{ display: 'block', height: '100%', width: `${progress * 100}%`, background: T.purple, borderRadius: T.pillRadius }} />
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right area: fixed-size mockup container with cross-fade */}
          <div style={{ padding: '24px 28px', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', height: '100%', overflow: 'hidden' }}>
            <div style={{ width: '100%', height: MOCKUP_HEIGHT, position: 'relative' }}>
              <FadeMockup activeId={FEATURES[activeIdx].id} />
            </div>
          </div>
        </div>

        {/* Mobile accordion */}
        <div className="fs-card-mobile" data-reveal="" data-reveal-delay="90">
          <MobileAccordion features={FEATURES} activeIdx={activeIdx} setActiveIdx={setActiveIdx} />
        </div>
      </div>

      <style>{`
        .fs-card-mobile { display: none; }
        @media (max-width: 899px) {
          .fs-card-desktop { display: none !important; }
          .fs-card-mobile { display: block !important; }
        }
      `}</style>
    </section>
  );
}

/* ─── Fade Transition Wrapper ─── */
function FadeMockup({ activeId }: { activeId: string }) {
  const [displayedId, setDisplayedId] = useState(activeId);
  const [phase, setPhase] = useState<'visible' | 'fading-out' | 'fading-in'>('visible');
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  useEffect(() => {
    if (activeId === displayedId) return;

    // Clear any in-progress transition
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    if (reducedMotion.current) {
      // Instant swap for reduced motion
      setDisplayedId(activeId);
      setPhase('visible');
      return;
    }

    // Start fade out
    setPhase('fading-out');
    timeoutRef.current = setTimeout(() => {
      setDisplayedId(activeId);
      setPhase('fading-in');
      timeoutRef.current = setTimeout(() => {
        setPhase('visible');
      }, 260);
    }, 200);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [activeId, displayedId]);

  const style: React.CSSProperties = {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  };

  if (phase === 'fading-out') {
    style.opacity = 0;
    style.transform = 'translateY(6px)';
    style.transition = 'opacity 200ms cubic-bezier(.22,.8,.3,1), transform 200ms cubic-bezier(.22,.8,.3,1)';
  } else if (phase === 'fading-in') {
    style.opacity = 1;
    style.transform = 'translateY(0)';
    style.transition = 'opacity 260ms cubic-bezier(.22,.8,.3,1), transform 260ms cubic-bezier(.22,.8,.3,1)';
  } else {
    style.opacity = 1;
    style.transform = 'translateY(0)';
  }

  return (
    <div style={style}>
      <RightMockup activeId={displayedId} key={displayedId} />
    </div>
  );
}

/* ─── Right Mockup Switcher ─── */
function RightMockup({ activeId }: { activeId: string }) {
  switch (activeId) {
    case 'smart-booking': return <SmartBookingMockup />;
    case 'video-ready': return <VideoReadyMockup />;
    case 'unlimited-meetings': return <UnlimitedMeetingsMockup />;
    case 'team-scheduling': return <TeamSchedulingMockup />;
    default: return null;
  }
}

/* ─── Stagger entrance hook ─── */
function useStaggerIn(count: number, staggerMs = 90) {
  const [visible, setVisible] = useState<boolean[]>(Array(count).fill(false));
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion.current) {
      setVisible(Array(count).fill(true));
      return;
    }
    const timers: ReturnType<typeof setTimeout>[] = [];
    for (let i = 0; i < count; i++) {
      timers.push(setTimeout(() => {
        setVisible(prev => { const next = [...prev]; next[i] = true; return next; });
      }, i * staggerMs + 100));
    }
    return () => timers.forEach(clearTimeout);
  }, [count, staggerMs]);

  return visible;
}

/* ═══════════════════════════════════════════════════════════
   FEATURE 1 — SMART BOOKING
   ═══════════════════════════════════════════════════════════ */
function SmartBookingMockup() {
  const [slotActive, setSlotActive] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setSlotActive(true), 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 16, width: '100%', height: '100%', alignItems: 'start' }}>
      {/* Meeting invite card */}
      <div style={{ borderRadius: T.cardRadius, overflow: 'hidden', border: `1px solid ${T.border}`, boxShadow: '0 6px 20px -8px rgba(35,20,70,.12)' }}>
        <div style={{ background: T.purpleDark, padding: '14px 16px 12px', color: '#fff' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ width: 30, height: 30, borderRadius: T.pillRadius, background: 'linear-gradient(145deg,#C4B5FD,#9F7AEA)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: T.bodySize, fontWeight: 700 }}>DJ</span>
            <span style={{ fontSize: T.bodySize, fontWeight: 600 }}>Daniel Joe</span>
          </div>
          <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 8 }}>60Mins Meeting</div>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            <span style={{ padding: T.pillPad, borderRadius: T.pillRadius, background: 'rgba(255,255,255,.2)', fontSize: T.metaSize, fontWeight: 600 }}>⏱ 60 mins</span>
            <span style={{ padding: T.pillPad, borderRadius: T.pillRadius, background: 'rgba(255,255,255,.2)', fontSize: T.metaSize, fontWeight: 600 }}>🔗 Link provided after RSVP</span>
          </div>
        </div>
        <div style={{ background: '#fff', padding: `${T.cardPadding}px` }}>
          <p style={{ fontSize: T.bodySize, fontWeight: 600, color: T.ink, margin: '0 0 6px' }}>Hi there! 👋</p>
          <p style={{ fontSize: T.metaSize + 1, color: T.body, lineHeight: 1.6, margin: '0 0 12px' }}>
            I&apos;m looking forward to connecting with you! Whether it&apos;s about Snaarp, cybersecurity, business growth, or collaboration opportunities, I&apos;m excited to discuss how we can create something impactful together.
          </p>
          <p style={{ fontSize: T.metaSize + 1, color: T.body, margin: '0 0 2px' }}>See you soon!</p>
          <p style={{ fontSize: T.metaSize + 1, color: T.ink, fontWeight: 600, margin: '0 0 14px' }}>&mdash; Daniel Joe</p>
          <button type="button" style={{ width: '100%', padding: '10px 16px', borderRadius: T.pillRadius, background: T.purple, color: '#fff', fontSize: T.titleSize, fontWeight: 700, border: 'none', cursor: 'pointer', marginBottom: 4 }}>Next</button>
          <p style={{ fontSize: T.metaSize, color: T.faint, textAlign: 'center', margin: 0 }}>Select a date &amp; time to continue</p>
        </div>
      </div>

      {/* Date & time picker */}
      <DateTimePicker slotAnimated={slotActive} />
    </div>
  );
}

function DateTimePicker({ slotAnimated = true }: { slotAnimated?: boolean }) {
  const days = ['MON','TUE','WED','THU','FRI','SAT','SUN'];
  const dates = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];

  return (
    <div style={{ background: '#fff', borderRadius: T.cardRadius, border: `1px solid ${T.border}`, padding: `${T.cardPadding}px`, boxShadow: '0 6px 20px -8px rgba(35,20,70,.08)' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 12 }}>
        <div>
          <h3 style={{ fontSize: T.titleSize + 1, fontWeight: 700, color: T.ink, margin: '0 0 2px' }}>Select a date &amp; time</h3>
          <p style={{ fontSize: T.metaSize + 1, color: T.muted, margin: 0, fontStyle: 'italic' }}>All times shown in your local timezone</p>
        </div>
        <button type="button" aria-label="Close" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 2, color: T.muted, fontSize: 16, lineHeight: 1 }}>&times;</button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 12 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={T.muted} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 5l-7 7 7 7" /></svg>
            <span style={{ fontSize: T.bodySize + 1, fontWeight: 700, color: T.ink }}>June 2026</span>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={T.muted} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 5l7 7-7 7" /></svg>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 0, marginBottom: 2 }}>
            {days.map(d => <span key={d} style={{ textAlign: 'center', fontSize: 8, fontWeight: 700, color: T.muted, padding: '2px 0' }}>{d}</span>)}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 0 }}>
            {dates.map(d => {
              const sel = d === 8; const dot = d === 6; const mute = [27,28].includes(d);
              return (
                <div key={d} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '3px 0' }}>
                  <span style={{ width: 24, height: 24, borderRadius: T.pillRadius, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: T.metaSize + 1, fontWeight: sel ? 700 : 500, color: sel ? '#fff' : mute ? '#C3BFCF' : T.ink, background: sel ? T.purple : 'transparent' }}>{d}</span>
                  {dot && <span style={{ width: 3, height: 3, borderRadius: T.pillRadius, background: T.purple, marginTop: 1 }} />}
                </div>
              );
            })}
          </div>
        </div>
        <div style={{ minWidth: 82 }}>
          <div style={{ marginBottom: 6 }}>
            <span style={{ fontSize: T.bodySize, fontWeight: 700, color: T.ink, display: 'block' }}>Mon, Jun 8</span>
            <span style={{ fontSize: T.metaSize, color: T.muted }}>Africa/Lagos</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {['9:00 AM','10:30 AM','11:00 AM','11:30 AM','12:00 PM','1:30 PM','2:00 PM','2:30 PM','4:00 PM'].map((t,i) => (
              <button key={t} type="button" style={{ padding: '6px 10px', borderRadius: 8, border: i===0 ? 'none' : `1px solid ${T.border}`, background: i===0 && slotAnimated ? T.purple : i===0 ? T.border : '#fff', color: i===0 && slotAnimated ? '#fff' : T.ink, fontSize: T.metaSize + 1, fontWeight: 600, cursor: 'pointer', textAlign: 'center', fontFamily: 'inherit', transition: 'all 400ms cubic-bezier(.22,.8,.3,1)', transform: i===0 && slotAnimated ? 'scale(1.05)' : 'scale(1)' }}>{t}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   FEATURE 2 — VIDEO-READY
   ═══════════════════════════════════════════════════════════ */
function VideoReadyMockup() {
  const participants = [
    { name: 'Fathima Ali', initials: 'FA', color: T.purple },
    { name: 'Marcus Cole', initials: 'MC', color: T.blue },
    { name: 'Priya Nair', initials: 'PN', color: T.green },
    { name: 'Daniel Joe', initials: 'DJ', color: T.red },
  ];
  const visible = useStaggerIn(4, 100);

  return (
    <div style={{ width: '100%', height: '100%', borderRadius: T.cardRadius, overflow: 'hidden', border: '1px solid #2A2A2A', boxShadow: '0 6px 20px -8px rgba(35,20,70,.18)', display: 'flex', flexDirection: 'column' }}>
      {/* Presenter bar */}
      <div style={{ background: '#2D2D2D', padding: '7px 12px', display: 'flex', alignItems: 'center', gap: 7, flexShrink: 0 }}>
        <span style={{ width: 18, height: 18, borderRadius: T.pillRadius, background: T.red, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, fontWeight: 700, color: '#fff' }}>F</span>
        <span style={{ fontSize: T.metaSize + 1, color: '#ddd', fontWeight: 500 }}>Fathima is presenting</span>
      </div>

      {/* Main: screen share + participants */}
      <div style={{ background: '#1A1A1A', display: 'grid', gridTemplateColumns: '1fr 200px', flex: 1, minHeight: 0 }}>
        {/* Screen share canvas */}
        <div style={{ padding: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: '100%', height: '100%', background: '#fff', borderRadius: 8, overflow: 'hidden', boxShadow: '0 4px 16px rgba(0,0,0,.3)', display: 'grid', gridTemplateColumns: '110px 1fr' }}>
            {/* Sidebar */}
            <div style={{ background: '#FAFAFA', borderRight: '1px solid #EAEAEA', padding: '10px 8px' }}>
              <div style={{ fontSize: T.bodySize, fontWeight: 700, color: T.ink, marginBottom: 10 }}>Snaarp</div>
              {['Dashboard','Organization','Domains','Users','Groups','Data Migration','Subscription','Add-ons','MoS Settings'].map((item,i) => (
                <div key={item} style={{ fontSize: 8, color: i===2 ? T.purpleDark : T.body, fontWeight: i===2 ? 700 : 500, padding: '4px 6px', borderRadius: 5, background: i===2 ? T.purpleTint : 'transparent', marginBottom: 1 }}>{item}</div>
              ))}
            </div>
            {/* Main content */}
            <div style={{ padding: '10px 12px', overflow: 'hidden' }}>
              <div style={{ display: 'flex', gap: 10, marginBottom: 8, fontSize: 8, color: T.muted }}>
                {['epo.net.ng','directory','settings'].map(t => <span key={t}>{t}</span>)}
              </div>
              <div style={{ display: 'flex', gap: 6, marginBottom: 10 }}>
                {[{v:'8',l:'Total'},{v:'7',l:'Active'},{v:'1',l:'Pending'},{v:'45',l:'Domain'}].map(s => (
                  <div key={s.l} style={{ flex: 1, background: T.purpleSubtle, borderRadius: 5, padding: '5px 6px', textAlign: 'center' }}>
                    <div style={{ fontSize: T.bodySize + 1, fontWeight: 700, color: T.ink }}>{s.v}</div>
                    <div style={{ fontSize: 7, color: T.muted }}>{s.l}</div>
                  </div>
                ))}
              </div>
              <div style={{ fontSize: T.metaSize, fontWeight: 700, color: T.ink, marginBottom: 4 }}>Managed Domains</div>
              <div style={{ display: 'flex', gap: 3, fontSize: 7, color: T.muted, marginBottom: 3 }}>
                <span style={{ flex: 2 }}>Domain</span><span style={{ flex: 1 }}>Status</span><span style={{ flex: 1 }}>Type</span><span style={{ flex: 1 }}>Added</span>
              </div>
              {[1,2,3,4].map(r => (
                <div key={r} style={{ display: 'flex', gap: 3, fontSize: 7, color: T.body, padding: '3px 0', borderBottom: `1px solid ${T.purpleSubtle}`, alignItems: 'center' }}>
                  <span style={{ flex: 2 }}>example{r}.com</span>
                  <span style={{ flex: 1 }}><span style={{ padding: '1px 4px', borderRadius: 3, background: r<=3 ? T.greenTint : T.amberTint, color: r<=3 ? T.greenDark : T.amber, fontSize: 6, fontWeight: 600 }}>{r<=3?'Active':'Pending'}</span></span>
                  <span style={{ flex: 1 }}>Primary</span><span style={{ flex: 1 }}>Jun 2024</span>
                </div>
              ))}
              <div style={{ fontSize: 8, fontWeight: 700, color: T.ink, marginTop: 8 }}>Recent Domain Activity</div>
              <div style={{ fontSize: 7, color: T.muted }}>Information for analysis</div>
            </div>
          </div>
        </div>

        {/* Participants column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, padding: '12px 10px', alignItems: 'center', justifyContent: 'center' }}>
          {participants.map((p, i) => (
            <div key={p.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 6, background: '#3A3A3A', borderRadius: 12, padding: '14px 12px', width: '100%', opacity: visible[i] ? 1 : 0, transform: visible[i] ? 'translateY(0)' : 'translateY(8px)', transition: 'opacity 300ms cubic-bezier(.22,.8,.3,1), transform 300ms cubic-bezier(.22,.8,.3,1)' }}>
              <span style={{ width: 42, height: 42, borderRadius: T.pillRadius, background: p.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: T.bodySize, fontWeight: 700, color: '#fff' }}>{p.initials}</span>
              <span style={{ fontSize: 9, color: '#bbb', textAlign: 'center', lineHeight: 1.2 }}>{p.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Control bar — Lucide icons: Mic, Video, Smile, Hand, Upload, ⋯, PhoneOff */}
      <div style={{ background: '#2D2D2D', padding: '8px 14px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, flexShrink: 0, position: 'relative' }}>
        {/* Mic */}
        <span style={{ width: 30, height: 30, borderRadius: T.pillRadius, background: 'rgba(255,255,255,.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/></svg>
        </span>
        {/* Video */}
        <span style={{ width: 30, height: 30, borderRadius: T.pillRadius, background: 'rgba(255,255,255,.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2"/></svg>
        </span>
        {/* Smile (reactions) */}
        <span style={{ width: 30, height: 30, borderRadius: T.pillRadius, background: 'rgba(255,255,255,.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
        </span>
        {/* Hand (raise hand) */}
        <span style={{ width: 30, height: 30, borderRadius: T.pillRadius, background: 'rgba(255,255,255,.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2"/><path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"/><path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 13"/></svg>
        </span>
        {/* Upload (screen share) */}
        <span style={{ width: 30, height: 30, borderRadius: T.pillRadius, background: 'rgba(255,255,255,.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
        </span>
        {/* More options */}
        <span style={{ width: 30, height: 30, borderRadius: T.pillRadius, background: 'rgba(255,255,255,.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, color: '#fff', fontWeight: 700 }}>⋯</span>
        {/* End call — PhoneOff */}
        <span style={{ width: 36, height: 30, borderRadius: T.pillRadius, background: T.red, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"/><line x1="23" y1="1" x2="1" y2="23"/></svg>
        </span>

        {/* Right-side utility icons (Lucide: Users, Tablet, Home) */}
        <div style={{ position: 'absolute', right: 14, display: 'flex', gap: 8, alignItems: 'center' }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   FEATURE 3 — UNLIMITED MEETINGS
   ═══════════════════════════════════════════════════════════ */
function UnlimitedMeetingsMockup() {
  const days = ['MON','TUE','WED','THU','FRI','SAT','SUN'];
  const dates = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
  const cardVisible = useStaggerIn(4, 90);
  const meetings = [
    { day: 15, wd: 'MON', title: 'Northgate product review', time: '09:00 – 10:00', color: T.purple, avatars: [T.red,T.blue,T.amber,T.green] },
    { day: 16, wd: 'TUE', title: 'Research synthesis workshop', time: '11:00 – 12:30', color: T.blue, avatars: [T.purple,T.red,T.green] },
    { day: 17, wd: 'WED', title: 'Horizon client checkpoint', time: '14:00 – 14:45', color: T.green, avatars: [T.blue,T.amber,T.purple,T.red] },
    { day: 18, wd: 'THU', title: 'Summer studio lunch', time: '12:30 – 13:30', color: T.amber, avatars: [T.red,T.purple,T.blue,T.green] },
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 16, width: '100%', height: '100%', alignItems: 'start' }}>
      {/* Calendar */}
      <div style={{ background: '#fff', borderRadius: T.cardRadius, border: `1px solid ${T.border}`, padding: `${T.cardPadding}px`, boxShadow: '0 6px 20px -8px rgba(35,20,70,.08)' }}>
        <div style={{ fontSize: T.titleSize, fontWeight: 700, color: T.ink, marginBottom: 12 }}>All Active Events</div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={T.muted} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 5l-7 7 7 7"/></svg>
          <span style={{ fontSize: T.bodySize + 1, fontWeight: 700, color: T.ink }}>June 2026</span>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={T.muted} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 5l7 7-7 7"/></svg>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 0, marginBottom: 2 }}>
          {days.map(d => <span key={d} style={{ textAlign: 'center', fontSize: 8, fontWeight: 700, color: T.muted, padding: '2px 0' }}>{d}</span>)}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 0 }}>
          {dates.map(d => {
            const sel = d===8; const dot = d===6; const mute = [20,21,27,28].includes(d);
            return (
              <div key={d} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '3px 0' }}>
                <span style={{ width: 24, height: 24, borderRadius: T.pillRadius, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: T.metaSize + 1, fontWeight: sel?700:500, color: sel?'#fff':mute?'#C3BFCF':T.ink, background: sel?T.purple:'transparent' }}>{d}</span>
                {dot && <span style={{ width: 3, height: 3, borderRadius: T.pillRadius, background: T.purple, marginTop: 1 }} />}
              </div>
            );
          })}
        </div>
      </div>

      {/* Agenda */}
      <div style={{ background: '#fff', borderRadius: T.cardRadius, border: `1px solid ${T.border}`, padding: `${T.cardPadding}px`, boxShadow: '0 6px 20px -8px rgba(35,20,70,.08)' }}>
        <div style={{ display: 'flex', gap: 0, marginBottom: 12, background: T.purpleSubtle, borderRadius: 8, padding: 3, width: 'fit-content' }}>
          <span style={{ padding: '4px 12px', borderRadius: 6, background: T.purple, color: '#fff', fontSize: T.metaSize + 1, fontWeight: 700 }}>Agenda</span>
          <span style={{ padding: '4px 12px', borderRadius: 6, fontSize: T.metaSize + 1, fontWeight: 600, color: T.muted }}>Week</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 12 }}>
          <div>
            <span style={{ display: 'block', fontSize: 8, fontWeight: 700, color: T.muted, letterSpacing: '.06em', marginBottom: 2 }}>NEXT FEW DAYS</span>
            <span style={{ display: 'block', fontSize: T.titleSize, fontWeight: 700, color: T.ink }}>5 meetings on deck</span>
          </div>
          <span style={{ fontSize: T.metaSize + 1, color: T.muted }}>Starting Monday</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {meetings.map((m, mi) => (
            <div key={m.title} style={{ display: 'flex', gap: 8, padding: '8px 8px', borderRadius: T.cardRadius - 2, border: `1px solid ${T.border}`, alignItems: 'center', position: 'relative', overflow: 'hidden', opacity: cardVisible[mi] ? 1 : 0, transform: cardVisible[mi] ? 'translateY(0)' : 'translateY(10px)', transition: 'opacity 300ms cubic-bezier(.22,.8,.3,1), transform 300ms cubic-bezier(.22,.8,.3,1)' }}>
              <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, background: m.color, borderRadius: `${T.cardRadius-2}px 0 0 ${T.cardRadius-2}px` }} />
              <div style={{ paddingLeft: 6, textAlign: 'center', minWidth: 28, flexShrink: 0 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: T.ink, lineHeight: 1 }}>{m.day}</div>
                <div style={{ fontSize: 7, fontWeight: 700, color: T.muted }}>{m.wd}</div>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: T.bodySize, fontWeight: 700, color: T.ink, marginBottom: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{m.title}</div>
                <div style={{ fontSize: T.metaSize, color: T.muted, marginBottom: 3 }}>{m.time}</div>
                <div style={{ display: 'flex' }}>
                  {m.avatars.map((c,i) => <span key={i} style={{ width: 16, height: 16, borderRadius: T.pillRadius, background: c, border: '2px solid #fff', marginLeft: i===0?0:-5, position: 'relative', zIndex: m.avatars.length-i }} />)}
                </div>
              </div>
              <span style={{ fontSize: T.pillSize, fontWeight: 600, color: T.greenDark, background: T.greenTint, padding: T.pillPad, borderRadius: T.pillRadius, flexShrink: 0 }}>Confirmed</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   FEATURE 4 — TEAM SCHEDULING
   ═══════════════════════════════════════════════════════════ */
function TeamSchedulingMockup() {
  const [barWidth, setBarWidth] = useState(0);
  const rowVisible = useStaggerIn(4, 90);

  useEffect(() => {
    const t = setTimeout(() => setBarWidth(73), 200);
    return () => clearTimeout(t);
  }, []);

  const dayIndicators = [{d:15,l:'TUE'},{d:16,l:'WED'},{d:17,l:'THU'},{d:18,l:'FRI',active:true},{d:19,l:'SAT'}];
  const scheduleRows = [
    { time: '09:00 – 09:30', title: 'Onboarding kickoff', sub: 'Daily team sync', color: T.green, status: 'Starting up', sc: T.green },
    { time: '10:00 – 10:45', title: 'Apollo onboarding follow-up', sub: 'Client meeting', color: T.purple, status: 'On track', sc: T.purple },
    { time: '11:30 – 12:00', title: 'Monday product standup', sub: 'Internal review', color: T.blue, status: 'On track', sc: T.blue },
    { time: '14:00 – 14:30', title: 'Design systems critique', sub: 'Team workshop', color: T.amber, status: 'Wrapping up', sc: T.amber },
  ];
  const hosts = [{n:'Elena Rabanito',c:T.purple,p:'34%'},{n:'MarkGills',c:T.blue,p:'28%'},{n:'JMVulan',c:T.green,p:'22%'}];

  return (
    <div style={{ width: '100%', height: '100%', borderRadius: T.cardRadius, border: `1px solid ${T.border}`, overflow: 'hidden', boxShadow: '0 6px 20px -8px rgba(35,20,70,.08)', background: '#fff', display: 'flex', flexDirection: 'column' }}>
      {/* Top strip */}
      <div style={{ padding: '12px 16px 10px', borderBottom: `1px solid ${T.border}`, flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
          <span style={{ fontSize: T.metaSize + 1, color: T.muted, fontWeight: 600 }}>July 15 &ndash; 19</span>
          <span style={{ fontSize: T.metaSize, color: T.purple, fontWeight: 700, cursor: 'pointer' }}>View availability ↗</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ display: 'flex', gap: 5, flex: 1 }}>
            {dayIndicators.map(d => (
              <div key={d.d} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                <span style={{ width: 28, height: 28, borderRadius: 8, background: d.active?T.purple:'#F7F7F7', color: d.active?'#fff':T.ink, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: T.bodySize, fontWeight: 700 }}>{d.d}</span>
                <span style={{ fontSize: 7, color: T.muted, fontWeight: 600 }}>{d.l}</span>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            {[{v:'22',l:'meetings'},{v:'73%',l:'capacity'},{v:'8.5m',l:'avg wait'}].map(s => (
              <div key={s.l} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: T.ink }}>{s.v}</div>
                <div style={{ fontSize: 7, color: T.muted }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Helper text */}
      <div style={{ padding: '5px 16px', fontSize: 8, color: T.faint, borderBottom: `1px solid ${T.border}`, flexShrink: 0 }}>
        4 team members scheduled for this week
      </div>

      {/* Bottom panels */}
      <div style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', flex: 1, minHeight: 0 }}>
        {/* Left: booking rhythm */}
        <div style={{ padding: '14px 14px', borderRight: `1px solid ${T.border}` }}>
          <div style={{ fontSize: T.bodySize, fontWeight: 700, color: T.ink, marginBottom: 8 }}>Your booking rhythm</div>
          <div style={{ display: 'flex', gap: 14, marginBottom: 10 }}>
            <div><div style={{ fontSize: 20, fontWeight: 700, color: T.ink, lineHeight: 1 }}>6</div><div style={{ fontSize: 8, color: T.muted }}>meetings</div></div>
            <div><div style={{ fontSize: 20, fontWeight: 700, color: T.ink, lineHeight: 1 }}>3h20m</div><div style={{ fontSize: 8, color: T.muted }}>total time</div></div>
          </div>
          <div style={{ marginBottom: 10 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
              <span style={{ fontSize: T.metaSize, color: T.body, fontWeight: 600 }}>Team capacity</span>
              <span style={{ fontSize: T.metaSize, fontWeight: 700, color: T.purple }}>73%</span>
            </div>
            <div style={{ height: 5, borderRadius: T.pillRadius, background: T.border, overflow: 'hidden' }}>
              <div style={{ width: `${barWidth}%`, height: '100%', borderRadius: T.pillRadius, background: T.purple, transition: 'width 800ms cubic-bezier(.16,1,.3,1)' }} />
            </div>
            <div style={{ fontSize: 7, color: T.faint, marginTop: 2 }}>Based on available hours this week</div>
          </div>
          <div style={{ fontSize: T.bodySize, fontWeight: 700, color: T.ink, marginBottom: 6 }}>Today&apos;s hosts</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            {hosts.map(h => (
              <div key={h.n} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ width: 6, height: 6, borderRadius: T.pillRadius, background: h.c, flexShrink: 0 }} />
                <span style={{ fontSize: T.metaSize, color: T.body, flex: 1 }}>{h.n}</span>
                <span style={{ fontSize: T.metaSize, color: T.muted, fontWeight: 600 }}>{h.p}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 6, fontSize: T.metaSize, color: T.purple, fontWeight: 600 }}>+ 2 follow-ups</div>
        </div>

        {/* Right: Monday's schedule */}
        <div style={{ padding: '14px 14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
            <span style={{ fontSize: T.bodySize, fontWeight: 700, color: T.ink }}>Monday&apos;s schedule</span>
            <div style={{ display: 'flex', gap: 5 }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={T.muted} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={T.muted} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {scheduleRows.map((row, ri) => (
              <div key={row.title} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '7px 8px', borderRadius: T.cardRadius - 2, border: `1px solid ${T.border}`, position: 'relative', overflow: 'hidden', opacity: rowVisible[ri] ? 1 : 0, transform: rowVisible[ri] ? 'translateY(0)' : 'translateY(10px)', transition: 'opacity 300ms cubic-bezier(.22,.8,.3,1), transform 300ms cubic-bezier(.22,.8,.3,1)' }}>
                <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, background: row.color, borderRadius: `${T.cardRadius-2}px 0 0 ${T.cardRadius-2}px` }} />
                <span style={{ fontSize: T.metaSize, color: T.muted, fontWeight: 600, minWidth: 62, paddingLeft: 5 }}>{row.time}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: T.bodySize, fontWeight: 700, color: T.ink, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{row.title}</div>
                  <div style={{ fontSize: 8, color: T.faint }}>{row.sub}</div>
                </div>
                <span style={{ fontSize: T.pillSize, fontWeight: 600, color: row.sc, background: `${row.sc}14`, padding: T.pillPad, borderRadius: T.pillRadius, flexShrink: 0, whiteSpace: 'nowrap' }}>{row.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Mobile Accordion ─── */
function MobileAccordion({ features, activeIdx, setActiveIdx }: { features: Feature[]; activeIdx: number; setActiveIdx: (idx: number) => void }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {features.map((f, idx) => {
        const isOpen = idx === activeIdx;
        return (
          <div key={f.id} style={{ background: '#fff', border: `1px solid ${T.border}`, borderRadius: 16, overflow: 'hidden' }}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setActiveIdx(isOpen ? -1 : idx)}
              style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 12, padding: '16px 18px', background: isOpen ? T.purpleTint : 'transparent', borderTopWidth: 0, borderTopStyle: 'none', borderRightWidth: 0, borderRightStyle: 'none', borderBottomWidth: 0, borderBottomStyle: 'none', borderLeftWidth: isOpen ? 4 : 4, borderLeftStyle: 'solid', borderLeftColor: isOpen ? T.purple : 'transparent', textAlign: 'left', cursor: 'pointer', fontFamily: 'inherit' }}
            >
              <span style={{ flex: 1 }}>
                <span style={{ display: 'block', fontSize: 16, fontWeight: 700, color: isOpen ? T.purpleDark : T.ink }}>{f.label}</span>
                <span style={{ display: 'block', fontSize: 13, color: T.body, marginTop: 3 }}>{f.description}</span>
              </span>
              <span style={{ width: 28, height: 28, flexShrink: 0, borderRadius: 9, background: T.purpleTint, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 220ms cubic-bezier(.3,.9,.3,1)', transform: `rotate(${isOpen ? 135 : 0}deg)` }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={T.purple} strokeWidth="3" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
              </span>
            </button>
            {isOpen && (
              <div style={{ padding: '0 18px 18px' }}>
                <RightMockup activeId={f.id} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
