import { IconContext } from "react-icons";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";
import "../App.css";

const IntroSection = () => (
    <div className="intro-div">
        <div className="intro-container">
            <h1>
                Hey, I&apos;m <span className="accent">Stefan</span>
            </h1>
            <p>
                I am a Software Engineer and Cybersecurity Master&apos;s Student. I&apos;m eager to contribute to
                innovative digital products and I&apos;m committed to life-long learning.
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
                                window.open("https://github.com/PopescuStefan1", "_blank", "noopener,noreferrer")
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
);

export default IntroSection;
