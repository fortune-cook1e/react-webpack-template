import React from 'react'
import { useRouterQuery } from '@/hooks/useRouteQuery'

const Home = () => {
	const a = useRouterQuery()
	return <div>home</div>
}

export default Home
