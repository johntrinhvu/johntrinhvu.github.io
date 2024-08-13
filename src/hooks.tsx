import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "./context/ActiveSectionContext/ActiveSectionContext.tsx";
import React, { useEffect } from "react";
import type { SectionName } from "./types.tsx";

type useSectionInViewProps = {
    sectionName: SectionName;
};

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
    const { ref, inView } = useInView({
        threshold,
    });
    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection(sectionName);
        }
    }, [inView, setActiveSection, timeOfLastClick, sectionName]);

    return {
        ref,
    };
}