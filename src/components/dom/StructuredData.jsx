import Head from 'next/head';
import PropTypes from 'prop-types';

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Amine Azrou',
  alternateName: 'ECOD',
  url: 'https://ecod-portfolio.vercel.app/',
  jobTitle: 'Frontend Developer & Cisco Network Designer',
  description:
    'Amine Azrou (ECOD) is a Frontend Developer and Cisco Network Designer from Algeria, specializing in React, JavaScript, modern web experiences, Cisco Packet Tracer, network topology design and IT infrastructure.',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'DZ',
  },
  knowsAbout: [
    'Frontend Development',
    'React',
    'JavaScript',
    'TypeScript',
    'Next.js',
    'Web Design',
    'Three.js',
    'GSAP',
    'Cisco Networking',
    'Cisco Packet Tracer',
    'Network Architecture',
    'Network Topology Design',
    'LAN',
    'WAN',
    'Routing and Switching',
  ],
  sameAs: ['https://github.com/S7OW', 'https://dz.linkedin.com/in/amine-azrou', 'https://instagram.com/x0_4u'],
};

function StructuredData({ data = personSchema }) {
  const serializedData = JSON.stringify(data).replace(/</g, '\\u003c');

  return (
    <Head>
      {/* eslint-disable-next-line react/no-danger */}
      <script key="structured-data-person" type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializedData }} />
    </Head>
  );
}

StructuredData.propTypes = {
  data: PropTypes.shape({
    '@context': PropTypes.string.isRequired,
    '@type': PropTypes.string.isRequired,
  }),
};

StructuredData.defaultProps = {
  data: personSchema,
};

export default StructuredData;
