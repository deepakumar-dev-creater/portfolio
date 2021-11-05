import React from "react";

export default function Photography() {
  return (
    <div>
      <hr className="mx-10 mt-10 border-2 border-black" />
      <div className="photography">
        <h2 className="py-5 text-4xl text-center mont"> My photography </h2>
        <div className="grid grid-cols-3 gap-4 p-10 mx-auto max-w-7xl">
          <div>
            {" "}
            <img src="/dog.jpeg" className="w-full h-96 " alt="Image 1" />
          </div>
          <div className="col-span-2">
            {" "}
            <img src="/bird.jpeg" className="min-w-full h-96" alt="Image 2" />
          </div>
          <div className="row-span-2">
            {" "}
            <img src="/fish.jpg" className="w-full h-full " alt="Image 1" />
          </div>
          <div>
            <img src="/duck.jpeg" className="w-full h-80 " alt="Image 1" />
          </div>
          <div>
            <img src="/lamp.jpg" className="w-full h-80 " alt="Image 1" />
          </div>
          <div className="col-span-2">
            <img src="/sunrise.jpg" className="w-full h-48 " alt="Image 1" />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
