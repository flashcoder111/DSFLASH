# Blog content archive

This folder is the editorial record for articles added to DSFLASH from August 2026 onward. Each article has one directory named with the published slug.

Every article directory must contain:

- `article.md` — the full published copy, title, summary, date, and intended route.
- `sources.md` — the original materials reviewed, with links and a short note explaining how each source was used.
- `assets.md` — the image filenames, their origins, whether they are displayed on the site, and an SHA-256 checksum.
- `images/` — the unmodified image originals used or considered for the article.

The website keeps its optimised serving copies under `public/images/`. The matching original must also be stored here, using the same article slug and a descriptive image name. Do not replace an archived original when an image is re-cropped or otherwise prepared for display; add the derived version separately and record the relationship in `assets.md`.

For older articles, add an archive directory when the article is next materially updated. New articles should not be published without this record.
