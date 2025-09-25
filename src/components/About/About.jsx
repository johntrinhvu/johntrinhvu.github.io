import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-regular-svg-icons";
import { motion } from "framer-motion";
import { useSectionInView } from "../../hooks.tsx";

export default function About() {
    const { ref } = useSectionInView("about", 0.9);

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
                    I'm a recent graduate <span className="text-violet-400">B.S. Software Engineer</span> from the <span className="text-blue-300 font-semibold">University of California, Irvine</span>. I'm currently working at <span className="text-blue-300 font-bold">Meta</span> as a <span className="text-violet-400">Software Engineer, iOS Engineering</span> for Facebook Messenger under their Media team.
                    
                </p>
                <p>
                    If I'm not at my computer coding, some hobbies that I have are that I enjoy playing guitar, <span className="text-violet-400">lifting weights</span>, going on
                    hikes, playing <span className="text-violet-400">League of Legends</span>, drinking boba, cafe hopping, eating lots of food, watching anime, bass fishing, going on runs, and playing football.
                </p>
            </div>
        </motion.section>
    );
}
