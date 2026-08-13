import HeroDemo from './HeroDemo';

export default function HeroSection() {
  return (
    <section id="top" style={{ position: 'relative', padding: '80px 26px 80px', background: 'linear-gradient(180deg,#FBFAFE 0%,#fff 62%)', overflow: 'hidden' }}>

      <div style={{ position: 'relative', maxWidth: 1440, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(400px,1fr))', gap: 56, alignItems: 'center' }}>
        <div>
          <span data-hero-load="eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '7px 15px 7px 11px', borderRadius: 999, background: '#fff', border: '1px solid #E7DFFA', fontSize: 14, color: '#6D28D9', boxShadow: '0 4px 14px -8px rgba(109,40,217,.5)' }}>
            <span style={{ width: 19, height: 19, borderRadius: 6, background: 'linear-gradient(140deg,#A78BFA,#7C3AED)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="#fff"><path d="M12 2l1.9 5.6L19.5 9l-4.4 3.6 1.4 5.7L12 15.2 7.5 18.3l1.4-5.7L4.5 9l5.6-1.4z" /></svg>
            </span>
            Smart scheduling for modern teams
          </span>

          <h1 data-hero-load="headline" style={{ fontFamily: "'Poppins',system-ui,sans-serif", fontSize: 'clamp(40px,4.6vw,60px)', lineHeight: 1.1, letterSpacing: '-.028em', fontWeight: 700, margin: '24px 0 0', color: '#17131F' }}>
            Scheduling made <span style={{ color: '#7C3AED' }}>simple.</span> Meetings made <span style={{ color: '#7C3AED' }}>productive.</span>
          </h1>

          <p data-hero-load="subhead" style={{ fontSize: 19, lineHeight: 1.62, color: '#5A5468', margin: '22px 0 0', maxWidth: 520 }}>SnaarpMe helps you book, manage, and automate meetings so you can focus on growing your business.</p>

          <div data-hero-load="cta" style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 32 }}>
            <a href="#signup" data-hover-arrow="" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, padding: '15px 26px', borderRadius: 12, background: '#7C3AED', color: '#fff', fontSize: 16, fontWeight: 700, boxShadow: '0 14px 28px -14px rgba(109,40,217,.95)', transition: 'background 180ms ease,box-shadow 180ms ease,transform 150ms cubic-bezier(.22,.8,.3,1)' }}>
              Get started free
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h13M12 5.5l6.5 6.5-6.5 6.5" /></svg>
            </a>
            <a href="#how" data-hover-arrow="" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '15px 24px', borderRadius: 12, background: '#fff', border: '1px solid #E4DDF3', color: '#17131F', fontSize: 16, fontWeight: 700, transition: 'border-color 180ms ease,background 180ms ease' }}>
              <span style={{ width: 24, height: 24, borderRadius: 999, background: '#F1EAFE', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="#7C3AED"><path d="M7 4.5l13 7.5-13 7.5z" /></svg>
              </span>
              See how it works
            </a>
          </div>

          <div data-hero-load="trust" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 20px', marginTop: 30 }}>
            {['Free forever', 'No credit card required', 'Easy scheduling', 'Team ready'].map(txt => (
              <span key={txt} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: '14.5px', color: '#6B6479' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0EA47A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 12.5l5 5 10-11" /></svg>
                {txt}
              </span>
            ))}
          </div>
        </div>

        <div data-hero-load="mockup">
          <HeroDemo />
        </div>
      </div>
    </section>
  );
}
