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
    <section id="hero" className="hero-section">
      {/* 3D Background - Lazy loaded */}
      <Suspense fallback={<div className="bg-shape-container" />}>
        <HeroShape />
      </Suspense>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="hero-content"
      >
        <motion.h1 
          variants={fadeInUp} 
          className="hero-title"
          whileHover={{ scale: 1.02, x: 10 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          {CONTENT.name}
        </motion.h1>

        <div style={{ marginBottom: '2rem' }}>
          <motion.h2 
            variants={fadeInUp}
            className="hero-subtitle"
            whileHover={{ x: 5, color: "#0a0a0a" }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            {CONTENT.title}
          </motion.h2>
        </div>

        <motion.p 
          variants={fadeInUp}
          className="hero-tagline"
        >
          {CONTENT.tagline}
        </motion.p>

        <motion.div variants={fadeInUp} className="hero-actions">
          <a 
            href="#projects" 
            onClick={(e) => handleScroll(e, 'projects')}
            className="btn-link group"
          >
            <span style={{ marginRight: '0.5rem' }}>View Work</span>
            <span className="arrow">→</span>
            {/* Underline expanding from left to right */}
            <span className="underline"></span>
          </a>
          
          <a 
            href="#contact" 
            onClick={(e) => handleScroll(e, 'contact')}
            className="btn-secondary"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;