import React, { useRef, useEffect, useState } from "react";
import { gsap, Linear } from "gsap";
export default function Skills() {
  let [gsapCount, setGsapCount] = useState(0);

  const p1 = useRef();
  useEffect(() => {
    gsap.to(p1.current, {
      width: "80%",
      ease: Linear.easeNone,
      duration: "3",
     onUpdate:()=>{
      console.log(gsapCount)
      setGsapCount(gsapCount++)
     }
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
                <div>HTML</div>
                <div> {gsapCount}%</div>
              </div>
              <div className="relative min-w-full bg-gray-200 rounded sm:w-1/2">
                <div
                  ref={p1}
                  style={{width:"0%"}}
                  className="absolute top-0 h-4 rounded shim-green"
                ></div>
              </div>
              <div className="flex justify-between">
                <div>HTML</div>
                <div>98%</div>
              </div>
              <div className="relative min-w-full bg-gray-200 rounded sm:w-1/2">
                <div
                  style={{ width: "80%" }}
                  className="absolute top-0 h-4 rounded shim-blue"
                ></div>
              </div>
              <div className="flex justify-between">
                <div>HTML</div>
                <div id="count">98%</div>
              </div>
              <div className="relative min-w-full bg-gray-200 rounded sm:w-1/2">
                <div
                  style={{ width: "100%" }}
                  className="absolute top-0 h-4 rounded shim-red"
                ></div>
              </div>
            </div>
            <div className="flex flex-col p-10 space-y-3">
              <div className="flex justify-between">
                <div>HTML</div>
                <div>98%</div>
              </div>
              <div className="relative min-w-full bg-gray-200 rounded sm:w-1/2">
                <div
                  style={{ width: "60%" }}
                  className="absolute top-0 h-4 rounded shim-green"
                ></div>
              </div>
              <div className="flex justify-between">
                <div>HTML</div>
                <div>98%</div>
              </div>
              <div className="relative min-w-full bg-gray-200 rounded sm:w-1/2">
                <div
                  style={{ width: "80%" }}
                  className="absolute top-0 h-4 rounded shim-blue"
                ></div>
              </div>
              <div className="flex justify-between">
                <div>HTML</div>
                <div>98%</div>
              </div>
              <div className="relative min-w-full bg-gray-200 rounded sm:w-1/2">
                <div
                  style={{ width: "100%" }}
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
