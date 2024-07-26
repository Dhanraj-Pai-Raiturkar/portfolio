import data from "../static/experiencev2.json";

const Experience = () => {
  return (
    <section className="flex flex-col min-h-full min-h-screen" id="experience">
      <div className="flex flex-col min-h-screen w-full">
        <div className="flex flex-col justify-center items-center w-full">
          <span className="text-center sm:text-sm font-medium text-slate-600 mt-2">
            Hands On
          </span>
          <span className="text-center text-3xl font-bold">Experience</span>
        </div>
        <div className="flex h-full w-full p-4 justify-start w-full items-center p-4 flex flex-col">
          <div className="p-4 grid gap-8 grid-cols-1 md:grid-cols-3 md:w-full lg:w-5/6">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
