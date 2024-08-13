// export default function About() {
//     return (
//         <section id="about" className="scroll-margin-top">
//             <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
//                 <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
//                     <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-white">
//                         Hi, I'm <span className="title-font sm:text-5xl text-3xl mb-4 font-medium text-purple-400">John Trinh Vu</span>
//                     </h1>
//                     <h1 className="title-font sm:text-5xl text-5xl mb-4 font-medium text-white">
//                         Full Stack Developer
//                     </h1>
//                     <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
//                         SWE Undergraduate at UCI
//                     </h1>
//                     <p className="mb-8 leading-relaxed">
//                         I am currently a student pursuing a Bachelor of Science in Software Engineering and a Minor in Mathematics. 
//                         I bring a unique blend of technical expertise and competitive drive to everything I do. Whether I'm building innovative 
//                         software solutions, or playing at the highest level of Varsity League of Legends, I am always striving for excellence and pushing the boundaries of what's possible. 
//                     </p>
//                     <p className="mb-8 leading-relaxed">
//                         Some relevant courses that I have taken include: Boolean Logic and Discrete Structures, Discrete Mathematics for Computer Science, Computational Linear Algebra, Calculus I and II, 
//                         Programming with Software Libraries, Data Structure Implementation and Analysis, Design and Analysis of Algorithms, Computer Organization, Principles of Operating Systems, Software Analysis and Design, Data Management, and Project Management.
//                     </p>
//                     <div className="flex justify-center">
//                         <a 
//                           href="#contact"
//                           className="inline-flex text-purple-100 bg-purple-600 border-0 py-2 px-6 focus:outline-none hover:bg-purple-500 hover:text-white rounded text-lg transition ease-in duration 100">
//                           Work with Me
//                         </a>
//                         <a 
//                           href="#portfolio"
//                           className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg transition ease-in duration 100">
//                           My Projects
//                         </a>
//                     </div>
//                 </div>
//                 <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
//                     <img 
//                       className="object-cover object-center rounded"
//                       src="./Headshot.png"
//                       alt="headshot"
//                     />
//                 </div>
//             </div>
//         </section>
//     );
// }
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
                    I am a third year pursuing a <span className="text-violet-400">B.S. in Software Engineering</span> and a <span className="text-violet-400">Minor in Mathematics</span>{" "}
                    at the <span className="text-blue-300 font-semibold italic">University of California, Irvine</span>. Midway through college, I had enrolled in a 
                    coding bootcamp to learn full-sack web development, further pushing my career and allowing me to grow
                    and enjoy software engineering even more. My favorite part of programming is the <span className="text-violet-400">problem-solving aspect</span>, and I love
                    being able to figure out solutions to problems.
                </p>
                <p>
                    When I'm not coding, I enjoy playing guitar, lifting weights, going on
                    hikes, playing <span className="text-violet-400">League of Legends</span>, drinking boba, and eating lots of food. I mainly enjoy being able to practice my current skillsets, but I am always open to
                    explore new hobbies and things to do.
                </p>
            </div>
        </motion.section>
    );
}