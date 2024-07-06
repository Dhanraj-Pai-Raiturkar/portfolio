import { useEffect, useState } from "react";
import Profile from "./components/Profile";
import NavbarModile from "./components/NavbarMobile";

function App() {
  const [toggleNavbar, setToggleNavbar] = useState<boolean>(false);
  useEffect(() => {
    console.log("navbar toggled", toggleNavbar);
  }, [toggleNavbar]);
  return (
    <main className="bg-gradient-to-b from-slate-50 to-stone-300 h-screen w-screen m-0 p-0 border-0">
      {toggleNavbar ? (
        <NavbarModile toggleNavbar={setToggleNavbar} />
      ) : (
        <Profile toggleNavbar={setToggleNavbar} />
      )}
    </main>
  );
}

export default App;
