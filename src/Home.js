import React from 'react';
import './Home.css';
import Banner from './Banner';
import Header from './Header';
import CardListing from './CardListing';
import MyCarousel from './MyCarousel';

function Home () {
    return(
        <div>

            <div>
            <Header />
            </div>
        
        
            <div>
            <Banner />
            </div>

            <div>
            <CardListing />
            </div>

            <div>
            <MyCarousel />
            </div>

        </div>
        
       
    );
}

export default Home;