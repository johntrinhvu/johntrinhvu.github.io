import { useContext } from "react";
import { ActiveSectionContext } from "./context/ActiveSectionContext/ActiveSectionContext";

export function useActiveSection() {
  const ctx = useContext(ActiveSectionContext);
  if (!ctx) {
    throw new Error("useActiveSection must be used within an ActiveSectionProvider");
  }
  return ctx;
}
