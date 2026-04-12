# DEVELOPER.md

## Project overview

### What this project is
`Psicologa-Pagina` is a small routed website for a psychologist practice. The current implementation is a **frontend-only React application** that presents a professional profile, service overview, training background, and contact options.

The site is intentionally simple:
- no backend
- no CMS
- no form submission flow
- no admin panel
- no API/data-fetching layer

All visible content is currently shipped with the frontend bundle.

### Current purpose and scope
The current codebase focuses on:
- presenting a calm, professional multi-page website
- supporting Spanish and English copy automatically based on the browser language
- using reusable UI/layout abstractions instead of page-specific duplication
- keeping implementation light and maintainable for a small site

Per `AGENTS.md`, this repository should be treated as **frontend-only unless explicitly changed later**.

### Stack used
- **Vite** for local development and production builds (`vite.config.ts`)
- **React 19** for UI composition (`package.json`)
- **React Router DOM 7** for routing (`src/App.tsx`)
- **TypeScript** with strict settings (`tsconfig.app.json`, `tsconfig.node.json`)
- **Sass** for styling (`src/sass/*.scss`)

### Why this stack
The current stack matches the present codebase and project guidance:
- **Vite** provides a minimal dev/build setup without custom tooling.
- **React** supports reusable layout and section composition.
- **TypeScript** helps keep shared content structures and component props consistent.
- **Sass** provides variables, mixins, and reusable style patterns without introducing a CSS-in-JS layer.

### What this project is not
The current repository does **not** implement:
- Express server logic
- Pug templates
- Gulp tasks
- database/storage integration
- authentication
- blog/CMS editing workflows
- server-rendering
- localized route paths per language

`AGENTS.md` explicitly says to avoid Pug, Express, Gulp, custom build pipelines, and heavy abstractions by default.

---

## Current architecture

### High-level structure
The app follows a simple layered structure:
- **`src/main.tsx`** boots React and imports the global Sass entrypoint.
- **`src/App.tsx`** creates the router tree and wraps the app in the language provider.
- **`src/components/SiteLayout.tsx`** provides the shared header/footer shell and route-level side effects.
- **`src/pages/*`** define route-level page composition.
- **`src/sections/*`** hold page-sized content blocks.
- **`src/components/*`** hold reusable layout and shared UI pieces.
- **`src/lib/*`** contains shared constants/helpers/content definitions.
- **`src/hooks/*`** contains small derived hooks.
- **`src/context/*`** contains React context used across the app.
- **`src/sass/*`** contains the styling system.

### How the app boots
Boot sequence:
1. `src/main.tsx` imports `./sass/main.scss` and renders `<App />` inside `#root`.
2. `src/App.tsx` calls `useBrowserLanguage()` once to detect the preferred language.
3. `App` writes the resolved language to:
   - `document.documentElement.lang`
   - `document.documentElement.dataset.language`
4. `App` wraps the router in `<LanguageProvider language={language}>`.
5. `BrowserRouter` renders the route tree.
6. `SiteLayout` renders the shared header, current page via `<Outlet />`, and footer.
7. Route changes trigger scroll reset and page-title updates in `SiteLayout`.

### Routing structure and current pages
Routes are centralized in `src/lib/routes.ts`:

| Route key | Path | Page component |
| --- | --- | --- |
| `home` | `/` | `src/pages/HomePage.tsx` |
| `about` | `/sobre-mi` | `src/pages/AboutPage.tsx` |
| `services` | `/servicios` | `src/pages/ServicesPage.tsx` |
| `studies` | `/formacion` | `src/pages/StudiesPage.tsx` |
| `contact` | `/contacto` | `src/pages/ContactPage.tsx` |

Current page composition:
- **Home**: `HeroSection`, `ProcessSection`, `TestimonialsSection`
- **About**: `AboutSection`
- **Services**: `ServicesSection`
- **Studies**: `StudiesSection`
- **Contact**: inline contact card section inside `ContactPage`

