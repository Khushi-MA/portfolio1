import React, { useRef, useEffect, useState } from 'react';
import './Certifications.css';

const certifications = [
  {
    id: 1,
    title: 'Indian Sign Language (Intermediate)',
    image: `${process.env.PUBLIC_URL}/certifications/Interprix intermidiate.jpg`,

    skills: 'Indian Sign Language · ISL',
    link: 'https://www.linkedin.com/in/khushi-appannavar/details/certifications/1793366/multiple-media-viewer?profileId=ACoAADnqyrkBwKGBo_j7B5Ge0YR1b7o-8buion0&treasuryMediaId=1731994794254&type=DOCUMENT&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BhqBqmG75QcqbGtdTLPQc5g%3D%3D'
  },
  {
    id: 2,
    title: 'Indian Sign Language (Beginner)',
    image: `${process.env.PUBLIC_URL}/certifications/Interprix beginner.jpg`,
    skills: 'Indian Sign Language · ISL',
    link: 'https://www.linkedin.com/in/khushi-appannavar/details/certifications/1793366/multiple-media-viewer?profileId=ACoAADnqyrkBwKGBo_j7B5Ge0YR1b7o-8buion0&treasuryMediaId=1722283682612&type=DOCUMENT&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BhqBqmG75QcqbGtdTLPQc5g%3D%3D'
  },
  {
    id: 3,
    title: 'AWS Academy Graduate - AWS Academy Cloud Foundations',
    image: `${process.env.PUBLIC_URL}/certifications/AWS Academy Cloud Foundations Badge.jpg`,
    skills: 'Cloud · AWS · Architecture',
    link: 'https://www.credly.com/badges/7c4a83b6-eafe-4f6f-a944-f03b96379a4d/linked_in_profile'
  },
  {
    id: 4,
    title: 'Introduction to Ethereum Blockchain',
    image: `${process.env.PUBLIC_URL}/certifications/Introduction to Etherium Blockchain.jpg`,
    skills: 'Ethereum · Blockchain · MetaMask · Smart Contracts',
    link: 'https://coursera.org/share/5b6dedcc888f5088642a34eb8e383a01'
  },
  {
    id: 5,
    title: 'Fundamentals of Java Programming',
    image: `${process.env.PUBLIC_URL}/certifications/Fundamentals of Java programming.jpg`,
    skills: 'Java · Programming',
    link: 'https://coursera.org/verify/5GRQ5MRNYWKK'
  },
  {
    id: 6,
    title: 'Kubernetes Course from a DevOps guru (Kubernetes&Docker)',
    image: `${process.env.PUBLIC_URL}/certifications/Kubernetes Course from a DevOps guru (Kubernetes&Docker).jpg`,
    skills: 'Kubernetes · DevOps · Kind · Docker',
    link: 'https://www.linkedin.com/in/khushi-appannavar/details/certifications/1718249333179/single-media-viewer?type=DOCUMENT&profileId=ACoAADnqyrkBwKGBo_j7B5Ge0YR1b7o-8buion0&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BhqBqmG75QcqbGtdTLPQc5g%3D%3D'
  },
  {
    id: 7,
    title: 'Networking Basics',
    image: `${process.env.PUBLIC_URL}/certifications/Networking_Basics_Badge.jpg`,
    skills: 'Networking',
    link: 'https://www.credly.com/badges/95b54d53-786e-45ab-b480-7301270dafdc/linked_in_profile'
  },
  {
    id: 8,
    title: 'Participation in WED Hackathon 2024',
    image: `${process.env.PUBLIC_URL}/certifications/WED Hackathon 2024.jpg`,
    skills: 'Hackathon · Teamwork · Brain Storming',
    link: 'https://credsverse.com/credentials/24f7141d-a570-44ee-8f02-697387a7e766'
  },
  {
    id: 9,
    title: 'Web Development and Designing',
    image: `${process.env.PUBLIC_URL}/certifications/OasisInfoByte.jpg`,
    skills: 'Web Development · Designing · Problem Solving',
    link: 'https://www.linkedin.com/posts/khushi-appannavar_internship-webdevelopment-design-activity-7162500745475375104-30in?utm_source=share&utm_medium=member_desktop&rcm=ACoAADnqyrkBwKGBo_j7B5Ge0YR1b7o-8buion0'
  },
  {
    id: 10,
    title: 'Entrepreneurship Development Program',
    image: `${process.env.PUBLIC_URL}/certifications/Turnip EDP.jpg`,
    skills: 'Entrepreneurship · EDP · Business Development',
    link: 'https://www.linkedin.com/in/khushi-appannavar/details/certifications/1709328875974/single-media-viewer?type=DOCUMENT&profileId=ACoAADnqyrkBwKGBo_j7B5Ge0YR1b7o-8buion0&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B3w5rqfkfRWiGCu0s1mo1WA%3D%3D'
  },
  {
    id: 11,
    title: 'Hex Workshop',
    image: `${process.env.PUBLIC_URL}/certifications/Hex workshop.jpg`,
    skills: 'Hex Editing · Workshop',
    link: 'https://www.linkedin.com/posts/khushi-appannavar_hands-on-design-assembly-of-regulated-dc-activity-7169563059143856128-_HGA?utm_source=share&utm_medium=member_desktop&rcm=ACoAADnqyrkBwKGBo_j7B5Ge0YR1b7o-8buion0'
  },
  {
    id: 12,
    title: 'KnitSpace Workshop',
    image: `${process.env.PUBLIC_URL}/certifications/KnitSpace Workshop.jpeg`,
    skills: 'System Design and Analysis',
    link: 'https://www.linkedin.com/posts/khushi-appannavar_workshop-systems-systemdesign-activity-7269676992315162624-Va31?utm_source=share&utm_medium=member_desktop&rcm=ACoAADnqyrkBwKGBo_j7B5Ge0YR1b7o-8buion0'
  },
  {
    id: 13,
    title: 'Software Testing by Srinivasan Desikan',
    image: `${process.env.PUBLIC_URL}/certifications/Software Testing Srinivasan Desikan.png`,
    skills: 'Software Testing · Automation Testing · Selenium IDE',
    link: 'https://www.linkedin.com/posts/khushi-appannavar_seleniumide-automationtesting-learning-activity-7150735572712460290-VtD-?utm_source=share&utm_medium=member_desktop&rcm=ACoAADnqyrkBwKGBo_j7B5Ge0YR1b7o-8buion0'
  },
  {
    id: 14,
    title: 'Version Control',
    image: `${process.env.PUBLIC_URL}/certifications/Version control.jpg`,
    skills: 'Git · GitHub · Version Control',
    link: 'https://www.linkedin.com/posts/khushi-appannavar_introduction-to-version-control-using-git-activity-7169556417945743360-2jCr?utm_source=share&utm_medium=member_desktop&rcm=ACoAADnqyrkBwKGBo_j7B5Ge0YR1b7o-8buion0'
  }
];

