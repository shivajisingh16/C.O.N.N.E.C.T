// src/components/MainDashboard.tsx
import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import FeatureActions from "./FeatureActions";
import TopAlumni from "./TopAlumni";
import Suggestions from "./Suggestions";
import { useLocation } from "react-router";

import {
  Home,
  Globe,
  Users,
  Calendar,
  Briefcase,
  Menu,
  MoreHorizontal,
  Search,
} from "lucide-react";
import UpcomingMentorship from "./UpcomingMentorship";
import { Outlet } from "react-router";

const Dashboard = ({userData}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const {pathname}= useLocation();
  
  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      // setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(true);
        setIsNavMenuOpen(false);
      }
      if (window.innerWidth < 1024) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isSidebarOpen && !event.target.closest(".sidebar")) {
        setIsSidebarOpen(false);
      }
      if (isNavMenuOpen && !event.target.closest(".navbar")) {
       
        setIsNavMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSidebarOpen, isNavMenuOpen]);



  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      <div className="ml-[250px]">
        <Sidebar isSidebarOpen={isSidebarOpen} />
      </div>
      <div className="flex-1">
        <Navbar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          setIsNavMenuOpen={setIsNavMenuOpen}
          isNavMenuOpen={isNavMenuOpen}
          userName={userData.userName}
          profileImage={userData.profileImage}
        />

        <div className="mt-20 p-2 sm:p-5 space-y-6">
         {pathname.includes("home")&& <FeatureActions />}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-3">
            <div className="lg:col-span-2 space-y-6">
              <Outlet/>
             
            </div>
            <div className="xl:col-span-1 space-y-6 md:flex gap-5 xl:mt-[-30px] flex-grow justify-evenly items-center xl:block ">
              <TopAlumni alumni={userData.topAlumni} />
              <Suggestions suggestions={userData.suggestions} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
