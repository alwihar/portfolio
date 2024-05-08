import React from 'react'

import { SpotlightText } from '../components'
import { CompWrapper } from '../components/shared'

const Art = () => {
  return (
    <CompWrapper>
      <SpotlightText text='art'/>
      <div className='min-h-[50vh] text-secondary'>
        coming soon...
      </div>
    </CompWrapper>
  )
}

export default Art