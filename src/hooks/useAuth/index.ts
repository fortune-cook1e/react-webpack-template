import { useEffect, useState } from 'react'
import { getStorage } from '@/utils'

type UseAuthResponse = [auth: boolean, setAuth: (v: boolean) => void]

export const useAuth = (): UseAuthResponse => {
	const [auth, setAuth] = useState<boolean>(
		Boolean(getStorage('local', 'user'))
	)

	useEffect(() => {
		const val = Boolean(getStorage('local', 'user'))

		setAuth(val)
	}, [getStorage('local', 'user')])

	return [auth, setAuth]
}
