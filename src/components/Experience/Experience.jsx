import React from "react";
import Project from "../Project/Project";
import { experience, projects } from "../../data";

export default function Experience() {
  return (
    <div>
      <div className="flex justify-between items-end border-b border-line pb-6 mb-12">
        <h2 className="text-[30px] font-display font-semibold m-0">Experience</h2>
        <a
          href="https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:2e0b4d2e-09af-4ae7-a2aa-23530ec0d298"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[13px] font-medium px-[18px] py-[11px] rounded-lg bg-periwinkle text-bg shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition-all duration-300 ease-[cubic-bezier(.22,1,.36,1)] hover:shadow-[0_10px_36px_rgba(0,0,0,0.4)] hover:opacity-90 hover:scale-[1.03]"
        >
          Download CV ↓
        </a>
      </div>

      <div className="relative pl-[56px] pb-[40px] before:content-[''] before:absolute before:left-5 before:top-5 before:bottom-0 before:w-px before:bg-line">
        {experience.map((item, i) => (
          <Project key={item.id} entry={item} isLast={i === experience.length - 1} />
        ))}
      </div>

      <div className="pt-8 mb-10">
        <h2 className="text-2xl font-display font-semibold m-0">Projects</h2>
      </div>

      <div className="relative pl-[30px] pb-[10px] before:content-[''] before:absolute before:left-[5px] before:top-1.5 before:bottom-0 before:w-px before:bg-line">
        {projects.map((item, i) => (
          <Project key={item.id} entry={item} isLast={i === projects.length - 1} />
        ))}
      </div>
    </div>
  );
}
