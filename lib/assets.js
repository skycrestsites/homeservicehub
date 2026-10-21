import { createHash } from "node:crypto";
import { mkdir, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import * as esbuild from "esbuild";
import browserslist from "browserslist";
import { browserslistToTargets, bundle } from "lightningcss";

const CSS_ENTRY = "src/assets/css/site.css";
const JS_ENTRIES = {
  main: "src/assets/js/main.js",
  player: "src/assets/js/player.js",
  account: "src/assets/js/account.js",
};
const targets = browserslistToTargets(browserslist("defaults and supports es6-module"));

const hash = (buf) => createHash("sha256").update(buf).digest("hex").slice(0, 10);

async function clean(dir, prefix) {
  try {
    const files = await readdir(dir);
    await Promise.all(files.filter((f) => f.startsWith(prefix)).map((f) => rm(path.join(dir, f))));
  } catch {
    // first build, nothing to clean
  }
}

async function buildCss(outDir) {
  const { code } = bundle({ filename: CSS_ENTRY, minify: true, targets });
  const name = `site.${hash(code)}.css`;
  const dir = path.join(outDir, "assets/css");
  await mkdir(dir, { recursive: true });
  await clean(dir, "site.");
  await writeFile(path.join(dir, name), code);
  return `/assets/css/${name}`;
}

async function buildJs(outDir) {
  const dir = path.join(outDir, "assets/js");
  await mkdir(dir, { recursive: true });
  await Promise.all(Object.keys(JS_ENTRIES).map((k) => clean(dir, `${k}.`)));
  await clean(dir, "chunk.");
  const result = await esbuild.build({
    entryPoints: JS_ENTRIES,
    outdir: dir,
    entryNames: "[name].[hash]",
    chunkNames: "chunk.[hash]",
    bundle: true,
    splitting: true,
    format: "esm",
    minify: true,
    sourcemap: false,
    target: "es2020",
    metafile: true,
    legalComments: "none",
  });
  const out = {};
  for (const [file, meta] of Object.entries(result.metafile.outputs)) {
    if (!meta.entryPoint) continue;
    const key = Object.keys(JS_ENTRIES).find((k) => path.normalize(JS_ENTRIES[k]) === path.normalize(meta.entryPoint));
    if (key) out[key] = "/" + path.relative(outDir, file).split(path.sep).join("/");
  }
  return out;
}

export async function buildAssets({ outDir }) {
  const [css, js] = await Promise.all([buildCss(outDir), buildJs(outDir)]);
  return { css, js };
}
