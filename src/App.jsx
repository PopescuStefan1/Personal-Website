import "./App.css";
import { IconContext } from "react-icons";
import { MdComputer } from "react-icons/md";

function App() {
    return (
        <>
            <div className="container">
                <div className="header-div">
                    <div className="header-div-cell centered-cell">
                        <IconContext.Provider value={{ size: "2em" }}>
                            <div className="icon-container">
                                <MdComputer />
                            </div>
                        </IconContext.Provider>
                    </div>
                    <div className="header-div-cell">
                        <h2>Fullstack Developer, Cybersecurity Student & Tech Enthusiast</h2>
                    </div>
                    <div className="header-div-cell centered-cell">
                        <div className="vertical-line"></div>
                    </div>
                    <div className="header-div-cell">
                        <h3>I craft clean, scalable code solutions and I love what I do.</h3>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
