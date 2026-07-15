import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const eventsDirectory = path.join(process.cwd(), 'content/events');

export type Event = {
  slug: string;
  title: string;
  date: string;
  location: string;
  description: string;
  coordinates?: [number, number];
  link?: string;
};

export function getSortedEvents(): Event[] {
  const fileNames = fs.readdirSync(eventsDirectory);
  const allEvents = fileNames
    .filter((name) => name.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(eventsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);
      return {
        slug,
        title: matterResult.data.title as string,
        date: matterResult.data.date as string,
        location: matterResult.data.location as string,
        description:
          (matterResult.data.description as string) || matterResult.content.trim(),
        coordinates: matterResult.data.coordinates as [number, number] | undefined,
        link: matterResult.data.link as string | undefined,
      };
    });
  return allEvents.sort((a, b) => (a.date < b.date ? 1 : -1));
}
