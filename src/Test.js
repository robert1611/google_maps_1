import React from 'react';
import './Test.css';
import { Row, Container, Col } from 'react-bootstrap';

function Test() {
    return (
      
        <Container fluid>

            <Row className="intro">

                Enjoy your time off

            </Row>

            <Row className="second">

                Modern comforts - your home away from home
                
            </Row>

            <Row className="template">
                <Col sm = {12} md={3} className="left">
                    <p>Affordable Corp Housing Help understands the challenges of being away from home. </p>
                </Col>
                <Col sm = {12} md={3}> 
                    <p>Choose from more than 350 luxury 1, 2 and 3 bedroom apartments in Midland, Big Spring, and Odessa, TX. 
                        Open-concept floors plans and nine-foot ceilings make every home feel spacious and inviting. High-
                        quality features and finishes, including stylish vinyl plank flooring, granite countertops and stainless
                        steel appliances, are the standard, not the exception. And each apartment has a master bathroom with chic 
                        ceramic tile and a luxurious garden tub— the perfect retreat after a long day.</p>
                </Col> 
                <Col sm = {12} md={3}> 
                    <p>Choose from more than 350 luxury 1, 2 and 3 bedroom apartments in Midland, Big Spring, and Odessa, TX. 
                        Open-concept floors plans and nine-foot ceilings make every home feel spacious and inviting. High-
                        quality features and finishes, including stylish vinyl plank flooring, granite countertops and stainless
                        steel appliances, are the standard, not the exception. And each apartment has a master bathroom with chic 
                        ceramic tile and a luxurious garden tub— the perfect retreat after a long day.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Test
