import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Roadmaps from './components/Roadmaps';
import Insights from './components/Insights';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Roadmaps />
        <Insights />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;