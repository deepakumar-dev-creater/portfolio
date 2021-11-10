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
              {/* <div className="blueshade absolute h-1/3 bg-blue-900 w-2/4 z-0 rounded-tr-lg rounded-br-lg"></div> */}
              <img
                className="m-auto  h-80 z-10 rounded-2xl"
                src="/aboutimage.JPG"
                alt=""
              />
              <div className="blueshade absolute h-3/6 bg-blue-900 w-2/4 z-0 rounded-tr-lg rounded-br-lg right-8"></div>
              <div className="blueshade absolute h-3/6 bg-blue-900 w-2/4 z-0 rounded-tr-lg rounded-br-lg left-8 bottom-0"></div>
            </div>
            <div className="grid relative p-2" style={{backgroundColor:"#f8f5f2"}}>
              <div class="icon  ">
                <svg
                className="bg-red-500 rounded-full h-10 w-10 p-2"
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
              <p className="text-4xl about-text"> About Me, </p>{" "}
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
