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
      await next({ backgroundColor: '#f4f7f9' })
      await delay(3000)
      await next({ backgroundColor: '#7c759a' })
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
                    Build, deploy and manage your online business
                  </h2>
                )}
              </Container>
              <Container state="colorp">
                {styles => (
                  <p style={styles}>
                    Digitally transform your enterprise. We create ecommerce web
                    applications backed by robust, scalable technology to
                    deliver customer engagement and return on your investment
                  </p>
                )}
              </Container>
              <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay={5000}>
                {props => (
                  // <Link to='#ecomecarousel'>
                  <div>
                    <button
                      onClick={() =>
                        window.scrollTo({
                          top: 450,
                          left: 0,
                          behavior: 'smooth',
                        })
                      }
                      className={styles.getmbutton}
                      style={props}
                    >
                      Get Started
                    </button>
                    <button
                      onClick={() =>
                        window.scrollTo({
                          top: 400,
                          left: 0,
                          behavior: 'smooth',
                        })
                      }
                      className={styles.getdbutton}
                      style={props}
                    >
                      Get Started
                    </button>
                  </div>
                  // </Link>
                )}
              </Spring>
            </div>
          </div>
        )}
      </Container>
    </div>
  )
}

export default EcommerceHero
