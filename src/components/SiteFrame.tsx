import Link from "next/link";
import {
  BarChart3,
  Database,
  ExternalLink,
  FileText,
  Gauge,
  GitCompareArrows,
  Languages,
  Newspaper,
  PlugZap,
  Zap
} from "lucide-react";
import { contentPages, siteConfig, sourceLinks } from "@/lib/site-data";

const navItems = [
  { href: "/", label: "Home", icon: Gauge },
  { href: "/deepseek-v4-flash", label: "Flash", icon: Zap },
  { href: "/openclaw", label: "OpenClaw", icon: PlugZap },
  { href: "/pricing", label: "Pricing", icon: BarChart3 },
  { href: "/compare", label: "Compare", icon: GitCompareArrows },
  { href: "/models", label: "Models", icon: Database },
  { href: "/news", label: "News", icon: Newspaper },
  { href: "/faq", label: "FAQ", icon: FileText }
];

const localeLinks = [
  { href: "/", label: "EN" },
  { href: "/zh", label: "ZH" },
  { href: "/ja", label: "JA" }
];

export default function SiteFrame({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen bg-[#080b10] text-slate-50">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080b10]/88 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-cyan-300/40 bg-cyan-300/10 text-sm font-black text-cyan-200">
              DS
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-semibold tracking-normal text-white">
                {siteConfig.name}
              </span>
              <span className="block truncate text-xs text-slate-400">
                Flash + OpenClaw intelligence
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 xl:flex">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <div className="hidden items-center gap-1 rounded-lg border border-white/10 px-2 py-1 sm:flex">
              <Languages className="h-4 w-4 text-slate-400" />
              {localeLinks.map((locale) => (
                <Link
                  key={locale.href}
                  href={locale.href}
                  className="rounded-md px-2 py-1 text-xs font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white"
                >
                  {locale.label}
                </Link>
              ))}
            </div>
            <a
              href="https://api-docs.deepseek.com/quick_start/pricing/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-cyan-300/30 px-3 py-2 text-xs font-semibold text-cyan-100 transition hover:bg-cyan-300/10 sm:text-sm"
            >
              Official pricing
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
        <nav className="flex gap-1 overflow-x-auto border-t border-white/10 px-3 py-2 xl:hidden">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-300"
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
          {localeLinks.map((locale) => (
            <Link
              key={locale.href}
              href={locale.href}
              className="inline-flex shrink-0 items-center rounded-lg px-3 py-2 text-sm font-semibold text-slate-300 sm:hidden"
            >
              {locale.label}
            </Link>
          ))}
        </nav>
      </header>

      <main>{children}</main>

      <footer className="border-t border-white/10 bg-[#07090d]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:px-8">
          <div>
            <div className="text-sm font-semibold text-white">
              {siteConfig.name}
            </div>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
              Independent DeepSeek V4 Flash information hub for API pricing,
              OpenClaw adaptation, model comparisons, release notes, and
              practical routing decisions. This site is not affiliated with
              DeepSeek, OpenAI, Anthropic, Google, xAI, or OpenClaw.
            </p>
            <p className="mt-3 text-xs text-slate-500">
              Last verified: {siteConfig.lastVerified}
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-300">
                Flash pages
              </div>
              <div className="mt-3 grid gap-2">
                {contentPages.slice(0, 8).map((page) => (
                  <Link
                    key={page.href}
                    href={page.href}
                    className="text-sm text-slate-400 transition hover:text-cyan-200"
                  >
                    {page.title}
                  </Link>
                ))}
              </div>
            </div>
            <div>
            <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-300">
              Sources
            </div>
            <div className="mt-3 grid gap-2">
              {sourceLinks.map((source) => (
                <a
                  key={source.href}
                  href={source.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-cyan-200"
                >
                  {source.label}
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
