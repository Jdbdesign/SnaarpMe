import Image from 'next/image';

export default function TrustBar() {
  const logos = [
    { name: 'Abbott Laboratories', src: '/assets/logos/abbott-laboratories.svg' },
    { name: 'Allegion', src: '/assets/logos/allegion.svg' },
    { name: 'Amgen', src: '/assets/logos/amgen-inc.svg' },
    { name: 'AutoZone', src: '/assets/logos/autozone.svg' },
    { name: 'Avery Dennison', src: '/assets/logos/avery-dennison.svg' },
    { name: 'Baxter International', src: '/assets/logos/baxter-international.svg' },
    { name: 'Bio-Rad Laboratories', src: '/assets/logos/bio-rad-laboratories.svg' },
  ];

  return (
    <section style={{ padding: '40px 26px 60px', background: '#fff' }}>
      <div data-reveal="" style={{ maxWidth: 1440, margin: '0 auto', textAlign: 'center' }}>
        <p style={{ fontSize: 13, letterSpacing: '.14em', color: '#645E75', fontWeight: 700, margin: '0 0 32px' }}>TRUSTED BY AMBITIOUS TEAMS AROUND THE WORLD</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '24px 48px', alignItems: 'center' }}>
          {logos.map(l => (
            <span key={l.name} style={{ display: 'inline-flex', alignItems: 'center', opacity: 0.7, transition: 'opacity .2s' }}>
              <Image
                src={l.src}
                alt={l.name}
                width={120}
                height={36}
                style={{ height: 28, width: 'auto', objectFit: 'contain' }}
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
