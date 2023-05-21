const aboutData = {
  intro: {
    head: "I am Abhishek Kant",
    paragraph:
      "Currently a fresher pursuing a Bachelor's in Technology, transitioning from Web 2.0 to Web 3.0. Aspiring to be a well-rounded web developer, I aim to excel in all aspects of the field. I Stay curious, embrace continuous learning, and explore emerging technologies to make an impact in web development's future.",
  },
  btech: {
    head: "Graduation",
    paragraph:
      "I am currently pursuing a Bachelor's in Computer Science and Engineering at the Institute of Engineering And Rural Technology in Prayagrag, Uttar Pradesh, India. My SGPA is 8.2, and I am expected to graduate in 2024. Computer Networks is my favorite subject at the moment.",
  },
  intrests: {
    head: "Schooling",
    paragraph:
      "I have completed my schooling at New Public Inter College in Lucknow, Uttar Pradesh, India. I attended high school from 2015 to 2017 and completed my intermediate education from 2017 to 2019. In high school, I achieved a score of 90%, and in intermediate, I scored 89%.",
  },
  study: {
    head: "Interest",
    paragraph:
      "Besides learning and coding, I find joy in playing volleyball and exploring my culinary skills. Volleyball keeps me active and fosters teamwork, while cooking allows me to experiment, discover new recipes, and create delightful dishes. These activities bring balance and happiness to my life outside the tech realm.",
  },
};

const About = () => {
  return (
    <>
      <div
        id="about"
        className="h-full  flex flex-col justify-start pt-16 pb-10 overflow-hidden"
      >
        <h1 className="text-3xl font-bold text-black underline text-center">
          About
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-12 mt-20">
          {Object.entries(aboutData).map((item, index) => {
            return (
              <div
                className="w-11/12 h-[20.5rem] md:h-60  card-about"
                key={index}
              >
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="p-3 flex flex-col  card-about-inner">
                  <h3 className="text-3xl text-end text-black font-semibold">
                    {item[1].head}
                  </h3>
                  <p className="text-black text-lg font-semibold text-justify p-5 overflow-hidden ">
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
