import { getSortedMeetings } from '@/lib/meetings';
import MeetingCard from '@/components/MeetingCard';

export default function MeetingsPage() {
  const meetings = getSortedMeetings();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold">Мітинги</h1>
      <p className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
        Анонси мирних акцій, протестів та громадських мітингів. Долучайтесь — разом
        нас чують.
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {meetings.map((meeting) => (
          <MeetingCard key={meeting.slug} meeting={meeting} />
        ))}
      </div>
    </div>
  );
}
