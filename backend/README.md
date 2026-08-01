# Edge.pk Backend (Phase 1 — in-memory)

## What this is
A Node.js + Express API for the Edge.pk store. Right now it stores products and
orders in memory (a JS array) instead of a real database — that comes in Phase 2.

## How to run it
1. Install Node.js (v18+) from nodejs.org if you don't have it
2. Open a terminal in this folder
3. Run: npm install
4. Run: npm start
5. Visit http://localhost:5000 in your browser — you should see "Edge.pk API is running."

## Endpoints
- GET  /api/products        -> list all products
- GET  /api/products/:id    -> get one product
- GET  /api/orders          -> list all orders
- POST /api/orders          -> place a new order

## What happens if you restart the server
All orders disappear! That's because they're only stored in memory (RAM), not
saved to disk or a database. This is normal for Phase 1 — we'll fix it in
Phase 2 by connecting a free MongoDB Atlas database.

## Next steps (coming up)
- Phase 2: connect MongoDB Atlas so data actually persists
- Phase 3: build the React frontend that talks to this API
- Phase 4: deploy both for free (Render for backend, Vercel for frontend)
