import React, { useState } from "react";
import Navbar from "./Navbar";
import { navigateHandler } from "../utils/scroll";

const Profile: React.FC = () => {
  const [toggleNavbar, setToggleNavbar] = useState<boolean>(false);
  const navigate = (e: React.SyntheticEvent) => {
    toggleNavbar && setToggleNavbar((prev: boolean) => !prev);
    navigateHandler(e);
  };
  return (
    <>
      {toggleNavbar ? (
        <section className="z-10 bg-gradient-to-b from-slate-50 to-stone-400  h-screen w-screen m-0 p-0 border-0 flex flex-col items-center justify-center">
          <ul className="list-none flex flex-col">
            <li
              id="link_about"
              className="text-center my-4 text-slate-900 font-medium text-xl"
              onClick={navigate}
            >
              About
            </li>
            {/* <li
              id="link_experience"
              className="text-center my-10 text-slate-900 font-medium text-xl"
              onClick={navigate}
            >
              Experience
            </li>
            <li
              id="link_projects"
              className="text-center my-10 text-slate-900 font-medium text-xl"
              onClick={navigate}
            >
              Projects
            </li> */}
            <li
              id="link_contact"
              className="text-center my-10 text-slate-900 font-medium text-xl"
              onClick={navigate}
            >
              Contact
            </li>
          </ul>
        </section>
      ) : (
        <section className="flex flex-col h-full h-screen" id="profile">
          <section className="flex justify-between items-center h-20 xl:px-76">
            <Navbar toggleNavbar={setToggleNavbar} />
          </section>
          <section className="flex flex-col md:flex-row justify-center items-around h-full sm:py-4 py-20 sm:h-5/6 content-center">
            <div className="flex h-full justify-center sm:items-center items-start px-10">
              <img
                src="./profile.jpg"
                className="border-1 border-slate-900 object-cover rounded-full h-56 w-56 sm:h-72 sm:w-72"
                alt="profile_image"
              />
            </div>
            <div className="flex content-center justify-center h-full sm:items-center items-start px-10 py-2">
              <div className="flex flex-col">
                <span className="text-center w-full text-lg font-medium text-slate-600 mt-2">
                  Hello, I'm
                </span>
                <span className="text-center text-3xl font-bold mt-2">
                  Dhanraj Pai Raiturkar
                </span>
                <span className="text-center text-lg font-medium text-slate-600 mt-2">
                  Full Stack Web Developer
                </span>
                <div className="flex justify-items-center content-center justify-center mt-2">
                  <a href="./resume.pdf">
                    <button className="border-2 border-slate-700 rounded-full py-2 px-4 mx-2 text-sm font-medium text-slate-900 hover:bg-slate-200">
                      Download CV
                    </button>
                  </a>
                  <button
                    id="link_contact"
                    onClick={navigate}
                    className=" border-slate-700 rounded-full py-2 px-4 mx-2 text-sm font-medium text-slate-50 bg-slate-900 hover:bg-slate-200 hover:text-slate-900 hover:border-2 hover:border-slate-700"
                  >
                    Contact Info
                  </button>
                </div>
              </div>
            </div>
          </section>
        </section>
      )}
    </>
  );
};

export default Profile;
