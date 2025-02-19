/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "../App.css";

const ProjectCard = ({ images, title, description, websiteLink, githubLink }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        let intervalId;
        if (isHovered) {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
            intervalId = setInterval(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 2500);
        } else {
            setCurrentImageIndex(0); // Reset when not hovered (optional)
        }

        return () => clearInterval(intervalId);
    }, [isHovered, images.length]);

    return (
        <div className="project-card" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div className="project-card-content">
                <div className="imgBx">
                    {images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={title}
                            className={index === currentImageIndex ? "active" : ""}
                        />
                    ))}
                </div>
                <div className="contentBx">
                    <div></div>
                    <div className="project-card-title">{title}</div>
                    <button onClick={() => window.open(websiteLink ?? githubLink, "_blank", "noopener,noreferrer")}>
                        {websiteLink ? "Visit Website" : "GitHub Link"}
                    </button>
                </div>
            </div>
            <div className="project-card-description">
                {description}{" "}
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                    {websiteLink ? "GitHub Link" : ""}
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
