'use client';

import Link from 'next/link';
import { useState } from 'react';

const links = [
  { href: '/', label: 'Головна' },
  { href: '/posts', label: 'Новини' },
  { href: '/events', label: 'Збори' },
  { href: '/meetings', label: 'Мітинги' },
  { href: '/map', label: 'Карта' },
  { href: '/join', label: 'Приєднатись' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold tracking-tight">
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

        <button
          onClick={() => setOpen(!open)}
          className="rounded-md p-2 text-xl md:hidden"
          aria-label="Меню"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-4 border-t border-zinc-200 px-4 py-4 md:hidden dark:border-zinc-800">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
