import React from 'react'

import styles from '../../style'

const CompWrapper = ({ children }) => {
  return (
    <div className="flex flex-col items-center px-[200px] mt-[120px]">
      {children}
    </div>
  )
}

export default CompWrapper