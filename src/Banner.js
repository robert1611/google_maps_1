import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import Map from './Map';
import Interest from './Interest';
import './Banner.css';

function Banner() {
    return (
        <Container fluid={true} className="banner__whole">
            

            <Row className="banner__title">
                <Col>

            <p className="banner-title2">Points of interest in West Texas</p>
                </Col>

            </Row>

            <Row>
                <Col className="map-wrapper-col-left" sm={12} md={8}>
                    <Map />
                </Col>
                <Col sm={12} md={4}> <Interest />
                </Col> 
                   
            </Row>
            
        </Container>
    )
}

export default Banner
