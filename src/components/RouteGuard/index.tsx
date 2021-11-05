import { useAuth } from '@/hooks/useAuth'
import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const RouteGuard: React.FC = ({ children, ...rest }: any) => {
	const [authStatus] = useAuth()
	return (
		<Route
			{...rest}
			render={() => {
				const { auth = false } = rest
				if (auth && authStatus) return children
				if (auth && !authStatus) return <Redirect to='/no-permission' />
				if (!auth) return children
			}}
		/>
	)
}

export default RouteGuard
