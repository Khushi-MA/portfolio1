import React, { useEffect, useRef, useState } from 'react';
import feather from 'feather-icons';
import './About.css';

function ParticleBackground() {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: null, y: null });
  const size = useRef({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    let width = size.current.width = window.innerWidth;
    let height = size.current.height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const particles = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 2 + 1,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
        alpha: Math.random() * 0.5 + 0.3
      });
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => {
        if (mouse.current.x !== null && mouse.current.y !== null) {
          const distX = mouse.current.x - p.x;
          const distY = mouse.current.y - p.y;
          const dist = Math.sqrt(distX * distX + distY * distY);
          if (dist < 100) {
            const angle = Math.atan2(distY, distX);
            const force = (100 - dist) / 100;
            p.x += Math.cos(angle) * force * 2;
            p.y += Math.sin(angle) * force * 2;
          }
        }

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
        ctx.fillStyle = '#fff';
        ctx.shadowColor = '#fff';
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.restore();

        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > width) p.dx *= -1;
        if (p.y < 0 || p.y > height) p.dy *= -1;
      });
      animationId = requestAnimationFrame(draw);
    }

    draw();

    function handleMouseMove(e) {
      const rect = canvas.getBoundingClientRect();
      if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      ) {
        mouse.current.x = e.clientX - rect.left;
        mouse.current.y = e.clientY - rect.top;
      } else {
        mouse.current.x = null;
        mouse.current.y = null;
      }
    }
    function handleMouseLeave() {
      mouse.current.x = null;
      mouse.current.y = null;
    }
    function handleResize() {
      width = size.current.width = window.innerWidth;
      height = size.current.height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="particle-bg"
      width={size.current.width}
      height={size.current.height}
      aria-hidden="true"
      tabIndex={-1}
    />
  );
}

function About() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 650);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 650);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <div className="about-section">
      <ParticleBackground />
      <div className="about-content">
        <div className="about-info">
          <h1>Khushi M Appannavar</h1>
          <p style={{ textAlign: "justify" }}>
            Hello! I'm Khushi. :) I'm a Computer Science student at KLE Technological University, Hubballi. <br /> (currently in 7th semester) <br />
            I’m an eager learner working towards improving myself. I’m passionate about coding and I’m always looking for opportunities to learn new things. I’m a quick learner and
            I’m keen to explore new ideas/hobbies.<br />
            <a
              href={`${process.env.PUBLIC_URL}/docs/Khushi_M_Appannavar_Resume.pdf`}
              download
              className="resume-download-btn highlight-colour1"
            >
              Resume
              <i data-feather="file-text" className="resume-icon"></i>
            </a>
            <a
              href="https://linkedin.com/in/khushi-appannavar"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-btn highlight-colour1"
            >
              LinkedIn
              <i data-feather="linkedin" className="resume-icon"></i>
            </a>
          </p>
        </div>
        <div className="about-photo-wrapper">
          <img 
            src={isSmallScreen ? `${process.env.PUBLIC_URL}/rename iiii.png` : `${process.env.PUBLIC_URL}/rename ii.jpg`} 
            alt="There should've been my photo here!!" 
            className="about-photo" 
            onError={e => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="photo-alt" style={{display: 'none'}}>There should've been my photo here!!</div>
        </div>
      </div>
    </div>
  );
}

export default About;