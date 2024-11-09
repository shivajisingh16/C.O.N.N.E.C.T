import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function Layout({setIsSidebarOpen}) {
 
  return (
    <div className='w-full'>
      <Header setIsSidebarOpen={setIsSidebarOpen}  />
      <Outlet  />
      <Footer/>
    </div>
  )
}

export default Layout