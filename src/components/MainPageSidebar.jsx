// src/components/Sidebar.tsx
import React from "react";
import { Link } from "react-router-dom";
import { HiUserAdd,HiOutlineArrowNarrowRight  } from "react-icons/hi";

import {
  LayoutDashboard,
  LogOut,
  Settings,
  Mails,
  Handshake,
  Bell,
} from "lucide-react";
import {  NavLink } from "react-router-dom";

import link from "../assets/link.png";

const MainPageSidebar = ({ isSidebarOpen }) => {
  const navItems = [
    { icon: <LayoutDashboard size={20} />, label: "Home" ,to:"/home"},
    { icon: <Mails size={20} />, label: "Events" ,to:"/events"},
    { icon: <Bell size={20} />, label: "Gallery" ,to:"Gallery"},
    { icon: <Handshake size={20} />, label: "About Us" ,to:"/aboutus"},
    { icon: <Settings size={20} />, label: "Connect" ,to:"/connect"},
    { icon: <LogOut size={20} />, label: "Donations" ,to:"/donations"},
  ];

  return (
    <aside
      className={`
             navbar fixed top-0 right-0 h-full bg-transparent bg-secondary/40 backdrop-blur-lg shadow-lg z-50
            transition-all duration-300 ease-in-out
            ${isSidebarOpen ? "translate-x-0" : "translate-x-full"} 
            lg:shadow-none lg:z-30
            w-[280px] sm:w-[300px] lg:w-64 bg-gray-300
          `}
    >
      <div className="p-6">
      <div className="flex items-center gap-2 mb-8">
          <img className="h-8" src={link} alt="" />

          <p className="font-bold text-3xl text-gray-800 font-[cursive]">
            Connect
          </p>
        </div>
        <nav className="space-y-1">
          {navItems.map((item, index) => (
            <NavLink
              to={item.to}
              key={index}
              className={({isActive})=>`${isActive?"text-black font-semibold":"text-primary"} flex items-center  hover:bg-gray-50 px-4 py-3 rounded-lg gap-3`}
            >
              {item.icon}
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
        <div className='flex pt-10 items-center gap-2'>
        <Link to='/login' className='py-2 px-4 rounded-md font-semibold border-2  text-white hover:bg-white hover:border-transparent hover:text-primary transition duration-500 flex items-center gap-2'>LOG IN <HiOutlineArrowNarrowRight className='text-xl'/></Link>
        <Link to='/signup' className='bg-white py-2 px-4 rounded-md border-2 border-transparent text-primary font-semibold hover:border-white hover:bg-transparent hover:text-white  transition duration-500 flex items-center gap-2'><HiUserAdd className='text-xl' /> SIGN UP</Link>
      </div>
      </div>
    </aside>
  );
};

export default MainPageSidebar;
