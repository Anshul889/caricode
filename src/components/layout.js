import React from 'react'
import "./layout.css"
import Navbar from './Navbar'
import Contact from './contact'

const layout = ({children}) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default layout
