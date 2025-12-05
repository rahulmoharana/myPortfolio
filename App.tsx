import React, { Suspense } from 'react';
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
      <ScrollProgress />

      {/* Navigation / Header Logo (Fixed) */}
      <header className="fixed top-0 left-0 w-full py-6 px-6 md:px-12 z-40 mix-blend-difference text-white pointer-events-none">
         <div className="max-w-5xl mx-auto w-full">
           <span className="font-bold text-xl tracking-tighter pointer-events-auto cursor-pointer">RM.</span>
         </div>
      </header>

      {/* Main Layout */}
      <main className="mx-auto max-w-[90%] md:max-w-5xl px-4 md:px-6 relative">
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