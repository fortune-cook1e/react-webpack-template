import React, { Suspense } from 'react'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import Fallback from '@/components/fallback'
import routes from './router'

const App:React.FC = () => {
  return (
    <HashRouter>
      <Suspense fallback={<Fallback />}>
        {renderRoutes(routes)}
      </Suspense>
    </HashRouter>
  )
}

export default App