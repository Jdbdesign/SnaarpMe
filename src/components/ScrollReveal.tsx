'use client';

import { useEffect } from 'react';

export default function ScrollReveal() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || !('IntersectionObserver' in window)) return;

    const nodes = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    const pending: HTMLElement[] = [];

    nodes.forEach(n => {
      const r = n.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.92) return;
      n.style.opacity = '0';
      n.style.transform = 'translateY(18px)';
      n.style.transition = 'opacity 620ms cubic-bezier(.22,.8,.3,1), transform 620ms cubic-bezier(.22,.8,.3,1)';
      pending.push(n);
    });

    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const el = e.target as HTMLElement;
        const d = parseInt(el.getAttribute('data-reveal-delay') || '0', 10);
        el.style.transitionDelay = d + 'ms';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
        io.unobserve(el);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    pending.forEach(n => io.observe(n));

    return () => io.disconnect();
  }, []);

  return null;
}
