import Head from 'next/head';
import PropTypes from 'prop-types';

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://ecod-portfolio.vercel.app').replace(/\/$/, '');
const DEFAULT_TITLE = 'ECOD | Frontend Developer & Cisco Network Designer';
const DEFAULT_DESCRIPTION =
  'Amine Azrou (ECOD) is a Frontend Developer and Cisco Network Designer from Algeria, specializing in React, JavaScript, modern web experiences, Cisco Packet Tracer, network topology design and IT infrastructure.';
const DEFAULT_IMAGE = `${SITE_URL}/images/og-ecod.png`;

function CustomHead({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  keywords = [],
  canonicalPath = '/',
  canonicalUrl,
  ogImage = DEFAULT_IMAGE,
  ogImageWidth = 1200,
  ogImageHeight = 630,
  ogImageAlt = 'ECOD, Amine Azrou — Frontend Developer and Cisco Network Designer',
  ogType = 'website',
  noIndex = false,
}) {
  const normalizedPath = canonicalPath === '/' ? '/' : `/${canonicalPath.replace(/^\/+|\/+$/g, '')}`;
  const canonical = canonicalUrl || `${SITE_URL}${normalizedPath}`;
  const socialImage = ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage.startsWith('/') ? '' : '/'}${ogImage}`;
  const robots = noIndex || process.env.NODE_ENV === 'development' ? 'noindex,nofollow' : 'index,follow';

  return (
    <Head>
      <title key="title">{title}</title>
      <meta key="description" name="description" content={description} />
      {keywords.length > 0 && <meta key="keywords" name="keywords" content={keywords.join(', ')} />}
      <meta key="robots" name="robots" content={robots} />
      <meta key="author" name="author" content="Amine Azrou" />
      <meta key="google-site-verification" name="google-site-verification" content="T7SX3Ipc9qVtiqS4cV9h-QWlvvZCRPBY776Ee4pb59Q" />
      <meta key="geo-region" name="geo.region" content="DZ" />
      <meta key="referrer" name="referrer" content="strict-origin-when-cross-origin" />
      <meta key="theme-color" name="theme-color" content="#28282b" />
      <link key="canonical" rel="canonical" href={canonical} />

      <meta key="og:type" property="og:type" content={ogType} />
      <meta key="og:site_name" property="og:site_name" content="ECOD Portfolio" />
      <meta key="og:title" property="og:title" content={title} />
      <meta key="og:description" property="og:description" content={description} />
      <meta key="og:url" property="og:url" content={canonical} />
      <meta key="og:image" property="og:image" content={socialImage} />
      <meta key="og:image:width" property="og:image:width" content={String(ogImageWidth)} />
      <meta key="og:image:height" property="og:image:height" content={String(ogImageHeight)} />
      <meta key="og:image:alt" property="og:image:alt" content={ogImageAlt} />
      <meta key="og:locale" property="og:locale" content="en_DZ" />

      <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
      <meta key="twitter:title" name="twitter:title" content={title} />
      <meta key="twitter:description" name="twitter:description" content={description} />
      <meta key="twitter:image" name="twitter:image" content={socialImage} />

      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#333333" />
      <meta name="msapplication-TileColor" content="#28282b" />
    </Head>
  );
}

CustomHead.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  canonicalPath: PropTypes.string,
  canonicalUrl: PropTypes.string,
  ogImage: PropTypes.string,
  ogImageWidth: PropTypes.number,
  ogImageHeight: PropTypes.number,
  ogImageAlt: PropTypes.string,
  ogType: PropTypes.string,
  noIndex: PropTypes.bool,
};

CustomHead.defaultProps = {
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  keywords: [],
  canonicalPath: '/',
  canonicalUrl: undefined,
  ogImage: DEFAULT_IMAGE,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: 'ECOD, Amine Azrou — Frontend Developer and Cisco Network Designer',
  ogType: 'website',
  noIndex: false,
};

export default CustomHead;
