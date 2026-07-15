import ContactForm from '@/components/ContactForm';

export default function JoinPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold">Приєднуйтесь</h1>
      <div className="mt-8 grid gap-12 md:grid-cols-2">
        <div>
          <p className="text-zinc-600 dark:text-zinc-400">
            Ми об&apos;єднуємо небайдужих людей. Підпишіться на оновлення, долучайтесь
            до чату або заповніть форму, щоб стати волонтером.
          </p>
          <div className="mt-6 flex flex-col gap-4">
            <a
              href="https://t.me/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-500 px-6 py-3 font-medium text-white transition hover:bg-sky-600"
            >
              Telegram-канал
            </a>
            <a
              href="https://t.me/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-600 px-6 py-3 font-medium text-white transition hover:bg-sky-700"
            >
              Чат для координації
            </a>
          </div>
        </div>
        <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
          <h2 className="text-xl font-semibold">Стати волонтером</h2>
          <div className="mt-4">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
