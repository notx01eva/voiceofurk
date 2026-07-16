'use client';

import { Meeting } from '@/lib/meetings';
import MeetingCard from './MeetingCard';

export default function MeetingsMarquee({ meetings }: { meetings: Meeting[] }) {
  const duplicated = [...meetings, ...meetings];

  return (
    <div className="relative overflow-hidden">
      <div className="marquee-track flex w-max gap-4">
        {duplicated.map((meeting, idx) => (
          <div
            key={`${meeting.slug}-${idx}`}
            className="w-[300px] shrink-0 sm:w-[340px]"
          >
            <MeetingCard meeting={meeting} />
          </div>
        ))}
      </div>
    </div>
  );
}
