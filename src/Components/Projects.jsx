const project = {
  udbhav: [
    {
      name: "UDBHAV",
      desc: "A Website based on React & FireBase to conduct IERT's Annual Cultural Fest, UDBHAV. It gives information about various events and enables users to register in events of their choice.",
      icon: "https://ik.imagekit.io/e5ixuxrlb/Udbhav/Card_Images/Udbhav/udbhavCard.png?updatedAt=1681228622711",
      link: "https://www.udbhav.life/",
      source: "https://github.com/Devil-Paimon/udbhav-2023",
    },
  ],
  "QR Generator": [
    {
      name: "QR Generator",
      desc: "A Website based on simple html css and Javascript used to generate QR codes. It can produce QR codes for URL and texts. Use the link to have a look on the Webpage. ",
      icon: "https://ik.imagekit.io/e5ixuxrlb/qr_code/barcode.png?updatedAt=1683795754268",
      link: "https://qr4all.netlify.app/",
      source: "https://github.com/Devil-Paimon/qr_code",
    },
  ],
  "E-commerce Website UI/UX": [
    {
      name: "E-Commerce",
      desc: "Designed and prototyped an intuitive and user-friendly E-commerce platform using Figma, incorporating best practices in UI/UX design, such as responsive layouts, clear navigation systems, and interactive elements to enhance user engagement.",
      icon: "https://ik.imagekit.io/e5ixuxrlb/portfolio/ecommerce.png?updatedAt=1714595279846",
      link: "https://www.figma.com/file/fvc7mOolWgpfFmjNuNuP4r/Full-E-Commerce-Website-UI-UX-Design-(Community)?type=design&node-id=1%3A3&mode=design&t=qpd65GtPwva5DONo-1",
      source: "https://www.figma.com/file/fvc7mOolWgpfFmjNuNuP4r/Full-E-Commerce-Website-UI-UX-Design-(Community)?type=design&node-id=1%3A3&mode=design&t=qpd65GtPwva5DONo-1",
    },
  ],
  "ProEnvironment": [
    {
      name: "ProEnvironment",
      desc: "Designed and prototyped an intuitive and user-friendly website promoting sustainable goods using Figma, incorporating best practices in UI/UX design, such as responsive layouts, clear navigation systems, and interactive elements to enhance user engagement.",
      icon: "https://ik.imagekit.io/e5ixuxrlb/portfolio/Stnaford_EightSimpleThings_3000x1000-scaled.jpg?updatedAt=1714595341233",
      link: "https://www.figma.com/file/d1WertQDcRliYfrZeBYr19/Sample-Design---Environmental-Project?type=design&node-id=0%3A1&mode=design&t=I5ED1b5zrF9wVPEV-1",
      source: "https://www.figma.com/file/d1WertQDcRliYfrZeBYr19/Sample-Design---Environmental-Project?type=design&node-id=0%3A1&mode=design&t=I5ED1b5zrF9wVPEV-1",
    },
  ],
};
const Projects = () => {
  return (
    <>
      <div id="projects" className="h-full   pt-10 pb-5 ">
        <h1 className="text-3xl text-black font-bold text-center underline pt-5 ">
          Projects
        </h1>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-0 justify-items-center mt-12 ">
          {Object.entries(project).map((data, item) => {
            return (
              <div key={item}>
                <div>
                  {data[1].map((value, index) => {
                    return (
                      <div
                        key={index}
                        className="flex justify-center items-center mt-10"
                      >
                        <div className="card w-4/5 h-4/5 bg-white text-primary-content project-box ">
                          <div className="card-body flex flex-col gap-8">
                            <div className="flex flex-row justify-between items-center text-black">
                              <h2 className="card-title text-3xl font-semibold ">
                                {value.name}
                              </h2>
                              <div className="avatar avatar-img">
                                <div className="w-24 bg-white rounded-full ">
                                  <img src={value.icon} />
                                </div>
                              </div>
                            </div>
                            <p className="w-full text-lg text-justify text-black">
                              {value.desc}
                            </p>
                            <div className="card-actions justify-end">
                              <a
                                href={value.source}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <button>
                                  <div className="svg-wrapper-1">
                                    <div className="svg-wrapper">
                                      <svg
                                        height="24"
                                        width="24"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M0 0h24v24H0z"
                                          fill="none"
                                        ></path>
                                        <path
                                          d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                          fill="currentColor"
                                        ></path>
                                      </svg>
                                    </div>
                                  </div>
                                  <span>Source</span>
                                </button>
                              </a>
                              <a
                                href={value.link}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <button className="cssbuttons-io-button">
                                  Visit
                                  <div className="icon">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      width="24"
                                      height="24"
                                    >
                                      <path
                                        fill="none"
                                        d="M0 0h24v24H0z"
                                      ></path>
                                      <path
                                        fill="currentColor"
                                        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                                      ></path>
                                    </svg>
                                  </div>
                                </button>
                              </a>
                            </div>
                          </div>
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
    </>
  );
};

export default Projects;
