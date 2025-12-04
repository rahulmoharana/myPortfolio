export interface Project {
  title: string;
  description: string;
  link: string;
  tags: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface SectionProps {
  id: string;
  className?: string;
}