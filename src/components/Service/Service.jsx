import React from 'react'

export default function Service() {
  return (
   <div className='flex flex-row flex-wrap justify-between border p-4 border-gray mt-4 bg-darkblue text-white'>
   
     <div className='w-80 self-end ' >
        <h4 className='border-y border-y-softorange w-max'>Our Great Services</h4>
        <p className='font-light'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic nulla est fugiat sapiente</p>
     </div>
     <div className='flex gap-4 flex-wrap'>
        <div className='border-4 border-gray flex flex-col p-3 items-center'>
        <i class="ri-calendar-2-line text-softorange text-2xl"></i>
          <p>Opened 24/7</p>
        </div>
        <div className='border-4 border-gray flex flex-col p-3 items-center'>
        <i class="ri-book-read-line text-softorange text-2xl	"></i>
            <p>Special Menu </p>
        </div>
        <div className='border-4 border-gray flex flex-col p-3 items-center'>
        <i class="ri-motorbike-line text-softorange text-2xl	"></i>
           <div>Home Delivery</div>
        </div>
     </div>
   </div>
  )
}
