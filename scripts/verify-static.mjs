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

const readdirRecursive = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((entry) =>
    entry.isDirectory() ? readdirRecursive(join(dir, entry.name)) : [join(dir, entry.name)],
  );

const caseStudyMeta = (lang) =>
  existsSync(join("content", lang, "case-studies"))
    ? readdirSync(join("content", lang, "case-studies"))
        .filter((f) => f.endsWith(".mdx"))
        .map((f) => {
          const raw = readFileSync(join("content", lang, "case-studies", f), "utf8");
          return {
            slug: f.replace(/\.mdx$/, ""),
            title: (raw.match(/^title:\s*"?(.+?)"?\s*$/m) || [])[1],
            date: (raw.match(/^date:\s*(.+)$/m) || [])[1]?.trim() ?? "",
            draft: /^draft:\s*true\s*$/m.test(raw),
            featured: /^featured:\s*true\s*$/m.test(raw),
          };
        })
        .filter((s) => s.title)
        .sort((a, b) => b.date.localeCompare(a.date))
    : [];

// Blog post metas sorted by date desc, mirroring the site's own ordering.
const blogMeta = (lang) =>
  existsSync(contentDir(lang))
    ? readdirSync(contentDir(lang))
        .filter((f) => f.endsWith(".mdx"))
        .map((f) => {
          const raw = readFileSync(join(contentDir(lang), f), "utf8");
          return {
            slug: f.replace(/\.mdx$/, ""),
            title: (raw.match(/^title:\s*"?(.+?)"?\s*$/m) || [])[1],
            date: (raw.match(/^date:\s*(.+)$/m) || [])[1]?.trim() ?? "",
          };
        })
        .filter((p) => p.title)
        .sort((a, b) => b.date.localeCompare(a.date))
    : [];

// Project card URLs parsed from the projects module (single source of truth).
const projectUrls = [
  ...readFileSync("src/lib/projects.ts", "utf8").matchAll(/url:\s*"(https:\/\/github\.com\/[^"]+)"/g),
].map((m) => m[1]);

const en = read("index.html");
const zh = read("zh/index.html");
const enBlog = read("blog/index.html");
const zhBlog = read("zh/blog/index.html");

// --- Case Study collection (ticket 03) ---
// Expectations derived from the content directories (rule-based, survives
// ticket 07's real content). The four section headings are this script's
// independent source of truth for the Case Study template.
const CASE_STUDY_SECTIONS = {
  en: ["Background", "My role", "Technical decisions", "Outcome"],
  zh: ["背景", "我的角色", "技术决策", "结果"],
};
const langRoot = (lang) => (lang === "en" ? "" : "zh/");

const caseList = { en: read("case-studies/index.html"), zh: read("zh/case-studies/index.html") };
check("en case study list route exists", !!caseList.en);
check("zh case study list route exists", !!caseList.zh);

for (const lang of ["en", "zh"]) {
  const studies = caseStudyMeta(lang);
  check(`${lang} has at least two case studies mounted`, studies.length >= 2);

  for (const study of studies) {
    check(`${lang} case list shows "${study.title}"`, caseList[lang]?.includes(study.title) ?? false);
    const detail = read(`${langRoot(lang)}case-studies/${study.slug}/index.html`);
    check(`${lang} detail route exists: ${study.slug}`, !!detail);
    if (!detail) continue;
    for (const heading of CASE_STUDY_SECTIONS[lang]) {
      check(`${lang}/${study.slug} renders section "${heading}"`, detail.includes(`>${heading}<`));
    }
    check(
      `${lang}/${study.slug} draft banner matches draft flag`,
      detail.includes('data-draft="true"') === study.draft,
    );
    if (study.draft) {
      check(`${lang} case list shows draft chip for "${study.title}"`, caseList[lang]?.includes("data-draft-chip") ?? false);
    }
  }
}

// QR surface is zh-only (WeChat mini-program: en visitors cannot use it).
const zhFace = read("zh/case-studies/face-analysis/index.html");
const enFace = read("case-studies/face-analysis/index.html");
if (zhFace && enFace) {
  check("zh face study offers the scan-to-try QR", zhFace.includes("/images/face-analysis/qr.jpg"));
  check("en face study has no QR (WeChat-only surface)", !enFace.includes("/images/face-analysis/qr.jpg"));
}

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

