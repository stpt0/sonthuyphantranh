# Data Model

## Evidence base
This model is derived from the public content structure and route inventory:
- [../docs/ROUTE_INVENTORY.md](../docs/ROUTE_INVENTORY.md)
- [../research/pages/home.md](../research/pages/home.md)
- [../research/pages/forum-0.md](../research/pages/forum-0.md)
- [../research/pages/news-49.md](../research/pages/news-49.md)

## 1. News
Required fields derived from evidence:
- id: integer or string
- title: string
- slug: string
- category: string
- summary: string
- thumbnailUrl?: string
- content: string
- publishedAt: ISO date string
- link: string

Evidence basis:
- homepage displays a list of news/event items with title, brief summary, and link
- article detail pages use /news.php?id=N pattern

## 2. Category
Suggested public category model:
- id: string
- name: string
- slug: string
- description?: string

Observed categories from evidence:
- Home
- News and events
- Game guides
- Community / forum
- Informational pages
- Ranking (unverified route category)

## 3. Event
Suggested public model:
- id: string
- title: string
- startDate?: string
- endDate?: string
- summary: string
- eventType: 'seasonal' | 'event' | 'announcement'
- status: 'active' | 'ended' | 'upcoming'

Evidence basis:
- event titles contain time windows and seasonal naming
- homepage lists multiple event titles with date ranges in text excerpts

## 4. ForumCategory
Suggested public model:
- id: string
- name: string
- description?: string
- forumUrl: string

Evidence basis:
- forum pages are routed under /forum/app and list topics in a structured index
- public forum page shows separate forum content from the main portal

## 5. ForumTopic
Suggested public model:
- id: string
- categoryId: string
- title: string
- author: string
- createdAt: string
- replyCount?: number
- topicUrl: string

Evidence basis:
- forum page displays topic titles, created dates, and author names in list form
- links include uid and p parameters, indicating list items tied to per-topic records

## 6. Ranking
Suggested public model:
- id: string
- type: 'cao-thu' | 'phu-ho' | 'leo-thap' | 'dau-truong'
- position: number
- displayName: string
- score?: number

Evidence basis:
- homepage UI labels these ranking categories visually
- the exact data source endpoint was not confirmed in public inspection

Important limitation:
- The model is a best-effort representation of the UI labels, not a confirmed backend schema.

## 7. Data integrity rules
- Do not invent fields without evidence from public content.
- Treat ranking data as unverified until a public route or API is discovered.
- Keep forum topic fields aligned with visible public metadata only.
- Keep all content derived from public pages rather than private data.

## 8. Implemented local data

- `src/data/content.js` stores the 19 observed article records with `id`,
  `title`, `type`, `publishedAt`, and a brief original summary.
- `type` is one of `event`, `news`, `announcement`, or `guide`; the UI derives
  display labels from this classification.
- Forum index data contains only the nine topic titles and relative-age labels
  recorded in the page report. No account identifiers or private profile data
  are stored.
- Ranking categories store only the four observed public labels. Ranking
  records are intentionally empty because names and scores were not captured.
- Full article bodies, thumbnail paths, download URLs, and live event status
  are not present in the local model because they were not authorized or
  sufficiently evidenced for reuse.
- This is a local static data source; no database or backend is required for
  the currently implemented read-only public pages.
