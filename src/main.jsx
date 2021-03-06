import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from '@/store'
import App from './App.jsx'

import './styles/base.less'

console.log('test workflow')

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)

