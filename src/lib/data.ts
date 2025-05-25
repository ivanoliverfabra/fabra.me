import { Experience, Project, Skill, SocialLink } from "~/lib/types";

export const projects: Project[] = [
  {
    id: '1',
    title: 'Personal Portfolio',
    description: 'A modern, responsive portfolio website showcasing my projects, skills, and experience. Built with Next.js and styled using Tailwind CSS and ShadCN components.',
    tags: ['Next.JS', 'TailwindCSS', 'ShadCN'],
    imageUrl: 'https://9eux26ztgc.ufs.sh/f/tyWau0endVfojedjPvJiLWsnuxqtC6Xj81HpUcaZQVO4KEGN',
    demoUrl: 'https://fabra.me',
    githubUrl: 'https://github.com/ivanoliverfabra/portfolio',
    featured: true,
  },
  {
    id: '2',
    title: 'sewers.cc',
    description: 'A dynamic website for a Minecraft SMP server featuring server status, dynamic forms, and community features. Built with modern web technologies to provide an engaging platform for server members.',
    tags: ['Next.JS', 'TailwindCSS', 'ShadCN', 'PostgreSQL'],
    imageUrl: 'https://9eux26ztgc.ufs.sh/f/tyWau0endVfooYmNAi2XGhuQ0iopvmjxeDsgOP5BLR7AcwCM',
    demoUrl: 'https://www.sewers.cc',
    // githubUrl: 'https://github.com/ivanoliverfabra/sewers.cc',
    featured: true,
  },
  {
    id: '3',
    title: 'p.sewers.cc',
    description: 'A modern pastebin service built with Next.js and Tailwind CSS. Features include syntax highlighting, private pastes, sharing capabilities, and a clean, minimalist interface.',
    tags: ['Next.JS', 'TailwindCSS', 'ShadCN', 'PostgreSQL', 'Redis', 'Vercel Blob'],
    imageUrl: 'https://9eux26ztgc.ufs.sh/f/tyWau0endVfoc77r8sYndPne3AyY7VSimFkxbuDlqGEpZr0H',
    demoUrl: 'https://p.sewers.cc',
    // githubUrl: 'https://github.com/ivanoliverfabra/p.sewers.cc',
    featured: true,
  },
  {
    id: '4',
    title: 'swrs.cc',
    description: 'A modern URL shortener service built with Next.js and Tailwind CSS. Features include custom short links, analytics, and a clean, minimalist interface. Currently used internally by sewers.cc.',
    tags: ['Next.JS', 'TailwindCSS', 'ShadCN', 'PostgreSQL', 'Redis'],
    imageUrl: 'https://9eux26ztgc.ufs.sh/f/tyWau0endVfoL2Wh9l4DgsFpi8bANZMDzoqeW5wr93TtXuOP',
    demoUrl: 'https://www.swrs.cc',
    // githubUrl: 'https://github.com/ivanoliverfabra/swrs.cc',
    featured: false,
  },
];

export const skills: Skill[] = [
  { name: 'React', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'Bun', category: 'backend' },
  { name: 'Hono', category: 'backend' },
  { name: 'PostgreSQL', category: 'backend' },
  { name: 'Figma', category: 'design' },
  { name: 'UI/UX Design', category: 'design' },
  { name: 'Git', category: 'tools' },
  { name: 'Jest', category: 'tools' },
];

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/ivanoliverfabra', icon: 'github' },
  // { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
  // { name: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
  { name: 'Email', url: 'mailto:ivan@fabra.me', icon: 'mail' },
];

export const experiences: Experience[] = [];

export const personalInfo = {
  name: 'Ivan Oliver',
  title: 'Full Stack Developer',
  bio: 'I\'m passionate about creating engaging digital experiences and I focus on writing clean, understandable code. I\'m gaining experience with both frontend and backend technologies, and I enjoy building user-friendly applications that can help solve practical problems.',
  location: 'West Palm Beach, FL',
  email: 'ivan@fabra.me',
  resumeUrl: 'https://9eux26ztgc.ufs.sh/f/tyWau0endVfoZ5sAlGP0NckbU6Lz73GCoTD8fd2p59MtVRIy',
  about: {
    bio: 'My early fascination with coding, sparked by tinkering with game mods, has evolved into a dedicated pursuit of Computer Science at Palm Beach State College. I\'m now channeling that curiosity into building practical web solutions, focusing on JavaScript and React to create intuitive digital experiences.'
  }
};  