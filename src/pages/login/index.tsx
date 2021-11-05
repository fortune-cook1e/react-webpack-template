import { setStorage } from '@/utils'
import React, { useState } from 'react'
import { useHistory } from 'react-router'

const Login: React.FC = () => {
	const history = useHistory()
	const [loginParams, setLoginParams] = useState({
		username: '',
		password: ''
	})
	const handleLogin = () => {
		setStorage('local', 'user', loginParams.username)
		history.replace('/')
	}
	return (
		<div>
			this is login page
			<input
				type='text'
				value={loginParams.username}
				onChange={e =>
					setLoginParams({ ...loginParams, username: e.target.value })
				}
			/>
			<input
				type='text'
				value={loginParams.password}
				onChange={e =>
					setLoginParams({ ...loginParams, password: e.target.value })
				}
			/>
			<button onClick={handleLogin}>login</button>
		</div>
	)
}

export default Login
