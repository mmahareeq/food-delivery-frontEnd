import React, { useEffect, useRef, useState } from 'react'
import './login.css'
import logo from '../../assets/images/logo.png'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import { login } from '../../features/users/userAction';
import { useFormik } from 'formik';
export default function Login() {

 const dispatch = useDispatch();
 const {loading, userinfo, error, success} = useSelector((state) => state.users);
 const nevigate = useNavigate();

  
   const initValues = {
    email: null,
    password: null,
   };
  const validate = (values)=>{
     const errors = {};
     if(!values.email){
       errors.email = 'Email is required!';
     }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email = 'Invalid email address';
     }

     if(!values.password){
      console.log('err')
      errors.password = 'password is required!';
     }

     return errors;
  }
  // formik 
  const formik = useFormik({
    initialValues: initValues,
    validate,
    onSubmit: (values) =>{
      dispatch(login(values)).unwrap();
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
            <div>
                <img src={logo} alt='logo' className='logo w-100'></img>
            </div>
             
            {/* <label>Email</label> */}
            {error?.message ? <div className='ErrorMessage pl-1'>Error: {error.message}</div>: null}
            <input id='email'
             type='email'
             placeholder='Enter a your email' 
             value={formik.values.email}
             onChange={formik.handleChange}
             required
             ></input>
             {formik.errors.email  ? <div className='text-red text-start w-80'>{formik.errors.email}</div>: null}
            {/* <label>Password</label> */}
            <input id='password'
            type='password'
             placeholder='Enter a password'
             className='mt-4'
             value={formik.values.password}
             onChange={formik.handleChange}
             required 
             ></input>
            {formik.errors.password  ? <div className='text-red text-start w-80'>{formik.errors.password}</div>: null}
          <span className='forget-password'>Forget Password?</span>
     
          <button className='custome-btn disabled:opacity-75' type='submit' disabled={loading || !formik.isValid}>{loading? <Spinner/> : 'Login'}</button>
          <p className='mt-5 signUp' > Don't have an account?  <Link to='/register' className='text-yallow font-medium no-underline'>SignUp</Link> Now</p>
     
    </form>

  )
}
