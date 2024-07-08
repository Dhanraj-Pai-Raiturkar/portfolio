import { useEffect, useState } from "react";
import Profile from "./components/Profile";
import NavbarModile from "./components/NavbarMobile";
import About from "./components/About";

function App() {
  const [toggleNavbar, setToggleNavbar] = useState<boolean>(false);
  useEffect(() => {
    console.log("navbar toggled", toggleNavbar);
  }, [toggleNavbar]);
  return (
    <main className="bg-gradient-to-b from-slate-50 to-stone-300 m-0 p-0 border-0">
      {toggleNavbar ? (
        <NavbarModile toggleNavbar={setToggleNavbar} />
      ) : (
        <section className="flex flex-col p-0 m-0 w-full">
          <Profile toggleNavbar={setToggleNavbar} />
          <About />
        </section>
      )}
    </main>
  );
}

export default App;
