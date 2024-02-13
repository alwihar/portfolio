import React from 'react'

const MainTitle = ({ customCss, title }) => {
  return (
    <h1 className={`font-denver font-bold ss:text-custom-title text-custom-title-small ss:leading-[60px] leading-[40px] ${customCss}`}>
      {title}
    </h1>
  )
}

export default MainTitle