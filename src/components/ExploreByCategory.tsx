'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import {
  UsersRound,
  ShieldCheck,
  Flame,
  Target,
  BookOpen,
  Calculator,
  Kanban,
  GraduationCap,
  type LucideIcon,
} from 'lucide-react';

type AppIconSpec = { kind: 'img'; src: string } | { kind: 'lucide'; Icon: LucideIcon };

interface CategoryApp {
  name: string;
  desc: string;
  icon: AppIconSpec;
  href?: string;
}

type Accent = 'brand' | 'teal' | 'mint' | 'rose' | 'amber';

interface Category {
  id: string;
  label: string;
  tagline: string;
  accent: Accent;
  apps: CategoryApp[];
  viewAllCategoryId?: string;
}

const CATEGORIES: Category[] = [
  {
    id: 'communicate',
    label: 'Communicate',
    tagline: 'Every channel your team talks through, in one place.',
    accent: 'brand',
    apps: [
      { name: 'Mail', desc: 'Business email on your own domain, with unlimited mailboxes and no per-seat email tax.', icon: { kind: 'img', src: '/assets/icons/envelope.jpg' }, href: '/products/mail' },
      { name: 'Contacts', desc: 'One address book, shared across the whole team.', icon: { kind: 'img', src: '/assets/icons/search.jpg' }, href: '/products/contacts' },
      { name: 'Teams', desc: 'Group chat and channels, so email stops being a to-do list.', icon: { kind: 'img', src: '/assets/icons/chat-bubbles.jpg' }, href: '/products/teams' },
      { name: 'Kalender', desc: 'Scheduling that books itself, no back-and-forth required.', icon: { kind: 'img', src: '/assets/icons/apps-kalender.jpg' }, href: '/products/kalender' },
      { name: 'Business Card', desc: 'Your digital card, updated the instant you are.', icon: { kind: 'img', src: '/assets/icons/logos/business-card.svg' }, href: '/products/business-card' },
      { name: 'Meet', desc: 'Video calls, screen share, and recording — without another app.', icon: { kind: 'img', src: '/assets/icons/apps-meet.jpg' }, href: '/products/meet' },
    ],
  },
  {
    id: 'create-store',
    label: 'Create & Store',
    tagline: 'Every file your team makes, safely stored and always in sync.',
    accent: 'teal',
    apps: [
      { name: 'Work Drive', desc: 'Shared storage for every file, with version history built in.', icon: { kind: 'img', src: '/assets/icons/cube.jpg' }, href: '/products/work-drive' },
      { name: 'Sheets', desc: 'Spreadsheets that talk to your business.', icon: { kind: 'img', src: '/assets/icons/apps-sheet.jpg' }, href: '/products/sheets' },
      { name: 'PDF Reader', desc: 'View, mark up, and sign PDFs — all in one place.', icon: { kind: 'img', src: '/assets/icons/logos/pdf-reader.svg' }, href: '/products/pdf-reader' },
      { name: 'Document', desc: 'Write together and see it happen live.', icon: { kind: 'img', src: '/assets/icons/apps-document.png' }, href: '/products/docs' },
      { name: 'Presentation', desc: 'Build and present decks straight from the browser.', icon: { kind: 'img', src: '/assets/icons/p-icon.jpg' }, href: '/products/presentation' },
      { name: 'Notepad', desc: 'Quick notes that sync the moment you type them.', icon: { kind: 'img', src: '/assets/icons/logos/notepad.svg' }, href: '/products/notepad' },
    ],
  },
  {
    id: 'grow-revenue',
    label: 'Grow Revenue',
    tagline: 'Everything that finds, nurtures, and closes your next deal.',
    accent: 'mint',
    apps: [
      { name: 'CRM', desc: 'Know every deal, see what\u2019s next.', icon: { kind: 'lucide', Icon: UsersRound }, href: '/products/crm' },
      { name: 'Zeus', desc: 'Finds new prospects that match your ideal customer profile, automatically.', icon: { kind: 'img', src: '/assets/icons/logos/zeus.svg' } },
      { name: 'Sendrit', desc: 'Sends personalized outbound sequences that land in the inbox.', icon: { kind: 'img', src: '/assets/icons/apps-sendrit.jpg' } },
      { name: 'VerifyRit', desc: 'Verifies leads and emails before they ever hit your pipeline.', icon: { kind: 'lucide', Icon: ShieldCheck } },
      { name: 'Warmer', desc: 'Warms up your sending domain so your emails actually land.', icon: { kind: 'lucide', Icon: Flame } },
      { name: 'Neo', desc: 'Understands your data and helps your team take action at every step.', icon: { kind: 'lucide', Icon: Target } },
    ],
  },
  {
    id: 'secure-sign',
    label: 'Secure & Sign',
    tagline: 'Every password, signature, and approval \u2014 locked down.',
    accent: 'rose',
    apps: [
      { name: 'eSignature', desc: 'Send it out, get it signed, track it to done.', icon: { kind: 'img', src: '/assets/icons/logos/esignature.svg' }, href: '/products/esignature' },
      { name: 'Doc Sign', desc: 'Internal approvals that move in order, one step at a time.', icon: { kind: 'img', src: '/assets/icons/logos/doc-sign.svg' } },
      { name: 'PDF Reader', desc: 'View, mark up, and sign PDFs \u2014 all in one place.', icon: { kind: 'img', src: '/assets/icons/logos/pdf-reader.svg' }, href: '/products/pdf-reader' },
      { name: 'Lock', desc: 'Every password, locked down and shared safely.', icon: { kind: 'img', src: '/assets/icons/apps-lock.jpg' }, href: '/products/lock' },
    ],
  },
  {
    id: 'run-business',
    label: 'Run the Business',
    tagline: 'The back office, running itself.',
    accent: 'amber',
    viewAllCategoryId: 'run-business',
    apps: [
      { name: 'Books', desc: 'Send invoices and keep the books straight, automatically.', icon: { kind: 'lucide', Icon: BookOpen } },
      { name: 'Accounting Software', desc: 'Full accounting \u2014 payroll, tax, and financial statements.', icon: { kind: 'lucide', Icon: Calculator } },
      { name: 'Project Management', desc: 'Plan it, track it, ship it \u2014 one board for the whole team.', icon: { kind: 'lucide', Icon: Kanban } },
      { name: 'ELearn', desc: 'Train your team and track it as it happens.', icon: { kind: 'lucide', Icon: GraduationCap } },
    ],
  },
];

