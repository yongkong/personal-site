# 09: 上线

**What to build:** 生产上线：托管部署（Vercel 或 Cloudflare Pages 免费档，git push 即发布）；自定义域名 yongkong.dev 绑定（已查 RDAP 可注册——购买与 DNS 为人类动作，用 /wizard 生成操作脚本）；站长素材占位符替换为真值（真名、域名邮箱 hello@yongkong.dev 及转发、LinkedIn、Cal.com、微信二维码）；生产冒烟：双语言路由可达、Contact 机制可用、OG 分享卡正常展开。

**Blocked by:** 04（首页）、05（About/Contact）、06（SEO 收尾）、07（Case Study 内容）、08（Blog 内容）

**Status:** resolved

## Resolution（2026-09-30 项目收官）

站长素材定稿（作者决定）：署名即 yongkong（页脚简化，REAL NAME 占位移除）、邮箱 yongkong@outlook.com；**Cal.com、LinkedIn、微信二维码三处按作者要求移除**——Contact 页 = 邮箱 + GitHub 双语入口，中文页脚微信位删除，字典与 site-config 同步清理。断言随决策反转：真实邮箱 href 级校验 + 三个已移除面在全站所有渲染页面的**不存在性**检查（145 项全绿）。

部署形态：Cloudflare Workers 静态资产（wrangler.jsonc），git push 自动部署已实证，yongkong.dev 绑定完成，生产冒烟通过（含逐页 og:title、OG 图绝对地址、字体/图标引用）。

已知限制（Round 1 Q4 既定取舍，作者知悉）：大陆直连不可达——Cloudflare 免费版边缘 IP 被墙且 .dev 无法 ICP 备案；如需大陆访问另立"可备案双域名 + 国内 CDN"项目。

- [x] git push 自动部署到生产
- [x] yongkong.dev 可访问
- [x] 素材替换完成（邮箱=yongkong@outlook.com；署名=yongkong；Cal.com/LinkedIn/微信按作者决定移除）
- [x] 生产冒烟通过：双语言路由、Contact 机制、OG 卡片
