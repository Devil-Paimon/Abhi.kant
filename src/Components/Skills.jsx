const skillData = {
  Languages: [
    {
      subHead: "Languages that I have picked up over the years",
      lang: [
        ["JAVA", "80"],
        ["JAVASCRIPT", "60"],
        ["C++", "80"],
        ["C", "80"],
      ],
    },
  ],
  "Primary Tech Stack": [
    {
      subHead:
        "Libraries and Frameworks that I prefer and use on a daily basis",
      lang: [
        ["MongoDB", "80"],
        ["ExpressJS", "60"],
        ["ReactJS", "60"],
        ["NextJS", "60"],
        ["NodeJS", "60"],
      ],
    },
  ],
  "Tools and Frameworks": [
    {
      subHead: "Tools that I know and use apart from my primary stack",
      lang: [
        ["Firebase", "80"],
        ["Git and Github", "60"],
        ["Figma", "80"],
      ],
    },
  ],
};

const Skills = () => {
  return (
    <div id="skills" className="h-full bg-primary pt-16 ">
      <h1 className="text-3xl text-white font-bold text-center underline pb-5 ">
        Skills
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-3 justify-items-center pb-5 gap-8 md:gap-0  ">
        {Object.entries(skillData).map((data, item) => {
          return (
            <div key={item} className="w-96 flex flex-col gap-5">
              <h1 className="text-3xl font-bold text-white text-center">
                {data[0]}
              </h1>
              <div>
                {data[1].map((value, index) => {
                  return (
                    <div key={index} className="flex flex-col gap-5">
                      <p className="text-xl text-white text-justify">
                        {value.subHead}
                      </p>
                      <div className=" flex flex-col gap-5">
                        {Object.entries(value.lang).map((x, y) => {
                          return (
                            <div
                              id="box-shake"
                              key={y}
                              className="flex flex-row justify-between items-center pl-5 pr-5  rounded-lg shadow-xl wobble-hor-top"
                            >
                              <p className="text-black text-xl font-semibold">
                                {x[1][0]}
                              </p>
                              <div
                                className="radial-progress text-primary  scale-75"
                                style={{ "--value": x[1][1] }}
                              >
                                {x[1][1]}%
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
