import ProjectCard from "./ProjectCard";
import projects from "../data/projectsData";
import "../App.css";

const ProjectsSection = () => (
    <div className="projects-div">
        <h1>Personal Projects</h1>
        <div className="projects-container">
            {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
            ))}
        </div>
    </div>
);

export default ProjectsSection;