### Shared layout approach
`src/components/SiteLayout.tsx` is the route wrapper used by all pages. It is responsible for:
- rendering the persistent `Header`
- rendering the active route content through `Outlet`
- rendering the persistent `Footer`
- resetting scroll position on path change
- updating the browser tab title based on route + language

`src/components/PageShell.tsx` gives each page a consistent `<main className="app-shell">` wrapper.

### Components vs pages vs sections vs lib vs hooks vs context vs sass

#### `src/components/`
Shared building blocks and global layout pieces.
Examples:
- `Header.tsx`
- `Footer.tsx`
- `SiteLayout.tsx`
- `PageShell.tsx`
- `SectionShell.tsx`
- `SectionHeading.tsx`
- `LabeledItemGrid.tsx`

#### `src/pages/`
Route-level composition files. These stay small and mostly assemble sections.

#### `src/sections/`
Full content blocks that represent a large part of a page. This keeps page files thin and section logic localized.

#### `src/lib/`
Shared non-React logic/data:
- routes
- page title metadata
- language detection helpers
- contact helpers
- the full bilingual site copy object

#### `src/hooks/`
Small convenience hooks built on existing app infrastructure:
- `useBrowserLanguage`
- `useSiteCopy`

#### `src/context/`
Currently only `LanguageContext.tsx`, which exposes the resolved language to the whole app.

#### `src/sass/`
Global styling entrypoint and partials for tokens, layout, reusable components, and section-specific styling.

---

## Internationalization and language behavior

### Supported languages
The current app supports two languages:
- `es`
- `en`

Defined in `src/lib/language.ts` as `SupportedLanguage`.

### Browser language detection
Language detection happens in `src/lib/language.ts` via `detectBrowserLanguage()`.

Behavior:
- checks `navigator.languages` first when available
- falls back to `navigator.language`
- returns `es` if any preferred language starts with `es`
- returns `en` if any preferred language starts with `en`
- falls back to `es` if no supported language is matched
- falls back to `es` when `navigator` is unavailable

`src/hooks/useBrowserLanguage.ts` wraps this in `useMemo`, so detection is stable for the app session.

### Language context/provider
`src/context/LanguageContext.tsx` stores a single `SupportedLanguage` value in React context.

Important details:
- there is **no UI language switcher** yet
- the provider receives the detected language from `App`
- language is not currently persisted in local storage, query params, or route segments
- language is effectively chosen once when the app mounts

### How `siteCopy` works
`src/lib/siteCopy.ts` is the main content registry for translated copy.

It defines:
- shared copy shape types (`LabeledItem`, internal step/testimonial types)
- a `SiteCopy` structure that covers navigation, footer, home, about, services, studies, and contact content
- a `siteCopy` object keyed by language: `siteCopy.es` and `siteCopy.en`

`src/hooks/useSiteCopy.ts` reads the current language from context and returns `siteCopy[language]`.

This means most components do **not** manage translation logic directly. They just call `useSiteCopy()` and render the relevant branch.
### What is translated
Currently translated through `siteCopy`:
- brand eyebrow and displayed name (`Dra.` / `Dr.`)
- header navigation labels
- mobile menu labels and ARIA labels
- footer labels/text
- home hero/process/testimonials copy
- about page copy and image alt text
- services page copy
- studies page copy
- contact page labels and CTA text
- page titles via `src/lib/pageMeta.ts`

### What is not translated
Not language-switched at the routing layer:
- URL paths remain Spanish-only (`/sobre-mi`, `/servicios`, etc.)
- route constants in `src/lib/routes.ts` are not duplicated per locale
- there is no `/en/...` route namespace

Also worth noting:
- `index.html` starts with `<html lang="en">`, but `src/App.tsx` immediately overwrites `document.documentElement.lang` with the detected language at runtime.

