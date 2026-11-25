const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ecod-portfolio.vercel.app';

module.exports = {
  siteUrl,
  generateRobotsTxt: false,
  generateIndexSitemap: false,
  autoLastmod: false,
  exclude: ['/404', '/home'],
  transform: async (config, path) => ({
    loc: path,
    changefreq: 'monthly',
    priority: path === '/' ? 1 : 0.7,
    trailingSlash: path === '/',
  }),
};
