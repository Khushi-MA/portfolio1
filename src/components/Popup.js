import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Popup.css';

const Popup = ({ title, subtitle, images, description, links = [], isOpen, onClose }) => {
  // Prevent background scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('popup-open');
    } else {
      document.body.style.overflow = '';
      document.body.classList.remove('popup-open');
    }
    return () => {
      document.body.style.overflow = '';
      document.body.classList.remove('popup-open');
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Render description based on its type
  const renderDescription = () => {
    if (typeof description === 'string') {
      return description.split('\n').map((line, idx) => (
        <React.Fragment key={idx}>
          {line}
          <br />
        </React.Fragment>
      ));
    }
    return description; // Assume it's JSX or other renderable content
  };

  const popupElement = (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <div className="popup-inner">
          <div className="popup-details">
            <h2 className="popup-title">{title}</h2>
                        <div className="project-list-links">
                {links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-list-link"
                >
                  {link.label}
                </a>
              ))}
            </div>
            {/* <h3 className="popup-subtitle">{subtitle}</h3> */}
            <div className="popup-description">{renderDescription()}</div>

          </div>
          <div className="popup-images">
            {images && images.map((image, index) => (
              <img 
                key={index} 
                src={image} 
                alt={`${title} - image ${index + 1}`} 
                className="popup-image"
              />
            ))}
          </div>
        </div>
        <button className="close-btn" onClick={onClose}>×</button>
      </div>
    </div>
  );

  return ReactDOM.createPortal(popupElement, document.body);
};

export default Popup;