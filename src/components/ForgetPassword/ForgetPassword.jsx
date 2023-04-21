import React, { useEffect, useRef, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../shared/Spinner/Spinner';
import { forgetPassword } from '../../features/users/userAction';
import { useFormik } from 'formik';
export default function ForgetPassword() {

 const dispatch = useDispatch();
 const {loading, userinfo, error, success} = useSelector((state) => state.users);
 const nevigate = useNavigate();

  
   const initValues = {
    email: null,
   };
  const validate = (values)=>{
     const errors = {};
     if(!values.email){
       errors.email = 'Email is required!';
     }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email = 'Invalid email address';
     }
     return errors;
  }
  // formik 
  const formik = useFormik({
    initialValues: initValues,
    validate,
    onSubmit: (values) =>{
        forgetPassword(values).then((data)=>{
           console.log(data)
        }).catch(error=> console.log(error))
    },
    isInitialValid: (values)=>console.log(values),
  })  
  
  useEffect(()=>{
    console.log(formik.isValid,formik.isValidating, formik.isInitialValid);
    if(success)
      { 
        nevigate('/');
      }
  }, [nevigate, success, userinfo, formik.isValidating])


  return (
    
    <form onSubmit={formik.handleSubmit} className='form h-screen'>
             
            {/* <label>Email</label> */}
            {error?.message ? <div className='ErrorMessage pl-1'>Error: {error.message}</div>: null}
            <input id='email'
              className=' w-80'
             type='email'
             placeholder='Enter a your email' 
             value={formik.values.email}
             onChange={formik.handleChange}
             required
             ></input>
             {formik.errors.email  ? <div className='text-red text-start w-80'>{formik.errors.email}</div>: null}
            {/* <label>Password</label> */}
      
     
          <button className=' btn-secondary p-2 mt-2 disabled:opacity-75 w-80' type='submit' disabled={loading || !formik.isValid}>{loading? <Spinner/> : 'send'}</button>
         
     
    </form>

  )
}
// Reset Your Password
// You will receive a password reset email soon.Follow the link in the email to reset your password.