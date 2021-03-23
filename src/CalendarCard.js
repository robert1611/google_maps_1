import React from "react";
import './CalendarCard.css';
import { Row, Container, Col } from 'react-bootstrap';

function CalendarCard() {
  return (
    <Container className="nicholas">
      <Row class="calendar">
        <Col class="calendar-card-header">Featured</Col>
        <Col class="calendar-card-body"></Col>
      </Row>
      <Row>
        <Col class="calendar-card-title">Special title treatment</Col>
        <Col class="calendar-card-title">Special title treatment</Col>
      </Row>
      <Row>

       <Col href="#" class="btn btn-primary"> </Col>
      </Row>
      <Row>
      <Col href="#" class="btn btn-primary"> </Col>  
      </Row>
      
    </Container>
  )
};

export default CalendarCard
