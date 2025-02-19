import { IconContext } from "react-icons";
import { FaMobileScreen, FaServer, FaBookOpen } from "react-icons/fa6";
import "../App.css";

const IconCards = () => (
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
            <p>Constructing robust, scalable APIs and database architectures to serve content effectively.</p>
        </div>
        <div className="card">
            <IconContext.Provider value={{ size: "10em" }}>
                <FaBookOpen />
            </IconContext.Provider>
            <h3>Software Engineering</h3>
            <p>Constantly learning and expanding my knowledge out of my passion for software.</p>
        </div>
    </div>
);

export default IconCards;
