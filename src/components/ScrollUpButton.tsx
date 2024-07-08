import { scrollTo } from "../utils/scroll";

const ScrollUpButton = () => {
  const handleScrollUp = () => {
    scrollTo(0, "smooth");
  };
  return (
    <button
      className="fixed bottom-0 right-0 bg-slate-900 bg-opacity-30 rounded-full h-14 w-14 m-4 hover:cursor-pointer"
      onClick={handleScrollUp}
    >
      <img src="icon-scrollUp.png" />
    </button>
  );
};

export default ScrollUpButton;
