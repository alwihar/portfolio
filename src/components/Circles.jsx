import React from 'react'

const Circles = () => {
  return (
    // Add 'hidden sm:block' to hide on mobile and display on medium screens and above
    <div className='hidden sm:block absolute top-[-400px]'>
      <div className="relative w-[800px] h-[500px]">
        <div
          className="absolute w-[700px] h-[700px] rounded-full opacity-70 circle animate-float"
          style={{
            background: 'radial-gradient(circle closest-side, #6D00A1 0, rgba(109, 0, 161, 0) 100%)',
          }}
        />
        <div
          className="absolute w-[700px] h-[700px] rounded-full opacity-50 circle animate-floatReverse"
          style={{
            background: 'radial-gradient(circle closest-side, #FB2558 0, rgba(251, 37, 88, 0) 100%)',
            left: '200px'
          }}
        />
      </div>
    </div>
  )
}

export default Circles
