# Open Source Model Blog — Product Requirements Document

**Status:** Approved for implementation  
**Repository:** `flashcoder111/DSFLASH`  
**Blog domain:** `deepseekv4flash.com`  
**Product destination:** `https://deepseekv4pro.com/`

## 1. Product goal

Rebuild `deepseekv4flash.com` as an English-language editorial blog covering open-source AI models, releases, topics, and comparisons.

The site earns organic traffic through useful, source-first content. Its only persistent product referral is one branded footer link to the separate DeepSeek V4 product site. The blog is not a product dashboard, chat tool, pricing page, or a collection of keyword pages.

### Success criteria for MVP

- Public visitors can browse latest articles, topics, model-library pages, and comparisons.
- Every published article has a canonical URL, metadata, cited primary sources, sitemap entry, and Article structured data.
- Editors can submit source URLs, prepare a fact-backed brief, generate a draft, review it, and publish it.
- Drafts, admin pages, and APIs are excluded from indexing.
- The same single branded footer link points to `https://deepseekv4pro.com/` on every public page.

## 2. Scope

### In scope

- Simple responsive editorial frontend using Next.js SSR.
- Navigation: **Open Source Model Blog / China Models / Global Models / GitHub Radar / Topics / Comparisons**.
- Articles, topic hubs, model hubs, comparison pages, policy pages, sitemap, robots, canonical URLs, and Article JSON-LD.
- Supabase PostgreSQL, Storage, and Supabase Auth for administrator access.
- Content operations: source intake, structured briefs, source-backed claims, AI drafting, manual review, scheduling, and publication history.
- Daily RSS/official-source intake using a protected Vercel Cron route.
- Pre-launch inventory and handling of legacy URLs.

### Explicitly out of scope for v1

- Chinese, Japanese, or any other language variants.
- Public comments, user accounts, chat, billing, subscriptions, API keys, product pricing tools, and benchmarks operated by this site.
- Automatic publishing without a human editor.
- Automated X/Reddit ingestion before an authenticated, compliant connection is available.
- Rewriting or republishing competitor articles or community long-form posts.

## 3. Public experience

### Core routes

| Route | Purpose |
| --- | --- |
| `/` | Latest editorial coverage, topic entry points, and the site’s source-first positioning. |
| `/china-models` | Coverage of leading model families from China and Greater China. |
| `/global-models` | Coverage of leading global model families, starting with Google Gemini, Anthropic Claude, and OpenAI GPT. |
| `/github-radar` | Human-reviewed radar for open-model, inference, and agent infrastructure projects; never an automated repost of GitHub Trending. |
| `/topics` and `/topics/[slug]` | Long-lived hubs for World Models, AI Agents, Loops, AI Coding, and Long Context. |
| `/models` and `/models/[slug]` | All core model and company hubs, with open-weight status made explicit on individual model pages. |
| `/compare` and `/compare/[slug]` | Model-comparison frameworks and source-backed comparison articles. |
| `/articles/[slug]` | Published article detail, cited sources, related reading, metadata, and Article JSON-LD. |
| `/about`, `/editorial-policy`, `/privacy`, `/terms`, `/contact` | Trust, legal, and contact pages. |

### Footer policy

The footer contains one normal, visible product link labeled **DeepSeek V4 API** that opens `https://deepseekv4pro.com/`. It must not use hidden text, keyword-stuffed anchor text, repeated promotional blocks, or fixed article-body CTAs.

## 4. Content operations

### Source hierarchy

1. Official company announcements, blogs, API documentation, model cards, GitHub releases, and papers.
2. Public evaluation sources such as Arena, Artificial Analysis, LiveBench, and SWE-bench.
3. X, Reddit, Hacker News, and AI daily digests as attributed opinion or topic signals only.
4. Competitor pages as topic/keyword discovery only; never as article text to rewrite.

### Editorial workflow

```text
Official/RSS discovery or manual URL submission
→ candidate queue
→ structured brief
→ verified claim list with original URLs
→ AI draft
→ editor fact, source, duplicate, media, and link review
→ scheduled or manual publication
→ sitemap and related-content update
```

All publications require manual approval. A claim without an original source cannot be presented as fact. Social posts must retain attribution and remain clearly separated from reporting. Images must be either official assets with clear rights or original editorial charts/graphics.

### Initial editorial mix

The first 20–30 publications prioritize current topics: model releases and updates, World Models, Loops, AI Agents, AI Coding, long-context developments, and comparison explainers. Existing DSFLASH news or guide material may be reused only after an editor confirms that its facts, dates, linked sources, and user intent remain current.

## 5. Data and admin requirements

The new Supabase project is separate from legacy product data. It includes these entities:

- `sources`, `source_items`: source whitelist, submitted URLs, provenance, trust tier, and candidate status.
- `content_briefs`, `claims`: article intent and every verifiable claim with its original source URL.
- `articles`, `article_sources`, `topics`, `models`: public editorial content and taxonomy.
- `media_assets`: Storage reference, alt text, original URL, rights status, and rights note.
- `review_events`: generated, reviewed, rejected, scheduled, and published audit records.
- `legacy_url_mappings`: old path, new path where applicable, chosen HTTP status, and review reason.

Administrators authenticate through Supabase Auth. Server-side admin authorization is enforced for all editorial write APIs. Public visitors do not log in, and comments are disabled.

Required runtime variables:

```text
NEXT_PUBLIC_SITE_URL
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY
OPENAI_API_KEY
OPENAI_MODEL
CRON_SECRET
ADMIN_EMAILS
```

## 6. Legacy migration and launch

1. Export the legacy DSFLASH URL inventory from Search Console, Analytics, server logs, and backlink data.
2. Treat any URL with organic search visibility in the previous 90 days or an external referring domain as a priority URL.
3. Use a 301 only when a materially equivalent new article, model hub, or topic hub exists. Return 410 for retired product and guide pages with no equivalent. Do not redirect unrelated pages to the homepage.
4. Deploy first to a Vercel Preview environment with `noindex`; validate redirects, 410 pages, canonical URLs, sitemap, robots, structured data, and footer product link.
5. The Vercel project owner performs the final production deployment and `deepseekv4flash.com` domain cutover after approval.

## 7. Acceptance checklist

- [ ] Site is English-only; old locale pages are migrated or retired intentionally.
- [ ] All public routes render server-side and are mobile responsive.
- [ ] Every public article has its title, description, canonical URL, cited sources, and Article JSON-LD.
- [ ] Editorial drafts and admin/API paths are not indexable.
- [ ] RSS ingestion is protected by `CRON_SECRET`; manual URL intake requires an authenticated administrator.
- [ ] A draft cannot publish without sources, a body, a slug, review approval, and verified media rights.
- [ ] Footer has exactly one branded product link to `https://deepseekv4pro.com/`.
- [ ] Legacy priority URLs are explicitly mapped to 301 or 410 before cutover.
- [ ] Supabase migration, environment variables, and Vercel Preview deployment are validated before production.

## 8. Ownership and handoff

- **Editorial owner:** selects topics, validates facts, approves drafts, and decides publication.
- **Development owner:** maintains the Next.js application, Supabase schema, ingestion job, and SEO implementation.
- **Vercel project owner:** configures deployment variables, Preview/Production deployments, and the domain cutover. No team-account or DNS changes are made from this repository without that owner’s approval.
