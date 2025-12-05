import React from 'react';
import { motion } from 'framer-motion';
import { CONTENT } from '../../data';
import { sectionReveal } from '../../utils/animations';

const Contact: React.FC = () => {
  return (
    <motion.section 
      id="contact" 
      className="section-wrapper contact-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionReveal}
    >
      <div className="content-max-width">
        <h2 className="section-label">04 — What's Next?</h2>
        
        <h3 className="contact-headline">
          Let's work together.
        </h3>
        
        <p className="contact-text">
          Currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <a 
          href={`mailto:${CONTENT.email}`}
          className="btn-outline"
        >
          Say Hello
        </a>

        <div className="footer">
          <div className="copyright">
            &copy; {new Date().getFullYear()} {CONTENT.name}
          </div>
          
          <div className="social-links">
            {Object.entries(CONTENT.social).map(([platform, link]) => (
              <a 
                key={platform}
                href={link}
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
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