### Current route language behavior
Important current behavior:
- **visible labels are translated**
- **route paths remain Spanish**

Examples:
- an English browser still navigates to `/sobre-mi`
- the English nav label shows `About`, but the route path is still `/sobre-mi`
- `getPageTitle()` maps those Spanish paths to per-language titles

This is an intentional current simplification of i18n scope.

---

## Shared UI behavior

### Header behavior
Implemented in `src/components/Header.tsx`.

Responsibilities:
- render site brand
- render primary navigation from `primaryNavigation`
- render a mobile menu toggle
- hide/show based on scroll direction and page context
- close the mobile menu on route change or nav click
- lock body scrolling while the mobile menu is open

#### Scroll-aware hide/show logic
Header visibility uses `isVisible`, `lastScrollY`, and a path-aware threshold.

Behavior:
- on route change, header resets to visible and menu closes
- if the mobile menu is open, the header is forced visible
- on the home page (`/`), the hide/show threshold depends on the hero height:
  - it looks for `#home`
  - threshold is `Math.max(hero.offsetHeight - 112, 180)`
  - if the hero is not found, fallback threshold is `280`
- on non-home routes, threshold is `140`
- while above threshold, header stays visible
- once past threshold:
  - scrolling up shows the header
  - scrolling down hides the header

The hidden state adds `site-header--hidden`, which translates the sticky header upward and disables pointer events.

#### Mobile nav behavior
On small screens:
- the menu button is visible
- nav is hidden until `isMenuOpen` becomes `true`
- `site-header--menu-open` animates the hamburger into an X
- body scrolling is disabled with `document.body.style.overflow = 'hidden'`
- clicking a nav link closes the menu
- route changes also close the menu

On large screens:
- the menu button is hidden
- nav is always visible

#### Brand icon behavior
The brand icon uses `src/components/icons/BrainIcon.svg`, but not as a plain `<img>`.

Instead, `Header.tsx` applies the SVG as `maskImage` / `WebkitMaskImage` on a span, and Sass paints it with a gradient background.

Why this matters:
- the icon color is controlled by CSS, not by editing the SVG file
- gradients and theme-colored fills are easier to maintain
- the icon integrates better with hover/branding styles than a raw single-color image would

### Footer structure and responsive behavior
Implemented in `src/components/Footer.tsx` and styled in `src/sass/_components.scss`.

Footer structure:
1. **Brand block**
   - brand eyebrow
   - brand name
   - tagline
   - modality badge
2. **Navigation block**
   - localized nav heading
   - links built from `primaryNavigation`
3. **Contact card**
   - WhatsApp CTA
   - email link
4. **Bottom row**
   - copyright line

Responsive behavior:
- mobile centers brand and contact content
- footer nav also centers on small screens
- grid expands to two columns at `768px+`
- grid expands to three columns at `1024px+`

### Hero behavior and background-image framing choices
Implemented in `src/sections/HeroSection.tsx` and `src/sass/_sections.scss`.

Important implementation details:
- hero uses a **CSS background image**, not an `<img>` tag
- background image source is `src/img/hero.jpg`
- a dark overlay gradient is layered over the image for text contrast
- desktop uses background positioning `86% 13% / cover`
- mobile uses background positioning `83% 15% / cover`
- hero copy sits inside a translucent panel with blur, gradient, and shadow
- section id is `home`, which the header uses to compute its scroll threshold

The background-image approach was chosen so image framing can be tuned in CSS without changing markup. Current framing is intentionally explicit and may still need design tweaks after visual review.

### About section portrait/mobile behavior
Implemented in `src/sections/AboutSection.tsx` and `src/sass/_sections.scss`.

Behavior:
- portrait lives in `src/img/profile-picture.jpg`
- image is wrapped in a card-like media frame
- desktop layout becomes a two-column grid at `1024px+`
- mobile stacks image above text
- on mobile, the portrait container narrows and recenters
- image aspect ratio changes from `4 / 5` on larger screens to `5 / 4` on smaller screens
- object positioning also changes slightly for mobile framing
- a decorative overlay block on the media card is disabled on mobile
- text content centers on mobile for a more balanced stacked layout

