import React from 'react'

export default function Projects() {
    return (
        <div>
               <section id="project">
        <div className="projects">
          <h2 className="py-5 text-4xl text-center mont"> Projects </h2>
          <div className="grid grid-cols-1 mx-auto md:grid-cols-2 lg:grid-cols-3 gap-y-10 max-w-7xl mont">
            <div className="mx-auto card ">
              <img className="relative" src="/movieclone.png" alt="" />
              <div className="absolute text-white top-40 text left-20">
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
              <div className="absolute text-white top-40 text left-10">
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
              <div className="absolute text-white top-40 text left-10">
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
              <div className="absolute text-white top-40 text left-12">
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
              <div className="absolute text-white top-40 text left-28">
                SpotifyClone
              </div>
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
              <div className="absolute text-white top-40 text left-10">
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
        </div>
    )
}
