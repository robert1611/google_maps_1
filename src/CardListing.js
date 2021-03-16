import React from 'react';

import { Container, Row, Col, Card } from 'react-bootstrap';


import Step1Image from './images/walnut.png';
import Step2Image from './images/walnut.png';
import Step3Image from './images/walnut.png';
import Step4Image from './images/walnut.png';
import Step5Image from './images/walnut.png';
import Step6Image from './images/walnut.png';
import Step7Image from './images/walnut.png';




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
  }, {
    title: 'Check Your Sources',
    image: Step4Image,
    content: 'Zillow BADLY underesimtates Houston home prices. Median home price info is often misleading. Listed houses are newer and bigger than average housing stock.  The <a href="https://www.har.com/" target="_blank">Houston Association of Realtors (HAR)</a> has good data on sales prices and comps',
  }, {
    title: 'Roughly Even Own/Rent Split',
    image: Step5Image,
    content: "This surprises newcomers who expect Houston home ownership to be in line with national average of 67%.  Houston has a well supplied apartment market - it's easy to permit, build and attract capital - that means tenants usually have a lot of options",
  }, {
    title: "Additional Things to Consider...",
    image: Step6Image,
    content: "Houston has a strong job market and no state income taxes...but has some of the highest property taxes, and pretty epic floods like Hurricane Harvey.  Factor in those higher property taxes, insurance costs, and repairs when you make your decisions",
  }, {
    title: "Additional Things to Consider...",
    image: Step7Image,
    content: "Houston has a strong job market and no state income taxes...but has some of the highest property taxes, and pretty epic floods like Hurricane Harvey.  Factor in those higher property taxes, insurance costs, and repairs when you make your decisions",
  }, {
    title: "Additional Things to Consider...",
    image: Step7Image,
    content: "Houston has a strong job market and no state income taxes...but has some of the highest property taxes, and pretty epic floods like Hurricane Harvey.  Factor in those higher property taxes, insurance costs, and repairs when you make your decisions",
  }, {
    title: "Additional Things to Consider...",
    image: Step7Image,
    content: "Houston has a strong job market and no state income taxes...but has some of the highest property taxes, and pretty epic floods like Hurricane Harvey.  Factor in those higher property taxes, insurance costs, and repairs when you make your decisions",
  },

]





  return (
    <Container fluid>
      <Row>
        {
          cardContents.map(cardContent => {
            return (
              <Col sm={12} md={4}>
                <Card>
                  
                  <Card.Body>
                    <Card.Img className="card-img" variant="top" src={cardContent.image} />
                    <hr /><Card.Title className="card-title">{cardContent.title}</Card.Title>
                   
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