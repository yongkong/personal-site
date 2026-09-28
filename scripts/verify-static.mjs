// Verify the static build output at the agreed seam: rendered routes in out/.
// Expected literals come from the spec (independent source of truth), never
// recomputed from the app's own dictionaries.
import { readFileSync, existsSync, readdirSync } from "node:fs";
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
const enBlog = read("blog/index.html");
const zhBlog = read("zh/blog/index.html");
const enPost = read("blog/placeholder-ai-workflow/index.html");
const zhPost = read("zh/blog/placeholder-zh-only/index.html");

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

// --- Blog collection (ticket 02) ---
// Language-filter rule derived from the content directories themselves, so
// the rule keeps being tested after ticket 08 replaces placeholder posts:
// every zh post title appears in the zh list and in no en page, and vice
// versa.
check("en blog list route exists", !!enBlog);
check("zh blog list route exists", !!zhBlog);
check("en post detail route exists", !!enPost);
check("zh post detail route exists", !!zhPost);

const frontmatterTitle = (file) =>
  (readFileSync(file, "utf8").match(/^title:\s*"?(.+?)"?\s*$/m) || [])[1];
const contentDir = (lang) => join("content", lang, "blog");
const titlesIn = (lang) =>
  existsSync(contentDir(lang))
    ? readdirSync(contentDir(lang))
        .filter((f) => f.endsWith(".mdx"))
        .map((f) => frontmatterTitle(join(contentDir(lang), f)))
        .filter(Boolean)
    : [];

const zhTitles = titlesIn("zh");
const enTitles = titlesIn("en");
check("zh blog content directory has posts", zhTitles.length > 0);
check("en blog content directory has posts", enTitles.length > 0);

if (enBlog && zhBlog && enPost && zhPost) {
  for (const title of zhTitles) {
    check(`zh post listed in zh blog: "${title}"`, zhBlog.includes(title));
    check(`zh post absent from en blog: "${title}"`, !enBlog.includes(title));
  }
  for (const title of enTitles) {
    check(`en post listed in en blog: "${title}"`, enBlog.includes(title));
    check(`en post absent from zh blog: "${title}"`, !zhBlog.includes(title));
  }
  check("en post detail renders body copy", enPost.includes("This placeholder post proves the English blog pipeline"));
  check("zh post detail renders body copy", zhPost.includes("这篇占位心得用于验证中文内容管线"));
  // MDX typography elements actually rendered, not just body text.
  for (const [name, page] of [["en", enPost], ["zh", zhPost]]) {
    check(`${name} post renders h2 heading`, page.includes("<h2"));
    check(`${name} post renders code block`, page.includes("<code"));
    check(`${name} post renders blockquote`, page.includes("<blockquote"));
    check(`${name} post renders list`, page.includes("<li"));
  }
}

console.log(failures ? `\n${failures} check(s) failed` : "\nAll checks passed");
process.exit(failures ? 1 : 0);
