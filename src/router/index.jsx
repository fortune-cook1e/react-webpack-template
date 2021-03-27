import React from 'react'
import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'

import HomePage from '@/pages/home'

const Root = ({ route }) => renderRoutes(route.routes)

const routes = [
  {
    component: Root,
    routes: [
      {
        path: '/',
        exact: true,
        title: '首页',
        component: HomePage
      },
      {
        path: '/home',
        exact: true,
        title: '首页',
        component: HomePage
      }
    ]
  }
]

const RouterEntry = () => {
  return (
    <HashRouter>
      {renderRoutes(routes)}
    </HashRouter>
  )
}

export default RouterEntry