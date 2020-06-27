import React from 'react'

const Slice = props => {
  const { angle, radius, ...rest } = props
  const r = radius // for brevity
  const dx = r * Math.sin(angle)
  const dy = r * (1 - Math.cos(angle))

  return <path {...rest} d={`M${r} ${r}V0a${r} ${r} 0 0 1 ${dx} ${dy}z`} />
}

export default Slice