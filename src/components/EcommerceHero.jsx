import React from 'react'
import styles from './EcommerceHero.module.css'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Image from 'gatsby-image'
import { Keyframes, Spring, config } from 'react-spring/renderprops'
import delay from 'delay'

// const getImages = graphql`
//   {
//     banner: file(relativePath: { eq: "ebanner.jpg" }) {
//       childImageSharp {
//         fluid(maxWidth: 2000) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `

const EcommerceHero = () => {
  // const data = useStaticQuery(getImages)
  const Container = Keyframes.Spring({
    back: async next => {
      await next({ backgroundColor: 'white' })
      await delay(3000)
      await next({ backgroundColor: 'rgba(71, 46, 104, 0.9)' })
    },
    colorh: async next => {
      await next({ color: 'black' })
      await delay(3000)
      await next({ color: 'white' })
    },
    colorp: async next => {
      await next({ opacity: 0, color: 'black' })
      await delay(1250)
      await next({ opacity: 1 })
      await delay(860)
      await next({ color: 'white' })
    },
  })

  return (
    <div className={styles.upperbanner}>
    <Container state="back">
      {stylish => (
        <div className={styles.banner} style={stylish}>
          <div className={styles.bannercontent}>
            <Container state="colorh">
              {styles => (
                <h2 style={styles}>
                  Build an online business—no matter what business you’re in
                </h2>
              )}
            </Container>
            <Container state="colorp">
              {styles => (
                <p style={styles}>
                  Create an ecommerce website backed by powerful tools that help
                  you find customers, drive sales, and manage your day-to-day.
                </p>
              )}
            </Container>
            <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay={5000}>
              {props =>
              <button style={props}>Get Started</button>}
            </Spring>
          </div>
        </div>
      )}
    </Container>
    </div>
  )
}

export default EcommerceHero
