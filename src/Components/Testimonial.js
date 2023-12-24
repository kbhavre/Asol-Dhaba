import React from 'react'
import ProfilePic from "../Assets/john-doe-image.png"
import {AiFillStar} from "react-icons/ai"

const Testimonial = () => {
  return (
    <div className='work-section-wrapper'>
        <div className="work-section-top">
            {/* <p className='primary-text'>Testimonial</p> */}
            <h1 className='primary-heading'>What They are Saying</h1>
            <p className='primary-text'>Don't just take our word for it - here what our customer have to say 
            </p>
            <div className="testimonial-section-bottom">
                <img src={ProfilePic} alt="" />
                <p>The quality and tast of the food is amazing, Every sunday we try something new here. The owner and the staff of the dhaba is great.</p>
                <div className="testimonials-stars-container">
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                </div>
                <h2>Kunal Choudhary</h2>
            </div>
        </div>
    </div>
  )
}

export default Testimonial