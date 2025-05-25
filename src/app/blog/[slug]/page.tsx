import { wixBrowserClient } from "@/lib/wix-client.browser";
import WixImage from "@/components/WixImage";
import { notFound } from "next/navigation";
import { formatDate } from "@/lib/utils";

export const revalidate = 60;

async function getBlogPostBySlug(slug: string) {
  try {
    const { items } = await wixBrowserClient.items
      .query("DogHealthTips")
      .eq("slug", slug)
      .find();

    return items[0];
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
}

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-4 text-4xl font-bold text-primary">{post.title}</h1>
      <p className="mb-6 text-sm text-muted-foreground">
        {formatDate(post.date)}
      </p>

      {post.contentImage && (
        <div className="mb-8 overflow-hidden rounded-xl">
          <WixImage
            mediaIdentifier={post.contentImage}
            alt={post.title}
            width={800}
            height={400}
            className="w-full rounded-xl object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}

      {/* Renders rich content HTML with styling */}
      <div
        className="prose prose-neutral max-w-none dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: post.content || "" }}
      />
    </article>
  );
}
