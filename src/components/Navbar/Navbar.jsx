import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import React, { useState, useEffect } from "react";

export default function Navbar() {
    const [activeLink, setActiveLink] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            const scrollPosition = window.scrollY + 200;

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    setActiveLink(section.id);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className="bg-gray-800 md:sticky top-0 z-50">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <button className="title-font font-medium text-purple-400">
                    <a 
                        href="#about" 
                        className={`text-xl ${activeLink === 'about' ? 'text-purple-300' : ''}`}
                    >
                        John Vu
                    </a>
                </button>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
                    <a 
                        href="#skills" 
                        className={`mr-5 hover:text-purple-300 transition ease-in duration-100 ${activeLink === 'skills' ? 'text-purple-300' : 'text-gray-400'}`}
                    >
                        Skills
                        {activeLink === 'skills'}
                    </a>
                    <a 
                        href="#portfolio" 
                        className={`mr-5 hover:text-purple-300 transition ease-in duration-100 ${activeLink === 'portfolio' ? 'text-purple-300 ' : 'text-gray-400'}`}
                    >
                        Portfolio
                        {activeLink === 'portfolio'}
                    </a>
                    <a 
                        href="#resume" 
                        className={`mr-5 hover:text-purple-300 transition ease-in duration-100 ${activeLink === 'resume' ? 'text-purple-300' : 'text-gray-400'}`}
                    >
                        Resume
                        {activeLink === 'resume'}
                    </a>
                    <a 
                        href="#contact" 
                        className={`mr-5 hover:text-purple-300 transition ease-in duration-100 ${activeLink === 'contact' ? 'text-purple-300' : 'text-gray-400'}`}
                    >
                        Contact
                        {activeLink === 'contact'}
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