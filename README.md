# Home Service Hub

Static marketing site and course player for Home Service Hub. Plain HTML, CSS and vanilla JS. No build step, so it can be hosted on GitHub Pages, Netlify, Vercel or any static host.

## Pages

| Page | File |
| --- | --- |
| Home | `/` (`index.html`) |
| Manage your business (Crewty) | `/management/` |
| Tools used in the course | section `#tools` on `/courses/cleaning/` (`/tools/` redirects there) |
| Course catalog | `/courses/` |
| Cleaning course overview | `/courses/cleaning/` |
| Cleaning guide player | `/courses/cleaning/guides/` |
| Junk Removal (coming soon) | `/courses/junk-removal/` |
| Landscaping (coming soon) | `/courses/landscaping/` |
| Not found | `404.html` (GitHub Pages serves it automatically) |

Every page is a folder with an `index.html`, so URLs are clean (no `.html`) on any static host. All links are relative, so the site also works when opened from disk or under a subpath.

## SEO

Each page has a canonical URL, Open Graph and Twitter tags, and JSON-LD (Organization, WebSite and FAQ on the home page, Course and breadcrumbs on the course pages). `sitemap.xml` and `robots.txt` live at the root. The absolute URLs assume the site is hosted at `https://skycrestsites.github.io/homeservicehub`. When a custom domain goes live, search and replace that base URL in the HTML files, `sitemap.xml`, `robots.txt` and the `/homeservicehub/` links in `404.html`.

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

Videos use embed URLs (for example `https://www.youtube.com/embed/VIDEO_ID` or `https://player.vimeo.com/video/VIDEO_ID`). While a URL is empty, the video box shows a "coming soon" message when clicked.

## Design system

One stylesheet, `assets/css/styles.css`. Manrope from Google Fonts, primary blue `#1152d4`, yellow accent `#ffd500`, dark `#101622`, 2px radii. Icons are inline SVGs from the `ICONS` map in `assets/js/main.js`, rendered into any element with `data-i="name"`, drawn in the current text colour with no background boxes.

The homepage is light. The hero rotates three messages (course, Discord, Facebook group) next to the intro video. The community section uses the real Discord recording in `assets/video/discord-community.mp4` (compressed from the original, which stays out of git) and two screenshots in `assets/img/`. Slides live in `index.html` inside `[data-slides]`; `data-interval` sets the time per slide in ms and the tabs under the text show a progress bar for the active slide. Edit the text in the `.slide` blocks and the tabs in `.slide-nav`.

## How the course is structured

- Every course opens with a free intro video (`introVideo` in the course data). It plays on the course page and on guide 01.
- The free path is the written guides, with no lesson videos.
- Premium adds a video lesson for every topic plus 1-1 mentorship, setup help, a VA system setup, ads training and hiring support. Each guide has a locked "Video lesson" tab that links to `LINKS.members`.
- The homepage only promotes the free course. Premium is shown on the course pages.

## Editing the Cleaning course

All guide content lives in `assets/js/course-cleaning.js`, grouped into four categories. Each guide has:

- `slug`, `num`, `title`, `sub` and `mins`
- `video`: embed URL for the Premium video lesson (kept for when the members area is built)
- `body`: the free written guide (HTML)
- `detail`: what the Premium lesson includes
- `nudge` (optional): `"crewty"` or `"discord"`

The player in `assets/js/course-player.js` renders both pages and saves progress in the browser. Link to a guide with `courses/cleaning/guides/#slug`, or `#slug/premium` for the Premium tab.

## Placeholders to replace

- Members checkout link (`LINKS.members`) and the detailed guide content
- Homepage VSL and guide videos
- Testimonials on the management page
- Social links
- Waitlist forms on the coming soon pages (not connected to an email tool yet)
