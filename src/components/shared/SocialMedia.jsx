import React from 'react'

import ExternalLink from './ExternalLink'
import { socialMediaLinks } from '../../constants'

const SocialMedia = ({small}) => {
  return (
    <>
      {socialMediaLinks.map(({url, alt, src}) => (
        <ExternalLink content={<img src={src} alt={alt} className='p-4'/>} link={url}/>
      ))}
    </>
  )
}

export default SocialMedia