import { BrowserRouter as Router, Link } from 'react-router-dom'
import React from 'react'
import {  Layout, Menu } from 'antd'
const { Header, Content, Footer } = Layout
const Frame = (props: any) => (
  <Layout className="layout" style={{ background: '#fff' }}>
    <Header style={{ backgroundColor: '#fff', textAlign: 'left' }}>
      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">
          <Link to="/">Some Demo</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/about">ReactHooks</Link>
        </Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>{props.children}</Content>
    <Footer style={{ textAlign: 'center' }}>Yukino Created by Shino161</Footer>
  </Layout>
)
export default Frame
