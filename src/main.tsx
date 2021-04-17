import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from '@/store'
import Page from './Page'

import './styles/base.less'

render(
  <Provider store={store}>
    <Page />
  </Provider>,
  document.getElementById('app')
)

