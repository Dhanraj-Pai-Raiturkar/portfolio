import ResponsiveGrid from "./ResponsiveGrid";
import data from "../static/getInTouch.json";

const Contact = () => {
  return (
    <section className="flex flex-col h-full mb-28 md:mb-0" id="contact">
      <div className="flex flex-col min-h-screen w-full">
        <div className="flex flex-col justify-center items-center w-full">
          <span className="text-center text-lg font-medium text-slate-600 mt-2">
            Get In
          </span>
          <span className="text-center text-3xl font-bold">Contact</span>
        </div>
        <ResponsiveGrid>
          {data.map((record, index) => {
            return (
              <a
                key={`experience_${index}`}
                href={record?.link}
                target="_blank"
                rel="noopener noreferrer"
                className="max-[500px]:h-40 h-56 md:h-40 lg:h-44 xl:h-56 flex justify-center items-center"
              >
                <img
                  src={record?.image}
                  className="object-fill w-5/6 h-full md:w-full xl:w-full shadow-md rounded-xl md:grayscale opacity-90 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-500 hover:shadow-2xl"
                  alt="logo_image"
                />
              </a>
            );
          })}
        </ResponsiveGrid>
      </div>
    </section>
  );
};

export default Contact;
