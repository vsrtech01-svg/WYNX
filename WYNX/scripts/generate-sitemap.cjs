const fs = require('fs');

const data = fs.readFileSync('src/data/products.js', 'utf8');
const idRegex = /"id":\s*"([^"]+)"/g;
const ids = [];
let match;
while ((match = idRegex.exec(data)) !== null) {
  if (!ids.includes(match[1])) {
    ids.push(match[1]);
  }
}

const date = new Date().toISOString().split('T')[0];
const baseUrl = 'https://www.wynx.in';

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Core Pages -->
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${date}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/collection/men</loc>
    <lastmod>${date}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/trending</loc>
    <lastmod>${date}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/new-arrivals</loc>
    <lastmod>${date}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/about</loc>
    <lastmod>${date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>${baseUrl}/policies</loc>
    <lastmod>${date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
`;

xml += `  <!-- Product Detail Pages -->\n`;
ids.forEach(id => {
  xml += `  <url>
    <loc>${baseUrl}/product/${id}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>\n`;
});

xml += `</urlset>`;

fs.writeFileSync('public/sitemap.xml', xml);
console.log('sitemap.xml generated with ' + ids.length + ' products.');

const robots = `User-agent: *
Allow: /

# Block unnecessary/system pages
Disallow: /checkout
Disallow: /cart
Disallow: /api/

# Block only tracking/query URLs (safe version)
Disallow: /*?utm_
Disallow: /*?ref=

Sitemap: ${baseUrl}/sitemap.xml
`;
fs.writeFileSync('public/robots.txt', robots);
console.log('robots.txt generated.');
