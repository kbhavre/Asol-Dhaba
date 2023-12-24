import React from 'react'
import PickMeals from '../Assets/pick-meals-image.png'
import ChooseMeals from '../Assets/choose-image.png'
import DeliveryMeals from '../Assets/delivery-image.png'


const Work = () => {

    const workInfoData = [
        {
            image: PickMeals,
            title: "North Indian",
            text: "Cuisines from Northern states of India such as Chole Bhature, Daal Baafle, and many dishes made of Paneer"
        },
        {
            image: ChooseMeals,
            title: "South Indian",
            text: "Cuisines from Southern states of India such as Dosa, Uttapam, Idli, Vada, Sambhar etc"
        },
        {
            image: DeliveryMeals,
            title: "Chinese",
            text: "Cuisines which are the part of Chinese culture and taste includes Noodles, Manchurian, Fried Rice, Spring Rolls etc"
        },
    ];

  return (
    <div className='work-section-wrapper'>
        <div className="work-section-top">
            {/* <p className="primary-subheading">Work</p> */}
            <h1 className='primary-heading'>Our Speciality</h1>
            <p className='primary-text'>
            We provide a wide range of cuisines and dishes to choose from so that every foodie in town has their best experience with us.
            </p>
        </div>

        <div className="work-section-bottom">
            {
                workInfoData.map((data)=> (
                    <div className="work-section-info">
                        <div className="info-boxes-image-container">
                            <img src={data.image} alt="" />
                        </div>
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                    </div>
                ))
            }
        </div>

    </div>
  )
}

export default Work