import React, { useEffect } from 'react';
import './Makeinbvb.css';
import Socials from './Socials';
import HoverTipBox from './HoverTipBox';

function Makeinbvb() {
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

    const events = [
        {
            title: "Joining MiB as Content Creator",
            date: "February 2022",
            role: "Entering a New Community",
            exp: "Joined MiB under KLE-CTIE and contributed to content creation for events, orientations, and student communication. Supported seniors during offline revival post-COVID and assisted in event execution and publicity.",
            learnings: "Practiced structured writing for emails and announcements. Learned audience-focused communication and coordination in student-led events.",
            photo: `${process.env.PUBLIC_URL}/mib0.jpg`
        },
        {
            title: "MadAd - The Multiverse of Madness as new member",
            date: "June 2022",
            role: "Exposure and Creative Exploration",
            exp: "Supported planning and execution of Mad Advertisement, a creativity-focused competition. Assisted teams, managed logistics, and observed real-time decision-making during event flow.",
            learnings: "Understood rapid ideation, teamwork dynamics, and on-ground event operations.",
            photo: `${process.env.PUBLIC_URL}/mib1.jpg`
        },
        {
            title: "PUPA 2023 as Student Engagement Lead",
            date: "February 11, 2023",
            role: "Sustaining Engagement Under Uncertainty",
            exp: "Handled participant communication across multiple postponements. Managed queries, maintained engagement, and coordinated with teams until final execution.",
            learnings: "Built stakeholder management and communication continuity skills. Learned importance of consistency and trust in large events.",
            photo: `${process.env.PUBLIC_URL}/mib2.jpg`
        },
        {
            title: "Becoming Club Head",
            date: "December 2023",
            role: "Holding Continuity and Direction",
            exp: "Led MiB operations post-COVID. Coordinated teams, planned events, managed budgets, and focused on restoring club visibility and consistency on campus.",
            learnings: "Developed leadership, budgeting, and decision-making skills. Learned team alignment and accountability under constraints.",
            photo: `${process.env.PUBLIC_URL}/mib3.jpg`
        },
        {
            title: "Palm Splash",
            date: "Early 2024",
            role: "Oversight & Delegation",
            exp: "Delegated complete planning and execution of a student engagement activity to junior members. Provided high-level alignment, then stepped back while the team handled coordination, logistics, and execution independently. Supported a campus gathering focused on visibility and informal engagement.",
            learnings: "Validated team readiness through delegation. Learned to step back, trust preparation, and allow independent execution as part of leadership transition.",
            photo: `${process.env.PUBLIC_URL}/mib4.jpg`
        },
        {
            title: "PUPA 2024",
            date: "2024",
            role: "Event Lead",
            exp: "Oversaw planning and execution of MiB’s flagship event. Managed finances, logistics, and cross-team coordination to deliver the event at scale.",
            learnings: "Applied financial planning, process streamlining, and conflict resolution in a high-responsibility role.",
            photo: `${process.env.PUBLIC_URL}/mib3.jpg`
        },
        {
            title: "Multiverse of Madness – Part II",
            date: "2024",
            role: "Decision Owner",
            exp: "Confirmed MiB’s participation in Pledis, the college cultural fest event despite limited team readiness, to honor prior commitments and maintain club credibility. Enabled juniors to execute the event with minimal intervention once alignment was established.",
            learnings: "Learned how leadership decisions are often clearer in hindsight, and how responsibility can outweigh consensus when commitments are public.",
            photo: `${process.env.PUBLIC_URL}/mib4.jpg`
        },
        {
            title: "ELVIC",
            date: "2024",
            role: "Transition & Trust",
            exp: "Handed over full planning and decision-making authority to junior members for a large-scale event. Stayed available only on request while the team independently handled scope, execution, and delivery.",
            learnings: "Learned to design leadership transition through trust rather than control. Validated that autonomy enables ownership, scale, and confidence—both for the team and for stepping away responsibly.",
            photo: `${process.env.PUBLIC_URL}/mib4.jpg`
        }

    ];

    return (
        <div className="makeinbvb-page">
            <section id="makeinbvb" className="section fade-in">
                <h1>Make in BVB (MiB)</h1>
                <p className="makeinbvb-intro">Make in BVB (MiB) is a student-led E-Cell at KLE Technological University, Hubballi, dedicated to fostering innovation, creativity, and hands-on learning among students. 
                    </p>
                <p>Throughout my engineering degree, MiB ran parallel to my academic journey and shaped how I learned outside the classroom. It started as a space for exposure and gradually became a place of responsibility, decision-making, and trust. Through varied experiences and interactions across batches, MiB helped me build perspective, confidence, and meaningful connections. It remains a core part of how I understand growth during my engineering years.</p>


                <div>
                    {events.map((event, index) => (
                        <div key={index} className="makeinbvb-card">
                            <img src={event.photo} alt={event.title} className="card-photo" />
                            <div className="card-content">
                                <h3>{event.title} - <em> <small>{event.role}</small> </em></h3>
                                {/* role should be in italics */}
                                
                                <p>Date: {event.date}</p>
                                <p>Experience: {event.exp}</p>
                                <p>Learnings: {event.learnings}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section id='socials'>
                <Socials />
            </section>
            <HoverTipBox />
        </div>
    );
}

export default Makeinbvb;
