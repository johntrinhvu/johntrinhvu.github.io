import React from "react";
import Navbar from "../components/Navbar/Navbar";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Resume from "../components/Resume/Resume";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

export default function App() {
  return (
    <main className="font-ubuntu text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </main>
  );
};
