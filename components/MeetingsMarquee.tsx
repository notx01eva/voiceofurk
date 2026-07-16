'use client';

import { Meeting } from '@/lib/meetings';
import MeetingCard from './MeetingCard';

export default function MeetingsMarquee({ meetings }: { meetings: Meeting[] }) {
  const duplicated = [...meetings, ...meetings];

  return (
    <div className="marquee-wrapper">
      <div className="marquee-track flex w-max gap-4">
        {duplicated.map((meeting, idx) => (
          <div
            key={`${meeting.slug}-${idx}`}
            className="w-[min(300px,calc(100vw-4rem))] shrink-0 md:w-[340px]"
          >
            <MeetingCard meeting={meeting} />
          </div>
        ))}
      </div>
    </div>
  );
}