if (enBlog && zhBlog) {
  for (const title of zhTitles) {
    check(`zh post listed in zh blog: "${title}"`, zhBlog.includes(title));
    check(`zh post absent from en blog: "${title}"`, !enBlog.includes(title));
  }
  for (const title of enTitles) {
    check(`en post listed in en blog: "${title}"`, enBlog.includes(title));
    check(`en post absent from zh blog: "${title}"`, !zhBlog.includes(title));
  }
  // Detail pages: latest post per language, derived dynamically.
  for (const lang of ["en", "zh"]) {
    const first = blogMeta(lang)[0];
    const detail = first ? read(`${langRoot(lang)}blog/${first.slug}/index.html`) : null;
    check(`${lang} latest post detail route exists: ${first?.slug}`, !!detail);
    if (detail && first) {
      check(`${lang} latest post detail renders its title`, detail.includes(first.title));
      // MDX typography elements actually rendered, not just body text.
      check(`${lang} post renders h2 heading`, detail.includes("<h2"));
      check(`${lang} post renders code block`, detail.includes("<code"));
      check(`${lang} post renders blockquote`, detail.includes("<blockquote"));
      check(`${lang} post renders list`, detail.includes("<li"));
    }
  }
}

// --- About + Contact (ticket 05) ---
const aboutPages = { en: read("about/index.html"), zh: read("zh/about/index.html") };
const contactPages = { en: read("contact/index.html"), zh: read("zh/contact/index.html") };

check("en about route exists", !!aboutPages.en);
check("zh about route exists", !!aboutPages.zh);
check("en contact route exists", !!contactPages.en);
check("zh contact route exists", !!contactPages.zh);

for (const lang of ["en", "zh"]) {
  const about = aboutPages[lang];
  if (about) {
    check(`${lang} about states timezone UTC+8`, about.includes("UTC+8"));
    check(`${lang} about mentions async collaboration`, lang === "en" ? about.includes("async") : about.includes("异步"));
  }
  const contact = contactPages[lang];
  if (contact) {
    check(`${lang} contact renders email (mailto placeholder)`, contact.includes("mailto:"));
    check(`${lang} contact links GitHub`, contact.includes("github.com/yongkong"));
  }
}

// Contact = email + GitHub only (owner decision, launch pass): booking link,
// LinkedIn and the WeChat QR slot were removed — assert both presence of the
// real email and absence of the removed surfaces on every page.
const siteConfigSrc = readFileSync("src/lib/site-config.ts", "utf8");
const configValue = (key) => (siteConfigSrc.match(new RegExp(`${key}:\\s*"([^"]+)"`)) || [])[1];
const cfgEmail = configValue("email");

for (const lang of ["en", "zh"]) {
  const contact = contactPages[lang];
  if (contact && cfgEmail) {
    check(`${lang} contact email href matches site config`, contact.includes(`href="mailto:${cfgEmail}"`));
    check(`${lang} contact shows the real email address`, contact.includes(cfgEmail));
    check(`${lang} contact has no booking link (removed by owner)`, !/cal\.com/i.test(contact));
    check(`${lang} contact has no LinkedIn entry (removed by owner)`, !/linkedin/i.test(contact) && !contact.includes("领英"));
  }
}

const renderedPages = {
  en: { home: en, blog: enBlog, "case studies": caseList.en, about: aboutPages.en, contact: contactPages.en },
  zh: { home: zh, blog: zhBlog, "case studies": caseList.zh, about: aboutPages.zh, contact: contactPages.zh },
};
for (const [lang, pages] of Object.entries(renderedPages)) {
  for (const [pageName, html] of Object.entries(pages)) {
    if (!html) continue;
    check(`${lang} ${pageName} page has no WeChat QR slot (removed by owner)`, !html.includes("data-wechat-qr"));
  }
}

// --- Homepage assembly (ticket 04) ---
// Featured/latest expectations mirror the site's own selection logic
// (featured flag first, fallback to newest; posts sorted by date desc),
// derived from the content dirs; project URLs come from projects.ts.
for (const lang of ["en", "zh"]) {
  const home = lang === "en" ? en : zh;
  if (!home) continue;
  check(`${lang} home has Contact CTA link`, home.includes(lang === "en" ? 'href="/contact/"' : 'href="/zh/contact/"'));
  const studies = caseStudyMeta(lang);
  const flagged = studies.filter((s) => s.featured);
  const featured = (flagged.length > 0 ? flagged : studies).slice(0, 2);
  if (featured[0]) {
    check(`${lang} home features the top curated case study`, home.includes(featured[0].title));
  }
  const latestPost = blogMeta(lang)[0];
  if (latestPost) {
    check(`${lang} home lists the latest blog post`, home.includes(latestPost.title));
  }
  for (const url of projectUrls) {
    check(`${lang} home links project card: ${url.split("/").pop()}`, home.includes(url));
  }
}

