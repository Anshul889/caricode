import React, { useRef, useState, useEffect, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'
import './TextTransition.css'

function TextTransition() {
  const ref = useRef([])
  const [items, set] = useState([])
  const transitions = useTransition(items, null, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: 'perspective(600px) rotateX(0deg)',
      color: '#8fa5b6',
    },
    enter: [
      { opacity: 1, height: 40, innerHeight: 40 },
      { transform: 'perspective(600px) rotateX(180deg)', color: '#28d79f' },
      { transform: 'perspective(600px) rotateX(0deg)' },
    ],
    leave: [
      { color: '#c23369' },
      { innerHeight: 0 },
      { opacity: 0, height: 0 },
    ],
    update: { color: '#28b4d7' },
  })

  const reset = useCallback(() => {
    ref.current.map(clearTimeout)
    ref.current = []
    set([])
    ref.current.push(
      setTimeout(() => set(['Apples', 'Oranges', 'Kiwis']), 2000)
    )
    ref.current.push(setTimeout(() => set(['Apples', 'Kiwis']), 5000))
    ref.current.push(
      setTimeout(() => set(['Apples', 'Bananas', 'Kiwis']), 8000)
    )
  }, [])

  useEffect(() => void reset(), [])

  return (
    <div>
      <div style={{ marginBottom: '40px', height: '120px'}}>
        {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
          <animated.div className="transitions-item" key={key} style={rest}>
            <animated.div style={{ overflow: 'hidden', height: innerHeight }}>
              {item}
            </animated.div>
          </animated.div>
        ))}
      </div>
      <button onClick={reset} style={{marginBottom: '20px'}}>Reset animation</button>
    </div>
  )
}

export default TextTransition
