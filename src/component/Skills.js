import React, { useRef, useEffect, useState } from "react";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function Skills() {
  let [pCount, setpCount] = useState(0);
  let [cCount, setcCount] = useState(0);
  let [mCount, setmCount] = useState(0);
  let [jCount, setjCount] = useState(0);
  let [rCount, setrCount] = useState(0);
  let [aCount, setaCount] = useState(0);

  const python = useRef();
  const c = useRef();
  const mysql = useRef();
  const javascript = useRef();
  const react = useRef();
  const angular = useRef();

  useEffect(() => {
    gsap.to(python.current, {
      scrollTrigger:{
        start: "30% 50%",
        end:"40%",
            toggleActions:"play pause resume complete"
          },
      width: "80%",
      ease: Linear.easeIn,
      duration: "3",
      onUpdate: () => {
        if (pCount <= 80) {
          setpCount(pCount++);
        }
      },
    });
    gsap.to(c.current, {
      scrollTrigger:{
        start: "30% 50%",
        end:"40%",
            toggleActions:"play pause resume complete"
          },
      width: "40%",
      ease: Linear.easeIn,
      duration: "3",
      onUpdate: () => {
        if (cCount <= 40) {
          setcCount(cCount++);
        }
   
      },

    });
    gsap.to(mysql.current, {
      scrollTrigger:{
        start: "30% 50%",
        end:"40%",
            toggleActions:"play pause resume complete"
          },
      width: "70%",
      ease: Linear.easeIn,
      duration: "3",
      onUpdate: () => {
        if (mCount <= 70) {
          setmCount(mCount++);
        }
      },
    });
    gsap.to(javascript.current, {
      scrollTrigger:{
        start: "30% 50%",
        end:"40%",
            toggleActions:"play pause resume complete"
          },
      width: "80%",
      ease: Linear.easeIn,
      duration: "3",
      onUpdate: () => {
        if (jCount <= 60) {
          setjCount(jCount++);
        }
      },
    });
    gsap.to(react.current, {
      scrollTrigger:{
        start: "30% 50%",
        end:"40%",
        markers:true,
            toggleActions:"play pause resume complete"
          },
      width: "50%",
      ease: Linear.easeIn,
      duration: "3",
      onUpdate: () => {
        if (rCount <= 50) {
          setrCount(rCount++);
        }
      },
    });
    gsap.to(angular.current, {
      scrollTrigger:{
        start: "30% 50%",
        end:"40%",
        markers:true,
            toggleActions:"play pause resume complete"
          },
      width: "30%",
      ease: Linear.easeIn,
      duration: "3",
      onUpdate: () => {
        if (aCount <= 30) {
          setaCount(aCount++);
        }
      },
    });
  }, []);

  return (
    <div>
      <section>
        <div className="skill ">
          <h2 className="py-5 text-4xl text-center mont"> Skills </h2>{" "}
          <div className="grid grid-cols-1 mx-auto max-w-7xl md:grid-cols-2">
            <div className="flex flex-col p-10 space-y-3">
              <div className="flex justify-between">
                <div>Python</div>
                <div> {pCount}%</div>
              </div>
              <div className="relative min-w-full bg-gray-200 rounded sm:w-1/2">
                <div
                  ref={python}
                  style={{ width: "0%" }}
                  className="absolute top-0 h-4 rounded shim-green"
                ></div>
              </div>
              <div className="flex justify-between">
                <div>C++</div>
                <div>{cCount}%</div>
              </div>
              <div className="relative min-w-full bg-gray-200 rounded sm:w-1/2">
                <div
                  ref={c}
                  style={{ width: "0%" }}
                  className="absolute top-0 h-4 rounded shim-blue"
                ></div>
              </div>
              <div className="flex justify-between">
                <div>MYSQL</div>
                <div>{mCount}%</div>
              </div>
              <div className="relative min-w-full bg-gray-200 rounded sm:w-1/2">
                <div
                  ref={mysql}
                  style={{ width: "0%" }}
                  className="absolute top-0 h-4 rounded shim-red"
                ></div>
              </div>
            </div>
            <div className="flex flex-col p-10 space-y-3">
              <div className="flex justify-between">
                <div>Javascript</div>
                <div>{jCount}%</div>
              </div>
              <div className="relative min-w-full bg-gray-200 rounded sm:w-1/2">
                <div
                  ref={javascript}
                  style={{ width: "0%" }}
                  className="absolute top-0 h-4 rounded shim-green"
                ></div>
              </div>
              <div className="flex justify-between">
                <div>React</div>
                <div>{rCount}%</div>
              </div>
              <div className="relative min-w-full bg-gray-200 rounded sm:w-1/2">
                <div
                  ref={react}
                  style={{ width: "0%" }}
                  className="absolute top-0 h-4 rounded shim-blue"
                ></div>
              </div>
              <div className="flex justify-between">
                <div>Angular</div>
                <div>{aCount}%</div>
              </div>
              <div className="relative min-w-full bg-gray-200 rounded sm:w-1/2">
                <div
                  ref={angular}
                  style={{ width: "0%" }}
                  className="absolute top-0 h-4 rounded shim-red"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
