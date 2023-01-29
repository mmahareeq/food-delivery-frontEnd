import React from 'react'
import logo from '../../assets/images/logo.png'

const navLinks = [
    {
        dispaly: 'Home',
        path: '/home'
    },
    {
        dispaly: 'Cart',
        path: '/cart'
    },
    {
        dispaly: 'Menu',
        path: '/menu',
    },
    {
        dispaly: 'Contact',
        path: '/contact'
    },

];

export default function Header() {
  return (
    <header>
        <div className='logo'>
            <img src={logo} alt='food-logo'/>
        </div>
    </header>
  )
}
