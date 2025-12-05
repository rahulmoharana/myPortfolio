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
    <div className="app-container">
      {/* Utility Components */}
      <ScrollProgress />

      {/* Navigation / Header Logo */}
      <header className="site-header">
         <div className="header-content">
           <span className="logo">RM.</span>
         </div>
      </header>

      {/* Main Layout */}
      <main className="main-layout">
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