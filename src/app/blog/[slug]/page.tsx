import { notFound } from "next/navigation";

const dummyPosts = [
  {
    id: 1,
    title: "5 Tips to Keep Your Dog Healthy",
    content: `
      <p>Keeping your dog healthy involves regular exercise, balanced nutrition, and routine vet checkups.</p>
      <p>Here are 5 tips you can start using today:</p>
      <ul>
        <li>Feed high-quality food tailored to your dog's age and breed.</li>
        <li>Ensure daily walks and playtime for physical and mental stimulation.</li>
        <li>Maintain regular vaccinations and health checkups.</li>
        <li>Keep your dog hydrated at all times.</li>
        <li>Provide a comfortable and safe living environment.</li>
      </ul>
    `,
    date: "May 15, 2025",
    slug: "5-tips-to-keep-your-dog-healthy",
  },
  {
    id: 2,
    title: "Why Grain-Free Diets Matter for Cats",
    content: `
      <p>Grain-free diets can help improve digestion and reduce allergic reactions in cats.</p>
      <p>Here’s why many cat owners are switching to grain-free options:</p>
      <ul>
        <li>Many cats have sensitivities to grains like corn or wheat.</li>
        <li>Grain-free diets often have higher protein content.</li>
        <li>Supports healthier skin and coat condition.</li>
      </ul>
    `,
    date: "May 10, 2025",
    slug: "why-grain-free-diets-matter-for-cats",
  },
  {
    id: 3,
    title: "Understanding Your Pet’s Allergies",
    content: `
      <p>Pets can develop allergies just like humans, and recognizing the signs early helps a lot.</p>
      <p>Common pet allergies include:</p>
      <ul>
        <li>Food allergies</li>
        <li>Environmental allergies like pollen or dust</li>
        <li>Flea allergies</li>
      </ul>
      <p>If your pet shows excessive scratching, licking, or discomfort, consult your vet promptly.</p>
    `,
    date: "May 5, 2025",
    slug: "understanding-your-pets-allergies",
  },
];

interface BlogPostPageProps {
  params: { slug: string };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = dummyPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="max-w-3xl mx-auto px-5 py-10">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <time className="block mb-8 text-muted-foreground">{post.date}</time>

      <article
        className="prose prose-primary max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </main>
  );
}
