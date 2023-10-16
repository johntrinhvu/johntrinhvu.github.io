import React from 'react';
import './navbar.css';
import {Link} from 'react-scroll';
import {FaGithub} from '@react-icons/all-files/fa/FaGithub';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="desktopMenu">
                <Link className="desktopMenuListItem">home</Link>
                <Link className="desktopMenuListItem">about</Link>
                <Link className="desktopMenuListItem">projects</Link>
                <Link className="desktopMenuListItem">resume</Link>
                <Link className="desktopMenuListItem">contact</Link>
            </div>
            <button className="githubButton"><FaGithub />&nbsp; Github</button>
        </nav>
    )
};
