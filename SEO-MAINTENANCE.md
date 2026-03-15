# SEO/GEO 维护计划

## 📅 每周维护 (周日)

```bash
# 1. 内容扩展
node scripts/daily-update.js

# 2. SEO 维护检查
node scripts/seo-maintenance.js

# 3. 详细解决方案补充
node scripts/add-detailed-solutions.js

# 4. 提交部署
git add -A && git commit -m "chore: weekly SEO update" && git push

# 5. 索引新页面 (配额允许时)
node scripts/index-url.js generate
```

---

## 🔧 当前问题 (2026-03-15)

### 内容不足
| 分类 | 当前数量 | 建议 |
|------|---------|------|
| Refrigerator | 2 | +50 |
| Dishwasher | 1 | +50 |
| Dryer | 1 | +50 |
| CNC | 8 | +30 |
| Robotics | 10 | +30 |

### 需要补充
- 773 条缺少详细故障排查步骤

---

## 📈 月度任务

### 第1周: 内容扩展
- 补充 Refrigerator, Dishwasher, Dryer 内容
- 补充 CNC, Robotics 详细方案

### 第2周: 技术优化
- 页面加载速度优化
- 图片优化 (如果有)
- Core Web Vitals 检查

### 第3周: 内容优化
- 分析搜索流量
- 优化热门页面
- 添加更多长尾关键词

### 第4周: 质量检查
- 死链检查
- 内容校对
- Schema 验证

---

## 📊 监控指标

| 指标 | 工具 | 频率 |
|------|------|------|
| Google 收录 | Google Search Console | 每周 |
| 搜索排名 | 手动查询 | 每周 |
| 页面索引 | Indexing API | 每天 |
| 流量 | Google Analytics | 每天 |
| 错误代码 | 脚本检查 | 每周 |

---

## 🚀 自动化 (可选)

设置 Cron Job:

```bash
# 每周日 6 点运行
0 6 * * 0 cd /path/to/error-code-hub && node scripts/daily-update.js && node scripts/seo-maintenance.js

# 每天 7 点索引新页面 (需配额)
0 7 * * * cd /path/to/error-code-hub && node scripts/index-url.js generate
```
