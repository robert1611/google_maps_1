import React from 'react';
import './Home.css';
import Banner from './Banner';
import Header from './Header';
import CardListing from './CardListing';
import MyCarousel from './MyCarousel';
import ImageBanner from './ImageBanner';

function Home () {
    return(
        <div>

          
            <div>
            <ImageBanner />
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