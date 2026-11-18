"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

function useInternalLinksOnly(paths: string[]) {
  return paths.includes(usePathname().replace(/\/$/, ""));
}

export function SiteFooterContact({ internalPaths }: { internalPaths: string[] }) {
  const internalOnly = useInternalLinksOnly(internalPaths);
  return <p className="footer-copy footer-copy--contact">
    Editorial, corrections &amp; rights enquiries: {internalOnly
      ? <Link href="/contact">Contact the editorial team</Link>
      : <a href="mailto:hello@deepseekv4flash.com">hello@deepseekv4flash.com</a>}
  </p>;
}

export function SiteFooterProducts({ internalPaths }: { internalPaths: string[] }) {
  const internalOnly = useInternalLinksOnly(internalPaths);
  if (internalOnly) {
    return <section>
      <p className="footer-heading">DeepSeek API</p>
      <div className="footer-links">
        <Link href="/pricing">Pricing</Link>
        <Link href="/guides/deepseek-v4-flash-api-quickstart">API quickstart</Link>
      </div>
    </section>;
  }

  return <section>
    <p className="footer-heading">Our products</p>
    <div className="footer-links">
      <a href="https://deepseekv4pro.com/" target="_blank" rel="noreferrer" className="product-link">
        DeepSeek V4 Pro <ArrowUpRight aria-hidden="true" />
      </a>
      <a href="https://photocard.ai/" target="_blank" rel="noreferrer" className="product-link">
        Photocard.ai <ArrowUpRight aria-hidden="true" />
      </a>
      <a href="https://christmascard.app/" target="_blank" rel="noreferrer" className="product-link">
        ChristmasCard.app <ArrowUpRight aria-hidden="true" />
      </a>
    </div>
  </section>;
}
