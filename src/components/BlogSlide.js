import React, { useState, useCallback } from 'react'
import { useTransition, animated, config } from 'react-spring'
import './styles.css'
import styles from '../pages/blogs.module.css'
import {
  RadialChart,
  LineSeries,
  FlexibleWidthXYPlot,
  XAxis,
  YAxis,
  VerticalBarSeries,
} from 'react-vis'

const pages = [
  ({ style }) => (
    <animated.div
      style={{
        ...style,
        background: 'rgb(94, 173, 187)',
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridTemplateRows: '100px 500px',
      }}
    >
      <h4 className={styles.ninetythree}>
        93% of online experiences begin with a search engine
      </h4>
      <div className={styles.pieouter}>
        <RadialChart
          data={[
            { angle: 1, label: 'Other' },
            { angle: 9, label: 'Search Engine' },
          ]}
          animation={{ damping: 40, stiffness: 120 }}
          height={300}
          width={300}
          labelsStyle={{
            color: 'white',
          }}
          showLabels
          margin={{ left: 10 }}
        />
      </div>
    </animated.div>
  ),
  ({ style }) => (
    <animated.div
      style={{
        ...style,
        background: 'rgb(94, 173, 187)',
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridTemplateRows: '100px 500px',
      }}
    >
      {' '}
      <h4>95% of users don’t scroll past the 5th result</h4>
      <div style={{ margin: '0 auto', width: '600px' }}>
        <FlexibleWidthXYPlot
          margin={{ left: 30, right: 30 }}
          height={300}
          width={600}
        >
          <XAxis title="Position" />
          <YAxis title={'Click Through Rate'} yDomain={[0, 100]} />
          <LineSeries
            curve={'curveMonotoneX'}
            yDomain={[0, 100]}
            data={[
              { x: 1, y: 31 },
              { x: 2, y: 24 },
              { x: 3, y: 18 },
              { x: 4, y: 13 },
              { x: 5, y: 9 },
              { x: 6, y: 6 },
              { x: 7, y: 4 },
              { x: 8, y: 3 },
              { x: 9, y: 2 },
              { x: 10, y: 2 },
            ]}
          />
        </FlexibleWidthXYPlot>
      </div>
    </animated.div>
  ),
  ({ style }) => (
    <animated.div
      style={{
        ...style,
        background: 'rgb(94, 173, 187)',
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridTemplateRows: '100px 500px',
      }}
    >
      <h4>
        70-80% of people ignore paid search results, choosing to only click on
        organic listings
      </h4>
      <div className={styles.organicclicks}>
        <div className={styles.searchresultred}>
          <div className={styles.inner}>
            <div className={styles.adwarning}>
              <div className={styles.ad}>Ad</div>
              <div className={styles.dot}>‎•‎‎</div>
              <div className={styles.webaddress}>www.ad.com</div>
            </div>
            <div className={styles.title}>The Best Ad on the internet</div>
            <div className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </div>
          </div>
        </div>
        <div className={styles.searchresultgreen}>
          <div className={styles.inner}>
            <div className={styles.adwarning}>
              <div className={styles.webaddress}>www.organiclisting.com</div>
            </div>
            <div className={styles.title}>The Best Organic Result</div>
            <div className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </div>
          </div>
        </div>
        <div className={styles.searchresultgreen}>
          <div className={styles.inner}>
            <div className={styles.adwarning}>
              <div className={styles.webaddress}>www.organiclisting.com</div>
            </div>
            <div className={styles.title}>Result 2</div>
            <div className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </div>
          </div>
        </div>
        <div className={styles.searchresultgreen}>
          <div className={styles.inner}>
            <div className={styles.adwarning}>
              <div className={styles.webaddress}>www.organiclisting.com</div>
            </div>
            <div className={styles.title}>Result 3</div>
            <div className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </div>
          </div>
        </div>
        <div className={styles.searchresultgreen}>
          <div className={styles.inner}>
            <div className={styles.adwarning}>
              <div className={styles.webaddress}>www.organiclisting.com</div>
            </div>
            <div className={styles.title}>Result 4</div>
            <div className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </div>
          </div>
        </div>
      </div>
    </animated.div>
  ),
  ({ style }) => (
    <animated.div
      style={{
        ...style,
        background: 'rgb(94, 173, 187)',
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridTemplateRows: '100px 500px',
      }}
    >
      <h4>
        Click through rate changes based on position
      </h4>
      <table style={{ width: '600px', margin: '0 auto' }}>
        <thead>
          <tr>
            <th>Position Change</th>
            <th>CTR Change</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2 &#8594; 1</td>
            <td className={styles.increase}>&#8593; 28.4%</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>3 &#8594; 2</td>
            <td className={styles.increase}>&#8593; 32.4%</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>4 &#8594; 3</td>
            <td className={styles.increase}>&#8593; 37.2%</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>5 &#8594; 4</td>
            <td className={styles.increase}>&#8593; 43.1%</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>6 &#8594; 5</td>
            <td className={styles.increase}>&#8593; 53.2%</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>7 &#8594; 6</td>
            <td className={styles.increase}>&#8593; 49.3%</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>8 &#8594; 7</td>
            <td className={styles.increase}>&#8593; 33%</td>
          </tr>
        </tbody>
      </table>
    </animated.div>
  ),
  ({ style }) => (
    <animated.div
      style={{
        ...style,
        background: 'rgb(94, 173, 187)',
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridTemplateRows: '100px 500px',
      }}
    >
      <h4>
        Web traffic is among the top two most-common measurements of success for
        content marketing strategies
      </h4>
      <div style={{ width: '600px', margin: '0 auto' }}>
        <FlexibleWidthXYPlot margin={{ left: 60, right: 30 }} height={300}>
          <XAxis xType="time" tickTotal={6} />
          <YAxis title={'Users'} yDomain={[0, 35000]} />
          <LineSeries
            curve={'curveMonotoneX'}
            data={[
              { x: new Date('Jan 1 2020').getTime(), y: 15000 },
              { x: new Date('February 1 2020').getTime(), y: 16000 },
              { x: new Date('March 1 2020').getTime(), y: 18000 },
              { x: new Date('Apr 1 2020').getTime(), y: 20000 },
              { x: new Date('May 1 2020').getTime(), y: 20000 },
              { x: new Date('June 1 2020').getTime(), y: 22000 },
              { x: new Date('July 1 2020').getTime(), y: 27000 },
              { x: new Date('August 1 2020').getTime(), y: 27000 },
              { x: new Date('September 1 2020').getTime(), y: 30000 },
              { x: new Date('October 1 2020').getTime(), y: 27000 },
              { x: new Date('November 1 2020').getTime(), y: 32000 },
              { x: new Date('December 1 2020').getTime(), y: 32000 },
            ]}
            yDomain={[0, 35000]}
          />
        </FlexibleWidthXYPlot>
      </div>
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
    config: config
  })
  return (
    <div className="simple-trans-main">
      <div className="slide-buttons">
        {index !== 0 && (
          <button className="secondary-button" onClick={() => set(0)}>
            Search Engine
          </button>
        )}
        {index === 0 && (
          <button className="active-button">Search Engine</button>
        )}
        {index !== 1 && (
          <button className="secondary-button" onClick={() => set(1)}>
            Top 5 Results
          </button>
        )}
        {index === 1 && (
          <button className="active-button">Top 5 Results</button>
        )}
        {index !== 2 && (
          <button className="secondary-button" onClick={() => set(2)}>
            Organic Results
          </button>
        )}
        {index === 2 && (
          <button className="active-button">Organic Results</button>
        )}
        {index !== 3 && (
          <button className="secondary-button" onClick={() => set(3)}>
            Click Through Rates
          </button>
        )}
        {index === 3 && (
          <button className="active-button">Click Through Rates</button>
        )}
        {index !== 4 && (
          <button className="secondary-button" onClick={() => set(4)}>
            Content Marketing
          </button>
        )}
        {index === 4 && (
          <button className="active-button">Content Marketing</button>
        )}
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
