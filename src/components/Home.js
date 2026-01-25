import React, { useEffect, useState } from 'react';
import './Home.css';

const lines = [
  "Oh hey, I’m Khushi M Appannavar.",
  "Curious or just here by accident?",
  "Either way… scroll on. :)",
  "No magic trick here - just me and the work I’ve done.",
  "Well...since thou dost insist... prithee, indulge thine curiosity.",
  '"Beyond Work" is where I chronicle my fondness for books and sundry whimsical pursuits',
  "Go forth, then, and be gone."
];

const prompt = ">> ";
const typingSpeed = 40; // ms per character
const cursorBlinkSpeed = 500; // ms

function Home() {
  const [displayedLines, setDisplayedLines] = useState([lines[0], lines[1]]);
  const [currentLine, setCurrentLine] = useState(2);
  const [currentText, setCurrentText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentLine < lines.length) {
      let char = 0;
      const typeInterval = setInterval(() => {
        setCurrentText(lines[currentLine].slice(0, char + 1));
        char++;
        if (char > lines[currentLine].length) {
          clearInterval(typeInterval);
          setDisplayedLines((prev) => [...prev, lines[currentLine]]);
          setCurrentLine((prev) => prev + 1);
          setCurrentText("");
        }
      }, typingSpeed);
      return () => clearInterval(typeInterval);
    }
  }, [currentLine]);

  useEffect(() => {
    const blink = setInterval(() => setShowCursor((c) => !c), cursorBlinkSpeed);
    return () => clearInterval(blink);
  }, []);

  useEffect(() => {
    if (currentLine === lines.length) {
      const restartTimeout = setTimeout(() => {
        setDisplayedLines([lines[0], lines[1]]);
        setCurrentLine(2);
        setCurrentText("");
      }, 5000); // Restart after 5 seconds
      return () => clearTimeout(restartTimeout);
    }
  }, [currentLine]);

  useEffect(() => {
    const handleScroll = () => {
      const animationBox = document.querySelector('.animation');
      const homeSection = document.getElementById('home');
      
      // Add null checks
      if (!animationBox || !homeSection) return;
      
      const homeBounds = homeSection.getBoundingClientRect();

      if (homeBounds.top < window.innerHeight * 0.75 && homeBounds.bottom > window.innerHeight * 0.70) {
        animationBox.classList.remove('hidden'); // Fade in earlier
      } else {
        animationBox.classList.add('hidden'); // Fade out earlier
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home" id="home">
      {/* <div className="home-info">
        <div className="centered-container">
          <h1>Hi this is Khushi Appannavar</h1>
        </div> 
      </div> */}
      <div className='animation' style={{ fontFamily: "Consolas, monospace", background: "transparent" }}>
        {displayedLines.map((line, idx) => (
          <div key={idx}>
            <span style={{ color: "red" }}>{prompt}</span>
            <span style={{ color: "white" }}>{line}</span>
          </div>
        ))}
        {currentLine < lines.length && (
          <div>
            <span style={{ color: "red" }}>{prompt}</span>
            <span style={{ color: "white" }}>{currentText}</span>
            <span style={{ color: "white" }}>{showCursor ? "_" : " "}</span>
          </div>
        )}
        {currentLine === lines.length && (
          <div>
            <span style={{ color: "red" }}>{prompt}</span>
            <span style={{ color: "white" }}></span>
            <span style={{ color: "white" }}>{showCursor ? "_" : " "}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;