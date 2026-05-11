import React, { useState } from 'react';
import './Experience.css';
import Popup from './Popup';

const Experience = ({ onPopupOpen, onPopupClose }) => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  const experiences = [
    {
      company: 'Haegl Technologies Pvt. Ltd., Hubballi',
      logo: `${process.env.PUBLIC_URL}/logo/logo-haegl-white.png`, // Add logo path if available, else leave empty
      location: 'Hubballi, Karnataka, India',
      // images: [`${process.env.PUBLIC_URL}/p (4).png`, `${process.env.PUBLIC_URL}/p (2).png`, `${process.env.PUBLIC_URL}/p (3).png`],
      roles: [
        {
          title: 'Research Assistant',
          duration: 'June 2025 - Present',
          // type: 'Hybrid',
          oneline: 'Working on research projects involving web development and data analysis.',
          description: (
            <>
              <ul>
                <li>Represented companies</li>
                <li>Did PPT&apos;s</li>
                <li>Made research papers</li>
              </ul>
            </>
          ),
          skills: ['Django', 'SQLite', 'Web Development', 'Testing', 'Debugging', 'Research']
        },
        {
          title: 'SDE Intern',
          duration: 'Jan 2025 - May 2025',
          type: 'Internship',
          oneline: 'Developed a hospital management website and conducted research on gait analysis and joint angle assessment.',
          description: (
            <>
              <ul>
                <li>Developed a hospital management website (Django, SQLite) for therapists and cerebral palsy patients to track progress and manage data.</li>
                <li>Researched center of pressure and gait analysis (pressure mat) and joint angle assessment (camera-based evaluation), testing models on dummy data with plans for real-world validation.</li>
                <li>Assisted in testing and debugging 3+ previously developed websites</li>
              </ul>
            </>
          ),
          skills: ['Django', 'SQLite', 'Web Development', 'Testing', 'Debugging', 'Research']
        }
      ]
    },
    {
      company: 'Nature Conservation Foundation - Bird Count India',
      logo: `${process.env.PUBLIC_URL}/logo/logo-ncf-ful-white.png`,
      location: '',
      images: [], // Add image paths if available, else leave empty
      roles: [
        {
          title: 'Data Analysis Intern',
          duration: 'June 2025 – August 2025',
          type: 'Internship',
          oneline: 'Analyzed and visualized eBird challenge data using Python and Excel, delivering insights to NCF officials that guided strategies to boost citizen science participation.',
          description: (
            <>
              <ul>
                <li>Extracted and consolidated eBird challenge data using Python (BeautifulSoup) and web scraping.</li>
                <li>Cleaned, organized, and categorized large citizen science datasets with Pandas and Excel.</li>
                <li>Built visualizations (Matplotlib, Seaborn) to highlight trends in participation and engagement.</li>
                <li>Presented findings to NCF officials, guiding strategies to boost citizen science participation.</li>
              </ul>
            </>
          ),
          skills: ['Python', 'BeautifulSoup', 'Pandas', 'Excel', 'Matplotlib', 'Seaborn', 'Data Analysis']
        }
      ]
    },
    {
      company: 'KLETech-Center of Excellence in Visual Intelligence (CEVI)',
      logo: `${process.env.PUBLIC_URL}/logo/logo-cevi-white.png`,
      location: 'Hubballi, Karnataka, India',
      images: [`${process.env.PUBLIC_URL}/p (1).png`, `${process.env.PUBLIC_URL}/p (2).png`, `${process.env.PUBLIC_URL}/p (3).png`],
      roles: [
        {
          title: 'Project Intern',
          duration: 'Jul 2024 - Present · 7 mos',
          // type: 'Internship · Hybrid',
          oneline: 'Working on projects involving machine learning and deep learning applications.',
          description: 'Working on projects involving machine learning and deep learning applications.',
          skills: ['Machine Learning', 'Deep Learning']
        }
      ]
    },
    {
      company: 'Make in BVB (MiB)',
      logo: `${process.env.PUBLIC_URL}/logo/logo-mib-white.png`,
      location: 'KLE Technological University, Hubballi',
      images: [`${process.env.PUBLIC_URL}/mib0.jpg`, `${process.env.PUBLIC_URL}/mib1.jpg`, `${process.env.PUBLIC_URL}/mib2.jpg`, `${process.env.PUBLIC_URL}/mib3.jpg`, `${process.env.PUBLIC_URL}/mib4.jpg`],
      links: [
      {
        label: 'Click for detailed journey',        
        url: '/makeinbvb#/makeinbvb'
      }
    ],
      roles: [
        {
          title: 'Student President',
          duration: 'Dec 2023 - Present · 1 yr 2 mos',
          // type: 'Full-time · Hybrid',
          oneline: 'Leading the Make in BVB club as Student President',
description: (
            <>
              <ul>
                <li>Team Leadership: Directed a multi-functional team of 50 members, overseeing task delegation & performance tracking.</li>
                <li>Event Lifecycle Management: Spearheaded flagship events (Like PUPA 2024) for 300+ participants, managing the entire process from planning and budgeting to successful execution.</li>
                <li>Conflict Resolution: Developed strong interpersonal skills by resolving internal team disagreements and facilitating constructive discussions to maintain a collaborative work environment.</li>
              </ul>

              
            </>
          ),
          skills: ['Leadership', 'Budgeting', 'Content Writing', 'Blogging']
        },
        {
          title: 'Content Creator + part of Media and Publicity Team',
          duration: 'Feb 2022 - Sep 2024 · 2 yrs 8 mos',
          // type: 'Part-time',
          oneline: 'Created content for the Make in BVB social media.',
          description: (
            <>
              <ul>
                <li>Worked on Club Branding: Crafting compelling narratives to increase student engagement and "hire" new members into the club culture.</li>
                <li>Participant & Stakeholder Communication: Managed continuous engagement with participants over a three-month timeline for PUPA 2023 via WhatsApp and email, addressing queries, providing updates, and ensuring smooth coordination with staff, teachers, and other colleges</li>
              </ul>
            </>
          ),
          skills: ['Public speaking', 'Presentation', 'Content Writing', 'Blogging']
        }
      ]
    }
  ];

  const handleCardClick = (experience) => {
    setSelectedExperience(experience);
    onPopupOpen && onPopupOpen(); // Notify popup is active
  };

  const handleClosePopup = () => {
    setSelectedExperience(null);
    onPopupClose && onPopupClose(); // Notify popup is inactive
  };

  return (
    <section className="experience-section">
      <h1 className="experience-title">Experience</h1>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card" onClick={() => handleCardClick(exp)}>
            <div className="experience-header">
              {exp.logo && <img src={exp.logo} alt={`${exp.company} logo`} className="experience-logo" />}
              <div>
                <h3 className="experience-company">{exp.company}</h3>
                {exp.location && <p className="experience-location">{exp.location}</p>}
              </div>
            </div>
            <div className="project-list-links">
              
              
              {exp.links?.map((link, idx) => (
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
            <div className="experience-roles">
              {exp.roles.map((role, roleIndex) => (
                <div key={roleIndex} className="experience-role">
                  <h4 className="role-title">{role.title}</h4>
                  <p className="role-details">
                    <span>{role.duration}</span> · <span>{role.type}</span>
                  </p>
                  <p className="role-oneline">{role.oneline}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {selectedExperience && (
        <Popup
          title={selectedExperience.company}
          subtitle="Experience Details"
          logo={selectedExperience.logo}
          images={selectedExperience.images}
          description={selectedExperience.roles.map((role, index) => (
            <div key={index}>
              <h3>{role.title}</h3>
              <p>
                <span>{role.duration}</span> · <span>{role.type}</span>
              </p>
              <p>Skills: {role.skills.join(' · ')}</p>
              <div>{role.description}</div>
            </div>
          ))}
          links={selectedExperience.links}
          isOpen={!!selectedExperience}
          onClose={handleClosePopup}
        />
      )}
    </section>
  );
};

export default Experience;
