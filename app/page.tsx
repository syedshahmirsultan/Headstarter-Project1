import React from 'react';
import Hero from './Components/Hero';
import About from './Components/About';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import GoogleAnalytics from './Components/GoogleAnalytics';



const Home = () => {
  return (
  <main className="min-h-screen w-full  bg-gradient-to-r from-black  to-gray-900">
    <GoogleAnalytics/>
      <Hero/>
      <About/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Contact/>
    </main>
  );
}

export default Home;
