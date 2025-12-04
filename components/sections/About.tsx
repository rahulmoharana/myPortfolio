import React from 'react';
import { motion } from 'framer-motion';
import { CONTENT } from '../../data';
import { sectionReveal } from '../../utils/animations';

const About: React.FC = () => {
  return (
    <motion.section 
      id="about" 
      className="py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionReveal}
    >
      <div className="max-w-2xl">
        <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-12">01 — About</h2>
        
        <div className="space-y-8 text-lg md:text-xl leading-relaxed text-gray-800">
          {CONTENT.bio.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-sm font-bold uppercase tracking-wide mb-6">Technologies</h3>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {CONTENT.skills.map((skill, idx) => (
              <span key={idx} className="text-gray-600 border border-gray-200 px-3 py-1 rounded-full text-sm">
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