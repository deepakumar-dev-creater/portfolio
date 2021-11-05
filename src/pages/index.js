import React, { Fragment, useState } from "react";

import Home from "../component/Home.js";
import About from "../component/about.js";
import Education from "../component/Education.js";
import Skills from "../component/Skills.js";
import Projects from "../component/Projects.js";
import Photography from "../component/Photography.js";
import Contact from "../component/Contact.js";
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
      <Projects />
      <Photography />
      <Contact />
    </>
  );
};

export default IndexPage;
