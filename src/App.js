import React from 'react';
import MyNavbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import References from './components/References';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <MyNavbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <References />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
