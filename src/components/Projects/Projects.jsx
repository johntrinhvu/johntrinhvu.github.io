import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../../data";

export default function Projects() {
    return (
        <section id="projects" className="scroll-margin-top text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <CodeIcon className="mx-auto inline-block w-10 mb-4 text-purple-400" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        Projects
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-related text-base">
                        Below, you'll find a collection of projects I've had the pleasure to work on. 
                        Each project represents a unique challenge and learning opportunity, showcasing my passion 
                        for development and problem-solving skills.
                    </p>
                    <br />
                    <p className="lg:w-2/3 mx-auto leading-related text-base">
                        Feel free to explore each project by clicking 
                        on its respective link, which will direct you to the GitHub repository. There, you can delve deeper 
                        into the project details, including its codebase, documentation, and more.
                    </p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {projects.map((project) => (
                        <a
                          href={project.link}
                          key={project.image}
                          className="sm:w-1/2 w-100 p-4"
                        >
                          <div className="flex relative">
                            <img 
                              src={project.image}
                              alt="gallery"
                              className="project-image absolute inset-0 w-full h-full object-cover object-center" 
                            />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100 transition ease-in duration-150">
                                <h2 className="tracking-widest text-sm title-font font-medium text-purple-400 mb-1">
                                    {project.subtitle}
                                </h2>
                                <h1 className="title-font text-lg font-medium text-white mb-3">
                                    {project.title}
                                </h1>
                                <p className="leading-relaxed">
                                    {project.description}
                                </p>
                            </div>
                          </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}