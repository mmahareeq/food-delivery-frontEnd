import React from 'react'

export default function ({hero}) {
  return (
    <div className='bg-darkblue flex h-20 align-items-center'>
        <h5 className='border-y border-y-softorange text-white text-center w-max mx-auto'>{hero}</h5>
    </div>
  )
}
