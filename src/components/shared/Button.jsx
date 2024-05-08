import React from 'react'

const Button = ({title, style, ...props}) => {
  return (
    <button {...props} className={`${style} text-main`}>
      {title}
    </button>
  )
}

export default Button