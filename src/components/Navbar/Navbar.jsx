import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import React from "react";

export default function Navbar() {
    return (
        <header className="bg-gray-800 md:sticky top-0 z-50">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <button className="title-font font-medium text-purple-400">
                    <a href="#about" className="ml-3 text-xl">
                        John Vu
                    </a>
                </button>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
                    <a href="#skills" className="mr-5 hover:text-white transition ease-in duration-100">
                        Skills
                    </a>
                    <a href="#portfolio" className="mr-5 hover:text-white transition ease-in duration-100">
                        Portfolio
                    </a>
                    <a href="#resume" className="mr-5 hover:text-white transition ease-in duration-100">
                        Resume
                    </a>
                    <a href="#contact" className="mr-5 hover:text-white transition ease-in duration-100">
                        Contact
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