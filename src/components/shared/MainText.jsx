import React from 'react'
import styles from '../../style'

const MainText = ({ text, customCss }) => {
  return (
    <p className={`${styles.paragraph} mt-5 text-main text-custom-body ${customCss}`}>
      {text}
    </p>
  )
}

export default MainText