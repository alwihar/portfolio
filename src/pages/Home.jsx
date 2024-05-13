import React from 'react'

import { About, Story, Contact, Feedback, Circles } from '../components'
import { homeLinks } from '../constants'
import { CompWrapper, ScrollNav, SpotlightText, Divider } from '../components/shared'

const Home = () => {
  return (
    <>
      <ScrollNav scrollNavLinks={homeLinks}/>
      <CompWrapper>
        <Circles/>
        <About/>
        {/*<SpotlightText/>*/}
        <Story/>
        <Divider/>
        <Contact/>
        <Divider/>
        <Feedback/>
      </CompWrapper>
    </>
  );
};

export default Home
