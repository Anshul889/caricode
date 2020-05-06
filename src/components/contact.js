import React, { useState } from 'react'
import { Spring, config } from 'react-spring/renderprops'
import VisibilitySensor from 'react-visibility-sensor'
import { useTransition, animated } from 'react-spring'

const Contact = () => {
  const [message, setMessage] = useState(null)
  const [inputField, setInputfield] = useState(null)
  const [formError, setError] = useState(false)
  const transitions = useTransition(formError &&
    !(message && inputField), null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.slow,
  })
  return (
    <section className="contact">
      <h2>SEND US A MESSAGE</h2>
      <VisibilitySensor>
        {({ isVisible }) => (
          <Spring
            from={{ width: '1px', marginBottom: '20px' }}
            to={{
              width: isVisible ? '50px' : '1px',
              marginBottom: '20px',
            }}
            config={config.slow}
            delay={800}
          >
            {props => <div className="hero-feature-border" style={props}></div>}
          </Spring>
        )}
      </VisibilitySensor>
      <form
        id="contact"
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className="former">
          <label onSelect={() => setInputfield(true)}>
            <div className="formitem">Name</div>
            <input type="text" name="name" />
          </label>
          <label onSelect={() => setInputfield(true)}>
            <div className="formitem">Email</div>
            <input type="email" name="email" />
          </label>
          <label className="textdiv" onSelect={() => setMessage(true)}>
            <div className="formitem">Message</div>
            <textarea name="message"></textarea>
          </label>
        </div>
        {message && inputField ? (
          <button type="submit">Send</button>
        ) : (
          <button onMouseOver={() => setError(true)} style={{ opacity: '0.5' }}>
            Send
          </button>
        )}
    {transitions.map(
            ({ item, key, props }) =>
              item && (
                <animated.span key={key} style={{...props, color: 'red'}}>
                  Form is Incomplete
                </animated.span>
              )
          )}
      </form>
    </section>
  )
}

export default Contact
