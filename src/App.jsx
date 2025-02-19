import "./App.css";
import { IconContext } from "react-icons";
import { MdComputer } from "react-icons/md";
import { FaServer, FaMobileScreen, FaBookOpen } from "react-icons/fa6";

function App() {
    return (
        <>
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
                            <h3>Backend Engineering</h3>
                            <p>
                                Designing robust, scalable APIs and database architectures to serve users content in the
                                best way possible.
                            </p>
                        </div>
                        <div className="card">
                            <IconContext.Provider value={{ size: "10em" }}>
                                <FaBookOpen />
                            </IconContext.Provider>
                            <h3>Software Development</h3>
                            <p>
                                Software Engineering is one of my passions, and I love constantly learning and expanding
                                my current knowledge and expertise.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="area">
                <ul className="circles">
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
        </>
    );
}

export default App;
