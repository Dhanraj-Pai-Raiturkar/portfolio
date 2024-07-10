import Card from "./Card";
import data from "../static/experience.json";

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
          {/* <span>coming soon...</span> */}
          {data.map((experience) => {
            const image = experience.image;
            const title = experience.title;
            const content = experience.content;
            return <Card image={image} title={title} description={content} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
