import React from 'react';
import { motion } from 'framer-motion';
import { CONTENT } from '../../data';
import { sectionReveal } from '../../utils/animations';

const Contact: React.FC = () => {
  return (
    <motion.section 
      id="contact" 
      className="py-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionReveal}
    >
      <div className="max-w-2xl">
        <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-12">04 — What's Next?</h2>
        
        <h3 className="text-4xl md:text-5xl font-bold mb-8">
          Let's work together.
        </h3>
        
        <p className="text-xl text-gray-600 mb-12 max-w-lg">
          Currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <a 
          href={`mailto:${CONTENT.email}`}
          className="inline-block border-2 border-black px-8 py-4 text-lg font-bold hover:bg-black hover:text-white transition-colors duration-300"
        >
          Say Hello
        </a>

        <div className="mt-24 pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} {CONTENT.name}
          </div>
          
          <div className="flex gap-6">
            {Object.entries(CONTENT.social).map(([platform, link]) => (
              <a 
                key={platform}
                href={link}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm font-medium uppercase tracking-widest hover:line-through decoration-black decoration-2"
              >
                {platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;