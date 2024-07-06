import React from "react";

export type NavbarProps = {
  toggleNavbar?: Function;
};

const Navbar: React.FC<NavbarProps> = ({ toggleNavbar }) => {
  const clickHandler = () => {
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
            <li className="flex-1 mx-3 hover:cursor-pointer hover:text-slate-950 text-slate-600">
              About
            </li>
            <li className="flex-1 mx-3 hover:cursor-pointer hover:text-slate-950 text-slate-600">
              Experience
            </li>
            <li className="flex-1 mx-3 hover:cursor-pointer hover:text-slate-950 text-slate-600">
              Projects
            </li>
            <li className="flex-1 mx-3 hover:cursor-pointer hover:text-slate-950 text-slate-600">
              Contact
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-start items-center  sm:hidden w-full mb-4">
        <div
          className="flex flex-col text-2xl mx-3 font-semibold hover:cursor-pointer"
          onClick={clickHandler}
        >
          <div className="h-1 w-8 bg-slate-500 mb-1"></div>
          <div className="h-1 w-8 bg-slate-500 mb-1"></div>
          <div className="h-1 w-8 bg-slate-500 mb-1"></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
