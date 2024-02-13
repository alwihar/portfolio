import React from 'react'

import { star } from '../../assets/index'
import styles from '../../style'
import ExternalLink from './ExternalLink'

const TextBox = ({ text, author, image, position, link }) => {
  return (
    <div className="textBox flex flex-col justify-between">
      <p className={`text-main text-custom-body-small ${styles.paragraph}`}>{text}</p>
      <div className="flex pt-[15px] items-center">
        <img src={image} alt="author-image" className="textBox_image"/>
        <div className="flex flex-col text-main">
          <span>{author}</span>
          <span className="text-custom-body-small">{position}</span>
          <ExternalLink link={link} content={<span className="text-secondary text-custom-body-small">see profile on linkedin</span>}/>
        </div>
      </div>
      <img src={star} alt="star" className="textBox_star"/>
    </div>
  )
}

export default TextBox