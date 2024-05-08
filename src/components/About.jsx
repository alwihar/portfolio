import React from 'react'
import { Link } from 'react-router-dom'

import styles from '../style'
import { MainWrapper, SocialMedia, Button } from './shared'

const About = () => {
  return (
    <MainWrapper id="about" customCss="justify-between">
      <div className="flex justify-between">
        <div className={`flex-1 ${styles.flexStart} flex-col`}>
          <p className={`${styles.paragraph} max-w-[470px] mb-10 text-main text-custom-body`}>about me</p>
          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="font-denver text-secondary font-bold ss:text-custom-title-big text-custom-title-mid ss:leading-[140px] leading-[75px]">
              <span className="block">hey,</span>
              <span className="block">I'm alwi.</span>
            </h1>
          </div>
          <p className={`${styles.paragraph} max-w-[470px] mt-5 mb-10 text-main text-custom-body-big`}>a frontend developer with an artist’s heart.</p>
          <Link to='portfolio'>
            <Button title='view portfolio' style='contact_submit-button bg-secondary'/>
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <SocialMedia/>
      </div>
    </MainWrapper>
  );
};

export default About