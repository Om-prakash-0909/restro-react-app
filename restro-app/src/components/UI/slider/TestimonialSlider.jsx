import React from 'react'
import Slider from "react-slick"
import '../../../styles/sliders.css'

import avaImg01 from '../../../assets/images/ava-1.jpg'
import avaImg02 from '../../../assets/images/ava-2.jpg'
import avaImg03 from '../../../assets/images/ava-3.jpg'
import avaImg04 from '../../../assets/images/ava-4.jpg'

const TestimonialSlider = () => {
    const settings={
        dots:true,
        autoplay:true,
        infinite:true,
        speed:1000,
        autoplaySpeed:3000,
        swipeToSlide:true,
        slideToShow:1,
        SlidesToScroll:1
    }
  return (
    <Slider {...settings}>
        <div>
        <p className='review__text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus exercitationem sequi deserunt dolorem sapiente temporibus praesentium, suscipit eum dolorum consectetur.</p>
        <div className=' slider__content d-flex align-items-center gap-3'>
            <img src={avaImg01} alt="avatar" className=' rounded' />
            <h5>john doe</h5>
        </div>
      </div>
      <div>
      <p className='review__text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus exercitationem sequi deserunt dolorem sapiente temporibus praesentium, suscipit eum dolorum consectetur.</p>
        <div className=' slider__content d-flex align-items-center gap-3'>
            <img src={avaImg02} alt="avatar" className=' rounded' />
            <h5>Priti Saxena</h5>
        </div>
      </div>
      <div>
      <p className='review__text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus exercitationem sequi deserunt dolorem sapiente temporibus praesentium, suscipit eum dolorum consectetur.</p>
        <div className=' slider__content d-flex align-items-center gap-3'>
            <img src={avaImg03} alt="avatar" className=' rounded' />
            <h5>Rahul Dubey</h5>
        </div>
      </div>
      <div>
      <p className='review__text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus exercitationem sequi deserunt dolorem sapiente temporibus praesentium, suscipit eum dolorum consectetur.</p>
        <div className=' slider__content d-flex align-items-center gap-3'>
            <img src={avaImg04} alt="avatar" className=' rounded' />
            <h5>Kirti Panday</h5>
        </div>
      </div>
    </Slider>
  )
}

export default TestimonialSlider
