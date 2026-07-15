import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const donationsDirectory = path.join(process.cwd(), 'content/donations');

export type Donation = {
  slug: string;
  title: string;
  description: string;
  link: string;
  linkLabel?: string;
};

export function getDonations(): Donation[] {
  const fileNames = fs.readdirSync(donationsDirectory);
  return fileNames
    .filter((name) => name.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(donationsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);
      return {
        slug,
        title: matterResult.data.title as string,
        description:
          (matterResult.data.description as string) || matterResult.content.trim(),
        link: matterResult.data.link as string,
        linkLabel: (matterResult.data.linkLabel as string) || 'Підтримати',
      };
    });
}
