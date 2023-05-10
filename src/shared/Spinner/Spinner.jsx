import React from 'react'
import './spinner.css';

export default function Spinner() {
  return (
    <div className='spinner h-screen' aria-label='spinner-icon'>
        <div className='spinner-circle'></div>
    </div>
  )
}
