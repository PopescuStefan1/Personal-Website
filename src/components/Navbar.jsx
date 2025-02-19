import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../App.css"; // Ensure your CSS file includes the styles below

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Toggle the navbar open/closed
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    // When clicking a link, close the menu (helpful on mobile)
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="menu-icon" onClick={toggleNavbar}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>

                <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
                    <li className="nav-item">
                        <a href="#home" className="nav-links" onClick={closeMenu}>
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#about" className="nav-links" onClick={closeMenu}>
                            About
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#projects" className="nav-links" onClick={closeMenu}>
                            Projects
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
