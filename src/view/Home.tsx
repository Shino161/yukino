import React, { Component, lazy, Suspense } from "react";
import { Layout, Menu, Skeleton } from 'antd';
import { Link } from "react-router-dom";
const ContentView = lazy(() => import('./ContentView'));
const { Header, Content, Footer } = Layout;

const Home = () => (
  <div className="App">
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
          <Suspense fallback={<Skeleton active />}>
            <ContentView />
          </Suspense>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Yukino Created by Shino161</Footer>
    </Layout>
  </div>
);
export default Home;