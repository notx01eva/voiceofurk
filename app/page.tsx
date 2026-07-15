import Image from 'next/image';
import Link from 'next/link';
import { getSortedPosts } from '@/lib/posts';
import { getSortedEvents } from '@/lib/events';
import { getSortedMeetings } from '@/lib/meetings';
import { getDonations } from '@/lib/donations';
import PostCard from '@/components/PostCard';
import EventCard from '@/components/EventCard';
import MeetingCard from '@/components/MeetingCard';
import DonationCard from '@/components/DonationCard';

export default function Home() {
  const posts = getSortedPosts().slice(0, 3);
  const events = getSortedEvents().slice(0, 2);
  const meetings = getSortedMeetings().slice(0, 2);
  const donations = getDonations();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <section className="rounded-3xl bg-zinc-900 p-4 text-white dark:bg-zinc-100 dark:text-zinc-900 sm:p-6">
        <a
          href="https://www.sternenkofund.org/"
          target="_blank"
          rel="noreferrer"
          className="group relative block min-h-[420px] overflow-hidden rounded-2xl border border-white/10 shadow-xl sm:min-h-[480px]"
        >
          <Image
            src="/images/sternenko-banner.png"
            alt="Благодійний фонд Спільнота Стерненка"
            fill
            className="object-cover object-top transition duration-500 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="relative flex h-full min-h-[420px] flex-col items-center justify-center p-6 text-center sm:min-h-[480px] sm:p-10">
            <h2 className="text-3xl font-bold uppercase tracking-wide text-white sm:text-5xl">
              Фонд Сергія Стерненка
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-200 sm:text-lg">
              Забезпечує Сили оборони України FPV-дронами. Прозора звітність:
              щодня, щомісяця.
            </p>
            <span className="mt-8 inline-flex rounded-full bg-amber-500 px-8 py-3.5 text-base font-medium text-zinc-900 transition hover:bg-amber-400 sm:text-lg">
              Донат на поточний русоріз
            </span>
          </div>
        </a>
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

      <section className="mt-16">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl font-bold">Мітинги</h2>
          <Link href="/meetings" className="text-sm font-medium hover:underline">
            Всі мітинги →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {meetings.map((meeting) => (
            <MeetingCard key={meeting.slug} meeting={meeting} />
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-2xl bg-zinc-900 px-6 py-10 text-white dark:bg-zinc-100 dark:text-zinc-900 sm:px-10">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl font-bold">Підтримати</h2>
          <Link href="/donate" className="text-sm font-medium hover:underline">
            Всі фонди →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {donations.map((donation) => (
            <DonationCard key={donation.slug} donation={donation} />
          ))}
        </div>
      </section>
    </div>
  );
}
