import React from 'react'

import styles from '../style'
import { alwi } from '../assets/index'
import { MainWrapper, MainTitle, MainText } from './shared'

const Story = () => {
  return (
    <MainWrapper id="story">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="story_img">
          <img src={alwi} alt="profile-photo" className="max-w-[500px] sm:max-w-[700px] mr-[-100px] ml-[-170px]"/>
          <div className="story_img-shadow"/>
        </div>
        <div className={`flex-1 ${styles.flexStart} flex-col max-w-[550px]`}>
          <p className={`${styles.paragraph} mb-10 text-main text-custom-body`}>my story</p>
          <div className="flex flex-row justify-between items-center w-full">
            <MainTitle title={
              <>
                <span className="block">beyond pixels:</span>
                <span className="block">a story of art, marketing, and code</span>
              </>
            } customCss='text-secondary'/>
          </div>
          <MainText text={
            <>
              my journey from fine art to pixel-perfect designs and robust development has been driven by an unwavering passion for crafting experiences that resonate
              <br/> <br/> transitioning from the structured world of marketing strategy to the fluidity of technology, I've found my niche at the crossroads of aesthetics and functionality. initially drawn to the expressive power of fine art, my journey took a pivot as I embraced the precision of digital design and the complexity of front-end development
              <br/> <br/> now, with a marketer's strategic vision and an artist's eye for detail, I create digital experiences that are not only visually engaging but are built on a foundation of intuitive and robust user interfaces.
            </>
          }/>
        </div>
      </div>
    </MainWrapper>
  )
}

export default Story