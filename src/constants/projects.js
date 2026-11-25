const projectTheme = {
  primary: '#000000',
  accentColor: '#f0f4f1',
  secondary: '#FAFAFA',
  fillColor: '#f2f2f2',
  menuColor: '#000000',
  menuFontColor: '#f0f4f1',
  fluidColor: '#d7d7d4',
};

const projects = [
  {
    ...projectTheme,
    id: 'lawliet-portfolio',
    category: 'frontend',
    title: 'Lawliet Portfolio',
    img: '/images/defaults/my-first-portfolio.png',
    imageAlt: 'Dark homepage preview of the Lawliet Portfolio website',
    link: '/projects/lawliet-portfolio',
    liveLink: 'https://lawliet-portfolio.vercel.app/',
    repoLink: 'https://github.com/S7OW/My-portfolio',
    desc: ['A typography-led personal portfolio website with a minimal dark homepage and project navigation.'],
    stack: [],
    images: [{ src: '/images/defaults/my-first-portfolio.png', tag: 'big', isRight: false, alt: 'Homepage preview of the Lawliet Portfolio website' }],
  },
  {
    ...projectTheme,
    id: 'apple-codes',
    category: 'frontend',
    title: 'Apple Codes',
    img: '/images/defaults/apple+codes.png',
    imageAlt: 'Homepage preview of the Apple Codes digital codes website',
    link: '/projects/apple-codes',
    liveLink: 'https://apple-codes.vercel.app/',
    repoLink: 'https://github.com/S7OW/Apple-codes',
    desc: ['A digital codes website with product browsing and a guide that explains how to use the service.'],
    stack: [],
    images: [{ src: '/images/defaults/apple+codes.png', tag: 'big', isRight: false, alt: 'Apple Codes homepage showing its digital codes offer and product navigation' }],
  },
];

export default projects;
