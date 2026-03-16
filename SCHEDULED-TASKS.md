# ErrorCodeHub 定时任务列表

## 📅 每日任务

| 时间 | 命令 | 说明 |
|------|------|------|
| 06:00 | `node scripts/daily-update.js` | 每日生成 +30-50 条新错误代码 |
| 06:05 | `git add -A && git commit -m "chore: daily update" && git push` | 提交并推送 |
| - | Cloudflare 自动部署 | 等待完成后 |
| 06:10 | `node scripts/index-url.js generate` | 索引新页面 (配额允许时) |

---

## 📅 每周任务 (周日)

| 时间 | 命令 | 说明 |
|------|------|------|
| 07:00 | `node scripts/seo-maintenance.js` | SEO 检查分析 |
| 07:30 | `node scripts/check-index-status.js` | 检查索引状态 |
| - | Google Search Console | 手动检查收录情况 |

---

## 📅 每月任务

| 时间 | 命令 | 说明 |
|------|------|------|
| 1st | 检查 AdSense 申请条件 | 流量/收录/内容 |
| 15th | 内容审核 | 检查错误/死链 |
| - | 更新 MEMORY.md | 记录进度 |

---

## ⚡ 快速命令

```bash
# 1. 每日内容更新
cd /root/.openclaw/workspace-geo-arch/error-code-hub
node scripts/daily-update.js
git add -A && git commit -m "chore: daily update" && git push

# 2. SEO 检查
node scripts/seo-maintenance.js
node scripts/check-index-status.js

# 3. 索引提交
node scripts/index-url.js generate
```

---

## 📊 检查清单

- [ ] 每日内容更新
- [ ] 代码提交推送
- [ ] Cloudflare 部署完成
- [ ] 新页面已索引
- [ ] 检查 404 错误
- [ ] 监控流量

---

## 🔧 自动化 (可选)

```bash
# Crontab 设置
0 6 * * * cd /path/to/error-code-hub && node scripts/daily-update.js && git add -A && git commit -m "chore: daily update" && git push

# 或使用 GitHub Actions (推荐)
```
