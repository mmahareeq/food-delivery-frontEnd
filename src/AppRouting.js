import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Layout from './pages/layout/Layout';
import AddItem from './features/items/AddItem/AddItem';
export default function AppRouting() {
  return (
    <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='addItem' element={<AddItem></AddItem>}/>
          <Route path='item/:id' element={<AddItem></AddItem>}/>
        </Route>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Signup/>}/>
        <Route path='cart'/>
        <Route path='menu'/>
        <Route path='review'/>
       

    </Routes>
  )
}
