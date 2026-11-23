import { NextSeo } from 'next-seo';
import NextHead from 'next/head';
import PropTypes from 'prop-types';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

const getSchema = () => ({
  '@context': 'http://schema.org',
  '@type': 'Person',
  name: 'Amine Azrou',
  jobTitle: 'Frontend Developer & Cisco Network Designer',
  email: 'azrouamine122@gmail.com',
  telephone: '+213775512935',
  sameAs: ['https://github.com/S7OW', 'https://dz.linkedin.com/in/amine-azrou', 'https://instagram.com/x0_4u'],
  ...(SITE_URL ? { url: SITE_URL } : {}),
  address: { '@type': 'PostalAddress', addressCountry: 'DZ' },
});

function CustomHead({ title = '', description, keywords = [] }) {
  return (
    <>
      <NextHead>
        {/* General Meta Tags */}
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta httpEquiv="x-dns-prefetch-control" content="off" />
        <meta name="robots" content={process.env.NODE_ENV !== 'development' ? 'index,follow' : 'noindex,nofollow'} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="keywords" content={keywords && keywords.length ? keywords.join(',') : keywords} />
        <meta name="author" content="Amine Azrou" />
        <meta name="referrer" content="no-referrer" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="geo.region" content="DZ" />

        {/* Canonical and Title */}
        {SITE_URL && <link rel="canonical" href={SITE_URL} />}
        <title>{title}</title>

        {/* OpenGraph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Amine Azrou Portfolio" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {SITE_URL && <meta property="og:url" content={SITE_URL} />}

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />

        {/* Favicons */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#333333" />
        <meta name="msapplication-TileColor" content="#f0f4f1" />
        <meta name="theme-color" content="#f0f4f1" />

        {/* Schema */}
        {/* eslint-disable-next-line react/no-danger */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getSchema()) }} />
      </NextHead>
      <NextSeo title={title} description={description} />
    </>
  );
}

CustomHead.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.arrayOf(PropTypes.string),
};

CustomHead.defaultProps = {
  keywords: [],
};

export default CustomHead;
