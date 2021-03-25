import React from "react";
import { Row, Container, Col } from 'react-bootstrap';
import "./Template.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
// import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';
import { faBed, faBath, faWifi, faMale, faCar, faDumbbell, faTv, faCoffee } from '@fortawesome/free-solid-svg-icons';



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
        <p className="snyder-bed-text"> <FontAwesomeIcon icon={faBed}  className="snyder-bed"/> 4 | </p>
        <p className="snyder-bath-text"><FontAwesomeIcon icon={faBath}  className="snyder-bath"/>  2 | </p> 
        <p className="snyder-wifi-text"><FontAwesomeIcon icon={faWifi}  className="snyder-wifi"/> 400 MB | </p> 
        <p className="synder-tv-text">| <FontAwesomeIcon icon={faTv} className="snyder-tv"/> 3 | </p>
        <p className="snyder-sqft-text"> SqFt 1174 | </p>
        <p className="snyder-guests-text"> Max <FontAwesomeIcon icon={faMale}  className="snyder-person"/> 5 | </p> 
        <p className="snyder-driveway-text"> Driveway </p><p><FontAwesomeIcon icon={faCar } className="snyder-car"  /> </p> 
        <p className="snyder-driveway-text"> | Street </p><p><FontAwesomeIcon icon={faCar} className="snyder-car2" /> <FontAwesomeIcon icon={faCar} className="snyder-car2" /></p> 
        <p className="snyder-fitness-text"> | Fitness <FontAwesomeIcon icon={faDumbbell} className="snyder-dumbbell"/> | </p>
        <p className="snyder-coffee-text"> <FontAwesomeIcon icon={faCoffee} className="snyder-coffee"/></p>
     </Row>



      <Row className="snyder-row-1">  
      <Col sm={6}>
       <Col xs={12}><img className="snyder-image-1A" src={ Front39 } /></Col>
      </Col>
      <Col sm={6}>
        <Row>
        <Col sm={6}><img className="snyder-image-2A" src={ Front39 } /> </Col>
        <Col sm={6}><img className="snyder-image-3A" src={ Front39 } /> </Col>
        <Col sm={6} ><img className="snyder-image-4A" src={ Front39 } /></Col>
        <Col sm={6}><img className="snyder-image-5A" src={ Front39 } /></Col>
        </Row>
      </Col>
       
       
      </Row>
    </Container>
  </>


  );
}

export default Template;
