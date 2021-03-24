import React from 'react';
import './Home.css';
import Banner from './Banner';
import Header from './Header';
import CardListing from './CardListing';
import MyCarousel from './MyCarousel';
import ImageBanner from './ImageBanner';
import Template from './Template';
import DatePicker from './DatePicker';
import Test from './Test';


function Home () {
    return(
        <div>

          
            <div>
            <ImageBanner />
            </div>

            <div>
            <Test />
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

            <div>
            <Template />
            </div>
            
            <div>
            <DatePicker/>
            </div>

            

        </div>
        
       
    );
}

export default Home;