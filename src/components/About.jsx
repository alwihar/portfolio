import React from 'react'
import styles from '../style'
import MainWrapper from './shared/MainWrapper'
import SocialMedia from './shared/SocialMedia'

const About = () => {
  return (
    <MainWrapper id="about" customCss="justify-between">
      <div className="flex justify-between">
        <div className={`flex-1 ${styles.flexStart} flex-col`}>
          <p className={`${styles.paragraph} max-w-[470px] mb-10 text-main text-custom-body-big`}>about me</p>
          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="font-denver text-secondary font-bold ss:text-custom-title-big text-custom-title-mid ss:leading-[140px] leading-[75px]">
              <span className="block">hey,</span>
              <span className="block">I'm alwi.</span>
            </h1>
          </div>
          <p className={`${styles.paragraph} max-w-[470px] mt-5 text-main text-custom-body-big`}>a frontend developer with an artist’s heart.</p>
        </div>
      </div>
      <div className="flex flex-col">
        <SocialMedia small/>
      </div>
    </MainWrapper>
  );
};

export default About