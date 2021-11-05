import React ,{useState} from 'react'
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
        <div className="px-12 Education ">
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
        </div>
    )
}
