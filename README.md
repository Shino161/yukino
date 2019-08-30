# yukino
![logo@2x.jpeg](https://i.loli.net/2019/08/26/p12idEoYW6j9Bg7.jpg)

![](https://img.shields.io/badge/language-JavaScript-orange.svg)
![](https://img.shields.io/badge/language-TypeScript-blue.svg)
  

## 简介 Introduction
一个 React + Ant-Design 前端脚手架,支持 TypeScript & JavaScript。
+ 使用 Webpack4 打包，构建速度优异 ✨
+ 没有多余的 Node 不必要模块 ✨
+ TS 或者 JS 均可按需引用 Antd 组建

## 演示地址


## 如何使用 How to use it
### 安装运行
```bush
npm i / yarn 
npm run dev / yarn run dev
```

### 测试环境打包
```bush
npm run build:dev / yarn run build:dev
```

### 生产环境打包
```bush
npm run build:prod / yarn run prod:dev
```

## 运行Docker版本
```bush
docker build -t yukino:1
docker run -d --name yukino -p 8099:80 yukino:1
```