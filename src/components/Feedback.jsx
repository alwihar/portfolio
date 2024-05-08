import React from 'react'

import { feedback } from '../assets/index'

import { MainWrapper, MainTitle, MainText, TextBox } from './shared'
import { recommendations } from '../constants'

const Feedback = () => {
  return (
    <MainWrapper id="feedback">
      <div className="flex flex-col items-center w-full">
        <div>
          <img src={feedback} alt="feedback-svg"/>
        </div>
        <MainTitle title="what people I've worked with have to say" customCss="text-main max-w-[450px] text-center mt-5"/>
        <MainText text="I'm proud of the work I do, but don't just take my word for it. here's what people I've worked with have to say" customCss="max-w-[550px] text-center"/>
        <div className="w-full flex justify-between pt-[70px] gap-[20px]">
          {recommendations.map(({ id, ...restProps }) => (
            <TextBox key={id} {...restProps}/>
          ))}
        </div>
      </div>
    </MainWrapper>
  )
}

export default Feedback