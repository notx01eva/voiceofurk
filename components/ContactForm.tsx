'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    // TODO: підключити реальну відправку — Formspree, Resend, Telegram-бот або API Route.
    setTimeout(() => setStatus('sent'), 600);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        required
        type="text"
        name="name"
        placeholder="Ім&apos;я"
        className="rounded-xl border border-zinc-300 px-4 py-3 outline-none transition focus:border-zinc-500 dark:border-zinc-700 dark:bg-zinc-900"
      />
      <input
        required
        type="text"
        name="contact"
        placeholder="Email або Telegram"
        className="rounded-xl border border-zinc-300 px-4 py-3 outline-none transition focus:border-zinc-500 dark:border-zinc-700 dark:bg-zinc-900"
      />
      <textarea
        required
        name="message"
        rows={4}
        placeholder="Як хочете допомогти?"
        className="rounded-xl border border-zinc-300 px-4 py-3 outline-none transition focus:border-zinc-500 dark:border-zinc-700 dark:bg-zinc-900"
      />
      <button
        type="submit"
        disabled={status === 'sending' || status === 'sent'}
        className="rounded-full bg-foreground px-6 py-3 font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {status === 'sent' ? 'Надіслано' : 'Надіслати'}
      </button>
      {status === 'sent' && (
        <p className="text-sm text-green-600">Дякуємо! Ми з вами зв&apos;яжемось.</p>
      )}
    </form>
  );
}
