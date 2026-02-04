# API-TEST

Static profile page that shows player data (online status, faction, level) via a Netlify Function.

## Deploy on Netlify

1. Push this repository to GitHub.
2. Create a new Netlify site from the GitHub repository.
3. Deploy the site.

## Run locally

```bash
python -m http.server 8080
```

> The local server does not run Netlify Functions, so the API data will not load. Use Netlify or Netlify CLI for full functionality.
