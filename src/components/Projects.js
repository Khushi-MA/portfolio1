import React, { useState } from 'react';
import './Projects.css';
import Popup from './Popup';

const projects = [
  {
    id: 2,
    title: 'Food Distribution System',
    subtitle: 'Web Development · Spring Boot · React.js · SQL',
    image: `${process.env.PUBLIC_URL}/p (4).png`,
    // images: [`${process.env.PUBLIC_URL}/p (4).png`, `${process.env.PUBLIC_URL}/p (2).png`, `${process.env.PUBLIC_URL}/p (3).png`, `${process.env.PUBLIC_URL}/p (4).png`, `${process.env.PUBLIC_URL}/p (2).png`],
    description: `Built a website to connect surplus food holders (restaurants and individuals) with NGOs.
• Tools & Technologies: SpringBoot, SQL, ReactJs
• Role: Designed and implemented the database schema and developed RESTful APIs using Java for data handling. Also responsible for designing the user interface with React.
• Skills: Java · React.js · SQL`,
    links: [
      {
        label: 'GitHub Repository',
        url: 'https://github.com/Khushi-MA/javaFDS'
      },
      {
        label: 'Project section',
        url: 'https://www.linkedin.com/in/khushi-appannavar/details/projects/'
      }
    ]
  },
  {
    id: 3,
    title: 'IPL Ticket Booking using NFT Tokens',
    subtitle: 'Blockchain · NFTs · MetaMask · Ethereum · Documentation',
    image: `${process.env.PUBLIC_URL}/p (2).png`,
    // images: [`${process.env.PUBLIC_URL}/p (2).png`],
    description: `Developed a secure, user-friendly NFT marketplace for buying IPL tickets.
• Tools & Technologies: Ethereum, NFT (ERC-127), Ganache, Metamask, React JS
• Role: Front-end development, research paper writing. Developed the website's front end, ensured seamless interactions, and documented the project for a research paper.
• Skills: Blockchain · Documentation · Non-Fungible Tokens (NFTs) · MetaMask · Ethereum`,
    links: [
      {
        label: 'GitHub Repository',
        url: 'https://github.com/AnanyaDeshpande/NFT'
      },
      {
        label: 'LinkedIn Post',
        url: 'https://www.linkedin.com/posts/khushi-appannavar_research-blockchain-nfts-activity-7271823744023576576-Oe9I?utm_source=share&utm_medium=member_desktop&rcm=ACoAADnqyrkBwKGBo_j7B5Ge0YR1b7o-8buion0',
        // image: 'icon/linkedin.png'
      },
      {
        label: 'IEEE',
        url: 'https://doi.org/10.1109/ICEI64305.2024.10912206',
        // image: 'icon/ieee.png'
      },
      // {
      //   label: 'Project section',
      //   url: 'https://www.linkedin.com/in/khushi-appannavar/details/projects/'
      // }
    ]
  },
  {
    id: 4,
    title: 'Multilingual Text Classification using IndicCorp Dataset',
    subtitle: 'ML · NLP · DNN · Unsupervised Learning',
    image: `${process.env.PUBLIC_URL}/p (3).png`,
    // images: [],
    description: `To detect languages in a multilingual environment, a Multinomial Naive Bayes classifier is applied to the IndicCorp dataset, achieving 73.37% accuracy in identifying Indian languages like Hindi, Bengali, Tamil, etc.
• Skills: Natural Language Processing (NLP) · Unsupervised Learning · Deep Neural Networks (DNN)`,
    links: [
      {
        label: 'GitHub Repository',
        url: 'https://github.com/NehaDhirendraSirur/Multilingual_Text_Classification'
      },
      // {
      //   label: 'Project section',
      //   url: 'https://www.linkedin.com/in/khushi-appannavar/details/projects/'
      // }
    ]
  },
  {
    id: 5,
    title: 'Twitter Sentiment Analysis',
    subtitle: 'NLP · LLM · DNN · ML · BERT · Sentiment Analysis',
    image: `${process.env.PUBLIC_URL}/p (1).png`,
    // images: [`${process.env.PUBLIC_URL}/p (1).png`],
    description: `Developed a sentiment analysis model utilizing TF-IDF and DistilBERT to accurately classify text-based content into positive or negative sentiments.
• Tools & Technologies: Python, HuggingFace Twitter Dataset, TF-IDF + Logical Regression/Linear SVC, DistilBERT
• Role: Managed data preprocessing and evaluating model performance metrics
• Skills: Natural Language Processing (NLP) · BERT (Language Model) · Large Language Models (LLM) · Deep Neural Networks (DNN) · Machine Learning · Sentiment Analysis`,
    links: [
      {
        label: 'Springer',
        url: 'https://link.springer.com/chapter/10.1007/978-981-96-3652-5_32'
      },
      {
        label: 'GitHub Repository',
        url: 'https://github.com/Risheek-H/Sentiment-Analysis'
      },
      {
        label: 'LinkedIn Post',
        url: 'https://www.linkedin.com/posts/khushi-appannavar_research-machinelearning-deeplearning-activity-7246243066729115648-wSHY?utm_source=share&utm_medium=member_desktop&rcm=ACoAADnqyrkBwKGBo_j7B5Ge0YR1b7o-8buion0'
      },
      // {
      //   label: 'Project section',
      //   url: 'https://www.linkedin.com/in/khushi-appannavar/details/projects/'
      // }
    ]
  },
//   {
//     id: 6,
//     title: 'YogaGenZee (Yoga Robot)',
//     subtitle: 'Hardware & Embedded Project',
//     image: 'p (6).png',
//     images: ['p (6).png'],
//     description: `Built a Yoga-Guru robot that can perform asanas, give instructions, and interact with users using sensors and a speaker.
// • Tools & Technologies: Speaker, DF-mini, Arduino, other small I/O devices
// • Role: Designed and planned the model setup, managed circuitry and servo motors, set up synchronized speaker system.
// • Objective: To build a Yoga-Guru that can perform at least two asanas, ardhanaukasana and purnanaukasana, with interactive features.
// • Skills: Presentation Skills · Microsoft PowerPoint · Project Planning · Communication · Arduino IDE · Microsoft Word`,
//     links: [
//             {
//         label: 'GitHub Repository',
//         url: 'https://github.com/J-Division-2021-2022-Even/Repo-09/wiki'
//       },
//       {
//         label: 'LinkedIn Post',
//         url: 'https://www.linkedin.com/posts/khushi-appannavar_robot-asanas-ardhanaukasana-activity-6985245263812595713-6WfE?utm_source=share&utm_medium=member_desktop&rcm=ACoAADnqyrkBwKGBo_j7B5Ge0YR1b7o-8buion0'
//       },
//       // {
//       //   label: 'Project section',
//       //   url: 'https://www.linkedin.com/in/khushi-appannavar/details/projects/'
//       // }

//     ]
//   },
  // {
//     id: 1,
//     title: 'Food Distribution System',
//     subtitle: 'Web Development · Spring Boot · React.js · SQL',
//     image: 'p (4).png',
//     images: ['p (4).png', 'p (2).png', 'p (3).png'],
//     description: `Built a website to connect surplus food holders (restaurants and individuals) with NGOs.
// • Tools & Technologies: SpringBoot, SQL, ReactJs
// • Role: Designed and implemented the database schema and developed RESTful APIs using Java for data handling. Also responsible for designing the user interface with React.
// • Skills: Spring Boot · React.js · SQL`,
//     links: [
//       {
//         label: 'GitHub Repository',
//         url: 'https://github.com/Khushi-MA/javaFDS'
//       },
//       // {
//       //   label: 'Project section',
//       //   url: 'https://www.linkedin.com/in/khushi-appannavar/details/projects/'
//       // }
//     ]
//   }
];

