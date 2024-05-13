import React from 'react'

const ExternalLink = ({link, content, customCss}) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className={customCss}>
      {content}
    </a>
  )
}

export default ExternalLink