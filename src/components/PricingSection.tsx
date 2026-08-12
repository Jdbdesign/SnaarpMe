export default function PricingSection() {
  return (
    <section id="pricing" style={{ padding: '80px 26px', background: '#fff' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto' }}>
        <div data-reveal="" style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Poppins',system-ui,sans-serif", fontSize: 'clamp(30px,3.4vw,42px)', lineHeight: 1.16, letterSpacing: '-.024em', fontWeight: 600, color: '#17131F', margin: 0 }}>Free forever. Upgrade when you&apos;re ready.</h2>
          <p style={{ fontSize: 17, color: '#5A5468', margin: '14px 0 0' }}>Start on Free and stay there as long as it works. No card, no countdown.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 18, marginTop: 38, alignItems: 'stretch' }}>
          <PricingCard
            name="Free"
            price="&pound;0"
            priceSub="forever"
            features={['One booking link', 'One calendar connection', 'Email reminders']}
            cta="Get started"
            delay={50}
          />
          <PricingCard
            name="Pro"
            price="&pound;10"
            priceSub="per user / month"
            features={['Unlimited booking links', 'Workflows and SMS reminders', 'Custom branding and buffers']}
            cta="Start Pro free"
            popular
            delay={120}
          />
          <PricingCard
            name="Team"
            price="&pound;16"
            priceSub="per user / month"
            features={['Round-robin and collective links', 'Shared availability and analytics', 'Admin controls and SSO']}
            cta="Start Team trial"
            delay={190}
          />
        </div>

        <p data-reveal="" style={{ textAlign: 'center', margin: '26px 0 0', fontSize: '15.5px', color: '#5A5468' }}>Annual billing, add-ons and full feature comparison — <a href="#" style={{ fontWeight: 700 }}>see full pricing</a>.</p>
      </div>
    </section>
  );
}

function PricingCard({ name, price, priceSub, features, cta, popular, delay }: {
  name: string; price: string; priceSub: string; features: string[]; cta: string; popular?: boolean; delay: number;
}) {
  const dark = popular;
  return (
    <div
      data-reveal=""
      data-reveal-delay={delay}
      style={{
        background: dark ? '#17131F' : '#fff',
        border: `1px solid ${dark ? '#17131F' : '#ECE7F6'}`,
        borderRadius: 20,
        padding: 28,
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        boxShadow: dark ? '0 34px 66px -40px rgba(23,19,31,.85)' : undefined,
        transition: 'border-color 220ms ease,box-shadow 220ms ease',
      }}
    >
      {popular && (
        <span style={{ position: 'absolute', top: -11, left: 28, padding: '4px 12px', borderRadius: 999, background: '#7C3AED', color: '#fff', fontSize: '11.5px', fontWeight: 700, letterSpacing: '.04em' }}>MOST POPULAR</span>
      )}
      <span style={{ fontSize: '14.5px', fontWeight: 700, color: dark ? '#B6AEC8' : '#5A5468' }}>{name}</span>
      <span style={{ display: 'flex', alignItems: 'baseline', gap: 5, marginTop: 12 }}>
        <span style={{ fontFamily: "'Poppins',system-ui,sans-serif", fontSize: 40, fontWeight: 700, color: dark ? '#fff' : '#17131F', letterSpacing: '-.03em', lineHeight: 1 }} dangerouslySetInnerHTML={{ __html: price }} />
        <span style={{ fontSize: 14, color: dark ? '#B6AEC8' : '#645E75' }}>{priceSub}</span>
      </span>
      <ul style={{ margin: '20px 0 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
        {features.map(f => (
          <li key={f} style={{ display: 'flex', gap: 9, fontSize: '14.5px', color: dark ? '#E6E1F0' : '#40394F' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={dark ? '#A78BFA' : '#7C3AED'} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}><path d="M4.5 12.5l5 5 10-11" /></svg>
            {f}
          </li>
        ))}
      </ul>
      <a
        href="#signup"
        style={{
          marginTop: 22,
          textAlign: 'center',
          padding: 13,
          borderRadius: 11,
          background: dark ? '#7C3AED' : undefined,
          border: dark ? undefined : '1px solid #E4DDF3',
          color: dark ? '#fff' : '#17131F',
          fontSize: 15,
          fontWeight: 700,
          transition: 'border-color 180ms ease,background 180ms ease',
          display: 'block',
        }}
      >
        {cta}
      </a>
    </div>
  );
}
