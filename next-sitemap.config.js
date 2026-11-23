const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
};
