import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import React from "react";

export default function Footer() {
    return (
        <footer className="text-white text-center py-4 w-full">
            <div className="mx-auto flex justify-between items-center">
                {/* Left Section */}
                <div>
                    <h1 className="font-semibold text-purple-400">Developed and Designed</h1>
                    <p className="text-sm text-left text-gray-400">by John Vu</p>
                </div>

                {/* Right Section */}
                <div>
                    <h1 className="font-bold text-left text-purple-400">Socials</h1>
                    <div className="flex justify-end">
                        <a href="https://www.linkedin.com/in/johntrinhvu/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon className="w-6 h-6 text-gray-300" icon={faLinkedin} />
                        </a>
                        <a href="https://github.com/johntrinhvu" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon className="w-6 h-6 ml-1 text-gray-300" icon={faGithub} />
                        </a>
                        <a href="https://twitter.com/lolsahori" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon className="w-6 h-6 ml-1 text-gray-300" icon={faXTwitter} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );

}