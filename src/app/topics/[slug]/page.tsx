import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TopicArticleList from "@/components/TopicArticleList";
import { articlesForTopic, getTopic, topics } from "@/lib/blog-data";

export function generateStaticParams() { return topics.map((topic) => ({ slug: topic.slug })); }

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const topic = getTopic(slug);
    return topic ? { title: topic.name, description: topic.description, alternates: { canonical: `/topics/${topic.slug}` } } : {};
  });
}

export default async function TopicDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const topic = getTopic(slug);
  if (!topic) notFound();
  const topicArticles = articlesForTopic(slug);
  return <div className="page-container"><header className="page-intro"><p className="eyebrow">Topic</p><h1>{topic.name}</h1><p>{topic.description}</p></header>{topicArticles.length ? <TopicArticleList articles={topicArticles} /> : <p className="policy-content">Articles are being prepared with primary sources.</p>}</div>;
}
