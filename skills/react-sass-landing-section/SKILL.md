---
name: react-sass-landing-section
description: Build or extend a calm, professional landing page section in React and Sass.
---

# Build or extend a landing page section

## Use when
- Adding a new homepage section
- Updating an existing content block
- Improving layout or responsive behavior for one section

## Goal
Create a simple React section that fits the calm, professional style of the site.

## Steps
1. Identify the section’s purpose and the message it should communicate.
2. Build the smallest possible React component.
3. Add matching Sass for spacing, typography, and responsive behavior.
4. Keep markup semantic: `section`, `header`, `article`, `ul`, `button`, etc.
5. Make sure the section works well on mobile first.

## Rules
- Keep the component focused on one section only.
- Prefer `src/sections/` for full page blocks and `src/components/` for shared UI.
- Prefer props or local constants over global state.
- Do not add routing, context, or data fetching unless requested.
- Do not introduce extra libraries.

## Verify
- `npm run build`
- `npm run dev`
