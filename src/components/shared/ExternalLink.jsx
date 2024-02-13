import React from 'react'

const ExternalLink = ({link, content}) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  )
}

export default ExternalLink