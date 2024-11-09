import React from 'react'

export const eventPlaceholderImage ="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
function UpcomingEvents({events}) {
  return (
    <div className='bg-white  p-2 rounded-lg shadow'  >
       <h3 className='text-gray-700 text-xl font-bold  rounded-lg shadow-lg pb-4 pt-2 pl-4 bg-purple-100 '>Upcoming Events</h3>
      <div className=' h-[500px] overflow-y-scroll'>
      {events.map((event,idx)=>(
        <div key={idx} className='flex flex-col gap-4 sm:flex-row items-center shadow-lg mx-1 my-3 rounded-xl p-2'>
          <div className='w-[30%]'>
            <img className=' h-22 sm:h-32 md:h-20  aspect-square rounded-lg' src={event.img || eventPlaceholderImage} alt="" />
          </div>
          <div className='text-sm w-[70%] text-gray-500 space-y-1'>
            <h3 className='text-lg text-gray-700 font-semibold mb-2'>{event.name}</h3>
            <p ><span className=' font-semibold'>Organized By :</span> { event.organizedBy}</p>
            <p><span className=' font-semibold'>Date :</span> { event.date}</p>
            <p><span className=' font-semibold'>Time :</span> { event.time}</p>
            <p><span className=' font-semibold'>Venue :</span> { event.venue}</p>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default UpcomingEvents