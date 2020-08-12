import React, { useState } from 'react'
import Layout from '../components/layout'
import styles from './ecommerce.module.css'
import { Spring, config } from 'react-spring/renderprops'
import VisibilitySensor from 'react-visibility-sensor'
import { useTransition, animated } from 'react-spring'

const Ecommerce = () => {
  const [isMorningChecked, setIsMorningChecked] = useState(false)
  const [isAfternoonChecked, setIsAfternoonChecked] = useState(false)
  const [isEveningChecked, setIsEveningChecked] = useState(false)
  return (
    <Layout>
      <div className={styles.form}>
        <input
          type="checkbox"
          isChecked={isMorningChecked}
					onClick={() => setIsMorningChecked(!isMorningChecked)}
					name="scales"
					id="scales"
        />
        <label for="scales"> Morning</label>
        <input
          type="checkbox"
          isChecked={isAfternoonChecked}
					onClick={() => setIsAfternoonChecked(!isAfternoonChecked)}
        />
        <label >Afternoon</label>
        <input
          type="checkbox"
          isChecked={isEveningChecked}
					onClick={() => setIsEveningChecked(!isEveningChecked)}
        />
        <label >Evening</label>
      </div>
			<div>
			{isMorningChecked && <span>Morning</span>}
			{isAfternoonChecked && <span>Afternoon</span>}
			{isEveningChecked && <span>Evening</span>}
			</div>
    </Layout>
  )
}

export default Ecommerce
