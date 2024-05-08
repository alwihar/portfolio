import React from 'react'

const Arrow = ({ direction, onClick }) => {
  const isLeft = direction === 'left'

  return (
    <div
      className={`flex items-center justify-center rounded-full p-2 bg-black text-white cursor-pointer ${
        isLeft ? 'mr-2' : 'ml-2'
      }`}
      onClick={onClick}
    >
      {isLeft ? '◄' : '►'}
    </div>
  )
}

export default Arrow
