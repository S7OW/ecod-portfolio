/* eslint-disable react/jsx-props-no-spreading */
import Home from '@src/pages/components/home/Index';
import About from '@src/pages/components/about/Index';
import Quote from '@src/pages/components/quote/Index';
import Projects from '@src/pages/components/projects/Index';
import CustomHead from '@src/components/dom/CustomHead';
import StructuredData from '@src/components/dom/StructuredData';

const seo = {
  title: 'ECOD | Frontend Developer & Cisco Network Designer',
  description:
    'Amine Azrou (ECOD) is a Frontend Developer and Cisco Network Designer from Algeria, specializing in React, JavaScript, modern web experiences, Cisco Packet Tracer, network topology design and IT infrastructure.',
  canonicalPath: '/',
  keywords: [
    // Personal brand
    'Amine Azrou',
    'ECOD',
    'Amine Azrou Developer',
    'ECOD Portfolio',

    // Frontend development
    'Frontend Developer',
    'Web Developer',
    'Frontend Engineer',
    'Freelance Frontend Developer',
    'React Developer',
    'JavaScript Developer',
    'TypeScript Developer',
    'React.js Developer',
    'Next.js Developer',
    'Modern Web Development',
    'Responsive Web Design',
    'UI Development',
    'Website Development',
    'Web Application Development',

    // Networking
    'Cisco Network Designer',
    'Cisco Network Design',
    'Cisco Packet Tracer',
    'Network Architecture',
    'Network Topology Design',
    'Computer Network Design',
    'LAN Network Design',
    'WAN Network Design',
    'Routing and Switching',
    'Network Infrastructure',
    'IT Infrastructure Design',
    'Cisco Networking',

    // Technologies
    'React Three Fiber',
    'Three.js',
    'GSAP',
    'GSAP ScrollTrigger',
    'SCSS',
    'CSS Modules',

    // Geographic targeting
    'Frontend Developer Algeria',
    'Web Developer Algeria',
    'Freelance Developer Algeria',
    'Cisco Network Designer Algeria',
    'Web Development North Africa',
    'Remote Frontend Developer',
  ],
};

function Page() {
  return (
    <>
      <CustomHead {...seo} />
      <StructuredData />
      <Home />
      <About />
      <Quote />
      <Projects />
    </>
  );
}

export default Page;
