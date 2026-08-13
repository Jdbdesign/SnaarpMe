'use client';

import { useState, useRef, useEffect } from 'react';

const FAQS = [
  { q: 'Is SnaarpMe really free?', a: 'Yes. The Free plan covers one booking link, one connected calendar and email reminders, with no time limit and no card required. You only pay when you want multiple links, workflows or team routing.' },
  { q: 'Does it sync with my existing calendar?', a: 'SnaarpMe reads and writes two-way with Google Calendar and Outlook. Existing events block out availability immediately, and anything booked through SnaarpMe appears in your calendar within seconds.' },
  { q: 'Can my whole team use it?', a: 'Yes — Team plans add round-robin routing, collective availability for panels, shared analytics and admin controls, so the whole group works from one set of rules.' },
  { q: 'What happens if someone reschedules?', a: 'Both sides get a link to move or cancel. The new time is checked against live availability, calendars update automatically, and any reminders or follow-ups re-schedule themselves.' },
  { q: 'Is my data secure?', a: 'Traffic is encrypted in transit and at rest, calendar access uses scoped OAuth tokens you can revoke at any time, and SnaarpMe only reads the busy/free information it needs to offer times.' },
];

export default function FaqSection() {
  const [open, setOpen] = useState(0);

  return (
    <section style={{ padding: '80px 26px', background: '#FBFAFE', borderTop: '1px solid #F2EFF9' }}>
      <div style={{ maxWidth: 860, margin: '0 auto' }}>
        <h2 data-reveal="" style={{ fontFamily: "'Poppins',system-ui,sans-serif", fontSize: 'clamp(28px,3.2vw,38px)', lineHeight: 1.18, letterSpacing: '-.022em', fontWeight: 600, color: '#17131F', margin: '0 0 30px', textAlign: 'center' }}>Questions, answered.</h2>
        <div data-reveal="" data-reveal-delay="70" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {FAQS.map((f, i) => (
            <FaqItem key={f.q} question={f.q} answer={f.a} isOpen={i === open} onToggle={() => setOpen(i === open ? -1 : i)} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqItem({ question, answer, isOpen, onToggle }: { question: string; answer: string; isOpen: boolean; onToggle: () => void }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [answer]);

  return (
    <div style={{ background: '#fff', border: '1px solid #ECE7F6', borderRadius: 16, overflow: 'hidden', transition: 'box-shadow 200ms ease' }}>
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={onToggle}
        style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 14, padding: '18px 20px', background: 'transparent', border: 0, textAlign: 'left', cursor: 'pointer', fontSize: '16.5px', fontWeight: 700, color: '#17131F', fontFamily: 'inherit' }}
      >
        <span style={{ flex: 1 }}>{question}</span>
        <span style={{ width: 28, height: 28, flexShrink: 0, borderRadius: 9, background: '#F4F0FE', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 300ms cubic-bezier(.22,.8,.3,1)', transform: `rotate(${isOpen ? 135 : 0}deg)` }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="3" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
        </span>
      </button>
      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? height : 0,
          opacity: isOpen ? 1 : 0,
          overflow: 'hidden',
          transition: 'max-height 300ms cubic-bezier(.22,.8,.3,1), opacity 250ms ease',
        }}
      >
        <p style={{ margin: 0, padding: '0 20px 20px', fontSize: '15.5px', lineHeight: 1.65, color: '#5A5468' }}>{answer}</p>
      </div>
    </div>
  );
}