const Projects = ({ onPopupOpen, onPopupClose }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (project) => {
    setSelectedProject(project);
    onPopupOpen && onPopupOpen(); // Notify popup is active
  };

  const handleClosePopup = () => {
    setSelectedProject(null);
    onPopupClose && onPopupClose(); // Notify popup is inactive
  };

  return (
    <section className="projects-section">
      <h1 className="project-title">Projects</h1>
      <div className="info-note">
        <span className="info-icon">i</span>
        <span className="info-text">
          {/* Click on a project card to read more about it.<br /> */}
          <strong className='tip-header'>Icon information:</strong><br />
          <img src={`${process.env.PUBLIC_URL}/icon/github.png`} alt="GitHub Icon" className="link-image-alternate" /> - GitHub Repository<br />
          <img src={`${process.env.PUBLIC_URL}/icon/linkedin.png`} alt="LinkedIn Icon" className="link-image-alternate" /> - LinkedIn Post<br />
        </span>
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="project-card"
            onClick={() => handleCardClick(project)}
            role="button"
            tabIndex={0}
          >
            {/* <img src={project.image} alt={project.title} className="project-image" /> */}
            <h3 className="project-title">{project.title}</h3>
            <p className="project-list-subtitle">{project.subtitle}</p>
            <p className="project-description">
              {project.description}
              <span className="know-more">Know More</span>
            </p>
            <div className="project-list-links">
              {project.links?.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-list-link"
                  onClick={e => e.stopPropagation()}
                  title={link.label}
                >
                  {link.label === 'GitHub Repository' ? (
                    // <img
                    //   src="icon/github.png"
                    //   alt={link.label}
                    //   className='link-image-alternate'
                    // />
                    <i data-feather="github" alt={link.label} className="link-image-alternate"></i>
                  ) : link.label === 'LinkedIn Post' ? (
                    <i data-feather="linkedin" alt={link.label} className="link-image-alternate"></i>

                  ) : link.image ? (
                    <img
                      src={link.image}
                      alt={link.label}
                      className='link-image-alternate'
                    />
                  ) : (
                    link.label
                  )}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <Popup
          title={selectedProject.title}
          subtitle={selectedProject.subtitle}
          description={selectedProject.description}
          links={selectedProject.links}
          isOpen={!!selectedProject}
          onClose={handleClosePopup}
        />
      )}
    </section>
  );
};

export default Projects;


