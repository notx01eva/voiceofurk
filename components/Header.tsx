'use client';

import Link from 'next/link';

const links = [
  { href: '/', label: 'Головна' },
  { href: '/posts', label: 'Новини' },
  { href: '/events', label: 'Збори' },
  { href: '/meetings', label: 'Мітинги' },
  { href: '/map', label: 'Карта' },
  { href: '/donate', label: 'Підтримати' },
  { href: '/join', label: 'Приєднатись' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-center px-4 md:justify-between">
        <Link
          href="/"
          className="text-center text-xl font-bold uppercase tracking-tight md:text-2xl"
        >
          Голос громади
        </Link>

        <nav className="hidden gap-6 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium transition-colors hover:text-zinc-500"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
