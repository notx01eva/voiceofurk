import { getSortedPosts } from '@/lib/posts';
import PostCard from '@/components/PostCard';

export default function PostsPage() {
  const posts = getSortedPosts();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold">Новини</h1>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
