import React from 'react'

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { Tech, Projects, SpotlightText } from '../components'
import { portfolioLinks } from '../constants'
import { CompWrapper, ScrollNav } from '../components/shared'


const Portfolio = () => {
  return (
    <>
      <ScrollNav scrollNavLinks={portfolioLinks}/>
      <CompWrapper>
        <SpotlightText text='portfolio'/>
        <Tech/>
        <Projects/>
      </CompWrapper>
    </>
  )
}

export default Portfolio