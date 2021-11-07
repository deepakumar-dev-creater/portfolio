import React, { Fragment, useState } from "react";

import Home from "../component/Home.js";
import About from "../component/about.js";
import Education from "../component/Education.js";
import Skills from "../component/Skills.js";
import Projects from "../component/Projects.js";
import Photography from "../component/Photography.js";
import Contact from "../component/Contact.js";
import Services from "../component/Services.js"
import Testimonal from "../component/Testimonal"
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
// data

// markup
const IndexPage = () => {
  return (
    <>
      <Home />
      <About />
      <Education />
      <Skills />
      <Services />
      <Projects />
      <Photography />
      <Contact />
      <Testimonal/>
    </>
  );
};

export default IndexPage;
