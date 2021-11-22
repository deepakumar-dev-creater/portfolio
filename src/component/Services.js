import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngrycreative,
  faHtml5,
  faLinkedin,
  faSearchengin,
  faServicestack,
  FaMobileAlt,
  faMedapps,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
// faHtml5
export default function Services() {
  return (
    <section className="bg-fixed bg-cover bg-services">
      <h2>Services</h2>

      <div class="wrapper gap-y-10  pop ">
        <div class="single-service grid">
          <div className="m-auto">
            {" "}
            <FontAwesomeIcon
              icon={faHtml5}
              className="mx-2 mt-2 text-blue-450 lg:text-6xl text-4xl"
            />
          </div>

          <h3 className="font-bold">Web Development</h3>
        </div>
        <div class="single-service grid">
          <div className="m-auto">
            {" "}
            <FontAwesomeIcon
              icon={faAngrycreative}
              className="mx-2 mt-2  text-blue-450 lg:text-6xl text-4xl"
            />
          </div>

          <h3 className="font-bold">ui / ux design</h3>
        </div>
        <div class="single-service grid">
          <div className="m-auto">
            <FontAwesomeIcon
              icon={faServicestack}
              className="mx-2 mt-2 text-blue-450 lg:text-6xl text-4xl"
            />
          </div>

          <h3 className="font-bold">API Development</h3>
        </div>
        <div class="single-service grid">
          <div className="m-auto">
            <FontAwesomeIcon
              icon={faSearchengin}
              className="mx-2 mt-2 lg:text-6xl text-4xl text-blue-450"
            />
          </div>

          <h3 className="font-bold">SEO optimation</h3>
        </div>
        <div class="single-service grid">
          <div className="m-auto">
            {" "}
            <FontAwesomeIcon
              icon={faMedapps}
              className="mx-2 mt-2 text-blue-450 lg:text-6xl text-4xl"
            />
          </div>

          <h3 className="font-bold">App Development</h3>
        </div>
      </div>
    </section>
  );
}
