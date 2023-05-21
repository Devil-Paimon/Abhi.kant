const aboutData = {
  intro: {
    head: "I am Abhishek Kant",
    paragraph: "hjkl;",
  },
  btech: {
    head: "fghjkl",
    paragraph: "hjkl;",
  },
  intrests: {
    head: "fghjkl",
    paragraph: "hjkl;",
  },
  study: {
    head: "fghjkl",
    paragraph: "hjkl;",
  },
};

const About = () => {
  return (
    <>
      <div
        id="about"
        className="h-full bg-primary flex flex-col justify-start pt-16 pb-10 overflow-hidden"
      >
        <h1 className="text-3xl font-bold text-white underline text-center">
          About
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-12 mt-20">
          {Object.entries(aboutData).map((item, index) => {
            return (
              <div className="w-11/12  card-about" key={index}>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="p-3 flex flex-col  card-about-inner">
                  <h3 className="text-3xl text-end text-black font-semibold">
                    {item[1].head}
                  </h3>
                  <p className="text-white text-lg font-semibold text-justify p-5 overflow-hidden">
                    {item[1].paragraph}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default About;
