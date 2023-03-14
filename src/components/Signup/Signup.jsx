import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import './signup.css'
import logo from '../../assets/images/logo.png'
import FormInput from '../FormInput/FormInput';
import { signup } from '../../features/users/userAction';
import { useSelector, useDispatch, } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

export default function Signup() {
  const {loading, userinfo, error, success} = useSelector((state) => state.users);
  const nevigate = useNavigate();

  const dispatch = useDispatch();
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [{
    id: 1,
    name: "username",
    type: "text",
    placeholder: "enter your username",
    required: true
  }, {
    id: 2,
    name: "email",
    type: "email",
    placeholder: "enter email",
    required: true,
    errorMessage: "It should be a valid email address!",
  },
  {
    id: 3,
    name: "password",
    type: "password",
    placeholder: "enter password",
    required: true,
    // pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    errorMessage:
      "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",

  },
  {
    id: 4,
    name: "confirmPassword",
    type: "password",
    placeholder: "Confirm Password",
    errorMessage: "Passwords don't match!",
    label: "Confirm Password",
    // pattern: values.password,
    required: true,
  },
  ];
  useEffect(()=>{
    if(success){
      nevigate('/');
    }
  },
  [nevigate, success, userinfo])

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(values);
     dispatch(signup(values)).unwrap();
  }

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (

    <form onSubmit={handleSubmit}>
      <div>
        <img src={logo} alt='logo' className='logo'></img>
      </div>
      {/* <label>Email</label> */}
      {inputs.map((input) => {
        return <FormInput key={input.id}
          {...input}
          value={values[input.name]}
          onChange={onChange}></FormInput>
      })}

      {/* <input type='text' placeholder='enter your username'></input>
            <input type='email' placeholder='Enter a your email'></input>
       
           
            <input type='password' placeholder='Enter a password' className='mt-4'></input>

            <input type='password' placeholder='Confirm password' className='mt-4'></input> */}

      <Button className='custome-btn' type='submit' disabled={loading}> {loading? <Spinner/> : 'SignUp'}</Button>
      <p className='mt-5 signUp' > Already have a account ?<span>LogIn</span> Now</p>

    </form>
  )
}
