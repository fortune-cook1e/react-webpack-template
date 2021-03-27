import React from 'react'
import RouterEntry from './router'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import moment from 'moment'
moment.locale('zh-cn')

const App = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <RouterEntry />
    </ConfigProvider>
  )
}

export default App