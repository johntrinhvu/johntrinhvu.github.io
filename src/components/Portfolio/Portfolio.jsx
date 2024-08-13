"use client";

import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../../data.ts";
import Project from "../Project/Project";
import { useSectionInView } from "../../hooks.tsx";

export default function Portfolio() {
    const { ref } = useSectionInView("Portfolio", 0.35);

    return (
        <section
            ref={ref}
            id="portfolio"
            className="scroll-mt-28 mb-28"
        >
            <div className="text-center flex flex-col items-center justify-center">
                <CodeIcon className="text-purple-400 w-12 h-12 flex-shrink-0" /> 
                <h1 className="text-gray-100 text-3xl font-semibold mb-8">Portfolio</h1>
            </div>
            <div>
                {projects.map((project, index) => (
                    <React.Fragment
                        key={index}
                    >
                        <Project {...project} />
                    </React.Fragment>
                ))}
            </div>

        </section>
    );

};