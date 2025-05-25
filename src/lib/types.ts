
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'design' | 'tools';
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string;
}