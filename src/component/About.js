import React from "react";

export default function About() {
  return (
    <div>
      <section id="about">
        <div className="aboutsection lg:pt-20">
          <div
            className="grid min-h-full grid-cols-1 lg:grid-cols-2 max-w-7xl "
            style={{ minHeight: "500px" }}
          >
            <div className="relative grid bg-gray-700 rounded-tr-lg rounded-br-lg ">
              <img
                className="z-10 m-auto h-60 lg:h-80 rounded-2xl p-2"
                src="/aboutimage.JPG"
                alt=""
              />
              <div className="absolute hidden lg:block z-0 w-2/4 rounded-tl-lg rounded-tr-lg rounded-br-lg bg-blue-450 blueshade h-3/6 right-8 top-2"></div>
              <div className="absolute hidden  lg:block bottom-2 z-0 w-2/4 rounded-bl-lg rounded-tl-lg rounded-br-lg bg-blue-450 blueshade h-3/6 left-8"></div>
            </div>
            <div className="relative grid p-2" style={{backgroundColor:"#F8F8FA"}}>
              <div class="icon  ">
                <svg
                className="w-10 h-10 p-2 bg-red-500 rounded-full"
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </div>
              <p className="text-4xl"> About Me, </p>{" "}
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
