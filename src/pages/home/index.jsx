import React from 'react'
import styles from './index.module.less'
import { Button } from 'antd'

const Home = () => {
  return (
    <div className={styles.home}>
      this is home
      <Button>
        click me
      </Button>
    </div>
  )
}

export default Home