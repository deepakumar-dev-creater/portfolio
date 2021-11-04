import React, { Fragment, useState } from "react";
import { Popover, Transition, Tab } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Splide, SplideSlide } from "@splidejs/react-splide";
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
      <section id="home">
        <div className="relative h-full overflow-hidden bg-white lg:h-full">
          <div className="mx-auto max-w-7xl">
            <div className="relative z-10 pb-8 my-auto bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <svg
                className="absolute inset-y-0 right-0 hidden w-48 min-h-screen text-white transform translate-x-1/2 lg:block"
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
              <main className="px-4 mx-auto mt-10 max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-16 lg:px-8 ">
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
        </div>{" "}
      </section>

      <section id="about">
        {" "}
        <div className="my-10 aboutsection">
          <div className="grid mx-auto lg:grid-cols-2 max-w-7xl ">
            <div className="relative grid ">
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
                className="absolute rounded-full h-60 left-24 top-10"
                src="/Deepak_passport.png"
                alt=""
              />
            </div>
            <div className="grid">
              <h2 className="text-4xl mont"> About Me, </h2>{" "}
              <div className="mr-10 text-xl text-center about pop">
                Hi everyone, I like to solve problems to get a solution out of
                them. I will learn everything from mistakes and self-learner. I
                like to work on full-stack web development projects based on the
                needs with perfect Ui design and experience able to eager to
                learn new skills. Looking towards work that challenges my skills
                . I have worked on a real-time project that helps people or
                organizations with proper responsiveness and design you can find
                out in my portfolio
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="education">
        {" "}
        <div className="px-10 Education ">
          <h2 className="py-5 text-4xl text-center mont"> Education , </h2>{" "}
          <div className="py-16 mx-auto max-w-7xl sm:px-0">
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
                      "bg-white rounded-xl p-3 md:h-60",
                      "focus:outline-none  ring-white ring-opacity-60"
                    )}
                  >
                    {posts.map((post) => (
                      <div
                        className="grid grid-cols-1 gap-4 md:grid-cols-2 "
                        style={{ background: post.background }}
                      >
                        <div className="h-56 card-image w-96">
                          <img
                            src={post.image}
                            alt=""
                            className="h-56 text-left rounded-lg w-96"
                          />
                        </div>
                        <div className="flex-col my-auto space-y-2 text-xl">
                          <p className="text-center mont">{post.School}</p>
                          <p className="text-center mont">{post.year}</p>
                          <p className="text-center mont">{post.percentage}</p>
                        </div>
                      </div>
                    ))}
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </section>
      <section>
        <div className="skill ">
          <h2 className="py-5 text-4xl text-center mont"> Skills </h2>{" "}
          <div className="grid grid-cols-1 mx-auto max-w-7xl md:grid-cols-2">
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

      <section id="project">
        <div className="projects">
          <h2 className="py-5 text-4xl text-center mont"> Projects </h2>
          <div className="grid grid-cols-1 mx-auto md:grid-cols-2 lg:grid-cols-3 gap-y-10 max-w-7xl mont">
            <div className="mx-auto card ">
              <img className="relative" src="/movieclone.png" alt="" />
              <div className="absolute text-white top-12 text left-20">
                Movie Clone app
              </div>
              <div className="info">
                <h1>
                  Movie app is done with flutter using OMDBapi and newsapi with
                  Ui clone of Dribble poster
                </h1>

                <a
                  href="http://"
                  target="_blank"
                  className="glass-button"
                  rel="noopener noreferrer"
                >
                  See more
                </a>
              </div>
            </div>
            <div className="mx-auto card " style={{ marginTop: "0px" }}>
              <img
                className="relative object-fill"
                src="ecommerce.webp"
                alt=""
              />
              <div className="absolute top-0 text left-10">
                Kleid Ecommerce web application{" "}
              </div>
              <div className="info">
                <h1>
                  An fully functional Ecommerce web application using Flask with
                  base as HTML, JAVASCRIPT, PYTHON
                </h1>
                <a
                  href="http://"
                  target="_blank"
                  className="glass-button"
                  rel="noopener noreferrer"
                >
                  See more
                </a>
              </div>
            </div>
            <div className="mx-auto card">
              <img className="relative" src="elanthalir.png" alt="" />
              <div className="absolute top-0 text left-10">
                Elanthalir Donation website{" "}
              </div>
              <div className="info">
                <h1>
                  Donation website for NGO Organization were donators can join
                  as group serve people
                </h1>
                <a
                  href="http://"
                  target="_blank"
                  className="glass-button"
                  rel="noopener noreferrer"
                >
                  See more
                </a>
              </div>
            </div>
            <div className="mx-auto card">
              <img className="relative" src="/payroll.jpg" alt="" />
              <div className="absolute top-0 text left-12">
                Payroll Web-application{" "}
              </div>
              <div className="info">
                <h1>
                  I have developed a full-stack web project on payroll process
                  which is based on client needs with their conditions
                </h1>
                <a
                  href="http://"
                  target="_blank"
                  className="glass-button"
                  rel="noopener noreferrer"
                >
                  See more
                </a>
              </div>
            </div>
            <div className="mx-auto card">
              <img className="relative" src="/spotify.jpg" alt="" />
              <div className="absolute top-0 text left-28">SpotifyClone</div>
              <div className="info">
                <h1>
                  I have a Cloned the Spotify Music streaming app using flutter.
                  Where it will play songs in mobile device
                </h1>
                <a
                  href="http://"
                  target="_blank"
                  className="glass-button"
                  rel="noopener noreferrer"
                >
                  See more
                </a>
              </div>
            </div>
            <div className="mx-auto card">
              <img className="relative bg-current" src="/employee.jpg" alt="" />
              <div className="absolute top-0 text left-10">
                Employee Management System{" "}
              </div>
              <div className="info">
                <h1>
                  Created JAVA application with MySQL database for Employee
                  maintenance where admin can upload the employee information
                  and leave details this helps to admin to manage the record in
                  the company
                </h1>
                <a
                  href="http://"
                  target="_blank"
                  className="glass-button"
                  rel="noopener noreferrer"
                >
                  See more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

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
        {/* <Splide       options={ {
        rewind: true,
      } }>
          <SplideSlide>
            <img src="/fish.jpg" className="min-h-full mx-auto w-96" alt="Image 1" />
          </SplideSlide>
          <SplideSlide>
            <img src="/bird.jpeg" className="w-6/12 min-h-full mx-auto" alt="Image 2" />
          </SplideSlide>
          <SplideSlide>
            <img src="/duck.jpeg" className="mx-auto w-96" alt="Image 2" />
          </SplideSlide>
          <SplideSlide>
            <img src="/butterfly.jpg" className="min-h-full mx-auto w-96" alt="Image 2" />
          </SplideSlide>
          <SplideSlide>
            <img src="/lamp.jpg" className="mx-auto w-96" alt="Image 2" />
          </SplideSlide>
          <SplideSlide>
            <img src="/dog.jpeg" className="min-h-full mx-auto w-96" alt="Image 2" />
          </SplideSlide>
        </Splide> */}
      </div>
      <hr className="mx-10 mt-10 border-2 border-black" />
      <div className="contact">
        <h2 className="py-5 text-4xl text-center mont"> Contact form </h2>
        <div className="grid grid-cols-1 mx-auto md:grid-cols-2 max-w-7xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497511.1146206518!2d79.92880233573983!3d13.048043808612352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1635743054187!5m2!1sen!2sin"
            className="w-full h-full p-2"
            style={{ border: "0" }}
            loading="lazy"
          ></iframe>
          <form className="max-w-lg min-w-full p-4">
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
    </>
  );
};

export default IndexPage;
