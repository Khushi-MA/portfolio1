import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import About from './components/About';
import Education from './components/Education';
import Socials from './components/Socials';
import Publications from './components/Publications';
import Skills from './components/Skills';
import Services from './components/Services';
import Beyond from './components/Beyond';
import './App.css';
import { Helmet } from "react-helmet";
import HoverTipBox from './components/HoverTipBox';

function MainContent({ handlePopupOpen, handlePopupClose }) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section id="home">
        <Home />
      </section>
      <section id="about" className="fade-in">
        <About />
      </section>
      <section id="projects" className="fade-in">
        <Projects onPopupOpen={handlePopupOpen} onPopupClose={handlePopupClose} />
      </section>
      <section id="experience" className="fade-in">
        <Experience />
      </section>
      <section id="publications" className="fade-in">
        <Publications onPopupOpen={handlePopupOpen} onPopupClose={handlePopupClose} />
      </section>
      <section id="certifications" className="fade-in">
        <Certifications />
      </section>
      <section id="skills" className="fade-in">
        <Skills />
      </section>
      {/* <section id="services" className="fade-in">
        <Services onPopupOpen={handlePopupOpen} onPopupClose={handlePopupClose} />
      </section> */}
      <section id="education" className="fade-in">
        <Education />
      </section>
      <section id="contact" className="fade-in">
        <Contact />
      </section>
      <section id='socials' className="fade-in">
        <Socials />
      </section>
      <HoverTipBox />
    </>
  );
}

function App() {
  const [isPopupActive, setIsPopupActive] = useState(false);

  const handlePopupOpen = () => setIsPopupActive(true);
  const handlePopupClose = () => setIsPopupActive(false);

  return (
    <Router basename="/portfolio1">
      <div className={`App ${isPopupActive ? 'popup-active' : ''}`}>
        <Helmet>
          <link rel="icon" type="image/png" href="logo/logo.png" />
        </Helmet>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainContent handlePopupOpen={handlePopupOpen} handlePopupClose={handlePopupClose} />} />
          <Route path="/beyond" element={<Beyond />} />
          <Route path="*" element={<MainContent handlePopupOpen={handlePopupOpen} handlePopupClose={handlePopupClose} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
