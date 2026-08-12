'use client';

export default function Header() {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 60,
        background: 'rgba(255,255,255,.86)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: '1px solid #EFEBF7',
      }}
    >
      <nav
        style={{
          maxWidth: 1440,
          margin: '0 auto',
          padding: '0 26px',
          height: 70,
          display: 'flex',
          alignItems: 'center',
          gap: 20,
        }}
      >
        <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#17131F', flexShrink: 0 }}>
          <img src="/assets/snaarpme-logo.svg" alt="" style={{ width: 32, height: 32 }} />
          <span style={{ fontFamily: "'Poppins',system-ui,sans-serif", fontSize: '20.5px', fontWeight: 600, letterSpacing: '-.015em' }}>
            Snaarp<span style={{ color: '#111111' }}>Me</span>
          </span>
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginLeft: 20 }}>
          <a href="#product" style={{ padding: '9px 14px', borderRadius: 9, color: '#4A4459', fontSize: '15.5px' }}>Product</a>
          <a href="#solution" style={{ padding: '9px 14px', borderRadius: 9, color: '#4A4459', fontSize: '15.5px' }}>Solution</a>
          <a href="#pricing" style={{ padding: '9px 14px', borderRadius: 9, color: '#4A4459', fontSize: '15.5px' }}>Pricing</a>
        </div>
        <div style={{ flex: 1 }} />
        <div style={{ width: 1, height: 24, background: '#EFEBF7' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <a href="#login" style={{ padding: '9px 12px', borderRadius: 9, color: '#17131F', fontSize: '15.5px' }}>Login</a>
          <a
            href="#signup"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 7,
              padding: '10px 18px',
              borderRadius: 10,
              background: '#7C3AED',
              color: '#fff',
              fontSize: '15.5px',
              fontWeight: 700,
              boxShadow: '0 8px 18px -10px rgba(109,40,217,.9)',
              transition: 'background 180ms ease,box-shadow 180ms ease',
            }}
          >
            Get Started
          </a>
        </div>
      </nav>
    </header>
  );
}
