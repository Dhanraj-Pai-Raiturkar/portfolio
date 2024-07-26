import React from "react";
import { navigateHandler } from "../utils/scroll";

export type NavbarProps = {
  toggleNavbar?: Function;
};

const Navbar: React.FC<NavbarProps> = ({ toggleNavbar }) => {
  const toggleMenuHandler = () => {
    if (toggleNavbar) toggleNavbar((prev: boolean) => !prev);
  };

  return (
    <>
      <div className="hidden sm:flex justify-around w-full">
        <div className="flex text-2xl mx-3 font-semibold hover:cursor-pointer">
          Dhanraj
        </div>
        <div className="flex">
          <ul className="list-none flex">
            <li
              id="link_about"
              className="flex-1 mx-3 hover:cursor-pointer hover:text-slate-950 text-slate-600 md:text-lg"
              onClick={navigateHandler}
            >
              About
            </li>
            <li
              id="link_experience"
              className="flex-1 mx-3 hover:cursor-pointer hover:text-slate-950 text-slate-600 md:text-lg"
              onClick={navigateHandler}
            >
              Experience
            </li>
            <li
              id="link_projects"
              className="flex-1 mx-3 hover:cursor-pointer hover:text-slate-950 text-slate-600 md:text-lg"
              onClick={navigateHandler}
            >
              Projects
            </li>
            <li
              id="link_contact"
              className="flex-1 mx-3 hover:cursor-pointer hover:text-slate-950 text-slate-600"
              onClick={navigateHandler}
            >
              Contact
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-start items-center  sm:hidden w-full">
        <div
          className="flex flex-col text-2xl mx-3 font-semibold hover:cursor-pointer"
          onClick={toggleMenuHandler}
        >
          <div className="h-1 w-8 bg-slate-900 mb-1"></div>
          <div className="h-1 w-8 bg-slate-900 mb-1"></div>
          <div className="h-1 w-8 bg-slate-900 mb-1"></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
