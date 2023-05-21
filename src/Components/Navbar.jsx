import { GiHamburgerMenu } from "react-icons/gi";
import { GiTireIronCross } from "react-icons/gi";
import { useState } from "react";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div className="flex flex-col z-50 bg-primary fixed w-full ">
        <div className="navbar   ">
          <div className="flex-1">
            <a
              href="#landing"
              className="btn glass normal-case text-white font-bold text-xl"
            >
              Abhi.Kant
            </a>
          </div>
          <div className="hidden md:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a href="#about" className="text-white text-lg font-semibold">
                  About
                </a>
              </li>
              <li>
                <a className="text-white text-lg font-semibold">Skills</a>
              </li>
              <li>
                <a className="text-white text-lg font-semibold">Projects</a>
              </li>

              <li>
                <a className="text-white text-lg font-semibold">Contact</a>
              </li>
            </ul>
          </div>
          <div className=" md:hidden lg:hidden ">
            <div className="btn glass" onClick={() => setMenu(!menu)}>
              {!menu && (
                <GiHamburgerMenu className="text-2xl text-white font-semibold" />
              )}
              {menu && (
                <GiTireIronCross className="text-2xl text-white font-semibold" />
              )}
            </div>
          </div>
        </div>
        <div
          id="mobile-navbar"
          className="md:hidden lg:hidden  bg-primary h-fit "
        >
          {menu && (
            <ul className="menu menu-vertical flex flex-col items-center justify-center ">
              <li>
                <a
                  href="#about"
                  className="text-white text-lg font-semibold"
                  onClick={() => setMenu(!menu)}
                >
                  About
                </a>
              </li>
              <li>
                <a className="text-white text-lg font-semibold">Skills</a>
              </li>
              <li>
                <a className="text-white text-lg font-semibold">Projects</a>
              </li>

              <li>
                <a className="text-white text-lg font-semibold">Contact</a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
