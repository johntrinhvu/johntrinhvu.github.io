import React, { useEffect } from "react";
import { getAccessToken } from "../spotify/spotify";
import { ActiveSectionProvider } from "../context/ActiveSectionContext/ActiveSectionContext";
import { useActiveSection } from "../hooks";
import Header from "../components/Header/Header";
import Intro from "../components/Intro/Intro";
import About from "../components/About/About";
import Experience from "../components/Experience/Experience";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

function Pages() {
  const { activeSection } = useActiveSection();

  return (
    <main className="max-w-[960px] mx-auto px-10 pt-[130px]">
      {activeSection === "home" && (
        <section key="home" className="page-enter">
          <Intro />
          <About />
        </section>
      )}
      {activeSection === "experience" && (
        <section key="experience" className="page-enter">
          <Experience />
        </section>
      )}
      {activeSection === "contact" && (
        <section key="contact" className="page-enter">
          <Contact />
        </section>
      )}
    </main>
  );
}

export default function App() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");
  
    if (code) {
      getAccessToken(code)
        .then(() => {
          window.history.replaceState(
            {},
            document.title,
            window.location.pathname
          );
        })
        .catch((err) => {
          console.error("Spotify authentication failed:", err);
        });
    }
  }, []);

  return (
    <ActiveSectionProvider>
      <Header />
      <Pages />
      <Footer />
    </ActiveSectionProvider>
  );
}
