import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { links } from "../../data.ts";
import clsx from "clsx";
import anteater from "../../images/logo.png";
import { useActiveSectionContext } from "../../context/ActiveSectionContext/ActiveSectionContext.tsx";


export default function Header() {
    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const menuVars = {
        initial: {
            scaleY: 0,
        },
        animate: {
            scaleY: 1,
            transition: {
                duration: 0.5,
                ease: [0.12, 0, 0.39, 0],
            }
        },
        exit: {
            scaleY: 0,
            transition: {
                delay: 0.5,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
            }
        },
    };

    const mobileLinkVars = {
        initial: {
            y: "30vh",
            transition: {
                duration: 0.5,
            }
        },
        open: {
            y: 0,
            transition: {
                ease: [0, 0.55, 0.45, 1],
                duration: 0.7,
            }
        }
    }

    const containerVars = {
        initial: {
            transition: {
                staggerChildren: 0.09,
                staggerDirection: -1,
            }
        },
        open: {
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.09,
                staggerDirection: 1,
            }
        },
    }

    return (
        <header className="z-[999] relative">
            <AnimatePresence>
                {
                    isOpen && (
                        <motion.div 
                            variants={menuVars}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="origin-top fixed left-0 top-16 w-full h-screen sm:hidden bg-gray-950 text-gray-300 pb-16"
                        >
                            <motion.div 
                                variants={containerVars}
                                initial="initial"
                                animate="open"
                                exit="initial"
                                className="flex flex-col h-full justify-center items-center gap-4"
                            >
                                {
                                    links.map((link, index) => {
                                        return (
                                            <div className="text-gray-500">
                                                <motion.div
                                                    variants={mobileLinkVars} 
                                                >
                                                    <a
                                                        className={clsx("relative text-2xl flex flex-col w-full items-center justify-center px-6 py-4 hover:text-purple-200 transition", {
                                                            "text-purple-400" : activeSection === link.name,
                                                        })} 
                                                        key={index}
                                                        href={link.hash}
                                                        onClick={() => {
                                                            setActiveSection(link.name)
                                                            setTimeOfLastClick(Date.now())
                                                        }}
                                                    >
                                                        {link.name}
                                                    </a>
                                                </motion.div>
                                            </div>
                                        )
                                    })
                                }
                            </motion.div>
                        </motion.div>
                    )
                }
            </AnimatePresence>
            <motion.div 
                className="flex justify-between fixed top-0 left-1/2 h-[4.5rem] w-full border border-black/40 sm:border-opacity-75 
                                    bg-gray-950 sm:bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]
                                    sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
                initial={{ y: -100, x: "-50%", opacity: 0 }}
                animate={{ y: 0, x: "-50%", opacity: 1 }}
            >
                <img 
                    src={anteater} 
                    alt="logo" 
                    className="sm:hidden pl-4 pb-4"
                />
                <button className="sm:hidden pr-6" onClick={toggleMenu}>
                    <FontAwesomeIcon
                        className={clsx("w-6 h-6 transition", {
                            "text-white": isOpen,
                            "text-gray-400 hover:text-gray-200": !isOpen,
                        })}
                        icon={faBars} 
                    />
                </button>
            </motion.div>
            <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
                <h1 className="sm:hidden text-2xl p-2 text-white">John Trinh Vu</h1>
                <ul 
                    className="hidden sm:flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500
                                        sm:w-[initial] sm:flex-nowrap sm:gap-5"
                >
                    {
                        links.map(link => (
                            <motion.li 
                                className="h-3/4 flex items-center justify-center relative"
                                key={link.hash}
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                            >
                                    <a 
                                        className={clsx("flex w-full items-center justify-center px-3 py-3 hover:text-gray-300 transition", {
                                            "text-gray-200" : activeSection === link.name,
                                        })} 
                                        href={link.hash}
                                        onClick={() => {
                                            setActiveSection(link.name)
                                            setTimeOfLastClick(Date.now())
                                        }}
                                    >
                                        {link.name}
                                        {
                                            link.name === activeSection && (
                                                <motion.span 
                                                    className="bg-gray-800 rounded-full absolute inset-0 -z-10"
                                                    layoutId="activeSection"
                                                    transition={{
                                                        type: "spring",
                                                        stiffness: 380,
                                                        damping: 30,
                                                    }}
                                                >
                                                </motion.span>
                                            )
                                        }
                                    </a>
                            </motion.li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    )
}