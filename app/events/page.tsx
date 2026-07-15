import { getSortedEvents } from '@/lib/events';
import EventCard from '@/components/EventCard';

export default function EventsPage() {
  const events = getSortedEvents();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold">Збори та події</h1>
      <p className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
        Тут публікуються актуальні збори, мітинги, волонтерські акції та інші
        події ініціативи.
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {events.map((event) => (
          <EventCard key={event.slug} event={event} />
        ))}
      </div>
    </div>
  );
}
