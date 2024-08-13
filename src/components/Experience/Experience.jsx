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
                 <h1 className="text-gray-100 text-3xl font-semibold mb-8 ml-auto mr-auto">Experience</h1>
                <h3 className="text-gray-200 text-base font-semibold ml-auto mr-auto max-w-4xl">
                    Alongside my current experience, some relevant courses that I have taken in university include but not all:
                </h3>
                 <p className="text-gray-200 mt-3 mb-3 pl-0 ml-auto mr-auto max-w-4xl">
                    <span className="font-semibold text-indigo-300 italic">Computational Linear Algebra</span>, Boolean Logic and Discrete Structures, Discrete Mathematics for Computer Science, Calculus I and II, 
                    Programming with Software Libraries, <span className="font-semibold text-indigo-300 italic">Data Structure Implementation and Analysis</span>, Computer Organization,{" "} 
                    <span className="font-semibold text-indigo-300 italic">Design and Analysis of Algorithms</span>, Principles of Operating Systems, Software Analysis and Design, Data Management, Project Management, and Product Management. 
                 </p>
            </div>
            <VerticalTimeline lineColor="white">
                {jobs.map((item, index) => (
                    <React.Fragment key={index}>
                        <VerticalTimelineElement
                            contentStyle={{
                                background: "rgba(255, 255, 255, 0.05)",
                                boxShadow: "none",
                                border: "1px solid rgba(0, 0, 0, 0.05)",
                                textAlign: "left",
                                padding: "1.3rem 2rem"
                            }}
                            contentArrowStyle={{
                                borderRight: "0.4rem solid rgba(255, 255, 255, 0.5)"
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
                                <h3 className="font-semibold capitalize text-gray-100">{item.title}</h3>
                                <p className="text-secondary text-[16px] font-semibold text-left text-violet-300" style={{fontSize: '16px', margin: 0 }}>
                                    {item.company}
                                </p>
                                <p className="text-secondary text-left mt-5 text-violet-500" style={{fontSize: '14px', marginTop: '4px' }}>
                                    {item.date}
                                </p>
                            </div>
                            <ul className="mt-5 list-disc ml-5 space-y-2">
                                {item.points.map((point, idx) => (
                                    <li
                                        key={`job-point-${idx}`}
                                        className="text-slate-100 text-[14px] pl-1 tracking-wider text-left"
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