function Certifications() {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    if (showList) return; // Don't animate if list view
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrame;
    const scrollSpeed = 0.7; // px per frame

    function step() {
      if (!isPaused) {
        if (
          scrollContainer.scrollLeft + scrollContainer.offsetWidth >=
          scrollContainer.scrollWidth - 1
        ) {
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft += scrollSpeed;
        }
      }
      animationFrame = requestAnimationFrame(step);
    }

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused, showList]);

  return (
    <section className="certifications-section">
      <div className="certifications-header">
        <h1 className="certifications-title">Certifications</h1>
        <button
          className="list-btn"
          onClick={() => setShowList((prev) => !prev)}
          title={showList ? "Show carousel" : "Show all as list"}
        >
          {/* <img src={process.env.PUBLIC_URL + "/logo192.png"} alt="Logo" /> */}
          <img
            src={showList ? `${process.env.PUBLIC_URL}/icon/view-carousel-white.png` : `${process.env.PUBLIC_URL}/icon/view-list-white.png`}
            alt={showList ? "Carousel View" : "List View"}
            className="list-btn-icon"
          />
          
        </button>
      </div>
      {showList ? (
        <div className="cert-list-inline">
          <div className="cert-list-grid">
            {certifications.map(cert => (
              cert.link ? (
                <a
                  className="cert-list-item"
                  key={cert.id}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={0}
                >
                  <h4 className="cert-list-item-title">{cert.title}</h4>
                  <p className="cert-list-item-skills">{cert.skills}</p>
                </a>
              ) : (
                <div className="cert-list-item" key={cert.id}>
                  <h4 className="cert-list-item-title">{cert.title}</h4>
                  <div className="cert-list-item-skills">{cert.skills}</div>
                </div>
              )
            ))}
          </div>
        </div>
      ) : (
        <div className="certifications-carousel-wrapper">
          <div
            className="certifications-carousel"
            ref={scrollRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Only the inner content is flex, not the scrollable container */}
            <div className="certifications-carousel-inner">
              {certifications.concat(certifications).map(cert =>
                cert.link ? (
                  <a
                    className="cert-card"
                    key={cert.id + Math.random()}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={0}
                  >
                    <img src={cert.image} alt={cert.title} className="cert-image" />
                    <div className="cert-info">
                      <h4 className="cert-card-title">{cert.title}</h4>
                      <div className="cert-card-skills-align">
                        <p className="cert-card-skills">
                          {cert.skills}
                        </p>
                        </div>
                    </div>
                  </a>
                ) : (
                  <div className="cert-card" key={cert.id + Math.random()}>
                    <img src={cert.image} alt={cert.title} className="cert-image" />
                    <div className="cert-info">
                      <h4 className="cert-card-title">{cert.title}</h4>
                      <div className="cert-card-skills-align">
                        <p className="cert-card-skills">
                          {cert.skills}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Certifications;