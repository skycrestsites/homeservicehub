import { buildAssets } from "./lib/assets.js";
import { ICONS, iconSvg } from "./src/assets/js/modules/icons.js";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    "src/assets/img": "assets/img",
    "src/assets/video": "assets/video",
    "src/assets/fonts": "assets/fonts",
  });

  eleventyConfig.addWatchTarget("src/assets/css/");
  eleventyConfig.addWatchTarget("src/assets/js/");
  eleventyConfig.watchIgnores.add("src/assets/img/**");

  // CSS and JS are bundled once per build into content-hashed files.
  eleventyConfig.addGlobalData("assets", () => buildAssets({ outDir: "_site" }));

  eleventyConfig.addFilter("absoluteUrl", (path, base) => new URL(path, base).href);
  eleventyConfig.addFilter("json", (value) => JSON.stringify(value).replace(/</g, "\\u003c"));
  eleventyConfig.addFilter("isoDate", (date) => new Date(date).toISOString().slice(0, 10));
  eleventyConfig.addFilter("published", (items, production) => (production ? items.filter((i) => !i.sample) : items));
  eleventyConfig.addFilter("faqSchema", (items) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  }));

  eleventyConfig.addShortcode("icon", (name, cls = "") => {
    const def = ICONS[name];
    if (!def) throw new Error(`Unknown icon "${name}"`);
    const fill = typeof def === "object" && def.fill ? " i-fill" : "";
    return `<span class="i${fill}${cls ? ` ${cls}` : ""}">${iconSvg(name)}</span>`;
  });

  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    templateFormats: ["njk", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
}
