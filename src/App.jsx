import "./App.css";
import { IconContext } from "react-icons";
import { MdComputer, MdEmail } from "react-icons/md";
import { FaServer, FaMobileScreen, FaBookOpen, FaGithub, FaLinkedin } from "react-icons/fa6";
import { useEffect, useRef } from "react";
import ProjectCard from "./components/ProjectCard";
import projects from "./data/projectsData";
import { IoDocumentText } from "react-icons/io5";

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
                            <div className="contact-div">
                                <div className="contact-info-container">
                                    <IconContext.Provider value={{ size: "4em" }}>
                                        <div
                                            className="contact-icon-container"
                                            onClick={() => (window.location.href = "mailto:stefan.ro95@gmail.com")}
                                        >
                                            <MdEmail />
                                        </div>
                                    </IconContext.Provider>
                                    <p>Email</p>
                                </div>
                                <div className="contact-info-container">
                                    <IconContext.Provider value={{ size: "4em" }}>
                                        <div
                                            className="contact-icon-container"
                                            onClick={() =>
                                                window.open(
                                                    "https://github.com/PopescuStefan1",
                                                    "_blank",
                                                    "noopener,noreferrer"
                                                )
                                            }
                                        >
                                            <FaGithub />
                                        </div>
                                    </IconContext.Provider>
                                    <p>GitHub</p>
                                </div>
                                <div className="contact-info-container">
                                    <IconContext.Provider value={{ size: "4em" }}>
                                        <div
                                            className="contact-icon-container"
                                            onClick={() =>
                                                window.open(
                                                    "https://www.linkedin.com/in/stefan-tudorpopescu/",
                                                    "_blank",
                                                    "noopener,noreferrer"
                                                )
                                            }
                                        >
                                            <FaLinkedin />
                                        </div>
                                    </IconContext.Provider>
                                    <p>LinkedIn</p>
                                </div>
                                <div className="contact-info-container">
                                    <IconContext.Provider value={{ size: "4em" }}>
                                        <div
                                            className="contact-icon-container"
                                            onClick={() =>
                                                window.open(
                                                    "https://drive.google.com/uc?export=download&id=19J9xIiRMGqmhqc4cZv_skLzkM3uwPOwh",
                                                    "_blank",
                                                    "noopener,noreferrer"
                                                )
                                            }
                                        >
                                            <IoDocumentText />
                                        </div>
                                    </IconContext.Provider>
                                    <p>CV</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="projects-div">
                        <h1>Personal Projects</h1>
                        <div className="projects-container">
                            {projects.map((project, index) => (
                                <ProjectCard key={index} {...project} />
                            ))}
                        </div>
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
