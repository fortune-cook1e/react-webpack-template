import { Layout } from 'antd'
import React from 'react'
const { Header, Footer, Sider, Content } = Layout
import { Outlet } from 'react-router-dom'

import styles from './index.module.less'

interface Props {
  children?: React.ReactNode
}

const DefaultLayout = ({ children }: Props): JSX.Element => {
  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>This is Header</Header>
      <Layout className={styles.main}>
        <Sider className={styles.sider}>Sider</Sider>
        <Content className={styles.content}>
          <Outlet />
        </Content>
      </Layout>
      <Footer className={styles.footer}>Footer</Footer>
    </Layout>
  )
}

export default DefaultLayout
