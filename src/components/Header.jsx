import { IconContext } from "react-icons";
import { MdComputer } from "react-icons/md";
import "../App.css";

const Header = () => (
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
                Fullstack <span className="accent">Developer</span>, Cybersecurity Student &amp; Tech{" "}
                <span className="accent">Enthusiast</span>
            </h2>
        </div>
        <div className="header-div-cell centered-cell">
            <div className="vertical-line"></div>
        </div>
        <div className="header-div-cell">
            <p>
                Clean code, scalable systems, and a whole lot of passion—that&apos;s how I aspire to engineer solutions.
            </p>
        </div>
    </div>
);

export default Header;
