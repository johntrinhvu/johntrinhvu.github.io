import React from "react";
import { NewspaperIcon } from "@heroicons/react/solid";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { jobs } from "../../data.ts";
import { useSectionInView } from "../../hooks.tsx";

export default function Experience() {
    const { ref } = useSectionInView("Experience", 0.15);

    return (
        <section
            id="experience"
            ref={ref}
            className="scroll-mt-28 mb-28 sm:mb-40"
        >
            <div className="text-center">
                <NewspaperIcon className="w-12 inline-block mb-4 text-purple-400" /> 
                 <h1 className="text-3xl font-semibold mb-8 ml-auto mr-auto">Experience</h1>
                <h3 className="text-base font-semibold ml-auto mr-auto max-w-4xl">
                    Alongside my current experience, some relevant courses that I have taken in university include but not all:
                </h3>
                 <p className="mt-3 mb-3 pl-0 ml-auto mr-auto max-w-4xl">
                    Boolean Logic and Discrete Structures, Discrete Mathematics for Computer Science, <span className="font-medium">Computational Linear Algebra</span>, Calculus I and II, 
                    Programming with Software Libraries, <span className="font-medium">Data Structure Implementation and Analysis</span>, Computer Organization, 
                    Principles of Operating Systems, <span className="font-semibold">Design and Analysis of Algorithms</span>, Software Analysis and Design, Data Management, Project Management, and Product Management. 
                 </p>
            </div>
            <VerticalTimeline lineColor="gray">
                {jobs.map((item, index) => (
                    <React.Fragment key={index}>
                        <VerticalTimelineElement
                            contentStyle={{
                                background: "#f3f4f6",
                                boxShadow: "none",
                                border: "1px solid rgba(0, 0, 0, 0.05)",
                                textAlign: "left",
                                padding: "1.3rem 2rem"
                            }}
                            contentArrowStyle={{
                                borderRight: "0.4rem solid #9ca3af"
                            }}
                            icon={
                                <div className="flex justify-center items-center w-full h-full">
                                    <img 
                                        src={item.icon}
                                        alt={item.company}
                                        className="w-[65%] h-[65%] object-contain mt-1"
                                    />
                                </div>
                            }
                            iconStyle={{
                                background: item.iconBg,
                            }}
                        >
                            <div>
                                <h3 className="font-semibold capitalize">{item.title}</h3>
                                <p className="text-secondary text-[16px] font-semibold text-left" style={{color: '#f3d5ff', fontSize: '16px', margin: 0 }}>
                                    {item.company}
                                </p>
                                <p className="text-secondary text-left mt-5" style={{ color: '#8d6fab',fontSize: '14px', marginTop: '4px' }}>
                                    {item.date}
                                </p>
                            </div>
                            <ul className="mt-5 list-disc ml-5 space-y-2">
                                {item.points.map((point, idx) => (
                                    <li
                                        key={`job-point-${idx}`}
                                        className="text-white-100 text-[14px] pl-1 tracking-wider text-left"
                                    >
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </VerticalTimelineElement>
                    </React.Fragment>
                ))}
            </VerticalTimeline>
        </section>
    )
}