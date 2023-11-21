import React from 'react';
import "../Stylesheets/Navbar.css";

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <input type="checkbox" name="" id="checkbox"></input>
                    <div className="hamburger-lines">
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"></span>
                    </div>
                    <div className="logo" style={{ fontSize: "2rem" }}>
                        VoteSphere
                    </div>
                    <ul className="menu-items">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#sellers">Vote</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                        {/* Dropdown Menu */}
                        <li className="dropdown">
                            <a href="#" className="dropbtn">Dropdown</a>
                            <div className="dropdown-content">
                                <a href="#">Item 1</a>
                                <a href="#">Item 2</a>
                                <a href="#">Item 3</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
