import React from 'react';
import './ImageBanner.css';
import BannerImage from './images/windmill.jpg';

function ImageBanner() {
    return (
        <div className="image-banner-wrapper">
            <img className="image-banner" src={ BannerImage } />
        </div>
    )
}

export default ImageBanner
