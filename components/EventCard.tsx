import { Event } from '@/lib/events';
import { format } from 'date-fns';
import { uk } from 'date-fns/locale';

export default function EventCard({ event }: { event: Event }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="text-xs font-semibold uppercase tracking-wide text-amber-600">
        {format(new Date(event.date), 'd MMMM yyyy, HH:mm', { locale: uk })}
      </div>
      <h3 className="mt-2 text-lg font-semibold">{event.title}</h3>
      <p className="mt-1 text-sm text-zinc-500">{event.location}</p>
      <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
        {event.description}
      </p>
      {event.link && (
        <a
          href={event.link}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          Деталі / записатись
        </a>
      )}
    </div>
  );
}
