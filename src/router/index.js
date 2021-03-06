import React from 'react'
import { renderRoutes } from 'react-router-config'
import { BrowserRouter as Router } from 'react-router-dom'
import routes from './routes'

const RouterComponent = () => {
  return (
    <Router>
      {renderRoutes(routes)}
    </Router>
  )
}

export default RouterComponent
