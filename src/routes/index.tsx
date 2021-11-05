import React, { Suspense } from 'react'
import { renderRoutes } from 'react-router-config'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Layout from '@/layout'
import { Spin } from 'antd'
import { layoutRoutes, noLayoutRoutes } from './routes'
import { IRouteItem } from '@/types/route'
import RouteGuard from '@/components/RouteGuard'
import { omit } from '@/utils'

/**
 * @param {IRouteItem} routes
 * @param {boolean} hasLayout 是否需要布局
 * @date 2021-11-05 15:50:20
 */
const getRoutes = (routes: IRouteItem[], hasLayout: boolean) => {
	return routes.map(r => {
		return {
			...r,
			component: () => {
				const RouteComponent = r.component
				const _r = omit(r, ['component'])
				return (
					// FIXBUG: render 和component不能同时出现,component > render
					<RouteGuard {..._r}>
						{hasLayout ? (
							<Layout>
								<RouteComponent />
							</Layout>
						) : (
							<RouteComponent />
						)}
					</RouteGuard>
				)
			}
		}
	})
}

export const routes = [
	...getRoutes(layoutRoutes, true),
	...getRoutes(noLayoutRoutes, false)
]

const RouterMap: React.FC = () => {
	return (
		<Suspense fallback={<Spin />}>
			<Router>
				<Switch>{renderRoutes(routes)}</Switch>
			</Router>
		</Suspense>
	)
}

export default RouterMap
