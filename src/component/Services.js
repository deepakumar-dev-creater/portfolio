import React from "react";

export default function Services() {
  return (
    <div className="bg-fixed bg-cover bg-services">
      <h2>Services</h2>

      <div class="wrapper gap-y-10">
        <div class="single-service">
          <div class="social">
            <i class="fa fa-codepen"></i>
          </div>
          <span></span>
          <h3>Web Development</h3>
         
        </div>
        <div class="single-service">
          <div class="social">
            <i class="fa fa-cogs"></i>
          </div>
          <span></span>
          <h3>ui / ux design</h3>
          
        </div>
        <div class="single-service">
          <div class="social">
            <i class="fa fa-diamond"></i>
          </div>
          <span></span>
          <h3>API Development</h3>
          
        </div>
        <div class="single-service">
          <div class="social">
            <i class="fa fa-cogs"></i>
          </div>
          <span></span>
          <h3>SEO optimation</h3>
         
        </div>
        <div class="single-service">
          <div class="social">
            <i class="fa fa-cogs"></i>
          </div>
          <span></span>
          <h3>App Development</h3>
         
        </div>
      </div>
    </div>
  );
}
