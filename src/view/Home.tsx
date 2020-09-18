import React, { Suspense, lazy } from 'react'
import {
  Col,
  Row,
  Divider,
  Skeleton,
} from 'antd'
import Frame from '../components/frame'
import style from './style.less'
const CarouselComp = React.lazy(() => import('./CarouselComp'))

const Home = () => (
  <Frame>
    <Row>
      <Col span={24}>
        <Suspense fallback={<Skeleton active />}>
          <CarouselComp></CarouselComp>
        </Suspense>
      </Col>
    </Row>
    <Divider />
    <div className={style['draw-border']}>
      <button>Hover me</button>
    </div>
    <div className={style['circle-btn']}>
      <div className={style['btn-container']}>
        <button>Hover me</button>
      </div>
    </div>
    <div className={style['frozen-btn']}>
      <button className={style['green']}>Hover me</button>
      <button className={style['purple']}>
        Hover me
      </button>
    </div>
  </Frame>
)
export default Home
