import React from 'react';
import Navbar from './Navbar';
import BannerBackground from '../Assets/home-banner-background.png';
import BannerImage from '../Assets/home-banner-image.png';
import { FiArrowRight } from 'react-icons/fi'


const Home = () => {
    return (
        <div className='home-container'>
            <Navbar />

            <div className="home-banner-container">
                <div className="home-bannerImage-container">
                    <img src={BannerBackground} alt="" />
                </div>
                <div className="home-text-section">
                    <h1 className="primary-heading">
                    Food that makes you feel happy at <span>Asol Dhaba</span>
                    </h1>
                    <p className='primary-text'>
                    Asol Dhaba invites you to embark on a unique journey to a little piece of India. Instantly smell the flavorful curries, tandoori meats, aromatic basmati rice and garlic naan as soon as you walk in. With friendly service and an at home attitude, there is no doubt that our service to you is our number 1 priority.
                    </p>
                    <button className='secondary-button'>
                        Book Table <FiArrowRight/>
                    </button>
                </div>
                <div className="home-image-container">
                    <img src={BannerImage} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home