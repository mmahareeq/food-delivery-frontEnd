import React from 'react'
import { useSelector } from 'react-redux';
import {  Navigate, Outlet } from "react-router-dom";
import Spinner from '../../shared/Spinner/Spinner';
export default function ({allowRole}) {
      const {userinfo, loading} = useSelector(state=>state.users);
    
    if(loading)
      return <Spinner/> 

  return (
    userinfo?.role === allowRole ? <Outlet/>:
    <Navigate to='/login'/>
  )
}
