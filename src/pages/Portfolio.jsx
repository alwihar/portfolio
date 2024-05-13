import React from 'react'

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { Tech, Projects } from '../components'
import { portfolioLinks } from '../constants'
import { CompWrapper, ScrollNav, SpotlightText, Divider } from '../components/shared'


const Portfolio = () => {
  return (
    <>
      <ScrollNav scrollNavLinks={portfolioLinks}/>
      <CompWrapper>
        <SpotlightText text='portfolio'/>
        <Tech/>
        <Divider/>
        <Projects/>
      </CompWrapper>
    </>
  )
}

export default Portfolio