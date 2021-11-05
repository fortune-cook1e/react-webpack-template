import React, { useEffect, Suspense } from 'react'
import { Spin } from 'antd'
import { BrowserRouter as Router, Routes, useRoutes } from 'react-router-dom'
import RouterElement from './routes'

const Component1 = () => {
	return <h1>Component 1</h1>
}

const Component2 = () => {
	return <h1>Component 2</h1>
}

const App: React.FC = () => {
	useEffect(() => {
		// do sth
	}, [])

	// const routes = useRoutes([
	// 	{ path: '/', element: <Component1 /> },
	// 	{ path: 'component2', element: <Component2 /> }
	// 	// ...
	// ])
	// return routes

	return (
		<Suspense fallback={<Spin />}>
			<Router>
				<RouterElement />
			</Router>
		</Suspense>
	)
}
// const AppWrapper = () => {
// 	return (
// 		<Router>
// 			<App />
// 		</Router>
// 	)
// }

export default App
