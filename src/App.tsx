import React, { useEffect, Suspense } from 'react'
import { Spin } from 'antd'
import { HashRouter as Router } from 'react-router-dom'
import RouterElement from './routes'

const App: React.FC = () => {
	useEffect(() => {
		// do sth
	}, [])

	return (
		<Suspense fallback={<Spin />}>
			<Router>
				<RouterElement />
			</Router>
		</Suspense>
	)
}

export default App
