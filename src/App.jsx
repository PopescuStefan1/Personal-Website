import "./App.css";
import Header from "./components/Header";
import IconCards from "./components/IconCards";
import IntroSection from "./components/IntroSection";
import ProjectsSection from "./components/ProjectsSection";
import BackgroundCircles from "./components/BackgroundCircles";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className="root-container">
            <div className="context">
                <div className="container">
                    <Navbar />
                    <div id="home">
                        <Header />
                    </div>
                    <IconCards />
                    <div id="about">
                        <IntroSection />
                    </div>
                    <div id="projects">
                        <ProjectsSection />
                    </div>
                </div>
            </div>
            <BackgroundCircles />
        </div>
    );
}

export default App;
