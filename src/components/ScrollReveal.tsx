'use client';

import { useEffect } from 'react';

export default function ScrollReveal() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || !('IntersectionObserver' in window)) return;

    /* ─── Scroll Reveal for [data-reveal] elements ─── */
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    const pending: HTMLElement[] = [];

    nodes.forEach(n => {
      const r = n.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.92) return;
      n.style.opacity = '0';
      n.style.transform = 'translateY(18px)';
      n.style.transition = 'opacity 600ms cubic-bezier(.22,.8,.3,1), transform 600ms cubic-bezier(.22,.8,.3,1)';
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

    /* ─── Chart path draw-in for [data-draw-path] ─── */
    const paths = Array.from(document.querySelectorAll<SVGPathElement>('[data-draw-path]'));
    if (paths.length > 0) {
      paths.forEach(p => {
        const len = p.getTotalLength();
        p.style.setProperty('--path-length', String(Math.ceil(len)));
        p.style.strokeDasharray = String(Math.ceil(len));
        p.style.strokeDashoffset = String(Math.ceil(len));
      });

      const pathIo = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (!e.isIntersecting) return;
          (e.target as HTMLElement).classList.add('is-drawn');
          pathIo.unobserve(e.target);
        });
      }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });

      paths.forEach(p => pathIo.observe(p));
    }

    /* ─── Count-up for [data-count-up] ─── */
    const counters = Array.from(document.querySelectorAll<HTMLElement>('[data-count-up]'));
    if (counters.length > 0) {
      const countIo = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          const target = parseInt(el.getAttribute('data-count-up') || '0', 10);
          const suffix = el.getAttribute('data-count-suffix') || '';
          const prefix = el.getAttribute('data-count-prefix') || '';
          const duration = 800;
          const start = performance.now();

          const tick = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            const current = Math.round(eased * target);
            el.textContent = prefix + current.toLocaleString() + suffix;
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
          countIo.unobserve(el);
        });
      }, { rootMargin: '0px 0px -10% 0px', threshold: 0.2 });

      counters.forEach(c => countIo.observe(c));
    }

    return () => io.disconnect();
  }, []);

  return null;
}
