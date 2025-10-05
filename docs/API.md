# API Reference (Frontend Usage)

Base URL: `VITE_API_URL` (default `http://127.0.0.1:8000/api`)

All requests are JSON. See `src/api/api.jsx` for the wrapper.

## Media
- GET `/media/?<query>` → list media
  - Query params (optional): `genre`, `platform`, `status`
- GET `/media/{id}/` → single media by id
- POST `/media/` → create media
  - Body: `{ title, director, genre, platform, status, media_type?, total_episodes? }`
- PUT `/media/{id}/` → update media
  - Body: fields to update
- DELETE `/media/{id}/` → delete media

## Progress
- POST `/media/{id}/set_progress/`
  - Body: `{ episodes_watched: number }`

## Reviews
- POST `/reviews/`
  - Body: `{ media, rating, notes }`

## Recommendations (optional)
- GET `/recommend/`

## Error Handling
- `api.jsx` returns `res.json()` directly; consider adding try/catch where needed in callers.
