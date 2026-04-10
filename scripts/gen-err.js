const fs = require('fs');
const path = require('path');

const brands = ['hisense', 'lg', 'samsung', 'whirlpool', 'ge', 'maytag', 'kenmore', 'bosch', 'frigidaire', 'electrolux', 'amana', 'kitchenaid', 'miele', 'siemens', 'haier', 'panasonic', 'sharp', 'toshiba', 'zanussi', 'aeg', 'daewoo', 'hitachi'];
const categories = ['washer', 'dryer', 'dishwasher', 'refrigerator', 'oven', 'microwave'];
const codes = ['E1', 'E2', 'E3', 'E4', 'E5', 'OE', 'IE', 'DE', 'LE', 'UE', 'TE', 'PE', 'HE', 'HE1', 'HE2', 'LE1', 'E6', 'E7', 'E8', 'E9', 'PF', 'CL', 'FE'];

const brandTitles = {'hisense':'Hisense','lg':'LG','samsung':'Samsung','whirlpool':'Whirlpool','ge':'GE','maytag':'Maytag','kenmore':'Kenmore','bosch':'Bosch','frigidaire':'Frigidaire','electrolux':'Electrolux','amana':'Amana','kitchenaid':'KitchenAid','miele':'Miele','siemens':'Siemens','haier':'Haier','panasonic':'Panasonic','sharp':'Sharp','toshiba':'Toshiba','zanussi':'Zanussi','aeg':'AEG','daewoo':'Daewoo','hitachi':'Hitachi'};
const categoryTitles = {'washer':'Washer','dryer':'Dryer','dishwasher':'Dishwasher','refrigerator':'Refrigerator','oven':'Oven','microwave':'Microwave'};

const outputBase = 'src/app/error';

let count = 0;
brands.forEach(brand => {
  categories.forEach(category => {
    codes.forEach(code => {
      const dirPath = path.join(outputBase, brand, category);
      fs.mkdirSync(dirPath, {recursive: true});
      
      const content = `export const metadata = {
  title: '${brandTitles[brand]} ${categoryTitles[category]} Error Code ${code} - Fix Guide',
  description: '${brandTitles[brand]} ${categoryTitles[category]} showing error code ${code}? Complete troubleshooting guide.',
}

export default function ErrorPage() {
  return (
    <div style={{maxWidth: '800px', margin: '0 auto', padding: '40px 20px'}}>
      <h1 style={{fontSize: '2.2rem', fontWeight: 'bold', marginBottom: '15px'}}>${brandTitles[brand]} ${categoryTitles[category]} Error Code ${code}</h1>
      <p style={{color: '#94a3b8', marginBottom: '30px'}}>Error code ${code} troubleshooting guide for ${brandTitles[brand]} ${categoryTitles[category]}.</p>
      <section style={{marginBottom: '30px', background: '#1e293b', padding: '24px', borderRadius: '12px'}}>
        <h2 style={{fontSize: '1.3rem', fontWeight: '600', marginBottom: '15px'}}>What It Means</h2>
        <p style={{color: '#94a3b8', lineHeight: '1.8'}}>Error code ${code} indicates a specific fault in your ${brandTitles[brand]} ${categoryTitles[category]}.</p>
      </section>
      <section style={{marginBottom: '30px'}}>
        <h2 style={{fontSize: '1.3rem', fontWeight: '600', marginBottom: '15px'}}>How to Fix</h2>
        <ol style={{color: '#94a3b8', lineHeight: '1.8', paddingLeft: '20px'}}>
          <li>Unplug for 2 minutes, restart</li>
          <li>Check connections</li>
          <li>Clean filters</li>
          <li>Contact professional if persists</li>
        </ol>
      </section>
    </div>
  )
}
`;
      
      fs.writeFileSync(path.join(dirPath, 'page.tsx'), content);
      count++;
    });
  });
});

console.log('Generated ' + count + ' pages');