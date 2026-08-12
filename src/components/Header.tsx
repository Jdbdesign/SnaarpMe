'use client';

import { useState, useRef, useEffect } from 'react';

const PRODUCTS = [
  { name: 'Mail', desc: 'Business email for your team', icon: '/assets/icons/envelope.jpg', href: '#' },
  { name: 'Meet', desc: 'Video calls and screen sharing', icon: '/assets/icons/apps-meet.jpg', href: '#' },
  { name: 'Teams', desc: 'Group chat and channels', icon: '/assets/icons/chat-bubbles.jpg', href: '#' },
  { name: 'Contacts', desc: 'Shared address book', icon: '/assets/icons/search.jpg', href: '#' },
  { name: 'Document', desc: 'Collaborative writing', icon: '/assets/icons/apps-document.png', href: '#' },
  { name: 'Sheets', desc: 'Spreadsheets for your business', icon: '/assets/icons/apps-sheet.jpg', href: '#' },
  { name: 'Presentation', desc: 'Build and present decks', icon: '/assets/icons/p-icon.jpg', href: '#' },
];

const SOLUTIONS_BY_SIZE = [
  { name: 'Individuals', desc: 'For solopreneurs', href: '#' },
  { name: 'Small business', desc: 'For growing businesses', href: '#' },
  { name: 'Large companies', desc: 'For enterprise', href: '#' },
];

const SOLUTIONS_BY_TEAM = [
  { name: 'Sales', href: '#' },
  { name: 'Marketing', href: '#' },
  { name: 'Customer success', href: '#' },
  { name: 'Recruiting', href: '#' },
];

const SOLUTIONS_BY_INDUSTRY = [
  { name: 'Education', href: '#' },
  { name: 'Technology', href: '#' },
  { name: 'Financial Services', href: '#' },
  { name: 'Professional Services', href: '#' },
];

