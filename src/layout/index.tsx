import React from 'react'
import { Layout } from 'antd'
const { Header, Footer, Sider, Content } = Layout

import styles from './index.module.less'

interface Props {
	children: React.ReactNode
}

const DefaultLayout = ({ children }: Props): JSX.Element => {
	return (
		<Layout className={styles.layout}>
			<Header className={styles.header}>This is Header</Header>
			<Layout className={styles.main}>
				<Sider className={styles.sider}>Sider</Sider>
				<Content className={styles.content}>{children}</Content>
			</Layout>
			<Footer className={styles.footer}>Footer</Footer>
		</Layout>
	)
}

export default DefaultLayout
