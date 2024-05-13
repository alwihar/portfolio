import React from 'react'

import ExternalLink from './ExternalLink'
import { socialMediaLinks } from '../../constants'

const SocialMedia = () => {
  return (
    <>
      {socialMediaLinks.map(({url, alt, src, index}) => (
        <ExternalLink content={<img src={src} alt={alt} className='m-3 w-[16px] h-[16px]' key={index}/>} link={url}/>
      ))}
    </>
  )
}

export default SocialMedia