---

## Styling system

### Sass file structure
Global Sass entrypoint:
- `src/sass/main.scss`

Imported partials, in order:
1. `src/sass/_base.scss`
2. `src/sass/_layout.scss`
3. `src/sass/_components.scss`
4. `src/sass/_sections.scss`

### Variables and tokens
`src/sass/_variables.scss` defines the visual system:
- font family
- background/surface colors
- brand and accent colors
- text and border colors
- radii
- spacing scale
- shadows
- transition timing
- container width

These tokens are reused across all partials.

### Mixins
`src/sass/_mixins.scss` contains reusable mixins:
- `container`
- `section-spacing`
- `card-surface`
- `animated-card`
- `section-title`
- `eyebrow`
- `whatsapp-pill`
- `breakpoint-md`
- `breakpoint-lg`

Notable patterns:
- shared card surfaces come from `card-surface`
- hover lift behavior comes from `animated-card`
- WhatsApp CTA styling is centralized via `whatsapp-pill`
- breakpoints are currently standardized at `768px` and `1024px`

### Shared layout patterns
Defined mostly in `src/sass/_layout.scss`:
- `.site-shell` creates a full-height flex column shell
- `.app-shell` lets the main content stretch so the footer stays at the bottom
- `.container` standardizes page width
- `.section` standardizes vertical spacing and divider lines
- `.section--hero`, `.section--accent`, and `.section--soft` provide section variants

### Shared component patterns
Defined mostly in `src/sass/_components.scss`:
- sticky scroll-aware header styles
- reusable section heading visuals
- reusable button styles
- reusable card/grid styling
- contact card styling
- footer layout and CTA styling

### Important responsive decisions
Current responsive system is simple and explicit:
- mobile-first layout by default
- two breakpoints only: `768px` and `1024px`
- nav switches from collapsible to always-visible at desktop width
- card grids become multi-column at `768px+`
- about section becomes two-column at `1024px+`
- footer increases from stacked to two-column and then three-column layouts
- hero and portrait framing get separate mobile positioning values

### Reusable style patterns introduced during the project
Current project-wide reusable style patterns include:
- translucent bordered card surfaces with shadows
- subtle hover lift on cards and buttons
- pill-shaped controls/tags/badges
- uppercase eyebrow labels for section and brand metadata
- gradient divider accents under section headings
- soft background variants for alternating section tone
- reusable WhatsApp CTA pill styling in both contact and footer contexts

---

## Content and data conventions

### Where text content lives
Almost all user-facing copy lives in:
- `src/lib/siteCopy.ts`

This file should be the first place to update when changing:
- page text
- section text
- CTA labels
- navigation labels
- footer text
- translated brand labels

### Contact helpers and placeholders
Contact data is centralized in:
- `src/lib/contact.ts`

Current helpers:
- `getWhatsAppUrl(message?)`
- `getWhatsAppDisplayNumber()`
- `getContactEmail()`

Current placeholder state:
- WhatsApp phone: `5491100000000`
- display number: `+54 9 11 0000 0000`
- email: `contacto@valeriamorales.com`

These values look like placeholders/demo values and should be treated that way until replaced with real client data.

### Brand naming in Spanish and English
Brand naming is localized inside `siteCopy`:
- Spanish: `Dra. Valeria Morales`
- English: `Dr. Valeria Morales`

This affects:
- header branding
- footer branding
- page titles
- copyright copy

### What is translated vs content-coupled
The project intentionally keeps content close to structure:
- labels and paragraphs are translated centrally
- route constants are not translated
- reusable sections pull content from the same shared copy source

This keeps the app easy to maintain for a small bilingual site, but also means content shape changes often require editing `siteCopy` types and both language branches.

