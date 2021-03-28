import React, { useState } from 'react'
import styles from './index.module.less'

import Loading from '@/components/Loading'

const Home:React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false)
  return (
    <div className={styles.home}>
      this is home
      <button onClick={() => setLoading(!loading)}>
        click
      </button>
      <Loading loading={loading} tip='loading...'>
        <h1>hahaha</h1>
        <h1>hahaha</h1>
        <h1>hahaha</h1>
        <h1>hahaha</h1>
        <h1>hahaha</h1>
        <h1>hahaha</h1>
        <h1>hahaha</h1>
        <h1>hahaha</h1>
        <h1>hahaha</h1>
        <h1>hahaha</h1>
        <h1>hahaha</h1>
        <h1>hahaha</h1>
        <h1>hahaha</h1>
        <h1>hahaha</h1>
        <h1>hahaha</h1>
        <h1>hahaha</h1>
        <h1>hahaha</h1>
      </Loading>
    </div>
  )
}

export default Home