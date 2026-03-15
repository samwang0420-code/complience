# 每日任务清单 - ErrorCodeHub

## 📅 每日任务 (10-15分钟)

### 1. 数据扩展 (5分钟)
```bash
# 运行自动扩展脚本添加新错误代码
node scripts/expand-codes.js
```

### 2. 提交代码 (2分钟)
```bash
git add -A && git commit -m "chore: daily content update" && git push
```

### 3. 触发部署 (1分钟)
- Cloudflare 自动部署 或 手动 trigger

### 4. 索引新页面 (3分钟)
```bash
node scripts/index-url.js generate
```

### 5. 监控 (2分钟)
- 检查网站是否正常
- 检查 Google 收录情况

---

## 📈 周任务

### 周一: 行业研究
- 搜索新的家电品牌/型号
- 查找新出现的错误代码

### 周三: 内容优化
- 分析搜索流量
- 优化热门页面

### 周五: 数据清理
- 检查死链
- 更新过时信息

---

## 🔧 自动化 (可选)

设置 Cron Job 每天自动执行:

```bash
# 每天早上 6 点自动运行
0 6 * * * cd /path/to/error-code-hub && node scripts/expand-codes.js && git add -A && git commit -m "chore: daily content" && git push
```