---

## Important implementation details and decisions

### Why Vite, React, TypeScript, and Sass are used
Based on the current codebase and repo guidance:
- **Vite** keeps tooling minimal and fast.
- **React** makes shared layout and repeated sections easy to compose.
- **TypeScript** protects shared content contracts and component props.
- **Sass** supports a lightweight token/mixin system without heavy runtime styling.

### Why there is no Pug / Gulp / Express flow
The current repo is explicitly oriented away from those tools:
- `AGENTS.md` says to avoid Pug, Express, Gulp, custom pipelines, and heavy abstractions by default.
- The actual tree contains a plain Vite frontend app with no server code.

So contributors should treat React + Vite + TypeScript + Sass as the authoritative architecture unless the project is intentionally re-scoped.

### Why route titles are centralized
Page titles are centralized in `src/lib/pageMeta.ts`.

Benefits of the current approach:
- one place to update title wording
- route-to-title mapping stays consistent with `routes.ts`
- Spanish and English titles stay aligned
- `SiteLayout` can update `document.title` generically on every route change

### Why the favicon uses the brain SVG
`index.html` points the favicon to `src/components/icons/BrainIcon.svg`.

This keeps branding aligned with the header mark and avoids maintaining a separate favicon asset for the current site identity.

### Why route-change scroll reset exists
`src/components/SiteLayout.tsx` calls:

```ts
window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
```

on `location.pathname` changes.

Reason:
- React Router preserves SPA context, so route navigation does not automatically behave like a full page load.
- Resetting scroll avoids landing mid-page when moving between routes.
- This is especially useful because the site is content-driven and each route is expected to start from the top.

### Why the brain icon uses a CSS mask instead of a raw image color
The header brand mark is implemented as a masked span with CSS background rather than a plain `<img>`.

That allows:
- consistent theming via CSS
- gradient fills without editing the SVG asset
- visual alignment with the rest of the color system
- more flexibility if hover or branding colors change later

---

## File and folder map

### Repository root
- `package.json` - dependencies and npm scripts
- `package-lock.json` - lockfile
- `vite.config.ts` - minimal Vite config with React plugin
- `index.html` - HTML shell, favicon reference, root mount node
- `tsconfig.json` - references app/node TypeScript configs
- `tsconfig.app.json` - strict frontend TS config for `src/`
- `tsconfig.node.json` - strict TS config for `vite.config.ts`
- `.gitignore` - ignores `node_modules`, `dist`, `.vite`, logs
- `AGENTS.md` - repo-specific implementation guidance for coding agents/contributors
- `DEVELOPER.md` - this developer-facing reference
- `dist/` - generated build output (ignored in Git by policy, though present locally)
- `node_modules/` - installed dependencies
- `skills/` - local implementation guidance docs

### `src/`
- `main.tsx` - React entrypoint and global style import
- `App.tsx` - language setup + router tree
- `vite-env.d.ts` - Vite TypeScript types

### `src/components/`
- `SiteLayout.tsx` - shared route shell, scroll reset, title updates
- `Header.tsx` - sticky brand/nav header with scroll-hide and mobile menu behavior
- `Footer.tsx` - shared footer with nav and contact CTA
- `PageShell.tsx` - consistent page-level `<main>` wrapper
- `SectionShell.tsx` - reusable section wrapper with heading + body slot
- `SectionHeading.tsx` - shared eyebrow/title/description heading block
- `LabeledItemGrid.tsx` - reusable grid renderer for labeled text items
- `icons/BrainIcon.svg` - brand/brain icon used in header and favicon
- `icons/whatsapp-svgrepo-com.svg` - WhatsApp icon used in footer/contact CTA

### `src/pages/`
- `HomePage.tsx` - home route composition
- `AboutPage.tsx` - about route composition
- `ServicesPage.tsx` - services route composition
- `StudiesPage.tsx` - studies route composition
- `ContactPage.tsx` - contact route section and CTA composition

