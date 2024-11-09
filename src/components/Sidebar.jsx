// src/components/Sidebar.tsx
import React, { useState, useEffect } from "react";
import {
  LogOut,
  Settings,
  Mails,
  Handshake,
  Bell,
  Home,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";

import link from "../assets/link.png";

const Sidebar = ({ isSidebarOpen }) => {
  const navItems = [
    { icon: <Home size={20} />, label: "Home", to: "/home" },
    { icon: <Mails size={20} />, label: "Messages" ,to:"/dashboard/messages"},
    { icon: <Bell size={20} />, label: "Notifications" ,to:"/dashboard/notifications"},
    { icon: <Handshake size={20} />, label: "Requests" ,to:"/dashboard/requests"},
    { icon: <Settings size={20} />, label: "Settings" ,to:"/dashboard/settings"},
    { icon: <LogOut size={20} />, label: "Logout" ,to:"/dashboard/logout"},
  ];

  return (
    <aside
      className={`
             navbar fixed top-0 left-0 h-full bg-orange-100 shadow-lg z-50
            transition-all duration-300 ease-in-out
            ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
            lg:translate-x-0 lg:shadow-none lg:z-30
            w-[280px] sm:w-[300px] lg:w-64 bg-gray-300
            overflow-x-hidden
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
              className={({isActive})=>`${isActive?"text-black font-semibold":"text-gray-600"} flex items-center  hover:bg-gray-50 px-4 py-3 rounded-lg gap-3`}
            >
              {item.icon}
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
