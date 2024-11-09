import React from 'react'
import { eventPlaceholderImage } from './UpcomingEvents'
function UpcomingMentorship({mentorships}) {
  return (
    <div className='bg-white p-2 rounded-lg shadow' >
    <h3 className='text-gray-700 text-xl font-bold rounded-lg shadow-lg pb-4 pt-2 pl-4 bg-pink-100 '>Upcoming Mentorship</h3>
   <div className=' h-[500px] overflow-y-scroll'>
   {mentorships.map((mentorship,idx)=>(
     <div key={idx} className='flex flex-col gap-4 sm:flex-row items-center shadow-lg mx-1 my-3 rounded-xl p-2'>
       <div className='w-[30%]'>
         <img className=' h-22 sm:h-32 md:h-20  aspect-square rounded-lg' src={mentorship.img || eventPlaceholderImage} alt="" />
       </div>
       <div className='text-sm w-[70%] text-gray-500 space-y-1'>
         <h3 className='text-lg text-gray-700 font-semibold mb-2'>{mentorship.name}</h3>
         <p ><span className=' font-semibold'>Organized By :</span> { mentorship.organizedBy}</p>
         <p><span className=' font-semibold'>Sessions Conducted :</span> { mentorship.sessionsConducted}</p>
         <p><span className=' font-semibold'>Active Mentees :</span> { mentorship.activeMentees}</p>
         <p><span className=' font-semibold'>Next Session :</span> { mentorship.nextSession}</p>
       </div>
     </div>
   ))}
   </div>
 </div>
  )
}

export default UpcomingMentorship