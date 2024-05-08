import React, { useState } from 'react'

const SpotlightText = ({text}) => {
  const [maskPosition, setMaskPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    setMaskPosition({
      x: e.clientX - window.innerWidth / 2,
      y: e.clientY - window.innerHeight / 2
    })
    // fix this for every size of the screen
  }

  const handleMouseLeave = () => {
    setMaskPosition({x: -500, y: -500})
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="bg-black flex justify-center items-center z-0 spotlightText_spotlight-div"
    >
      <h2 className="spotlightText_spotlight-text font-denver">
        {text}
        <div className="spotlightText_spotlight" style={{ backgroundPosition: `${maskPosition.x}px ${maskPosition.y}px`}}/>
      </h2>
    </div>
  );
};

export default SpotlightText;