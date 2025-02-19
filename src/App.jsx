import "./App.css";
import Header from "./components/Header";
import IconCards from "./components/IconCards";
import IntroSection from "./components/IntroSection";
import ProjectsSection from "./components/ProjectsSection";
import BackgroundCircles from "./components/BackgroundCircles";

function App() {
    return (
        <div className="root-container">
            <div className="context">
                <div className="container">
                    <Header />
                    <IconCards />
                    <IntroSection />
                    <ProjectsSection />
                </div>
            </div>
            <BackgroundCircles />
        </div>
    );
}

export default App;
