import React from 'react'
import { Redirect, Switch, Route } from 'react-router'

import Pages from '@/pages/index'
import NotFound from '@/components/NotFound'
import { menus, MenuItem } from './menus'

type Props = {
  auth:boolean;
}

export const RouteComponent = (props:Props) => {
  const { auth = false } = props

  const requireLogin = (Comp:any) => {
    if (!auth) {
      return <Redirect to='/login' />
    }
    return <Comp />
  }

  const createRoute = (r:MenuItem) => {
    const route = (r:MenuItem) => {
      const Component = r.component && Pages[r.component.toLowerCase()]
      console.log({ r, Pages, Component })
      // TODO: 后续加入lazy load
      return (
        <Route
          key={r.path}
          exact
          path={r.path}
          render={() => {
            const needLogin = r.requireLogin
            // 检查当前路由是否需要登录
            return needLogin ? requireLogin(Component) : <Component />
          }}
        />
      )
    }

    const children = (r:MenuItem) => {
      r?.children && r.children.map((childrenR:MenuItem) => {
        childrenR?.children ? children(childrenR) : route(childrenR)
      })
    }

    return r.component ? route(r) : children(r)
  }

  return (
    <Switch>
      {
        menus.map(createRoute)
      }
      <Route render={() => <NotFound />} />
    </Switch>
  )
}

export default RouteComponent