import type { ReactNode } from "react";

type PolicyPageProps = { eyebrow: string; title: string; lead: string; children: ReactNode };

export default function PolicyPage({ eyebrow, title, lead, children }: PolicyPageProps) {
  return <div className="article-container"><header className="page-intro"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{lead}</p></header><article className="policy-content">{children}</article></div>;
}
