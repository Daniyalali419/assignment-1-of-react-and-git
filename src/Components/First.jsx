import React from 'react'
import Nav from './Nav';
import BannerBackground from "../assets/home-banner-background.png";
import BannerImage from "../assets/home-banner-image.png";
import {FiArrowRight} from "react-icons/fi";

function First() {
  return (
      <div className='first-container'>
        <Nav/>
        <div className='home-banner-container'>
            <div className='home-bannerImage-container'>
                <img src={BannerBackground} alt="" />
            </div>
            <div className='home-text-section'>
            <h1 className='primary-heading'>
                Your Favorite Food Delivered Hot & Fresh
            
            </h1>
            <p className='primary-text'>
                Healthy switchers chefs do all the preperation work,like peeding,chopping & marinating, so you can cook a Fresh food
            </p>
            </div>
                <div className='home-image-section'>
                    <img src={BannerImage} alt="" />
                </div>
            
        </div>
            <button className='secondary-button'>
                Order now <FiArrowRight/>
            </button>
    </div>
  )
}

export default First