### `src/sections/`
- `HeroSection.tsx` - homepage hero with CTA buttons and highlight list
- `ProcessSection.tsx` - homepage 3-step process cards
- `TestimonialsSection.tsx` - homepage testimonial quote cards
- `AboutSection.tsx` - profile image + about copy layout
- `ServicesSection.tsx` - services page grid
- `StudiesSection.tsx` - studies/training page list/grid

### `src/lib/`
- `routes.ts` - route constants and primary navigation source
- `pageMeta.ts` - route/language page title mapping
- `contact.ts` - WhatsApp/email helpers and placeholder contact values
- `language.ts` - supported language type + browser language detection
- `siteCopy.ts` - all major ES/EN content and content type definitions

### `src/hooks/`
- `useBrowserLanguage.ts` - memoized browser language detection hook
- `useSiteCopy.ts` - returns the active language branch of `siteCopy`

### `src/context/`
- `LanguageContext.tsx` - active language context/provider/hook

### `src/sass/`
- `main.scss` - Sass entrypoint
- `_variables.scss` - tokens
- `_mixins.scss` - reusable mixins/breakpoints
- `_base.scss` - global element/base styles
- `_layout.scss` - shell/container/section layout rules
- `_components.scss` - shared UI component styles
- `_sections.scss` - hero/about section-specific styles and animation

### `src/img/`
- `hero.jpg` - hero background image
- `profile-picture.jpg` - about section portrait image

### `skills/`
- `skills/react-sass-landing-section/SKILL.md` - guidance for adding/extending landing sections
- `skills/sass-refactor-partials/SKILL.md` - guidance for Sass cleanup/refactoring
- `skills/psychology-copy-tone/SKILL.md` - guidance for writing/editing copy tone

### `AGENTS.md`
Important repo guidance for future contributors/agents:
- frontend-only scope unless explicitly changed
- keep UI code in `src/`
- use `src/sections/` for page blocks
- use `src/components/` for shared UI
- keep styles in `src/sass/`
- reuse patterns before adding new abstractions
- verify with `npm run dev`, `npm run build`, `npm run preview`

---

## Current reusable abstractions

### `SectionShell`
File: `src/components/SectionShell.tsx`

Purpose:
- standardize section markup and heading rendering
- reduce duplication across services, studies, process, testimonials, and contact-like layouts

Props:
- `id?`
- `sectionClassName?`
- `containerClassName?`
- `eyebrow`
- `title`
- `description`
- `centered?`
- `children`

Use when:
- a section needs a standard heading and consistent container structure

### `LabeledItemGrid`
File: `src/components/LabeledItemGrid.tsx`

Purpose:
- render repeated title/description content from `siteCopy`
- support slight markup/style variation without duplicating mapping logic

Props:
- `items`
- `listClassName?`
- `itemClassName?`
- `headingTag?`

Current usage:
- services cards
- studies/training list items

### `PageShell`
File: `src/components/PageShell.tsx`

Purpose:
- keep every route wrapped in a semantic `<main>` container
- maintain consistent layout behavior with `.app-shell`

### `SectionHeading`
File: `src/components/SectionHeading.tsx`

Purpose:
- render the shared eyebrow/title/description block
- support centered and left-aligned variants

### Navigation/routes helpers
File: `src/lib/routes.ts`

Contains:
- `routes` path constants
- `primaryNavigation` array used by header and footer

Why it matters:
- one navigation source for multiple components
- route updates happen in one place
- labels are separated from paths, so labels can translate while paths stay fixed

### Contact helpers
File: `src/lib/contact.ts`

Purpose:
- centralize contact data and message URL generation
- avoid hardcoding email/WhatsApp values in multiple components

### Page metadata helper
File: `src/lib/pageMeta.ts`

Purpose:
- centralize per-route tab titles for both languages
- make `SiteLayout` the only place that mutates `document.title`

