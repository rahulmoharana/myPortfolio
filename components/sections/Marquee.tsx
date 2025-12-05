import React from 'react';
import { CONTENT } from '../../data';

const Marquee: React.FC = () => {
  // Duplicate list to create seamless loop
  const skills = [...CONTENT.skills, ...CONTENT.skills, ...CONTENT.skills];

  return (
    <div className="marquee-section">
      {/* Left Fade Gradient */}
      <div className="marquee-fade-left" />
      
      {/* Right Fade Gradient */}
      <div className="marquee-fade-right" />

      <div className="marquee-container">
        <div 
          className="marquee-content"
          aria-hidden="true"
        >
          {skills.map((skill, idx) => (
            <span 
              key={`${skill}-${idx}`} 
              className="marquee-item"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;