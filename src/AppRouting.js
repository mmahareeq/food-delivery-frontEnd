import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Layout from './pages/layout/Layout';
import AddItem from './features/items/AddItem/AddItem';
import ListItem from './features/items/ListItem/ListItem';
import ForgetPassword from './components/ForgetPassword/ForgetPassword';
import Menu from './pages/Menu/Menu';
import Contact from './pages/Contact/Contact';
import Cart from './pages/Cart/Cart';
import RequiredAuth from './components/RequiredAuth/index';
import { useSelector } from 'react-redux';

export default function AppRouting() {
  const {userinfo} = useSelector(state=> state.users);
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='menu' element={<Menu />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />

        <Route element={<RequiredAuth allowRole='admin' />}>
          <Route path='item' element={<ListItem />} />
            <Route path='item/add' element={<AddItem></AddItem>} />
            <Route path='item/:id' element={<AddItem></AddItem>} />
           </Route>
        </Route>
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Signup />} />
      <Route path='/forgetpassword' element={<ForgetPassword />} />
      <Route path='/reset-password/:token' element='' />

     
    </Routes>
  )
}
