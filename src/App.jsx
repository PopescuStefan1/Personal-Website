import "./App.css";
import { IconContext } from "react-icons";
import { MdComputer } from "react-icons/md";
import { FaServer, FaMobileScreen, FaBookOpen } from "react-icons/fa6";
import { useEffect, useRef } from "react";
import ProjectCard from "./components/ProjectCard";
import projects from "./data/projectsData";

function App() {
    const circlesRef = useRef(null);

    useEffect(() => {
        const circles = circlesRef.current;
        if (!circles) return;

        // Create a ResizeObserver to update the custom property on size changes
        const resizeObserver = new ResizeObserver((entries) => {
            for (let entry of entries) {
                circles.style.setProperty("--container-height", `${entry.contentRect.height}px`);
            }
        });

        resizeObserver.observe(circles);

        // Clean up on unmount
        return () => resizeObserver.disconnect();
    }, []);

    return (
        <div className="root-container">
            <div className="context">
                <div className="container">
                    <div className="header-div">
                        <div className="header-div-cell centered-cell">
                            <div className="icon-div">
                                <div className="grow-div"></div>
                                <IconContext.Provider value={{ size: "2em" }}>
                                    <div className="icon-container">
                                        <MdComputer />
                                    </div>
                                </IconContext.Provider>
                                <div className="icon-vertical-line"></div>
                            </div>
                        </div>
                        <div className="header-div-cell">
                            <h2>
                                Fullstack <span className="accent">Developer</span>, Cybersecurity Student & Tech{" "}
                                <span className="accent">Enthusiast</span>
                            </h2>
                        </div>
                        <div className="header-div-cell centered-cell">
                            <div className="vertical-line"></div>
                        </div>
                        <div className="header-div-cell">
                            <p>
                                Clean code, scalable systems, and a whole lot of passion, that&apos;s how I aspire to
                                engineer solutions.
                            </p>
                        </div>
                    </div>

                    <div className="icon-cards">
                        <div className="card">
                            <IconContext.Provider value={{ size: "10em" }}>
                                <FaMobileScreen />
                            </IconContext.Provider>
                            <h3>Frontend Development</h3>
                            <p>Building beautiful, responsive websites to deliver seamless user experiences.</p>
                        </div>
                        <div className="card">
                            <IconContext.Provider value={{ size: "10em" }}>
                                <FaServer />
                            </IconContext.Provider>
                            <h3>Backend Design</h3>
                            <p>
                                Constructing robust, scalable APIs and database architectures to serve users content in
                                the best way possible.
                            </p>
                        </div>
                        <div className="card">
                            <IconContext.Provider value={{ size: "10em" }}>
                                <FaBookOpen />
                            </IconContext.Provider>
                            <h3>Software Engineering</h3>
                            <p>
                                Constantly learning and expanding my current knowledge and expertise out of my passion
                                for software.
                            </p>
                        </div>
                    </div>

                    <div className="intro-div">
                        <div className="intro-container">
                            <h1>
                                Hey, I&apos;m <span className="accent">Stefan</span>
                            </h1>
                            <p>
                                I am a Software Engineer and Cybersecurity Master&apos;s Student. I&apos;m eager to
                                contribute to innovative digital products and commited to life-long learning.
                            </p>
                        </div>
                    </div>

                    <div className="projects-div">
                        {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </div>
                </div>
            </div>

            <div className="area">
                <ul className="circles" ref={circlesRef}>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    );
}

export default App;
