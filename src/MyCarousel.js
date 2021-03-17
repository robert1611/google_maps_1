// Ref: https://dev.to/aryaziai/modern-testimonials-in-react-tutorial-cn1

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import Test1Image from './images/Test1.png';
// import Test2Image from './../../assets/img/lebowski.jpg';
// import Test3Image from './../../assets/img/soup_nazi.png';

import './MyCarousel.css';


const MyCarousel = () => {

  const testimonials = [{
    name: 'Art Vandelay',
    image: Test1Image,
    role: 'Architect',
    content: 'This app really helped me decide to go ahead and buy.  I really liked having clear assumptions laid out for insurance, tax, and ongoing maintenance'
  }, {
    name: 'J. Lebowski and W. Sobchak',
    image: Test1Image,
    role: 'The Dudes',
    content: "We decided to keep renting because getting a job wasn't our thing.  Got in the way of my N'Out trips."
   }, {
    name: 'J. Lebowski and W. Sobchak',
    image: Test1Image,
    role: 'The Dudes',
    content: "We decided to keep renting because getting a job wasn't our thing.  Got in the way of my N'Out trips."
  }, {
    name: 'J. Lebowski and W. Sobchak',
    image: Test1Image,
    role: 'The Dudes',
    content: "We decided to keep renting because getting a job wasn't our thing.  Got in the way of my N'Out trips."
  }, {
    name: 'J. Lebowski and W. Sobchak',
    image: Test1Image,
    role: 'The Dudes',
    content: "We decided to keep renting because getting a job wasn't our thing.  Got in the way of my N'Out trips."
  }, {
    name: 'J. Lebowski and W. Sobchak',
    image: Test1Image,
    role: 'The Dudes',
    content: "We decided to keep renting because getting a job wasn't our thing.  Got in the way of my N'Out trips."
  }, {
    name: 'J. Lebowski and W. Sobchak',
    image: Test1Image,
    role: 'The Dudes',
    content: "We decided to keep renting because getting a job wasn't our thing.  Got in the way of my N'Out trips."
  }, {
    name: 'Yev Kassam',
    image: Test1Image,
    role: 'Soup Nazi',
    content: 'The simple and intuitive design makes it easy for me use. I am usually a pretty demanding guy.'
  }];

  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={6100}
    >
      {
        testimonials.map(testimonial => {
          return (
            <div key={testimonial.name}>
              <img src={testimonial.image} alt="testimonial-user" />
              <div className="myCarousel">
                <h3>{testimonial.name}</h3>
                <h4>{testimonial.role}</h4>
                <p>{testimonial.content}</p>
              </div>
            </div>
          )
        })
      }
    </Carousel>
  );
}

export default MyCarousel;