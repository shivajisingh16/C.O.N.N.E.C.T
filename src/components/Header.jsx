import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { HiUserAdd,HiOutlineArrowNarrowRight  } from "react-icons/hi";
import link from '../assets/link.png'
import { Menu } from 'lucide-react';
function Header({setIsSidebarOpen}) {
  return (
    <div className=' h-20 bg-transparent backdrop-blur-2xl flex items-center px-5 justify-between fixed top-0 w-full   z-10 shadow-xl shadow-cyan-400 overflow-x-scroll'>
     <div className='flex gap-2 items-center'>
     <img className='h-8' src={link} alt="" />
     <p className='font-bold text-3xl text-white font-[cursive]'>Connect</p> 
     </div>
      <div className='lg:flex items-center gap-4 hidden '>
        <NavLink to='/home' className={({isActive})=>`${isActive?'text-black':'text-white'} hover:text-black font-semibold transition duration-700 text-lg`}>Home</NavLink>
        <NavLink to='/events' className={({isActive})=>`${isActive?'text-black':'text-white'} hover:text-black font-semibold transition duration-700 text-lg`}>Events</NavLink>
        <NavLink to='/gallery' className={({isActive})=>`${isActive?'text-black':'text-white'} hover:text-black font-semibold transition duration-700 text-lg`}>Gallery</NavLink>
        <NavLink to='/about' className={({isActive})=>`${isActive?'text-black':'text-white'} hover:text-black font-semibold transition duration-700 text-lg`}>About Us</NavLink>
        <NavLink to='/connect' className={({isActive})=>`${isActive?'text-black':'text-white'} hover:text-black font-semibold transition duration-700 text-lg`}>Connect</NavLink>
        <NavLink to='/donations' className={({isActive})=>`${isActive?'text-black':'text-white'} hover:text-black font-semibold transition duration-700 text-lg`}>Donations</NavLink>
      </div>
      <div className='lg:flex hidden items-center gap-2'>
        <Link to='/login' className='py-2 px-4 rounded-md font-semibold border-2  text-white hover:bg-white hover:border-transparent hover:text-primary transition duration-500 flex items-center gap-2'>LOG IN <HiOutlineArrowNarrowRight className='text-xl'/></Link>
        <Link to='/signup' className='bg-white py-2 px-4 rounded-md border-2 border-transparent text-primary font-semibold hover:border-white hover:bg-transparent hover:text-white  transition duration-500 flex items-center gap-2'><HiUserAdd className='text-xl' /> SIGN UP</Link>
      </div>
      <button
            onClick={() => setIsSidebarOpen(true)}
            className="lg:hidden p-2 hover:bg-gray-200 rounded-lg"
          >
            <Menu size={24} />
          </button>
    </div>
  )
}

export default Header