import React, { useState, useEffect } from "react";
import "./styles.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Metrics from "./components/Metrics";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Contact from "./components/Contact";

export default function App() {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
  }, [mode]);

  return (
    <>
      <Navbar mode={mode} setMode={setMode} />
      <Hero />
      <Metrics />
      <Skills />
      <Services />
      <Projects />
      <Timeline />
      <Testimonials />
      <About />
      <Contact />
    </>
  );
}