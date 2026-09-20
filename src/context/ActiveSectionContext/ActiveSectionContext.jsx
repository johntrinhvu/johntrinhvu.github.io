import React, { createContext, useState } from "react";

export const ActiveSectionContext = createContext(null);

export function ActiveSectionProvider({ children }) {
  const [activeSection, setActiveSection] = useState("home");
  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
}
