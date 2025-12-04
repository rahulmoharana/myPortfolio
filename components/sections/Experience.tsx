import React from 'react';
import { motion } from 'framer-motion';
import { CONTENT } from '../../data';
import { sectionReveal } from '../../utils/animations';

const Experience: React.FC = () => {
  return (
    <motion.section 
      id="experience" 
      className="py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionReveal}
    >
      <div className="max-w-2xl">
        <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-12">03 — Experience & Education</h2>
        
        <div className="border-l-2 border-gray-100 pl-8 space-y-12">
          {CONTENT.experience.map((exp, idx) => (
            <div key={idx} className="relative">
              {/* Timeline dot */}
              <span className="absolute -left-[39px] top-2 w-3 h-3 rounded-full bg-gray-200 border-2 border-white"></span>
              
              <h3 className="text-xl font-bold text-black">{exp.role}</h3>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-gray-500 mb-4 text-sm mt-1">
                <span>{exp.company}</span>
                <span className="hidden sm:block">•</span>
                <span className="font-mono">{exp.period}</span>
              </div>
              <p className="text-gray-600 leading-relaxed max-w-lg">
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