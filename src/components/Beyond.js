import React, { useEffect } from 'react';
import './Beyond.css';
import Socials from './Socials';
import Books from './Books';
import HoverTipBox from './HoverTipBox';

function Beyond() {
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
    <div className="beyond-page">
      <section id="books" className="section fade-in">
        <Books />
      </section>
      <section id='socials'>
        <Socials />
      </section>
      <HoverTipBox />
    </div>
  );
}

export default Beyond;
