'use client';

import { useState, Fragment } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TABS = [
  { name: 'SnaarpMe', icon: '/assets/icons/logos/snaarpme.svg' },
  { name: 'Mail', icon: '/assets/icons/pricing/mail.svg' },
  { name: 'Drive', icon: '/assets/icons/pricing/drive.svg' },
  { name: 'Sendrit', icon: '/assets/icons/pricing/sendrit.svg' },
  { name: 'VerifyRit', icon: '/assets/icons/pricing/verifyrit.svg' },
  { name: 'Neoleads', icon: '/assets/icons/pricing/neoleads.svg' },
  { name: 'Zeus', icon: '/assets/icons/logos/zeus.svg' },
  { name: 'CRM', icon: '/assets/icons/pricing/crm.svg' },
  { name: 'Accounting', icon: '/assets/icons/pricing/accounting.svg' },
];

const PLANS = [
  {
    name: 'Basic',
    price: 2,
    period: 'month',
    billed: 'Billed monthly',
    save: '20%',
    segment: '1 booking page · Freelancers & solopreneurs',
    popular: false,
    addonsIcons: [
      { src: '/assets/icons/logos/snaarpme.svg', name: 'SnaarpMe' },
      { src: '/assets/icons/envelope.jpg', name: 'Mail' },
    ],
    features: ['1 booking page', 'Unlimited bookings', 'Calendar sync', 'Email confirmations', 'Custom availability'],
  },
  {
    name: 'Professional',
    price: 8,
    period: 'month',
    billed: 'Billed monthly',
    save: '25%',
    segment: '5 booking pages · Small teams & consultants',
    popular: true,
    addonsIcons: [
      { src: '/assets/icons/logos/snaarpme.svg', name: 'SnaarpMe' },
      { src: '/assets/icons/envelope.jpg', name: 'Mail' },
      { src: '/assets/icons/search.jpg', name: 'Contacts' },
      { src: '/assets/icons/chat-bubbles.jpg', name: 'Teams' },
      { src: '/assets/icons/apps-meet.jpg', name: 'Meet' },
    ],
    features: ['5 booking pages', 'Unlimited bookings', 'Calendar sync', 'Email & SMS reminders', 'Custom availability', 'Group bookings', 'Payment collection', 'Custom branding'],
  },
  {
    name: 'Team',
    price: 18,
    period: 'month',
    billed: 'Billed monthly',
    save: '33%',
    segment: 'Unlimited pages · Growing businesses',
    popular: false,
    addonsIcons: [
      { src: '/assets/icons/logos/snaarpme.svg', name: 'SnaarpMe' },
      { src: '/assets/icons/envelope.jpg', name: 'Mail' },
      { src: '/assets/icons/search.jpg', name: 'Contacts' },
      { src: '/assets/icons/chat-bubbles.jpg', name: 'Teams' },
      { src: '/assets/icons/apps-meet.jpg', name: 'Meet' },
      { src: '/assets/icons/apps-lock.jpg', name: 'Lock' },
      { src: '/assets/icons/cube.jpg', name: 'Drive' },
      { src: '/assets/icons/apps-sendrit.jpg', name: 'Sendrit' },
    ],
    features: ['Unlimited booking pages', 'Unlimited bookings', 'Calendar sync', 'Email & SMS reminders', 'Custom availability', 'Group bookings', 'Payment collection', 'Custom branding', 'Round-robin routing', 'API access'],
  },
];

