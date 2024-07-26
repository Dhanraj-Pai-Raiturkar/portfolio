const About = () => {
  return (
    <section className="w-full flex justify-center" id="about">
      <div className="flex flex-col min-h-screen w-full">
        <div className="flex flex-col justify-center items-center w-full">
          <span className="text-center sm:text-sm font-medium text-slate-600 mt-2">
            Get To Know More
          </span>
          <span className="text-center text-3xl font-bold">About Me</span>
        </div>
        <div className="flex w-full p-4 justify-center w-full">
          <div className="flex flex-col w-full">
            <div className="flex w-full justify-center sm:flex-row flex-col items-center">
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
            </div>
            <div className="w-full flex items-center justify-center p-4">
              <p className="text-center w-full sm:text-sm font-medium text-slate-600 sm:w-3/4 w-full">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt iusto accusantium facilis cumque ab fugiat laboriosam
                culpa suscipit hic, ipsa aliquam veritatis! Laudantium
                blanditiis modi porro quas, libero tempora voluptas. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Nesciunt iusto
                <br />
                <br />
                accusantium facilis cumque ab fugiat laboriosam culpa suscipit
                hic, ipsa aliquam veritatis! Laudantium blanditiis modi porro
                quas, libero tempora voluptas. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Nesciunt iusto accusantium facilis
                cumque ab fugiat laboriosam culpa suscipit hic, ipsa aliquam
                veritatis! Laudantium blanditiis modi porro quas, libero tempora
                voluptas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
