# Home Service Hub

Static marketing site and course player for Home Service Hub. Plain HTML, CSS and vanilla JS. No build step, so it can be hosted on GitHub Pages, Netlify, Vercel or any static host.

## Pages

| Page | File |
| --- | --- |
| Home | `index.html` |
| Tools and Software | `tools.html` |
| Management (Crewty) | `management.html` |
| Course catalog | `courses/index.html` |
| Cleaning course overview | `courses/cleaning.html` |
| Cleaning guide player | `courses/cleaning-guides.html` |
| Junk Removal (coming soon) | `courses/junk-removal.html` |
| Landscaping (coming soon) | `courses/landscaping.html` |

## Updating links and videos

Links are set in one place at the top of `assets/js/main.js`:

```js
const LINKS = {
  discord: "https://discord.com/invite/learnhomeservices",
  facebook: "https://www.facebook.com/share/g/19tB2APsvj/",
  crewty: "https://crewty.com",
  members: "", // paid membership checkout, falls back to Discord while empty
  vsl: "",     // embed URL for the homepage video
};
```

Any element with `data-link="..."` picks these up.

Videos use embed URLs (for example `https://www.youtube.com/embed/VIDEO_ID` or `https://player.vimeo.com/video/VIDEO_ID`). While a URL is empty, the video box shows a "coming soon" message when clicked. The course intro video is the `data-video` attribute on `courses/cleaning.html`.

## Editing the Cleaning course

All guide content lives in `assets/js/course-cleaning.js`, grouped into four categories. Each guide has:

- `slug`, `num`, `title`, `sub` and `mins`
- `video`: embed URL for the quick guide video
- `body`: the free quick guide (HTML)
- `detail`: what the members-only detailed guide includes
- `nudge` (optional): `"crewty"` or `"discord"`

The player in `assets/js/course-player.js` renders both pages and saves progress in the browser. Link to a guide with `courses/cleaning-guides.html#slug`, or `#slug/detailed` for the detailed tab.

## Placeholders to replace

- Members checkout link (`LINKS.members`) and the detailed guide content
- Homepage VSL and guide videos
- Testimonials on the management page
- Social links
- Waitlist forms on the coming soon pages (not connected to an email tool yet)
