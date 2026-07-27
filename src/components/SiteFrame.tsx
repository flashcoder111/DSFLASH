import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/blog-data";

const primaryLinks = [
  { href: "/deepseek", label: "DeepSeek" },
  { href: "/china-models", label: "Open-Source Models" },
  { href: "/global-models", label: "Closed-Source Models" },
  { href: "/github-radar", label: "GitHub Radar" },
  { href: "/topics", label: "Topics" },
  { href: "/compare", label: "Comparisons" }
];

const modelLinks = [
  { href: "/models/deepseek", label: "DeepSeek" },
  { href: "/models/kimi", label: "Kimi" },
  { href: "/models/qwen", label: "Qwen" },
  { href: "/models/gemini", label: "Gemini" },
  { href: "/models/claude", label: "Claude" },
  { href: "/models/gpt", label: "GPT" }
];

export default function SiteFrame({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="site-header__inner">
          <Link href="/" className="wordmark" aria-label="Open Source Model Blog home">
            Open Source Model Blog
          </Link>
          <nav className="primary-nav" aria-label="Primary navigation">
            {primaryLinks.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <div className="site-footer__grid">
          <section>
            <p className="footer-heading">{siteConfig.name}</p>
            <p className="footer-copy">Independent reporting and practical research for the open-model ecosystem. Every article keeps its sources close to the claim.</p>
            <p className="footer-copy footer-copy--contact">
              Editorial, corrections &amp; rights enquiries: <a href="mailto:hello@deepseekflash.com">hello@deepseekflash.com</a>
            </p>
            <p className="footer-copy footer-copy--small">© 2026 Open Source Model Blog</p>
          </section>
          <section>
            <p className="footer-heading">Open Models</p>
            <div className="footer-links">
              {modelLinks.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
              <Link href="/models">View all models</Link>
            </div>
          </section>
          <section>
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
          </section>
          <section>
            <p className="footer-heading">About</p>
            <div className="footer-links">
              <Link href="/about">About</Link>
              <Link href="/editorial-policy">Editorial &amp; Sources Policy</Link>
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
}
