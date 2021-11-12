import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngrycreative,
  faHtml5,
  faLinkedin,
  faSearchengin,
  faServicestack,
  FaMobileAlt,  
  faMedapps
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
export default function Services() {
  return (
    <div className="bg-fixed bg-cover bg-services">
      <h2>Services</h2>

      <div class="wrapper gap-y-10 text-lg">
        <div class="single-service">
          {/* <div class="social">
            <i class="fa fa-codepen"></i>
          </div> */}
          <FontAwesomeIcon
            icon={faHtml5}
            className="mx-2 mt-2 text-blue-450 lg:text-4xl sm:text-2xl"
          />
          <span></span>
          <h3>Web Development</h3>
        </div>
        <div class="single-service">
        <FontAwesomeIcon
            icon={faAngrycreative}
            className="mx-2 mt-2 text-blue-450 lg:text-4xl sm:text-2xl"
          />
          <span></span>
          <h3>ui / ux design</h3>
        </div>
        <div class="single-service">
        <FontAwesomeIcon
            icon={faServicestack}
            className="mx-2 mt-2 text-blue-450 lg:text-4xl sm:text-2xl"
          />
          <span></span>
          <h3>API Development</h3>
        </div>
        <div class="single-service">
        <FontAwesomeIcon
            icon={faSearchengin}
            className="mx-2 mt-2 lg:text-4xl sm:text-2xl text-blue-450"
          />
          <span></span>
          <h3>SEO optimation</h3>
        </div>
        <div class="single-service">
        <FontAwesomeIcon
            icon={faMedapps}
            className="mx-2 mt-2 text-blue-450 lg:text-4xl sm:text-2xl"
          />
          <span></span>
          <h3>App Development</h3>
        </div>
      </div>
    </div>
  );
}
