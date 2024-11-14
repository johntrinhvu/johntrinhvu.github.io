import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-regular-svg-icons";
import { motion } from "framer-motion";
import { useSectionInView } from "../../hooks.tsx";

export default function About() {
    const { ref } = useSectionInView("About", 0.9);

    return (
        <motion.section 
            id="about"
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            ref={ref}
        >
            <FontAwesomeIcon className="text-purple-400 text-4xl" icon={faAddressCard} />
            <h1 className="text-gray-100 text-3xl font-semibold mb-8">About Me</h1>
            <div className="bg-gray-800 w-full p-4 rounded-xl border-gray-700 border-2">
                <p className="mb-3">
                    I am a third year <span className="text-violet-400">Software Engineering</span> major pursuing a <span className="text-violet-400">Mathematics</span> minor {" "}
                    at the <span className="text-blue-300 font-semibold">University of California, Irvine</span>. I will be joining <span className="text-blue-300 font-bold">Meta</span> as a Software Engineering Intern this summer.
                </p>
                <p>
                    When I'm not coding, I enjoy playing guitar, lifting weights, going on
                    hikes, playing <span className="text-violet-400">League of Legends</span>, drinking boba, eating lots of food, and playing football. I mainly enjoy being able to practice my current skillsets, but I am always open to
                    explore new hobbies and things to do.
                </p>
            </div>
        </motion.section>
    );
}