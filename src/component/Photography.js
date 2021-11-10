import React from "react";

export default function Photography() {
  return (
    <div>
      <div className="photography ">
        <h2 className="py-5 text-4xl text-center mont"> My photography </h2>
        <div className="grid grid-cols-3 gap-4 p-10 mx-auto max-w-7xl">
          <div className="col-span-full md:col-span-1">
            {" "}
            <img src="/dog.jpeg" className="w-full h-96 rounded-xl" alt="Image 1" />
          </div>
          <div className="md:col-span-2 col-span-full">
            {" "}
            <img src="/bird.jpeg" className="min-w-full h-96 rounded-xl" alt="Image 2" />
          </div>
          <div className="row-span-0 col-span-full md:row-span-2 md:col-span-1">
            {" "}
            <img src="/fish.jpg" className="w-full h-full rounded-xl" alt="Image 1" />
          </div>
          <div className="col-span-2 md:col-span-1">
            <img src="/duck.jpeg" className="w-full h-80 rounded-xl" alt="Image 1" />
          </div>
          <div>
            <img src="/lamp.jpg" className="w-full h-80 rounded-xl" alt="Image 1" />
          </div>
          <div className="col-span-full md:col-span-2">
            <img src="/sunrise.jpg" className="w-full h-48 rounded-xl" alt="Image 1" />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
