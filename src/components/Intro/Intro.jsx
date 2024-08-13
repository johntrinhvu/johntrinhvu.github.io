import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faDownload } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Headshot from "../../images/Headshot.png";
import { useSectionInView } from "../../hooks.tsx";

export default function Intro() {
    const { ref } = useSectionInView("Home", 0.95);
    // const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return (
        <section ref={ref} id="home" className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
            <div className="flex items-center justify-center">
                <div className="relative">
                    <motion.div
                        className=""
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "tween", duration: 0.2 }}
                    >
                        <img 
                            className="object-cover object-center rounded-full h-24 w-24 border-[0.35rem] border-white object-cover shadow-xl"
                            src={Headshot}
                            alt="John Vu Headshot"
                            width="192"
                            height="192"
                            quality="95"
                            priority={true}
                        />
                    </motion.div>

                    <motion.span 
                        className="absolute bottom-0 right-0 text-4xl"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", stiffness: 125, delay: 0.1, duration: 0.7 }}
                    >
                        👋
                    </motion.span>
                </div>
            </div>

            <motion.h1
                className="text-white mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                Hello, I'm <span className="font-bold text-purple-800">John Trinh Vu.</span> I'm a{" "}
                <span className="font-bold">Full Stack Developer</span> and{" "}
                <span className="font-bold">SWE Undergrauate</span> at{" "}
                <span className="font-bold">UCI</span>.
            </motion.h1>

            <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
            >   
                <a
                    href="#contact"
                    className="group bg-purple-800 text-purple-100 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-purple-950 active:scale-105 transition"
                >
                    Contact me here{" "}
                    <FontAwesomeIcon className="opacity-70 group-hover:translate-x-1 transition" icon={faArrowRight} />
                </a>

                <a
                    className="text-white hover:text-purple-300 group bg-gray-800 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition border-black" 
                    href="https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:cb7e7610-68b8-4efe-8b7e-ec8608826500"
                    target="_blank"
                    rel="noreferrer"
                >
                    Download Resume{" "}
                    <FontAwesomeIcon className="opacity-70 group-hover:translate-y-1 transition" icon={faDownload} />
                </a>

                <a
                    className="bg-gray-800 p-4 text-white hover:text-purple-300 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border-black"
                    href="https://www.linkedin.com/in/johntrinhvu/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>

                <a
                    className="bg-gray-800 p-4 text-white flex items-center gap-2 text-[1.35rem] rounded-full focus:scale[1.15] hover:scale-[1.15] hover:text-purple-300 active:scale-105 transition cursor-pointer border-black"
                    href="https://www.github.com/johntrinhvu/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </motion.div>
        </section>
    )
};