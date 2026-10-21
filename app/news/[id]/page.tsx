import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { news } from "@/data";
import ArticleClient from "./ArticleClient";

export function generateStaticParams() {
  return news.map((n) => ({ id: n.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const article = news.find((n) => n.id === id);
  if (!article) return {};

  const images = article.images?.[0] ? [{ url: article.images[0] }] : undefined;

  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/news/${article.id}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      url: `/news/${article.id}`,
      ...(images && { images }),
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      ...(images && { images: [images[0].url] }),
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  // Return a real 404 status for unknown articles
  if (!news.some((n) => n.id === id)) notFound();

  return <ArticleClient params={params} />;
}
