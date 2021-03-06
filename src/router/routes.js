import { renderRoutes } from 'react-router-config'

import HomePage from '@/pages/home'
import ReduxPage from '@/pages/redux'

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
      },
      {
        path: '/redux',
        exact: true,
        title: 'redux demo',
        component: ReduxPage
      }
    ]
  }
]

export default routes