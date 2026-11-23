/* eslint-disable react/jsx-props-no-spreading */
import Home from '@src/pages/components/home/Index';
import About from '@src/pages/components/about/Index';
import Quote from '@src/pages/components/quote/Index';
import Projects from '@src/pages/components/projects/Index';
import CustomHead from '@src/components/dom/CustomHead';

const seo = {
  title: 'Amine Azrou | Frontend Developer & Cisco Network Designer',
  description: 'Portfolio of Amine Azrou, a beginner self-taught Frontend Developer and Cisco Network Designer based in Algeria.',
  keywords: [
    'Amine Azrou',
    'Frontend',
    'Self-taught Developer',
    'Portfolio',
    'Web Development',
    'Frontend Developer',
    'Cisco Network Designer',
    'Cisco Packet Tracer',
    'Algeria',
    'React Three Fiber',
    'Three.js',
    'GSAP ScrollTrigger',
    'SCSS',
    'CSS Modules',
    'Vercel',
  ],
};

function Page() {
  return (
    <>
      <CustomHead {...seo} />
      <Home />
      <About />
      <Quote />
      <Projects />
    </>
  );
}

export default Page;
