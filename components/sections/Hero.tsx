import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { CONTENT } from '../../data';
import { staggerContainer, fadeInUp } from '../../utils/animations';

// Lazy load the 3D component
const HeroShape = lazy(() => import('../3d/HeroShape'));

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-20 pb-20 overflow-hidden">
      {/* 3D Background - Lazy loaded */}
      <Suspense fallback={<div className="absolute right-0 top-0 w-1/2 h-full" />}>
        <HeroShape />
      </Suspense>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="z-10 w-full max-w-2xl"
      >
        <motion.h1 
          variants={fadeInUp} 
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
        >
          {CONTENT.name}
        </motion.h1>

        <motion.h2 
          variants={fadeInUp}
          className="text-xl md:text-2xl font-medium text-gray-600 mb-8"
        >
          {CONTENT.title}
        </motion.h2>

        <motion.p 
          variants={fadeInUp}
          className="text-lg md:text-xl leading-relaxed text-gray-800 mb-12 max-w-lg"
        >
          {CONTENT.tagline}
        </motion.p>

        <motion.div variants={fadeInUp} className="flex gap-6 items-center">
          <a 
            href="#projects" 
            onClick={(e) => handleScroll(e, 'projects')}
            className="group relative inline-flex items-center justify-center px-0 py-2 text-lg font-medium text-black transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 rounded-sm"
          >
            <span className="mr-2">View Work</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            {/* Underline expanding from left to right */}
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black origin-left transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
          </a>
          
          <a 
            href="#contact" 
            onClick={(e) => handleScroll(e, 'contact')}
            className="text-gray-500 hover:text-black transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 rounded-sm"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;