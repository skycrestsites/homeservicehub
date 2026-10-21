# Home Service Hub

Marketing site and free course player for [learnhomeservices.com](https://www.learnhomeservices.com). Built with Eleventy 3, hosted on Firebase Hosting, waitlists stored in Cloud Firestore.

## Commands

```sh
npm install
npm run dev          # local server with sample stories and team visible
npm run build        # preview build (samples visible, robots.txt blocks indexing)
npm run build:prod   # production build (samples hidden)
npm run check        # production build, ESLint, Stylelint and html-validate
npm run deploy       # production build, then deploy to Firebase Hosting
```

Node 20 or newer.

## Layout

```
src/
  _data/        site.json, links.json, nav.json, courses.json, path.json, faq.json,
                stories.json, team.json, logos.json, tools.json, env.js
  _includes/    layouts/ (base, legal), partials/ (meta, header, footer), components/ui.njk
  assets/
    css/        site.css imports tokens, base, layout, components/*, pages/*
    js/         main.js (every page), player.js (course player), modules/*, course/*
    img/ video/ fonts/
  index.njk, courses/, stories/, management/, tools/, legal/, 404.njk, sitemap.njk, robots.njk
lib/assets.js   bundles CSS (lightningcss) and JS (esbuild) into content-hashed files
firebase.json   hosting, security headers, caching
firestore.rules waitlist rules
```

## Editing content

- **Links and videos:** `src/_data/links.json`. Set `videos.home.src` and `videos.cleaning.src` to a file URL (`.mp4`) or an embed URL (Vimeo, Bunny Stream or YouTube). While empty, the end screen says the video is almost ready. When a video finishes, the end screen offers "Continue the free course" and "Get the full course (Premium)".
- **Site settings:** `src/_data/site.json` (members count, contact email, Clarity ID, Firebase web config, Stripe price ID for Premium).
- **Courses:** `src/_data/courses.json`. A course with `"status": "soon"` gets a coming soon page with a waitlist automatically.
- **Guides:** `src/assets/js/course/cleaning-data.js`. Link to a guide with `/courses/cleaning/guides/#slug`.
- **Stories and team:** `src/_data/stories.json` and `team.json`. Entries with `"sample": true` show in dev and preview builds and are hidden in production. Remove the flag once the content is real.
- **Icons:** `src/assets/js/modules/icons.js`. Use `{% icon "name" %}` in templates.

## Security

- Strict Content Security Policy and security headers in `firebase.json`. There are no inline scripts; config is passed in `<script type="application/json">` blocks.
- The Firebase web config is public by design. Access is limited by `firestore.rules`: the browser can only create a waitlist entry with a valid email and a known list, and cannot read, change or delete anything.
- Secrets (Stripe secret key, Resend API key) never go in this repo. They belong in Firebase secrets for Cloud Functions.

## Deploying

`npm run deploy` deploys hosting. `firebase deploy --only firestore:rules` deploys the rules. GitHub Actions run `npm run check` on every push and pull request, and deploy automatically once the `FIREBASE_SERVICE_ACCOUNT_HOMESERVICEHUB_FD4BA` repository secret exists (create it with `firebase init hosting:github`).

Exporting the waitlist: Firebase console, Firestore, `waitlist` collection.

## Rules for content

- No em or en dashes anywhere (CI fails on them).
- Crewty is presented as a recommendation, not a sales pitch.
- No promised results. Revenue figures are examples.
