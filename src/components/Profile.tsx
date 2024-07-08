import React from "react";
import Navbar from "./Navbar";

export type ProfileProps = {
  toggleNavbar?: Function;
};

const Profile: React.FC<ProfileProps> = ({ toggleNavbar }) => {
  return (
    <section className="flex flex-col h-full h-screen">
      <section className="flex justify-between items-center h-20 xl:px-76">
        <Navbar toggleNavbar={toggleNavbar} />
      </section>
      <section className="flex flex-col md:flex-row justify-center items-around h-full sm:py-4 py-20 sm:h-5/6 content-center">
        <div className="flex h-full justify-center sm:items-center items-end px-10">
          <img
            src="./profile.jpg"
            className="border-1 border-slate-900 object-cover rounded-full h-56 w-56 sm:h-72 sm:w-72"
          />
        </div>
        <div className="flex content-center justify-center h-full sm:items-center items-start px-10 py-2">
          <div className="flex flex-col">
            <span className="text-center w-full sm:text-sm font-medium text-slate-600 mt-2">
              Hello, I'm
            </span>
            <span className="text-center text-3xl font-bold mt-2">
              Dhanraj Pai Raiturkar
            </span>
            <span className="text-center text-lg font-medium text-slate-600 mt-2">
              MERN Stack Developer
            </span>
            <div className="flex justify-items-center content-center justify-center mt-2">
              <button className="border-2 border-slate-700 rounded-full py-2 px-4 mx-2 text-sm font-medium text-slate-900">
                Download CV
              </button>
              <button className=" border-slate-700 rounded-full py-2 px-4 mx-2 text-sm font-medium text-slate-50 bg-slate-900">
                Contact Info
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Profile;
