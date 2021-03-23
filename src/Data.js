import CityImage from './images/walnut/kitchen2.jpg';
import BigImage from './images/vine/vine_living1.jpg';
import SnyderImage from './images/39/queen3_39.jpg';



const data = [
  {
    key: "big-spring",
    name: "Big Spring",
    image: CityImage,
    properties: [
      {
        key: "aria",
        name: "Aria",
        location: "Test Location"
      }
    ]
  },
  {
    key: "colorado-city",
    name: "Colorado City",
    image: BigImage,
    properties: [
      {
        key: "colorado-city-1",
        name: "Colorado Property 1",
        location: "Test Location"
      }
    ]
  },
  {
    key: "snyder",
    name: "Snyder",
    image: SnyderImage,
    properties: [
      {
        key: "snyder-1",
        name: "Snyder Property",
        location: "Test Location"
      }
    ]
  }
];


export default data;