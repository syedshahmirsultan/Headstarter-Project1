import React from 'react';
import Hero from './Components/Hero';
import About from './Components/About';
import Skills from './Components/Skills';
import Experience from './Components/Experience';

const Home = () => {
  return (
  <main className="min-h-screen w-full bg-gradient-to-r from-black  to-gray-900">
      <Hero/>
      <About/>
      <Skills/>
      <Experience/>
    </main>
  );
}

export default Home;
