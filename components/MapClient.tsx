'use client';

import { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';

type Marker = {
  lat: number;
  lng: number;
  title: string;
  description?: string;
};

export default function MapClient({ markers }: { markers: Marker[] }) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let map: ReturnType<typeof import('leaflet').map> | undefined;

    const init = async () => {
      if (!mapRef.current || typeof window === 'undefined') return;
      const L = await import('leaflet');

      const defaultLat = markers[0]?.lat ?? 50.45;
      const defaultLng = markers[0]?.lng ?? 30.52;
      const zoom = markers.length ? 11 : 6;

      map = L.map(mapRef.current).setView([defaultLat, defaultLng], zoom);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
      }).addTo(map);

      markers.forEach((m) => {
        L.marker([m.lat, m.lng])
          .addTo(map!)
          .bindPopup(`<b>${m.title}</b><br/>${m.description || ''}`);
      });
    };

    init();

    return () => {
      map?.remove();
    };
  }, [markers]);

  return (
    <div
      ref={mapRef}
      className="h-[500px] w-full rounded-2xl border border-zinc-200 dark:border-zinc-800"
    />
  );
}