const COMPARE_SECTIONS = [
  {
    category: 'CORE',
    rows: [
      { feature: 'Booking pages', basic: '1', pro: '5', team: 'Unlimited' },
      { feature: 'Bookings per month', basic: 'Unlimited', pro: 'Unlimited', team: 'Unlimited' },
      { feature: 'Calendar sync', basic: true, pro: true, team: true },
      { feature: 'Custom availability', basic: true, pro: true, team: true },
    ],
  },
  {
    category: 'SCHEDULING FEATURES',
    rows: [
      { feature: 'Email confirmations', basic: true, pro: true, team: true },
      { feature: 'SMS reminders', basic: false, pro: true, team: true },
      { feature: 'Group bookings', basic: false, pro: true, team: true },
      { feature: 'Round-robin routing', basic: false, pro: false, team: true },
      { feature: 'Buffer time between events', basic: true, pro: true, team: true },
      { feature: 'Recurring bookings', basic: false, pro: true, team: true },
    ],
  },
  {
    category: 'CUSTOMISATION',
    rows: [
      { feature: 'Custom branding', basic: false, pro: true, team: true },
      { feature: 'Custom domain', basic: false, pro: true, team: true },
      { feature: 'Payment collection', basic: false, pro: true, team: true },
      { feature: 'Redirect after booking', basic: false, pro: true, team: true },
    ],
  },
  {
    category: 'SUPPORT',
    rows: [
      { feature: 'Email support', basic: true, pro: true, team: true },
      { feature: 'Priority support', basic: false, pro: true, team: true },
      { feature: 'API access', basic: false, pro: false, team: true },
    ],
  },
];

function Check() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 12.5l5 5 10-11" /></svg>;
}
function Dash() {
  return <span style={{ color: '#D4D4D8' }}>—</span>;
}

