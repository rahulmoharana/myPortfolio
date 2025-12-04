import React from 'react';
import { CONTENT } from '../../data';

const Marquee: React.FC = () => {
  // Duplicate list to create seamless loop
  const skills = [...CONTENT.skills, ...CONTENT.skills, ...CONTENT.skills];

  return (
    <div className="w-full py-12 overflow-hidden bg-white relative">
      {/* Left Fade Gradient - blending with white bg */}
      <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      
      {/* Right Fade Gradient - blending with white bg */}
      <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className="relative w-full max-w-full overflow-hidden">
        <div 
          className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused]"
          aria-hidden="true"
        >
          {skills.map((skill, idx) => (
            <span 
              key={`${skill}-${idx}`} 
              className="mx-8 text-4xl font-bold text-gray-800 uppercase select-none opacity-80"
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