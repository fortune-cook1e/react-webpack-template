import React from 'react'

interface Props {
	children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<div>
			<h1>this is layout</h1>
			{children}
		</div>
	)
}

export default Layout
