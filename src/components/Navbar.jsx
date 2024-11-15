
import React  from "react";
import link from "../assets/link.png";
import {
  LayoutDashboard,
  Globe,
  Users,
  Calendar,
  Briefcase,
  Menu,
  MoreHorizontal,
  Search,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { placeholderImage } from "./TopAlumni";
const Navbar = ({
  userName,
  profileImage,
  setIsSidebarOpen,
  setIsNavMenuOpen,
  isNavMenuOpen,
  isSidebarOpen,
}) => {
  const navItems = [
    { icon: <LayoutDashboard size={20} />, label: "Dashboard" ,to:"/dashboard/home"},
    { icon: <Globe size={20} />, label: "Network", to: "/dashboard/network" },
    { icon: <Users size={20} />, label: "Mentorship", to: "/home" },
    { icon: <Calendar size={20} />, label: "Events", to: "/dashboard/events" },
    { icon: <Briefcase size={20} />, label: "Posts", to: "/dashboard/posts" },
  ];

  return (
    <nav className=" fixed backdrop-blur-lg right-0 left-0 lg:left-52 top-0 z-20 bg-transparent border-b shadow-lg bg-purple-100/50 shadow-purple-100">
      <div className="flex items-center justify-between p-4 lg:p-6">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="lg:hidden p-2 hover:bg-gray-200 rounded-lg"
          >
            <Menu size={24} />
          </button>

          {/* Desktop Navigation Items */}
          <div className="hidden lg:flex items-center gap-6 lg:pl-10">
            {navItems.map((item, index) => (
              <NavLink
                to={item.to}
                key={index}
                className={({isActive})=>`${isActive?"text-black font-semibold":"text-gray-600"} flex items-center gap-2  hover:text-blue-600
                           transition-colors duration-200`}
              >
                {item.icon}
                <span>{item.label}</span>
              </NavLink>
            ))}
          </div>

          {/* Mobile Navigation Dropdown */}
          <div className="lg:hidden relative">
            <button
              onClick={() => setIsNavMenuOpen(!isNavMenuOpen)}
              className="p-2 hover:bg-gray-200 rounded-lg"
            >
              <MoreHorizontal size={24} />
            </button>

            <div
              className={`absolute  top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border
                              animate-in slide-in-from-top-2 duration-200 ${
                                isNavMenuOpen ? "" : "invisible"
                              }`}
            >
              {navItems.map((item, index) => (
                <NavLink
                  to={item.to}
                  key={index}
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-green-700 font-semibold" : "text-gray-600"
                    } flex items-center gap-2 px-4 py-3  hover:bg-gray-200 first:rounded-t-lg last:rounded-b-lg`
                  }
                >
                  {" "}
                  {item.icon}
                  <span>{item.label}</span>
                </NavLink>
              ))}
            </div>
          </div>
        </div>

        <div className=" hidden sm:flex lg:hidden items-center gap-2 ">
          <img className="h-8" src={link} alt="" />

          <p className="font-bold text-3xl text-gray-800 font-[cursive]">
            Connect
          </p>
        </div>

        {/* Search and Profile */}
        <div className="flex items-center gap-4">
          <div className="relative ">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-700"
              size={20}
            />
            <input
              type="search"
              placeholder="Search..."
              className="sidebar pl-10 pr-4 py-1 w-28 sm:w-48 md:w-64 lg:w-32 xl:w-60 rounded-full border shadow-md
                         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
            />
          </div>
          <Link to='profile' className=" h-10 aspect-square rounded-full bg-gray-100">
            <img
              src={profileImage || placeholderImage}
              className="h-10 rounded-full transition-transform hover:scale-110"
              alt=""
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;