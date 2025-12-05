import React from 'react';
import { motion } from 'framer-motion';
import { CONTENT } from '../../data';
import { sectionReveal } from '../../utils/animations';

const About: React.FC = () => {
  return (
    <motion.section 
      id="about" 
      className="section-wrapper"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionReveal}
    >
      <div className="content-max-width">
        <h2 className="section-label">01 — About</h2>
        
        <div className="about-text">
          {CONTENT.bio.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        <div className="skills-wrapper">
          <h3 className="skills-title">Technologies</h3>
          <div className="skills-grid">
            {CONTENT.skills.map((skill, idx) => (
              <span key={idx} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;