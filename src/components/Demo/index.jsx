import React from 'react'
import styles from './index.module.css'

console.log({ styles })

const Demo = () => {
  return (
    <div className={styles.box}>
      this is demo box
    </div>
  )
}

export default Demo