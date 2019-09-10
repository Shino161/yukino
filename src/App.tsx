// import React, { Component, lazy, Suspense } from "react";
// import { Layout, Menu, Skeleton } from 'antd';
// import { Link } from "react-router-dom";
// const ContentView = lazy(() => import('./view/ContentView'));
// const { Header, Content, Footer } = Layout;


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Layout className="layout" style={{ background: '#fff' }}>
//           <Header style={{ backgroundColor: '#fff', textAlign: 'left'}}>
//             <Menu
//               theme="light"
//               mode="horizontal"
//               defaultSelectedKeys={['2']}
//               style={{ lineHeight: '64px' }}
//             >
//               <Menu.Item key="1">
//                 {/* <Link to="/">Home</Link> */}
//               </Menu.Item>
//               <Menu.Item key="2">统计数据2</Menu.Item>
//               <Menu.Item key="3">统计数据3</Menu.Item>
//             </Menu>
//           </Header>
//           {/* <Content style={{ padding: '0 50px' }}>
//             <div style={{  padding: 24, minHeight: 280 }}>
//               <Suspense fallback={<Skeleton active />}>
//                 <ContentView />
//               </Suspense>
//             </div>
//           </Content> */}
//           <Footer style={{ textAlign: 'center' }}>Yukino Created by Shino161</Footer>
//         </Layout>
//       </div>
//     );
//   }
// }
// export default App;

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import { Spin } from 'antd';

const Home = lazy(() => import('./view/Home'));
const About = lazy(() => import('./view/About'));

const App = () => (
  <Router>
    <Suspense fallback={<Spin size="large" style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Suspense>
  </Router>
);
export default App;