function SolSizeItem({ name, desc, icon, onClick }: { name: string; desc: string; icon: React.ReactNode; onClick: () => void }) {
  return (
    <a
      href="#"
      onClick={onClick}
      style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', borderRadius: 12, textDecoration: 'none', color: 'inherit', transition: 'background 150ms ease' }}
      onMouseEnter={(e) => (e.currentTarget.style.background = '#F9F7FE')}
      onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
    >
      <span style={{ width: 36, height: 36, borderRadius: 10, background: '#F4F0FE', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        {icon}
      </span>
      <span>
        <span style={{ display: 'block', fontSize: 14, fontWeight: 700, color: '#17131F' }}>{name}</span>
        <span style={{ display: 'block', fontSize: 12, color: '#8A8599', marginTop: 1 }}>{desc}</span>
      </span>
    </a>
  );
}

function SolItem({ name, icon, onClick }: { name: string; icon: React.ReactNode; onClick: () => void }) {
  return (
    <a
      href="#"
      onClick={onClick}
      style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', borderRadius: 10, textDecoration: 'none', color: '#17131F', fontSize: 14, fontWeight: 600, transition: 'background 150ms ease' }}
      onMouseEnter={(e) => (e.currentTarget.style.background = '#F9F7FE')}
      onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
    >
      <span style={{ width: 32, height: 32, borderRadius: 8, background: '#F4F0FE', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        {icon}
      </span>
      {name}
    </a>
  );
}

function SolutionDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        style={{
          padding: '9px 14px',
          borderRadius: 9,
          color: open ? '#7C3AED' : '#4A4459',
          fontSize: '15.5px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: 5,
          fontFamily: 'inherit',
        }}
      >
        Solution
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ transition: 'transform 200ms ease', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 12px)',
            left: '50%',
            transform: 'translateX(-50%)',
            background: '#fff',
            border: '1px solid #EFEBF7',
            borderRadius: 18,
            padding: '28px 32px',
            boxShadow: '0 20px 50px -12px rgba(35,20,70,.25), 0 4px 12px -4px rgba(35,20,70,.08)',
            width: 680,
            display: 'grid',
            gridTemplateColumns: '1.3fr 1fr 1.1fr',
            gap: 28,
            animation: 'fadeIn 180ms ease',
          }}
        >
          {/* By business size */}
          <div>
            <span style={{ display: 'block', fontSize: 12, fontWeight: 700, color: '#8A8599', letterSpacing: '.06em', marginBottom: 16 }}>By business size</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <SolSizeItem name="Individuals" desc="For solopreneurs" icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>} onClick={() => setOpen(false)} />
              <SolSizeItem name="Small business" desc="For growing businesses" icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>} onClick={() => setOpen(false)} />
              <SolSizeItem name="Large companies" desc="For enterprise" icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /><path d="M12 12v4" /><path d="M2 12h20" /></svg>} onClick={() => setOpen(false)} />
            </div>
          </div>

          {/* By team */}
          <div style={{ borderLeft: '1px solid #F2EFF9', paddingLeft: 28 }}>
            <span style={{ display: 'block', fontSize: 12, fontWeight: 700, color: '#8A8599', letterSpacing: '.06em', marginBottom: 16 }}>By team</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <SolItem name="Sales" icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" /></svg>} onClick={() => setOpen(false)} />
              <SolItem name="Marketing" icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></svg>} onClick={() => setOpen(false)} />
              <SolItem name="Customer success" icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>} onClick={() => setOpen(false)} />
              <SolItem name="Recruiting" icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" /></svg>} onClick={() => setOpen(false)} />
            </div>
          </div>

          {/* By industry */}
          <div style={{ borderLeft: '1px solid #F2EFF9', paddingLeft: 28 }}>
            <span style={{ display: 'block', fontSize: 12, fontWeight: 700, color: '#8A8599', letterSpacing: '.06em', marginBottom: 16 }}>By industry</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <SolItem name="Education" icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5" /></svg>} onClick={() => setOpen(false)} />
              <SolItem name="Technology" icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>} onClick={() => setOpen(false)} />
              <SolItem name="Financial Services" icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>} onClick={() => setOpen(false)} />
              <SolItem name="Professional Services" icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>} onClick={() => setOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
          {/* Product dropdown */}
          <div ref={dropdownRef} style={{ position: 'relative' }}>
            <button
              type="button"
              onClick={() => setOpen(!open)}
              style={{
                padding: '9px 14px',
                borderRadius: 9,
                color: open ? '#7C3AED' : '#4A4459',
                fontSize: '15.5px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 5,
                fontFamily: 'inherit',
              }}
            >
              Product
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ transition: 'transform 200ms ease', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            {open && (
              <div
                style={{
                  position: 'absolute',
                  top: 'calc(100% + 12px)',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: '#fff',
                  border: '1px solid #EFEBF7',
                  borderRadius: 18,
                  padding: 16,
                  boxShadow: '0 20px 50px -12px rgba(35,20,70,.25), 0 4px 12px -4px rgba(35,20,70,.08)',
                  width: 420,
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 4,
                  animation: 'fadeIn 180ms ease',
                }}
              >
                {PRODUCTS.map((product) => (
                  <a
                    key={product.name}
                    href={product.href}
                    onClick={() => setOpen(false)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      padding: '12px 14px',
                      borderRadius: 12,
                      textDecoration: 'none',
                      color: 'inherit',
                      transition: 'background 150ms ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = '#F9F7FE')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                  >
                    <img
                      src={product.icon}
                      alt=""
                      style={{ width: 34, height: 34, borderRadius: 8, objectFit: 'cover', flexShrink: 0 }}
                    />
                    <span>
                      <span style={{ display: 'block', fontSize: 14, fontWeight: 700, color: '#17131F' }}>{product.name}</span>
                      <span style={{ display: 'block', fontSize: 12, color: '#8A8599', marginTop: 2 }}>{product.desc}</span>
                    </span>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Solution dropdown */}
          <SolutionDropdown />

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

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(-50%) translateY(-6px); }
          to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
      `}</style>
    </header>
  );
}
