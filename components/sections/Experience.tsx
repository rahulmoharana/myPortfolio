import React from 'react';
import { motion } from 'framer-motion';
import { CONTENT } from '../../data';
import { sectionReveal } from '../../utils/animations';

const Experience: React.FC = () => {
  return (
    <motion.section 
      id="experience" 
      className="section-wrapper"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionReveal}
    >
      <div className="content-max-width">
        <h2 className="section-label">03 — Experience & Education</h2>
        
        <div className="experience-list">
          {CONTENT.experience.map((exp, idx) => (
            <div key={idx} className="experience-item">
              {/* Timeline dot */}
              <span className="timeline-dot"></span>
              
              <h3 className="exp-role">{exp.role}</h3>
              <div className="exp-meta">
                <span>{exp.company}</span>
                <span className="hidden-sm separator-dot">•</span>
                <span className="exp-period">{exp.period}</span>
              </div>
              <p className="exp-desc">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;