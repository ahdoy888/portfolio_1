import React from 'react';
import Header from './Header/Header';
import Projects from './Projects/Projects';
import About from './About/About';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

function Landing() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default Landing;
