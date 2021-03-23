import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import Map from './Map';
import Interest from './Interest';
import './Banner.css';

function Banner() {
    return (
        <Container className="banner__whole">
            

            <Row className="banner__title">

            <p>Points of interest in West Texas</p>

            </Row>

            <Row>
                <Col className="map-wrapper-col-left" sm={12} md={6}>
                    <Map />
                </Col>
                <Col sm={12} md={6}> <Interest />
                </Col> 
                   
            </Row>
            
        </Container>
    )
}

export default Banner