function RowIcon({ icon }: { icon: AppIconSpec }) {
  if (icon.kind === 'img') {
    return <img src={icon.src} alt="" aria-hidden="true" className="ebc-app-icon-img" />;
  }
  const { Icon } = icon;
  return (
    <span className="ebc-app-icon-chip" aria-hidden="true">
      <Icon size={16} strokeWidth={1.8} />
    </span>
  );
}

function AppRow({ app }: { app: CategoryApp }) {
  const inner = (
    <>
      <span className="ebc-app-icon"><RowIcon icon={app.icon} /></span>
      <span className="ebc-app-text">
        <span className="ebc-app-name">{app.name}</span>
        <span className="ebc-app-desc">{app.desc}</span>
      </span>
    </>
  );

  if (app.href) {
    return <Link href={app.href} className="ebc-app-row">{inner}</Link>;
  }
  return <span className="ebc-app-row">{inner}</span>;
}

function CategoryPanel({ category }: { category: Category }) {
  return (
    <div className="ebc-panel" data-accent={category.accent} aria-hidden="true">
      <div className="ebc-panel-glow" />
      <p className="ebc-panel-eyebrow">{category.label}</p>
      <h3 className="ebc-panel-tagline">{category.tagline}</h3>
      <div className="ebc-panel-nodes">
        {category.apps.slice(0, 6).map((app, i) => (
          <span key={app.name} className="ebc-panel-node" style={{ animationDelay: `${i * 120}ms` }}>
            <RowIcon icon={app.icon} />
          </span>
        ))}
      </div>
    </div>
  );
}

function CategoryCard({ category }: { category: Category }) {
  return (
    <article className="ebc-card">
      <CategoryPanel category={category} />
      <div className="ebc-apps">
        <div className="ebc-apps-header">
          <span className="ebc-apps-label">Apps to Explore</span>
        </div>
        <div className="ebc-app-grid">
          {category.apps.map((app) => (
            <AppRow key={app.name} app={app} />
          ))}
        </div>
      </div>
    </article>
  );
}

function StickyCard({
  children,
  i,
  total,
  progress,
}: {
  children: React.ReactNode;
  i: number;
  total: number;
  progress: any;
}) {
  const targetScale = Math.max(0.9, 1 - (total - i - 1) * 0.04);
  const range: [number, number] = [i * (1 / total), 1];
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="ebc-sticky-item" style={{ top: `calc(140px + ${i * 10}px)`, zIndex: i + 1 }}>
      <motion.div style={{ scale }} className="ebc-sticky-motion">
        {children}
      </motion.div>
    </div>
  );
}

function ExploreStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <div className="ebc-stack" ref={containerRef}>
      {CATEGORIES.map((category, i) => (
        <StickyCard key={category.id} i={i} total={CATEGORIES.length} progress={scrollYProgress}>
          <CategoryCard category={category} />
        </StickyCard>
      ))}
    </div>
  );
}

export default function ExploreByCategory() {
  return (
    <section className="ebc-section">
      <div className="ebc-header">
        <h2 className="ebc-heading" data-reveal="">
          Everything, organized<br />
          <span className="ebc-heading-accent">the way you work.</span>
        </h2>
        <p className="ebc-subtext" data-reveal="">
          27 apps across 5 categories — find exactly what your team needs, in seconds.
        </p>
      </div>
      <ExploreStack />
    </section>
  );
}
