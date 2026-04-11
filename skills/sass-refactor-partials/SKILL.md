---
name: sass-refactor-partials
description: Refactor Sass into clearer partials or structure without changing UI behavior.
---

# Refactor Sass without changing behavior

## Use when
- Cleaning up `src/sass/main.scss`
- Splitting large styles into smaller partials
- Normalizing naming, spacing, or shared tokens

## Goal
Make Sass easier to maintain while keeping the UI unchanged.

## Steps
1. Find repeated values, shared patterns, and section-specific styles.
2. Move shared styles into small partials or shared variables/mixins if the project already uses them.
3. Keep section styles close to the section they support.
4. Preserve existing selectors and visual behavior unless the task asks for changes.
5. Avoid introducing a large architecture for a small site.

## Rules
- Prefer incremental changes.
- Keep the naming clear and predictable.
- Do not add Gulp or a custom Sass pipeline.
- Do not rewrite the whole stylesheet just to reorganize it.

## Verify
- `npm run build`
- `npm run preview`
