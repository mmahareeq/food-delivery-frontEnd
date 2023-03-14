import React from 'react'
import logo from '../../assets/images/logo.png';
import {Container, Row, Col} from 'react-bootstrap';
import './footer.css'
export default function Footer() {
  return (
    <>
    <Row>
        <Col>Icons</Col>
        <Col className='col'>
            <p>About</p>
             <p>About Us</p>
             <p>Menu</p>
        </Col>
        <Col className='col'>
            <p>About</p>
            <p>About Us</p>
            <p>Menu</p>
        </Col>
        <Col className='col'>
            <p>About</p>
            <p>About Us</p>
            <p>Menu</p>
        </Col>
        
    </Row>
    
    </>
  )
}
