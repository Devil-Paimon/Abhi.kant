import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFillSendFill } from "react-icons/bs";
const Landing = () => {
  return (
    <div>
      <div id="landing" className=" h-screen  overflow-hidden pt-28">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-16 items-center  h-4/5">
          <div className="flex flex-row mt-0 w-full justify-evenly ">
            <div className="pr-5 flex flex-col gap-5 mt-2 md:mt-5">
              <a
                href="https://github.com/Devil-Paimon"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub className="text-2xl animate-pulse" />
              </a>
              <a
                href="https://www.linkedin.com/in/connect-with-abhishek-kant"
                target="_blank"
                rel="noreferrer"
              >
                <BsLinkedin className="text-2xl animate-pulse" />
              </a>
              <a
                href="https://www.instagram.com/apk27922/?igshid=NGExMmI2YTkyZg=="
                target="_blank"
                rel="noreferrer"
              >
                <BsInstagram className="text-2xl animate-pulse" />
              </a>
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-base-content">
                Hi,
              </h1>
              <h1 className="text-4xl md:text-6xl font-bold text-base-content">
                I am <span className="text-blue-500">Abhishek</span>,
              </h1>
              <h1 className="text-4xl md:text-6xl font-bold text-base-content">
                I do{" "}
                <span className="inline-block">
                  <h1 className="typewriter text-3xl md:text-5xl font-bold text-blue-500"></h1>
                </span>{" "}
              </h1>
              <h1 className="text-4xl md:text-6xl font-bold text-base-content">
                Development
              </h1>
              <div className="mt-5 md:mt-16  lg:mt-16">
                <a
                  href="https://ik.imagekit.io/e5ixuxrlb/portfolio/Resume2024.pdf?updatedAt=1711562835079"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="h-12 md:h-full btn-resume">
                    Resume
                    <div>
                      <BsFillSendFill />
                    </div>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://ik.imagekit.io/e5ixuxrlb/portfolio/Profile_dp.jpg?updatedAt=1683108497428"
              alt=""
              className=" scale-90 md:scale-100 border-4 border-dashed border-primary p-5 image-full"
              id="profileDp"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
