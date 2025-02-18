import "./App.css";
import { IconContext } from "react-icons";
import { MdComputer } from "react-icons/md";

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
                                <MdComputer />
                            </IconContext.Provider>
                            <h3>Frontend Development</h3>
                            <p>
                                Responsive websites built for an optimal user experience that achieves your busieness
                                goals.
                            </p>
                        </div>
                        <div className="card">
                            <IconContext.Provider value={{ size: "10em" }}>
                                <MdComputer />
                            </IconContext.Provider>
                            <h3>Frontend Development</h3>
                            <p>
                                Responsive websites built for an optimal user experience that achieves your busieness
                                goals.
                            </p>
                        </div>
                        <div className="card">
                            <IconContext.Provider value={{ size: "10em" }}>
                                <MdComputer />
                            </IconContext.Provider>
                            <h3>Frontend Development</h3>
                            <p>
                                Responsive websites built for an optimal user experience that achieves your busieness
                                goals.
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
