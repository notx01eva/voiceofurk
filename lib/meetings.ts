import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const meetingsDirectory = path.join(process.cwd(), 'content/meetings');

export type Meeting = {
  slug: string;
  title: string;
  date: string;
  location: string;
  description: string;
  link?: string;
  mapUrl?: string;
};

export function getSortedMeetings(): Meeting[] {
  const fileNames = fs.readdirSync(meetingsDirectory);
  const allMeetings = fileNames
    .filter((name) => name.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(meetingsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);
      return {
        slug,
        title: matterResult.data.title as string,
        date: matterResult.data.date as string,
        location: matterResult.data.location as string,
        description:
          (matterResult.data.description as string) || matterResult.content.trim(),
        link: matterResult.data.link as string | undefined,
        mapUrl: matterResult.data.mapUrl as string | undefined,
      };
    });
  return allMeetings.sort((a, b) => (a.date < b.date ? 1 : -1));
}
