import { Spin } from 'antd'
import React, { useEffect, Suspense } from 'react'
import { HashRouter as Router } from 'react-router-dom'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  RouteObject
} from 'react-router-dom'

import { router } from '@/routes'

const App: React.FC = () => {
  useEffect(() => {
    // do sth
  }, [])

  return <RouterProvider router={router} />
}

export default App
