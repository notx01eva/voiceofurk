import Link from 'next/link';
import { getSortedPosts } from '@/lib/posts';
import { getSortedEvents } from '@/lib/events';
import PostCard from '@/components/PostCard';
import EventCard from '@/components/EventCard';

export default function Home() {
  const posts = getSortedPosts().slice(0, 3);
  const events = getSortedEvents().slice(0, 2);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <section className="rounded-3xl bg-zinc-900 px-6 py-16 text-white dark:bg-zinc-100 dark:text-zinc-900 sm:px-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Голос громади
          </h1>
          <p className="mt-6 text-lg text-zinc-300 dark:text-zinc-700">
            Незалежна платформа для новин, координації зборів та об&apos;єднання людей
            навколо важливих громадських ініціатив.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/posts"
              className="rounded-full bg-white px-6 py-3 font-medium text-zinc-900 transition hover:bg-zinc-200"
            >
              Всі новини
            </Link>
            <Link
              href="/join"
              className="rounded-full border border-white/30 px-6 py-3 font-medium transition hover:bg-white/10"
            >
              Приєднатись
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl font-bold">Останні новини</h2>
          <Link href="/posts" className="text-sm font-medium hover:underline">
            Всі новини →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

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
    </div>
  );
}
