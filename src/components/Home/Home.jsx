import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import pizza from '../../assets/images/pizza2.png'
import './home.css'


export default function Home() {
    return (
        <main>
            <Container>
                <Row>
                    <Col className='left-side'>
                        <div className='title-main'>
                            <p className='sub-title'>Easy way to make an order</p>
                            <p className='title'><span style={{color: '#F9A826'}}>HUNGRY? &nbsp;</span> Just wait food at door?</p>
                            <p className='details'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.Et dignissimos repellendus, dolores vero ut veritatis eum molestiae?
                           </p>
                        </div>
                        
                          
                       
                        <Button   variant='primary' className='custome-btn'>Order Now</Button>
                    </Col>
                    <Col><img src={pizza} alt='pizza' className='pizza-img'></img></Col>
                </Row>
                
            </Container>
        </main>
    )
}
