import React, { Suspense } from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import Fallback from '@/components/fallback'
import App from './App'
import Login from './pages/login'

const Page:React.FC = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path='/' exact render={() => <Redirect to='/app/dashboard' />} />
        <Route path='/app' component={App} />
        <Route path='/login' exact component={Login} />
      </Switch>
    </HashRouter>
  )
}

export default Page