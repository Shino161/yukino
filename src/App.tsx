import React, { Component, lazy, Suspense } from "react";
import "./App.css";
import { Layout, Menu, Skeleton } from 'antd';
const ContentView = lazy(() => import('./ContentView'));
const { Header, Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout className="layout">
          <Header style={{ backgroundColor: '#fff', textAlign: 'right'}}>
            <Menu
              theme="light"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <div style={{  padding: 24, minHeight: 280 }}>
              <Suspense fallback={<Skeleton active />}>
                <ContentView />
              </Suspense>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </div>
    );
  }
}

export default App;