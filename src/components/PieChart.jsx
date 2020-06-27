import Slice from "./Slice"
import React from 'react'

const PieChart = props => {
  const { data, radius } = props
  const total = data.reduce((a, b) => a + b, 0)
  const diameter = 2 * radius
  
  let rotate = 0.5 * Math.PI
  
  return (
    <svg
      width={diameter}
      height={diameter}
      viewBox={`0 0 ${diameter} ${diameter}`}
    >
      {data.map((value, i) => {
        const angle = 2 * Math.PI * value / total
        
        const fill = `hsl(${45* i}, 40%, 50%)`
        const transform = `rotate(${rotate}rad)`
        const transformOrigin = `${radius}px ${radius}px`
        
        rotate += angle
        
        return (
          <Slice
            key={i}
            angle={angle}
            radius={radius}
            style={{ fill, transform, transformOrigin }}
          />
        )
      })}
    </svg>
  )
}

PieChart.defaultProps = {
  radius: 100
}



export default PieChart