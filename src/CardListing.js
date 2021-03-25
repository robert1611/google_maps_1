import React from 'react';
import Data from './Data';

import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


import Step1Image from './images/walnut.png';
import Step2Image from './images/walnut.png';
import Step3Image from './images/walnut.png';





import './CardListing.css';


function CardListing() {

  const cardContents = [{
    title: 'About Houston, TX',
    image: Step1Image,
    content: "Houston Metro is home to 7.1 million people. The area covers 9,400 square miles, which is larger than New Jersey!! This gives you a wide range of options, from the piney suburbs north of Houston to beaches and everywhere in between"
  }, {
    title: "Pro and Cons of Buying a Home ",
    image: Step2Image,
    content: "Home ownership offers stability and a chance to build equity, but carries risks (see Financial Crisis). Renting offers flexibility, fewer headaches, and doesn't tie money up (downpayment).  Only consider buying if you'll own at least 5 years"
  }, {
    title: 'If you want to buy, BE PREPARED',
    image: Step3Image,
    content: "Limited inventory (48 days) indicates a SELLER'S market.  If you want to buy, have you s#@t together.  Don't sweat things you can easily change (i.e, paint color). Move quickly on something you like, but set limits so you don't get pulled in a bidding war.",
  },
]





  return (
    <Container fluid>
      <Row>
        {
          Data.map(cardContent => {
            return (
              <Col xs={12} sm={6} md={4}>
                <Card style={{height: "unset"}}>
                  
                  <Card.Body>
                    <Card.Img className="card-img" variant="top" src={cardContent.image} />
                   
                    <Link to={`/property-listing/${cardContent.key}`}>
                    <Card.Title className="card-title">{cardContent.name}</Card.Title>
                    </Link>

                  </Card.Body>
                </Card>
              </Col>
            )
          })
        }
      </Row>
    </Container>
  )
};

export default CardListing;