import { useEffect, useRef } from "react";
import "../App.css";

const BackgroundCircles = () => {
    const circlesRef = useRef(null);

    useEffect(() => {
        const circles = circlesRef.current;
        if (!circles) return;

        const resizeObserver = new ResizeObserver((entries) => {
            for (let entry of entries) {
                circles.style.setProperty("--container-height", `${entry.contentRect.height}px`);
            }
        });

        resizeObserver.observe(circles);
        return () => resizeObserver.disconnect();
    }, []);

    return (
        <div className="area">
            <ul className="circles" ref={circlesRef}>
                {Array.from({ length: 15 }).map((_, i) => (
                    <li key={i}></li>
                ))}
            </ul>
        </div>
    );
};

export default BackgroundCircles;
