import React from 'react'

const Alert = ({text, type}) => {
  return (
    <div className="absolute -top-20 left-0 right-0 flex justify-center items-center">
      <div
        className={`${type === 'danger' ? 'bg-danger' : 'bg-success'} items-center text-main p-2 leading-none lg:rounded-full flex lg:inline-flex`}
        role="alert">
        <p
          className={`${type === 'danger' ? 'bg-danger' : 'bg-success'} text-custom-body flex rounded-full pl-2 py-1 font-bold mr-3`}>{type === 'danger' ? 'failed:' : 'success:'}</p>
        <p className="mr-2 text-left custom-body-small">{text}</p>
      </div>
    </div>
  )
}

export default Alert