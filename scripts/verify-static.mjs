// Verify the static build output at the agreed seam: rendered routes in out/.
// Expected literals come from the spec (independent source of truth), never
// recomputed from the app's own dictionaries.
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const outDir = process.argv[2] ?? "out";
let failures = 0;
const check = (name, cond) => {
  console.log(`${cond ? "PASS" : "FAIL"} ${name}`);
  if (!cond) failures++;
};
const read = (p) => {
  const f = join(outDir, p);
  return existsSync(f) ? readFileSync(f, "utf8") : null;
};

const en = read("index.html");
const zh = read("zh/index.html");

check("out/index.html exists (en home)", !!en);
check("out/zh/index.html exists (zh home)", !!zh);

if (en && zh) {
  check('en page declares <html lang="en">', en.includes('<html lang="en"'));
  check('zh page declares <html lang="zh">', zh.includes('<html lang="zh"'));
  check("en home shows en positioning line", en.includes("AI-native workflow"));
  check("zh home shows zh positioning line", zh.includes("AI 原生工作流"));
  check("en home links to /zh (language switch)", /href="\/zh\/?"/.test(en));
  check("zh home links to / (English)", /href="\/"/.test(zh));
  check("en home has no zh copy mixed in", !en.includes("AI 原生工作流"));
  check("zh home has no en copy mixed in", !zh.includes("AI-native workflow"));
  check("theme toggle rendered (en)", en.includes("data-theme-toggle"));
  check("theme toggle rendered (zh)", zh.includes("data-theme-toggle"));
  check("theme init script inline pre-paint (no flash)", en.includes("theme-init"));
}

console.log(failures ? `\n${failures} check(s) failed` : "\nAll checks passed");
process.exit(failures ? 1 : 0);
