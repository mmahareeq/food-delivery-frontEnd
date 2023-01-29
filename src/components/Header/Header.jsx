import React from 'react';
import { NavLink, Link } from "react-router-dom";
import logo from '../../assets/images/logo.png';
import Nav from 'react-bootstrap/Nav';
import {Container, Row, Col, Button} from 'react-bootstrap';
import './header.css';

const navLinks = [
    {
        dispaly: 'Home',
        path: '/home'
    },
    {
        dispaly: 'Cart',
        path: '/cart'
    },
    {
        dispaly: 'Menu',
        path: '/menu',
    },
    {
        dispaly: 'Contact',
        path: '/contact'
    },

];

export default function Header() {
    return (
        <header className='header'>
            <Container>
            <Row>
                <Col lg='4'><img src={logo} alt='food-logo' className='logo' /></Col>
                <Col lg='4' className='navbar'>
                <Nav className='justify-content-center gap-3'>
                    {navLinks.map((item, index) => {
                        return <Nav.Item>{item.dispaly}</Nav.Item>
                    })
                    }
                </Nav>
                </Col>
                <Col lg='4' className='right-header gap-3'>
                <div className='cart'> 
                   <i class="ri-shopping-cart-line"></i>
                    <span className='count-cart'>0</span>
                </div>
                <div >
                    <Button variant='signup '>SignUp</Button>
                    <Button variant="outline-warning">LogIn</Button>
                </div>
                </Col>
            </Row>
            </Container>
            
             
            
            
        </header>
    )
}
