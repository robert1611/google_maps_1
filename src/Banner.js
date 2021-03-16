import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import Map from './Map';
import Interest from './Interest';
import './Banner.css';

function Banner() {
    return (
        <Container fluid>
            <Row>
                <Col className="map-wrapper-col-left" md={6}>
                    <Map />
                </Col>
                <Col md={3}> <Interest />
                </Col> 
                    <Col md={3}> <Interest />
                </Col>
            </Row>
            
        </Container>
    )
}

export default Banner
