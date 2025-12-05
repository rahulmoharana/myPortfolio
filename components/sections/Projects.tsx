import React from 'react';
import { motion } from 'framer-motion';
import { CONTENT } from '../../data';
import { sectionReveal, projectHover, underlineHover } from '../../utils/animations';

const Projects: React.FC = () => {
  return (
    <motion.section 
      id="projects" 
      className="section-wrapper"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionReveal}
    >
      <div className="content-max-width">
        <h2 className="section-label">02 — Selected Works</h2>
        
        <div className="projects-list">
          {CONTENT.projects.map((project, idx) => (
            <motion.a 
              href={project.link}
              key={idx}
              className="project-item group"
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <motion.div className="project-header">
                  <motion.h3 
                    variants={projectHover}
                    className="project-title"
                  >
                    {project.title}
                  </motion.h3>
                  <span className="project-link-text">
                    View Project ↗
                  </span>
                </motion.div>
                
                {/* Animated underline */}
                <motion.div 
                  variants={underlineHover}
                  className="separator"
                />

                <motion.div
                   variants={{
                     rest: { y: 0 },
                     hover: { y: -5, transition: { duration: 0.2 } }
                   }}
                >
                  <p className="project-desc">
                    {project.description}
                  </p>
                  <div className="project-tags">
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