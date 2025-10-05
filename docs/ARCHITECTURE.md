# Architecture

## Overview
MovieMate is a React (Vite) frontend that talks to a REST API. The UI is component-driven and styled by a single global stylesheet with design tokens and utilities.

## Frontend (`Frontend/moviemate-frontend/`)
- `src/main.jsx`: app entry, imports global styles
- `src/App.jsx`: router and layout container
- `src/styles.css`: design tokens, utilities, components (cards, buttons, inputs)
- `src/api/api.jsx`: small fetch wrapper and API helpers
- `src/components/`:
  - `Header.jsx`: sticky header with navigation
  - `MediaList.jsx`: loads and renders list of media; includes `Filters`
  - `MediaCard.jsx`: minimal card for each media
  - `Filters.jsx`: filter by genre/platform/status, emits query string
  - `MediaForm.jsx`: reusable form for media fields
  - `MediaDetail.jsx`: page-level component for a single media (progress + reviews)
  - `ProgressTracker.jsx`: update episodes watched
  - `ReviewForm.jsx`: add a rating and notes
- `src/pages/`:
  - `Dashboard.jsx`: lists all media with filters
  - `AddMedia.jsx`: page to add a new media item
  - `NotFound.jsx`: fallback page

## Data Flow
- `Filters.jsx` builds a query string -> `MediaList.jsx` calls `getMedia(params)` -> results render as `MediaCard`.
- `AddMedia.jsx` builds payload -> `createMedia(payload)` -> shows message.
- `MediaDetail.jsx` fetches `getMediaById(id)` -> shows header card, `ProgressTracker`, `ReviewForm`, and existing reviews.
- `ProgressTracker.jsx` calls `setProgress(id, { episodes_watched })`.
- `ReviewForm.jsx` calls `createReview({ media, rating, notes })`.

## Styling System
- Tokens: background, panel, text, primary, border, radii, spacing
- Utilities: `.container`, `.stack`, `.row`, `.grid`, spacing helpers
- Components: `.header`, `.card`, `.btn`, `.input`, `.select`, `.textarea`, `.badge`, `.empty`
- Themes: Default dark; optional light via `data-theme="light"`

## Environment
- `VITE_API_URL` to point the frontend to your backend API base

## Build & Run
- `npm run dev` for local development
- `npm run build` + `npm run preview` for production preview
