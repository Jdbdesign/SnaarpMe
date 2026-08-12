import { ArrowRight, Check } from 'lucide-react';

const CHECKLIST = ['No per-app fees', 'No tiered lock-in', 'No surprises'];

export default function PricingBanner() {
  return (
    <section style={{ padding: '80px 26px' }}>
      <div
        data-reveal=""
        style={{
          maxWidth: 1440,
          margin: '0 auto',
          background: '#0B0E2E',
          borderRadius: 28,
          padding: 'clamp(32px,5vw,56px) clamp(24px,4vw,56px)',
        }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 48, alignItems: 'center' }}>
          {/* Left copy */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: 48, alignItems: 'center' }}>
            <div>
              <h2
                style={{
                  fontFamily: "'Poppins',system-ui,sans-serif",
                  fontWeight: 600,
                  lineHeight: 1.16,
                  fontSize: 'clamp(30px,3.4vw,42px)',
                  letterSpacing: '-.024em',
                  margin: '0 0 18px',
                }}
              >
                <span style={{ display: 'block', color: '#fff' }}>All apps.</span>
                <span style={{ display: 'block', color: '#A78BFA' }}>One price.</span>
                <span style={{ display: 'block', color: '#fff' }}>Unlimited possibilities.</span>
              </h2>
              <p style={{ color: 'hsl(230,15%,72%)', fontSize: '1.0625rem', lineHeight: 1.6, maxWidth: '42ch', margin: '0 0 24px' }}>
                Get the entire Snaarp Business Suite for just &pound;2 per user per month.
              </p>
              <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '10px 28px', listStyle: 'none', margin: 0, padding: 0 }}>
                {CHECKLIST.map((item) => (
                  <li key={item} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'hsl(230,15%,80%)', fontSize: 14, fontWeight: 500 }}>
                    <span style={{ width: 20, height: 20, borderRadius: '50%', background: 'hsla(255,100%,100%,.1)', color: '#A78BFA', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Check size={11} strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right price card */}
            <div style={{ background: 'hsla(255,60%,100%,.04)', border: '1px solid hsla(255,60%,100%,.1)', borderRadius: 20, padding: '32px 24px', textAlign: 'center' }}>
              <p style={{ color: 'hsl(230,15%,68%)', fontWeight: 700, fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', margin: '0 0 18px' }}>
                The Entire Business Suite
              </p>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 8, margin: '0 0 28px' }}>
                <span style={{ color: '#fff', fontWeight: 700, fontSize: '3.5rem', lineHeight: 1 }}>&pound;2</span>
                <span style={{ color: 'hsl(230,15%,68%)', fontSize: 13, lineHeight: 1.4, textAlign: 'left' }}>
                  per user<br />per month
                </span>
              </div>
              <a
                href="#"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  background: 'linear-gradient(90deg,#8B5CF6,#7C3AED)', color: '#fff',
                  fontWeight: 700, fontSize: 15, padding: '16px 24px',
                  borderRadius: 999, textDecoration: 'none', minHeight: 44,
                }}
              >
                Start Free for 14 Days
                <ArrowRight size={16} strokeWidth={2.5} />
              </a>
              <p style={{ color: 'hsl(230,15%,60%)', fontSize: 12, margin: '14px 0 0' }}>
                No credit card required
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 899px) {
          div[style*="grid-template-columns: 1.15fr"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
