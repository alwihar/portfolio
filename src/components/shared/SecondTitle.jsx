import React from 'react'

const SecondTitle = ({ customCss, title }) => {
  return (
    <h1 className={`ss:text-custom-body-big text-custom-body ss:leading-[60px] leading-[40px]  ${customCss}`}>
      {title}
    </h1>
  )
}

export default SecondTitle