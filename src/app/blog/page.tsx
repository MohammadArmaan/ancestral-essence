// app/blog/page.tsx (or pages/blog.tsx depending on your Next.js setup)

import Link from "next/link";

const dummyPosts = [
  {
    id: 1,
    title: "5 Tips to Keep Your Dog Healthy",
    summary:
      "Discover easy ways to improve your dog's nutrition, exercise, and overall well-being.",
    date: "May 15, 2025",
    slug: "5-tips-to-keep-your-dog-healthy",
  },
  {
    id: 2,
    title: "Why Grain-Free Diets Matter for Cats",
    summary:
      "Learn about the benefits of grain-free meals and how they can improve your cat's digestion.",
    date: "May 10, 2025",
    slug: "why-grain-free-diets-matter-for-cats",
  },
  {
    id: 3,
    title: "Understanding Your Pet’s Allergies",
    summary:
      "A guide to identifying common allergens and how to manage your pet’s allergies effectively.",
    date: "May 5, 2025",
    slug: "understanding-your-pets-allergies",
  },
];

export default function BlogPage() {
  return (
    <main className="max-w-5xl mx-auto px-5 py-10">
      <h1 className="text-4xl font-bold mb-8 text-center">Blogs</h1>

      <div className="grid gap-8 md:grid-cols-2">
        {dummyPosts.map((post) => (
          <article
            key={post.id}
            className="rounded-lg border card p-6 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-2">
              <Link href={`/blog/${post.slug}`}>
                <div className="hover:text-primary transition-colors">{post.title}</div>
              </Link>
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{post.summary}</p>
            <time className="text-sm text-muted-foreground">{post.date}</time>
          </article>
        ))}
      </div>

      <p className="mt-12 text-center text-gray-500 dark:text-gray-400 italic">
        More posts coming soon...
      </p>
    </main>
  );
}
