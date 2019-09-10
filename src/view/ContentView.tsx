import React, { Component } from "react";
import { Carousel, Card, Col, Row, Steps, PageHeader, Icon } from 'antd';
const { Meta } = Card;
const { Step } = Steps;
import "./style.css";

class ContentView extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col span={24}>
            <Carousel autoplay >
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
              <div>
                <h3>5</h3>
              </div>
            </Carousel>
          </Col>
        </Row>
        <PageHeader  title="目录结构" subTitle="This is a subtitle" style={{ marginTop: 50 }}/>
        <Row gutter={64}>
          {
            [...Array(4)].map((e, i) =>
              <Col span={6} key={i}>
                <Card
                  hoverable
                  cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />}
                >
                  <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
              </Col>)
          }
        </Row>
        <PageHeader  title="目录结构" subTitle="This is a subtitle" style={{ marginTop: 50 }}/>
        <Row gutter={16}>
          <Steps current={1}>
            <Step title="Finished" description="This is a description." />
            <Step title="In Progress" description="This is a description." subTitle="Left 00:00:08"/>
            <Step title="Waiting" description="This is a description." />
          </Steps>
        </Row>
      </div>
    );
  }
}
export default ContentView;