---

## Developer workflow

### Install dependencies
```bash
npm install
```

### Start local development server
```bash
npm run dev
```

### Build production bundle
```bash
npm run build
```

### Preview production build locally
```bash
npm run preview
```

### What to verify after changes
At minimum:
- app still builds with `npm run build`
- target route renders correctly on mobile and desktop widths
- Spanish and English copy both still render correctly
- header hide/show behavior still feels correct
- mobile menu opens/closes correctly and body scroll unlocks afterward
- page titles update correctly on route change
- footer layout still behaves across breakpoints
- hero and portrait image framing still look acceptable after any related style/image change

### Where to make common changes

#### Update visible copy
Primary file:
- `src/lib/siteCopy.ts`

Also check:
- `src/lib/pageMeta.ts` if tab titles should change
- `src/lib/contact.ts` if contact details changed

#### Add or change a route
Files to update:
- `src/lib/routes.ts`
- `src/App.tsx`
- `src/lib/pageMeta.ts`
- `src/lib/siteCopy.ts` navigation labels if the page belongs in primary nav
- page component in `src/pages/`
- usually one or more sections in `src/sections/`

#### Change shared layout behavior
Files to check:
- `src/components/SiteLayout.tsx`
- `src/components/Header.tsx`
- `src/components/Footer.tsx`
- `src/sass/_layout.scss`
- `src/sass/_components.scss`

#### Add a new reusable section-based page block
Preferred approach:
- create/extend a section in `src/sections/`
- reuse `SectionShell`, `SectionHeading`, and/or `LabeledItemGrid` if they fit
- add styles in the existing Sass partials unless a refactor is warranted

#### Update styling tokens or shared patterns
Files to check:
- `src/sass/_variables.scss`
- `src/sass/_mixins.scss`
- `src/sass/_components.scss`
- `src/sass/_layout.scss`
- `src/sass/_sections.scss`

#### Update contact data
File:
- `src/lib/contact.ts`

#### Update browser-language behavior
Files:
- `src/lib/language.ts`
- `src/hooks/useBrowserLanguage.ts`
- `src/context/LanguageContext.tsx`

---

## Known constraints and caveats

### Placeholder contact data
`src/lib/contact.ts` currently contains placeholder-looking WhatsApp and email values. Replace these before treating the site as production-ready contact-wise.

### Routes are still Spanish-only
Even in English mode, route paths remain:
- `/sobre-mi`
- `/servicios`
- `/formacion`
- `/contacto`

Only labels and metadata are localized.

### Hero/background framing may still need visual tweaking
The hero image uses explicit CSS `background-position` values for desktop and mobile. Any image replacement or design feedback may require updating those values in `src/sass/_sections.scss`.

### About portrait framing is also image-dependent
The portrait uses explicit aspect ratio and object-position values. Replacing `profile-picture.jpg` may require CSS adjustments.

### No backend/CMS/admin system
All content is hardcoded in the frontend. Non-developers cannot currently edit site text through an admin UI.

### Runtime language only
Language is detected at runtime. There is no:
- manual language switcher
- URL-driven locale state
- persistence layer for chosen locale

### Initial HTML lang mismatch before runtime
`index.html` declares `<html lang="en">`, but runtime code replaces it based on browser detection. In practice the app corrects this immediately, but the source HTML is not neutral/defaulted to `es`.

---

## Recent evolution of the project

This summary is based on the current tree, current git history, and current repo guidance.

### Consolidation around a React + Vite + TypeScript + Sass frontend
The project is currently structured as a modern Vite React app with strict TypeScript and Sass partials. `AGENTS.md` also explicitly positions this stack as the baseline and says to avoid older/customized approaches such as Pug, Express, Gulp, and custom build pipelines by default.

### Shift from a single landing-page mindset to a routed multi-page site
The current app is no longer a single long page. It is organized into separate routes for:
- home
- about
- services
- studies
- contact

