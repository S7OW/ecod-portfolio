/* eslint-disable react/jsx-props-no-spreading */
import Hero from '@src/pages/about/components/hero/Hero';
import Overview from '@src/pages/about/components/overview/Overview';
import Services from '@src/pages/about/components/services/Services';
import Process from '@src/pages/about/components/process/Process';
import CustomHead from '@src/components/dom/CustomHead';

const seo = {
  title: 'About Amine Azrou',
  description: 'Meet Amine Azrou, a beginner self-taught Frontend Developer and Cisco Network Designer in Algeria, currently studying accounting.',
  keywords: [
    'Amine Azrou',
    'Frontend Developer',
    'Cisco Network Designer',
    'About me',
    'Frontend Developer Journey',
    'Web Developer Story',
    'Self-taught Frontend Developer',
    'Cisco Networking Basics',
    'Cisco Introduction to Cybersecurity',
    'Accounting Student',
    'Developer Profile',
    'Quality Web Solutions',
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
