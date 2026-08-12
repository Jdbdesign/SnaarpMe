'use client';

import { useEffect, useRef, useCallback } from 'react';

export default function HeroDemo() {
  const rootRef = useRef<HTMLDivElement>(null);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTimers = useCallback(() => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  }, []);

  const t = useCallback((fn: () => void, ms: number) => {
    timersRef.current.push(setTimeout(fn, ms));
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const q = (s: string) => root.querySelector<HTMLElement>(s);
    const slots = Array.from(root.querySelectorAll<HTMLElement>('[data-slot]'));
    const cursor = q('[data-cursor]');
    const ripple = q('[data-ripple]');
    const day = q('[data-day="15"]');
    const pick = root.querySelector<HTMLElement>('[data-slot="10:00 AM"]');
    const toast = q('[data-toast]');

    if (!cursor || !day || !pick || !toast) return;

    const showSlots = () => slots.forEach(s => { s.style.opacity = '1'; s.style.transform = 'translateY(0)'; });
    const hideSlots = () => slots.forEach(s => { s.style.opacity = '0'; s.style.transform = 'translateY(8px)'; });
    const selDay = (on: boolean) => {
      day.style.background = on ? '#7C3AED' : '#F5F1FE';
      day.style.color = on ? '#fff' : '#6D28D9';
      day.style.boxShadow = on ? '0 8px 18px -8px rgba(109,40,217,.95)' : 'none';
    };
    const selSlot = (on: boolean) => {
      pick.style.background = on ? '#7C3AED' : '#fff';
      pick.style.borderColor = on ? '#7C3AED' : '#E9E4F2';
      pick.style.color = on ? '#fff' : '#17131F';
    };
    const showToast = (on: boolean) => {
      toast.style.transition = on
        ? 'opacity 380ms ease, transform 620ms cubic-bezier(.2,1.45,.4,1)'
        : 'opacity 380ms ease, transform 380ms ease';
      toast.style.opacity = on ? '1' : '0';
      toast.style.transform = on ? 'translateY(0) scale(1)' : 'translateY(16px) scale(.94)';
    };

    if (reduced) {
      cursor.style.display = 'none';
      showSlots();
      selDay(true);
      selSlot(true);
      showToast(true);
      toast.style.transition = 'none';
      return;
    }

    const at = (el: HTMLElement) => {
      const a = root.getBoundingClientRect();
      const b = el.getBoundingClientRect();
      return { x: b.left - a.left + b.width * 0.52, y: b.top - a.top + b.height * 0.55 };
    };

    const moveTo = (el: HTMLElement, dur: number) => {
      const p = at(el);
      cursor.style.transition = `transform ${dur}ms cubic-bezier(.36,.06,.2,1), opacity 260ms ease`;
      cursor.style.transform = `translate(${p.x + 7}px,${p.y + 6}px)`;
      t(() => {
        cursor.style.transition = 'transform 240ms cubic-bezier(.2,.9,.3,1)';
        cursor.style.transform = `translate(${p.x}px,${p.y}px)`;
      }, dur * 0.82);
    };

    const pop = (el: HTMLElement) => {
      if (!ripple) return;
      const p = at(el);
      ripple.style.left = p.x + 'px';
      ripple.style.top = p.y + 'px';
      ripple.style.animation = 'none';
      void ripple.offsetWidth;
      ripple.style.animation = 'smRipple 520ms cubic-bezier(.2,.7,.3,1)';
    };

    const reset = () => {
      hideSlots();
      selDay(false);
      selSlot(false);
      showToast(false);
      cursor.style.opacity = '0';
    };

    const play = () => {
      reset();
      cursor.style.transition = 'none';
      cursor.style.transform = `translate(${root.clientWidth * 0.18}px,${root.clientHeight + 26}px)`;

      t(() => { cursor.style.opacity = '1'; moveTo(day, 950); }, 500);
      t(() => { pop(day); selDay(true); }, 1500);
      t(() => {
        slots.forEach((s, i) => t(() => { s.style.opacity = '1'; s.style.transform = 'translateY(0)'; }, i * 60));
      }, 1580);
      t(() => moveTo(pick, 820), 2320);
      t(() => { pop(pick); selSlot(true); }, 3180);
      t(() => showToast(true), 3420);
      t(() => { cursor.style.transition = 'opacity 420ms ease'; cursor.style.opacity = '0'; }, 4640);
      t(() => reset(), 4900);
      t(play, 6500);
    };

    play();

    return () => clearTimers();
  }, [t, clearTimers]);

  return (
    <div ref={rootRef} role="img" aria-label="Animated demo: a cursor picks a date and a time, and the meeting is confirmed." style={{ position: 'relative', background: '#fff', border: '1px solid #EAE4F5', borderRadius: 22, boxShadow: '0 40px 80px -44px rgba(35,20,70,.42),0 2px 6px -2px rgba(35,20,70,.08)', overflow: 'hidden' }}>

      {/* Browser bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '14px 18px', borderBottom: '1px solid #F1EDF9', background: '#FCFBFE' }}>
        <span style={{ width: 9, height: 9, borderRadius: 999, background: '#E7DFF7' }} />
        <span style={{ width: 9, height: 9, borderRadius: 999, background: '#E7DFF7' }} />
        <span style={{ width: 9, height: 9, borderRadius: 999, background: '#E7DFF7' }} />
        <span style={{ marginLeft: 8, fontSize: '12.5px', color: '#8A8599', fontFamily: "'Poppins',system-ui,sans-serif" }}>snaarp.me/priya/intro-30</span>
      </div>

      <div style={{ padding: '20px 20px 22px' }}>
        {/* Profile header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 11, paddingBottom: 16, borderBottom: '1px solid #F3F0FA' }}>
          <span style={{ width: 38, height: 38, borderRadius: 999, background: 'linear-gradient(145deg,#C4B5FD,#7C3AED)', color: '#fff', fontSize: 14, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>PS</span>
          <div style={{ minWidth: 0 }}>
            <div style={{ fontSize: 15, fontWeight: 700, color: '#17131F' }}>Priya Shah</div>
            <div style={{ fontSize: 13, color: '#8A8599' }}>30 min &middot; Intro call &middot; Video</div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(200px,1.35fr) minmax(130px,1fr)', gap: 18, marginTop: 16 }}>
          {/* Calendar */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
              <span style={{ fontSize: '14.5px', fontWeight: 700, color: '#17131F' }}>September 2026</span>
              <span style={{ display: 'flex', gap: 4 }}>
                <span style={{ width: 22, height: 22, borderRadius: 7, border: '1px solid #EDE8F7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#8A8599" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M15 5l-7 7 7 7" /></svg>
                </span>
                <span style={{ width: 22, height: 22, borderRadius: 7, border: '1px solid #EDE8F7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#8A8599" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M9 5l7 7-7 7" /></svg>
                </span>
              </span>
            </div>
            {/* Day headers */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 3, marginBottom: 5 }}>
              {['S','M','T','W','T','F','S'].map((d, i) => (
                <span key={i} style={{ textAlign: 'center', fontSize: '10.5px', color: '#A9A4B8', fontWeight: 700 }}>{d}</span>
              ))}
            </div>
            {/* Calendar grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 3 }}>
              <span /><span />
              {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30].map(d => {
                const popular = [9,15,23].includes(d);
                const available = [4,7,8,9,10,11,14,15,16,17,18,21,22,23,24,25,28,29,30].includes(d);
                return (
                  <span
                    key={d}
                    data-day={d === 15 ? '15' : undefined}
                    style={{
                      aspectRatio: '1',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 9,
                      fontSize: '12.5px',
                      color: popular ? '#6D28D9' : available ? '#40394F' : '#C3BFCF',
                      background: popular ? '#F5F1FE' : undefined,
                      fontWeight: popular ? 700 : undefined,
                      transition: d === 15 ? 'background 260ms ease,color 260ms ease,box-shadow 260ms ease' : undefined,
                    }}
                  >
                    {d}
                  </span>
                );
              })}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 11 }}>
              <span style={{ width: 9, height: 9, borderRadius: 3, background: '#F0E9FD' }} />
              <span style={{ fontSize: '11.5px', color: '#A9A4B8' }}>Popular days</span>
            </div>
          </div>

          {/* Time slots */}
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#8A8599', letterSpacing: '.06em', marginBottom: 9 }}>SEP 15 &middot; TUE</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {['09:00 AM','10:00 AM','11:00 AM','01:00 PM','03:00 PM'].map(time => (
                <button
                  key={time}
                  type="button"
                  data-slot={time}
                  style={{
                    textAlign: 'center',
                    padding: '9px 6px',
                    borderRadius: 10,
                    border: '1px solid #E9E4F2',
                    background: '#fff',
                    color: '#17131F',
                    fontSize: 13,
                    fontWeight: 700,
                    cursor: 'default',
                    opacity: 0,
                    transform: 'translateY(8px)',
                    transition: 'opacity 300ms ease,transform 300ms ease,background 220ms ease,border-color 220ms ease,color 220ms ease',
                  }}
                >
                  {time}
                </button>
              ))}
            </div>
            <div style={{ marginTop: 11, fontSize: '11.5px', color: '#A9A4B8' }}>GMT+1 &middot; London</div>
          </div>
        </div>
      </div>

      {/* Toast */}
      <div
        data-toast=""
        style={{
          position: 'absolute',
          right: 16,
          bottom: 16,
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          padding: '12px 16px 12px 13px',
          borderRadius: 14,
          background: '#17131F',
          color: '#fff',
          boxShadow: '0 22px 44px -20px rgba(23,19,31,.75)',
          opacity: 0,
          transform: 'translateY(16px) scale(.94)',
          pointerEvents: 'none',
        }}
      >
        <span style={{ width: 26, height: 26, borderRadius: 999, background: '#0EA47A', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 12.5l5 5 10-11" /></svg>
        </span>
        <span>
          <span style={{ display: 'block', fontSize: 14, fontWeight: 700, lineHeight: 1.25 }}>Meeting Confirmed</span>
          <span style={{ display: 'block', fontSize: 12, color: '#B6AEC8', fontFamily: "'Poppins',system-ui,sans-serif" }}>Tue 15 Sep &middot; 10:00–10:30</span>
        </span>
      </div>

      {/* Ripple */}
      <span
        data-ripple=""
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: 44,
          height: 44,
          borderRadius: 999,
          background: 'radial-gradient(circle,rgba(109,40,217,.42),rgba(109,40,217,0) 68%)',
          opacity: 0,
          pointerEvents: 'none',
          transform: 'translate(-50%,-50%) scale(.25)',
        }}
      />

      {/* Cursor */}
      <span
        data-cursor=""
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          opacity: 0,
          pointerEvents: 'none',
          transform: 'translate(0,0)',
          willChange: 'transform',
          filter: 'drop-shadow(0 6px 10px rgba(60,30,120,.35))',
        }}
      >
        <svg width="26" height="30" viewBox="0 0 26 30" fill="none">
          <path d="M3 2.2L21.4 15.1c.9.6.5 2-.6 2.1l-7.4.6-3.6 6.9c-.5 1-2 .8-2.2-.3L3 2.2z" fill="#7C3AED" stroke="#fff" strokeWidth="1.9" strokeLinejoin="round" />
        </svg>
      </span>
    </div>
  );
}
