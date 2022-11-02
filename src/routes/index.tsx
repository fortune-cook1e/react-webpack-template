import { RouteObject, createHashRouter } from 'react-router-dom'

import DefaultLayout from '@/layout'
import Home from '@/pages/home'
import Login from '@/pages/login'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'login',
        element: <Login />
      }
    ]
  }
]

export const router = createHashRouter(routes)
