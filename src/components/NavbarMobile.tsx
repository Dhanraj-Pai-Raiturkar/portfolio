import React from "react";

export type NavbarMobileProps = {
  toggleNavbar?: Function;
};

const NavbarModile: React.FC<NavbarMobileProps> = ({ toggleNavbar }) => {
  const closeModal = () => {
    if (toggleNavbar) toggleNavbar((prev: boolean) => !prev);
  };
  return (
    <section
      onClick={closeModal}
      className="bg-gradient-to-b from-slate-50 to-stone-400 h-screen w-screen m-0 p-0 border-0 flex flex-col items-center justify-center"
    >
      <ul className="list-none flex flex-col">
        <li
          className="text-center my-4 text-slate-900 font-medium text-xl"
          onClick={(e: any) => {
            e.preventDefault();
            alert("yes");
          }}
        >
          About
        </li>
        <li className="text-center my-10 text-slate-900 font-medium text-xl">
          Experience
        </li>
        <li className="text-center my-10 text-slate-900 font-medium text-xl">
          Projects
        </li>
        <li className="text-center my-10 text-slate-900 font-medium text-xl">
          Contact
        </li>
      </ul>
    </section>
  );
};

export default NavbarModile;
