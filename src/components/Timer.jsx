import React from 'react'
import TimeQuantity from './TimeQuantity'

function Timer() {
  return (
    <div className='flex sm:gap-2'>
      <TimeQuantity value="25" type="days" colons={true}/>
      <TimeQuantity  value="06" type="hours" colons={true}/>
      <TimeQuantity  value="25" type="minutes" colons={true}/>
      <TimeQuantity  value="13" type="seconds" colons={false}/>
    </div>
  )
}

export default Timer