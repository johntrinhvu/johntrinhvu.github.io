import React from "react";
import ActiveSectionContextProvider from "../context/ActiveSectionContext/ActiveSectionContext.tsx";
import Header from "../components/Header/Header";
import Intro from "../components/Intro/Intro";
import SectionDivider from "../components/SectionDivider/SectionDivider";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Portfolio from "../components/Portfolio/Portfolio";
import Experience from "../components/Experience/Experience";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

export default function App() {
  return (
    // <body className="font-ubuntu text-gray-400 bg-gray-900 body-font">
    <body
      className="text-opacity-90 flex flex-col items-center px-4 font-ubuntu text-gray-300 relative pt-28 sm:pt-36"
    >
      <div className="bg-violet-300 absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
      <div className="bg-indigo-500 absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] 
        lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"
      >
      </div>

      <ActiveSectionContextProvider>
        <Header />
        <Intro />
        <SectionDivider />
        <About />
        <Skills />
        <Portfolio />
        <Experience />
        <Contact />
        <Footer />
      </ActiveSectionContextProvider>
    </body>
  );
};
