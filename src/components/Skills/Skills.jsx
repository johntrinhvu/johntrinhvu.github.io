import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../../data.ts";
import { motion } from "framer-motion";

// export default function Skills() {
//     return (
//         <section id="skills" className="scroll-margin-top">
//             <div className="container px-5 py-10 mx-auto">
//                 <div className="text-center mb-20">
//                     <ChipIcon className="w-10 inline-block mb-4 text-purple-400" />
//                     <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
//                         Skills &amp; Technologies
//                     </h1>
//                     <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
//                         My portfolio reflects a broad spectrum of skills and technologies. 
//                         From frontend development to backend engineering, 
//                         I've cultivated a skill set that encompasses a range of technologies and methodologies.
//                     </p>
//                 </div>
//                 <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
//                     {skills.map((skill) => (
//                         <div key={skill} className="p-2">
//                             <div className="bg-gray-800 rounded flex p-4 h-full items-center">
//                                 <BadgeCheckIcon className="text-purple-400 w-6 h-6 flex-shrink-0 mr-4" />
//                                 <span className="title-font font-medium text-white">
//                                     {skill}
//                                 </span>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }
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

    return (
        <motion.section
            id="skills"
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
        >
            <ChipIcon className="w-12 inline-block mb-4 text-purple-400" /> 
            <h1 className="text-3xl font-medium mb-8">Skills and Technologies</h1>
            <ul className="flex flex-wrap justify-center gap-2 text-lg">
                {skills.map((skill, index) => (
                    <motion.li
                        className="bg-white border-black rounded-xl px-5 py-3"
                        key={index}
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once: true,
                        }}
                        custom={index}
                    >
                        <div className="flex bg-gray-100 px-5 py-3 border-gray-200 border-2 rounded-xl">
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