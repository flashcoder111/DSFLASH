import type { Metadata } from "next";
import Link from "next/link";
import { articlesForTopic, topics } from "@/lib/blog-data";

export const metadata: Metadata = { title: "Topics", description: "Long-running topics in the open-model ecosystem.", alternates: { canonical: "/topics" } };

export default function TopicsPage() {
  return (
    <div className="page-container">
      <header className="page-intro"><p className="eyebrow">Topics</p><h1>Follow the ideas,<br />not just releases.</h1><p>Long-running topics give model announcements the technical and practical context they need.</p></header>
      <section className="directory-grid">
        {topics.map((topic) => {
          const count = articlesForTopic(topic.slug).length;
          return <article className="directory-card" key={topic.slug}><Link href={`/topics/${topic.slug}`}><p className="eyebrow">{count} published {count === 1 ? "article" : "articles"}</p><h2>{topic.name}</h2><p>{topic.description}</p></Link></article>;
        })}
      </section>
    </div>
  );
}
