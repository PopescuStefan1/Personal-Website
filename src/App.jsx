import "./App.css";
import { IconContext } from "react-icons";
import { MdComputer } from "react-icons/md";

function App() {
    return (
        <>
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
                        <h3>
                            Clean code, scalable systems, and a whole lot of passion, that&apos;s how I engineer
                            solutions.
                        </h3>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
