# Home Service Hub

Static marketing site and free course player for Home Service Hub. Plain HTML, CSS and vanilla JS. No build step, so it can be hosted on GitHub Pages, Netlify, Vercel or any static host.

## Pages

| Page | File |
| --- | --- |
| Home | `index.html` |
| Management (Crewty) | `management.html` |
| Course catalog | `courses/index.html` |
| Cleaning course player | `courses/cleaning.html` |
| Junk Removal (coming soon) | `courses/junk-removal.html` |
| Landscaping (coming soon) | `courses/landscaping.html` |

## Updating links

Discord, Facebook and Crewty links are set in one place at the top of `assets/js/main.js`:

```js
const LINKS = {
  discord: "#",
  facebook: "#",
  crewty: "https://crewty.com",
};
```

Any element with `data-link="discord"`, `data-link="facebook"` or `data-link="crewty"` picks these up.

## Editing the Cleaning course

All lesson content lives in `assets/js/course-cleaning.js`. Each module has a list of lessons with a `title`, `duration`, `body` (HTML), `takeaways` and an optional `nudge` (`"crewty"` or `"discord"`). The player in `assets/js/course-player.js` renders it and saves progress in the browser.

To add a new course, copy `course-cleaning.js` with new content and create a page like `courses/cleaning.html` that loads it.

## Placeholders to replace

- Testimonials and the metrics in the testimonial section
- Course lesson content (template text)
- Discord and Facebook links
- Waitlist forms on the coming soon pages (not connected to an email tool yet)
