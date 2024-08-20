const About = () => {
  return (
    <section className="w-full flex justify-center mb-28 md:mb-0" id="about">
      <div className="flex flex-col min-h-screen w-full">
        <div className="flex flex-col justify-center items-center w-full">
          <span className="text-center text-lg font-medium text-slate-600 mt-2">
            Get To Know More
          </span>
          <span className="text-center text-3xl font-bold">About Me</span>
        </div>
        <div className="flex w-full p-4 justify-center w-full">
          <div className="flex flex-col w-full">
            {/* <div className="flex w-full justify-center sm:flex-row flex-col items-center">
              <div className="border-2 border-slate-400 flex flex-col justify-center items-center py-4 px-2 w-full sm:w-3/4 lg:w-1/4 rounded-xl m-4 sm:min-h-60 md:min-h-44">
                <span className="h-10 w-10">
                  <img
                    className="w-full h-full"
                    src="icon-education.png"
                    alt="icon"
                  />
                </span>
                <span className="text-center sm:text-lg font-medium text-slate-900">
                  Experience
                </span>
                <span className="text-center sm:text-sm font-medium text-slate-600">
                  2+ years
                </span>
                <span className="text-center sm:text-sm font-medium text-slate-600">
                  JS MERN Stack Development
                </span>
              </div>
              <div className="border-2 border-slate-400 flex flex-col justify-center items-center py-4 px-2 w-full sm:w-3/4 lg:w-1/4 rounded-xl m-4 sm:min-h-60 md:min-h-44">
                <span className="h-10 w-10 bg-transparent">
                  <img
                    className="w-full h-full bg-transparent"
                    src="icon-education.png"
                    alt="icon"
                  />
                </span>
                <span className="text-center sm:text-lg font-medium text-slate-900">
                  Education
                </span>
                <span className="text-center sm:text-sm font-medium text-slate-600">
                  BCA Bachelors Degree
                </span>
                <span className="text-center sm:text-sm font-medium text-slate-600">
                  MCA Masters Degree
                </span>
              </div>
            </div> */}
            <div className="w-full flex items-center justify-center p-4 flex-col">
              <div className="border-2 border-slate-400 flex flex-col justify-center items-center py-4 px-2 w-full sm:w-3/4 lg:w-1/4 rounded-xl m-4 sm:min-h-60 md:min-h-44">
                <span className="h-10 w-10 bg-transparent">
                  <img
                    className="w-full h-full bg-transparent"
                    src="icon-education.png"
                    alt="icon"
                  />
                </span>
                <span className="text-center sm:text-lg font-medium text-slate-900">
                  Education
                </span>
                <span className="text-center sm:text-sm font-medium text-slate-600">
                  {/* BCA Bachelors Degree */}
                  Bachelor of Computer Applications
                </span>
                <span className="text-center sm:text-sm font-medium text-slate-600">
                  Master of Computer Applications
                </span>
              </div>
              <p className="text-center w-full text-lg font-medium text-slate-600 sm:w-3/4 w-full">
                I am Dhanraj Pai Raiturkar, a dedicated software engineer with a
                strong academic foundation in computer applications. My journey
                in the world of technology began at Shree Damodar College of
                Commerce and Economics, Goa, where I earned my Bachelor's degree
                in Computer Applications. During this time, I gained a solid
                grounding in software development
                <br />
                <br />
                Eager to expand my knowledge and expertise, I pursued a Master's
                degree in Computer Applications at Goa University. Here, I
                focused on advanced topics such as data structures, algorithms,
                and database management, achieving a strong academic record that
                reflects my commitment to learning and excellence. My education
                has equipped me with the skills and knowledge necessary to
                navigate the ever-evolving field of software development.
              </p>
            </div>
            <div className="w-full flex items-center justify-center p-4 flex-col">
              <div className="border-2 border-slate-400 flex flex-col justify-center items-center py-4 px-2 w-full sm:w-3/4 lg:w-1/4 rounded-xl m-4 sm:min-h-60 md:min-h-44">
                <span className="h-10 w-10">
                  <img
                    className="w-full h-full"
                    src="icon-education.png"
                    alt="icon"
                  />
                </span>
                <span className="text-center sm:text-lg font-medium text-slate-900">
                  Experience
                </span>
                <span className="text-center sm:text-sm font-medium text-slate-600">
                  2+ years
                </span>
                <span className="text-center sm:text-sm font-medium text-slate-600">
                  Full Stack Javascript Developer
                </span>
              </div>
              <p className="text-center w-full text-lg font-medium text-slate-600 sm:w-3/4 w-full">
                As an Associate Software Engineer at Zapcom, Bengaluru, I have
                accumulated two years of extensive experience in full-stack
                development. My journey began with a six-month internship, where
                I quickly transitioned from a shadow resource to a key
                contributor in various projects, working with technologies like
                JavaScript, TypeScript, AngularJS, ReactJS, and NodeJS.
                <br />
                <br />
                In my full-time role, I’ve led the development of several
                critical applications, with a focus on building scalable,
                serverless solutions using AWS. My work includes:
                <br />
                <br />
                <b>Frontend Development:</b> Crafting dynamic, responsive web
                applications using JavaScript, TypeScript, jQuery, HTML, CSS,
                React, and Angular. My work emphasizes creating user-friendly
                interfaces and maintaining a high standard of code quality.
                <br />
                <br />
                <b>Backend and API Development:</b> Building scalable, RESTful
                APIs using NodeJS, Express, and AWS serverless technologies. My
                contributions include designing and optimizing backend systems
                that are secure, efficient, and maintainable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
