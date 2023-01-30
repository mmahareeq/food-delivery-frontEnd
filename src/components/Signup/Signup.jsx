import React from 'react'
import { Button } from 'react-bootstrap'
import './signup.css'
import logo from '../../assets/images/logo.png'

export default function Signup() {
  return (
    
    <form >
            <div>
                <img src={logo} alt='logo' className='logo'></img>
            </div>
            {/* <label>Email</label> */}
            <input type='email' placeholder='Enter a your email'></input>
       
            {/* <label>Password</label> */}
            <input type='password' placeholder='Enter a password' className='mt-4'></input>

            <input type='password' placeholder='Confirm password' className='mt-4'></input>

          <Button className='custome-btn'>SignUp</Button>
          <p className='mt-5 signUp' > Already have a account ?<span>LogIn</span> Now</p>
     
    </form>
  )
}
