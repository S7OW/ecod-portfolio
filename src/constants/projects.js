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
    link: '/projects/lawliet-portfolio',
    liveLink: 'https://lawliet-portfolio.vercel.app/',
    repoLink: 'https://github.com/S7OW/My-portfolio',
    desc: ['Frontend project by Amine Azrou. Visit the live site to explore it.'],
    stack: [],
    images: [{ src: '/images/defaults/my-first-portfolio.png', tag: 'big', isRight: false }],
  },
  {
    ...projectTheme,
    id: 'apple-codes',
    category: 'frontend',
    title: 'Apple Codes',
    img: '/images/defaults/apple+codes.png',
    link: '/projects/apple-codes',
    liveLink: 'https://apple-codes.vercel.app/',
    repoLink: 'https://github.com/S7OW/Apple-codes',
    desc: ['Frontend project by Amine Azrou. Visit the live site to explore it.'],
    stack: [],
    images: [{ src: '/images/defaults/apple+codes.png', tag: 'big', isRight: false }],
  },
];

export default projects;
