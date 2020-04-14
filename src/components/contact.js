import React, { useState } from 'react'

const Contact = () => {
  const [message, setMessage] = useState(null);
  const [inputField, setInputfield] = useState(null);
  const [formError, setError] = useState(false);
  return (
    <section className="contact">
      <h2>SEND US A MESSAGE</h2>
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
        {formError && !(message && inputField)  && <span style={{ color: 'red' }}>{' '}Form is incomplete!</span>}
      </form>
    </section>
  )
}

export default Contact
