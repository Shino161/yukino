import React, { Component, lazy, Suspense } from "react";
// import "./App.css";
import { Layout, Menu, Skeleton } from 'antd';
const ContentView = lazy(() => import('./ContentView'));
const { Header, Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout className="layout" style={{ background: '#fff' }}>
          <Header style={{ backgroundColor: '#fff', textAlign: 'left'}}>
            <Menu
              theme="light"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">统计数据1</Menu.Item>
              <Menu.Item key="2">统计数据2</Menu.Item>
              <Menu.Item key="3">统计数据3</Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <div style={{  padding: 24, minHeight: 280 }}>
              <Suspense fallback={<Skeleton active />}>
                <ContentView />
              </Suspense>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Yukino Created by Shino161</Footer>
        </Layout>
      </div>
    );
  }
}

export default App;