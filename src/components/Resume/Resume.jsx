import { NewspaperIcon } from "@heroicons/react/solid";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { jobs } from "../../data";

export default function Resume() {
    return (
        <section id="resume" className="scroll-margin-top text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <NewspaperIcon className="mx-auto inline-block w-10 mb-4 text-purple-400" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        Work Experience
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-related text-base">
                        While I'm currently a student in college, I've eagerly pursued opportunities to gain real-world experience 
                        in the field of Software Engineering. Despite being early in my career journey, I've sought out opportunities to apply 
                        my skills and knowledge in practical settings.
                    </p>
                    <br />
                    <a href="https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:df81080c-6357-4f44-be12-bd4cf3473453" target="_blank" rel="noreferrer">
                        <button className="bg-white text-black rounded py-2 px-4 hover:text-purple-400 hover:bg-gray-200 transition ease-in duration-100">
                            Resume in PDF
                        </button>
                    </a>
                </div>
                <div className="flex flex-wrap -m-4">
                    <VerticalTimeline>
                        {jobs.map((job) => (
                            <VerticalTimelineElement
                                contentStyle={{ background: '#271a34', color: '#fff'}}
                                contentArrowStyle={{ borderRight: '7px solid #271a34' }}
                                iconStyle={{ background: job.iconBg }}
                                icon={
                                    <div className="flex justify-center items-center w-full h-full">
                                        <img 
                                            src={job.icon}
                                            alt={job.company}
                                            className="w-[60%] h-[60%] object-contain"
                                        />
                                    </div>
                                }
                                >
                                    <div>
                                        <h3 className="text-white text-[24px] font-bold text-left">
                                            {job.title}
                                        </h3>
                                        <p className="text-secondary text-[16px] font-semibold text-left" style={{color: '#f3d5ff', fontSize: '16px', margin: 0 }}>
                                           {job.company}
                                        </p>
                                        <p className="text-secondary text-left mt-5" style={{ color: '#8d6fab',fontSize: '14px', marginTop: '4px' }}>
                                            {job.date}
                                        </p>
                                    </div>

                                    <ul className="mt-5 list-disc ml-5 space-y-2">
                                        {job.points.map((point, index) => (
                                            <li
                                                key={`job-point-${index}`}
                                                className="text-white-100 text-[14px] pl-1 tracking-wider text-left"
                                            >
                                                {point}

                                            </li>
                                        ))}

                                    </ul>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>
            </div>
        </section>
    );
}

