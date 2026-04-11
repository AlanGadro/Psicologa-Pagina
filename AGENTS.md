# Psicologa-Pagina — Skills Guide

This repo uses a small local `skills/` directory to keep implementation guidance practical and reusable.

## Project baseline
- Stack: React + Vite + TypeScript + Sass
- Scope: frontend-only unless the user explicitly asks for backend work
- Avoid by default: Pug, Express, Gulp, custom build pipelines, heavy abstractions
- Tone: calm, professional, readable, trust-building

## How to use the local skills

### `react-sass-landing-section`
Use this when:
- adding a new homepage section
- extending an existing section
- improving layout/responsive behavior for one block

Expected outcome:
- a small React section/component
- semantic markup
- matching Sass
- mobile-first structure

### `sass-refactor-partials`
Use this when:
- `src/sass/main.scss` is getting too large
- section styles need to be split into smaller files
- repeated styling patterns should be cleaned up without changing behavior

Expected outcome:
- clearer Sass structure
- no unnecessary architecture
- no visual regressions

### `psychology-copy-tone`
Use this when:
- writing hero copy
- drafting service descriptions, CTAs, FAQs, or trust-building text
- adjusting content to feel more professional and reassuring

Expected outcome:
- short, clear, human copy
- no hype or pressure
- tone that fits a psychologist landing page

## General repo rules
- Put UI code in `src/`
- Put full page blocks in `src/sections/`
- Put shared reusable UI in `src/components/`
- Keep styles in `src/sass/`
- Reuse existing patterns before introducing new ones
- Prefer semantic HTML and simple props
- Split files only when they start doing too much

## Verification
Use the repo scripts after meaningful changes:
- `npm run dev`
- `npm run build`
- `npm run preview`

## Reporting expectations
When finishing work:
- say what changed
- list the files changed
- mention what you verified
- keep the summary short and practical
