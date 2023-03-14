import React, { useEffect, useState } from 'react';
import { useNavigate,NavLink } from "react-router-dom";
import logo from '../../assets/images/logo.png';
import './header.css';
import { useSelector } from 'react-redux';
import Hamburger from '../Hamburger/Hamburger';

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

];

export default function Header() {
    const { userinfo } = useSelector(state => state.users);
    const { cart } = useSelector(state => state.cart);
    const [count, setCount] = useState(cart?.products?.length || 0);
    const [toggleMenu, setToggleMenu] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        
        setCount(cart?.products?.length || 0)
    }, [cart]);

    const moveToCart = (event) => {
        event.preventDefault();
        navigate('/cart');
    }
    
    const ToggleHamburger =()=>{
        setToggleMenu(!toggleMenu);
    }
    return (
        <>
        <header className='container w-full flex justify-between items-center'>
            <img src={logo} alt='food-logo' className='w-36  ' />

            <nav className=' lg:flex justify-center space-x-4 md:hidden sm:hidden xs:hidden '>
                {navLinks.map((item, index) => {
                    return <NavLink 
                    key={index}
                    className='no-underline text-black' 
                    activeclassname='active'
                    to={item.path} >{item.dispaly}</NavLink>
                })
                }
            </nav>

            <div className='flex row-cols-3 align-items-center w-25 justify-content-end'>
                <div className='cart' aria-label='cart' role='button' onClick={(e) => moveToCart(e)}>
                    <i className="ri-shopping-cart-line "></i>
                    <span className='count-cart'>{count} </span>
                </div>
                <div role='button' onClick={ToggleHamburger} className='lg:hidden w-0'>
                <i className="ri-menu-line ml-2 "></i>
                </div>
                 {
                userinfo?.username ? <div className=' justify-center md:hidden sm:hidden xs:hidden lg:flex'>hi, {userinfo.username}</div> : <>
                    <button className='btn-primary border-yallow md:hidden sm:hidden xs:hidden lg:flex'
                      onClick={()=> { return navigate('/register')} }>SignUp </button>
                    <button className='btn-primary text-white bg-yallow ml-1 md:hidden sm:hidden xs:hidden lg:flex' 
                       onClick={()=> {return navigate('/login') }}>LogIn</button></>
                 }
             </div>  
                
            
           
        </header>
         {toggleMenu? <Hamburger/>: null} </>
    )
}
