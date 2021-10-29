import React, { Fragment, useState } from "react";
import { Popover, Transition, Tab } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
// data

// markup
const IndexPage = () => {
  let [categories] = useState({
    Secondary_School: [
      {
        School: "Secondary School",
        id: 1,
        title: "Does drinking coffee make you smarter?",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
    ],
    Higher_School: [
      {
        School: "Higher School",

        id: 1,
        title: "Is tech making coffee better or worse?",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
    ],
    College: [
      {
        School: "College",

        id: 1,

        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
    ],
  });
  const navigation = [
    {
      name: "Home",
      href: "localhost",
    },
    {
      name: "About",
      href: "localhost",
    },
    {
      name: "Education",
      href: "localhost.com",
    },
    {
      name: "Skills",
      href: "localhost.com",
    },
    {
      name: "Projects",
      href: "localhost.com",
    },
    {
      name: "Contact",
      href: "localhost.com",
    },
  ];
  return (
    <>
      <div className="relative h-full overflow-hidden bg-white lg:h-screen">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="absolute inset-y-0 right-0 hidden w-48 h-full text-white transform translate-x-1/2 lg:block"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
            <Popover>
              <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
                <nav
                  className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                  aria-label="Global"
                >
                  <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                    <div className="flex items-center justify-between w-full md:w-auto">
                      <a href="#" className="p-2 rounded-full font">
                        DK{" "}
                      </a>{" "}
                      <div className="flex items-center -mr-2 md:hidden">
                        <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="sr-only"> Open main menu </span>{" "}
                          <MenuIcon className="w-6 h-6" aria-hidden="true" />
                        </Popover.Button>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                    {" "}
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="font-medium text-gray-500 hover:text-gray-900 pop"
                      >
                        {" "}
                        {item.name}{" "}
                      </a>
                    ))}{" "}
                  </div>{" "}
                </nav>{" "}
              </div>
              <Transition
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel
                  focus
                  className="absolute inset-x-0 top-0 z-10 p-2 transition origin-top-right transform md:hidden"
                >
                  <div className="overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-black ring-opacity-5">
                    <div className="flex items-center justify-between px-5 pt-4">
                      <div>
                        <img
                          className="w-auto h-8"
                          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                          alt=""
                        />
                      </div>{" "}
                      <div className="-mr-2">
                        <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="sr-only"> Close main menu </span>{" "}
                          <XIcon className="w-6 h-6" aria-hidden="true" />
                        </Popover.Button>{" "}
                      </div>{" "}
                    </div>{" "}
                    <div className="px-2 pt-2 pb-3 space-y-1">
                      {" "}
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
                        >
                          {" "}
                          {item.name}{" "}
                        </a>
                      ))}{" "}
                    </div>{" "}
                  </div>{" "}
                </Popover.Panel>{" "}
              </Transition>{" "}
            </Popover>
            <main className="px-4 mx-auto mt-10 max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="relative sm:text-center lg:text-left">
                <p className="absolute lg:text-left font rotate -top-5 left-2 md:relative lg:absolute">
                  {" "}
                  👏Hello, fooks{" "}
                </p>{" "}
                <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline"> Deepak Kumar NG </span>{" "}
                  <span className="block text-indigo-600 xl:inline sm:text-2xlxl md:text-3xl ">
                    Software / Web developer{" "}
                  </span>{" "}
                </h1>{" "}
                <p className="mt-3 text-base text-gray-500 pop sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  I like making <span className="text-xl "> fun </span>{" "}
                  interactive things with code.I also talk & write about those
                  things.{" "}
                </p>{" "}
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                    >
                      Contact Me{" "}
                    </a>{" "}
                  </div>{" "}
                  <div className="mt-3 sm:mt-0 sm:ml-3 lg:my-auto">
                    <div className="flex justify-center ">
                      <FontAwesomeIcon
                        icon={faFacebook}
                        className="mx-2 lg:text-4xl sm:text-2xl"
                      />
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        className="mx-2 lg:text-4xl sm:text-2xl"
                      />
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="mx-2 lg:text-4xl sm:text-2xl"
                      />
                      <FontAwesomeIcon
                        icon={faInstagram}
                        className="mx-2 lg:text-4xl sm:text-2xl"
                      />
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </main>{" "}
          </div>{" "}
        </div>{" "}
        <div className=" lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="object-cover w-full h-56 sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="/Hero_image.jpeg"
            alt=""
          />
        </div>{" "}
      </div>{" "}
      <div className="hidden custom-shape-divider-bottom-1635419847 lg:block">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="my-10 aboutsection">
        <div className="grid lg:grid-cols-2">
          <div className="relative grid mx-auto">
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
              className="absolute mx-auto rounded-full h-60 left-24 top-10"
              src="/Deepak_passport.png"
              alt=""
            />
          </div>
          <div className="grid">
            <h2 className="text-4xl mont"> About Me, </h2>{" "}
            <hr className="mr-10 border-2 border-black" />
            <div className="mr-10 text-left about">
              Lorem ipsum dolor, sit amet consectetur adipisicing
              elit.Dignissimos aperiam accusamus ducimus, recusandae magnam
              porro cupiditate, blanditiis fugiat aspernatur ullam voluptatum
              rerum sint numquam tempora quae fuga a eius id!Fugiat natus
              dolorem qui fugit deleniti.Quo, architecto ? Aut obcaecati
              eveniet, temporibus quae necessitatibus dolorum officiis odit
              ipsam ad aperiam perspiciatis molestias inventore iste, expedita
              maxime, molestiae
            </div>
          </div>
        </div>
      </div>
      <div className="Education">
        <div className="w-full max-w-4xl px-2 py-16 mx-auto sm:px-0">
          <Tab.Group>
            <Tab.List className="flex p-1 space-x-1 text-center md:space-x-2 s bg-blue-900/20 rounded-xl">
              {Object.keys(categories).map((category, idx) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      "w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg",
                      "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60",
                      selected
                        ? "bg-white shadow"
                        : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                    )
                  }
                >
                  <div className=" mont sm:text-xs md:text-xl">
                    {category.replace("_", " ")}
                  </div>
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-2 focus-within:">
              {Object.values(categories).map((posts, idx) => (
                <Tab.Panel
                  key={idx}
                  className={classNames(
                    "bg-white rounded-xl p-3 h-60",
                    "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60"
                  )}
                >
                  <div className="grid grid-cols-2 ">
                    <div><img src="" alt=""  /></div>
                    <div>2</div>
                  </div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
