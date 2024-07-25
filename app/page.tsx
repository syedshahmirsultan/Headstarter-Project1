import React from 'react';
import Hero from './Components/Hero';
import About from './Components/About';

const Home = () => {
  return (
  <main className="min-h-screen w-full bg-gradient-to-r from-black  to-gray-900">
      <Hero/>
      <About/>
    </main>
  );
}

export default Home;
