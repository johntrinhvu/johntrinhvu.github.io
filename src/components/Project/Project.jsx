import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Project(props) {
    const { title, subtitle, description, tags, imageUrl, link } = props;
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress,
            }}
            className="group mb-3 sm:mb-8 last:mb-0"
            >
            <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="block"
                >

                <section 
                    className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-300 transition cursor-pointer"
                >
                    <div className="pb-4 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full">
                        <h3 
                            className="mt-3 sm:-mt-3 text-2xl font-semibold"
                        >
                            {title}
                        </h3>

                        <h6 
                            className="font-semibold"
                        >
                            {subtitle}
                        </h6>

                        <p 
                            className="mt-2 leading-relaxed text-gray-700"
                        >
                            {description}
                        </p>
                    
                        <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                            {tags.map((tag, index) => (
                                <li 
                                    className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full" 
                                    key={index}
                                >
                                    {tag}
                                </li>
                            ))}
                        </ul>
                        <img 
                            className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-lg shadow-2xl
                            transition
                            group-hover:scale[1.04]

                            group-hover:-translate-x-3
                            group-hover:translate-y-3
                            group-hover:-rotate-2
                            "
                            src={imageUrl} 
                            alt="Project I worked on" 
                            quality={95} 
                        />
                    </div>
                </section>
            </a>
        </motion.div>
    );
}