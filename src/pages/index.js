import React from "react";

import Home from "../component/Home.js";

import Education from "../component/Education.js";
import Skills from "../component/Skills.js";
import Projects from "../component/Projects.js";
import Photography from "../component/Photography.js";
import Contact from "../component/Contact.js";
import Services from "../component/Services.js";
import Testimonal from "../component/Testimonal";
import About from "../component/About.js";

// data

// markup
const IndexPage = () => {
  return (
    <>
      <Home />
      <About/>
      <Education />
      <Skills />
      <Services />
      <Projects />
      <Photography />
      <Testimonal />
      <Contact />
    </>
  );
};
export default IndexPage;
