import React from 'react'

import styles from '../../style'

const MainWrapper = ({ id, customCss, children }) => {
  return (
    <section id={id} className={`flex flex-row w-full max-w-[1000px] ${styles.paddingY} ${styles.marginY} ${customCss}`}>
      {children}
    </section>
  )
}

export default MainWrapper