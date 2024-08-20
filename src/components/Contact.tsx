import ResponsiveGrid from "./ResponsiveGrid";
import data from "../static/getInTouch.json";

const Contact = () => {
  return (
    <section className="flex flex-col h-full" id="contact">
      <div className="flex flex-col w-full h-full">
        <div className="flex flex-col justify-center items-center w-full">
          <span className="text-center text-lg font-medium text-slate-600 mt-2">
            Get In
          </span>
          <span className="text-center text-3xl font-bold">Contact</span>
        </div>
        <div className="flex flex-col p-4 w-full justify-center items-center p-8">
          <form
            id="contact_me_form"
            className="flex flex-col justify-center p-8 align-center md:p-8 border-2 border-slate-200 rounded-lg xl:w-1/3 md:w-1/2 lg:w-1/2 sm:w-4/5"
          >
            <input
              placeholder="Full name"
              className="border-2 rounded-md px-2 py-1 my-2 xl:my-4"
            />
            <input
              placeholder="Your email"
              className="border-2 rounded-md px-2 py-1  my-2 xl:my-4"
            />
            <textarea
              placeholder="Your message goes here..."
              className="border-2 rounded-md px-2 py-1  my-2 xl:my-4"
            />
            <button
              id="submit_form"
              className="my-2 border-slate-700 rounded-full py-2 px-4 mx-2 text-sm font-medium text-slate-50 bg-slate-900 hover:bg-slate-200 hover:text-slate-900 hover:border-2 hover:border-slate-700"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="flex bg-slate-950 text-slate-50 text-wrap justify-center items-center rounded-t-xl">
          <ResponsiveGrid>
            {data.map((record, index) => {
              return (
                <a
                  key={`experience_${index}`}
                  href={record?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center"
                >
                  <span className="cursor-pointer">{record?.title}</span>
                </a>
              );
            })}
          </ResponsiveGrid>
        </div>
      </div>
    </section>
  );
};

export default Contact;
