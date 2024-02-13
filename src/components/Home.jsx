import React from 'react'
import { About, Story, Contact, Feedback, SpotlightText, ScrollNav, Divider } from './index'

const Home = () => {
  return (
    <>
      <ScrollNav/>
      <div className="flex flex-col items-center px-[200px]">
        <About/>
        {/*<SpotlightText/>*/}
        <Story/>
        <Divider/>
        <Contact/>
        <Divider/>
        <Feedback/>
      </div>
    </>
  );
};

export default Home
