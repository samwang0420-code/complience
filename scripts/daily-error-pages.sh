#!/bin/bash
# Daily Error Code Pages Workflow
# 1. Generate pages 2. Push Git 3. Update sitemap 4. Report to central

cd /root/.openclaw/workspace-geo-arch/error-code-hub

echo "=== Step 1: Generate 3036 error code pages ==="
node -e "
const fs = require('fs');
const brands = ['hisense','lg','samsung','whirlpool','ge','maytag','kenmore','bosch','frigidaire','electrolux','amana','kitchenaid','miele','siemens','haier','panasonic','sharp','toshiba','zanussi','aeg','daewoo','hitachi'];
const cats = ['washer','dryer','dishwasher','refrigerator','oven','microwave'];
const codes = ['E1','E2','E3','E4','E5','OE','IE','DE','LE','UE','TE','PE','HE','HE1','HE2','LE1','E6','E7','E8','E9','PF','CL','FE'];
const titles = {hisense:'Hisense',lg:'LG',samsung:'Samsung',whirlpool:'Whirlpool',ge:'GE',maytag:'Maytag',kenmore:'Kenmore',bosch:'Bosch',frigidaire:'Frigidaire',electrolux:'Electrolux',amana:'Amana',kitchenaid:'KitchenAid',miele:'Miele',siemens:'Siemens',haier:'Haier',panasonic:'Panasonic',sharp:'Sharp',toshiba:'Toshiba',zanussi:'Zanussi',aeg:'AEG',daewoo:'Daewoo',hitachi:'Hitachi',washer:'Washer',dryer:'Dryer',dishwasher:'Dishwasher',refrigerator:'Refrigerator',oven:'Oven',microwave:'Microwave'};
let count = 0;
for (const b of brands) { for (const cat of cats) { for (const code of codes) { const dir = 'src/app/error/' + b + '/' + cat + '/' + code; fs.mkdirSync(dir, {recursive: true}); const content = 'export const metadata = { title: \\''+titles[b]+' '+titles[cat]+' Error Code '+code+' - Fix Guide\\', description: \\''+titles[b]+' '+titles[cat]+' error code '+code+' troubleshooting.\\' } export default function Page() { return ( <div style={{maxWidth:'+'800px',margin:'+'0 auto',padding:'+'40px 20px'}}><h1>'+titles[b]+' '+titles[cat]+' Error Code '+code+'</h1><p>Error code '+code+' troubleshooting for '+titles[b]+' '+titles[cat]+'.</p><section><h2>What It Means</h2><p>Error code '+code+' indicates a fault in '+titles[b]+' '+titles[cat]+'.</p></section><section><h2>How to Fix</h2><ol><li>Unplug 2 min, restart</li><li>Check connections</li><li>Clean filters</li><li>Call pro if persists</li></ol></section></div> ) }'; fs.writeFileSync(dir+'/page.tsx',content); count++; } } }
console.log('Generated '+count+' pages');
"

echo "=== Step 2: Update sitemap.xml ==="
node -e "
const fs = require('fs');
const brands = ['hisense','lg','samsung','whirlpool','ge','maytag','kenmore','bosch','frigidaire','electrolux','amana','kitchenaid','miele','siemens','haier','panasonic','sharp','toshiba','zanussi','aeg','daewoo','hitachi'];
const cats = ['washer','dryer','dishwasher','refrigerator','oven','microwave'];
const codes = ['E1','E2','E3','E4','E5','OE','IE','DE','LE','UE','TE','PE','HE','HE1','HE2','LE1','E6','E7','E8','E9','PF','CL','FE'];
let xml = '<?xml version=\"1.0\"?><urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">';
xml += '<url><loc>https://uscomplianceguard.com/</loc><changefreq>daily</changefreq><priority>1.0</priority></url>';
xml += '<url><loc>https://uscomplianceguard.com/search</loc><changefreq>daily</changefreq><priority>0.9</priority></url>';
cats.forEach(c => xml += '<url><loc>https://uscomplianceguard.com/category/'+c+'</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>');
brands.forEach(b => xml += '<url><loc>https://uscomplianceguard.com/brand/'+b+'</loc><changefreq>weekly</changefreq><priority>0.7</priority></url>');
brands.forEach(b => { cats.forEach(cat => { codes.forEach(code => { xml += '<url><loc>https://uscomplianceguard.com/error/'+b+'/'+cat+'/'+code+'</loc><changefreq>monthly</changefreq><priority>0.6</priority></url>'; }); }); });
xml += '</urlset>';
fs.writeFileSync('public/sitemap.xml', xml);
console.log('sitemap.xml updated');
"

echo "=== Step 3: Git push ==="
git add -A
git commit -m "daily: 3036错误码页面 + sitemap更新 $(date +%Y-%m-%d)"
git push origin main

echo "=== Step 4: Report to central ==="
DATE=$(date +%Y-%m-%d)
mkdir -p /root/.openclaw/workspace-crm/central/reports
cat > /root/.openclaw/workspace-crm/central/reports/error-code_$DATE.json << JSONEOF
{
  "date": "$DATE",
  "project": "ErrorCodeHub",
  "domain": "uscomplianceguard.com",
  "action": "daily_error_code_generation",
  "stats": {"total_pages": 3036, "brands": 22, "categories": 6, "error_codes": 23},
  "status": "completed"
}
JSONEOF

echo "=== DONE ==="
