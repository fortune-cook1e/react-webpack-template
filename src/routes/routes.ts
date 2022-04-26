import { lazy } from 'react'
import { IRouteItem } from '@/types/route'

export const layoutRoutes: IRouteItem[] = [
	{
		path: '/',
		exact: true,
		auth: false,
		title: '主页',
		component: lazy(() => import('@/pages/home'))
	},
	{
		path: '/user',
		exact: true,
		auth: false,
		title: '用户页',
		component: lazy(() => import('@/pages/user'))
	},
	{
		path: '/home',
		exact: true,
		auth: false,
		title: '主页',
		component: lazy(() => import('@/pages/home'))
	}
]

export const noLayoutRoutes: IRouteItem[] = [
	{
		path: '/login',
		exact: true,
		title: '主页',
		component: lazy(() => import('@/pages/login'))
	},
	{
		path: '/no-permission',
		exact: true,
		title: '主页',
		component: lazy(() => import('@/pages/no-permission'))
	},
	{
		path: '/404',
		title: '主页',
		component: lazy(() => import('@/pages/404'))
	},
	{
		path: '*',
		component: lazy(() => import('@/pages/404'))
	}
]
