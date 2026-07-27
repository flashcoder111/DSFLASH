import { permanentRedirect } from "next/navigation";

type NewsPageProps = { params: Promise<{ slug: string }> };

export default async function NewsArticlePage({ params }: NewsPageProps) {
  const { slug } = await params;
  permanentRedirect(`/deepseek/${slug}`);
}
