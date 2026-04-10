#!/usr/bin/env python3
"""批量生成错误码页面"""
import os
import sys

brands = ['hisense', 'lg', 'samsung', 'whirlpool', 'ge', 'maytag', 'kenmore', 'bosch', 'frigidaire', 'electrolux', 'amana', 'kitchenaid', 'miele', 'siemens', 'haier', 'panasonic', 'sharp', 'toshiba', 'zanussi', 'aeg', 'daewoo', 'hitachi']
categories = ['washer', 'dryer', 'dishwasher', 'refrigerator', 'oven', 'microwave']
codes = ['E1', 'E2', 'E3', 'E4', 'E5', 'OE', 'IE', 'DE', 'LE', 'UE', 'TE', 'PE', 'HE', 'HE1', 'HE2', 'LE1', 'E6', 'E7', 'E8', 'E9', 'PF', 'CL', 'FE']

output_base = '/root/.openclaw/workspace-geo-arch/error-code-hub/src/app/error'

template_html = '''export const metadata = {{
  title: '{brand_title} {category_title} Error Code {code} - Fix Guide',
  description: '{brand_title} {category_title} showing error code {code}? Complete troubleshooting guide with causes and solutions.',
}}

export default function ErrorPage() {{
  return (
    <div style={{{{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}}}>
      <h1 style={{{{ fontSize: '2.2rem', fontWeight: 'bold', marginBottom: '15px' }}}}>{brand_title} {category_title} Error Code {code}: Complete Fix Guide</h1>
      <p style={{{{ color: '#94a3b8', marginBottom: '30px', fontSize: '1.1rem' }}}}>Your {brand_title} {category_title} displaying error code {code}? This guide covers the causes and step-by-step solutions to fix this issue.</p>

      <section style={{{{ marginBottom: '30px', background: '#1e293b', padding: '24px', borderRadius: '12px', border: '1px solid #dc2626' }}}}>
        <h2 style={{{{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '15px', color: '#ef4444' }}}}>What Does Error Code {code} Mean?</h2>
        <p style={{{{ color: '#94a3b8', lineHeight: '1.8' }}}}>Error code {code} on {brand_title} {category_title} indicates a specific fault. Common causes include: sensor malfunction, drainage issues, heating problems, or component failure.</p>
      </section>

      <section style={{{{ marginBottom: '30px' }}}}>
        <h2 style={{{{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '15px' }}}}>Common Causes</h2>
        <ul style={{{{ color: '#94a3b8', lineHeight: '2', paddingLeft: '20px' }}}}>
          <li>Component malfunction or failure</li>
          <li>Sensor or wiring issue</li>
          <li>Blockage or obstruction</li>
          <li>Control board problem</li>
        </ul>
      </section>

      <section style={{{{ marginBottom: '30px' }}}}>
        <h2 style={{{{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '15px' }}}}>How to Fix</h2>
        <ol style={{{{ color: '#94a3b8', lineHeight: '1.8', paddingLeft: '20px' }}}}>
          <li>Power reset: unplug for 2 minutes, then restart</li>
          <li>Check for visible damage or loose connections</li>
          <li>Clean any filters or drains</li>
          <li>If problem persists, contact a professional</li>
        </ol>
      </section>

      <div style={{{{ display: 'flex', gap: '20px' }}}}>
        <span style={{{{ background: '#f59e0b', padding: '4px 12px', borderRadius: '6px', color: 'white' }}}}>⏺ Medium</span>
        <span style={{{{ background: '#6366f1', padding: '4px 12px', borderRadius: '6px', color: 'white' }}}}>⏱️ 30-60 min</span>
      </div>
    </div>
  )
}}
'''

brand_titles = {
    'hisense': 'Hisense', 'lg': 'LG', 'samsung': 'Samsung', 'whirlpool': 'Whirlpool',
    'ge': 'GE', 'maytag': 'Maytag', 'kenmore': 'Kenmore', 'bosch': 'Bosch',
    'frigidaire': 'Frigidaire', 'electrolux': 'Electrolux', 'amana': 'Amana',
    'kitchenaid': 'KitchenAid', 'miele': 'Miele', 'siemens': 'Siemens',
    'haier': 'Haier', 'panasonic': 'Panasonic', 'sharp': 'Sharp',
    'toshiba': 'Toshiba', 'zanussi': 'Zanussi', 'aeg': 'AEG',
    'daewoo': 'Daewoo', 'hitachi': 'Hitachi'
}

category_titles = {
    'washer': 'Washer', 'dryer': 'Dryer', 'dishwasher': 'Dishwasher',
    'refrigerator': 'Refrigerator', 'oven': 'Oven', 'microwave': 'Microwave'
}

count = 0
for brand in brands:
    for category in categories:
        for code in codes:
            dir_path = f"{output_base}/{brand}/{category}"
            os.makedirs(dir_path, exist_ok=True)
            
            file_path = f"{dir_path}/page.tsx"
            
            content = template_html.format(
                brand_title=brand_titles.get(brand, brand.title()),
                category_title=category_titles.get(category, category.title()),
                code=code
            )
            
            with open(file_path, 'w') as f:
                f.write(content)
            
            count += 1

print(f"Generated {count} error code pages")