This improved separation of concerns in both routing and content composition.

### Introduction of centralized reusable UI abstractions
Recent architecture now relies on shared building blocks instead of duplicating markup:
- `PageShell`
- `SectionShell`
- `SectionHeading`
- `LabeledItemGrid`
- centralized `routes`
- centralized `pageMeta`
- centralized `contact` helpers

### Addition of automatic ES/EN content switching
The app now includes:
- browser-language detection
- a language context provider
- centralized bilingual content in `siteCopy`
- localized page titles and UI labels

This added bilingual behavior without adding localized routes.

### Refinement of header behavior and mobile navigation
The current header includes:
- route-aware visibility thresholds
- scroll-direction-based hide/show behavior
- mobile-menu open/close state
- body scroll locking while the mobile menu is open
- automatic menu reset on route changes

### Ongoing UI and maintainability refinements
The current codebase also reflects a move toward:
- more explicit responsive behavior
- more reusable Sass patterns
- centralized content and route metadata
- clearer project guidance through `AGENTS.md` and local `skills/`

---

## How to extend this project safely

### 1. Reuse the existing structure first
Before adding new patterns, check whether the change fits one of the existing abstractions:
- route? use `routes.ts`
- page title? use `pageMeta.ts`
- localized copy? use `siteCopy.ts`
- shared section? use `SectionShell`
- repeated title/description list? use `LabeledItemGrid`
- shared heading? use `SectionHeading`

Avoid introducing new abstractions for one-off needs unless the current pattern is clearly insufficient.

### 2. Keep page files thin
Prefer:
- route composition in `src/pages/`
- large content blocks in `src/sections/`
- reusable UI in `src/components/`

If a page starts accumulating a lot of markup, split that markup into a section component.

### 3. Treat `siteCopy.ts` as a source of truth
When adding new user-facing content:
- define the content shape clearly
- add values for both `es` and `en`
- keep naming parallel between languages
- update consuming components to read from `useSiteCopy()`

Do not hardcode new visible strings into components unless there is a strong reason.

### 4. Keep routes, nav, and titles synchronized
When adding a page, update all of these together:
- `src/lib/routes.ts`
- `src/App.tsx`
- `src/lib/pageMeta.ts`
- `src/lib/siteCopy.ts` navigation labels if the page belongs in primary nav

This avoids broken titles, missing navigation labels, and inconsistent route wiring.

### 5. Be careful with header scroll logic
If you change:
- hero height
- header height
- route structure
- sticky positioning

re-test the header behavior thoroughly. Its hide/show threshold depends on route context and the home hero height.

### 6. Be careful with image changes
If you replace `src/img/hero.jpg` or `src/img/profile-picture.jpg`, expect to revisit:
- background/object position
- aspect ratio choices
- mobile framing
- contrast/readability

These images are currently tuned with CSS rather than being fully layout-agnostic.

### 7. Keep Sass incremental
The current Sass architecture is intentionally small. Prefer:
- tokens in `_variables.scss`
- mixins in `_mixins.scss`
- shared UI styles in `_components.scss`
- page/section-specific styles in `_sections.scss`

Do not introduce a heavier styling architecture unless the project grows enough to justify it.

### 8. Preserve frontend-only assumptions unless the project is intentionally re-scoped
If future work adds:
- backend APIs
- form handling
- CMS integration
- admin tooling

that is a meaningful architectural change. Document it explicitly and avoid quietly mixing server concerns into the current simple frontend structure.

### 9. Verify both language and responsive behavior for every meaningful UI change
For any non-trivial change, check:
- Spanish copy
- English copy
- mobile nav
- footer layout
- hero readability
- route title behavior
- build success

### 10. Document structural changes as they happen
If you introduce new folders, patterns, or architectural behavior, update this file so the next maintainer can understand the current project without reverse-engineering it from source.


