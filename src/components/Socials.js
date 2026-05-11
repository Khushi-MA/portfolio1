import React, { useEffect } from 'react';
import feather from 'feather-icons';
import './Socials.css';

const Socials = () => {
  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <div className="footer-social">
      <a
        href="linkedin.com/in/khushi-appannavar"
        target="_blank"
        rel="noopener noreferrer"
        title="LinkedIn"
      >
        <i data-feather="linkedin"></i>
      </a>
      <a
        href="https://github.com/khushi-ma"
        target="_blank"
        rel="noopener noreferrer"
        title="GitHub"
      >
        <i data-feather="github"></i>
      </a>
      {/* <a
        href="https://www.instagram.com/khush_alright/"
        target="_blank"
        rel="noopener noreferrer"
        title="Instagram"
      >
        <i data-feather="instagram"></i>
      </a> */}
      <a
        href="https://orcid.org/0009-0000-0538-593X"
        target="_blank"
        rel="noopener noreferrer"
        title="ORCiD"
      >
        <span className="feather-id">iD</span>
      </a>
      <a
        href="https://scholar.google.com/citations?user=om0s84cAAAAJ"
        target="_blank"
        rel="noopener noreferrer"
        title="Google Scholar"
      >
        <i data-feather="book"></i>
      </a>
    </div>
  );
};

export default Socials;
