import Link from "next/link";
import { comparisonNeighbors } from "@/lib/comparison-directory";

export default function ComparisonNavigation({ href }: { href: string }) {
  const neighbors = comparisonNeighbors(href);
  if (!neighbors) return null;
  return <nav className="comparison-navigation" aria-label="Comparison article navigation">
    <div>{neighbors.previous ? <Link href={neighbors.previous.href}><span>Previous comparison</span><strong>{neighbors.previous.title}</strong></Link> : <span className="comparison-navigation__end">First comparison</span>}</div>
    <div>{neighbors.next ? <Link href={neighbors.next.href}><span>Next comparison</span><strong>{neighbors.next.title}</strong></Link> : <span className="comparison-navigation__end">Last comparison</span>}</div>
  </nav>;
}
