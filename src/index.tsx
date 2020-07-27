import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ConfigProvider } from 'antd'
import { GlobalProvider } from './components/global-context'
import zhCN from 'antd/es/locale/zh_CN'
import './global.less'
ReactDOM.render(
  <GlobalProvider>
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>
  </GlobalProvider>,
  document.getElementById('root')
)
