import React from "react";

export default function About() {
  return (
    <div>
      <section id="about">
        <div className="aboutsection lg:pt-20">
          <div
            className="grid grid-cols-1  lg:grid-cols-2 max-w-7xl min-h-full "
            style={{ minHeight: "500px" }}
          >
            <div className="relative grid">
              <div className="blueshade absolute h-full bg-blue-900 w-4/5 z-0 rounded-tr-lg rounded-br-lg"></div>
              <img
                className="m-auto  h-80 z-10 rounded-2xl"
                src="/Deepak_passport.png"
                alt=""
              />
            </div>
            <div className="grid">
              <p className="text-4xl "> About Me, </p>{" "}
              <div className="mr-10 text-xl text-center about pop">
                Hi everyone, I like to solve problems to get a solution out of
                them. I will learn everything from mistakes and self-learner. I
                like to work on full-stack web development projects based on the
                needs with perfect Ui design and experience able to eager to
                learn new skills. Looking towards work that challenges my skills
                . I have worked on a real-time project that helps people or
                organizations with proper responsiveness and design you can find
                out in my portfolio
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
