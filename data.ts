import { Project, Experience } from './types';

export const CONTENT = {
  name: "Rahul Moharana", // Placeholder: {{NAME}}
  title: "Full Stack Developer", // Placeholder: {{TITLE}}
  tagline: "Delivering robust, efficient, and maintainable software solutions.", // Placeholder: {{TAGLINE}}
  location: "Cuttack, Odisha, India",
  email: "dev.rahulmoharana@gmail.com", // Placeholder: {{EMAIL}}
  phone: "+91 7327923478",
  social: {
    linkedin: "https://linkedin.com/in/rahul-moharana", // Placeholder: {{LINKEDIN}}
    github: "https://github.com/rahulmoharana", // Placeholder: {{GITHUB}}
  },
  bio: [
    "I am a Full Stack Developer with a Master of Computer Applications (2025). I specialize in the MERN stack (MongoDB, Express, React, Node.js) and enjoy building scalable web applications.", // Placeholder: {{BIO_PARAGRAPH_1}}
    "My expertise spans from crafting responsive front-end interfaces to architecting secure back-end systems. I am a quick learner who thrives in collaborative environments, constantly exploring modern technologies like Next.js, Framer Motion, and Cloud Computing."
  ],
  skills: [
    "JavaScript", "React.js", "Express.js", "Node.js", "MongoDB", 
    "MySQL", "AWS", "Tailwind CSS", "GSAP", "Framer Motion", "Java", "C"
  ],
  projects: [
    {
      title: "Quick AI",
      description: "An AI platform which provide multiple AI feature. Also have payment gateway for Advance access",
      link: "https://ai-saas-nine-rosy.vercel.app/",
      tags: ["Postgress", "Express", "React", "Node","Clerk","Gemini API"]
    },
    {
      title: "Skill Swap",
      description: "A MERN stack platform enabling users to exchange skills through real-time messaging and reviews. Features intelligent skill matching and secure authentication.",
      link: "#",
      tags: ["MongoDB", "Express", "React", "Node"]
    },
    {
      title: "Spylt Clone",
      description: "A responsive clone of the Spylt website built with React.js and Tailwind CSS, featuring modern UI design and smooth animations.",
      link: "https://spylt-clone-tawny.vercel.app/",
      tags: ["React", "Tailwind CSS"]
    },
    {
      title: "Weather API Project",
      description: "Dynamic weather application fetching real-time data, featuring location-based forecasts and responsive design.",
      link: "https://rahulmoharana.github.io/Weather-application/",
      tags: ["React", "API Integration"]
    },
    {
      title: "Crypto Place",
      description: "Crypto-focused platform providing detailed insights into digital tokens, real-time price data, and market capitalization.",
      link: "https://cryptoplace-alpha-one.vercel.app/",
      tags: ["React", "Data Visualization"]
    }
  ] as Project[], // Placeholder: {{PROJECTS_ARRAY}}
  experience: [
    {
      role: "Master of Computer Application",
      company: "Institute of Management and Information Technology",
      period: "Completed 2025",
      description: "Secured CGPA: 8.74. Focused on advanced software development and system architecture."
    },
    {
      role: "Bachelor of Computer Application",
      company: "DRIEMS School of Professional Studies",
      period: "2020 - 2023",
      description: "Secured CGPA: 7.51. Foundation in computer science principles and programming."
    }
  ] as Experience[] // Placeholder: {{EXPERIENCE_ARRAY}}
};