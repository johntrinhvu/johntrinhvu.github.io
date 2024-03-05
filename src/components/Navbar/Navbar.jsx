import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import React, { useState } from "react";

export default function Navbar() {
    const [activeLink, setActiveLink] = useState(null);

    const handleClick = (link) => {
        setActiveLink(link);
    }

    return (
        <header className="bg-gray-800 md:sticky top-0 z-50">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <button className="title-font font-medium text-purple-400">
                    <a 
                        href="#about" 
                        className={`text-xl ${activeLink === 'about' ? 'text-purple-300' : ''}`}
                        onClick={() => handleClick('about')}
                    >
                        John Vu
                    </a>
                </button>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
                    <a 
                        href="#skills" 
                        className={`mr-5 hover:text-purple-300 transition ease-in duration-100 ${activeLink === 'skills' ? 'text-purple-300' : 'text-gray-400'}`}
                        onClick={() => handleClick('skills')}
                    >
                        Skills
                        {activeLink === 'skills' && <div className="underline" />}
                    </a>
                    <a 
                        href="#portfolio" 
                        className={`mr-5 hover:text-purple-300 transition ease-in duration-100 ${activeLink === 'portfolio' ? 'text-purple-300 ' : 'text-gray-400'}`}
                        onClick={() => handleClick('portfolio')}
                    >
                        Portfolio
                        {activeLink === 'portfolio' && <div className="underline" />}
                    </a>
                    <a 
                        href="#resume" 
                        className={`mr-5 hover:text-purple-300 transition ease-in duration-100 ${activeLink === 'resume' ? 'text-purple-300' : 'text-gray-400'}`}
                        onClick={() => handleClick('resume')}
                    >
                        Resume
                        {activeLink === 'resume' && <div className="underline" />}
                    </a>
                    <a 
                        href="#contact" 
                        className={`mr-5 hover:text-purple-300 transition ease-in duration-100 ${activeLink === 'contact' ? 'text-purple-300' : 'text-gray-400'}`}
                        onClick={() => handleClick('contact')}
                    >
                        Contact
                        {activeLink === 'contact' && <div className="underline" />}
                    </a>
                </nav>
                <a href="https://github.com/johntrinhvu" className="inline-flex text-black items-center bg-white border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 hover:text-purple-500 hover:bg-gray-100 transition ease-in duration-100" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon className="w-4 h-4 ml-1" icon={faGithub} />
                    &nbsp;
                    Github
                </a>
            </div>
        </header>
    )
    
}