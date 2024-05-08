import React from 'react'

import { MainWrapper, MainText, Carousel } from './shared'
import { techIconsSettings, techIconsItems } from '../constants'

const Tech = () => {
  return (
    <MainWrapper id='tech'>
      <div className="flex flex-col items-center w-full">
        <MainText
          text="diving into development with an arsenal of technologies at my fingertips. here’s the tech I use turning ideas to life:"
          customCss="max-w-[600px] mb-10 text-center text-custom-body-big"
        />
       <Carousel settings={techIconsSettings} items={techIconsItems} />
      </div>
    </MainWrapper>
  )
}

export default Tech