import React, { useEffect, useRef, useState } from "react";
import { useActiveSection } from "../../hooks";

const TABS = [
  { key: "home", label: "home" },
  { key: "experience", label: "experience" },
  { key: "contact", label: "contact" },
];

export default function Header() {
  const { activeSection, setActiveSection } = useActiveSection();
  const btnRefs = useRef({});
  const scrollPositions = useRef({});
  const [glassStyle, setGlassStyle] = useState({ left: 0, width: 0 });

  const [isLight, setIsLight] = useState(() => {
    return localStorage.getItem("theme") === "light";
  });

  const handleTabClick = (key) => {
    if (key === activeSection) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    scrollPositions.current[activeSection] = window.scrollY;
    setActiveSection(key);

    requestAnimationFrame(() => {
      window.scrollTo({
        top: scrollPositions.current[key] || 0,
        behavior: "smooth",
      });
    });
  };

  const toggleTheme = () => {
    setIsLight((prev) => {
      const next = !prev;

      document.documentElement.dataset.theme = next ? "light" : "dark";
      localStorage.setItem("theme", next ? "light" : "dark");

      return next;
    });
  };

  const moveGlass = () => {
    const btn = btnRefs.current[activeSection];

    if (btn) {
      setGlassStyle({
        left: btn.offsetLeft,
        width: btn.offsetWidth,
      });
    }
  };

  useEffect(() => {
    document.documentElement.dataset.theme = isLight ? "light" : "dark";
  }, [isLight]);

  useEffect(() => {
    moveGlass();
    window.addEventListener("resize", moveGlass);

    return () => window.removeEventListener("resize", moveGlass);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSection]);

  return (
    <div className="fixed top-[18px] left-1/2 -translate-x-1/2 z-50 flex items-center gap-2.5">
      
      {/* Main navbar */}
      <nav
        className="relative flex gap-0.5 rounded-full p-1.5 border border-line bg-glass backdrop-blur-2xl backdrop-saturate-150 shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
        role="tablist"
        aria-label="Site sections"
      >
        <span
          className="absolute top-1.5 bottom-1.5 rounded-full bg-gradient-to-br from-periwinkle to-steel shadow-[0_6px_16px_var(--active-shadow)] transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)]"
          style={{
            left: glassStyle.left,
            width: glassStyle.width,
          }}
          aria-hidden="true"
        />

        {TABS.map((tab) => (
          <button
            key={tab.key}
            ref={(el) => (btnRefs.current[tab.key] = el)}
            role="tab"
            aria-selected={activeSection === tab.key}
            onClick={() => handleTabClick(tab.key)}
            className={`relative z-10 text-[13px] px-5 py-2.5 rounded-full transition-colors duration-300 ${
              activeSection === tab.key
                ? "text-bg"
                : "text-lo hover:text-hi"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      {/* Theme button */}
      <button
        onClick={toggleTheme}
        aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
        className="relative w-[46px] h-[46px] flex items-center justify-center rounded-full border border-line bg-glass backdrop-blur-2xl backdrop-saturate-150 shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition-all duration-300 hover:scale-105"
      >
        <span
          className={`absolute text-[18px] leading-none transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] ${
            isLight
              ? "opacity-0 rotate-90 scale-50"
              : "opacity-100 rotate-0 scale-100"
            }`}
        >
          ☼
        </span>
        <span
          className={`absolute text-[18px] leading-none transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] ${
            isLight
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 -rotate-90 scale-50"
            }`}
        >
          ☾
        </span>
      </button>
    </div>
  );
}