// --- SEO & finishing (ticket 06) ---
// Sitemap expectations derived from content dirs; og:title asserted at the
// meta-tag level (not page text) so a layout-level override cannot pass.
const sitemap = read("sitemap.xml");
const robots = read("robots.txt");

check("sitemap.xml generated", !!sitemap);
check("robots.txt generated", !!robots);
check("platform 404 fallback generated", !!read("404.html"));
check("OG placeholder image exported", existsSync(join(outDir, "og.png")));

if (sitemap) {
  check("sitemap covers zh routes", sitemap.includes("/zh/"));
  for (const lang of ["en", "zh"]) {
    const blogSlug = blogMeta(lang)[0]?.slug;
    if (blogSlug) check(`sitemap covers ${lang} latest blog post`, sitemap.includes(`/blog/${blogSlug}/`) || sitemap.includes(`/zh/blog/${blogSlug}/`));
    const caseSlug = caseStudyMeta(lang)[0]?.slug;
    if (caseSlug) check(`sitemap covers ${lang} latest case study`, sitemap.includes(`/${lang === "en" ? "" : "zh/"}case-studies/${caseSlug}/`));
  }
}
if (robots) {
  check("robots allows all crawlers", robots.includes("Allow: /") || robots.includes("allow: /"));
  check("robots points to sitemap", robots.includes("sitemap.xml"));
}

for (const lang of ["en", "zh"]) {
  const home = lang === "en" ? en : zh;
  if (!home) continue;
  check(`${lang} home has og:title`, home.includes('property="og:title"'));
  check(
    `${lang} home og:title carries language copy`,
    lang === "en" ? home.includes("Full-Stack Developer") : home.includes("全栈开发者"),
  );
  check(`${lang} home has og:image`, home.includes('property="og:image"'));
  const post = blogMeta(lang)[0];
  const postHtml = post ? read(`${langRoot(lang)}blog/${post.slug}/index.html`) : null;
  if (postHtml && post) {
    check(
      `${lang} post detail og:title is the post title (meta-tag level)`,
      postHtml.includes(`property="og:title" content="${post.title}"`),
    );
  }
}
// --- Visual polish (ticket 10) ---
// Custom {yk} favicon (app metadata files), brand fonts self-hosted via
// fontsource, single blue accent token, hero stat anchor, Stat blocks.
const iconSvg = existsSync(join(outDir, "icon.svg"))
  ? readFileSync(join(outDir, "icon.svg"), "utf8")
  : null;
check("custom {yk} favicon emitted (icon.svg)", !!iconSvg && iconSvg.includes("yk"));
check("apple touch icon emitted", existsSync(join(outDir, "apple-icon.png")));

// --- Stylesheet presence (ticket 06 follow-up) ---
// A phantom @import once made the whole stylesheet vanish while every HTML
// assertion stayed green — CSS must be asserted, not assumed.
const cssFiles = existsSync(join(outDir, "_next", "static"))
  ? readdirRecursive(join(outDir, "_next", "static")).filter((f) => f.endsWith(".css"))
  : [];
check("build emits at least one stylesheet", cssFiles.length > 0);
if (cssFiles.length > 0) {
  const css = cssFiles.map((f) => readFileSync(f, "utf8")).join("\n");
  check("stylesheet carries the design tokens", css.includes("--color-background"));
  check("stylesheet includes typography plugin output", css.includes(".prose"));
  check("brand fonts self-hosted (IBM Plex Sans Variable)", css.includes("IBM Plex Sans Variable"));
  check("brand mono self-hosted (JetBrains Mono Variable)", css.includes("JetBrains Mono Variable"));
  check("brand accent token defined (both modes)", (css.match(/--brand:/g) ?? []).length >= 2);
  check("brand accent actually used (.text-brand utility)", css.includes(".text-brand"));
}

for (const lang of ["en", "zh"]) {
  const home = lang === "en" ? en : zh;
  if (home) {
    check(
      `${lang} home hero has mono stat anchor`,
      home.includes(">20+<") && home.includes(">UTC+8<"),
    );
  }
  for (const study of caseStudyMeta(lang)) {
    const detail = read(`${langRoot(lang)}case-studies/${study.slug}/index.html`);
    if (detail) {
      check(`${lang} case study "${study.slug}" renders Stat blocks`, detail.includes('data-stat="true"'));
    }
  }
}

console.log(failures ? `\n${failures} check(s) failed` : "\nAll checks passed");
process.exit(failures ? 1 : 0);
