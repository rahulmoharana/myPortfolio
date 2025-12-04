import React, { Suspense } from 'react';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Marquee from './components/sections/Marquee';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="bg-white min-h-screen selection:bg-black selection:text-white">
      {/* Utility Components */}
      <CustomCursor />
      <ScrollProgress />

      {/* Main Layout - Single Column */}
      <main className="mx-auto max-w-[90%] md:max-w-3xl px-4 md:px-0 relative">
        
        {/* Navigation / Header Logo (Fixed or Absolute) */}
        <header className="absolute top-0 left-0 py-8 z-40 mix-blend-difference text-white">
           <span className="font-bold text-lg tracking-tighter">RM.</span>
        </header>

        <Hero />
        <About />
        <Marquee />
        <Projects />
        <Experience />
        <Contact />
        
      </main>
    </div>
  );
}

export default App;