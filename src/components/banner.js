import React, { useRef, useState, useEffect, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'

const Banner = () => {
  const ref = useRef([])
  const [items, set] = useState([])
  const transitions = useTransition(items, null, {
    from: { opacity: 0, height: 0, innerHeight: 0, transform: 'perspective(600px) rotateX(0deg)', color: '#8fa5b6' },
    enter: [
      { opacity: 1, height: 60, innerHeight: 60 },
      { color: '#28d79f' }
    ],
    leave: [{ innerHeight: 0 ,transform: 'perspective(600px) rotateX(0deg)',  opacity: 0, height: 0 }],
    update: { color: '#d9d9d9' },
  })

  const reset = useCallback(() => {
    ref.current.map(clearTimeout)
    ref.current = []
    set([])
    ref.current.push(setTimeout(() => set(['We', 'Design', 'Web', 'Applications']), 300))
    ref.current.push(setTimeout(() => set(['We', 'Design', 'Build', 'Web', 'Applications']), 2300))
    ref.current.push(setTimeout(() => set(['We', 'Design', 'Build', 'Deploy', 'Web', 'Applications']), 5300))
    ref.current.push(setTimeout(() => set(['We', 'Design', 'Build', 'Deploy', 'And Manage', 'Web', 'Applications']), 8300))
  }, [])

  useEffect(() => void reset(), [])

  return (
    <div className="banner">
      <div className='animo'>
      {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
        <animated.div className="transitions-item" key={key} style={rest} onClick={reset}>
          <animated.div style={{ overflow: 'hidden', height: innerHeight }}>{item}</animated.div>
        </animated.div>
      ))}
      </div>
    </div>
  )
}

export default Banner
