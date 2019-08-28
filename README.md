# yukino
![logo@2x.jpeg](https://i.loli.net/2019/08/26/p12idEoYW6j9Bg7.jpg)
## 简介 Introduction
一个React前端脚手架

## 演示地址
http://rain.cocoiii.com

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