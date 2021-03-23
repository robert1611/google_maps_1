import React from "react";
import { Row, Container, Col } from 'react-bootstrap';
import "./Template.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
// import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';
import { faBed, faBath, faWifi, faMale, faCar, faDumbbell } from '@fortawesome/free-solid-svg-icons';



import Front39 from './images/39/front_39.jpg';
import Head39 from './images/39/head_39.jpg'
import Living139 from './images/39/living1_39.jpg';
import Living239 from './images/39/living2_39.jpg';
import Living339 from './images/39/living3_39.jpg';

function Template() {
 

  return (
    <>
    <Container>

    <Row className="title_snyder">
        <h2>Manny is the most handsome dog in the worlds. I love him so much</h2>
    </Row>

    <Row className="title_snyder">
        {/* <p><FontAwesomeIcon icon={faCoffee} />
        <FontAwesomeIcon icon={faStroopwafel} /> </p>  */}
        <p> <FontAwesomeIcon icon={faBed}  className="snyder-bed"/> 3 </p>
        <p><FontAwesomeIcon icon={faBath}  className="snyder-bath"/>  2 </p> 
        <p><FontAwesomeIcon icon={faWifi}  className="snyder-wifi"/> </p> 
        <p> Sleeps Max <FontAwesomeIcon icon={faMale}  className="snyder-person"/> <FontAwesomeIcon icon={faMale} className="snyder-person" /> <FontAwesomeIcon icon={faMale} className="snyder-person"/> <FontAwesomeIcon icon={faMale} className="snyder-person" /> <FontAwesomeIcon icon={faMale} className="snyder-person" /> </p> 
        <p className="snyder-person-text"> Off-Street Parking </p><p><FontAwesomeIcon icon={faCar} className="snyder-car" /> </p> 
        <p > Fitness <FontAwesomeIcon icon={faDumbbell} className="snyder-dumbbell"/> </p>
    </Row>



      <Row className="snyder-row-1"> 
        <Col><img className="front_39" src={ Front39 } /></Col>
        <Col><img className="front_39" src={ Front39 } /> </Col>
        <Col><img className="front_39" src={ Front39 } /> </Col>
      </Row>
      <Row>
        <Col><img className="front_39" src={ Front39 } /></Col>
        <Col><img className="front_39" src={ Front39 } /></Col>
        <Col><img className="front_39" src={ Front39 } /></Col>
      </Row>
    </Container>
  </>


  );
}

export default Template;
