import React from 'react';
import { motion } from 'framer-motion';
import { CONTENT } from '../../data';
import { sectionReveal, projectHover, underlineHover } from '../../utils/animations';

const Projects: React.FC = () => {
  return (
    <motion.section 
      id="projects" 
      className="py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionReveal}
    >
      <div className="max-w-2xl">
        <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-12">02 — Selected Works</h2>
        
        <div className="space-y-16">
          {CONTENT.projects.map((project, idx) => (
            <motion.a 
              href={project.link}
              key={idx}
              className="block group cursor-pointer"
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              <div className="flex flex-col">
                <motion.div className="flex items-baseline justify-between mb-2">
                  <motion.h3 
                    variants={projectHover}
                    className="text-2xl md:text-3xl font-bold text-black"
                  >
                    {project.title}
                  </motion.h3>
                  <span className="text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Project ↗
                  </span>
                </motion.div>
                
                {/* Animated underline */}
                <motion.div 
                  variants={underlineHover}
                  className="w-full h-[1px] bg-black mb-4 origin-left"
                />

                <motion.div
                   variants={{
                     rest: { y: 0 },
                     hover: { y: -5, transition: { duration: 0.2 } }
                   }}
                >
                  <p className="text-gray-600 mb-3 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex gap-3 text-sm text-gray-400 font-mono">
                    {project.tags.map(tag => <span key={tag}>#{tag}</span>)}
                  </div>
                </motion.div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;