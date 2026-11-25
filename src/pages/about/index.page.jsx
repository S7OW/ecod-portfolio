/* eslint-disable react/jsx-props-no-spreading */
import Hero from '@src/pages/about/components/hero/Hero';
import Overview from '@src/pages/about/components/overview/Overview';
import Services from '@src/pages/about/components/services/Services';
import Process from '@src/pages/about/components/process/Process';
import CustomHead from '@src/components/dom/CustomHead';

const seo = {
  title: 'About Amine Azrou (ECOD) | Frontend & Cisco Networking',
  description: 'Meet Amine Azrou (ECOD), a self-taught frontend developer and Cisco Network Designer in Algeria. Explore his React projects, Cisco Packet Tracer practice and learning journey.',
  canonicalPath: '/about',
  keywords: [
    'Amine Azrou',
    'ECOD',
    'Frontend Developer',
    'Cisco Network Designer',
    'Frontend Developer Algeria',
    'Cisco Network Designer Algeria',
    'React Developer',
    'Cisco Packet Tracer',
    'Network Topology Design',
    'About Amine Azrou',
    'Frontend Developer Journey',
    'Self-taught Frontend Developer',
  ],
};
function Page() {
  return (
    <>
      <CustomHead {...seo} />

      <Hero />
      <Overview />
      <Services />
      <Process />
    </>
  );
}

export default Page;
