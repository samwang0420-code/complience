import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://uscomplianceguard.com';

function extractKeys(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const regex = /^\s*['"]([\w-]+)['"]:/gm;
  const keys = [];
  let match;
  while ((match = regex.exec(content)) !== null) {
    keys.push(match[1]);
  }
  return keys;
}

const questionsPath = path.join(__dirname, '../src/data/questions.ts');
const industriesPath = path.join(__dirname, '../src/data/industries.ts');

const questions = extractKeys(questionsPath);
const industries = extractKeys(industriesPath);

const staticPages = [
  '',
  '/check',
  '/thank-you'
];

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

// Static Pages
staticPages.forEach(page => {
  sitemap += `  <url>
    <loc>${BASE_URL}${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>
`;
});

// Question Pages
questions.forEach(slug => {
  sitemap += `  <url>
    <loc>${BASE_URL}/ada/${slug}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
`;
});

// Industry Pages
industries.forEach(slug => {
  sitemap += `  <url>
    <loc>${BASE_URL}/industry/ada-compliance-for-${slug}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
`;
});

sitemap += `</urlset>`;

const publicDir = path.join(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);

console.log(`Sitemap generated with ${staticPages.length + questions.length + industries.length} URLs.`);
