import { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogArticleReader from "@/components/blog/BlogArticleReader";
import { blogPosts, getBlogPostBySlug } from "@/data/blog";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | HVTI",
    };
  }

  return {
    title: `${post.title} | HVTI Engineering Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return <BlogArticleReader post={post} />;
}