export default function PricingPage() {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div style={{ minHeight: '100vh', background: '#fff' }}>
      <Header />
      <main style={{ padding: '60px 26px 80px', maxWidth: 1440, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 36px' }}>
          <span style={{ display: 'inline-block', padding: '5px 14px', borderRadius: 999, background: '#F4F0FE', color: '#7C3AED', fontSize: 12, fontWeight: 700, letterSpacing: '.06em', marginBottom: 16 }}>PRICING</span>
          <h1 style={{ fontFamily: "'Poppins',system-ui,sans-serif", fontSize: 'clamp(30px,3.6vw,46px)', lineHeight: 1.16, letterSpacing: '-.024em', fontWeight: 600, color: '#17131F', margin: '0 0 14px' }}>Simple Pricing That Scales With Storage</h1>
          <p style={{ fontSize: 16, color: '#5A5468', margin: 0 }}>Flexible user limits included in every plan.<br />Choose the storage tier that fits your organization.</p>
        </div>

        {/* Billing toggle */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
          <div style={{ display: 'flex', background: '#7C3AED', borderRadius: 999, padding: 4 }}>
            <button type="button" onClick={() => setBilling('monthly')} style={{ padding: '10px 20px', borderRadius: 999, border: 'none', cursor: 'pointer', fontSize: 14, fontWeight: 700, background: billing === 'monthly' ? '#fff' : 'transparent', color: billing === 'monthly' ? '#7C3AED' : '#fff', transition: 'all 200ms ease' }}>Monthly</button>
            <button type="button" onClick={() => setBilling('yearly')} style={{ padding: '10px 20px', borderRadius: 999, border: 'none', cursor: 'pointer', fontSize: 14, fontWeight: 700, background: billing === 'yearly' ? '#fff' : 'transparent', color: billing === 'yearly' ? '#7C3AED' : '#fff', transition: 'all 200ms ease' }}>Yearly</button>
          </div>
        </div>

        {/* Product tabs - horizontal rail */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 40 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 0, background: '#F7F7F7', borderRadius: 999, padding: 4, border: '1px solid #EDEBF2', overflowX: 'auto', scrollbarWidth: 'none', maxWidth: '100%' }}>
            {TABS.map((tab, i) => {
              const isActive = i === activeTab;
              return (
                <button key={tab.name} type="button" onClick={() => setActiveTab(i)} style={{ padding: '8px 18px', borderRadius: 999, border: 'none', fontFamily: 'inherit', fontSize: 14, fontWeight: 600, cursor: 'pointer', transition: 'all .2s', whiteSpace: 'nowrap', flexShrink: 0, display: 'inline-flex', alignItems: 'center', gap: 6, background: isActive ? '#7C3AED' : 'transparent', color: isActive ? '#fff' : '#5B5670' }}>
                  <img src={tab.icon} alt="" style={{ height: 18, width: 'auto', objectFit: 'contain', flexShrink: 0 }} />
                  {tab.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Pricing cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 20, alignItems: 'stretch', marginBottom: 20 }}>
          {PLANS.map((plan) => {
            const price = billing === 'yearly' ? Math.round(plan.price * 0.8) : plan.price;
            const yearly12 = plan.price * 12;
            const totalYear = billing === 'yearly' ? Math.round(yearly12 * 0.8) : yearly12;
            return (
              <div key={plan.name} className="sme-pricing-card" style={{ position: 'relative', background: '#fff', border: plan.popular ? '2px solid #7C3AED' : '1px solid #EDEBF2', borderRadius: 20, padding: '24px', display: 'flex', flexDirection: 'column', boxShadow: plan.popular ? '0 20px 25px -5px hsla(262,83%,58%,.12), 0 8px 10px -6px hsla(262,83%,58%,.08)' : undefined }}>
                {plan.popular && <span style={{ position: 'absolute', top: -13, left: '50%', transform: 'translateX(-50%)', background: '#7C3AED', color: '#fff', fontWeight: 700, fontSize: 11, letterSpacing: '.04em', textTransform: 'uppercase', padding: '6px 16px', borderRadius: 999, whiteSpace: 'nowrap' }}>Most Popular</span>}

                <span style={{ display: 'inline-block', width: 'fit-content', fontSize: 11, fontWeight: 600, color: '#7C3AED', background: '#F5F3FF', border: '1px solid #EDE9FE', borderRadius: 6, padding: '4px 10px', marginBottom: 14 }}>14-day free trial</span>

                <p style={{ color: '#8A8599', fontWeight: 700, fontSize: 11, letterSpacing: '.06em', textTransform: 'uppercase', margin: '0 0 10px' }}>{plan.name}</p>

                <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 4 }}>
                  <span style={{ fontFamily: "'Poppins',system-ui,sans-serif", fontSize: 32, fontWeight: 700, color: '#17131F', lineHeight: 1 }}>£{price}</span>
                  <span style={{ fontSize: 14, color: '#8A8599' }}>/month</span>
                </div>
                <p style={{ fontSize: 13, color: '#8A8599', margin: '0 0 4px' }}>Billed {billing === 'yearly' ? 'annually' : 'monthly'}.</p>
                <p style={{ fontSize: 13, color: '#5A5468', margin: '0 0 4px' }}>Total for 12 months: <strong style={{ color: '#17131F' }}>£{totalYear}</strong></p>
                <p style={{ fontSize: 13, fontWeight: 700, color: '#166534', margin: '0 0 14px' }}>Save {plan.save}</p>

                <p style={{ fontSize: 13, color: '#5A5468', margin: '0 0 14px', paddingBottom: 14, borderBottom: '1px solid #EDEBF2' }}>{plan.segment}</p>

                {/* Addon icons with hover tooltip */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 18 }}>
                  {plan.addonsIcons.map((icon) => (
                    <span key={icon.name} className="sme-icon-hotspot" style={{ position: 'relative', width: 34, height: 34, cursor: 'pointer' }}>
                      <img src={icon.src} alt={icon.name} width={34} height={34} style={{ borderRadius: '50%', border: '1.5px solid #EDEBF2', objectFit: 'cover', display: 'block' }} />
                      <span className="sme-icon-tooltip">{icon.name}</span>
                    </span>
                  ))}
                </div>

                {/* Features */}
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
                  {plan.features.map(f => (
                    <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 14, color: '#5A5468', lineHeight: 1.4 }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}><path d="M4.5 12.5l5 5 10-11" /></svg>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a href="#signup" style={{ marginTop: 24, textAlign: 'center', padding: '14px 20px', borderRadius: 999, background: plan.popular ? '#7C3AED' : undefined, border: plan.popular ? undefined : '1px solid #E4DDF3', color: plan.popular ? '#fff' : '#17131F', fontSize: 15, fontWeight: 700, display: 'block', textDecoration: 'none', minHeight: 44, lineHeight: '44px', padding: plan.popular ? undefined : '0 20px' }}>Start 14-day free trial</a>
              </div>
            );
          })}
        </div>

        {/* Compare All Features */}
        <div style={{ marginTop: 80 }}>
          <h2 style={{ fontFamily: "'Poppins',system-ui,sans-serif", fontSize: 'clamp(24px,2.8vw,32px)', fontWeight: 600, color: '#17131F', textAlign: 'center', margin: '0 0 8px' }}>Compare All Features</h2>
          <p style={{ textAlign: 'center', fontSize: 15, color: '#5A5468', margin: '0 0 36px' }}>See exactly what&apos;s included in each plan.</p>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 600 }}>
              <thead>
                <tr>
                  <th style={{ textAlign: 'left', padding: '14px 12px', borderBottom: '1px solid #EFEBF7', width: '40%' }} />
                  <th style={{ textAlign: 'center', padding: '14px 12px', borderBottom: '1px solid #EFEBF7', width: '20%' }}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: '#17131F' }}>Basic</span><br />
                    <span style={{ fontSize: 14, fontWeight: 700, color: '#17131F' }}>£2<span style={{ fontSize: 11, color: '#8A8599', fontWeight: 500 }}>/mo</span></span>
                  </th>
                  <th style={{ textAlign: 'center', padding: '14px 12px', borderBottom: '1px solid #EFEBF7', width: '20%', background: '#FAF8FE', borderRadius: '12px 12px 0 0' }}>
                    <span style={{ display: 'inline-block', padding: '3px 10px', borderRadius: 999, background: '#7C3AED', color: '#fff', fontSize: 10, fontWeight: 700, marginBottom: 4 }}>POPULAR</span><br />
                    <span style={{ fontSize: 13, fontWeight: 700, color: '#17131F' }}>Professional</span><br />
                    <span style={{ fontSize: 14, fontWeight: 700, color: '#17131F' }}>£8<span style={{ fontSize: 11, color: '#8A8599', fontWeight: 500 }}>/mo</span></span>
                  </th>
                  <th style={{ textAlign: 'center', padding: '14px 12px', borderBottom: '1px solid #EFEBF7', width: '20%' }}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: '#17131F' }}>Team</span><br />
                    <span style={{ fontSize: 14, fontWeight: 700, color: '#17131F' }}>£18<span style={{ fontSize: 11, color: '#8A8599', fontWeight: 500 }}>/mo</span></span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARE_SECTIONS.map(section => (
                  <Fragment key={section.category}>
                    <tr>
                      <td colSpan={4} style={{ padding: '18px 12px 8px', fontSize: 11, fontWeight: 700, color: '#8A8599', letterSpacing: '.08em' }}>{section.category}</td>
                    </tr>
                    {section.rows.map(row => (
                      <tr key={row.feature}>
                        <td style={{ padding: '12px 12px', borderBottom: '1px solid #F9F7FE', fontSize: 14, color: '#40394F' }}>{row.feature}</td>
                        <td style={{ padding: '12px 12px', borderBottom: '1px solid #F9F7FE', textAlign: 'center' }}>
                          {row.basic === true ? <Check /> : row.basic === false ? <Dash /> : <span style={{ fontSize: 13, fontWeight: 600, color: '#17131F' }}>{row.basic}</span>}
                        </td>
                        <td style={{ padding: '12px 12px', borderBottom: '1px solid #F9F7FE', textAlign: 'center', background: '#FDFCFE' }}>
                          {row.pro === true ? <Check /> : row.pro === false ? <Dash /> : <span style={{ fontSize: 13, fontWeight: 600, color: '#17131F' }}>{row.pro}</span>}
                        </td>
                        <td style={{ padding: '12px 12px', borderBottom: '1px solid #F9F7FE', textAlign: 'center' }}>
                          {row.team === true ? <Check /> : row.team === false ? <Dash /> : <span style={{ fontSize: 13, fontWeight: 600, color: '#17131F' }}>{row.team}</span>}
                        </td>
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
