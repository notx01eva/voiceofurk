import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { uk } from 'date-fns/locale';
import { Post } from '@/lib/posts';

export default function PostCard({ post }: { post: Omit<Post, 'contentHtml'> }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
      {post.image ? (
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      ) : (
        <div className="aspect-[16/9] w-full bg-zinc-100 dark:bg-zinc-800" />
      )}
      <div className="flex flex-1 flex-col p-5">
        <time className="text-xs text-zinc-500">
          {format(new Date(post.date), 'd MMMM yyyy', { locale: uk })}
        </time>
        <h3 className="mt-2 text-lg font-semibold leading-snug">
          <Link href={`/posts/${post.slug}`} className="hover:underline">
            {post.title}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm text-zinc-600 dark:text-zinc-400">
          {post.excerpt}
        </p>
        <Link
          href={`/posts/${post.slug}`}
          className="mt-4 text-sm font-medium hover:underline"
        >
          Читати →
        </Link>
      </div>
    </article>
  );
}
