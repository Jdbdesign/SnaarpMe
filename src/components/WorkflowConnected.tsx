'use client';

import { useEffect, useRef } from 'react';
import {
  ArrowRight,
  Search,
  ShieldCheck,
  Send,
  MessageSquare,
  FileSignature,
  Receipt,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';

/* ─── Data ─── */
interface WorkflowStep {
  label: string;
  caption: string;
  Icon: LucideIcon;
  accent: 'brand' | 'mint' | 'amber';
}

const STEPS: WorkflowStep[] = [
  { label: 'Find', caption: 'Zeus finds new prospects', Icon: Search, accent: 'brand' },
  { label: 'Verify', caption: 'VerifyRit checks every lead', Icon: ShieldCheck, accent: 'mint' },
  { label: 'Engage', caption: 'Sendrit sends personalized emails', Icon: Send, accent: 'amber' },
  { label: 'Convert', caption: 'CRM tracks conversations', Icon: MessageSquare, accent: 'brand' },
  { label: 'Close', caption: 'DocSign closes the deals', Icon: FileSignature, accent: 'mint' },
  { label: 'Bills', caption: 'Books sends the invoice', Icon: Receipt, accent: 'brand' },
];

const ACCENT_STYLES: Record<string, { color: string; tint: string; ring: string }> = {
  brand: { color: '#7C3AED', tint: '#F3EFFF', ring: 'hsla(262,83%,58%,.3)' },
  mint: { color: '#0D9488', tint: '#F0FDFA', ring: 'hsla(168,76%,32%,.3)' },
  amber: { color: '#D97706', tint: '#FFFBEB', ring: 'hsla(32,90%,45%,.3)' },
};

/* ─── Animated line + step pulse logic ─── */
function WorkflowVisual() {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add('is-revealed');
            io.unobserve(el);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={wrapRef} className="wfc-visual">
      {/* Steps strip */}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'flex-start' }}>
        {/* Connecting line */}
        <div className="wfc-line" aria-hidden="true">
          <span className="wfc-line-base" />
          <span className="wfc-line-progress" />
        </div>

        {STEPS.map((step, i) => {
          const a = ACCENT_STYLES[step.accent];
          return (
            <div key={step.label} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 10, position: 'relative', zIndex: 1 }}>
              <span
                className="wfc-step-circle"
                style={{
                  width: 52, height: 52, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: a.tint, border: `1.5px solid ${a.ring}`, color: a.color,
                  animationDelay: `${i * 720}ms`,
                }}
              >
                <step.Icon size={20} strokeWidth={1.8} />
              </span>
              <span className="wfc-step-label" style={{ fontWeight: 700, fontSize: 13, color: '#111', animationDelay: `${i * 720}ms` }}>{step.label}</span>
              <span className="wfc-step-caption" style={{ fontSize: 11.5, lineHeight: 1.4, color: '#6B7280', maxWidth: '11ch', animationDelay: `${i * 720}ms` }}>{step.caption}</span>
            </div>
          );
        })}
      </div>

      {/* AI card */}
      <div data-reveal="" style={{ display: 'flex', alignItems: 'center', gap: 16, background: '#F3EFFF', borderRadius: 14, boxShadow: '0 4px 20px -6px rgba(0,0,0,.06)', padding: '18px 22px', marginTop: 36 }}>
        <span style={{ width: 40, height: 40, flexShrink: 0, borderRadius: 10, background: '#7C3AED', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Sparkles size={17} strokeWidth={2} />
        </span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <p style={{ fontWeight: 700, fontSize: 14, color: '#111', margin: '0 0 2px' }}>AI connects everything</p>
          <p style={{ fontSize: 13, color: '#6B7280', margin: 0 }}>Neo understands your data and helps your team take action at every step.</p>
        </div>
        <a href="#" style={{ flexShrink: 0, display: 'inline-flex', alignItems: 'center', gap: 6, background: 'linear-gradient(90deg,#8B5CF6,#7C3AED)', color: '#fff', fontWeight: 700, fontSize: 13, padding: '11px 18px', borderRadius: 999, textDecoration: 'none', whiteSpace: 'nowrap' }}>
          Meet Neo AI
          <ArrowRight size={14} strokeWidth={2.5} />
        </a>
      </div>
    </div>
  );
}

