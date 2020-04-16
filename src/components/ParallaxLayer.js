import React from 'react'
import Background from '../images/image4.jpg'

const ParallaxLayer = () => {
  return (
    <div className="parallax" style={{backgroundImage : `url(${Background})`, height: '50vh'}}>
    </div>
  )
}

export default ParallaxLayer
