import React from 'react'

export default function About() {
    return (
        <div>
             <section id="about">
        {" "}
        <div className="my-10 aboutsection">
          <div className="grid mx-auto lg:grid-cols-2 max-w-7xl ">
            <div className="relative grid ">
              <svg
                className="h-96 animate"
                id="sw-js-blob-svg"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
              >
                <defs>
                  <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                    <stop
                      id="stop1"
                      stop-color="rgba(248, 117, 55, 1)"
                      offset="0%"
                    ></stop>{" "}
                    <stop
                      id="stop2"
                      stop-color="rgba(251, 168, 31, 1)"
                      offset="100%"
                    ></stop>{" "}
                  </linearGradient>{" "}
                </defs>{" "}
                <path
                  fill="url(#sw-gradient)"
                  d="M21.2,-24.3C27.2,-20.3,31.5,-13.3,32,-6.2C32.6,0.8,29.4,8,25.2,14C21.1,20.1,16,25,9.1,29.5C2.2,34,-6.6,38.1,-13.1,35.8C-19.5,33.5,-23.7,24.8,-26.2,16.9C-28.8,8.9,-29.7,1.8,-29.8,-6.6C-30,-15,-29.3,-24.6,-24.2,-28.8C-19.1,-33,-9.6,-31.8,-1,-30.6C7.6,-29.5,15.2,-28.4,21.2,-24.3Z"
                  width="100%"
                  height="100%"
                  transform="translate(50 50)"
                  style={{
                    transition: "all 0.3s ease 0s;",
                  }}
                  stroke-width="0"
                  className=""
                ></path>
              </svg>
              <img
                className="absolute rounded-full h-60 left-24 top-10"
                src="/Deepak_passport.png"
                alt=""
              />
            </div>
            <div className="grid">
              <h2 className="text-4xl mont"> About Me, </h2>{" "}
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
    )
}
