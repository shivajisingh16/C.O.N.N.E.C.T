import React, { useEffect ,useState} from "react";
import { Link } from "react-router-dom";
import EventCard from "./EventCard";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

import Gallery from "./Gallery";
import MainPageSidebar from "./MainPageSidebar";
function Home({isSidebarOpen}) {


  return (
    <>
      <div
        style={{
          backgroundImage: `url(${"https://images.pexels.com/photos/8823939/pexels-photo-8823939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"})`,
        }}
        className=" h-screen bg-cover  "
      >
        <MainPageSidebar isSidebarOpen={isSidebarOpen}/>
        <div className="h-screen backdrop-blur-sm bg-black/20"></div>
        <div className="absolute top-52 left-6 sm:left-16 md:left-32 lg:left-44 w-[200px] sm:w-[600px] flex flex-col gap-8 items-start">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white  ">Connect & Grow</h2>
          <p className=" sm:text-lg text-white w-[300px] sm:w-[500px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
            nostrum recusandae iusto ad? Rerum magni voluptatibus sequi error,
            culpa nesciunt consequatur eum beatae repellendus impedit, eligendi
            aspernatur cumque illum facere enim qui iste in molestias dolor
            libero eveniet. Sit, doloremque.
          </p>
          <Link
            to="/dashboard/home"
            className="bg-white py-2 px-8 rounded-md border-2 border-transparent text-primary font-semibold  hover:border-white hover:bg-transparent hover:text-white transition duration-500 flex items-center gap-2"
          >
            Get Started <HiOutlineArrowNarrowRight className="sidebar text-xl" />
          </Link>
        </div>
      </div>
      <div className="py-20 bg-[#dbeafe] flex flex-col items-center justify-evenly">
        <div className="flex pb-10 justify-between px-5 sm:px-10 lg:px-40 w-full items-center gap-6">
          <h3 className="text-primary text-2xl md:text-4xl font-bold">
            Upcoming Alumini Events
          </h3>
          <Link className=" text-primary underline  sm:text-xl md:text-2xl font-bold">
            See All Events
          </Link>
        </div>
        <EventCard />
      </div>
      <Gallery/>
    </>
  );
}

export default Home;
