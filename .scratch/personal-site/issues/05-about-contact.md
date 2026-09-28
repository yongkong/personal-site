# 05: About 页 + Contact 页 + 联系机制

**What to build:** About 页：20 年全栈履历叙事（占位）、时区（UTC+8）与异步协作方式说明。Contact 页（Conversion Action 落点）：域名邮箱 + Cal.com 预约通话链接 + GitHub/LinkedIn 入口；微信二维码位仅出现在 `/zh` 页脚。站长素材（真名、邮箱、LinkedIn、Cal.com、微信二维码）集中配置管理，占位符醒目，替换真值不需改组件。

**Blocked by:** 01（站点骨架与双语路由打通）

**Status:** resolved

## Resolution

红→绿完成：断言扩至 101 项（全过），lint/typecheck/build 干净。/code-review 两轴通过（Standards 0 硬违规），采纳修复：微信位断言逐页双向（en 全页面无 / zh 全页面有）；邮箱/预约/LinkedIn 断言升级为 href 级并从 site-config 动态取值（工单 09 换真值仍有效）；contact 页 GitHub 标签走字典。

决议与备注：
- 页面外壳（section 容器 + h1 + 副标题）已是第 4/5 份拷贝——**工单 04（首页组装）时重估抽共享 PageShell**
- 占位符 href 为相对值点击会 404——可接受（占位状态醒目，工单 09 替换真值即消失）
- 范围蔓延（保留）：页头 About/Contact 导航（Contact 带 CTA 样式，服务 Conversion Action）；data-* 验证钩子沿 01/03 既定惯例

- [x] 双语言的 About 与 Contact 路由存在
- [x] Contact 页渲染邮箱与预约链接（占位值亦可）及 GitHub/LinkedIn 入口
- [x] 微信二维码位仅出现在 `/zh` 页脚，英文版不出现
- [x] 站长素材集中配置，替换不需动组件
- [x] 构建后断言覆盖联系机制的语言差异行为
