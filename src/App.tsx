import Profile from "./components/Profile";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import ScrollUpButton from "./components/ScrollUpButton";
import { useEffect, useState } from "react";

function App() {
  const [renderScroll, setRenderScroll] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 500) {
        setRenderScroll(true);
      } else {
        setRenderScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <main className="m-0 p-0 border-0">
      <section className="flex flex-col p-0 m-0 w-full">
        <Profile />
        <About />
        {/* <Experience /> */}
        {/* <Projects /> */}
        <Contact />
        {renderScroll ? <ScrollUpButton /> : <></>}
      </section>
    </main>
  );
}

export default App;
