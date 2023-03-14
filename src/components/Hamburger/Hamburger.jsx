import React from 'react'
import { useNavigate,NavLink } from "react-router-dom";
import './hamburger.css'
const navLinks = [
    {
        dispaly: 'Home',
        path: '/'
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
    {
        dispaly: 'Logout',
        path: '/logout'
    },
    {
        display: 'SignUp',
        path: '/register'
    },
    {
        dispaly: 'Login',
        path: '/login'
    }

];
export default function Hamburger() {
  return (
    <div className='Hamburger'>
        
           {navLinks.map((item, index) => {
                    return <NavLink 
                    key={index}
                    className='no-underline text-white m-2' 
                    activeclassname='active'
                    to={item.path} >{item.dispaly}</NavLink>
                })
                } 
       
    </div>
    
  )
}
