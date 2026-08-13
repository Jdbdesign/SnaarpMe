export default function Footer() {
  return (
    <footer style={{ background: '#fff', borderTop: '1px solid #F1EDF9', padding: '56px 26px 40px' }}>
      <div data-reveal="" style={{ maxWidth: 1440, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(170px,1fr))', gap: 36 }}>
        <div style={{ minWidth: 200 }}>
          <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#17131F' }}>
            <img src="/assets/snaarpme-logo.svg" alt="" style={{ width: 30, height: 30 }} />
            <span style={{ fontFamily: "'Poppins',system-ui,sans-serif", fontSize: 19, fontWeight: 600, letterSpacing: '-.015em' }}>Snaarp<span style={{ color: '#111111' }}>Me</span></span>
          </a>
          <p style={{ fontSize: '14.5px', lineHeight: 1.6, color: '#5F5971', margin: '14px 0 0', maxWidth: 260 }}>Scheduling that runs itself, so meetings start on time and inboxes stay quiet.</p>
        </div>
        <FooterCol title="PRODUCT" links={[{ href: '#product', label: 'Features' }, { href: '#pricing', label: 'Pricing' }, { href: '#dashboard', label: 'Dashboard' }, { href: '#integrations', label: 'Integrations' }]} />
        <FooterCol title="ACCOUNT" links={[{ href: '#login', label: 'Login' }, { href: '#signup', label: 'Register' }, { href: '#settings', label: 'Settings' }, { href: '#profile', label: 'Profile' }]} />
        <FooterCol title="SCHEDULING" links={[{ href: '#event-types', label: 'Event Types' }, { href: '#availability', label: 'Availability' }, { href: '#bookings', label: 'Bookings' }, { href: '#workflows', label: 'Workflows' }]} />
        <FooterCol title="COMPANY" links={[{ href: '#about', label: 'About' }, { href: '#analytics', label: 'Analytics' }, { href: '#routing-forms', label: 'Routing Forms' }, { href: '#developer', label: 'Developer' }]} />
      </div>
      <div style={{ maxWidth: 1440, margin: '36px auto 0', paddingTop: 22, borderTop: '1px solid #F4F1FA', display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: '13.5px', color: '#645E75' }}>&copy; 2026 SnaarpMe. Part of the Snaarp family.</span>
        <span style={{ display: 'flex', gap: 20 }}>
          <a href="#privacy" style={{ fontSize: '13.5px', color: '#645E75' }}>Privacy</a>
          <a href="#terms" style={{ fontSize: '13.5px', color: '#645E75' }}>Terms</a>
          <a href="#status" style={{ fontSize: '13.5px', color: '#645E75' }}>Status</a>
        </span>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <span style={{ display: 'block', fontSize: 13, fontWeight: 700, letterSpacing: '.08em', color: '#17131F', marginBottom: 14 }}>{title}</span>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {links.map(l => (
          <a key={l.href} href={l.href} style={{ fontSize: '14.5px', color: '#5A5468' }}>{l.label}</a>
        ))}
      </div>
    </div>
  );
}
