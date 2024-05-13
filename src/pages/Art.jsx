import React from 'react'

import { CompWrapper, MainWrapper, SpotlightText } from '../components/shared'

const Art = () => {
  return (
    <CompWrapper>
      <SpotlightText text='art'/>
      <MainWrapper id='art' children={
        <div className='text-secondary'>coming soon...</div>
      } customCss='flex justify-center text-center lg:min-h-0 min-h-[70vh]'/>
    </CompWrapper>
  )
}

export default Art