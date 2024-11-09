import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa6";
function Footer() {
  return (
    <div className="h-80 bg-secondary flex items-center gap-8 p-5 md:p-20 justify-between md:justify-evenly">
      <div className="text-gray-200 flex flex-col gap-2 ">
        <h4 className="font-bold text-white text-xl">Quick Links</h4>
        <NavLink
          to=""
          className={({ isActive }) =>
            `${isActive ? "text-black" : "text-white"} hover:underline`
          }
        >
          About Us
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${isActive ? "text-black" : ""} hover:underline`
          }
        >
          Contact Us
        </NavLink>
        <NavLink
          to="events"
          className={({ isActive }) =>
            `${isActive ? "text-black" : ""} hover:underline`
          }
        >
          Events
        </NavLink>
        <NavLink
          to="connect"
          className={({ isActive }) =>
            `${isActive ? "text-black" : ""} hover:underline`
          }
        >
          Connect To Allumini
        </NavLink>
        <NavLink
          to="gallery"
          className={({ isActive }) =>
            `${isActive ? "text-black" : ""} hover:underline`
          }
        >
          Gallery
        </NavLink>
        <NavLink
          to="donations"
          className={({ isActive }) =>
            `${isActive ? "text-black" : ""} hover:underline`
          }
        >
          Donations
        </NavLink>
      </div>
      <div className="flex flex-col  items-center justify-between gap-8 md:gap-10 lg:gap-20 xl:gap-40 sm:flex-row">
        <img
          src="https://www.gla.ac.in/images/gla-university-logo.png"
          alt=""
        />
        <div className="text-gray-300 flex items-center flex-col ">
          <p className="text-xl text-white font-bold">Stay Connected</p>
          <div className="flex gap-4 my-4">
            <Link>
              <FaTwitter className="text-2xl hover:text-white" />
            </Link>
            <Link>
              <FaFacebook className="text-2xl hover:text-white" />
            </Link>
            <Link>
              <FaLinkedin className="text-2xl hover:text-white" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
