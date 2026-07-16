import Link from 'next/link';
import { getSortedPosts } from '@/lib/posts';
import { getSortedEvents } from '@/lib/events';
import { getSortedMeetings } from '@/lib/meetings';
import PostCard from '@/components/PostCard';
import MeetingsMarquee from '@/components/MeetingsMarquee';

export default function Home() {
  const posts = getSortedPosts().slice(0, 3);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const events = getSortedEvents().slice(0, 2);
  const meetings = getSortedMeetings();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <section className="overflow-hidden rounded-3xl bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900">
        <a
          href="https://www.sternenkofund.org/"
          target="_blank"
          rel="noreferrer"
          className="group relative block min-h-[420px] overflow-hidden shadow-xl md:min-h-[480px]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/sternenko-banner-mobile.jpeg"
            alt="Благодійний фонд Спільнота Стерненка"
            className="absolute inset-0 block h-full w-full object-cover object-center transition duration-500 group-hover:scale-105 md:hidden"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/sternenko-banner-desktop.jpeg"
            alt="Благодійний фонд Спільнота Стерненка"
            className="absolute inset-0 hidden h-full w-full object-cover object-center transition duration-500 group-hover:scale-105 md:block"
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="relative flex min-h-[420px] flex-col items-center justify-center p-6 text-center md:min-h-[480px] md:p-10">
            <div className="w-full max-w-lg px-2 md:max-w-2xl">
              <h2 className="break-words text-2xl font-bold uppercase tracking-normal text-white md:text-5xl md:tracking-wide">
                Фонд Сергія Стерненка
              </h2>
              <p className="mt-4 break-words text-base leading-relaxed text-zinc-200 md:text-lg">
                Забезпечує Сили оборони України FPV-дронами. Прозора звітність:
                щодня, щомісяця.
              </p>
            </div>
            <span className="mt-8 inline-flex max-w-full break-words rounded-full bg-amber-500 px-5 py-3 text-center text-sm font-black uppercase tracking-wide text-zinc-900 transition hover:bg-amber-400 md:px-8 md:py-3.5 md:text-base md:text-lg">
              ДОНАТ НА ПОТОЧНИЙ РУСОРІЗ
            </span>
          </div>
        </a>
      </section>

      <section className="mt-16">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl font-bold">Мітинги</h2>
          <Link href="/meetings" className="text-sm font-medium hover:underline">
            Всі мітинги →
          </Link>
        </div>
        <MeetingsMarquee meetings={meetings} />
      </section>

      <section className="mt-16">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl font-bold">Останні новини</h2>
          <Link href="/posts" className="text-sm font-medium hover:underline">
            Всі новини →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      {/*
      <section className="mt-16">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl font-bold">Актуальні збори</h2>
          <Link href="/events" className="text-sm font-medium hover:underline">
            Всі збори →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {events.map((event) => (
            <EventCard key={event.slug} event={event} />
          ))}
        </div>
      </section>
      */}
    </div>
  );
}
