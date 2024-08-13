"use client";

import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../../data.ts";
import { motion } from "framer-motion";
import { useSectionInView } from "../../hooks.tsx";

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
};

export default function Skills() {
    const { ref } = useSectionInView("Skills", 0.3);

    return (
        <motion.section
            ref={ref}
            id="skills"
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
        >
            <ChipIcon className="w-12 inline-block mb-4 text-purple-400" /> 
            <h1 className="text-gray-100 text-3xl font-semibold mb-8">Skills and Technologies</h1>
            <ul className="flex flex-wrap justify-center gap-2 text-lg">
                {skills.map((skill, index) => (
                    <motion.li
                        className="border-black rounded-xl px-5 py-3"
                        key={index}
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once: true,
                        }}
                        custom={index}
                    >
                        <div className="flex bg-gray-800 px-5 py-3 border-gray-700 border-2 rounded-xl">
                            <BadgeCheckIcon className="text-purple-400 w-6 h-6 flex-shrink-0 mr-4" />
                            <span className="title-font font-medium">
                                {skill}
                            </span> 
                        </div>
                    </motion.li>
                ))}

            </ul>
        </motion.section>
    );
};