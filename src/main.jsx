import React from 'react'
import { render } from 'react-dom'

import App from './App'

import './styles/base.less'

render(
  <App />,
  document.getElementById('app')
)

module.hot.accept()

