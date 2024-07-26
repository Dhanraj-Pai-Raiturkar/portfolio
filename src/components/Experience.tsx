import data from "../static/experiencev2.json";
import ResponsiveGrid from "./ResponsiveGrid";

const Experience = () => {
  return (
    <section
      className="flex flex-col min-h-full min-h-screen  mb-28 md:mb-0"
      id="experience"
    >
      <div className="flex flex-col min-h-screen w-full">
        <div className="flex flex-col justify-center items-center w-full">
          <span className="text-center text-lg font-medium text-slate-600 mt-2">
            Hands On
          </span>
          <span className="text-center text-3xl font-bold">Experience</span>
        </div>
        {/* <ResponsiveGrid>
          {data.map((image, index) => {
            return (
              <div
                key={`experience_${index}`}
                className="max-[500px]:h-40 h-56 md:h-40 lg:h-44 xl:h-56 flex justify-center items-center"
              >
                <img
                  src={image}
                  className="object-fill w-5/6 h-full md:w-full xl:w-full shadow-md rounded-xl grayscale opacity-90 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-500 hover:shadow-2xl"
                  alt="logo_image"
                />
              </div>
            );
          })}
        </ResponsiveGrid> */}
      </div>
    </section>
  );
};

export default Experience;
