import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import { Spin, Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;
import RouterCofig from './router/index'

const App = () => (
  <Router>
    <Layout className="layout" style={{ background: '#fff' }}>
      <Header style={{ backgroundColor: '#fff', textAlign: 'left' }}>
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
          <Menu.Item key="2"><Link to="/about">About</Link></Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div style={{ padding: 24, minHeight: 280 }}>
          <Suspense fallback={<Spin size="large" style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />}>
            <RouterCofig></RouterCofig>
          </Suspense>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Yukino Created by Shino161</Footer>
    </Layout>
  </Router>
);
export default App;