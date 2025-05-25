import Link from "next/link";
import { wixBrowserClient } from "@/lib/wix-client.browser";
import WixImage from "@/components/WixImage";
import { formatDate } from "@/lib/utils";

export const revalidate = 60;

async function getAllBlogPosts(limit = 100) {
  try {
    const { items } = await wixBrowserClient.items
      .query("DogHealthTips")
      .limit(limit)
      .find();

    return items;
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}

export default async function BlogPage() {
  const blogPosts = await getAllBlogPosts();

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="mb-10 text-center text-4xl font-bold text-primary">Blogs</h1>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post: any) => (
          <Link
            key={post._id}
            href={`/blog/${post.slug}`}
            className="group block rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            {post.coverImage && (
              <div className="overflow-hidden rounded-t-2xl">
                <WixImage
                  mediaIdentifier={post.coverImage}
                  alt={post.title}
                  width={600}
                  height={300}
                  className="h-48 w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
              </div>
            )}

            <div className="p-5">
              <h2 className="mb-2 text-2xl font-semibold text-primary">{post.title}</h2>
              <p className="mb-1 text-sm text-muted-foreground">
                {formatDate(post.date)}
              </p>
              <p className="mb-4 text-sm text-foreground line-clamp-3">
                {post.summary}
              </p>
              <p className="text-sm font-medium text-muted-foreground">
                Click to read →
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
