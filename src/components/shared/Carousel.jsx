import React, { useState } from 'react'
import Slider from 'react-slick'

import { techIconsSettings } from '../../constants'
import { MainTitle, SecondTitle } from './index'

const Carousel = ({ items }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const settings = {
    ...techIconsSettings,
    afterChange: (current) => setCurrentSlide(current),
    prevArrow: <techIconsSettings.prevArrow direction="left" />,
    nextArrow: <techIconsSettings.nextArrow direction="right" />,
  }
  return (
    <div className="max-w-[90vw] sm:max-w-[600px] md:max-w-[750px] lg:max-w-[850px]">
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="carousel-slide text-center">
            <i className={item.class} style={{ fontSize: '100px', color: 'white', transition: 'all 0.3s ease' }} />
          </div>
        ))}
      </Slider>
      <div className="text-center mt-4">
        <MainTitle title={items[currentSlide]?.name} customCss='text-secondary'/>
        <p className='text-main'>{items[currentSlide]?.text || 'No description available'}</p>
      </div>
    </div>
  )
}

export default Carousel
