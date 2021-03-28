import React, { lazy } from 'react'
import { renderRoutes, RouteConfig } from 'react-router-config'

const Home = lazy(() => import('@/pages/home'))
const Login = lazy(() => import('@/pages/login'))

const Root = ({ route }:{route:RouteConfig}) => renderRoutes(route.routes)

export const routes:RouteConfig[] = [
  {
    component: (Root as React.FC),
    routes: [
      {
        path: '/',
        exact: true,
        title: '首页',
        component: Home
      },
      {
        path: '/home',
        exact: true,
        title: '首页',
        component: Home
      },
      {
        page: '/login',
        exact: true,
        title: '登录',
        component: Login
      }
    ]
  }
]

export default routes
