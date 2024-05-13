import React from 'react'

import { MainWrapper, MainTitle, Carousel } from './shared'
import { techIconsSettings, techIconsItems } from '../constants'

const Tech = () => {
  return (
    <MainWrapper id='tech'>
      <div className="flex flex-col items-center w-full">
        <MainTitle
          title="diving into development with an arsenal of technologies at my fingertips. here’s the tech I use turning ideas to life:"
          customCss="text-main text-center max-w-[700px] mb-10 text-center"
        />
       <Carousel settings={techIconsSettings} items={techIconsItems} />
      </div>
    </MainWrapper>
  )
}

export default Tech