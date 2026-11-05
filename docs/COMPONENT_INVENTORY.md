# Component Inventory

## Evidence base
Written from direct inspection of:
- [../research/pages/home.md](../research/pages/home.md)
- [../research/pages/forum-0.md](../research/pages/forum-0.md)
- [../research/pages/news-49.md](../research/pages/news-49.md)
- [../research/pages/SUMMARY.md](../research/pages/SUMMARY.md)

## 1. Shared components

### Page shell
Observed on homepage and static pages.
Common properties:
- Centered fixed-width content area
- Warm brown background wrapper
- Compact layout for game portal page

### Health warning strip
Observed at top of homepage.
- small icon + text
- warning style message
- sits above banner and navigation

### Banner hero
Observed in homepage.
- Full width image banner
- used for site branding before nav

### Navigation button group
Observed in homepage.
- button-like tiles with icon and text
- links to main content areas
- style is compact and game-like

### Footer legal block
Observed at footer area of homepage.
- darkened background
- text with licensing and publishing info

### Back-to-top action
Observed in homepage logic and source structure.
- floating button
- shown only after scroll
- uses opacity toggle behavior

## 2. Page-specific components

### Home page component set
- Health warning bar
- Main hero banner
- Primary nav bar
- Event list cards
- Leaderboard section
- Footer/legal area
- Top button control

### News/event page component set
- Article title
- Event/news header block
- Body text content
- Related item links
- Themed imagery or thumbnails

### Guide page component set
- Article title
- Long-form text paragraphs
- Topic-related links
- Standard portal shell around content

### Forum page component set
- Forum topic list
- Topic metadata (time, subject)
- Authentication links
- User avatar thumbnails
- Forum CSS styling separate from main portal CSS

## 3. Props and behavior model for reconstruction
Because the public site is legacy HTML, the component model should be kept at a practical level rather than a fully abstracted modern design system.

### Shared component props
- title: string
- href: string
- thumbnailUrl?: string
- subtitle?: string
- excerpt?: string

### Home page card props
- title
- textSummary
- thumbnail
- link
- categoryTag

### Forum item props
- topicTitle
- authorName
- publishedText
- topicLink
- avatarUrl?

### Navigation item props
- label
- href
- iconUrl
- active?: boolean

## 4. Observed interactions
- Link navigation between pages
- Scroll-to-top button
- Hover/focus link styling
- Forum list access with direct topic links

## 5. Reconstruction constraints
- Do not infer a modern component library structure that the source site did not visibly use.
- Prefer simple reusable UI blocks modeled from the confirmed HTML structure.
- Keep forum and homepage as separate UI shells to respect the site evidence.

## 6. Implemented React components

| Component | Props | Responsibility |
|---|---|---|
| `SiteShell` | `children`, `className` | Shared portal frame, header, main content, footer, and back-to-top control. |
| `HealthNotice` | none | Compact public health warning strip. |
| `SiteHeader` | none | Original CSS brand scene and observed navigation links. |
| `SiteFooter` | none | Independent reconstruction/legal-resource note. |
| `BackToTop` | none | Smooth-scroll button; keyboard focus and hover states are supported. |
| `ArticleCard` | `article` | Renders one data-backed home listing item and its detail link. |
| `RankingsPanel` | none | Selectable ranking labels with explicit no-data disclosure. |
| `HomePage` | none | Article list and ranking side panel. |
| `ArticlePage` | query `id` from router | Detail metadata and authorized-content placeholder. |
| `InfoPage` | none | Character profiles summarized from inspected public information. |
| `DownloadPage` | none | Captured platform/version metadata without unverified targets. |
| `ForumPage` | `page` | Read-only topic index and links for the two surveyed pages. |
| `NotFoundPage` | none | Explains routes for which no evidence is available. |

These are implementation details, not a claim that the legacy source used
React components..
