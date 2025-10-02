import React, { useState } from 'react';
import Popup from './Popup';
import './Publications.css';

const publications = [
	{
		id: 1,
		title: 'Comparative Analysis of Traditional Machine Learning and Deep Learning Approaches for Twitter Sentiment Analysis',
		publisher: 'Springer',
		date: 'Jul 27, 2025',
        where: 'ADCIS 2024 - BITS Pilani, Goa Campus',
		status: 'Published',
		oneline: 'A study comparing traditional machine learning and deep learning methods for Twitter sentiment analysis.',
		description: 'The work showcases the development of a sentiment analysis model using both TF-IDF with traditional classifiers and DistilBERT, aiming to accurately classify text-based content into positive or negative sentiments and enhance user understanding.',
		links: [
			{
				label: 'GitHub Repository',
				url: 'https://github.com/Khushi-MA/javaFDS'
			},
			{
				label: 'LinkedIn Post',
				url: 'https://www.linkedin.com/in/khushi-appannavar/details/projects/'
			},
{
				label: 'Springer page',
				url: 'https://link.springer.com/chapter/10.1007/978-981-96-3652-5_32'
			}
		]
	},
	{
		id: 2,
		title: 'Revolutionizing IPL Ticketing with NFTs',
		publisher: 'IEEE',
		date: 'Mar 12, 2025',
        where: 'ICEI 2024 - Indian Institute of Technology, Dharwad',
		status: 'Published',
		oneline: 'A proposal to use NFTs on the Ethereum blockchain for secure and authentic IPL ticketing.',
		description: 'The work showcases how blockchain technology, specifically NFTs on the Ethereum blockchain, can revolutionize IPL ticketing. The proposed system offers numerous benefits: - Prevent counterfeiting and ensure authenticity. - Simplify ticket transfers. - Provide a secure, transparent, and tamper-proof solution.',
		links: [
			{
				label: 'GitHub Repository',
				url: 'https://github.com/Khushi-MA/javaFDS'
			},
			{
				label: 'LinkedIn Post',
				url: 'https://www.linkedin.com/in/khushi-appannavar/details/projects/'
			},
			{
				label: 'IEEE page',
				url: 'https://ieeexplore.ieee.org/document/1234567'
			}
		]
	},
	{
		id: 3,
		title: 'Query-Based Sign Spotting in Continuous Sign Language Videos',
		publisher: 'IEEE',
		date: 'May 22, 2025',
		where: 'INCET 2025 - Jain College of Engineering, Belgaum',
		status: 'Yet to be published',
		oneline: 'A method for sign spotting in continuous Indian Sign Language (ISL) using Inception I3D ConvNet with Dynamic Time Warping (DTW).',
		description: 'The work showcases: - A method for sign spotting in continuous Indian Sign Language (ISL) using Inception hashtag#I3D ConvNet with Dynamic Time Warping (hashtag#DTW). - Training on isolated hashtag#ISL dictionary videos to extract word-level motion features for accurate reference matching. - Query-based hashtag#detection of signs by locating matching subsequences and retrieving their start–end frame positions in Continuous ISL videos.',
		links: [
			{
				label: 'LinkedIn Post',
				url: 'https://www.linkedin.com/posts/khushi-appannavar_research-i3d-dtw-activity-7339346136949788672-tcIe?utm_source=share&utm_medium=member_desktop&rcm=ACoAADnqyrkBwKGBo_j7B5Ge0YR1b7o-8buion0'
			},
			{
				label: 'IEEE page',
				url: 'https://doi.org/10.1109/INCET64471.2025.11139946'
			}
		]
	}
];

const Publications = ({ onPopupOpen, onPopupClose }) => {
	const [selectedPublication, setSelectedPublication] = useState(null);

	const handleCardClick = (publication) => {
		setSelectedPublication(publication);
		onPopupOpen && onPopupOpen(); // Notify popup is active
	};

	const handleClosePopup = () => {
		setSelectedPublication(null);
		onPopupClose && onPopupClose(); // Notify popup is inactive
	};

	return (
		<div className="publication-section">
			<h1>Publications</h1>
			<div className="publications-container">
				{publications.map((pub) => (
					<div
						key={pub.id}
						className="publication-card"
						onClick={() => handleCardClick(pub)}
					>
						<div className="card-content">
							<h3>{pub.title}</h3>
							<p>
								<strong>{pub.publisher}</strong> · {pub.date} · {pub.where} · <em>{pub.status}</em>
							</p>
							<p>{pub.oneline}</p>
						</div>
						<div className="links">
							<div className="project-list-links">
								{pub.links.map((link, idx) => (
									<a
										key={idx}
										href={link.url}
										target="_blank"
										rel="noopener noreferrer"
										className="project-list-link"
										onClick={(e) => e.stopPropagation()}
										title={link.label}
									>
										{link.label === 'GitHub Repository' ? (
											<i data-feather="github" alt={link.label} className="link-image-alternate"></i>
										) : link.label === 'LinkedIn Post' ? (
											<i data-feather="linkedin" alt={link.label} className="link-image-alternate"></i>
										) : link.image ? (
											<img
												src={link.image}
												alt={link.label}
												className="link-image-alternate"
											/>
										) : (
											link.label
										)}
									</a>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
			{selectedPublication && (
				<Popup
					title={selectedPublication.title}
					subtitle={`${selectedPublication.publisher} · ${selectedPublication.date}`}
					description={selectedPublication.description}
					links={selectedPublication.links}
					isOpen={!!selectedPublication}
					onClose={handleClosePopup}
				/>
			)}
		</div>
	);
};

export default Publications;
