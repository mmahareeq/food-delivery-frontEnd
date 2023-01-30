import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import './login.css'
import logo from '../../assets/images/logo.png'
export default function Login() {
  return (
   
    <form >
            <div>
                <img src={logo} alt='logo' className='logo'></img>
            </div>
            {/* <label>Email</label> */}
            <input type='email' placeholder='Enter a your email'></input>
       
            {/* <label>Password</label> */}
            <input type='password' placeholder='Enter a password' className='mt-4'></input>
      
          <span className='forget-password'>Forget Password?</span>

     
          <Button className='custome-btn'>Login</Button>
          <p className='mt-5 signUp' > Don't have an account? <span>SignUp</span> Now</p>
     
    </form>

  )
}
