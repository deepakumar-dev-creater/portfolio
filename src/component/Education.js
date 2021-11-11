import React, { useState } from "react";
import { Popover, Transition, Tab } from "@headlessui/react";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Education() {
  let [categories] = useState({
    Secondary_School: [
      {
        background:
          "background-color: #DFDBE5;background-image: url('data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M12 0h18v6h6v6h6v18h-6v6h-6v6H12v-6H6v-6H0V12h6V6h6V0zm12 6h-6v6h-6v6H6v6h6v6h6v6h6v-6h6v-6h6v-6h-6v-6h-6V6zm-6 12h6v6h-6v-6zm24 24h6v6h-6v-6z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E');",
        School: "Montfort Matriculation School",
        id: 1,
        image: "/10thimage.jpg",
        year: "2015-2016",
        percentage: "89%",
        shareCount: 2,
      },
    ],
    Higher_School: [
      {
        School: "Sir Siva Swami Kalalaya Senior Secondary School",

        id: 1,
        image: "/12image.jpeg",
        year: "2017-2018",
        percentage: "84%",
        shareCount: 16,
      },
    ],
    College: [
      {
        School: "Jeppiaar Engineering College",

        id: 1,

        image: "College.jpg",
        year: "2018-2022",
        percentage: "80%",
        shareCount: 5,
      },
    ],
  });
  return (
    <div>
      <section id="education">
        {" "}
        <div className="Education ">
          <h2 className="py-5 text-4xl text-center "> Education , </h2>{" "}
          <div class="wrapper gap-y-10">
            <div class="single-service-edu ">
              <img src="/10th.svg" alt="" className="h-20 mx-auto mt-5" />
              <p className="mt-5 text-xl font-bold">Montfort Matriculation School</p>
              <p className="mt-5 font-bold">2015-2016</p>
              <p className="mt-5 font-bold">89%</p>
            </div>
            <div class="single-service-edu">
              <img src="/12th.svg" alt="" className="h-20 mx-auto mt-5" />

              <span></span>
              <p className="text-xl font-bold">
                Sir Siva Swami Kalalaya Senior Secondary School
              </p>
              <p className="mt-5 text-xl font-bold">2017-2018</p>
              <p className="mt-5 text-xl font-bold">84%</p>
            </div>
            <div class="single-service-edu">
              <img src="/12th_svg.svg" alt="" className="h-20 mx-auto mt-5" />

              <span></span>
              <p className="text-xl font-bold">Jeppiaar Engineering College</p>
              <p className="mt-5 text-xl font-bold">2018-2022</p>
              <p className="mt-5 text-xl font-bold">80%</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
