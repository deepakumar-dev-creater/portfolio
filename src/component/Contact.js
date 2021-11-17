import React from "react";

export default function Contact() {
  return (
    <div style={{backgroundColor:"#1597E5"}}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="white" fill-opacity="1" d="M0,96L60,128C120,160,240,224,360,229.3C480,235,600,181,720,181.3C840,181,960,235,1080,256C1200,277,1320,267,1380,261.3L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
        <h2 className="py-5 text-4xl text-center mont"> Contact form </h2>
        <div className="grid ">
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497511.1146206518!2d79.92880233573983!3d13.048043808612352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1635743054187!5m2!1sen!2sin"
            className="w-full h-full p-2"
            style={{ border: "0" }}
            loading="lazy"
          ></iframe> */}
          <form className="p-4 mx-auto min-w-7xl">
            <div className="flex flex-wrap mb-6 -mx-3">
              <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">
                  First Name
                </label>
                <input
                  className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-red-500 rounded appearance-none focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                />
                <p className="text-xs italic text-red-500">
                  Please fill out this field.
                </p>
              </div>
              <div className="w-full px-3 md:w-1/2">
                <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">
                  Last Name
                </label>
                <input
                  className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div className="flex flex-wrap mb-6 -mx-3">
              <div className="w-full px-3">
                <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">
                  E-mail
                </label>
                <input
                  className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  type="email"
                />
                <p className="text-xs italic text-gray-600">
                  Some tips - as long as needed
                </p>
              </div>
            </div>
            <div className="flex flex-wrap mb-6 -mx-3">
              <div className="w-full px-3">
                <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">
                  Message
                </label>
                <textarea
                  className="block w-full h-48 px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none resize-none no-resize focus:outline-none focus:bg-white focus:border-gray-500"
                  id="message"
                ></textarea>
                <p className="text-xs italic text-gray-600">
                  Re-size can be disabled by set by resize-none / resize-y /
                  resize-x / resize
                </p>
              </div>
            </div>
            <div className="md:flex md:items-center">
              <div className="md:w-1/3">
                <button
                  className="px-4 py-2 font-bold text-white bg-green-600 bg-teal-400 rounded shadow hover:bg-teal-400 focus:shadow-outline focus:outline-none"
                  type="button"
                >
                  Send
                </button>
              </div>
              <div className="md:w-2/3"></div>
            </div>
          </form>
        </div>
      </div>
    
  );
}
