import React from 'react';
import { Link } from 'react-router-dom';
import "../Stylesheets/Navbar.css";

const Navbar = () => {
    return (
        <>
            <nav className="yourUniqueNavbarClassName">
                <div className="yourUniqueNavbarContainerClassName">
                    <div className="yourUniqueLogoClassName" style={{ fontSize: "2rem" }}>
                        VoteSphere
                    </div>
                    <ul className="yourUniqueMenuItemsClassName">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/voting">Vote</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        {/* Dropdown Menu */}
                        <li className="yourUniqueDropdownClassName">
                            <a href="/" className="yourUniqueDropbtnClassName">Login / Registration</a>
                            <div className="yourUniqueDropdownContentClassName">
                                <Link to="/login">Login as User</Link>
                                <Link to="/user-registration">Registered as User</Link>
                                <Link to="/admin">Login as Admin</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
