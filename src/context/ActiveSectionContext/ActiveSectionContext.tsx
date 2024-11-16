"use client"

import React, { useState, createContext, useContext } from "react";
import type { SectionName } from "../../types.tsx";

type ActiveSectionContextProviderProps = {
    children : React.ReactNode;
}

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    timeOfLastClick: number,
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
}

export default function ActiveSectionContextProvider({ children }: 
    ActiveSectionContextProviderProps
) {
    const [activeSection, setActiveSection] = useState<SectionName>("home");
    const [timeOfLastClick, setTimeOfLastClick] = useState(0);

    return (
        <ActiveSectionContext.Provider
            value={{
                activeSection,
                setActiveSection,
                timeOfLastClick,
                setTimeOfLastClick
            }}
        >
            {children}
        </ActiveSectionContext.Provider>
    );
}

export function useActiveSectionContext() {
    const context = useContext(ActiveSectionContext);

    if (context === null) {
        throw new Error(
            "useActiveSectionContext must be used within an ActiveSectionContextProvider"
        );
    }

    return context;
}