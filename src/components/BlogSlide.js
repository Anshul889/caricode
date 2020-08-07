import React, { useState, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'
import './styles.css'

const pages = [
  ({ style }) => (
    <animated.div style={{ ...style, background: 'lightpink', display:'grid', gridTemplateColumns: '1fr'}}>
      
        <img src="https://searchengineland.com/figz/wp-content/seloads/2016/07/Image-A-800x530.png" width="400px" style={{display: 'block' ,margin: '0 auto'}} />
        <div style={{textAlign: 'center'}}>Studies show that having a rich snippet can{' '}
        <b>increase click-through rates (CTR) by 677%</b> and drive 20-40% more
        traffic than product links without them.
      </div>
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style, background: 'lightblue' }}>B</animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style, background: 'lightgreen' }}>
      C
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style, background: 'lightgreen' }}>
      D
    </animated.div>
  ),
]

const BlogSlide = () => {
  const [index, set] = useState(0)
  // const onClick = useCallback(() => set(state => (state + 1) % 3), [])
  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })
  return (
    <div className="simple-trans-main">
      <div className="slide-buttons">
        {index !== 0 && (
          <button className="secondary-button" onClick={() => set(0)}>
            Rich Snippets
          </button>
        )}
        {index === 0 && (
          <button className="active-button">Rich Snippets</button>
        )}
        {index !== 1 && (
          <button className="secondary-button" onClick={() => set(1)}>
            Site Speed
          </button>
        )}
        {index === 1 && <button className="active-button">Site Speed</button>}
        {index !== 2 && (
          <button className="secondary-button" onClick={() => set(2)}>
            Sharing
          </button>
        )}
        {index === 2 && <button className="active-button">Sharing</button>}
        {index !== 3 && (
          <button className="secondary-button" onClick={() => set(3)}>
            Seo Algos
          </button>
        )}
        {index === 3 && <button className="active-button">Seo Algos</button>}
      </div>
      <div>
        {transitions.map(({ item, props, key }) => {
          const Page = pages[item]
          return <Page key={key} style={props} />
        })}
      </div>
    </div>
  )
}

export default BlogSlide
