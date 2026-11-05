# UI Specification

## Evidence base
This specification is derived from public evidence in:
- [../docs/ROUTE_INVENTORY.md](../docs/ROUTE_INVENTORY.md)
- [../research/pages/SUMMARY.md](../research/pages/SUMMARY.md)
- [../research/pages/home.md](../research/pages/home.md)
- [../research/pages/forum-0.md](../research/pages/forum-0.md)
- [../research/pages/news-49.md](../research/pages/news-49.md)

This file intentionally records only patterns confirmed by browser inspection or direct public HTML response.

## 1. Layout by page group

### A. Home page
Confirmed in [../research/pages/home.md](../research/pages/home.md):
- Top health-warning strip
- Banner image header
- Main navigation with icon buttons
- News/event list stacked vertically
- Secondary leaderboard panel
- Footer/legal text

Observed structure:
- Body background: brown / warm earthy tone
- Central fixed-width content panel around 630px on desktop
- A stacked vertical list of cards/article entries
- Each event item contains a thumbnail and text block

### B. News and event pages
Confirmed in [../research/pages/news-49.md](../research/pages/news-49.md) and other news pages.
- Content area with article title and body copy
- Similar visual scheme to homepage
- Text content is article-centric
- Linked relation to other recent events/news items

### C. Guide pages
Confirmed by [../research/pages/news-8.md](../research/pages/news-8.md), [../research/pages/news-10.md](../research/pages/news-10.md), and others.
- Long-form content layout, article reading format
- Similar palette and typography to home/news pages
- Content blocks with readable paragraphs and lists

### D. Forum pages
Confirmed by [../research/pages/forum-0.md](../research/pages/forum-0.md).
- WAP/XHTML forum index layout
- List of topic entries with metadata such as date and user name
- Login, register, and password-recovery links visible
- Forum layout is separate from the main portal layout, indicating a distinct UI shell

### E. Informational static pages
Confirmed by [../research/pages/gioi-thieu.md](../research/pages/gioi-thieu.md) and [../research/pages/tai-game.md](../research/pages/tai-game.md).
- Generic static content page style
- Similar game portal styling but narrower public-information presentation

## 2. Header and footer

### Header
Confirmed in [../research/pages/home.md](../research/pages/home.md):
- Health-warning banner at top with icon + warning text
- Main banner image below the banner strip
- Primary navigation below the banner

Common header elements observed:
- small top warning strip
- large central banner image
- button-like navigation items

### Footer
Confirmed in [../research/pages/home.md](../research/pages/home.md):
- Legal text lines about the game license and publishing information
- Footer sits below leaderboard section
- Footer has a darkened background and is visually separated from the main content

## 3. Sidebar and side panels
Confirmed in [../research/pages/home.md](../research/pages/home.md):
- A leaderboard box is present as a side-like block under the main event list
- It does not appear to be a full left/right column layout in the desktop view; instead it is a strip or panel that follows the main content flow
- Forum page does show authentic forum-style sidebar-like links and authentication controls, but those are page-specific and not a shared portal sidebar

## 4. Typography
Confirmed by browser capture in [../research/pages/home.md](../research/pages/home.md):
- Font family: Arial
- Strong emphasis on uppercase headings and compact typography
- Article titles are bold and tightly spaced
- Content uses compact line-height and smaller text sizes consistent with a portal/news layout

Observed behavior:
- Headlines in H4 style on homepage
- Titles are dense and may use uppercase text styles for emphasis
- Body text is optimized for readability in a narrow content panel

## 5. Color palette
Confirmed by browser capture in [../research/pages/home.md](../research/pages/home.md):
- Background: rgb(151, 102, 69)
- Primary warm brown / earth-tone background
- Menu and action buttons use warm orange/brown tones
- Footer and blocks use darker contrast colors to separate sections

Common palette patterns:
- Brown background for page shell
- Warm beige / sand for inner content
- Orange and gold accents for buttons and headings
- Dark brown/black for text

## 6. Size and spacing
Confirmed by CSS evidence and viewport capture:
- Main shell width is approximately 630px on desktop
- Horizontal content is compact and centered
- Vertical spacing is tight but readable
- Event rows use thumbnail + text block with small gap spacing
- Buttons are compact and square/rounded with minimal padding

## 7. Responsive behavior
Evidence from direct browser inspection and CSS/HTML structure:
- Site is designed as a compact desktop portal and adapts via relative width and media queries
- The main layout remains centered and narrow rather than sprawling full-width
- On smaller screens, the layout remains readable by shrinking images and stacking content with reduced gaps
- Forum pages remain mobile-friendly due to WAP-style XHTML structure

Notable constraint:
- No evidence of a modern fully responsive component system was found in the public inspection. The design behaves like a legacy HTML/CSS site adapted for narrow mobile screens.

## 8. Animation and interactivity
Confirmed by homepage and scripts:
- Back-to-top floating element is present and interactive
- The page includes a floating top button with opacity toggled on scroll
- Snow effect canvas is present in the body on the source page
- UI uses simple hover and button-state styling

Not proven by direct inspection:
- No evidence of advanced motion system beyond simple CSS hover states and the snow canvas
- No public API-driven SPA transitions were observed

## 9. Component-level UI summary
- Health warning strip
- Page shell / centered container
- Banner hero
- Navigation buttons
- Event article card
- Leaderboard panel
- Footer legal block
- Back-to-top control
- Forum table/list shell

## 10. Implementation constraints for reconstruction
- Preserve legacy portal look rather than redesign with a modern framework default theme
- Keep narrow center-column aesthetic
- Recreate warm brown/orange palette and compact typography
- Treat forum as a distinct UI variant rather than as a normal blog page
- Only implement interactive behaviors that were directly observed in public pages: navigation links, top button, list rendering, forum list navigation

## 11. Implemented rendering notes

- The React shell uses a 630px maximum centered column, the measured warm-brown
  page background, compact Arial typography, warning strip, branded header,
  navigation, content panel, and contrasting footer.
- Homepage news/event rows and a side ranking panel follow the surveyed narrow
  desktop composition. At narrow viewports the rows and ranking controls stack.
- The hero and article artwork are original CSS shapes and labeled neutral
  placeholders, not copies of source images. Article bodies display a clear
  missing-authorized-content note.
- The `/` page was captured at 1280x720 with Playwright and visually reviewed
  against `../research/screenshots/home-full.png`. Color, width, and hierarchy
  were matched approximately; exact pixel parity is not claimed because the
  original copyrighted artwork and article copy are intentionally omitted.
- Hover/focus transitions are short and the stylesheet respects
  `prefers-reduced-motion`. No original snowfall or source animation was
  reproduced.
