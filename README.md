## CandidAI

Full‑stack app combining a Next.js client with a Flask API server. The server serves interview/LeetCode questions and simple demo data; the client renders the UI.

### Overview
- **Client**: Next.js 15 (React 19), TypeScript, Tailwind CSS 4 — located in `client/`
- **Server**: Flask API with CORS — located in `server/`
- **Data**: `server/data/leetcode_questions.json`
- **Deployment**: Vercel config in `vercel.json` (Python server entry: `server/server.py`)

### Prerequisites
- Node.js 18+ (recommended 20+)
- npm (or pnpm/yarn/bun)
- Python 3.12 (as shipped in `server/venv` on Windows) or a local Python 3.10+

### Quick Start
1) Install client dependencies
```bash
cd client
npm install
```

2) Start the API server (default port 8080)
```bash
cd server
# Option A: Use the existing Windows venv (PowerShell)
./venv/Scripts/Activate.ps1
python server.py

# Option B: Create a fresh venv
python -m venv .venv
./.venv/Scripts/Activate.ps1
pip install -r requirements.txt
python server.py
```

3) Start the client (default port 3000)
```bash
cd client
npm run dev
```

4) Open the app
```
http://localhost:3000
```
The API will be available on `http://localhost:8080`.

### Project Structure
```
root/
  client/                 # Next.js app (App Router)
    app/                  # routes and pages
    components/           # UI components
    public/               # static assets
    package.json          # scripts and deps
  server/                 # Flask API
    data/leetcode_questions.json
    server.py             # API endpoints
    requirements.txt
  vercel.json             # Vercel deployment config
```

### Client Scripts
Run these from the `client/` directory:
- `npm run dev`: Start Next.js dev server
- `npm run build`: Production build
- `npm start`: Start built app
- `npm run lint`: Lint

### Server (Flask) Scripts
Run these from the `server/` directory (after activating a venv):
- `python server.py`: Start API on port 8080 (debug=True)

### API Endpoints
Base URL (local): `http://localhost:8080`

- GET `/api/home`
  - Response example:
  ```json
  {
    "message": "Subscribe to me!",
    "people": ["John", "Jane", "Jim", "Jill"]
  }
  ```

- GET `/api/question/random`
  - Returns one random LeetCode question from `data/leetcode_questions.json`:
  ```json
  {
    "question": { /* LeetCode question object */ }
  }
  ```

### Environment and Config
- CORS is enabled on the Flask app.
- If the client needs a custom API origin, configure it in your fetch layer. A common approach is an env var like `NEXT_PUBLIC_API_BASE` (e.g., `http://localhost:8080`).

### Deployment (Vercel)
- `vercel.json` config routes all traffic to `server/server.py` using `@vercel/python`.
- To deploy the client separately on Vercel, use a separate project targeting `client/` or adapt this config to a monorepo setup. As‑is, requests will be handled by the Flask server entry.

### Troubleshooting
- Port conflicts: change Flask port in `server/server.py` (`app.run(..., port=8080)`) or Next.js port with `PORT=3001 npm run dev`.
- Missing data file: ensure `server/data/leetcode_questions.json` exists and is valid JSON.
- Windows PowerShell execution policy: if activation is blocked, run PowerShell as Administrator and execute: `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`.

### License
MIT 


