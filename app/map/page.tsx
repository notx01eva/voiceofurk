import { getSortedEvents } from '@/lib/events';
import MapClient from '@/components/MapClient';

export default function MapPage() {
  const events = getSortedEvents();
  const markers = events
    .filter((e) => e.coordinates)
    .map((e) => ({
      lat: e.coordinates![0],
      lng: e.coordinates![1],
      title: e.title,
      description: `${e.location} — ${e.date}`,
    }));

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold">Карта ініціатив</h1>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        Місця проведення зборів, пункти допомоги та важливі локації.
      </p>
      <div className="mt-8">
        <MapClient markers={markers} />
      </div>
    </div>
  );
}