/* ─── Main Export ─── */
export default function WorkflowConnected() {
  return (
    <section style={{ padding: '80px 26px', background: '#fff' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto' }}>
        <div className="wfc-grid">
          {/* Left copy */}
          <div data-reveal="">
            <h2 style={{ fontFamily: "'Poppins',system-ui,sans-serif", display: 'flex', flexDirection: 'column', fontWeight: 600, fontSize: 'clamp(30px,3.4vw,42px)', lineHeight: 1.16, letterSpacing: '-.024em', color: '#17131F', margin: '0 0 18px' }}>
              <span>One Platform.</span>
              <span>Every Workflow</span>
              <span>Connected.</span>
            </h2>
            <p style={{ color: 'var(--body)', fontSize: 'var(--body-lg)', lineHeight: 1.6, maxWidth: '38ch', margin: '0 0 22px' }}>
              From prospecting to payment, every step is connected across your business.
            </p>
            <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--primary)', fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>
              See How It Works
              <ArrowRight size={15} strokeWidth={2.5} />
            </a>
          </div>

          {/* Right visual */}
          <WorkflowVisual />
        </div>
      </div>

      {/* CSS for animation + responsive */}
      <style>{`
        .wfc-grid {
          display: grid;
          grid-template-columns: 0.85fr 1.55fr;
          gap: 48px;
          align-items: center;
        }
        @media (max-width: 999px) {
          .wfc-grid { grid-template-columns: 1fr !important; }
        }

        .wfc-line {
          position: absolute;
          top: 26px;
          left: calc(100% / 12);
          right: calc(100% / 12);
          height: 2px;
        }
        .wfc-line-base {
          position: absolute; inset: 0;
          background: #EAEAEA; border-radius: 999px;
        }
        .wfc-line-progress {
          position: absolute; inset: 0;
          border-radius: 999px;
          background: linear-gradient(90deg, #7C3AED 0%, #7C3AED 78%, #C4B5FD 92%, #EDE9FE 100%);
          transform: scaleX(0);
          transform-origin: left center;
        }
        .wfc-visual.is-revealed .wfc-line-progress {
          animation: wfc-line-travel 5000ms linear infinite;
        }

        .wfc-step-circle {
          opacity: 1;
        }
        .wfc-visual.is-revealed .wfc-step-circle {
          animation: wfc-step-pulse 5000ms cubic-bezier(.22,.8,.3,1) infinite;
        }
        .wfc-step-label, .wfc-step-caption {
          opacity: 0.55;
          transform: translateY(2px);
        }
        .wfc-visual.is-revealed .wfc-step-label,
        .wfc-visual.is-revealed .wfc-step-caption {
          animation: wfc-text-pulse 5000ms ease-out infinite;
        }

        @keyframes wfc-line-travel {
          0% { transform: scaleX(0); opacity: 1; }
          72% { transform: scaleX(1); opacity: 1; }
          90% { transform: scaleX(1); opacity: 1; }
          100% { transform: scaleX(1); opacity: 0; }
        }
        @keyframes wfc-step-pulse {
          0%, 100% { transform: scale(1); }
          5% { transform: scale(1.12); }
          10% { transform: scale(1); }
        }
        @keyframes wfc-text-pulse {
          0%, 100% { opacity: 0.55; transform: translateY(2px); }
          5% { opacity: 1; transform: translateY(0); }
          10% { opacity: 0.55; transform: translateY(2px); }
        }

        @media (prefers-reduced-motion: reduce) {
          .wfc-line-progress { transform: scaleX(1) !important; opacity: 1 !important; animation: none !important; }
          .wfc-step-circle { animation: none !important; }
          .wfc-step-label, .wfc-step-caption { animation: none !important; opacity: 1 !important; transform: none !important; }
        }

        @media (max-width: 639px) {
          .wfc-step-circle { width: 40px !important; height: 40px !important; }
          .wfc-line { top: 20px !important; }
        }
      `}</style>
    </section>
  );
}
