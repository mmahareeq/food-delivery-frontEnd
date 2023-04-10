import React, { useEffect, useState } from 'react'
import './signup.css'
import logo from '../../assets/images/logo.png'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import { signup } from '../../features/users/userAction';
import { useFormik } from 'formik';

export default function Signup() {
 const dispatch = useDispatch();
 const {loading, userinfo, error, success} = useSelector((state) => state.users);
 const nevigate = useNavigate();

  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const initValues = {
    username: null,
    email: null,
    password: null,
    confirmPassword: null,
   };
   
  const validate = (values)=>{
    const errors = {};
    if(!values.username){
      errors.username = 'User Name is required!';
    }
    if(!values.email){
      errors.email = 'Email is required!';
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
       errors.email = 'Invalid email address';
    }

    if(!values.password){
     errors.password = 'password is required!';
    }

    if(values.confirmPassword != values.password){
      errors.confirmPassword = "Passwords don't match!";
    }
    return errors;
 }
 const formik = useFormik({
  initialValues: initValues,
  validate,
  onSubmit: (values) =>{
    dispatch(signup(values)).unwrap();
  },
  isInitialValid: (values)=>console.log(values),
})  
  useEffect(()=>{
    if(success){
      nevigate('/');
    }
  },
  [nevigate, success, userinfo, formik.isValidating])

  return (

    <form onSubmit={formik.handleSubmit} className='form h-screen bg-lightpink'>
    <div>
        <img src={logo} alt='logo' className='logo w-100'></img>
    </div>
     
    {/* <label>Email</label> */}
    {error?.message ? <div className='ErrorMessage pl-1 w-80'>Error: {error.message}</div>: null}
    <input id='username'
     type='text'
     placeholder='Enter a your user name' 
     value={formik.values.username}
     onChange={formik.handleChange}
     required
     className='w-80 p-2'
     ></input>
     {formik.errors.username  ? <div className='text-red text-start w-80'>{formik.errors.username}</div>: null}
    <input id='email'
     type='email'
     placeholder='Enter a your email' 
     value={formik.values.email}
     onChange={formik.handleChange}
     required
     className='w-80 p-2 mt-2'
     ></input>
     {formik.errors.email  ? <div className='text-red text-start w-80'>{formik.errors.email}</div>: null}
    {/* <label>Password</label> */}
    <input id='password'
    type='password'
     placeholder='Enter a password'
     className='mt-2 w-80 p-2'
     value={formik.values.password}
     onChange={formik.handleChange}
      required 
     ></input>
    {formik.errors.password  ? <div className='text-red text-start w-80'>{formik.errors.password}</div>: null}
    <input id='confirmPassword'
    type='password'
     placeholder='Enter a confirm password'
     className='mt-2 w-80 p-2'
     value={formik.values.confirmPassword}
     onChange={formik.handleChange}
     required 
     ></input>
    {formik.errors.confirmPassword  ? <div className='text-red text-start w-80'>{formik.errors.confirmPassword}</div>: null}

  <button className='btn-secondary p-2 mt-2 disabled:opacity-75 ' type='submit' disabled={loading || !formik.isValid}> {loading? <Spinner/> : 'SignUp'}</button>
      <p className='mt-5 signUp' > Already have a account ?<Link to='/login' className='text-softorange font-medium no-underline'>LogIn</Link> Now</p>
    </form>
  )
}
