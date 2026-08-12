'use client';

import { useState } from 'react';

const QUOTES = [
  { text: 'We used to lose half a day a week just coordinating call times. Now it\u2019s a link.', name: 'Priya Shah', role: 'Head of Sales', avatar: '/assets/avatars/Container.png' },
  { text: 'The round-robin routing alone paid for itself in the first month \u2014 no more manual lead assignment.', name: 'Marcus Webb', role: 'RevOps Lead', avatar: '/assets/avatars/Container-1.png' },
  { text: 'Candidates comment on how easy scheduling is before they even meet us. That\u2019s a good first impression to accidentally create.', name: 'Elena Ruiz', role: 'Talent Acquisition Lead', avatar: '/assets/avatars/Container-2.png' },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const n = QUOTES.length;
  const q = QUOTES[((idx % n) + n) % n];

  return (
    <section style={{ padding: '80px 26px', background: '#fff' }}>
      <div data-reveal="" style={{ maxWidth: 1440, margin: '0 auto', borderRadius: 26, overflow: 'hidden', boxShadow: '0 40px 80px -50px rgba(35,20,70,.5)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(340px,1fr))' }}>
        {/* Stats */}
        <div style={{ position: 'relative', background: 'linear-gradient(150deg,#7C3AED,#6D28D9 62%,#6D28D9)', padding: 'clamp(34px,4vw,48px)', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: -90, right: -70, width: 320, height: 320, background: 'radial-gradient(circle,rgba(255,255,255,.16),transparent 66%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: -140, left: -60, width: 300, height: 300, background: 'radial-gradient(circle,rgba(167,139,250,.34),transparent 68%)', pointerEvents: 'none' }} />
          <h2 style={{ position: 'relative', fontFamily: "'Poppins',system-ui,sans-serif", fontSize: 'clamp(26px,3vw,34px)', lineHeight: 1.2, letterSpacing: '-.022em', fontWeight: 600, color: '#fff', margin: 0, maxWidth: 340 }}>Loved by thousands of teams worldwide</h2>
          <div style={{ position: 'relative', height: 1, background: 'rgba(255,255,255,.22)', margin: '26px 0' }} />
          <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(4,minmax(0,1fr))', gap: 10 }}>
            {[
              { val: '2M+', label: 'Meetings booked' },
              { val: '500K+', label: 'Active users' },
              { val: '99.9%', label: 'Uptime' },
              { val: '150+', label: 'Countries' },
            ].map(s => (
              <div key={s.val} style={{ padding: '0 2px', minWidth: 0 }}>
                <span style={{ display: 'block', fontFamily: "'Poppins',system-ui,sans-serif", fontSize: 'clamp(23px,2.6vw,32px)', fontWeight: 700, color: '#fff', letterSpacing: '-.03em', lineHeight: 1 }}>{s.val}</span>
                <span style={{ display: 'block', fontSize: 12, color: '#D6C9F5', marginTop: 7, lineHeight: 1.35 }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div style={{ background: '#FBFAFE', padding: 'clamp(34px,4vw,48px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 26, border: '1px solid #EFEBF7', borderLeft: 0 }}>
          <div>
            <div style={{ display: 'flex', gap: 5 }} aria-label="Five out of five stars">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="17" height="17" viewBox="0 0 24 24" fill="#7C3AED"><path d="M12 1.8l3.1 6.6 7 1-5.1 5.1 1.2 7.2L12 18.3 5.8 21.7 7 14.5 1.9 9.4l7-1z" /></svg>
              ))}
            </div>
            <blockquote aria-live="polite" style={{ margin: '20px 0 0', fontFamily: "'Poppins',system-ui,sans-serif", fontSize: 'clamp(18px,1.9vw,21px)', lineHeight: 1.55, color: '#17131F', letterSpacing: '-.008em', minHeight: '3.2em' }}>&ldquo;{q.text}&rdquo;</blockquote>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
            <img src={q.avatar} alt={q.name} style={{ width: 56, height: 56, flexShrink: 0, borderRadius: 999, objectFit: 'cover' }} />
            <span style={{ flex: 1, minWidth: 150 }}>
              <span style={{ display: 'block', fontSize: 15, fontWeight: 700, color: '#17131F' }}>{q.name}</span>
              <span style={{ display: 'block', fontSize: '13.5px', color: '#645E75' }}>{q.role}</span>
            </span>
            <span style={{ display: 'flex', gap: 9, flexShrink: 0 }}>
              <button type="button" aria-label="Previous testimonial" onClick={() => setIdx(i => i - 1)} style={{ width: 42, height: 42, borderRadius: 999, background: '#fff', border: '1px solid #E9E4F2', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 6px 16px -12px rgba(35,20,70,.6)' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#40394F" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M15 5l-7 7 7 7" /></svg>
              </button>
              <button type="button" aria-label="Next testimonial" onClick={() => setIdx(i => i + 1)} style={{ width: 42, height: 42, borderRadius: 999, background: '#fff', border: '1px solid #E9E4F2', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 6px 16px -12px rgba(35,20,70,.6)' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#40394F" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M9 5l7 7-7 7" /></svg>
              </button>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
