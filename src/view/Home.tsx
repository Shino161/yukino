import React, { Suspense, lazy } from "react";
import { Card, Col, Row, Steps, PageHeader, Icon, Typography, Divider, Skeleton } from 'antd';

const CarouselComp = React.lazy(() => import('./CarouselComp'));
const { Meta } = Card;
const { Step } = Steps;
const { Title, Paragraph, Text } = Typography;

import "./style.less";

const Home = () => (
  <div>
    <Row>
      <Col span={24}>
        <Suspense fallback={<Skeleton active />}>
          <CarouselComp></CarouselComp>  
        </Suspense>
      </Col>
    </Row>
    <PageHeader title="Simple" subTitle="This is a subtitle" style={{ marginTop: 50 }} />
    <Row gutter={64}>
      {
        [...Array(4)].map((e, i) =>
          <Col span={6} key={i}>
            <Card
              hoverable
              cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"/>}
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
          </Col>)
      }
    </Row>
    <Divider />
    <Row>
      <Title>介绍</Title>
      <Paragraph>
        蚂蚁的企业级产品是一个庞大且复杂的体系。这类产品不仅量级巨大且功能复杂，而且变动和并发频繁，常常需要设计与开发能够快速的做出响应。同时这类产品中有存在很多类似的页面以及组件，可以通过抽象得到一些稳定且高复用性的内容。
          </Paragraph>
      <Paragraph>
        随着商业化的趋势，越来越多的企业级产品对更好的用户体验有了进一步的要求。带着这样的一个终极目标，我们（蚂蚁金服体验技术部）经过大量的项目实践和总结，逐步打磨出一个服务于企业级产品的设计体系
            Ant Design。基于<Text mark>『确定』和『自然』</Text>
        的设计价值观，通过模块化的解决方案，降低冗余的生产成本，让设计者专注于
            <Text strong>更好的用户体验</Text>。
          </Paragraph>
      <Title level={2}>设计资源</Title>
      <Paragraph>
        我们提供完善的设计原则、最佳实践和设计资源文件（<Text code>Sketch</Text> 和{' '}
        <Text code>Axure</Text>），来帮助业务快速设计出高质量的产品原型。
          </Paragraph>
    </Row>
    <Divider />
    <PageHeader title="Simple" subTitle="This is a subtitle" style={{ marginTop: 50 }} />
    <Row gutter={16}>
      <Steps current={1}>
        <Step title="Finished" description="This is a description." />
        <Step title="In Progress" description="This is a description." />
        <Step title="Waiting" description="This is a description." />
      </Steps>
    </Row>
  </div>
);
export default Home;